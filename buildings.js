/* ================================================================
   SKYSCRAPERS — buildings.js
   Curated draft dataset + shared detailed SVG renderer
   ================================================================ */

const BUILDING_IMAGES = {
  "one-canada-square": "3552d2407c177f12434da3c6d67019e5.jpg",
  "101-collins-street": "367836dac231c933488352c0690f1c6f.jpg",
  "taipei-101": "6575ffcb034cf027512f73dbe40bc010.jpg",
  "eureka-tower": "0f18b87e63bde9e82e3a0d5dd65f504c.jpg",
  "zifeng-tower": "b56b1a275d1a92e56cd0214875ea002e.jpg",
  "burj-khalifa": "68953f3c660d8b1b402e633c52951e74.jpg",
  "al-hamra-tower": "3d74201e3ec70eaf8fd08e7d5f101eba.jpg",
  "heron-tower": "5beb701c30312c60da044dd464c9de88.jpg",
  "lotte-world-tower": "4b5d042cd1635937ada95c7c45dc6139.jpg",
  "shanghai-tower": "dff7164208e3c28ec52f127764116cb8.jpg",
  "empire-state-building": "5b9be864179de4e5170d1148419f0808.jpg",
  "kingdom-centre": "5fe2b33b2434eee09e115e2c8fbf22a3.jpg",
  "the-shard": "600c15ece038f5f19ce7c3ae78c83071.jpg",
  "tokyo-skytree": "0b732ec10c5329ee9e1c3ed5eb5cad21.jpg",
  "willis-tower": "261d02455346811fe4fda49b8e70b4a1.jpg",
  "burj-al-arab": "556a63314b457cfd059439076e800ade.jpg",
  "chrysler-building": "a4c0cba70918b36897294a088463020d.jpg",
  "cn-tower": "2d02e065d7b59447bd61186a49bb0c2d.jpg",
  "marina-101": "0beeddfc0e95d43436119c62e3d3144a.jpg",
  "mecca-royal-clock": "086cbefec102fe36ab1f2f615345a187.jpg",
  "merdeka-118": "1cc2af27a28c41440869756d54290dae.jpg",
  "one-vanderbilt": "385e60e30dba02bb921671fd1b03167b.jpg",
  "one-world-trade-center": "8e81c835a9179e9a78a96256eece27ec.jpg",
  "petronas-twin-tower": "2b7739513afeed2a21948f0e66b1a990.jpg",
  "q1-tower": "08c4a38be7140c974b6a32dc21ddd75b.jpg"
};

