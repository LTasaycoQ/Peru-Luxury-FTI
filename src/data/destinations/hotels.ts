export interface hotelimg {
  image:string;
}
export interface Hotel {
  slug: string;
  description: string;
  title: string;
  fondo: string;
  destination: string;
  hotelImage?: hotelimg[];
}

export const hotels: Hotel[] = [

  // 1️⃣ LIMA
  {
    slug: "belmond-miraflores-park",
    title: "Miraflores Park, A Belmond Hotel",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/Miraflores-Park_k8kxau.webp",
    description:"Set in a verdant garden, Belmond Miraflores Park is a true urban sanctuary beside the city’s cultural gems. Located in Miraflores, one of the most exclusive residential areas of Lima, this boutique hotel offers awesome views over the Pacific Ocean. Its modern facilities, spacious suites and personalized service make this hotel the perfect place for travelers. Tragaluz restaurant offers a wide variety of international dishes with Asian, Mediterranean and Peruvian touches, as well as innovative cocktails and snacks served on an elegant terrace.",
    destination: "lima",
    hotelImage: [
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/Rest_3_ccdipv.webp"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1771862497/Lima3_oipvsa.webp"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/Rest_3_ccdipv.webp"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/Rest_3_ccdipv.webp"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/Rest_3_ccdipv.webp"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/Rest_3_ccdipv.webp"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/Rest_3_ccdipv.webp"},
    ],
  },
  {
    slug: "hotel-b",
    title: "Hotel B",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/Hotel-B_wzettc.webp",
    description:"The first Relais &amp; Châteaux hotel in Lima is ideally located in the heart of Barranco, the most bohemian and artistic district in the city. The house is a pristine example of a Belle Époque mansion, originally built in 1914. It offers 20 guestrooms; ten of them have been restored to maintain the spirit of this grand house and equipped with modern comforts; in addition to seven annexed rooms in the contemporary wing and three new ones over the art gallery. The bar &amp; restaurant hosts a lively mix of savvy locals and inquisitive travelers open for coffee, meals, tea time or drinks. The Grand Room is decorated to recall the bohemian cafes, a traditional hotel bar with stunning pieces of modern art.",
    destination: "lima",
  },
  {
    slug: "jw-marriott-lima",
    title: "JW Marriott Hotel Lima",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/Marriott-Miraflores_obgk9p.webp",
    description:"It is located in Lima’s vibrant financial and exclusive district of San Isidro. All 301 spacious and elegant guest rooms and suites, with incredible views of the city, are designed so that you are guaranteed perfect rest and comfort with our famous Heavenly Bed® and Heavenly Bath®. It has also been recognized by TripAdvisor in 3 categories of Travelers’ Choice Award 2017, as one of the most luxurious hotels in South America and with the most exceptional service. Heavenly Spa by Westin® is considered the largest urban spa in South America. It has 17 treatment rooms and a great variety of services, designed tailor-made to our clients.",
    destination: "lima",
  },
  {
    slug: "ac-hotel-lima",
    title: "AC Hotel Lima Miraflores",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/AC_j04ali.webp",
    description:"AC Hotel Lima Miraflores enjoys an unbeatable location at Malecon de la Reserva, with a stunning ocean view in Miraflores. In summer, beautiful sunsets are part of the hotel´s landscape, since they can be seen from AC Lounge and Bar, most of the rooms and the rooftop. In addition, AC Hotel Lima Miraflores is located a few minutes ́walk from popular  attractions as Kennedy Park, where travellers immerse themselves into the local culture, the Indigenous Market, where beautiful handcrafts can be bought and next to Larcomar, an upscale shopping center with a vast variety of dining options and well-known brand stores.",
    destination: "lima",
  },
  {
    slug: "country-club-lima",
    title: "Country Club Lima Hotel",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/country-club_zshijx.webp",
    description:"Walking through Country Club Lima Hotel means being a part of Lima’s history: cosmopolitan, traditional, unique. Each corner of the hotel houses a story, a legend, a mystery, as well as more than 300 works of art from the Pedro de Osma Museum, which tell the tale of the city’s past. The hotel recently underwent a remodeling that emphasizes the classic architecture while highlighting a new, contemporary design tailored to the needs of the modern traveler. The result is a perfect unity of the glamour of the past and the vanguard of the present.",
    destination: "lima",
  },

  {
    slug: "the-westin-hotel",
    title: "The Westin Lima Hotel & Convention Center ",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/country-club_zshijx.webp",
    description:"It is located in Lima’s vibrant financial and exclusive district of San Isidro. All 301 spacious and elegant guest rooms and suites, with incredible views of the city, are designed so that you are guaranteed perfect rest and comfort with our famous Heavenly Bed® and Heavenly Bath®. It has also been recognized by TripAdvisor in 3 categories of Travelers’ Choice Award 2017, as one of the most luxurious hotels in South America and with the most exceptional service. Heavenly Spa by Westin® is considered the largest urban spa in South America. It has 17 treatment rooms and a great variety of services, designed tailor-made to our clients.",
    destination: "lima",
  },

  // 2️⃣ CUSCO
  {
    slug: "monasterio-belmond",
    title: "Monasterio, A Belmond Hotel Cusco",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/monasterio_v66tbl.webp",
    description:"Steps from Cusco’s lively Central Square lies Belmond Hotel Monasterio, a restored 16th century monastery and one of the city’s most cherished landmarks. Set around a stunning central courtyard with a 300-year-old cedar tree, this charming retreat is known for its exceptional architecture, including a gilded chapel hung with fine works of art. As the original architecture of the monastery remains lergely unchanged, our enchanting rooms reflect their origins as homes of Jesuit seminarians. No two are alike and all vary in size and format. Three times a week, we stage a vibrant opera night featuring Cusco´s finest tenor and soprano.",
    destination: "cusco",
  },


    {
    slug: "palacio-nazarenas",
    title: "Palacio Nazarenas",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/monasterio_v66tbl.webp",
    description: "Set in a tranquil plaza behind Cusco’s Main Square, this restored 17th-Century Palace and Convent is now one of the city’s most exclusive hotels. An irresistible mix of ancient and modern, it blends inca walls, a cloistered courtyard and ancient fountain with a fabulous spa, the city’s first outdoor pool and a cuttingedge restaurant. With a blend of understated elegance and Peruvian flourishes, each boutique suite is a spacious sanctuary. Oxygen-enriched air enhances wellbeing, while delicate Andean aromas revive and rejuvenate. All suites feature Peruvian travertine decor and exquisite views of the hotel courtyard or beyond.",
    destination: "cusco",
  },

      {
    slug: "inkaterra-la-casona",
    title: "Inkaterra La Casona Relais Chateau ",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/monasterio_v66tbl.webp",
    description:"A grand colonial-era manor house steeped in history, Inkaterra La Casona is an exclusive boutique retreat. Located on the charming Plaza Las Nazarenas in the heart of the city’s historic centre, it was formerly the private pad of Spanish conquistadors. Today the meticulously restored 16th century abode is a national historic monument and hides 11 sumptuous suites around a grassy, arcaded courtyard patio. Replete with exquisite antiques and traditional warm- hued textiles, characterful original features are complemented by contemporary comforts of underfloor heating and decadent bathrooms. The personalised service of Peru’s first luxury Relais &amp; Chateaux property is that of an intimate, private home, providing the perfect hideaway to discover the imperial city of the Incas.",
    destination: "cusco",
  },
  {
    slug: "jw-marriott-cusco",
    title: "JW Marriott El Convento Cusco",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/marriott-cusco_jhzguk.webp",
    description:"Located three blocks away from the Historic Center of the city of Cusco, the JW Marriott El Convento Cusco has a personalized design surrounding the ancient Colonial San Agustin Convent of the XVI century declared cultural heritage by the Peruvian government. Carefully restored, one can appreciate archaeological ruins from the pre-Inca, Inca, Colonial, Republican and Contemporary periods, which give the hotel a unique character offering an incomparable cultural experience to its visitors. Being the first Marriott property built at 3,400 masl, it has 153 rooms all with a supplementary oxygen system. The hotel has a spa, restaurant, bar, meeting rooms and archaeological exhibition rooms.",
    destination: "cusco",
  },
  {
    slug: "palacio-del-inka",
    title: "Palacio del Inka, A Luxury Collection",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/palacio-del-inka_iyacvk.webp",
    description:"This hotel shares the archeological jewels and the combination of Inca and colonial architecture of the city. The hotel has been declared a Cultural Heritage of the city of Cusco as it was part of the most famous and sacred temple of Incan times, the Qorikancha or Temple of the Sun, and also one of the most acclaimed residences of Colonial Peru, the “Casona de los Cuatro Bustos”. Its 203 rooms and suites have been designed to offer the best rest. Most of them feature details carved in wood and many have friezes and ceilings hand-painted by famous local artists.",
    destination: "cusco",
  },

  // 3️⃣ MACHU PICCHU
  {
    slug: "sanctuary-lodge",
    title: "Sanctuary Lodge, A Belmond Hotel",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/Sanctuary-lodge_fcinjh.webp",
    description:"Boasting an exclusive location just steps from the entrance to the Sanctuary of Machu Picchu, our uniquely privileged position offers guests unrivalled accesos to the Sacred Citadel. Visit early in the morning when it is magically quiet just as the crowds are arriving, return to our mountain retreat to find an oasis of calm. Relax in the orchid gardens spotting hummingbirds or meditate facing the Huayna Picchu Mountain. Unwind with a yoga session, take part in a traditional shaman ceremony in the garden, or sip muña tea in Tampu Bar. Tranquility, wonder and beauty are at the heart of our unique experience.",
    destination: "machu-picchu",
  },
  {
    slug: "inkaterra-machu-picchu",
    title: "Inkaterra Machu Picchu Pueblo Hotel",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/inkaterra-mapi_xhz39g.webp",
    description:"This National Geographic Unique Lodge of the World has the character of an intimate Andean-style village on the hill slope, waterfalls, stone pathways and 83 whitewashed adobe casitas tucked away in the Andean cloud forest. Within its five hectares (12.3 acres) of exquisite natural beauty, 214 bird species have been registered; as also the world’s largest native orchid collection (372 species) in its natural habitat. The renowned Unu Spa combines classic nurturing with a mystical Andean approach and the first-class restaurant shares the secrets of Peruvian cuisine with a contemporary twist.",
    destination: "machu-picchu",
  },
  {
    slug: "sumaq-machu-picchu",
    title: "Sumaq Machu Picchu Hotel",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/sumaq_rhesqt.webp",
    description:"Sumaq Machu Picchu hotel, named one of South America’s best hotels by Condé Nast Traveler and Travel + Leisure, is located at the foot of the historic sanctuary of Machu Picchu near the beautiful Vilcanota River, and offers impressive views of the mountains and landscapes. A hotel with a contemporary Andean style inspired by the ancient Peruvian cultures, this hotel offers personalized luxury service, innovative Peruvian cuisine, and a relaxing spa that features ancient Inca treatments for the body and mind. The luxury property features 62 exquisitely appointed rooms and suites, including 1 imperial suite, 2 junior suites and 59 standard rooms. Sumaq has been awarded Rainforest Alliance certification for its focus on sustainability.",
    destination: "machu-picchu",
  },

  // 4️⃣ AREQUIPA
  {
    slug: "las-casitas-colca",
    title: "Las Casitas, A Belmond Hotel",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/CASITA-GARDEN_goxo5t.webp",
    description:"Surrounded by the spellbinding landscapes of Peru´s plunging Colca Canyon, Belmond Las Casitas offers the ultimate Andean escape. Within our serene gardens lie 20 luxurious cottages and a magnificent spa, all offering spectacular views. Embark on treks through the vast, verdant fields or saunter around the hotel farm. Spend time in harmony with the wonders of nature and learn about the local communities of this lush valley where time stands still. Twenty generous casitas are dotted around the property, including a Presidential Casita. Each offers a luxurious bedroom, attractive lounge and large bathroom, as well as a private terrace and small private heated pool.",
    destination: "arequipa",
  },
  {
    slug: "aranwa-colca",
    title: "Aranwa Pueblito Encantado del Colca",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/DESTINO_iy0m0r.webp",
    description:"It is a dream hotel, full of legends, andean and colonial traditions, surrounded by stunning views, located in the district of Coporaque along the Colca riverbank, three hours from the city of Arequipa. The natural beauty of this place makes their guests enjoy a relaxing experience, allowing them to appreciate the majesty of the andean mountains as they walk through its lush gardens breathing fresh air. At night, hundreds of stars in the sky offer one of the most amazing spectacles that can be observed in nature, along with many shooting stars that create an atmosphere of magic and enchantment.",
    destination: "arequipa",
  },
  {
    slug: "cirqa-arequipa",
    title: "CIRQA",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/CIRQA2_kqgw1k.webp",
    description:"Located in the historic centre of Arequipa, Cirqa shares an age-old bond with the San Agustin Church. Like the Church’s traditional parador, where monks would receive travellers with one-of-a-kind service and hearty cuisine, Cirqa was fervently inspired by the unbounded hospitality and ecclesiastical history that still define Arequipa to its core. Honouring this original concept, Cirqa is a place of both rest and fine cuisine. In the parador, travellers can embark on a myriad of excursions or choose to sample homegrown dishes in the several eating areas. This hotel has 11 rooms in three different categories (Claustro, Aposento and Bóveda) and a patio with heated plunge pool and therapy spa room.",
    destination: "arequipa",
  },

  // 5️⃣ PUNO
  {
    slug: "titilaka",
    title: "Titilaka",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/inkaterra-mapi_xhz39g.webp",
    description:"Titilaka, a remote Experience Lodge on the shores of Lake Titicaca, will immerse you in the intriguing allure of Lake Titicaca where sky, earth, and water connect. Surrounded by stunning scenery and pristine geography, Titilaka’s contemporary design and comfort integrates with the natural environment. Its architectural concept is closely linked to a special place positioned starkly between water, mountains and sky. The Lodge is not only a welcoming lodge full of contemporary comforts and caring services, but a place designed to integrate with the environment and pay homage to the cultures of Lake Titicaca.",
    destination: "puno",
  },

  // 6️⃣ SACRED VALLEY
  {
    slug: "tambo-del-inka",
    title: "Tambo del Inka, A Luxury Collection",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/tambo-inka_rixdeu.webp",
    description:"This hotel has 128 rooms and suites, facing the river or the mountains; some of them have a balcony or terrace. Kallpa Spa, well known as one of the best spas in South America, it offers a wide variety of treatments based on ingredients from the Incas time. The hotel has a heated indoor and outdoor swimming pool, overlooking the mountains. In this property you will find a 5,000 m2 wide organic vegetable garden with products ranging from vegetables, greens, aromatic herbs, among others. The hotel is located close to the main archeological sites and has a private railway station onsite.",
    destination: "sacred-valley",
  },
  {
    slug: "rio-sagrado",
    title: "Rio Sagrado, A Belmond Hotel",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/Belmond-rio-sagrado_va7vha.webp",
    description:"In the Sacred Valley of the Incas, among verdand fields and towering mountains, lies Belmond Hotel Rio Sagrado. Designed in the style of a local village, with charming villas constructed from natural materials, it offers views of the mighty Urubamba River from each of the rooms. Each hideaway sits on a raised terrace that cascades down to the water’s edge. Private balconies offer sublime vistas onto the Sacred Valley. Inside, bright and airy spaces combine with enticing alpaca fabrics and indigenous design flourishes to conjure a sense of serenity.",
    destination: "sacred-valley",
  },
  {
    slug: "inkaterra-hacienda",
    title: "Inkaterra Hacienda Urubamba",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/inkaterra-hacienda_i1y8x9.webp",
    description:"A contemporary hacienda-style hotel overlooking the heart of the Sacred Valley of the Incas, (39mi-63km) from Cusco, on the way to Machu Picchu, among imposing green mountains and harvest fields. All rooms and casitas feature breathtaking views of the Urubamba Mountain Range, immersing guests in open space, serenity and relaxing solitude. The architecture and interiors of this National Geographic Unique Lodge of the World, are inspired by the area’s cultural history, with colonial furniture, authentic Pre-Inca textiles &amp; masks and handcrafted woodwork that add to the hacienda’s Andean charm. An Earth to Table concept is operated with a 10-acre organic plantation where guests are welcome to pick their own produce. Carbon-free crops such as quinoa, Urubamba giant corn, medicinal herbs and a variety of potatoes are farmed with traditional hand tools and oxen, as done centuries ago.",
    destination: "sacred-valley",
  },
  {
    slug: "sol-luna",
    title: "SOL & LUNA",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/inkaterra-hacienda_i1y8x9.webp",
    description:"At an altitude of 2800 m, colours are brilliant: the blue of the sky, the red of the earth and a fragmented mosaic created by a profusion of flowers. Sol &amp; Luna is inspired by this luminous setting and is a paean to the Sacred Valley of the Incas. Its architecture is a mix of avant-garde and primitive Peru, its clay walls are a backdrop to both contemporary and traditional Peruvian art, and its stones, beams and bricks from the valley find their natural home here. Its mouthwatering cuisine also draws its inspiration from local gastronomy, yet with a contemporary twist. Sol &amp; Luna is close to archaeological sites and offers a doorway to this lost civilisation.",
    destination: "sacred-valley",
  },

  // 7️⃣ AMAZON RIVER CRUISES
  {
    slug: "aria-amazon",
    title: "Aria Amazon",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/amazon-cruises_p0ij0b.webp",
    description:"",
    destination: "amazon-river-cruises",
  },
  {
    slug: "delfin-i",
    title: "Delfin I",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/delfin1-cruises_uez3zm.webp",
    description:"",
    destination: "amazon-river-cruises",
  },
  {
    slug: "delfin-ii",
    title: "Delfin II",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/delfin2-cruises_l11b9r.webp",
    description:"",
    destination: "amazon-river-cruises",
  },

  // 8️⃣ LUXURY TRAINS
  {
    slug: "belmond-hiram-bingham",
    title: "Belmond Hiram Bingham",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/hiram-bingham_dfwjik.webp",
    description:"Be swept away by old-world charm as Belmond Hiram Bingham journeys through the Peruvian highlands. Gleaming wood-panelled interiors and brass finishes evoke classic 1920’s parlour cars, while vibrant colours and nature- inspired motifs reveal a distinctly Peruvian soul. Named after the American explorer who re-discovered the site of Machu Picchu, the train invites you to admire the bespoke artwork installation and to delight in exclusive on-board experiences. Savour classic local flavours and gourmet cuisine as the train meanders through the breathtaking Sacred Valley. Celebrate with a lively dance as musicians play in the Bar Car. Marvel at the fertile lands and soaring mountains between Cusco and Machu Picchu. Bring the lost art of the pioneer to life with a thrilling rail adventure through the heart of the Inca Empire on Belmond Hiram Bingham. Ranked as the #10 Best Train in the World – 2020 Readers’ Choice Awards.",
    destination: "luxury-trains",
  },
  {
    slug: "belmond-andean-explorer",
    title: "Belmond Andean Explorer",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/andean-explorer_ry8rv8.webp",
    description:"Fresh, bold and wild, Belmond Andean Explorer arrives on the horizon in striking style as the first luxury sleeper train in South America. The silky midnight-blue livery of the train’s 16 carriages shimmers against the backdrop of Peru’s lofty landscapes as it soars across the Andean plains.Take in the rugged beauty of rural Peru and the tranquility of Lake Titicaca. Discover a floating community at the unique Islas Uros, a fascinating collection of man-made islands using buoyant reeds to stay afloat. Pause en-route from Puno to Cusco at the La Raya market, a colourful stretch of stalls brimming with handicrafts and traditional ware. Arrive in style to Arequipa; Peru’s second city is rich in vibrant colours and enticing spice-laden scents. Journeys from Cusco to Arequipa capture the heart of the Andean region, with a range of inspiring excursions each day. This train marks a departure from classic vintage luxury, instead evoking a contemporary aesthetic perfectly designed to frame the awe-inspiring Andean landscape. Ranked as the #3 Best Train in the World – 2020 Readers’ Choice Awards.",
    destination: "luxury-trains",
  },

  // 9️⃣ NAZCA - PARACAS
  {
    slug: "hotel-paracas",
    title: "Hotel Paracas, A Luxury Collection",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772559657/JARANA-BAR_ux98is.jpg",
    description:"Set in one of the most beautiful natural settings on the Peruvian coast, the Hotel Paracas, a Luxury Collection Resort is part of the Starwood Hotels &amp; Resorts group. The bay is a natural reserve lined with wild beaches and sheltering large populations of sea lions, Humboldt penguins and sea otters. Hotel Paracas is spread over nearly 35 hectares along the bay. It has 120 rooms, two pools, a lounge bar, three restaurants and a spa that offers every luxury imaginable. It also has meeting rooms that can host up to 500 people, a Kid’s Club area, and spaces for reading and family activities. All this contributes to making the Hotel Paracas the very best choice for luxury accommodation along the Peruvian coast.",
    destination: "nazca-paracas",
  },
  {
    slug: "aranwa-paracas",
    title: "Aranwa Paracas Resort & Spa",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772559640/DESTINO_opoomc.jpg",
    description:"Paracas Bay is located in the province of Pisco. This place of wonderful natural diversity invites you to take a journey through its vast and rich history, an invitation difficult to resist. This exclusive and modern hotel is the perfect place to relax and enjoy with your friends, partner or family, as it has special spaces and activities for children. Our spacious and beautiful facilities, exquisite cuisine and excellent service are part of the proposal that Aranwa has for you in this new location. The hotel offers 115 sea view rooms, a spa conditioned to offer an experience of beauty, relaxation and renovation, and modern and exclusive facilities specially designed for conferences, cocktails, parties and important events, which can be held at the Convention Center, Lounge Bar on the pier, chapel, gardens, among others.",
    destination: "nazca-paracas",
  },

];