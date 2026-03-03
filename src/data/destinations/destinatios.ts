

export interface ExceptionalExperience {
  image: string;
  name: string;
  description?: string;
  link?: string;
}

export interface Destination {
  fondo: string;
  distrito: string;
  titleSEO: string;
  title: string;
  description: string;
  image1: string;
  image2: string;
  image3: string;
  partnersTitle?: string;
  execptionalEXperience: ExceptionalExperience[];
}

export const destinations: Destination[] = [

  {
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/banner-about-us3_w9sapa.webp",
    distrito: "lima",
    title: "Lima",
    titleSEO:  "Lima",
    description: "Lima, known as “the City of Kings”, is usually the first step in a journey to Peru. It is a city that blends modern neighbourhoods with the colonial-style buildings of the Main Plaza. Barranco has a large collection of museums, iconic bars and restaurants, shops and art studios. Miraflores, the tourist district for excellence, offers beautiful parks along its boardwalk, with stunning views of the Pacific Ocean. You can enjoy lovely sunsets from Larcomar, a shopping mall located in the heart of the district. Lima has plenty of colonial buildings to see. It is a must to walk around the Historical Centre of the city, considered as a World Heritage Site by UNESCO. It really worth to visit the Plaza de Armas where the Presidential Palace and the Archbishop Palace are located, the Aliaga House -the oldest Colonial mansion in Lima-, the Municipal Palace and the Monastery of San Francisco, famous for its baroque architecture and for its catacombs. Considered the Gastronomic Capital of Latin America, Lima has become the culinary hub of several huariques -small and family-run restaurants that keep traditional recipes- and many fancy and renowned restaurants included in The World’s 50 Best Restaurants list.",
  
    image1: "https://res.cloudinary.com/dlgeap8h0/image/upload/Lima1_qwgyub.webp",    
    image2: "https://res.cloudinary.com/dlgeap8h0/image/upload/Lima2_obyqay.webp",
    image3: "https://res.cloudinary.com/dlgeap8h0/image/upload/Lima3_oipvsa.webp",
    


    execptionalEXperience: [
      { image: "https://res.cloudinary.com/dlgeap8h0/image/upload/Miraflores-Park_k8kxau.webp", name: "Miraflores Park, A Belmond Hotel", link: "belmond-miraflores-park" },
      { image: "https://res.cloudinary.com/dlgeap8h0/image/upload/Hotel-B_wzettc.webp", name: "Hotel B", link: "#" },
      { image: "https://res.cloudinary.com/dlgeap8h0/image/upload/Marriott-Miraflores_obgk9p.webp", name: "JW Marriott Hotel Lima", link: "#" },
      { image: "https://res.cloudinary.com/dlgeap8h0/image/upload/AC_j04ali.webp", name: "AC Hotel Lima Miraflores", link: "#" },
    ],
  },

  
  {
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/Cusco-portada2_wp8tjx.webp",
    distrito: "cusco",
    title: "Cusco",    
    titleSEO:  "Cusco",

    partnersTitle: "Our Parners",

    description: "Cusco, the former capital of the Incan empire is also renowned as the navel of the Earth. This is a captivating city that blends narrow cobblestone streets, big inca stone walls and colonial period architecture. Inca Temples and Fortresses can be visited in this city. Koricancha, the Sun Temple, combines the Spanish and Incan influences in Cusco and it is located a few blocks from the Main Plaza. Sacsayhuaman is an archaeological site with very impressive stonework. It used to be a very important ceremonial place for the Incas. Visiting the San Pedro Market is a must. Its colorful aisles, kind vendors and fresh products are part of the experience in order to feel the authentic vibe of this city. Finally, do not forget to visit the artisan neighborhood of San Blas. Many of its cafes and bars offer great panoramic views of the city.",
    image1: "https://res.cloudinary.com/dlgeap8h0/image/upload/cusco1_vqhjoe.webp",
    image2: "https://res.cloudinary.com/dlgeap8h0/image/upload/cusco3_fqisku.webp",
    image3: "https://res.cloudinary.com/dlgeap8h0/image/upload/cusco2_zzjztu.webp",


    execptionalEXperience: [
      { image: "https://res.cloudinary.com/dlgeap8h0/image/upload/Miraflores-Park_k8kxau.webp", name: "Miraflores Park, A Belmond Hotel", link: "#" },
      { image: "https://res.cloudinary.com/dlgeap8h0/image/upload/Hotel-B_wzettc.webp", name: "Hotel B", link: "#" },
      { image: "https://res.cloudinary.com/dlgeap8h0/image/upload/Marriott-Miraflores_obgk9p.webp", name: "JW Marriott Hotel Lima", link: "#" },
      { image: "https://res.cloudinary.com/dlgeap8h0/image/upload/Westin_wieilw.webp", name: "The Westin Lima Hotel & Convention Center", link: "#" },
    ],

  },


  {
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/mapi-portada_vvfhnw.webp",
    distrito: "machu-picchu",
    title: "Machu Picchu",
    titleSEO:  "Machu Picchu",
    partnersTitle: "Luxury Amazon Cruises",

    description: "Machu Picchu is considered one of the New Seven Wonders of the World and it is -definitely- the main tourist attraction in Peru. Built in the 1400s, the citadel of Machu Picchu is a masterpiece of architecture and engineering that demanded massive amounts of labor. It was a religious, political and administrative center, in perfect harmony with nature and represents the most important and well-known legacy of the Inca civilization. With 2,430 m.a.s.l., and located 80 km northwest of Cuzco, this UNESCO World Heritage Site is also one of the most biological wealth areas in the country and harbors more than 20 Andean and Amazonian ecosystems. The easiest way to get to Machu Picchu is by train but if you like hiking and adventure is your passion, you have to try the famous Inca Trail. It is worth the challenge because of the wonderful views of the highlands and the adventure of walking by the same path as the Incas used to use in the past.",
    image1: "https://res.cloudinary.com/dlgeap8h0/image/upload/mapi11_x6owuk.webp",
    image2: "https://res.cloudinary.com/dlgeap8h0/image/upload/mapi22_cdjtrl.webp",
    image3: "https://res.cloudinary.com/dlgeap8h0/image/upload/mapi33_tvifmb.webp",

    execptionalEXperience: [
      { image: "https://res.cloudinary.com/dlgeap8h0/image/upload/Miraflores-Park_k8kxau.webp", name: "Miraflores Park, A Belmond Hotel", link: "/capilla" },
      { image: "https://res.cloudinary.com/dlgeap8h0/image/upload/Hotel-B_wzettc.webp", name: "Hotel B", link: "#" },
      { image: "https://res.cloudinary.com/dlgeap8h0/image/upload/Marriott-Miraflores_obgk9p.webp", name: "JW Marriott Hotel Lima", link: "#" },
      { image: "https://res.cloudinary.com/dlgeap8h0/image/upload/AC_j04ali.webp", name: "AC Hotel Lima Miraflores", link: "#" },
    ],

  },

  

  {
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/Arequipa-portada_gfm0cu.webp",
    distrito: "arequipa",
    title: "Arequipa",
    titleSEO:  "Arequipa",
    partnersTitle: "Our Parners",

    description: "Sitting at 3,820 meters above sea level, Lake Titicaca is famous for being the highest navigable lake in the world. As the scenery of this place is unique, it deserves a closer inspection. A boat trip through the lake will allow you to enjoy a mix of stunning landscapes and a very interesting culture. The first stop is the Uros Floating Islands. These islands are made of interweaved reeds that have sustained a traditional way of life since the time of the Incas. Locals build their boats, houses and even furniture from totora reeds, a plant that prolifers on this part of the lake. Taquile is a remote island in the middle of Lake Titicaca. In this island, locals keep the traditional lifestyle uninterrupted from modernization. Taquile offers beautiful hikes with beautiful scenery and views of the lake. Another interesting attraction in the region is Sillustani. In this place, you can find very impressive funerary towers, called chullpas. These chullpas represent a pre-Inca burial ground and most of them are located around the bank of the Lake Umayo.",
    image1: "https://res.cloudinary.com/dlgeap8h0/image/upload/arequipa1_z8m0nx.webp",
    image2: "https://res.cloudinary.com/dlgeap8h0/image/upload/arequipa3_nwxkcp.webp",
    image3: "https://res.cloudinary.com/dlgeap8h0/image/upload/arequipa2_v5zysp.webp",

    execptionalEXperience: [
      { image: "https://res.cloudinary.com/dlgeap8h0/image/upload/Miraflores-Park_k8kxau.webp", name: "Miraflores Park, A Belmond Hotel", link: "/capilla" },
      { image: "https://res.cloudinary.com/dlgeap8h0/image/upload/Westin_wieilw.webp", name: "The Westin Lima Hotel & Convention Center", link: "#" },
      { image: "https://res.cloudinary.com/dlgeap8h0/image/upload/country-club_zshijx.webp", name: "Country Club Lima Hotel", link: "#" },
      { image: "https://res.cloudinary.com/dlgeap8h0/image/upload/AC_j04ali.webp", name: "AC Hotel Lima Miraflores", link: "#" },
    ],

  },


  {
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/Titicaca-Lake-portada2_jfbusw.webp",
    distrito: "puno",
    title: "Puno",
    titleSEO:  "Puno",
    partnersTitle: "Our Parners",

    description: "Sitting at 3,820 meters above sea level, Lake Titicaca is famous for being the highest navigable lake in the world. As the scenery of this place is unique, it deserves a closer inspection. A boat trip through the lake will allow you to enjoy a mix of stunning landscapes and a very interesting culture. The first stop is the Uros Floating Islands. These islands are made of interweaved reeds that have sustained a traditional way of life since the time of the Incas. Locals build their boats, houses and even furniture from totora reeds, a plant that prolifers on this part of the lake. Taquile is a remote island in the middle of Lake Titicaca. In this island, locals keep the traditional lifestyle uninterrupted from modernization. Taquile offers beautiful hikes with beautiful scenery and views of the lake. Another interesting attraction in the region is Sillustani. In this place, you can find very impressive funerary towers, called chullpas. These chullpas represent a pre-Inca burial ground and most of them are located around the bank of the Lake Umayo.",
    image1: "https://res.cloudinary.com/dlgeap8h0/image/upload/Puno1_qsrtbj.webp",
    image2: "https://res.cloudinary.com/dlgeap8h0/image/upload/Puno2_cu7eos.webp",
    image3: "https://res.cloudinary.com/dlgeap8h0/image/upload/Puno3_pruvdn.webp",
   
    execptionalEXperience: [
      { image: "https://res.cloudinary.com/dlgeap8h0/image/upload/Marriott-Miraflores_obgk9p.webp", name: "JW Marriott Hotel Lima", link: "#" },
      { image: "https://res.cloudinary.com/dlgeap8h0/image/upload/Westin_wieilw.webp", name: "The Westin Lima Hotel & Convention Center", link: "#" },
      { image: "https://res.cloudinary.com/dlgeap8h0/image/upload/country-club_zshijx.webp", name: "Country Club Lima Hotel", link: "#" },
      { image: "https://res.cloudinary.com/dlgeap8h0/image/upload/AC_j04ali.webp", name: "AC Hotel Lima Miraflores", link: "#" },
    ],

  },


  {
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/sacred-valley-portada_c39kms.webp",
    distrito: "sacred-valley",
    title: "Sacred Valley",
    titleSEO:  "Sacred Valley",
    partnersTitle: "Our Parners",

    description: "This amazing valley offers a glimpse into Peruvian history and allows travellers exploring numerous Inca archaeological sites, visiting typical Andean villages that have retained their ancestral customs and traditions, and enjoying fascinating landscapes. Some highlights of the Sacred Valley of the Incas are the local market and the agricultural terraces of Pisac, the fortress of Ollantaytambo -one of the best testimonies of the Incan architectural work-, the more than 5,000 salt ponds located in Maras, the agricultural terraces of Moray; and the town of Chinchero, famous for its textile houses, the Sunday local market and the Inca agricultural terraces located in the surrounding area. If you are an adrenaline lover, you cannot miss the opportunity to paraglide over the Andes, practice rafting in the Urubamba river or to drive an ATV across the valley.",
    image1: "https://res.cloudinary.com/dlgeap8h0/image/upload/sv1_w8jas3.webp",
    image2: "https://res.cloudinary.com/dlgeap8h0/image/upload/sv2-2_f3xlg8.webp",
    image3: "https://res.cloudinary.com/dlgeap8h0/image/upload/sv2_lu3d4q.webp",
  
    execptionalEXperience: [
      { image: "https://res.cloudinary.com/dlgeap8h0/image/upload/Miraflores-Park_k8kxau.webp", name: "Miraflores Park, A Belmond Hotel", link: "/chinchero-town" },
      { image: "https://res.cloudinary.com/dlgeap8h0/image/upload/Westin_wieilw.webp", name: "The Westin Lima Hotel & Convention Center", link: "/ollantaytambo-town" },
      { image: "https://res.cloudinary.com/dlgeap8h0/image/upload/country-club_zshijx.webp", name: "Country Club Lima Hotel", link: "/pachamanca-inca" },
      { image: "https://res.cloudinary.com/dlgeap8h0/image/upload/AC_j04ali.webp", name: "AC Hotel Lima Miraflores", link: "#" },
    ],

  },
  {
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/banner-amazon-river-cruises_orie2a.webp",
    distrito: "amazon-river-cruises",
    title: "Amazon River Cruises",
    titleSEO:  "Amazon River Cruises",
    partnersTitle: "Luxury Amazon Cruises",
    description: "Sitting at 3,820 meters above sea level, Lake Titicaca is famous for being the highest navigable lake in the world. As the scenery of this place is unique, it deserves a closer inspection. A boat trip through the lake will allow you to enjoy a mix of stunning landscapes and a very interesting culture. The first stop is the Uros Floating Islands. These islands are made of interweaved reeds that have sustained a traditional way of life since the time of the Incas. Locals build their boats, houses and even furniture from totora reeds, a plant that prolifers on this part of the lake. Taquile is a remote island in the middle of Lake Titicaca. In this island, locals keep the traditional lifestyle uninterrupted from modernization. Taquile offers beautiful hikes with beautiful scenery and views of the lake. Another interesting attraction in the region is Sillustani. In this place, you can find very impressive funerary towers, called chullpas. These chullpas represent a pre-Inca burial ground and most of them are located around the bank of the Lake Umayo.",
    image1: "https://res.cloudinary.com/dlgeap8h0/image/upload/aria-amazon_yumjct.webp",
    image2: "https://res.cloudinary.com/dlgeap8h0/image/upload/amazon-cruises2_zoucke.webp",
    image3: "https://res.cloudinary.com/dlgeap8h0/image/upload/amazon-cruises_p0ij0b.webp",

    execptionalEXperience: [
      { image: "https://res.cloudinary.com/dlgeap8h0/image/upload/Miraflores-Park_k8kxau.webp", name: "Miraflores Park, A Belmond Hotel", link: "/capilla" },
      { image: "https://res.cloudinary.com/dlgeap8h0/image/upload/Hotel-B_wzettc.webp", name: "Hotel B", link: "#" },
      { image: "https://res.cloudinary.com/dlgeap8h0/image/upload/Marriott-Miraflores_obgk9p.webp", name: "JW Marriott Hotel Lima", link: "#" },
      { image: "https://res.cloudinary.com/dlgeap8h0/image/upload/country-club_zshijx.webp", name: "Country Club Lima Hotel", link: "#" },
    ],

  },
  {
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/luxury-train_i18flh.webp",
    distrito: "luxury-trains",
    title: "Elegance on Rails: The Art of Traveling Through Peru on Luxury Trains",
    titleSEO:  "Luxury Trains",
    partnersTitle: "Luxury Trains",
    description: "Discover the most exquisite Peru aboard luxury trains that redefine the notion of travel. Refined ambience, impeccable service and sublime scenery combine in a journey that celebrates sophistication in every detail. From Belle Époque-inspired lounges to private suites overlooking the Andes, every moment is designed to delight the senses. More than a transfer, it is an immersive experience where luxury moves to the rhythm of the Peruvian landscape.",
    image1: "https://res.cloudinary.com/dlgeap8h0/image/upload/luxury-train_dlzryx.webp",
    image2: "https://res.cloudinary.com/dlgeap8h0/image/upload/luxury-train2_stgvca.webp",
    image3: "https://res.cloudinary.com/dlgeap8h0/image/upload/luxury-train3_w9ysql.webp",

    execptionalEXperience: [
      { image: "https://res.cloudinary.com/dlgeap8h0/image/upload/Miraflores-Park_k8kxau.webp", name: "Miraflores Park, A Belmond Hotel", link: "/capilla" },
      { image: "https://res.cloudinary.com/dlgeap8h0/image/upload/Hotel-B_wzettc.webp", name: "Hotel B", link: "#" },
      { image: "https://res.cloudinary.com/dlgeap8h0/image/upload/country-club_zshijx.webp", name: "Country Club Lima Hotel", link: "#" },
      { image: "https://res.cloudinary.com/dlgeap8h0/image/upload/AC_j04ali.webp", name: "AC Hotel Lima Miraflores", link: "#" },
    ],


  },

  {
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772557280/Paracas_2_qqpyvv.jpg",
    distrito: "nazca-paracas",
    title: "Nazca & Paracas",
    titleSEO:  "Nazca Paracas",
    description: "Ica is located south of Lima. This region has a remarkable geography as it is formed by coastal plains. Pisco, one of its provinces, is the place where our national liquor -of the same name- originated. Pisco is also famous for its National Reserve Paracas, a perfect destination for those who love nature. The Ballestas Islands is an ecological area with an great diversity in marine life as Humboldt penguins and sea lions, and vast colonies of sea birds. On the other hand, the endless kilometers of sand dunes in this region represent a perfect rough terrain for 4×4 trips for the adventure travelers. Dinners in the middle of the desert are also set in this area. Another good reason to visit Ica is the enigmatic Nazca Lines. Just a short flight away from Pisco you will be able to discover a group of geoglyphs traced onto the surface of the Nazca Desert. The figures vary in complexity. From the sky, the Spider, the Hummingbird, the Condor, the Monkey and some other zoomorphic designs and geometric shapes are clearly visible. This place was declared a World Heritage Site by UNESCO in 1994",
    image1: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772557571/ica-5_i0wshc.jpg",
    image2: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772557572/ica-1_dpnpfx.jpg",
    image3: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772557572/ica-portada_wgf5fw.jpg",


    execptionalEXperience: [
      { image: "https://res.cloudinary.com/dlgeap8h0/image/upload/Marriott-Miraflores_obgk9p.webp", name: "JW Marriott Hotel Lima", link: "#" },
      { image: "https://res.cloudinary.com/dlgeap8h0/image/upload/Westin_wieilw.webp", name: "The Westin Lima Hotel & Convention Center", link: "#" },
      { image: "https://res.cloudinary.com/dlgeap8h0/image/upload/country-club_zshijx.webp", name: "Country Club Lima Hotel", link: "#" },
      { image: "https://res.cloudinary.com/dlgeap8h0/image/upload/AC_j04ali.webp", name: "AC Hotel Lima Miraflores", link: "#" },
    ],
  },
];