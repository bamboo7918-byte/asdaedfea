/* ================================================================
   continent.js — GeoJSON + Equirectangular Projection + Canvas
   ================================================================ */

const REGION_CONFIG = {
  'east-asia': {
    title: 'East Asia',
    bounds: { minLon: 100, maxLon: 142, minLat: 40, maxLat: 18 }
  },
  'north-america': {
    title: 'North America',
    bounds: { minLon: -100, maxLon: -70, minLat: 45, maxLat: 28 }
  },
  'middle-east': {
    title: 'Middle East',
    bounds: { minLon: 38, maxLon: 58, minLat: 32, maxLat: 22 }
  },
  'west-europe': {
    title: 'West Europe',
    bounds: { minLon: -8, maxLon: 14, minLat: 56, maxLat: 44 }
  },
  'oceania': {
    title: 'Oceania',
    bounds: { minLon: 140, maxLon: 156, minLat: -25, maxLat: -40 }
  }
};

const PIN_RING = 36;
const PIN_RADIUS = 14;
const PIN_HIT = 40;
const PIN_CLEARANCE = 88;
const PIN_MARGIN = 42;

let canvas, ctx;
let currentRegion, currentBounds;
let hoverBuilding = null;
let currentPins = [];

setTimeout(() => {
  const hint = document.querySelector('.hint-text');
  if (hint) hint.classList.add('fade');
}, 5000);

const card     = document.getElementById('bld-card');
const cardName = document.getElementById('card-name');
const cardLoc  = document.getElementById('card-loc');
const cardH    = document.getElementById('card-h');
const cardYr   = document.getElementById('card-yr');
const cardFl   = document.getElementById('card-fl');
const cardImg  = document.getElementById('card-img');
let hideTimer;

function showCard(b, mx, my) {
  clearTimeout(hideTimer);
  cardName.textContent = b.name;
  cardLoc.textContent  = b.city + ', ' + b.country;
  cardH.textContent    = b.height + 'm';
  cardYr.textContent   = b.year;
  cardFl.textContent   = b.floors > 0 ? b.floors : '—';

  const fname = (typeof BUILDING_IMAGES !== 'undefined') ? BUILDING_IMAGES[b.id] : null;
  const folderPath = b.folder || b.name.toUpperCase();
  if (fname) {
    cardImg.src = encodeURIComponent(folderPath) + '/' + encodeURIComponent(fname);
    cardImg.style.display = 'block';
    cardImg.onerror = function() { this.style.display = 'none'; };
  } else {
    cardImg.style.display = 'none';
  }

  const W = window.innerWidth, H = window.innerHeight;
  let left = mx + 18, top = my - 20;
  if (left + 220 > W - 8) left = mx - 228;
  if (top + 260 > H - 8) top = H - 268;
  if (top < 64) top = 64;

  card.style.left = left + 'px';
  card.style.top  = top  + 'px';
  card.classList.add('on');
}

function hideCard() {
  hideTimer = setTimeout(() => card.classList.remove('on'), 80);
}

function project(lon, lat, bounds) {
  const x = (lon - bounds.minLon) / (bounds.maxLon - bounds.minLon) * canvas.width;
  const y = (bounds.minLat - lat) / (bounds.minLat - bounds.maxLat) * canvas.height;
  return { x, y };
}

function drawRing(coords, bounds) {
  let started = false;
  for (const [lon, lat] of coords) {
    if (lon < bounds.minLon - 5 || lon > bounds.maxLon + 5) continue;
    if (lat > bounds.minLat + 5 || lat < bounds.maxLat - 5) continue;
    const { x, y } = project(lon, lat, bounds);
    if (!started) { ctx.moveTo(x, y); started = true; }
    else          { ctx.lineTo(x, y); }
  }
}

function getRegionBuildings(region) {
  return BUILDINGS.filter(b => b.region === region && b.lat && b.lng);
}

const PIN_SLOT_OVERRIDES = {
  'east-asia': {
    'petronas-twin-tower': { x: 0.855, y: 0.80 },
    'merdeka-118':         { x: 0.875, y: 0.88 }
  },
  'north-america': {
    'one-world-trade-center': { x: 0.78, y: 0.28 },
    'empire-state-building':  { x: 0.82, y: 0.18 },
    'chrysler-building':      { x: 0.92, y: 0.22 },
    'one-vanderbilt':         { x: 0.86, y: 0.25 }
  },
  'west-europe': {
    'heron-tower':       { x: 0.32, y: 0.36 },
    'the-shard':         { x: 0.38, y: 0.40 },
    'one-canada-square': { x: 0.30, y: 0.44 }
  }
};

const ISLAND_SHAPES = {
  'east-asia': [
    { type: 'peninsula' }
  ]
};

function getPreferredPinBase(building, region, bounds) {
  const regionOverrides = PIN_SLOT_OVERRIDES[region];
  const slot = regionOverrides && regionOverrides[building.id];
  if (slot) {
    return {
      x: canvas.width * slot.x,
      y: canvas.height * slot.y
    };
  }
  return project(building.lng, building.lat, bounds);
}