const BUILDINGS = [
  {
    "id": "one-canada-square",
    "name": "Canada Square",
    "folder": "ONE CANADA SQUARE",
    "city": "London",
    "country": "United Kingdom",
    "address": "1 Canada Square, Canary Wharf",
    "region": "west-europe",
    "height": 235,
    "heightFt": 771,
    "floors": 50,
    "year": 1991,
    "period": "1988–1991",
    "cost": "£624 million",
    "materials": "Stainless Steel, Glass, Concrete",
    "architect": "César Pelli",
    "firm": "Adamson Associates / Frederick Gibberd Coombes",
    "use": "Office",
    "overview": "One Canada Square was the cornerstone of the Canary Wharf redevelopment and a definitive turning point in British skyscraper history. Architect César Pelli designed the tower to function as a \"lighthouse\" for London’s new financial district. Its most recognizable feature is the pyramidal roof, designed to be a visual waypoint even in London’s notorious fog. The facade, clad in patterned stainless steel, reflects the sky and provides a high-tech contrast to the traditional masonry of the historic City of London.",
    "cultural": "The tower is a physical manifestation of Thatcher-era economic deregulation. It transformed a derelict docklands area into a global financial powerhouse, symbolizing the modernization of the British economy and the shift toward a US-style skyline that prioritized corporate transparency and international prestige.",
    "construction": "The building utilizes a high-strength steel frame, which was an innovation in the UK at the time. To ensure the pyramidal cap was functional as well as aesthetic, it was equipped with a large aircraft warning light that became an iconic part of the skyline. The stainless steel cladding was \"linen-finished\" to prevent glare from blinded pilots or nearby residents while maintaining a brilliant metallic sheen.",
    "effects": "One Canada Square held the title of the UK’s tallest building for 21 years until the completion of The Shard. It successfully anchored the Canary Wharf development, proving that a secondary financial hub could compete with the City of London and permanently altering the city’s economic geography.",
    "lat": 51.5054,
    "lng": -0.0195,
    "images": [
      "3552d2407c177f12434da3c6d67019e5.jpg",
      "a5a86e356a40af183895a21e8d70a204.jpg",
      "con11.jpg",
      "f5c24a4100a5da4523a0b6484dce7a9b.jpg"
    ]
  },
  {
    "id": "101-collins-street",
    "name": "Collins Street",
    "folder": "101 COLLINS STREET",
    "city": "Melbourne",
    "country": "Australia",
    "address": "101 Collins Street, Melbourne",
    "region": "oceania",
    "height": 260,
    "heightFt": 853,
    "floors": 57,
    "year": 1991,
    "period": "1988–1991",
    "cost": "$400 million AUD",
    "materials": "Granite, Glass, 23-carat Gold Leaf",
    "architect": "Denton Corker Marshall",
    "firm": "Denton Corker Marshall / Johnson Burgee",
    "use": "Office",
    "overview": "101 Collins Street is an exercise in Postmodern elegance located at the prestigious end of Melbourne’s most famous street. Designed to mimic the luxury of a grand hotel rather than a standard office block, the building features an opulent lobby and a meticulously sculpted top. Its silhouette, defined by a massive spire and buttressed forms, provides a sense of verticality that made it the most coveted business address in Australia for decades.",
    "cultural": "This tower represents the marriage of Melbourne’s \"European\" heritage with late 20th-century commercial ambition. The use of gold leaf and high-end marble in the lobby was a statement of corporate wealth and architectural sophistication during Australia’s economic boom in the early 90s.",
    "construction": "The structure uses a hybrid reinforced concrete core and steel frame. The lobby was a major collaboration with New York legend Philip Johnson’s firm, ensuring the interior met international luxury standards. The exterior granite was sourced specifically to provide a sense of permanence and civic weight.",
    "effects": "It remains a benchmark for Australian commercial architecture, proving that the ground-level experience (the lobby and plaza) is just as important as the height. It successfully densified the CBD while maintaining the \"Paris end\" of Collins Street’s reputation for refinement.",
    "lat": -37.8142,
    "lng": 144.9718,
    "images": [
      "367836dac231c933488352c0690f1c6f.jpg",
      "75264a88c62751f2d004b9845187f8a8.jpg",
      "con1.jpg",
      "de153521f00834f96eb7d3f2dea686e4.jpg"
    ]
  },
  {
    "id": "taipei-101",
    "name": "Taipei 101",
    "folder": "TAIPEI 101",
    "city": "Taipei",
    "country": "Taiwan",
    "address": "No. 7, Section 5, Xinyi Rd",
    "region": "east-asia",
    "height": 508,
    "heightFt": 1667,
    "floors": 101,
    "year": 2004,
    "period": "1999–2004",
    "cost": "$1.8 billion",
    "materials": "Steel, High-performance Glass, Concrete",
    "architect": "C.Y. Lee",
    "firm": "C.Y. Lee & Partners",
    "use": "Office, Retail, Observation",
    "overview": "Taipei 101 is a masterpiece of biomimicry and cultural symbolism. Its form, composed of eight stacked modules, is inspired by a stalk of bamboo, symbolizing growth and resilience. The design also incorporates elements of traditional Chinese pagodas and \"Ruyi\" symbols for luck. At its completion, it was the first building in the world to break the half-kilometer height barrier, serving as a monument to Taiwan’s technological maturity.",
    "cultural": "The building was a declaration of Taiwan’s presence on the global stage. By integrating ancient motifs into a hyper-modern skyscraper, C.Y. Lee successfully created a design that felt distinctly Eastern in a genre of architecture long dominated by Western aesthetic standards.",
    "construction": "To survive Taiwan's frequent typhoons and earthquakes, engineers installed a 660-ton Tuned Mass Damper (TMD) between the 87th and 92nd floors. This giant golden sphere sways to counteract the building's movement. It is the only TMD in the world open to public viewing, turning a critical engineering component into a major tourist attraction.",
    "effects": "Taipei 101 held the world's tallest title until 2010 and remains a global case study in seismic engineering. Its annual New Year's Eve fireworks display is one of the most televised events in the world, cementing the building's status as a global cultural icon.",
    "lat": 25.0339,
    "lng": 121.5645,
    "images": [
      "6575ffcb034cf027512f73dbe40bc010.jpg",
      "509cd172d9c57140f3bd9827ff5b48dc.jpg",
      "con13.jpg",
      "a8b6f61c87b6d982a6ead92a684666c0.jpg"
    ]
  },
  {
    "id": "eureka-tower",
    "name": "Eureka Tower",
    "folder": "EUREKA TOWER",
    "city": "Melbourne",
    "country": "Australia",
    "address": "7 Riverside Quay, Southbank",
    "region": "oceania",
    "height": 297,
    "heightFt": 975,
    "floors": 91,
    "year": 2006,
    "period": "2002–2006",
    "cost": "$500 million AUD",
    "materials": "Concrete, 24-carat Gold Plated Glass, Aluminum",
    "architect": "Fender Katsalidis",
    "firm": "Fender Katsalidis Architects",
    "use": "Residential",
    "overview": "The Eureka Tower is one of the tallest residential buildings in the world and a literal piece of history written into the skyline. Its design is a tribute to the 1854 Eureka Stockade rebellion. The building’s gold crown represents the gold rush, the red stripe represents the blood spilled during the revolt, and the blue glass with white lines represents the flag flown by the rebels.",
    "cultural": "Few skyscrapers attempt to tell a nationalistic story so directly. Eureka Tower is a tribute to Australian democratic roots, using the luxury medium of a supertall skyscraper to commemorate a working-class struggle. It represents Melbourne’s identity as a city of both history and high-density modern living.",
    "construction": "The building utilizes a massive high-strength concrete core to maintain rigidity for its residents at nearly 300 meters. The top ten floors are clad in glass plated with 24-carat gold, which requires specialized cleaning to maintain its brilliance. It also features a complex water-tank damping system at the summit to reduce wind sway.",
    "effects": "It completely transformed the Southbank district from an industrial area into a high-end residential hub. Its \"Skydeck 88\" is a critical part of Melbourne's tourism infrastructure, offering the highest observation point in the Southern Hemisphere.",
    "lat": -37.8216,
    "lng": 144.9647,
    "images": [
      "0f18b87e63bde9e82e3a0d5dd65f504c.jpg",
      "40ba1cdd4ee96938445624fac69eec4e.jpg",
      "con7.jpg",
      "6466de9574a27e29a133e8bd68dca985.jpg"
    ]
  },
  {
    "id": "zifeng-tower",
    "name": "Zifeng Tower",
    "folder": "ZIFENG TOWER",
    "city": "Nanjing",
    "country": "China",
    "address": "No. 1 Zhongshan North Rd",
    "region": "east-asia",
    "height": 450,
    "heightFt": 1476,
    "floors": 89,
    "year": 2010,
    "period": "2005–2010",
    "cost": "$750 million",
    "materials": "Steel, Glass, Concrete",
    "architect": "Adrian Smith",
    "firm": "Skidmore, Owings & Merrill (SOM)",
    "use": "Mixed-use (Office, Hotel, Retail)",
    "overview": "Zifeng Tower is a vertical landmark that bridges Nanjing’s historic past with its industrial future. Architect Adrian Smith drew inspiration from the local Yangtze River and the scales of the Chinese dragon. The tower features two interlocking triangular masses that rotate as they rise, creating a dynamic sense of movement and providing varied views of the surrounding city and mountains.",
    "cultural": "Nanjing is a city of immense historical importance, and Zifeng Tower was designed to be a modern counterpart to its ancient walls. The rhythmic \"dragon scale\" facade is a subtle nod to Chinese mythology, ensuring the building feels rooted in its specific geographical and cultural location.",
    "construction": "The tower employs an advanced outrigger and belt-truss system to manage seismic and wind loads. The facade is particularly innovative; the glass panels are angled to catch the light at different times of the day, mimicking the shimmering texture of a dragon's skin or the rippling water of the Yangtze.",
    "effects": "At its completion, it was the 7th tallest building in the world. It signaled Nanjing’s emergence as a major player in China’s economic expansion and proved that supertall buildings could maintain a sense of organic, sculptural beauty.",
    "lat": 32.0617,
    "lng": 118.7773,
    "images": [
      "b56b1a275d1a92e56cd0214875ea002e.jpg",
      "caa9d730c58466d9e0d34c21da1bd81e.jpg",
      "con17.jpg",
      "fec40dfe74763fe4425b14a48fff8b76.jpg"
    ]
  },
  {
    "id": "burj-khalifa",
    "name": "Burj Khalifa",
    "folder": "BURJ KHALIFA",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "address": "1 Mohammed bin Rashid Boulevard",
    "region": "middle-east",
    "height": 828,
    "heightFt": 2717,
    "floors": 163,
    "year": 2010,
    "period": "2004–2010",
    "cost": "$1.5 billion",
    "materials": "High-performance Concrete, Steel, Glass, Aluminum",
    "architect": "Adrian Smith",
    "firm": "Skidmore, Owings & Merrill (SOM)",
    "use": "Mixed-use (Residential, Hotel, Office, Observation)",
    "overview": "The Burj Khalifa is the tallest structure ever built by human hands. It is the definitive icon of Neo-Futurism and the \"Vertical City.\" Its Y-shaped floor plan, inspired by the Hymenocallis desert flower, provides structural stability while maximizing views of the Arabian Gulf. It is a self-contained ecosystem housing luxury residences, corporate suites, and the world’s first Armani Hotel.",
    "cultural": "This tower represents Dubai’s strategic pivot from an oil-based economy to a global hub for tourism and finance. It is a monument to human ambition, proving that environmental and engineering limits are merely starting points for 21st-century architecture.",
    "construction": "The primary innovation is the Buttressed Core, a hexagonal central hub supported by three wings that provide immense torsional rigidity. High-performance concrete was pumped to a world-record height of 606 meters. The exterior features a specialized glass system designed to withstand the extreme desert heat and high-altitude winds.",
    "effects": "The Burj Khalifa remains the ultimate benchmark for the CTBUH. It catalyzed the development of Downtown Dubai and became a global symbol of the 21st-century \"Megatall\" era, proving that humanity could build nearly a kilometer into the sky.",
    "lat": 25.1972,
    "lng": 55.2744,
    "images": [
      "68953f3c660d8b1b402e633c52951e74.jpg",
      "9ac579759e09a5e4d6701ea690b53654.jpg",
      "con4.jpg",
      "e73c9a4d907dbf08f112bff7f86922bc.jpg"
    ]
  },
  {
    "id": "al-hamra-tower",
    "name": "Al Hamra",
    "folder": "AL HAMRA TOWER",
    "city": "Kuwait City",
    "country": "Kuwait",
    "address": "Al Shuhada Street, Sharq",
    "region": "middle-east",
    "height": 413,
    "heightFt": 1354,
    "floors": 80,
    "year": 2011,
    "period": "2005–2011",
    "cost": "$500 million",
    "materials": "Concrete, Jura Limestone, Glass",
    "architect": "Gary Haney",
    "firm": "Skidmore, Owings & Merrill (SOM)",
    "use": "Office, Retail",
    "overview": "Al Hamra Tower is a unique example of a skyscraper where the form is dictated by environmental defense. The building appears to be wrapped in a protective stone veil. The south-facing side is a massive, solid limestone wall designed to block the intense Kuwaiti sun, while the north-facing side is open glass to allow for views of the sea. It is one of the tallest asymmetric buildings in the world.",
    "cultural": "The tower's elegant, twisting form is inspired by the traditional robes of the region. It represents Kuwait’s modern identity, sophisticated and globally connected, yet deeply aware of its environmental and cultural heritage.",
    "construction": "It features the world's tallest stone-clad facade, using thousands of Jura limestone panels. Because of its asymmetric design, the building required complex cantilevered structural engineering. The grand lobby features a \"lamella\" structure that is as much an engineering feat as it is a piece of art.",
    "effects": "Al Hamra proved that a \"solid\" skyscraper could be just as iconic as a glass one. It set a new standard for climate-responsive design in the Middle East and became the definitive landmark of the Kuwait City skyline.",
    "lat": 29.3697,
    "lng": 47.9907,
    "images": [
      "3d74201e3ec70eaf8fd08e7d5f101eba.jpg",
      "905b000095176cb3d8e751e06ae16c02.jpg",
      "cons-alhamra.jpg",
      "a5a7b8ba3c5dfd5503b7b31a75348d66.jpg"
    ]
  },
  {
    "id": "heron-tower",
    "name": "Heron Tower",
    "folder": "HERON TOWER",
    "city": "London",
    "country": "United Kingdom",
    "address": "110 Bishopsgate",
    "region": "west-europe",
    "height": 230,
    "heightFt": 755,
    "floors": 46,
    "year": 2011,
    "period": "2007–2011",
    "cost": "£290 million",
    "materials": "Steel, Clear Glass, Stainless Steel",
    "architect": "Lee Polisano",
    "firm": "Kohn Pedersen Fox (KPF)",
    "use": "Office, Restaurant",
    "overview": "Heron Tower (now Salesforce Tower London) was designed with a focus on transparency and social connectivity. The concept of the \"Vertical Village\" is central to its design; the office spaces are organized around three-story atriums that encourage interaction between employees. It was one of the first buildings to challenge the traditional, closed-off nature of London’s financial district architecture.",
    "cultural": "Heron Tower represents a shift in corporate culture toward openness and sustainability. Its high-transparency facade and public-facing amenities (like the massive aquarium in the lobby) signal a desire for buildings to be part of the city’s social fabric rather than just private monoliths.",
    "construction": "The building utilizes an offset core, placing the elevators and service areas on the edge of the floor plate to create large, unobstructed office spaces. The south facade is integrated with a massive solar panel array, one of the largest in the UK, showcasing a commitment to sustainable urban density.",
    "effects": "It successfully integrated high-end dining (such as Duck & Waffle) into the top of a commercial tower, making the building a destination for the general public as well as office workers. It paved the way for the next generation of London's social skyscrapers.",
    "lat": 51.5148,
    "lng": -0.0802,
    "images": [
      "5beb701c30312c60da044dd464c9de88.jpg",
      "35d025b34c897aaa941a1ae9b069d5b3.jpg",
      "con8.jpg",
      "b5dc81d78975445c9a251ca2c94d879a.jpg"
    ]
  },
  {
    "id": "lotte-world-tower",
    "name": "Lotte Tower",
    "folder": "LOTTE WORLD TOWER",
    "city": "Seoul",
    "country": "South Korea",
    "address": "300 Olympic-ro, Songpa-gu",
    "region": "east-asia",
    "height": 555,
    "heightFt": 1821,
    "floors": 123,
    "year": 2017,
    "period": "2010–2016",
    "cost": "$3.3 billion",
    "materials": "High-strength Concrete, Steel Diagrid, Glass",
    "architect": "James von Klemperer",
    "firm": "Kohn Pedersen Fox (KPF)",
    "use": "Mixed-use (Office, Hotel, Residential, Observation)",
    "overview": "Lotte World Tower is a modern interpretation of traditional Korean art. Its tapered, slender form is inspired by the gentle curves of Goryeo celadon ceramics and the elegant stroke of a calligraphy brush. As the tallest building in Korea, it serves as a vertical axis for the city of Seoul, blending ancient aesthetic principles with 21st-century hyper-modernity.",
    "cultural": "The tower is a monument to South Korea’s economic maturity and global cultural influence. By grounding its design in traditional \"lines,\" it provides a sense of cultural continuity in a city that has undergone rapid, often chaotic, modernization.",
    "construction": "The upper portion of the tower features a Diagrid structure, a diamond-shaped steel lattice that supports the building’s weight without the need for internal columns. This allows for completely unobstructed views from the observation deck. It is designed to survive a magnitude 9.0 earthquake and wind speeds up to 80 meters per second.",
    "effects": "Lotte World Tower redefined Seoul’s skyline and became a global symbol of Korea’s engineering prowess. It received LEED Gold certification for its sustainable energy systems, proving that a building of this scale can operate as a self-sustaining ecosystem.",
    "lat": 37.5131,
    "lng": 127.1025,
    "images": [
      "4b5d042cd1635937ada95c7c45dc6139.jpg",
      "9cf40cf8823f0173c2300fbd6b9c260c.jpg",
      "con10.jpg",
      "fc239f2687c362e03bccbba1750e959b.jpg"
    ]
  },
  {
    "id": "shanghai-tower",
    "name": "Shanghai Tower",
    "folder": "SHANGHAI TOWER",
    "city": "Shanghai",
    "country": "China",
    "address": "501 Yincheng Middle Rd",
    "region": "east-asia",
    "height": 632,
    "heightFt": 2073,
    "floors": 128,
    "year": 2015,
    "period": "2008–2015",
    "cost": "$2.4 billion",
    "materials": "Double-skin Glass, Steel, Reinforced Concrete",
    "architect": "Jun Xia",
    "firm": "Gensler",
    "use": "Mixed-use (Office, Hotel, Retail, Observation)",
    "overview": "The Shanghai Tower is the world’s tallest \"green\" building. Its defining feature is its 120-degree twist, which was not just an aesthetic choice but a functional one. The building consists of nine cylindrical buildings stacked on top of each other, all enclosed by an inner and outer glass layer that creates \"sky lobbies\" acting as social hubs and thermal buffers.",
    "cultural": "As the tallest building in China, it represents the country’s emergence as a global leader in sustainable technology. It completes the Lujiazui skyline, standing as a symbol of a transparent, globalized, and future-focused China.",
    "construction": "The 120-degree twist reduces wind loads by 24%, which saved $58 million in structural steel costs. The \"double-skin\" facade acts like a thermos, significantly reducing the energy needed for heating and cooling. It also features 270 wind turbines at the summit that provide power for the building’s external lighting.",
    "effects": "It set a new global standard for LEED Platinum skyscrapers. Its sky lobbies proved that social spaces could exist at extreme heights, redefining the \"vertical city\" as a place of community rather than just corporate isolation.",
    "lat": 31.2336,
    "lng": 121.5055,
    "images": [
      "dff7164208e3c28ec52f127764116cb8.jpg",
      "02e7b294645cb2fc951d4c126ffeecbf.jpg",
      "con12.jpg",
      "1921888844fe2f5b345c164f5d1425fd.jpg"
    ]
  },
  {
    "id": "empire-state-building",
    "name": "Empire State",
    "folder": "EMPIRE STATE BUILDING",
    "city": "New York City",
    "country": "United States",
    "address": "20 W 34th St, Manhattan",
    "region": "north-america",
    "height": 381,
    "heightFt": 1250,
    "floors": 102,
    "year": 1931,
    "period": "1930–1931",
    "cost": "$41 million",
    "materials": "Steel Frame, Indiana Limestone, Granite, Aluminum",
    "architect": "Shreve, Lamb & Harmon",
    "firm": "Starrett Bros. & Eken",
    "use": "Office, Observation",
    "overview": "The Empire State Building is the definitive symbol of the 20th century skyscraper. Emerging during the Great Depression, its stepped back silhouette was a direct response to the 1916 Zoning Resolution, which required buildings to set back as they rose to allow sunlight to reach the streets. Its Art Deco aesthetic, characterized by geometric rigor and vertical emphasis, remains the gold standard for high rise corporate identity.",
    "cultural": "Completed during a fierce race to the sky in Manhattan, it stood as the world’s tallest building for 40 years. It serves as a monument to American resilience and industrial might, symbolizing New York City’s status as the unofficial capital of the modern world.",
    "construction": "The speed of construction remains a legendary feat of logistics, with the frame rising at a rate of 4.5 floors per week. It utilizes a riveted steel frame clad in 200,000 cubic feet of Indiana limestone. The mooring mast at the top was originally intended for dirigibles, though it now serves as a high tech broadcast antenna.",
    "effects": "It proved that a massive supertall could be built with incredible speed and efficiency. It remains one of the most profitable and recognizable pieces of real estate on Earth, setting the template for the commercial observation deck as a primary revenue stream for skyscrapers.",
    "lat": 40.7484,
    "lng": -73.9857,
    "images": [
      "5b9be864179de4e5170d1148419f0808.jpg",
      "696e8fc408a60848032ff223db73de96.jpg",
      "con6.jpg",
      "bc44727e286043d58a1dcbd3c12624f1.jpg"
    ]
  },
  {
    "id": "kingdom-centre",
    "name": "Kingdom Centre",
    "folder": "KINGDOM CENTRE",
    "city": "Riyadh",
    "country": "Saudi Arabia",
    "address": "King Fahd Rd, Al Olaya",
    "region": "middle-east",
    "height": 302,
    "heightFt": 992,
    "floors": 41,
    "year": 2002,
    "period": "1999–2002",
    "cost": "$450 million",
    "materials": "Silver Reflective Glass, Steel, Concrete",
    "architect": "Ellerbe Becket",
    "firm": "Omrania & Associates",
    "use": "Mixed-use (Retail, Office, Hotel)",
    "overview": "The Kingdom Centre is famous for its massive parabolic opening at the top, crossed by a 65 meter glass Sky Bridge. This void was a clever architectural response to local building regulations that limited occupied floors, allowing the building to achieve iconic height and status while remaining within legal limits. Its shimmering silver skin acts as a mirror to the desert sun, changing color throughout the day.",
    "cultural": "As a landmark of Saudi Arabian modernization, it incorporates traditional Islamic geometry into a sleek, ultra modern aesthetic. It houses a women only floor, reflecting specific social norms of Saudi Arabia at the time of its completion while pushing the boundaries of regional architecture.",
    "construction": "The building is a hybrid structure with a reinforced concrete lower half and a steel framed upper half. The 300 ton Sky Bridge was lifted into place as a single pre assembled unit. Its silver glass skin manages extreme desert heat by reflecting over 90% of solar radiation, significantly reducing the energy required for cooling.",
    "effects": "It redefined Riyadh’s skyline and proved that negative space could be just as iconic as the building’s mass. It remains the most recognizable symbol of Saudi Arabia’s architectural ambition and its transition toward a globalized, diversified economy.",
    "lat": 24.7745,
    "lng": 46.6753,
    "images": [
      "5fe2b33b2434eee09e115e2c8fbf22a3.jpg",
      "c51a1b9f1d423e9616d21b72b60f0d52.jpg",
      "con9.jpg",
      "deb1e3f02f98e25a32d51a5e825d1d25.jpg"
    ]
  },
  {
    "id": "the-shard",
    "name": "The Shard",
    "folder": "THE SHARD",
    "city": "London",
    "country": "United Kingdom",
    "address": "32 London Bridge St",
    "region": "west-europe",
    "height": 310,
    "heightFt": 1016,
    "floors": 72,
    "year": 2012,
    "period": "2009–2012",
    "cost": "$600 million",
    "materials": "Extra White Glass, Steel, Concrete",
    "architect": "Renzo Piano",
    "firm": "Renzo Piano Building Workshop",
    "use": "Mixed-use (Office, Hotel, Residential)",
    "overview": "Designed by Pritzker winner Renzo Piano, The Shard is an irregular pyramidal tower envisioned as a Vertical City. Its form is inspired by London’s historic church spires and ship masts. The fractured top, where the glass shards do not touch, allows the building to breathe and dissolve into the ever changing London sky, emphasizing transparency over monolithic weight.",
    "cultural": "The Shard was a polarizing addition to London, criticized for overwhelming historic landmarks like St. Paul’s Cathedral. However, it has become a symbol of 21st century London, international and transparent, successfully revitalizing the South Bank and shifting the city’s architectural gravity.",
    "construction": "Engineers used Top Down Construction to meet the Olympic deadline, a first for a core of this height in the UK. This allowed the core to be built upward while the basement was still being excavated downward. The building is a hybrid structure, using concrete for stability in the lower floors and steel for flexibility in the upper reaches.",
    "effects": "The Shard proved that a skyscraper could be integrated into a high density transit hub at London Bridge Station. It is now the most recognizable silhouette in the UK, proving that verticality can coexist with history when executed with high quality materials and thoughtful design.",
    "lat": 51.5045,
    "lng": -0.0865,
    "images": [
      "600c15ece038f5f19ce7c3ae78c83071.jpg",
      "7f526cb76e748cc53c4eeddc371abddc.jpg",
      "con14.jpg",
      "ebd2dcdc7c2c4da5dd6ac10d906352f2.jpg"
    ]
  },
  {
    "id": "tokyo-skytree",
    "name": "Tokyo Skytree",
    "folder": "TOKYO SKYTREE",
    "city": "Tokyo",
    "country": "Japan",
    "address": "1-1-2 Oshiage, Sumida City",
    "region": "east-asia",
    "height": 634,
    "heightFt": 2080,
    "floors": 29,
    "year": 2012,
    "period": "2008–2012",
    "cost": "$800 million",
    "materials": "High Strength Steel Tubes, Reinforced Concrete Core",
    "architect": "Nikken Sekkei",
    "firm": "Nikken Sekkei, Obayashi Corp",
    "use": "Broadcasting, Observation",
    "overview": "Tokyo Skytree is the tallest free standing tower in the world. Its design utilizes a fusion of futuristic aesthetics and ancient Japanese geometry, transitioning from a triangular base representing stability to a circular top representing fluidity. It represents Neo Futurism, where high tech infrastructure meets deep historical roots to solve urban communication challenges in a high density environment.",
    "cultural": "The height of 634m represents Musashi, the ancient name of the region. The color, Skytree White, is based on Aijiro, the lightest shade of traditional indigo. It is designed to be a tower that transcends time, honoring Japan’s craftsmanship heritage while securing its digital future.",
    "construction": "Engineers utilized Shinbashira seiso (Center Column Vibration Control), mimicking the central pillar of 8th century pagodas. The concrete core is separate from the steel frame; they sway at different frequencies during earthquakes, canceling out up to 50% of the seismic energy. This fusion of ancient wisdom and modern damping technology is a landmark in seismic engineering.",
    "effects": "The Skytree successfully revitalized the Sumida district, shifting Tokyo’s tourism focus toward the east. It remains a critical piece of national infrastructure, ensuring reliable digital communication during disasters and proving that ancient architectural wisdom can solve 21st century problems.",
    "lat": 35.7101,
    "lng": 139.8107,
    "images": [
      "0b732ec10c5329ee9e1c3ed5eb5cad21.jpg",
      "34004f0ec5c994bd0abac346b6cc62ef.jpg",
      "con15.jpg",
      "bf541d384538dd9b8e5e0c60905d7080.jpg"
    ]
  },
  {
    "id": "willis-tower",
    "name": "Willis Tower",
    "folder": "WILLIS TOWER",
    "city": "Chicago",
    "country": "United States",
    "address": "233 S Wacker Dr",
    "region": "north-america",
    "height": 442,
    "heightFt": 1450,
    "floors": 108,
    "year": 1974,
    "period": "1970–1974",
    "cost": "$150 million",
    "materials": "Steel Frame, Black Aluminum, Bronze Tinted Glass",
    "architect": "Bruce Graham",
    "firm": "Skidmore, Owings & Merrill (SOM)",
    "use": "Office, Observation",
    "overview": "Formerly known as the Sears Tower, this building is the definitive monument to structural rationalism. Its form was dictated entirely by the revolutionary bundled tube structural system developed by engineer Fazlur Rahman Khan. This innovation allowed for much higher structures with less steel, creating a stepped silhouette that became an instant icon of American modernism.",
    "cultural": "The Willis Tower is the heart of Chicago’s identity as the birthplace of the skyscraper. It represents the peak of American mid century modernism and the power of Chicago as a global center of trade, engineering, and architectural innovation.",
    "construction": "Engineer Fazlur Rahman Khan grouped nine separate steel tubes into one giant square. These tubes terminate at different heights, which reduces wind sway by breaking up wind vortices and creates the iconic stepped appearance. This design allowed for larger, column free office spaces, maximizing functional efficiency for corporate tenants.",
    "effects": "The bundled tube system is the ancestor of almost every modern supertall building today, including the Burj Khalifa. It proved that engineering and aesthetics could be perfectly unified, setting a standard for structural efficiency that is still studied by architects and engineers worldwide.",
    "lat": 41.8789,
    "lng": -87.6359,
    "images": [
      "261d02455346811fe4fda49b8e70b4a1.jpg",
      "39137f5a059cf5d1ce4413484bbb1b3c.jpg",
      "con16.jpg",
      "791023e92ce389ed612641182765e513.jpg"
    ]
  },
  {
    "id": "burj-al-arab",
    "name": "Burj Arab",
    "folder": "BURJ AL ARAB",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "address": "Jumeirah St, Umm Suqeim 3",
    "region": "middle-east",
    "height": 321,
    "heightFt": 1053,
    "floors": 56,
    "year": 1999,
    "period": "1994–1999",
    "cost": "$1 billion",
    "materials": "Steel, Reinforced Concrete, Teflon-coated Fiberglass",
    "architect": "Tom Wright",
    "firm": "Atkins",
    "use": "Hotel",
    "overview": "The Burj Al Arab is a landmark of luxury hospitality, designed in the silhouette of a billowing dhow sail to honor Dubai’s seafaring heritage. Standing on its own artificial island connected to the mainland by a private causeway, the hotel rises as a singular sculptural gesture above the Arabian Gulf. The two wings of the V-shaped exoskeleton form a vast atrium enclosed by a sail-like fabric facade, creating one of the most theatrical interior volumes ever built for a hotel.",
    "cultural": "Burj Al Arab announced Dubai’s ambition to become a global symbol of opulence well before the supertall era began. Its self-styled \"seven-star\" service model, gold-leafed interiors, and exclusive island position transformed the hotel into a cultural shorthand for Emirati luxury and the city’s post-oil tourism economy.",
    "construction": "Engineers reclaimed the artificial island first, driving 250 forty-meter concrete piles into the seabed and armoring the perimeter with rock to resist wave action. The exoskeleton is a steel diagonal truss system that carries lateral wind loads, allowing the interior atrium to remain column-free. The double-layer Teflon-coated woven fiberglass screen acts as a translucent sail, glowing from within at night and reflecting the desert sun by day.",
    "effects": "The hotel set a new global benchmark for ultra-luxury hospitality and proved that bold sculptural form could function as a city’s primary brand. It launched Dubai’s reputation as a destination capable of producing record-setting architectural icons and paved the way for the Palm Jumeirah and Burj Khalifa.",
    "lat": 25.1413,
    "lng": 55.1853,
    "images": [
      "556a63314b457cfd059439076e800ade.jpg",
      "dc4421d3f33dfa06b593182179bc0e81.jpg",
      "con3.jpg",
      "f24bcca943444b1504eeef57785c9c83.jpg"
    ]
  },
  {
    "id": "chrysler-building",
    "name": "Chrysler Building",
    "folder": "CHRYSLER BUILDING",
    "city": "New York City",
    "country": "United States",
    "address": "405 Lexington Ave, Manhattan",
    "region": "north-america",
    "height": 319,
    "heightFt": 1046,
    "floors": 77,
    "year": 1930,
    "period": "1928–1930",
    "cost": "$20 million",
    "materials": "Steel Frame, Brick, Nirosta Stainless Steel",
    "architect": "William Van Alen",
    "firm": "William Van Alen Architect",
    "use": "Office",
    "overview": "The Chrysler Building is the definitive masterpiece of American Art Deco. Commissioned by automaker Walter P. Chrysler, it celebrates the machine age through ornament drawn directly from automotive design, eagle gargoyles modeled after radiator caps, hubcap friezes, and a stainless-steel crown of overlapping arches and triangular windows. The terraced spire was secretly assembled inside the tower and hoisted into place to claim the title of the world’s tallest building, briefly defeating its rival at 40 Wall Street.",
    "cultural": "The tower captured the optimism and mechanical romance of late-1920s America. As a corporate monument funded personally by Chrysler rather than the company, it represents the era’s belief in the industrialist as cultural patron and remains the most beloved skyscraper in New York for its ornamental refinement and unmistakable silhouette.",
    "construction": "The riveted steel frame was clad in white and dark grey brick, with the upper crown finished entirely in Nirosta, a then-new German stainless steel chosen for its resistance to corrosion. The 56-meter spire was constructed in five sections inside the building’s fire shaft and lifted into place over ninety minutes, an engineering stunt designed to surprise the press and overtake the height of 40 Wall Street.",
    "effects": "The Chrysler Building held the world’s tallest title for only eleven months before the Empire State Building overtook it, but its design influence has proven permanent. It remains the canonical reference for Art Deco architecture and one of the most photographed structures in the world.",
    "lat": 40.7516,
    "lng": -73.9755,
    "images": [
      "a4c0cba70918b36897294a088463020d.jpg",
      "eec9cb0229f616f6638836236bb300f8.jpg",
      "cons-crys.jpg",
      "fa48ad5303b76b42fec1f33737d6e4a7.jpg"
    ]
  },
  {
    "id": "cn-tower",
    "name": "CN Tower",
    "folder": "CN TOWER",
    "city": "Toronto",
    "country": "Canada",
    "address": "290 Bremner Blvd",
    "region": "north-america",
    "height": 553,
    "heightFt": 1815,
    "floors": 0,
    "year": 1976,
    "period": "1973–1976",
    "cost": "$63 million CAD",
    "materials": "Post-tensioned Reinforced Concrete, Steel",
    "architect": "John Andrews, WZMH Architects",
    "firm": "Canadian National Railway",
    "use": "Broadcasting, Observation",
    "overview": "The CN Tower was built by Canadian National Railway to solve a critical communications problem, Toronto’s rapidly growing skyline was disrupting microwave reception for the city’s broadcasters. Rather than a conventional lattice mast, the design team produced a hyperboloid concrete shaft topped by a seven-story SkyPod and a 102-meter steel antenna mast, creating one of the most recognizable freestanding structures of the twentieth century.",
    "cultural": "For more than three decades the CN Tower stood as the tallest freestanding structure on Earth and became Canada’s premier civic symbol. Its observation decks, rotating restaurant, and glass floor turned a piece of telecommunications infrastructure into a defining tourist destination and a permanent emblem of Toronto’s post-industrial identity.",
    "construction": "The Y-shaped hollow concrete core was slip-formed continuously around the clock, rising at roughly six meters per day for eight months. A massive Sikorsky helicopter named Olga lifted the steel antenna into place in 55 sections, completing the structure ahead of schedule. The tower is engineered to withstand Toronto’s lake-driven wind loads and a 1-in-2,000-year earthquake event.",
    "effects": "The CN Tower held the world’s tallest freestanding structure title for 32 years until the completion of the Burj Khalifa. It anchored the redevelopment of Toronto’s rail-yard waterfront and demonstrated that purely infrastructural projects could become enduring civic icons.",
    "lat": 43.6426,
    "lng": -79.3871,
    "images": [
      "2d02e065d7b59447bd61186a49bb0c2d.jpg",
      "75deb25eba6e39285230f90d6c82d53e.jpg",
      "con5.jpg",
      "adf923cb1c57e203d76e0b0bc4896040.jpg"
    ]
  },
  {
    "id": "marina-101",
    "name": "Marina 101",
    "folder": "MARINA 101",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "address": "Sheikh Zayed Rd, Dubai Marina",
    "region": "middle-east",
    "height": 425,
    "heightFt": 1394,
    "floors": 101,
    "year": 2017,
    "period": "2006–2017",
    "cost": "$362 million",
    "materials": "Reinforced Concrete, Glass, Aluminum",
    "architect": "National Engineering Bureau",
    "firm": "National Engineering Bureau",
    "use": "Mixed-use (Hotel, Residential)",
    "overview": "Marina 101 is the second-tallest building in Dubai and one of the tallest predominantly residential towers in the world. Rising at the entrance to Dubai Marina, the slender white shaft tapers into a stepped, cantilevered crown topped by a slim spire. The lower levels host a Hard Rock Hotel while the upper floors are reserved for serviced apartments and private residences with panoramic Gulf views.",
    "cultural": "The tower represents Dubai’s shift from singular megaproject icons toward dense, vertically stacked communities. As an anchor of the Marina district, it crystallizes the city’s commitment to high-rise residential living as a lifestyle product and an export-grade architectural identity.",
    "construction": "Construction stalled multiple times during the 2008 financial crisis and resumed under restructured financing, eventually requiring eleven years to top out. The high-strength concrete core is paired with outrigger walls to control sway in a coastal site exposed to strong onshore winds, and the slim profile relied on careful wind-tunnel tuning to keep occupant comfort within residential limits.",
    "effects": "Marina 101 became the centerpiece of the Dubai Marina skyline and demonstrated that supertall residential towers can be financially viable even after a major downturn. Its long, troubled construction also became a case study in how regional developers manage liquidity risk on landmark projects.",
    "lat": 25.0867,
    "lng": 55.1466,
    "images": [
      "0beeddfc0e95d43436119c62e3d3144a.jpg",
      "1d67cdab605d4bb6656f0ac59179a4d3.jpg",
      "cons-marina.jpg",
      "968ef843daca0cdfa9be9e8915a4510b.jpg"
    ]
  },
  {
    "id": "mecca-royal-clock",
    "name": "Mecca Clock",
    "folder": "MECCA ROYAL CLOCK",
    "city": "Mecca",
    "country": "Saudi Arabia",
    "address": "King Abdul Aziz Endowment, Ajyad",
    "region": "middle-east",
    "height": 601,
    "heightFt": 1972,
    "floors": 120,
    "year": 2012,
    "period": "2004–2012",
    "cost": "$15 billion",
    "materials": "Reinforced Concrete, Steel, Limestone, Glass-Mosaic",
    "architect": "Mohammad Al-Shaibani, Dar Al-Handasah",
    "firm": "Saudi Binladin Group",
    "use": "Mixed-use (Hotel, Residential, Religious Facilities)",
    "overview": "The Mecca Royal Clock Tower is the centerpiece of the Abraj Al-Bait complex, built directly opposite the Masjid al-Haram to serve the millions of pilgrims who arrive for Hajj each year. Its four clock faces, each 43 meters in diameter, are the largest in the world, while a gilded crescent crowns a 45-meter spire. The tower fuses Islamic geometric ornament with the scale of a modern megatall, functioning simultaneously as hotel, prayer space, and timekeeper for the Muslim world.",
    "cultural": "The tower projects Saudi Arabia’s stewardship of Islam’s holiest city onto a global scale. Standing the equivalent of nearly two Eiffel Towers tall, its illuminated clock face is broadcast during Ramadan to mark the beginning and end of the daily fast, making the building a piece of religious infrastructure as much as architectural icon.",
    "construction": "The complex required the controversial demolition of the Ottoman-era Ajyad Fortress and surrounding hillside to clear the site. Engineers used a deep raft foundation with steel-reinforced concrete piles to anchor the megatall on cleared bedrock, and the four clock faces were assembled from millions of glass-mosaic tiles installed by abseiling crews. A fiber-optic illumination system lights the dial visible from up to 30 kilometers away.",
    "effects": "Upon completion the tower became the third-tallest building in the world and the tallest clock tower ever built. It transformed the urban scale of Mecca, drew sharp criticism for its impact on the city’s Ottoman heritage, and remains the most-photographed Saudi landmark after the Kaaba itself.",
    "lat": 21.4189,
    "lng": 39.8262,
    "images": [
      "086cbefec102fe36ab1f2f615345a187.jpg",
      "6c07c35335528e8aff09176a4a0f10a4.jpg",
      "cons-mecca.jpg",
      "e73c5c82096369abd86b1c2e78db47d1.jpg"
    ]
  },
  {
    "id": "merdeka-118",
    "name": "Merdeka 118",
    "folder": "MERDEKA 118",
    "city": "Kuala Lumpur",
    "country": "Malaysia",
    "address": "Jalan Hang Jebat, Bukit Bintang",
    "region": "east-asia",
    "height": 678,
    "heightFt": 2227,
    "floors": 118,
    "year": 2023,
    "period": "2014–2023",
    "cost": "$1.5 billion",
    "materials": "High-strength Concrete, Steel, Faceted Glass",
    "architect": "Fender Katsalidis",
    "firm": "Fender Katsalidis / RSP Architects",
    "use": "Mixed-use (Office, Hotel, Residential, Observation)",
    "overview": "Merdeka 118 is the tallest building in Southeast Asia and the second tallest in the world. Its faceted glass facade is composed of triangular panes that fragment the sky into a mosaic of reflections, a form derived from the silhouette of Tunku Abdul Rahman raising his hand to declare Malaysian independence. The tower rises directly beside Stadium Merdeka, where that 1957 declaration was made, anchoring a new cultural district to a foundational moment in national history.",
    "cultural": "The name Merdeka, meaning \"independence,\" is deliberately chosen to position the building as a national symbol rather than a commercial trophy. Its silhouette and proximity to the historic stadium make it an architectural commemoration of sovereignty, completed in time for Malaysia’s economic repositioning as a regional finance and tourism hub.",
    "construction": "The tower sits on a 4.5-meter-thick concrete raft poured in a single 36-hour operation, one of the largest continuous concrete pours ever performed in Asia. The high-strength concrete core was paired with perimeter mega-columns and outrigger trusses to manage sway in a tropical wind regime, and the diamond-faceted facade required custom triangular cladding modules to maintain the building’s sculpted profile across more than 75,000 panels.",
    "effects": "Merdeka 118 surpassed the Petronas Twin Towers as the new defining icon of Kuala Lumpur and pushed Malaysia back into the global supertall conversation for the first time since 1998. The integrated mosque, museum, and observation deck make it the most visited tourist landmark in the country.",
    "lat": 3.1416,
    "lng": 101.7012,
    "images": [
      "1cc2af27a28c41440869756d54290dae.jpg",
      "201d12f7374b0580098e1713b5c1cf1e.jpg",
      "cons-merdeka.jpg",
      "9537dd3b0d112b11c83652b482783067.jpg"
    ]
  },
  {
    "id": "one-vanderbilt",
    "name": "One Vanderbilt",
    "folder": "ONE VANDERBILT",
    "city": "New York City",
    "country": "United States",
    "address": "1 Vanderbilt Ave, Manhattan",
    "region": "north-america",
    "height": 427,
    "heightFt": 1401,
    "floors": 73,
    "year": 2020,
    "period": "2016–2020",
    "cost": "$3.3 billion",
    "materials": "Steel, High-performance Glass, Terracotta",
    "architect": "James von Klemperer",
    "firm": "Kohn Pedersen Fox (KPF)",
    "use": "Office, Observation",
    "overview": "One Vanderbilt is a tapered glass tower designed in dialogue with Grand Central Terminal directly across 42nd Street. The form steps back four times as it rises, with each setback aligned to important sightlines from the historic terminal and the Chrysler Building. The base is sculpted to lift open above Vanderbilt Avenue, creating a new public hall that connects directly into the Grand Central concourse and the regional rail network.",
    "cultural": "The tower represents a new model for Manhattan supertall development that links private office capacity to public transit infrastructure. Developer SL Green funded $220 million in transit improvements as part of the rezoning agreement, signaling a shift toward skyscrapers that are partly justified through their contribution to the city’s public realm.",
    "construction": "The structural system pairs a reinforced concrete core with steel framing to maximize column-free office floors of up to 30,000 square feet. The tapered facade required custom-curved glass and terracotta panels at each setback, and excavation directly above active subway tunnels demanded continuous monitoring and reinforcement of Grand Central’s historic train hall to keep service running throughout construction.",
    "effects": "One Vanderbilt became the fourth-tallest building in New York and re-anchored Midtown East’s identity as a premier business district. Its Summit observation experience proved that an elevated, immersive art-driven attraction could rival the Empire State and One World Observatory as a tourist destination.",
    "lat": 40.7536,
    "lng": -73.9786,
    "images": [
      "385e60e30dba02bb921671fd1b03167b.jpg",
      "64793fb9acafa6165eaede61ce25be03.jpg",
      "cons-one vander.jpg",
      "b5b51198229f5c6aa1b7b945c022316f.jpg"
    ]
  },
  {
    "id": "one-world-trade-center",
    "name": "World Trade",
    "folder": "ONE WORLD TRADE CENTER",
    "city": "New York City",
    "country": "United States",
    "address": "285 Fulton St, Manhattan",
    "region": "north-america",
    "height": 541,
    "heightFt": 1776,
    "floors": 94,
    "year": 2014,
    "period": "2006–2014",
    "cost": "$3.9 billion",
    "materials": "Reinforced Concrete, Steel, High-performance Glass",
    "architect": "David Childs",
    "firm": "Skidmore, Owings & Merrill (SOM)",
    "use": "Office, Observation, Broadcasting",
    "overview": "One World Trade Center rises on the northwest corner of the original World Trade Center site as the centerpiece of Lower Manhattan’s post-9/11 reconstruction. The tower begins as a 200-foot fortified concrete cube, then transitions into eight tall isosceles triangles that rotate as they rise, producing a pure octagon at the midpoint and squaring off again at the parapet. A 124-meter mast on the roof brings the symbolic height to 1,776 feet, the year of American independence.",
    "cultural": "The building is one of the most charged works of architecture in modern American history. Designed under intense public scrutiny in the aftermath of the 2001 attacks, it functions simultaneously as an office tower, a broadcast antenna, and a national memorial gesture, paired with the adjacent reflecting pools that mark the footprints of the original Twin Towers.",
    "construction": "The tower’s lower levels are encased in blast-resistant reinforced concrete walls more than a meter thick to meet new federal anti-terror standards. The structural core uses 14,000-psi high-strength concrete, then among the strongest ever used in a commercial building, and life-safety systems include extra-wide pressurized stairs, redundant risers, and a dedicated firefighter elevator served by its own protected shaft.",
    "effects": "One World Trade Center became the tallest building in the Western Hemisphere and a defining symbol of New York’s recovery. Its completion catalyzed the broader rebuild of Lower Manhattan, including the Oculus transit hub, the 9/11 Memorial Museum, and a new generation of residential supertalls in Tribeca and the Financial District.",
    "lat": 40.7127,
    "lng": -74.0134,
    "images": [
      "8e81c835a9179e9a78a96256eece27ec.jpg",
      "pexels-photo-12810089sdsef.jpeg",
      "cons-one world trade.jpg",
      "c67b3cb0c196c656f4f5cc721462934c.jpg"
    ]
  },
  {
    "id": "petronas-twin-tower",
    "name": "Petronas Towers",
    "folder": "PETRONAS TWIN TOWER",
    "city": "Kuala Lumpur",
    "country": "Malaysia",
    "address": "Lower Ground Floor, Kuala Lumpur City Centre",
    "region": "east-asia",
    "height": 452,
    "heightFt": 1483,
    "floors": 88,
    "year": 1998,
    "period": "1993–1998",
    "cost": "$1.6 billion",
    "materials": "Reinforced Concrete, Stainless Steel, Vision Glass",
    "architect": "César Pelli",
    "firm": "Pelli Clarke Pelli Architects",
    "use": "Office, Retail",
    "overview": "The Petronas Twin Towers are the world’s tallest twin structures and the project that announced Southeast Asia’s arrival on the global skyscraper stage. Each tower rises as an eight-pointed star plan derived from Islamic geometric tradition, rendered in stainless steel and reflective glass and crowned with a slender pinnacle. A two-story sky bridge links the towers at the 41st and 42nd floors, both as a structural connector and as an emergency evacuation route.",
    "cultural": "Commissioned by then-Prime Minister Mahathir Mohamad as the cornerstone of a national modernization program, the towers translate the geometry of Malaysian Islamic architecture into a hyper-modern corporate form. They became the defining image of Kuala Lumpur and the most visible symbol of Malaysia’s 1990s economic boom and Asian Tiger ambitions.",
    "construction": "Bedrock at the site sits more than 100 meters below grade, requiring the deepest building foundations ever excavated at the time. Engineers poured a 4.5-meter concrete raft on top of 104 barrette piles for each tower. The high-strength concrete superstructure was chosen over steel partly to use locally available materials, and the bridge was assembled on the ground and lifted into place over three days as a single articulated unit free to slide as the towers sway.",
    "effects": "Upon completion the towers became the tallest buildings in the world, ending North American dominance over the height race for the first time since the Eiffel Tower era. They appeared in films, drove a tourism boom around the KLCC district, and remained the world’s tallest until the Taipei 101 was completed in 2004.",
    "lat": 3.1579,
    "lng": 101.7116,
    "images": [
      "2b7739513afeed2a21948f0e66b1a990.jpg",
      "86a45901a2beef04c3c3b5669f5775ed.jpg",
      "cons-petronas.jpg",
      "cdad0bf7e7a7a621261686f2745eb202.jpg"
    ]
  },
  {
    "id": "q1-tower",
    "name": "Q1 Tower",
    "folder": "Q1 TOWER",
    "city": "Gold Coast",
    "country": "Australia",
    "address": "9 Hamilton Ave, Surfers Paradise",
    "region": "oceania",
    "height": 322,
    "heightFt": 1058,
    "floors": 78,
    "year": 2005,
    "period": "2002–2005",
    "cost": "$255 million AUD",
    "materials": "Reinforced Concrete, Steel, Reflective Glass",
    "architect": "Sunland Group / Atelier SDG",
    "firm": "Sunland Group",
    "use": "Residential, Observation",
    "overview": "Q1, short for Queensland Number One, is one of the tallest residential towers in the Southern Hemisphere and the most recognizable structure on Australia’s Gold Coast. Its sculptural form was inspired by the Sydney 2000 Olympic torch and the curved sails of the Sydney Opera House, producing a slender concrete shaft that flares into a sail-shaped crown and tapers into a 97-meter spire above the SkyPoint observation deck.",
    "cultural": "Q1 redefined the identity of Surfers Paradise, transforming the postcard image of the Gold Coast from low-rise beach culture into a high-density resort skyline. As a predominantly residential tower, it also represented a turning point in Australian attitudes toward vertical living outside the established Sydney and Melbourne CBDs.",
    "construction": "The tower’s slim profile relies on a high-strength reinforced concrete core supplemented by perimeter shear walls calibrated to resist tropical cyclone wind loads coming off the Pacific. Construction was sequenced floor by floor at a rate of about one level every four days using a self-climbing formwork system, and the spire was lifted in segments and bolted in place above the observation level.",
    "effects": "Q1 held the title of the world’s tallest residential building from 2005 until 2011 and remains the tallest building in Australia by some height definitions. Its SkyPoint observation deck and external climb experience turned a private residential tower into one of Queensland’s leading tourism assets.",
    "lat": -28.0286,
    "lng": 153.4308,
    "images": [
      "08c4a38be7140c974b6a32dc21ddd75b.jpg",
      "849b1aa00e8133bb7f71e23deaae5709.jpg",
      "cons-q1 tower.jpg",
      "aa896190ddd3858fb31a85d9c2603d40.jpg"
    ]
  }
];


