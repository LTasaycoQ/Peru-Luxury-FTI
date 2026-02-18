export interface Partner {
  image: string;
  name: string;
  description?: string;
  link?: string;
}

export interface Destination {
  fondo: string;
  distrito: string;
  title: string;
  description: string;
  image1: string;
  image2: string;
  image3: string;
  partnersTitle?: string;
  partnersVariant: "default" | "single" | "detailed";
  partners: Partner[];
}

export const destinations: Destination[] = [
  {
    fondo: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/07/lima0001.jpg?fit=1890%2C700&ssl=1",
    distrito: "lima",
    title: "Lima",
    description: "Lima, known as “the City of Kings”, is usually the first step in a journey to Peru. It is a city that blends modern neighbourhoods with the colonial-style buildings of the Main Plaza. Barranco has a large collection of museums, iconic bars and restaurants, shops and art studios. Miraflores, the tourist district for excellence, offers beautiful parks along its boardwalk, with stunning views of the Pacific Ocean. You can enjoy lovely sunsets from Larcomar, a shopping mall located in the heart of the district. Lima has plenty of colonial buildings to see. It is a must to walk around the Historical Centre of the city, considered as a World Heritage Site by UNESCO. It really worth to visit the Plaza de Armas where the Presidential Palace and the Archbishop Palace are located, the Aliaga House -the oldest Colonial mansion in Lima-, the Municipal Palace and the Monastery of San Francisco, famous for its baroque architecture and for its catacombs. Considered the Gastronomic Capital of Latin America, Lima has become the culinary hub of several huariques -small and family-run restaurants that keep traditional recipes- and many fancy and renowned restaurants included in The World’s 50 Best Restaurants list.",
    image1: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/06/cusco1.jpg?fit=413%2C589&ssl=1",
    image2: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/06/cusco3.jpg?fit=413%2C282&ssl=1",
    image3: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/06/cusco2.jpg?fit=413%2C295&ssl=1",

    partnersVariant: "default",
    partners: [
      { image: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/07/Miraflores-Park.jpg?fit=450%2C380&ssl=1", name: "Miraflores Park, A Belmond Hotel", link: "#" },
      { image: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/07/Hotel-B.jpg?fit=450%2C380&ssl=1", name: "Hotel B", link: "#" },
      { image: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/07/Marriott-Miraflores.jpg?fit=450%2C380&ssl=1", name: "JW Marriott Hotel Lima", link: "#" },


      { image: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/07/Westin.jpg?fit=450%2C380&ssl=1", name: "Miraflores Park, A Belmond Hotel", link: "#" },
      { image: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/07/country-club.jpg?fit=450%2C380&ssl=1", name: "Hotel B", link: "#" },
      { image: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/07/AC.jpg?fit=450%2C380&ssl=1", name: "JW Marriott Hotel Lima", link: "#" },
    ],
  },


  {
    fondo: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/04/Cusco-portada2.jpg?fit=1920%2C900&ssl=1",
    distrito: "cusco",
    title: "Cusco",
    description: "Cusco, the former capital of the Incan empire is also renowned as the navel of the Earth. This is a captivating city that blends narrow cobblestone streets, big inca stone walls and colonial period architecture. Inca Temples and Fortresses can be visited in this city. Koricancha, the Sun Temple, combines the Spanish and Incan influences in Cusco and it is located a few blocks from the Main Plaza. Sacsayhuaman is an archaeological site with very impressive stonework. It used to be a very important ceremonial place for the Incas. Visiting the San Pedro Market is a must. Its colorful aisles, kind vendors and fresh products are part of the experience in order to feel the authentic vibe of this city. Finally, do not forget to visit the artisan neighborhood of San Blas. Many of its cafes and bars offer great panoramic views of the city.",
    image1: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/06/cusco1.jpg?fit=413%2C589&ssl=1",
    image2: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/06/cusco3.jpg?fit=413%2C282&ssl=1",
    image3: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/06/cusco2.jpg?fit=413%2C295&ssl=1",

    partnersVariant: "default",
    partners: [
      { image: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/07/monasterio.jpg?fit=450%2C380&ssl=1", name: "Miraflores Park, A Belmond Hotel Cusco", link: "#" },
      { image: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/07/nazarenas.jpg?fit=450%2C380&ssl=1", name: "Palacio Nazarenas", link: "#" },
      { image: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/07/ink-la-casona.jpg?fit=450%2C380&ssl=1", name: "Inkaterra La Casona Relais Chateau", link: "#" },
      { image: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/07/marriott-cusco.jpg?fit=450%2C380&ssl=1", name: "JW Marriott El Convento Cusco", link: "#" },
      { image: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/07/palacio-del-inka.jpg?fit=450%2C380&ssl=1", name: "Palacio del Inka, A luxury Collection", link: "#" },
    ],
  },


  {
    fondo: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/07/mapi-portada.jpg?fit=1920%2C1280&ssl=1",
    distrito: "machu-picchu",
    title: "Machu Picchu",
    description: "Machu Picchu is considered one of the New Seven Wonders of the World and it is -definitely- the main tourist attraction in Peru. Built in the 1400s, the citadel of Machu Picchu is a masterpiece of architecture and engineering that demanded massive amounts of labor. It was a religious, political and administrative center, in perfect harmony with nature and represents the most important and well-known legacy of the Inca civilization. With 2,430 m.a.s.l., and located 80 km northwest of Cuzco, this UNESCO World Heritage Site is also one of the most biological wealth areas in the country and harbors more than 20 Andean and Amazonian ecosystems. The easiest way to get to Machu Picchu is by train but if you like hiking and adventure is your passion, you have to try the famous Inca Trail. It is worth the challenge because of the wonderful views of the highlands and the adventure of walking by the same path as the Incas used to use in the past.",
    image1: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/06/cusco1.jpg?fit=413%2C589&ssl=1",
    image2: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/06/cusco3.jpg?fit=413%2C282&ssl=1",
    image3: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/06/cusco2.jpg?fit=413%2C295&ssl=1",
    partnersVariant: "default",
    partners: [
      { image: "...", name: "Miraflores Park, A Belmond Hotel", link: "#" },
      { image: "...", name: "Hotel B", link: "#" },
      { image: "...", name: "JW Marriott Hotel Lima", link: "#" },
    ],

  },
  {
    fondo: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/07/Arequipa-portada.jpg?fit=1920%2C1280&ssl=1",
    distrito: "arequipa",
    title: "Arequipa",
    description: "Sitting at 3,820 meters above sea level, Lake Titicaca is famous for being the highest navigable lake in the world. As the scenery of this place is unique, it deserves a closer inspection. A boat trip through the lake will allow you to enjoy a mix of stunning landscapes and a very interesting culture. The first stop is the Uros Floating Islands. These islands are made of interweaved reeds that have sustained a traditional way of life since the time of the Incas. Locals build their boats, houses and even furniture from totora reeds, a plant that prolifers on this part of the lake. Taquile is a remote island in the middle of Lake Titicaca. In this island, locals keep the traditional lifestyle uninterrupted from modernization. Taquile offers beautiful hikes with beautiful scenery and views of the lake. Another interesting attraction in the region is Sillustani. In this place, you can find very impressive funerary towers, called chullpas. These chullpas represent a pre-Inca burial ground and most of them are located around the bank of the Lake Umayo.",
    image1: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/07/arequipa1.jpg?fit=290%2C375&ssl=1",
    image2: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/07/arequipa3.jpg?fit=290%2C183&ssl=1",
    image3: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/07/arequipa2.jpg?fit=290%2C183&ssl=1",

    partnersVariant: "single",
    partners: [
      { image: "...", name: "Titilaka" },
    ],
  },



  {
    fondo: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/07/Titicaca-Lake-portada2.jpg?fit=1920%2C1280&ssl=1",
    distrito: "puno",
    title: "Puno",
    description: "Sitting at 3,820 meters above sea level, Lake Titicaca is famous for being the highest navigable lake in the world. As the scenery of this place is unique, it deserves a closer inspection. A boat trip through the lake will allow you to enjoy a mix of stunning landscapes and a very interesting culture. The first stop is the Uros Floating Islands. These islands are made of interweaved reeds that have sustained a traditional way of life since the time of the Incas. Locals build their boats, houses and even furniture from totora reeds, a plant that prolifers on this part of the lake. Taquile is a remote island in the middle of Lake Titicaca. In this island, locals keep the traditional lifestyle uninterrupted from modernization. Taquile offers beautiful hikes with beautiful scenery and views of the lake. Another interesting attraction in the region is Sillustani. In this place, you can find very impressive funerary towers, called chullpas. These chullpas represent a pre-Inca burial ground and most of them are located around the bank of the Lake Umayo.",
    image1: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/06/cusco1.jpg?fit=413%2C589&ssl=1",
    image2: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/06/cusco3.jpg?fit=413%2C282&ssl=1",
    image3: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/06/cusco2.jpg?fit=413%2C295&ssl=1",
    partnersVariant: "single",
    partners: [
      { image: "...", name: "Titilaka" },
    ],
  },


  {
    fondo: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/04/sacred-valley-portada.jpg?fit=1920%2C900&ssl=1",
    distrito: "sacred-valley",
    title: "Sacred Valley",
    description: "This amazing valley offers a glimpse into Peruvian history and allows travellers exploring numerous Inca archaeological sites, visiting typical Andean villages that have retained their ancestral customs and traditions, and enjoying fascinating landscapes. Some highlights of the Sacred Valley of the Incas are the local market and the agricultural terraces of Pisac, the fortress of Ollantaytambo -one of the best testimonies of the Incan architectural work-, the more than 5,000 salt ponds located in Maras, the agricultural terraces of Moray; and the town of Chinchero, famous for its textile houses, the Sunday local market and the Inca agricultural terraces located in the surrounding area. If you are an adrenaline lover, you cannot miss the opportunity to paraglide over the Andes, practice rafting in the Urubamba river or to drive an ATV across the valley.",
    image1: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/06/sv1.jpg?fit=413%2C589&ssl=1",
    image2: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/06/sv2-2.jpg?fit=413%2C282&ssl=1",
    image3: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/06/sv2.jpg?fit=413%2C295&ssl=1",
    partnersVariant: "default",
    partners: [
      { image: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/07/tambo-inka.jpg?fit=450%2C380&ssl=1", name: "Tambo del inka, A Luxury Collection", link: "#" },
      { image: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/07/Belmond-rio-sagrado.jpg?fit=450%2C380&ssl=1", name: "Rio Sagardo, A Belmond Hotel Sacred Valley", link: "#" },
      { image: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/07/inkaterra-hacienda.jpg?fit=450%2C380&ssl=1", name: "Inkaterra Hacienda Urubamba", link: "#" },
    ],
  },
  {
    fondo: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/05/banner-amazon-river-cruises.png?resize=1536%2C560&ssl=1",
    distrito: "amazon-river-cruises",
    title: "Amazon River Cruises",
    description: "Sitting at 3,820 meters above sea level, Lake Titicaca is famous for being the highest navigable lake in the world. As the scenery of this place is unique, it deserves a closer inspection. A boat trip through the lake will allow you to enjoy a mix of stunning landscapes and a very interesting culture. The first stop is the Uros Floating Islands. These islands are made of interweaved reeds that have sustained a traditional way of life since the time of the Incas. Locals build their boats, houses and even furniture from totora reeds, a plant that prolifers on this part of the lake. Taquile is a remote island in the middle of Lake Titicaca. In this island, locals keep the traditional lifestyle uninterrupted from modernization. Taquile offers beautiful hikes with beautiful scenery and views of the lake. Another interesting attraction in the region is Sillustani. In this place, you can find very impressive funerary towers, called chullpas. These chullpas represent a pre-Inca burial ground and most of them are located around the bank of the Lake Umayo.",
    image1: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/05/aria-amazon.png?fit=413%2C589&ssl=1",
    image2: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/05/amazon-cruises.png?fit=1680%2C1205&ssl=1",
    image3: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/05/amazon-cruises2.png?fit=413%2C282&ssl=1",

    partnersVariant: "detailed",
    partners: [
      { image: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/05/aria-cruises.jpg?fit=800%2C583&ssl=1", name: "Aria Amazon", description: "A five-star, eco-friendly, luxury and comfort vessel. Sail the Aria Amazon, an all-inclusive luxury Amazon river cruise experience with spacious suites, Amazonian cuisine and expert-guided wildlife excursions.", link: "#"},
      { image: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/05/delfin1-cruises.jpg?fit=800%2C583&ssl=1", name: "Delfin I", description: "This river vessel takes you one step beyond in terms of service, intimacy and personal attention. It offers only 04 exclusive oversized suites with panoramic private terraces; 02 of these with a private whirlpool for the ultimate treat.", link:"#"},
      { image: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/05/delfin2-cruises.jpg?fit=800%2C583&ssl=1", name: "Delfin II", description: "The 14 cabins of this vessel include 04 Master Suites with 180° panoramic windows and 10 Suites -including 02 sets of Suites that can be interconnected to accomodate families- with movie screen size windows and first-rate design.", link:"#" },
    ],
  },

  {
    fondo: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/05/luxury-train.png?w=1920&ssl=1",
    distrito: "luxury-trains",
    title: "Elegance on Rails: The Art of Traveling Through Peru on Luxury Trains",
    description: "Discover the most exquisite Peru aboard luxury trains that redefine the notion of travel. Refined ambience, impeccable service and sublime scenery combine in a journey that celebrates sophistication in every detail. From Belle Époque-inspired lounges to private suites overlooking the Andes, every moment is designed to delight the senses. More than a transfer, it is an immersive experience where luxury moves to the rhythm of the Peruvian landscape.",
    image1: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/05/luxury-train.jpg?fit=413%2C589&ssl=1",
    image2: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/05/luxury-train2.jpg?fit=1680%2C1205&ssl=1",
    image3: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/05/luxury-train3.jpg?fit=413%2C282&ssl=1",


    partnersVariant: "detailed",
    partners: [
      { image: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/05/hiram-bingham.jpg?fit=800%2C583&ssl=1", name: "Belmond Hiram Bingham", description: "Launched in 2003 to escort guests in lavish style high into the Andes. The train carries guests in unrivaled style between Cusco, the Sacred Valley and Machu Picchu. During this journey, you can relax in 1920s-style carriages featuring highly polished wood and brass décor and enjoy gourmet dining, vibrant entertainment and awe-inspiring views. Here, elegance and old-fashioned charm come first.", link: "#"},
      { image: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/05/andean-explorer.jpg?fit=800%2C583&ssl=1", name: "Belmond Andean Explorer", description: "Discover pioneering luxury and breathtaking rural mountainscapes on the world’s highest rail route. South America’s first luxury sleeper train glides from Cusco, the capital of the Inca Empire, across the lofty Andean plains to the white city of Arequipa. Take in the region’s spectacular highlights en route, including Lake Titicaca and the Sumbay Caves.",  link: "#"},
    ],

  },

  {
    fondo: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/05/luxury-train.png?w=1920&ssl=1",
    distrito: "nazca-paracas",
    title: "Nazca Paracas",
    description: "Discover the most exquisite Peru aboard luxury trains that redefine the notion of travel. Refined ambience, impeccable service and sublime scenery combine in a journey that celebrates sophistication in every detail. From Belle Époque-inspired lounges to private suites overlooking the Andes, every moment is designed to delight the senses. More than a transfer, it is an immersive experience where luxury moves to the rhythm of the Peruvian landscape.",
    image1: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/05/luxury-train.jpg?fit=413%2C589&ssl=1",
    image2: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/05/luxury-train2.jpg?fit=1680%2C1205&ssl=1",
    image3: "https://i0.wp.com/peruluxuryjourneys.com/wp-content/uploads/2025/05/luxury-train3.jpg?fit=413%2C282&ssl=1",

    partnersVariant: "default",
    partners: [
      { image: "...", name: "Miraflores Park, A Belmond Hotel", link: "#" },
      { image: "...", name: "Hotel B", link: "#" },
      { image: "...", name: "JW Marriott Hotel Lima", link: "#" },
    ],

  },
];