function drawIslands(region) {
  const shapes = ISLAND_SHAPES[region];
  if (!shapes) return;
  ctx.save();
  ctx.fillStyle = '#0078BF';
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 0.6;
  ctx.globalAlpha = 0.65;
  const W = canvas.width, H = canvas.height;
  shapes.forEach(s => {
    if (s.type === 'ellipse') {
      ctx.beginPath();
      ctx.ellipse(W * s.cx, H * s.cy, W * s.rx, H * s.ry, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    } else if (s.type === 'uk') {
      // Great Britain — angular polygon
      const uk = [
        [0.278, 0.420], [0.292, 0.408], [0.304, 0.414], [0.316, 0.406],
        [0.330, 0.418], [0.326, 0.432], [0.336, 0.442], [0.330, 0.454],
        [0.340, 0.466], [0.332, 0.478], [0.322, 0.484], [0.314, 0.478],
        [0.306, 0.490], [0.296, 0.486], [0.290, 0.474], [0.282, 0.470],
        [0.274, 0.458], [0.282, 0.446], [0.272, 0.434]
      ];
      ctx.beginPath();
      uk.forEach((p, i) => {
        const x = W * p[0], y = H * p[1];
        if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      });
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Ireland — small angular shape to the west
      const ireland = [
        [0.248, 0.448], [0.258, 0.442], [0.264, 0.454],
        [0.260, 0.468], [0.250, 0.470], [0.244, 0.460]
      ];
      ctx.beginPath();
      ireland.forEach((p, i) => {
        const x = W * p[0], y = H * p[1];
        if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      });
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    } else if (s.type === 'peninsula') {
      // Peninsular Malaysia — angular polygon style matching map
      const peninsula = [
        [0.805, 0.675], [0.792, 0.690], [0.788, 0.712], [0.802, 0.728],
        [0.784, 0.748], [0.778, 0.772], [0.790, 0.796], [0.798, 0.820],
        [0.808, 0.842], [0.814, 0.868], [0.822, 0.890], [0.832, 0.918],
        [0.846, 0.948], [0.868, 0.972], [0.894, 0.968], [0.908, 0.946],
        [0.902, 0.918], [0.892, 0.892], [0.912, 0.872], [0.932, 0.848],
        [0.942, 0.820], [0.936, 0.792], [0.946, 0.766], [0.938, 0.742],
        [0.924, 0.722], [0.932, 0.702], [0.914, 0.684], [0.888, 0.672],
        [0.860, 0.666], [0.834, 0.670], [0.818, 0.668]
      ];
      ctx.beginPath();
      peninsula.forEach((p, i) => {
        const x = W * p[0], y = H * p[1];
        if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      });
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Small satellite island (angular)
      const island = [
        [0.940, 0.872], [0.958, 0.878], [0.972, 0.894],
        [0.968, 0.912], [0.952, 0.920], [0.938, 0.908], [0.934, 0.888]
      ];
      ctx.beginPath();
      island.forEach((p, i) => {
        const x = W * p[0], y = H * p[1];
        if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      });
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }
  });
  ctx.restore();
}
function overlapsAny(candidate, placed) {
  return placed.some(pin => Math.hypot(pin.x - candidate.x, pin.y - candidate.y) < PIN_CLEARANCE);
}

function clampPin(x, y) {
  return {
    x: Math.min(canvas.width - PIN_MARGIN, Math.max(PIN_MARGIN, x)),
    y: Math.min(canvas.height - PIN_MARGIN, Math.max(PIN_MARGIN, y))
  };
}

function resolvePinPosition(base, placed) {
  const offsets = [{ x: 0, y: 0 }];
  const steps = [48, 72, 96, 120, 144, 168];
  steps.forEach(step => {
    offsets.push(
      { x: step, y: 0 }, { x: -step, y: 0 },
      { x: 0, y: -step }, { x: 0, y: step },
      { x: step, y: -step }, { x: step, y: step },
      { x: -step, y: -step }, { x: -step, y: step }
    );
  });

  for (const offset of offsets) {
    const candidate = clampPin(base.x + offset.x, base.y + offset.y);
    if (!overlapsAny(candidate, placed)) return candidate;
  }

  let best = clampPin(base.x, base.y);
  let bestScore = Infinity;
  for (let dx = -180; dx <= 180; dx += 24) {
    for (let dy = -180; dy <= 180; dy += 24) {
      const candidate = clampPin(base.x + dx, base.y + dy);
      const nearest = placed.reduce((min, pin) => {
        const dist = Math.hypot(pin.x - candidate.x, pin.y - candidate.y);
        return Math.min(min, dist);
      }, Infinity);
      const score = Math.max(0, PIN_CLEARANCE - nearest) * 1000 + Math.hypot(dx, dy);
      if (score < bestScore) {
        best = candidate;
        bestScore = score;
      }
    }
  }
  return best;
}

function getPinLayout(region, bounds) {
  const placed = [];
  return getRegionBuildings(region).map(building => {
    const base = getPreferredPinBase(building, region, bounds);
    const pos = resolvePinPosition(base, placed);
    const pin = { building, x: pos.x, y: pos.y };
    placed.push(pin);
    return pin;
  });
}

function getHoveredBuilding(mx, my) {
  for (let i = currentPins.length - 1; i >= 0; i -= 1) {
    const pin = currentPins[i];
    if (Math.hypot(pin.x - mx, pin.y - my) < PIN_HIT) return pin.building;
  }
  return null;
}

function getPinForBuilding(building) {
  return currentPins.find(pin => pin.building.id === building.id) || null;
}
function render(geojson, region, bounds) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle   = '#0078BF';
  ctx.strokeStyle = '#000';
  ctx.lineWidth   = 0.6;
  ctx.globalAlpha = 0.65;

  geojson.features.forEach(feature => {
    if (!feature.geometry) return;
    const geom = feature.geometry;
    const polys = geom.type === 'MultiPolygon' ? geom.coordinates : [geom.coordinates];
    polys.forEach(poly => {
      poly.forEach(ring => {
        ctx.beginPath();
        drawRing(ring, bounds);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      });
    });
  });

  drawIslands(region);

  ctx.globalAlpha = 1;
  currentPins = getPinLayout(region, bounds);

  currentPins.forEach(pin => {
    const isHover = hoverBuilding && pin.building.id === hoverBuilding.id;
    const r = isHover ? 18 : PIN_RADIUS;

    ctx.beginPath();
    ctx.arc(pin.x, pin.y, PIN_RING, 0, Math.PI * 2);
    ctx.strokeStyle = '#0078BF';
    ctx.lineWidth = 1.5;
    ctx.globalAlpha = 0.35;
    ctx.stroke();
    ctx.globalAlpha = 1;

    ctx.beginPath();
    ctx.arc(pin.x, pin.y, r, 0, Math.PI * 2);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.strokeStyle = isHover ? '#fff' : '#0078BF';
    ctx.lineWidth = 3;
    ctx.stroke();
  });

  if (hoverBuilding) {
    const pin = getPinForBuilding(hoverBuilding);
    if (!pin) return;
    const text = hoverBuilding.name + '  ' + hoverBuilding.height + 'm';
    ctx.font = 'bold 11px futura-pt, sans-serif';
    const tw = ctx.measureText(text).width;
    const lx = pin.x - tw / 2;
    const ly = pin.y - 18;

    ctx.fillStyle = 'rgba(0,0,0,0.75)';
    ctx.fillRect(lx - 4, ly - 12, tw + 8, 16);
    ctx.fillStyle = '#fff';
    ctx.fillText(text, lx, ly);
  }
}