function getBuildingById(id) {
  return BUILDINGS.find(b => b.id === id);
}

function getBuildingsByRegion(region) {
  return BUILDINGS.filter(b => b.region === region).sort((a, b) => b.height - a.height);
}

function getAllByHeight() {
  return [...BUILDINGS].sort((a, b) => b.height - a.height);
}

function getAllByYear() {
  return [...BUILDINGS].sort((a, b) => a.year - b.year || b.height - a.height);
}

function renderBuildingSvg(id, w, h, mode) {
  const b = getBuildingById(id) || { id };
  const blue = '#0078BF';
  const safeId = String(id).replace(/[^a-z0-9_-]/gi, '-');
  const mx = w / 2;
  const ground = h;
  let svgScale, svgX, svgY, barHeight, y;
  if (mode === 'height') {
    svgScale = 1;
    svgX = 0;
    svgY = 0;
    barHeight = 800;
    y = 0;
  } else {
    const heightRatio = b.height ? Math.min(0.95, b.height / 828) : 0.5;
    barHeight = h * heightRatio;
    y = ground - barHeight;
    svgScale = barHeight / 800;
    svgX = mx - (100 * svgScale);
    svgY = ground - 750 * svgScale;
  }
  let art = '';

  switch(b.id) {
    case 'burj-khalifa': {
      art = `<g transform="translate(${svgX},${svgY}) scale(${svgScale})"><rect width="200" height="800" fill="none"/><g fill="${blue}"><rect x="50" y="740" width="100" height="15"/><rect x="60" y="725" width="80" height="15"/><path d="M70 725 L70 650 L130 650 L130 725 Z" /><path d="M75 650 L75 580 L125 580 L125 650 Z" /><path d="M80 580 L80 500 L120 500 L120 580 Z" /><path d="M85 500 L85 400 L115 400 L115 500 Z" /><path d="M88 400 L88 320 L112 320 L112 400 Z" /><path d="M91 320 L91 250 L109 250 L109 320 Z" /><path d="M93 250 L93 180 L107 180 L107 250 Z" /><path d="M95 180 L95 120 L105 120 L105 180 Z" /><rect x="98" y="50" width="4" height="70"/><rect x="99.5" y="20" width="1" height="30"/></g></g>`;
      break;
    }
    case 'tokyo-skytree': {
      art = `<g transform="translate(${svgX},${svgY}) scale(${svgScale})"><rect width="200" height="800" fill="none"/><g fill="${blue}"><path d="M50 780 L50 750 Q100 700 150 750 L150 780 Z" /><path d="M60 750 L75 400 L125 400 L140 750 Q100 720 60 750 Z" /><path d="M70 400 L75 350 L125 350 L130 400 Z" /><path d="M80 350 L85 150 L115 150 L120 350 Z" /><path d="M82 150 L85 120 L115 120 L118 150 Z" /><rect x="97" y="50" width="6" height="70"/><rect x="99" y="10" width="2" height="40"/></g></g>`;
      break;
    }
    case 'shanghai-tower': {
      art = `<g transform="translate(${svgX},${svgY}) scale(${svgScale})"><rect width="200" height="800" fill="none"/><g fill="${blue}"><path d="M60 750 Q55 600 65 450 T75 150 L125 150 Q145 300 135 450 T140 750 Z" /><path d="M75 150 L125 150 L120 135 L80 135 Z" /><rect x="55" y="750" width="90" height="10"/></g></g>`;
      break;
    }
    case 'lotte-world-tower': {
      art = `<g transform="translate(${svgX},${svgY}) scale(${svgScale})"><rect width="200" height="800" fill="none"/><g fill="${blue}"><path d="M55 750 Q60 400 95 120 L105 120 Q140 400 145 750 Z" /><rect x="98" y="120" width="4" height="60" fill="#000000"/><rect x="50" y="750" width="100" height="10"/></g></g>`;
      break;
    }
    case 'taipei-101': {
      art = `<g transform="translate(${svgX},${svgY}) scale(${svgScale})"><rect width="200" height="800" fill="none"/><g fill="${blue}"><path d="M70 750 L75 680 L125 680 L130 750 Z" /><path d="M72 680 L65 620 L135 620 L128 680 Z" /><path d="M72 620 L65 560 L135 560 L128 620 Z" /><path d="M72 560 L65 500 L135 500 L128 560 Z" /><path d="M72 500 L65 440 L135 440 L128 500 Z" /><path d="M72 440 L65 380 L135 380 L128 440 Z" /><path d="M72 380 L65 320 L135 320 L128 380 Z" /><path d="M72 320 L65 260 L135 260 L128 320 Z" /><path d="M72 260 L65 200 L135 200 L128 260 Z" /><path d="M85 200 L90 150 L110 150 L115 200 Z" /><rect x="98" y="50" width="4" height="100"/><rect x="99.5" y="20" width="1" height="30"/><rect x="60" y="750" width="80" height="10"/></g></g>`;
      break;
    }
    case 'zifeng-tower': {
      art = `<g transform="translate(${svgX},${svgY}) scale(${svgScale})"><rect width="200" height="800" fill="none"/><g fill="${blue}"><rect x="65" y="750" width="70" height="10"/><path d="M70 750 L70 600 L130 600 L130 750 Z" /><path d="M75 600 L75 450 L125 450 L125 600 Z" /><path d="M80 450 L80 320 L115 320 L115 450 Z" /><path d="M88 320 L92 250 L108 250 L112 320 Z" /><rect x="98" y="100" width="4" height="150"/><rect x="99.5" y="40" width="1" height="60"/></g></g>`;
      break;
    }
    case 'willis-tower': {
      art = `<g transform="translate(${svgX},${svgY}) scale(${svgScale})"><rect width="200" height="800" fill="none"/><g fill="${blue}"><rect x="55" y="750" width="90" height="10"/><rect x="60" y="550" width="80" height="200"/><rect x="60" y="350" width="60" height="200"/><rect x="100" y="350" width="40" height="200"/><rect x="80" y="200" width="40" height="150"/><rect x="88" y="80" width="3" height="120"/><rect x="109" y="80" width="3" height="120"/></g></g>`;
      break;
    }
    case 'al-hamra-tower': {
      art = `<g transform="translate(${svgX},${svgY}) scale(${svgScale})"><rect width="200" height="800" fill="none"/><g fill="${blue}"><path d="M65 750 L65 250 Q65 150 100 120 L135 150 Q135 250 135 750 Z" /><path d="M85 750 Q80 400 100 120 L115 135 Q95 400 95 750 Z" fill="#005A8F" opacity="0.8"/><rect x="60" y="750" width="80" height="10"/></g></g>`;
      break;
    }
    case 'empire-state-building': {
      art = `<g transform="translate(${svgX},${svgY}) scale(${svgScale})"><rect width="200" height="800" fill="none"/><g fill="${blue}"><rect x="60" y="750" width="80" height="10"/><rect x="65" y="450" width="70" height="300"/><rect x="70" y="400" width="60" height="50"/><rect x="75" y="360" width="50" height="40"/><rect x="80" y="330" width="40" height="30"/><rect x="90" y="280" width="20" height="50"/><rect x="98.5" y="150" width="3" height="130"/><rect x="99.5" y="100" width="1" height="50"/></g></g>`;
      break;
    }
    case 'the-shard': {
      art = `<g transform="translate(${svgX},${svgY}) scale(${svgScale})"><rect width="200" height="800" fill="none"/><g fill="${blue}"><rect x="55" y="750" width="90" height="10"/><path d="M60 750 L95 250 L105 250 L140 750 Z" /><path d="M95 250 L97 180 L100 250 Z" /><path d="M99 250 L101 150 L103 250 Z" /><path d="M102 250 L105 210 L107 250 Z" /><path d="M65 750 L96 240 L98 240 L68 750 Z" opacity="0.9"/><path d="M135 750 L104 240 L102 240 L132 750 Z" opacity="0.9"/></g></g>`;
      break;
    }
    case 'kingdom-centre': {
      art = `<g transform="translate(${svgX},${svgY}) scale(${svgScale})"><rect width="200" height="800" fill="none"/><g fill="${blue}"><path d="M60 750 L70 350 Q70 250 100 250 T130 350 L140 750 Z" /><path d="M100 280 Q80 280 75 380 L125 380 Q120 280 100 280 Z" fill="#000000"/><rect x="85" y="250" width="30" height="8"/><rect x="55" y="750" width="90" height="10"/></g></g>`;
      break;
    }
    case 'eureka-tower': {
      art = `<g transform="translate(${svgX},${svgY}) scale(${svgScale})"><rect width="200" height="800" fill="none"/><g fill="${blue}"><rect x="70" y="250" width="60" height="500"/><rect x="65" y="350" width="10" height="400"/><rect x="125" y="300" width="10" height="450"/><path d="M68 250 L68 220 L132 220 L132 250 Z" /><path d="M75 220 L80 200 L120 200 L125 220 Z" /><rect x="60" y="750" width="80" height="10"/></g></g>`;
      break;
    }
    case '101-collins-street': {
      art = `<g transform="translate(${svgX},${svgY}) scale(${svgScale})"><rect width="200" height="800" fill="none"/><g fill="${blue}"><rect x="50" y="730" width="100" height="30"/><rect x="60" y="600" width="80" height="130"/><rect x="70" y="450" width="60" height="150"/><rect x="80" y="250" width="40" height="200"/><rect x="85" y="220" width="30" height="30"/><rect x="92" y="150" width="16" height="70"/><path d="M96 150 L104 150 L100 80 Z" /><rect x="99.5" y="40" width="1" height="40"/><rect x="45" y="760" width="110" height="10"/></g></g>`;
      break;
    }
    case 'one-canada-square': {
      art = `<g transform="translate(${svgX},${svgY}) scale(${svgScale})"><rect width="200" height="800" fill="none"/><g fill="${blue}"><rect x="65" y="320" width="70" height="430"/><path d="M65 320 L100 270 L135 320 Z" /><rect x="98" y="260" width="4" height="10"/><rect x="60" y="750" width="80" height="10"/><rect x="98" y="320" width="4" height="430" opacity="0.7"/></g></g>`;
      break;
    }
    case 'heron-tower': {
      art = `<g transform="translate(${svgX},${svgY}) scale(${svgScale})"><rect width="200" height="800" fill="none"/><g fill="${blue}"><rect x="65" y="760" width="70" height="10"/><rect x="70" y="320" width="60" height="440"/><rect x="110" y="240" width="3" height="80"/><circle cx="111.5" cy="238" r="3.5"/></g><g fill="#000000"><rect x="82" y="320" width="1.5" height="440"/><rect x="98" y="320" width="1.5" height="440"/><rect x="115" y="320" width="1.5" height="440"/></g></g>`;
      break;
    }
    case 'burj-khalifa-old': {
      let pts = `${mx - w * 0.08},${ground}`;
      pts += ` ${mx - w * 0.076},${y + barHeight * 0.08}`;
      pts += ` ${mx - w * 0.068},${y + barHeight * 0.18}`;
      pts += ` ${mx - w * 0.055},${y + barHeight * 0.3}`;
      pts += ` ${mx - w * 0.035},${y + barHeight * 0.45}`;
      pts += ` ${mx - w * 0.015},${y + barHeight * 0.65}`;
      pts += ` ${mx},${y}`;
      pts += ` ${mx + w * 0.015},${y + barHeight * 0.65}`;
      pts += ` ${mx + w * 0.035},${y + barHeight * 0.45}`;
      pts += ` ${mx + w * 0.055},${y + barHeight * 0.3}`;
      pts += ` ${mx + w * 0.068},${y + barHeight * 0.18}`;
      pts += ` ${mx + w * 0.076},${y + barHeight * 0.08}`;
      pts += ` ${mx + w * 0.08},${ground}`;
      for (let i = 0; i < 15; i++) {
        const p = i / 14;
        const wid = w * 0.08 * (1 - p * 0.85);
        pts += ` ${mx + wid},${y + barHeight * (1 - p)}`;
      }
      for (let i = 15; i >= 0; i--) {
        const p = i / 14;
        const wid = w * 0.08 * (1 - p * 0.85);
        pts += ` ${mx - wid},${y + barHeight * (1 - p)}`;
      }
      art = `<polygon points="${pts}" fill="${blue}"/>`;
      break;
    }
    case 'tokyo-skytree': {
      let pts = `${mx - w * 0.13},${ground}`;
      pts += ` ${mx - w * 0.128},${y + barHeight * 0.08}`;
      pts += ` ${mx - w * 0.125},${y + barHeight * 0.15}`;
      pts += ` ${mx - w * 0.062},${y + barHeight * 0.32}`;
      pts += ` ${mx - w * 0.055},${y + barHeight * 0.4}`;
      pts += ` ${mx - w * 0.035},${y + barHeight * 0.5}`;
      pts += ` ${mx - w * 0.02},${y + barHeight * 0.62}`;
      pts += ` ${mx - w * 0.01},${y + barHeight * 0.75}`;
      pts += ` ${mx},${y + barHeight}`;
      pts += ` ${mx + w * 0.01},${y + barHeight * 0.75}`;
      pts += ` ${mx + w * 0.02},${y + barHeight * 0.62}`;
      pts += ` ${mx + w * 0.035},${y + barHeight * 0.5}`;
      pts += ` ${mx + w * 0.055},${y + barHeight * 0.4}`;
      pts += ` ${mx + w * 0.062},${y + barHeight * 0.32}`;
      pts += ` ${mx + w * 0.125},${y + barHeight * 0.15}`;
      pts += ` ${mx + w * 0.128},${y + barHeight * 0.08}`;
      pts += ` ${mx + w * 0.13},${ground}`;
      for (let i = 0; i < 20; i++) {
        const p = i / 19;
        const wid = w * 0.13 * (1 - p * 0.25);
        pts += ` ${mx + wid},${y + barHeight * (1 - p)}`;
      }
      for (let i = 20; i >= 0; i--) {
        const p = i / 19;
        const wid = w * 0.13 * (1 - p * 0.25);
        pts += ` ${mx - wid},${y + barHeight * (1 - p)}`;
      }
      art = `<polygon points="${pts}" fill="${blue}"/>`;
      break;
    }
    case 'shanghai-tower': {
      let pts = `${mx - w * 0.11},${ground}`;
      for (let i = 0; i <= 25; i++) {
        const p = i / 25;
        const twist = Math.sin(p * Math.PI) * w * 0.02;
        const wid = w * 0.11 * (1 - p * 0.25) + twist;
        pts += ` ${mx - wid},${y + barHeight * p}`;
      }
      for (let i = 25; i >= 0; i--) {
        const p = i / 25;
        const twist = Math.sin(p * Math.PI) * w * 0.02;
        const wid = w * 0.11 * (1 - p * 0.25) + twist;
        pts += ` ${mx + wid},${y + barHeight * p}`;
      }
      art = `<polygon points="${pts}" fill="${blue}"/>`;
      for (let i = 0; i <= 25; i += 3) {
        const p = i / 25;
        const twist = Math.sin(p * Math.PI) * w * 0.02;
        const wid = w * 0.11 * (1 - p * 0.25) + twist;
        art += `<line x1="${mx - wid}" y1="${y + barHeight * p}" x2="${mx + wid}" y2="${y + barHeight * p}" stroke="${blue}" stroke-width="0.3" opacity="0.3"/>`;
      }
      break;
    }
    case 'lotte-world-tower': {
      let pts = `${mx - w * 0.08},${ground}`;
      for (let i = 0; i <= 25; i++) {
        const p = i / 25;
        const wid = w * 0.08 * (1 - p * 0.8);
        pts += ` ${mx - wid},${y + barHeight * p}`;
      }
      for (let i = 25; i >= 0; i--) {
        const p = i / 25;
        const wid = w * 0.08 * (1 - p * 0.8);
        pts += ` ${mx + wid},${y + barHeight * p}`;
      }
      art = `<polygon points="${pts}" fill="${blue}"/>`;
      break;
    }
    case 'taipei-101': {
      let pts = `${mx - w * 0.11},${ground}`;
      for (let i = 0; i <= 9; i++) {
        const p = i / 9;
        const wid = w * 0.11 * (1 - p * 0.1);
        pts += ` ${mx - wid},${y + barHeight * p}`;
      }
      for (let i = 9; i >= 0; i--) {
        const p = i / 9;
        const wid = w * 0.11 * (1 - p * 0.1);
        pts += ` ${mx + wid},${y + barHeight * p}`;
      }
      art = `<polygon points="${pts}" fill="${blue}"/>`;
      for (let i = 1; i < 9; i++) {
        const p = i / 9;
        const wid = w * 0.11 * (1 - p * 0.1);
        art += `<line x1="${mx - wid}" y1="${y + barHeight * p}" x2="${mx + wid}" y2="${y + barHeight * p}" stroke="${blue}" stroke-width="0.4" opacity="0.35"/>`;
      }
      break;
    }
    case 'zifeng-tower': {
      let pts = `${mx - w * 0.105},${ground}`;
      for (let i = 0; i <= 20; i++) {
        const p = i / 20;
        const wid = w * 0.105 * (1 - p * 0.65);
        pts += ` ${mx - wid},${y + barHeight * p}`;
      }
      for (let i = 20; i >= 0; i--) {
        const p = i / 20;
        const wid = w * 0.105 * (1 - p * 0.65);
        pts += ` ${mx + wid},${y + barHeight * p}`;
      }
      art = `<polygon points="${pts}" fill="${blue}"/>`;
      break;
    }
    case 'willis-tower': {
      const tube = w * 0.07;
      const space = tube * 1.5;
      const positions = [
        {x: mx - space, h: [barHeight, barHeight * 0.78, barHeight * 0.6, barHeight * 0.4]},
        {x: mx, h: [barHeight]},
        {x: mx + space, h: [barHeight, barHeight * 0.78, barHeight * 0.6, barHeight * 0.4]}
      ];
      art = '';
      positions.forEach(col => {
        col.h.forEach(height => {
          const startY = y + barHeight - height;
          art += `<rect x="${col.x - tube/2}" y="${startY}" width="${tube}" height="${height}" fill="${blue}"/>`;
        });
      });
      break;
    }
    case 'al-hamra-tower': {
      let pts = `${mx - w * 0.12},${ground}`;
      pts += ` ${mx - w * 0.118},${y + barHeight * 0.1}`;
      pts += ` ${mx - w * 0.08},${y + barHeight * 0.25}`;
      pts += ` ${mx - w * 0.045},${y + barHeight * 0.35}`;
      pts += ` ${mx - w * 0.045},${y + barHeight * 0.55}`;
      pts += ` ${mx - w * 0.08},${y + barHeight * 0.7}`;
      pts += ` ${mx},${y}`;
      pts += ` ${mx + w * 0.08},${y + barHeight * 0.7}`;
      pts += ` ${mx + w * 0.045},${y + barHeight * 0.55}`;
      pts += ` ${mx + w * 0.045},${y + barHeight * 0.35}`;
      pts += ` ${mx + w * 0.08},${y + barHeight * 0.25}`;
      pts += ` ${mx + w * 0.118},${y + barHeight * 0.1}`;
      pts += ` ${mx + w * 0.12},${ground}`;
      for (let i = 0; i < 15; i++) {
        const p = i / 14;
        const wid = w * 0.12 * (1 - p * 0.6);
        pts += ` ${mx + wid},${y + barHeight * (1 - p)}`;
      }
      for (let i = 15; i >= 0; i--) {
        const p = i / 14;
        const wid = w * 0.12 * (1 - p * 0.6);
        pts += ` ${mx - wid},${y + barHeight * (1 - p)}`;
      }
      art = `<polygon points="${pts}" fill="${blue}"/>`;
      break;
    }
    case 'empire-state-building': {
      let pts = `${mx - w * 0.1},${ground}`;
      pts += ` ${mx - w * 0.095},${y + barHeight * 0.12}`;
      pts += ` ${mx - w * 0.08},${y + barHeight * 0.25}`;
      pts += ` ${mx - w * 0.06},${y + barHeight * 0.4}`;
      pts += ` ${mx - w * 0.04},${y + barHeight * 0.58}`;
      pts += ` ${mx - w * 0.02},${y + barHeight * 0.75}`;
      pts += ` ${mx},${y}`;
      pts += ` ${mx + w * 0.02},${y + barHeight * 0.75}`;
      pts += ` ${mx + w * 0.04},${y + barHeight * 0.58}`;
      pts += ` ${mx + w * 0.06},${y + barHeight * 0.4}`;
      pts += ` ${mx + w * 0.08},${y + barHeight * 0.25}`;
      pts += ` ${mx + w * 0.095},${y + barHeight * 0.12}`;
      pts += ` ${mx + w * 0.1},${ground}`;
      for (let i = 0; i < 18; i++) {
        const p = i / 17;
        const wid = w * 0.1 * (1 - p * 0.7);
        pts += ` ${mx + wid},${y + barHeight * (1 - p)}`;
      }
      for (let i = 18; i >= 0; i--) {
        const p = i / 17;
        const wid = w * 0.1 * (1 - p * 0.7);
        pts += ` ${mx - wid},${y + barHeight * (1 - p)}`;
      }
      art = `<polygon points="${pts}" fill="${blue}"/>`;
      break;
    }
    case 'the-shard': {
      let pts = `${mx - w * 0.11},${ground}`;
      pts += ` ${mx - w * 0.102},${y + barHeight * 0.08}`;
      pts += ` ${mx - w * 0.08},${y + barHeight * 0.15}`;
      pts += ` ${mx - w * 0.04},${y + barHeight * 0.22}`;
      pts += ` ${mx},${y}`;
      pts += ` ${mx + w * 0.04},${y + barHeight * 0.22}`;
      pts += ` ${mx + w * 0.08},${y + barHeight * 0.15}`;
      pts += ` ${mx + w * 0.102},${y + barHeight * 0.08}`;
      pts += ` ${mx + w * 0.11},${ground}`;
      for (let i = 0; i < 22; i++) {
        const p = i / 21;
        const wid = w * 0.11 * (1 - p * 0.9);
        pts += ` ${mx + wid},${y + barHeight * (1 - p)}`;
      }
      for (let i = 22; i >= 0; i--) {
        const p = i / 21;
        const wid = w * 0.11 * (1 - p * 0.9);
        pts += ` ${mx - wid},${y + barHeight * (1 - p)}`;
      }
      art = `<polygon points="${pts}" fill="${blue}"/>`;
      break;
    }
    case 'kingdom-centre': {
      let pts = `${mx - w * 0.115},${ground}`;
      pts += ` ${mx - w * 0.11},${y + barHeight * 0.08}`;
      pts += ` ${mx - w * 0.09},${y + barHeight * 0.22}`;
      pts += ` ${mx - w * 0.052},${y + barHeight * 0.35}`;
      pts += ` ${mx - w * 0.052},${y + barHeight * 0.52}`;
      pts += ` ${mx - w * 0.09},${y + barHeight * 0.65}`;
      pts += ` ${mx},${y}`;
      pts += ` ${mx + w * 0.09},${y + barHeight * 0.65}`;
      pts += ` ${mx + w * 0.052},${y + barHeight * 0.52}`;
      pts += ` ${mx + w * 0.052},${y + barHeight * 0.35}`;
      pts += ` ${mx + w * 0.09},${y + barHeight * 0.22}`;
      pts += ` ${mx + w * 0.11},${y + barHeight * 0.08}`;
      pts += ` ${mx + w * 0.115},${ground}`;
      for (let i = 0; i < 16; i++) {
        const p = i / 15;
        const wid = w * 0.115 * (1 - p * 0.55);
        pts += ` ${mx + wid},${y + barHeight * (1 - p)}`;
      }
      for (let i = 16; i >= 0; i--) {
        const p = i / 15;
        const wid = w * 0.115 * (1 - p * 0.55);
        pts += ` ${mx - wid},${y + barHeight * (1 - p)}`;
      }
      art = `<polygon points="${pts}" fill="${blue}"/>`;
      break;
    }
    case 'eureka-tower': {
      let pts = `${mx - w * 0.1},${ground}`;
      pts += ` ${mx - w * 0.095},${y + barHeight * 0.12}`;
      pts += ` ${mx - w * 0.07},${y + barHeight * 0.3}`;
      pts += ` ${mx - w * 0.04},${y + barHeight * 0.5}`;
      pts += ` ${mx - w * 0.02},${y + barHeight * 0.7}`;
      pts += ` ${mx},${y + barHeight}`;
      pts += ` ${mx + w * 0.02},${y + barHeight * 0.7}`;
      pts += ` ${mx + w * 0.04},${y + barHeight * 0.5}`;
      pts += ` ${mx + w * 0.07},${y + barHeight * 0.3}`;
      pts += ` ${mx + w * 0.095},${y + barHeight * 0.12}`;
      pts += ` ${mx + w * 0.1},${ground}`;
      for (let i = 0; i < 20; i++) {
        const p = i / 19;
        const wid = w * 0.1 * (1 - p * 0.8);
        pts += ` ${mx + wid},${y + barHeight * (1 - p)}`;
      }
      for (let i = 20; i >= 0; i--) {
        const p = i / 19;
        const wid = w * 0.1 * (1 - p * 0.8);
        pts += ` ${mx - wid},${y + barHeight * (1 - p)}`;
      }
      art = `<polygon points="${pts}" fill="${blue}"/><rect x="${mx - w * 0.06}" y="${y}" width="${w * 0.12}" height="${barHeight * 0.13}" fill="#FFD700" opacity="0.7"/>`;
      break;
    }
    case '101-collins-street': {
      let pts = `${mx - w * 0.12},${ground}`;
      pts += ` ${mx - w * 0.115},${y + barHeight * 0.1}`;
      pts += ` ${mx - w * 0.09},${y + barHeight * 0.25}`;
      pts += ` ${mx - w * 0.055},${y + barHeight * 0.4}`;
      pts += ` ${mx - w * 0.03},${y + barHeight * 0.6}`;
      pts += ` ${mx - w * 0.01},${y + barHeight * 0.8}`;
      pts += ` ${mx},${y}`;
      pts += ` ${mx + w * 0.01},${y + barHeight * 0.8}`;
      pts += ` ${mx + w * 0.03},${y + barHeight * 0.6}`;
      pts += ` ${mx + w * 0.055},${y + barHeight * 0.4}`;
      pts += ` ${mx + w * 0.09},${y + barHeight * 0.25}`;
      pts += ` ${mx + w * 0.115},${y + barHeight * 0.1}`;
      pts += ` ${mx + w * 0.12},${ground}`;
      for (let i = 0; i < 18; i++) {
        const p = i / 17;
        const wid = w * 0.12 * (1 - p * 0.75);
        pts += ` ${mx + wid},${y + barHeight * (1 - p)}`;
      }
      for (let i = 18; i >= 0; i--) {
        const p = i / 17;
        const wid = w * 0.12 * (1 - p * 0.75);
        pts += ` ${mx - wid},${y + barHeight * (1 - p)}`;
      }
      art = `<polygon points="${pts}" fill="${blue}"/>`;
      break;
    }
    case 'one-canada-square': {
      let pts = `${mx - w * 0.11},${ground}`;
      pts += ` ${mx - w * 0.104},${y + barHeight * 0.12}`;
      pts += ` ${mx - w * 0.08},${y + barHeight * 0.28}`;
      pts += ` ${mx - w * 0.045},${y + barHeight * 0.48}`;
      pts += ` ${mx - w * 0.015},${y + barHeight * 0.7}`;
      pts += ` ${mx},${y}`;
      pts += ` ${mx + w * 0.015},${y + barHeight * 0.7}`;
      pts += ` ${mx + w * 0.045},${y + barHeight * 0.48}`;
      pts += ` ${mx + w * 0.08},${y + barHeight * 0.28}`;
      pts += ` ${mx + w * 0.104},${y + barHeight * 0.12}`;
      pts += ` ${mx + w * 0.11},${ground}`;
      for (let i = 0; i < 20; i++) {
        const p = i / 19;
        const wid = w * 0.11 * (1 - p * 0.8);
        pts += ` ${mx + wid},${y + barHeight * (1 - p)}`;
      }
      for (let i = 20; i >= 0; i--) {
        const p = i / 19;
        const wid = w * 0.11 * (1 - p * 0.8);
        pts += ` ${mx - wid},${y + barHeight * (1 - p)}`;
      }
      art = `<polygon points="${pts}" fill="${blue}"/>`;
      break;
    }
    case 'heron-tower': {
      let pts = `${mx - w * 0.095},${ground}`;
      pts += ` ${mx - w * 0.088},${y + barHeight * 0.1}`;
      pts += ` ${mx - w * 0.065},${y + barHeight * 0.25}`;
      pts += ` ${mx - w * 0.035},${y + barHeight * 0.42}`;
      pts += ` ${mx - w * 0.015},${y + barHeight * 0.62}`;
      pts += ` ${mx},${y}`;
      pts += ` ${mx + w * 0.015},${y + barHeight * 0.62}`;
      pts += ` ${mx + w * 0.035},${y + barHeight * 0.42}`;
      pts += ` ${mx + w * 0.065},${y + barHeight * 0.25}`;
      pts += ` ${mx + w * 0.088},${y + barHeight * 0.1}`;
      pts += ` ${mx + w * 0.095},${ground}`;
      for (let i = 0; i < 17; i++) {
        const p = i / 16;
        const wid = w * 0.095 * (1 - p * 0.75);
        pts += ` ${mx + wid},${y + barHeight * (1 - p)}`;
      }
      for (let i = 17; i >= 0; i--) {
        const p = i / 16;
        const wid = w * 0.095 * (1 - p * 0.75);
        pts += ` ${mx - wid},${y + barHeight * (1 - p)}`;
      }
      art = `<polygon points="${pts}" fill="${blue}"/>`;
      break;
    }
    case 'burj-al-arab': {
      art = `<g transform="translate(${svgX},${svgY}) scale(${svgScale})"><rect width="200" height="800" fill="none"/><g fill="${blue}"><rect x="60" y="750" width="80" height="10"/><path d="M65 750 L80 200 L100 100 L100 750 Z"/><path d="M100 750 L100 100 L120 200 L135 750 Z" opacity="0.85"/><rect x="98" y="50" width="4" height="50"/></g></g>`;
      break;
    }
    case 'chrysler-building': {
      art = `<g transform="translate(${svgX},${svgY}) scale(${svgScale})"><rect width="200" height="800" fill="none"/><g fill="${blue}"><rect x="55" y="750" width="90" height="10"/><rect x="65" y="450" width="70" height="300"/><rect x="70" y="380" width="60" height="70"/><path d="M75 380 Q100 200 125 380 Z"/><path d="M82 350 Q100 230 118 350 Z" fill="#000000"/><path d="M88 320 Q100 240 112 320 Z"/><rect x="98" y="120" width="4" height="120"/><rect x="99.5" y="60" width="1" height="60"/></g></g>`;
      break;
    }
    case 'cn-tower': {
      art = `<g transform="translate(${svgX},${svgY}) scale(${svgScale})"><rect width="200" height="800" fill="none"/><g fill="${blue}"><rect x="55" y="750" width="90" height="10"/><path d="M88 750 L92 320 L108 320 L112 750 Z"/><path d="M78 320 L122 320 L118 280 L82 280 Z"/><path d="M75 280 L125 280 L120 230 L80 230 Z"/><rect x="92" y="120" width="16" height="110"/><rect x="98" y="40" width="4" height="80"/><rect x="99.5" y="10" width="1" height="30"/></g></g>`;
      break;
    }
    case 'marina-101': {
      art = `<g transform="translate(${svgX},${svgY}) scale(${svgScale})"><rect width="200" height="800" fill="none"/><g fill="${blue}"><rect x="60" y="750" width="80" height="10"/><path d="M70 750 L75 220 L125 220 L130 750 Z"/><path d="M75 220 L80 180 L120 180 L125 220 Z"/><path d="M82 180 L86 140 L114 140 L118 180 Z"/><rect x="98" y="60" width="4" height="80"/><rect x="99.5" y="20" width="1" height="40"/></g></g>`;
      break;
    }
    case 'mecca-royal-clock': {
      art = `<g transform="translate(${svgX},${svgY}) scale(${svgScale})"><rect width="200" height="800" fill="none"/><g fill="${blue}"><path d="M40 790 L50 720 L150 720 L160 790 Z" /><rect x="55" y="700" width="90" height="20" /><rect x="65" y="350" width="70" height="350" /><g fill="#000000"><rect x="72" y="350" width="1.5" height="350" /><rect x="80" y="350" width="1.5" height="350" /><rect x="88" y="350" width="1.5" height="350" /><rect x="99.25" y="350" width="1.5" height="350" /><rect x="110" y="350" width="1.5" height="350" /><rect x="118" y="350" width="1.5" height="350" /><rect x="126" y="350" width="1.5" height="350" /></g><rect x="62" y="320" width="76" height="30" /><rect x="60" y="220" width="80" height="100" /><path d="M60 220 L140 220 L130 180 L70 180 Z" /><path d="M70 180 L130 180 L100 120 Z" /><rect x="99" y="50" width="2" height="100" /><circle cx="100" cy="140" r="3" /><circle cx="100" cy="120" r="2.5" /><circle cx="100" cy="100" r="2" /><circle cx="100" cy="80" r="1.5" /><path d="M100 15 C118 15, 125 35, 125 55 C125 75, 115 85, 100 85 C110 85, 115 70, 115 55 C115 40, 110 15, 100 15 Z" /></g><g fill="#000000"><rect x="65" y="600" width="70" height="1" /><rect x="65" y="500" width="70" height="1" /><rect x="65" y="400" width="70" height="1" /></g></g>`;
      break;
    }
    case 'merdeka-118': {
      art = `<g transform="translate(${svgX},${svgY}) scale(${svgScale})"><rect width="200" height="800" fill="none"/><g fill="${blue}"><rect x="55" y="750" width="90" height="10"/><path d="M62 750 L72 250 L128 250 L138 750 Z"/><path d="M72 250 L100 110 L128 250 Z" opacity="0.9"/><path d="M85 250 L100 130 L115 250 Z"/><rect x="99" y="40" width="2" height="70"/></g></g>`;
      break;
    }
    case 'one-vanderbilt': {
      art = `<g transform="translate(${svgX},${svgY}) scale(${svgScale})"><rect width="200" height="800" fill="none"/><g fill="${blue}"><rect x="55" y="750" width="90" height="10"/><rect x="60" y="600" width="80" height="150"/><rect x="65" y="430" width="70" height="170"/><rect x="72" y="280" width="56" height="150"/><rect x="80" y="160" width="40" height="120"/><rect x="88" y="100" width="24" height="60"/><rect x="98" y="50" width="4" height="50"/></g></g>`;
      break;
    }
    case 'one-world-trade-center': {
      art = `<g transform="translate(${svgX},${svgY}) scale(${svgScale})"><rect width="200" height="800" fill="none"/><g fill="${blue}"><rect x="55" y="750" width="90" height="10"/><path d="M65 750 L65 600 L135 600 L135 750 Z"/><path d="M65 600 L80 200 L120 200 L135 600 Z"/><path d="M80 200 L100 175 L120 200 Z" opacity="0.85"/><rect x="98" y="40" width="4" height="160"/><rect x="99.5" y="10" width="1" height="30"/></g></g>`;
      break;
    }
    case 'petronas-twin-tower': {
      art = `<g transform="translate(${svgX},${svgY}) scale(${svgScale})"><rect width="200" height="800" fill="none"/><g fill="${blue}"><rect x="40" y="750" width="120" height="10"/><path d="M52 750 L58 250 L82 250 L88 750 Z"/><path d="M112 750 L118 250 L142 250 L148 750 Z"/><path d="M58 250 L62 200 L78 200 L82 250 Z"/><path d="M118 250 L122 200 L138 200 L142 250 Z"/><rect x="68" y="120" width="4" height="80"/><rect x="128" y="120" width="4" height="80"/><rect x="69.5" y="80" width="1" height="40"/><rect x="129.5" y="80" width="1" height="40"/><rect x="82" y="430" width="36" height="20"/><line x1="82" y1="440" x2="118" y2="440" stroke="#000" stroke-width="1"/></g></g>`;
      break;
    }
    case 'q1-tower': {
      art = `<g transform="translate(${svgX},${svgY}) scale(${svgScale})"><rect width="200" height="800" fill="none"/><g fill="${blue}"><rect x="60" y="750" width="80" height="10"/><path d="M70 750 Q75 400 95 200 L105 200 Q125 400 130 750 Z"/><path d="M88 200 Q92 130 100 100 Q108 130 112 200 Z" opacity="0.9"/><rect x="98" y="50" width="4" height="50"/><rect x="99.5" y="20" width="1" height="30"/></g></g>`;
      break;
    }
    default: {
      let pts = `${mx - w * 0.1},${ground}`;
      for (let i = 0; i <= 20; i++) {
        const p = i / 20;
        const wid = w * 0.1 * (1 - p * 0.7);
        pts += ` ${mx - wid},${y + barHeight * p}`;
      }
      for (let i = 20; i >= 0; i--) {
        const p = i / 20;
        const wid = w * 0.1 * (1 - p * 0.7);
        pts += ` ${mx + wid},${y + barHeight * p}`;
      }
      art = `<polygon points="${pts}" fill="${blue}"/>`;
    }
  }

  return `<g class="tower tower-${safeId}">${art}</g>`;
}