async function init() {
  const region = new URLSearchParams(location.search).get('region');
  const cfg = REGION_CONFIG[region];

  if (!cfg) {
    document.getElementById('map-container').innerHTML =
      '<p style="color:#555;font-family:futura-pt,sans-serif;padding:2rem;letter-spacing:.1em;text-transform:uppercase">Region not found.</p>';
    return;
  }

  document.title = cfg.title + ' — SKYSCRAPERS';
  const regionLabel = document.getElementById('region-label');
  if (regionLabel) regionLabel.textContent = cfg.title.toUpperCase();
  currentRegion = region;
  currentBounds = cfg.bounds;

  const container = document.getElementById('map-container');
  canvas = document.createElement('canvas');
  canvas.width = container.offsetWidth;
  canvas.height = container.offsetHeight;
  ctx = canvas.getContext('2d');
  container.appendChild(canvas);

  let geojson;
  try {
    const res = await fetch('https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson');
    geojson = await res.json();
  } catch (e) {
    ctx.fillStyle = '#333';
    ctx.font = '13px futura-pt, sans-serif';
    ctx.fillText('Failed to load map data.', 20, 40);
    return;
  }

  render(geojson, region, cfg.bounds);

  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    const prev = hoverBuilding;
    hoverBuilding = getHoveredBuilding(mx, my);

    if (hoverBuilding) showCard(hoverBuilding, e.clientX, e.clientY);
    else hideCard();

    if ((hoverBuilding && !prev) || (!hoverBuilding && prev) || (hoverBuilding && prev && hoverBuilding.id !== prev.id)) {
      render(geojson, region, cfg.bounds);
    }
  });

  canvas.addEventListener('mouseleave', () => {
    hoverBuilding = null;
    hideCard();
    render(geojson, region, cfg.bounds);
  });

  canvas.addEventListener('click', () => {
    if (hoverBuilding) location.href = 'building.html?id=' + hoverBuilding.id;
  });

  window.addEventListener('resize', () => {
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
    render(geojson, region, cfg.bounds);
  });
}

document.addEventListener('DOMContentLoaded', init);
