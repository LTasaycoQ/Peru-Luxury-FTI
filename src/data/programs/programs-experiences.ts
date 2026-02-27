export interface programsData {
  fondo: string;
  name: string;
  title: string;
  text: string;
  programBreve: programBreve[];
  programItenerario: programItenerario[];
  programIncluye: programIncluye[];
  programNoIncluye: programIncluye[];
}

export interface programBreve{
    titulo_breve: string;
    text_breve: string;
}

export interface programItenerario{
    ite_titulo: string;
    ite_text: string;
    ite_image: string;
}

export interface programIncluye {
    text: string;
}
export interface programNoIncluye {
    text: string;
}

export const programs: programsData[] = [

  {
    fondo: "https://img.freepik.com/foto-gratis/disparo-vertical-hombre-acostado-hamaca-junto-cascada-que-fluye-abajo-colina_181624-2060.jpg?t=st=1772206541~exp=1772210141~hmac=c1483eea2dc46f8dd0d27b50fbab89892abf8eddf3a28769b318fcd930a137fc&w=1060",
    title: "Nuevo Programa",
    text: "por implmentar",
    name:"#",


    programBreve: [
        {   titulo_breve: "Dia 1 Lima - Arrival", text_breve: "Llegada a Lima. Por la tarde visita por Lima Colonial y Moderna, visita al Museo Larco.",},
        {   titulo_breve: "Day 2 – Lima (B) City Tour – Modern and Colonial Lima ", text_breve: "Llegada a Lima. Por la tarde visita por Lima Colonial y Moderna, visita al Museo Larco.",},
        {   titulo_breve: "Day 3 – Lima / Cusco / Sacred Valley (B, L)", text_breve: "Llegada a Lima. Por la tarde visita por Lima Colonial y Moderna, visita al Museo Larco.",},
        {   titulo_breve: "Day 4 – Sacred Valley (B) Excursion to Moray Terraces and Maras Salt Pools", text_breve: "Llegada a Lima. Por la tarde visita por Lima Colonial y Moderna, visita al Museo Larco.",},
        {   titulo_breve: "Day 5 – Sacred Valley (B) Visit to Chinchero and Pisac Market", text_breve: "Llegada a Lima. Por la tarde visita por Lima Colonial y Moderna, visita al Museo Larco.",},
        {   titulo_breve: "Day 6 – Sacred Valley / Machu Picchu (B) Machu Picchu excursion aboard the luxury Belmond’s Hiram Bingham Train, operates daily except the last Sunday of the month – Two Night Stay", text_breve: "Llegada a Lima. Por la tarde visita por Lima Colonial y Moderna, visita al Museo Larco.",},  
    ],
    
    programItenerario: [
        {   ite_titulo: "Dia 1 Lima", ite_text: "Una ciudad que vive, donde el pasado se mezcla con el presente. Donde los palacios, monasterios y conventos coloniales existen en asombrosa armonía con modernas edificaciones y las más impresionantes y milenarias huacas Pre-incas. Ya sea en el zaguán de una vieja casona o en la profundidad de una lúgubre catacumba. Lima, la ciudad de los reyes te espera, para deslumbrarte con su magia y embriagarte con su sabor. Al llegar al aeropuerto de Lima, un anfitrión lo recibirá y lo asistirá en su traslado y registro en el hotel. Visita por Lima, moderna y colonial. Una ciudad que siempre te recibirá con los brazos abiertos. La visita a la Lima Colonial incluye un deslumbrador paseo por la Plaza de Armas, enmarcada por la Catedral, el Palacio de Gobierno y el Palacio Torre Tagle transportándote al pasado con solo pisar uno de sus escalones. También pasearemos por Miraflores y San Isidro, dos de los barrios más hermosos y exclusivos de la capital. Disfruta una experiencia fuera de lo común visitando el famoso Museo Larco. Su valiosa colección está compuesta por más de 10.000 piezas de cerámica Mochica, Chimú y de otras civilizaciones Pre-incas. Para los interesados en las costumbres más íntimas de esta antigua cultura, la colección de cerámica erótica del Museo es una representación fiel y única en su género.", ite_image: "",},
        {   ite_titulo: "Dia 2 Lima", ite_text: "Desayuno. Traslado al aeropuerto para tomar el vuelo a Cusco. Al llegar al aeropuerto, un anfitrión lo recibirá y lo asistirá en su traslado y registro en el hotel. Por la tarde la emoción y el asombro serán inigualables, desde la Catedral a la Plaza de Armas, pasando por el Convento de Santo Domingo, construido sobre el famoso Templo del Koricancha; hasta las ruinas de Kenko, Puca Pucará, Tambomachay y la Fortaleza de Sacsayhuamán. Alguna vez el centro de la civilización Inca; Cusco sigue cautivando a sus visitantes, viviendo en sus recuerdos por mucho, mucho tiempo. (D)", ite_image: "",},
        {   ite_titulo: "Dia 3 Lima", ite_text: "Desayuno. Traslado a la estación del tren para iniciar nuestro viaje a la ciudad perdida de los Incas, Machu Picchu. Esta impresionante y colosal ciudadela constituye uno de los más importantes atractivos turísticos de Cusco. 400 años escondida por las montañas y la selva tropical, fue descubierta en 1911 por el explorador norteamericano Hiram Bingham. Empezamos la mañana llegando a ella por tren. Machu Picchu, centro de culto y observación astronómica a la vez el refugio privado del Inca Pachacútec, consta de dos grandes áreas, una agrícola y otra urbana, donde se destacan los templos, plazas y mausoleos reales construidos con exquisita perfección. Esta excursión incluye un almuerzo en el hotel Sanctuary Lodge. Por la tarde retorno a Cusco. (D,A)", ite_image: "",},
        {   ite_titulo: "Dia 4 Lima", ite_text: "Desayuno. Viajaremos por las fértiles campiñas hasta arribar al colonial pueblo de Pisac (Diario). Un mercado colorido y de abundantes maravillas se presentará ante tus ojos, donde tendrás la oportunidad de observar y comprar la más variada artesanía y joyería cuzqueña. Después de almorzar, nuestro tour continúa hacia Ollantaytambo, una antigua fortaleza inca compuesta por numerosos templos y terrazas que se elevan majestuosamente sobre el valle. Por la tarde retorno a Cusco. (D,A)", ite_image: "",},
        {   ite_titulo: "Dia 5 Lima", ite_text: "Desayuno. Día libre para realizar actividades independientes. Camine a través de esta adorable ciudad, explorando sus asombrosas calles estrechas la cual será una experiencia inolvidable. Excelentes compras son las tradicionales artesanías Peruanas, chompas de lana de alpaca, ponchos, cerámica, joyas de oro y plata, etc. Debido a la gran variedad de productos, nosotros recomendamos que una vez que encuentre un artículo en particular lo compre ya que puede ser que no encuentre uno similar en otra tienda. (D)", ite_image: "",},
        {   ite_titulo: "Dia 6 Lima", ite_text: "Desayuno. Traslado al aeropuerto para tomar el vuelo a Lima y de ahí tomar el vuelo de conexión de regreso a casa. (D)", ite_image: "",},
    ],

    programIncluye: [
        {text: "" }
    ],

    programNoIncluye: [
        {text: "" }
    ],
  },

  {
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772127821/incas-legacy_grfvrl.webp",
    title: "Legacy of The Incas",
    text: "A two week program including Belmond hotels and trains.",
    
    name:"legacy-of-the-incas",

    programBreve: [
        {  
            titulo_breve: "Day 1 Lima - Arrival", 
            text_breve: "Explore Lima’s history and elite cuisine with a smooth, assisted transfer to your hotel."
        },
        {  
            titulo_breve: "Day 2 Lima - City Tour", 
            text_breve: "A guided journey through Lima’s colonial history and its vibrant modern districts."
        },
        {  
            titulo_breve: "Day 3 Lima / Cusco / Sacred Valley", 
            text_breve: "Fly over the Andes to Cusco for an exclusive colonial lunch and a scenic drive into the Sacred Valley."
        },
        {  
            titulo_breve: "Day 4 Moray and Maras", 
            text_breve: "Discover Moray’s 'Inca laboratory,' an ancient agricultural site using circular terraces to create microclimates."
        },
        {  
            titulo_breve: "Day 5 Chinchero and Pisac", 
            text_breve: "Explore the 'birthplace of the rainbow' in Chinchero and Pisac: a blend of Inca ruins and vibrant handicrafts."
        },
        {  
            titulo_breve: "Day 6 Machu Picchu - Luxury Train", 
            text_breve: "Travel in luxury to Machu Picchu: enjoy brunch and an open bar on the Hiram Bingham train before a guided tour."
        },
        {  
            titulo_breve: "Day 7 Huayna Picchu Hike", 
            text_breve: "Hike Huayna Picchu for breathtaking views and explore the hidden, otherworldly Temple of the Moon."
        },
        {  
            titulo_breve: "Day 8 Machu Picchu Free Day", 
            text_breve: "Enjoy a free morning at the sanctuary: hike to the Sun Gate or explore the local village and markets."
        },
        {  
            titulo_breve: "Day 9 Cusco Nearby Ruins", 
            text_breve: "Discover Cusco’s ancient power: visit the colossal fortress of Sacsayhuaman and the Kenko sanctuaries."
        },
        {  
            titulo_breve: "Day 10 Andean Explorer Train", 
            text_breve: "Experience South America’s first luxury sleeper train: elegant overnight stays across the Peruvian Andes."
        }
    ],

    programItenerario: [
        {   
            ite_titulo: "Day 1 – Lima - Arrival", 
            ite_text: "Arrival in Lima, the “City of Kings” famous for its Spanish Colonial architecture, extraordinary museums and cuisine. Lima is internationally recognized as the “Gastronomic Capital of the Americas”, and its cuisine is considered among the most diverse and exquisite in the world on par with French cuisine. Upon arrival a host will meet and assist you in transferring to the hotel and in registering.", 
            ite_image: "https://www.fiesta-tours-peru.com/img/itineraries/1.jpg",},
        {   
            ite_titulo: "Day 2 – Lima (B) City Tour – Modern and Colonial Lima ", 
            ite_text: "Tour of Modern and Colonial Lima - This half-day tour visits both the colonial and modern sections of Lima. Colonial sites include the lovely Plaza Mayor, the Government Palace, San Francisco Church and the exquisite Torre Tagle Palace modern day seat of the Ministry of Foreign Affairs. In modern Lima, drive along the exclusive residential areas of Miraflores and San Isidro. ", 
            ite_image: "https://www.fiesta-tours-peru.com/img/itineraries/1.jpg",},
        {   
            ite_titulo: "Day 3 – Lima / Cusco / Sacred Valley (B, L) ", 
            ite_text: "Early morning transfer from the hotel to the airport for a short but spectacular flight over the snowcapped Andes to the oldest inhabited city in the hemisphere, Cusco, at an elevation of 11,440 feet. Upon arrival in Cusco you will be met after luggage collection by our representative and transferred to the hotel in the Sacred Valley. A la Carte lunch at Terra Andina Colonial Mansion before continuing to the Sacred Valley. En route you will enjoy a scenic drive through a stunning landscape to the Sacred Valley of the Incas. ", 
            ite_image: "https://www.fiesta-tours-peru.com/img/itineraries/1.jpg",},
        {   
            ite_titulo: "Day 4 – Sacred Valley (B) Excursion to Moray Terraces and Maras Salt Pools", 
            ite_text: "At Moray, you will find “the Inca laboratory”. The circles were used for the development of different strains of crops. Between the highest and lowest terraces there is a difference of up to 15 degrees. Although the difference between neighboring terraces is very small, it is great enough to create distinct microclimates that change growing conditions and allow the propagation of a huge variety of plants each with slightly different growth requirements. ", 
            ite_image: "https://www.fiesta-tours-peru.com/img/itineraries/1.jpg",},
        {   
            ite_titulo: "Day 5 – Sacred Valley (B)Visit to Chinchero and Pisac Market", 
            ite_text: "The traditional and Andean towns of Chinchero and Pisac are known as “the birthplace of the rainbow”, and they have the full complement of photogenic attractions: Inca ruins, Andean village houses, an elaborate colonial church built on Inca foundations, and of course the handicrafts from the Quechua stallholders. ", 
            ite_image: "https://www.fiesta-tours-peru.com/img/itineraries/1.jpg",},
        {   
            ite_titulo: "Day 6 – Sacred Valley / Machu Picchu (B) Machu Picchu excursion aboard the luxury Belmond’s Hiram Bingham Train, operates daily except the last Sunday of the month – Two Night Stay", 
            ite_text: "Morning train ride aboard the most luxurious railway service in South America to enjoy the unbelievable sights of the “Lost City of the Incas,” Machu Picchu. A brunch will be served on board and you will be able to enjoy its open bar. Guided tour of Machu Picchu. Perched 8,200 feet above the valley, it was hidden by mountains and semi-tropical jungles for 400 years until discovered by Hiram Bingham of Yale University in 1911. Archaeologists believe that the Inca “Virgins of the Sun” took refuge from the Spanish Conquistadors here.", 
            ite_image: "",},
        {   
            ite_titulo: "Day 7 – Hike to Huayna Picchu (B)", 
            ite_text: "Tour guide at disposal for a morning hike to the steep stone-paved trail of Huayna Picchu, the pyramid-shape mountain above Machu Picchu to enjoy an impressive and breathtaking view of the site. The few of those who climb the peak take advantage of the opportunity to see the even more impressive Temple of Moon. Tucked into a complex of caves hidden from the main ruins is an otherworldly shrine — possibly a burial site — built directly into the mountain rock. The Temple of the Moon features some of the finest stonework in Machu Picchu. The main reward for the climb up the ancient stone stairs is the most incredible view that can be achieved (short of a helicopter) of how Machu Picchu was carefully integrated into its natural surroundings. Among skyscraping Andean peaks tower in the distance while the winding Urubamba River nearly wraps itself around the main site. Do not miss it; Huayna Picchu is “what most people miss at Machu Picchu” (BBC Travel). Reservation is needed. ",
            ite_image: "",},
        {   
            ite_titulo: "Day 8 – Machu Picchu Free Day / Cusco (B)", 
            ite_text: "Free morning to enjoy one of the most incredible sights on earth, the sanctuary of Machu Picchu. Take as much time as you need to study these magnificent ruins or hike the steep stone-paved trail of Huayna Picchu, the pyramid shape mountain above Machu Picchu for a for an impressive and breathtaking “condor view” of the site (reservation and extra fee are needed). Other activities are: ● Stroll to the Inca Bridge a secret entrance used by the Inca’s army ● Walk toward the Inca Trail to find the historic Sun Gate (Intipunku) ● Soak in the unique thermal springs of town ● Wander into the Mandor valley ● Explore the open air market of Machu Picchu village ● Visit Manuel Chavez Museum ● Hike the round-shape mountain of Putukusi. ",
            ite_image: "",
        },
        {   
            ite_titulo: "Day 9 – Cusco Nearby Ruins (B)", 
            ite_text: "Tour of Cusco and Nearby Ruins – Visit Sacsayhuaman fortress, an imposing example of Inca military architecture. It was built using colossal limestone blocks using a variety of interlocking shapes. The estimated weight of some stones is over 120 tons. Visitors are still wondering how it was constructed. Other archaeological sites included in the tour are the Incan military lookout point of Puca-Pucara and the Sanctuaries of Kenko and Tambomachay. ", 
            ite_image: "",
        },        
        {   
            ite_titulo: "Day 10 – Cusco / Puno (B, L, D) 3-Days Andean Crossing aboard Belmond Andean Explorer Cusco, Puno - Lake Titicaca, Arequipa - Colca Canyon Departs: Thursdays ", 
            ite_text: "Belmond Andean Explorer is South America’s first luxury train that combine genuine daytime getaways with sleeping accommodations at night, all while traversing the Peruvian Andes.", 
            ite_image: "",
        },
    ],

    programIncluye: [
        {text: "All airport transfers listed in the itinerary" },
        {text: "Baggage handling at airports and at hotels" },
        {text: "All tours and excursions indicated in the itinerary" },
        {text: "All entrance fees and transfers needed to operate tours and excursions" },
        {text: "All train tickets, bus tickets and boat services needed to operate tours and excursions" },
        {text: "Excursion to Machu Picchu is aboard the Hiram Bingham train service." },
        {text: "Service of a bilingual licensed tour guide for all tours and excursions" },
        {text: "All meals indicated in the itinerary. B for breakfast, L for lunch. D for dinner" },
        {text: "Hotel accommodation and hotel service charge" },
        {text: "Hotel taxes are exempt for foreigners visiting Peru" },
        {text: "When domestic airfare within Peru is specified as included: Airfare includes all queues, security fee, fuel surcharges and 18% Peruvian sales tax. " },

    ],

    programNoIncluye: [
        {text: "Extra expenses in case of modifying the itinerary due to flight cancelation, strikes or blocking of roads and train tracks by demonstrators or political activists. Travel insurance is strongly recommended. " },
        {text: "Expenses such us beverages on meals, tips, laundry, phone calls and other personal expenses are not included" },
    ],


  },

  {

    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772127821/wonders-of-peru_dbdgn7.webp",
    title: "Wonders of Peru",
    text: "Explore the highlights of Lima and Cusco in one week.",
    name:"wonders-of-peru",

    programBreve: [
        {  
            titulo_breve: "Day 1 Lima", 
            text_breve: "Arrival in the Gastronomic Capital of the Americas with a seamless transfer to your hotel."
        },
        {  
            titulo_breve: "Day 2 Lima", 
            text_breve: "Tour of Colonial and Modern Lima, including a visit to the world-renowned Larco Museum."
        },
        {  
            titulo_breve: "Day 3 Arequipa", 
            text_breve: "Flight to the 'White City' of Arequipa to explore its volcanic stone architecture and cathedral."
        },
        {  
            titulo_breve: "Day 4 Colca / Puno", 
            text_breve: "Witness the majestic flight of the condors at Colca Canyon before an overland trip to Puno."
        },
        {  
            titulo_breve: "Day 5 Lake Titicaca", 
            text_breve: "Full-day boat excursion to the floating Uros islands and the traditional community of Taquile."
        },
        {  
            titulo_breve: "Day 6 Puno / Cusco", 
            text_breve: "Scenic drive to Cusco with stops at the Temple of Viracocha and the 'Sistine Chapel of America'."
        },
        {  
            titulo_breve: "Day 7 Cusco", 
            text_breve: "Guided tour of Cusco’s Imperial landmarks and the colossal fortress of Sacsayhuaman."
        },
        {  
            titulo_breve: "Day 8 Cusco", 
            text_breve: "Free day to explore the imperial city’s narrow streets, markets, and local handicrafts."
        },
        {  
            titulo_breve: "Day 9 Sacred Valley", 
            text_breve: "Visit the Pisac Indian Market and the 'Living Inca Town' of Ollantaytambo."
        },
        {  
            titulo_breve: "Day 10 Machu Picchu", 
            text_breve: "Luxury train ride and guided tour of the breathtaking 'Lost City of the Incas'."
        },
        {  
            titulo_breve: "Day 11 Home", 
            text_breve: "Transfer to Cusco airport for your flight to Lima and connection home."
        }
    ],
    
    programItenerario: [
        {   
            ite_titulo: "Day 1   Lima - Arrival", 
            ite_text: "Arrival in Lima, the 'City of Kings' famous for its Spanish Colonial architecture, extraordinary museums and cuisine. Lima is internationally recognized as the 'Gastronomic Capital of the Americas', and its cuisine is considered among the most diverse and exquisite in the world on par with French cuisine. Upon arrival a host will meet and assist you in transferring to the hotel and in registering.", 
            ite_image: "",},
        {   
            ite_titulo: "Day 2   Lima - Tour of Colonial Lima and Larco Museum (B) ", 
            ite_text: "Tour of Colonial Lima including the world famous Larco Museum - This half-day tour visits both the colonial and modern sections of Lima. Colonial sites include the lovely Plaza Mayor, the Government Palace, San Francisco Church and the exquisite Torre Tagle Palace modern day seat of the Ministry of Foreign Affairs. Continue to the Larco Museum in Pueblo Libre. Visit the world famous Larco Museum - The Larco Museum, founded in 1926, displays remarkable chronological galleries providing an excellent overview on 3000 years of development of Peruvian pre-Columbian history. Located in a unique vice-royal mansion of the 18th century built over a 7th century pre-Columbian pyramid is surrounded by beautiful gardens. The Larco Museum also features the finest gold and silver collection from Ancient Peru and the famous erotic archaeological collection, one of the most visited Peruvian tourist attractions.", 
            ite_image: "",},
        {   
            ite_titulo: "Day 3 Lima / Arequipa / Colca Canyon (B,L,D) ", 
            ite_text: "Transfer to the airport for your flight to Arequipa at an elevation of 7,300 feet. Upon arrival a host will meet and assist you in transferring to the hotel and in registering. Also known as the 'White City' for its many constructions built of white volcanic stone, Arequipa is at the foothills of the Misti Volcano (the guardian of the city) and it has a splendid Cathedral that is considered one of the first seventeenth century religious monuments of the city.", 
            ite_image: "",},
        {   
            ite_titulo: "Day 4 Colca Canyon / Puno – Lake Titikaka (B,L) ", 
            ite_text: "To maximize your probability of seeing condors we depart very early towards a superb natural lookout point “Cross of the Condor” from where one can watch condors wheeling across the Colca Canyon, at about an altitude of 15,000 feet. The valley also features pre-Inca ruins, pre-Inca burial grounds and archaeological remains left behind by the Collagua, the ancient inhabitants of the area. Drive further in to the canyon to observe the way of life in this remote land and to admire the impressive irrigation system and the fertile mountains terraced for farming of the Colca valley. The overland trip to Puno features unique natural scenery of the Peruvian Highlands. Evening arrival in Puno.", 
            ite_image: "",},
        {   
            ite_titulo: "Day 5 Puno – Uros and Taquile Islands on Lake Titikaka (B,L)", 
            ite_text: "Boat excursion to Uros and Taquile Islands on Lake Titikaka. This full day excursion will take you to the highest navigable lake in the world to the floating islands of the Uros Indians, man-made islands by tying totora reeds. The Uros considered themselves Lords of the Lake; they hunt wild birds and maintain traditional fishing methods. The men have developed an extraordinary skill in weaving reeds; producing houses, boats and handicrafts, and the women are expert knitters    Continuing to Taquile where a native community of about 400 families still lives with the traditions and high principals of the Incas. Taquile is a very important site on Lake Titikaka for its archeological remains, the sacred and ceremonial sites, the festive activities and their rituals. Taquile is characterized by its friendly inhabitants, who maintain their customs and traditional clothing. They distinguish themselves by their detailed, fine, and colorful textiles with symmetrical decorations and symbols that reflect their way of life and Andean beliefs. Lunch is included.", 
            ite_image: "",},
        {   
            ite_titulo: "Day 6 Puno to Cusco (B,L)", 
            ite_text: "Bus journey through the Peruvian Andes from Puno to Cusco - Today one of South America's most extraordinary overland trips takes you by coach to Cusco passing through striking highland scenery and picturesque Andean villages. Brief stops at Raqchi to see the remains of the remarkable temple of Viracocha, considered by the historians an important Inca construction, and at the town of Andahuaylillas, a showcase of the colonial art in Peru, sometimes called 'the Sistine Chapel of America'. Lunch is included.", 
            ite_image: "",
        },        
        {   
            ite_titulo: "Day 7 Cusco City Tour and Nearby Ruins (B) ", 
            ite_text: "Tour of Cusco and Nearby Ruins – Visitors are caught up in the excitement of touring the ancient capital of the Inca Empire, a delightful combination of Inca and colonial architecture. The tour visits important landmarks such us Cusco's Cathedral, Plaza de Armas and Koricancha “The Temple of the Sun”. This tour of the oldest continuously inhabited city in the western hemisphere also includes the nearby ruins of Kenko, Puca-Pucara, Tambomachay as well as the Sacsayhuaman fortress, an imposing example of Inca military architecture", 
            ite_image: "",
        },        
        {   
            ite_titulo: "Day 8 Cusco – Free Day (B) ", 
            ite_text: "Wandering through this lovely city, exploring the astonishing narrow streets of this tile roof colonial town will be your unforgettable experience. You will find something astounding at every turn. Great buys are the traditional Peruvian handicrafts, alpaca-wool sweaters and rugs, ponchos, pottery, gold and silver jewelry, leather goods, etc.  Because there are such a variety of products, we strongly suggest that when you like any particular item, you should buy it - you may not find the same item in other store. Many visitors to Cusco return home wishing they had a free day to discover this imperial city on their own, a free time in Cusco is a MUST!", 
            ite_image: "",
        },        
        {   
            ite_titulo: "Day 9 Pisac Market and Ollantaytambo Archaeological Complex (B,L) ", 
            ite_text: "Full Day Excursion to the Pisac Indian Market and the Ollantaytambo Fortress - Morning departure for a drive through the fertile countryside of the Urubamba Valley to the colonial village of Pisac where an Indian Market takes place Tuesdays, Thursdays and Sundays. Other days you will tour the religious nucleus and archaeological site of Pisac. During your visit to the bustling marketplace you will have the opportunity to bargain with the natives for many different types of Peruvian handicrafts and jewelry.   Continue to the Ollantaytambo archaeological complex, the Incas built it as a fort that included a temple, agricultural terraces, and an urban area. There are two distinct sectors: The religious and worship zone, and the residential area. Ollantaytambo was an important administrative center with probable military functions if one considers the walls and towers. There are also traces of ancient roads and aqueducts. The town of Ollantaytambo is called a 'Living Inca Town' since the inhabitants maintain very old practices and customs. Lunch is at a beautiful country estate on the shores of the Urubamba River. ", 
            ite_image: "",
        },        
        {   
            ite_titulo: "Day 10 Cusco / Machu Picchu / Cusco (B,L) ", 
            ite_text: "Morning train ride through the sacred valley of Urubamba to the 'Lost City of the Incas,' Machu Picchu. Perched 8,200 feet above the valley, it was hidden by mountains and semi-tropical jungles for 400 years until discovered by Hiram Bingham of Yale University in 1911. Archaeologists believe that the Inca 'Virgins of the Sun' took refuge from the Spanish Conquistadors here. Guided tour of the ruins upon arrival. Lunch is included.", 
            ite_image: "",
        },        
        {   
            ite_titulo: "Day 11 Cusco – Lima – Home (B) ", 
            ite_text: "Transfer to the airport for your departure to Lima, in your arrival you will be assisted for a representative in your connecting international flight. Arrive home full of great memories of the rich tradition of Colonial Lima, the snowcapped roaring Andean mountains and lush valleys, and the zig-zag road to the overwhelming sight of Machu Picchu, the amazing legacy the Incas.", 
            ite_image: "",
        },
    ],
    programIncluye: [
        {text: "11 nights of accommodation" },
        {text: "All airport transfers listed in the itinerary " },
        {text: "Baggage handling at airports and at hotels" },
        {text: "All tours and excursions indicated in the itinerary " },
        {text: "All entrance fees and transfers needed to operate tours and excursions " },
        {text: "All train tickets, bus tickets and boat services needed to operate tours and excursions" },
        {text: "Excursion to Machu Picchu is aboard the Expedition" },
        {text: "Lunch in the excursion to Machu Picchu at Café Inkaterra Restaurant" },
        {text: "Service of a bilingual licensed tour guide for all tours and excursions" },
        {text: "All meals indicated in the itinerary. B for breakfast, L for lunch. D for dinner" },
        {text: "Hotel accommodation and hotel service charge" },
        {text: "Hotel taxes are exempt for foreigners visiting Peru" },
        {text: "When domestic airfare within Peru is specified as included: Airfare includes all queues, security fee, fuel surcharges and 18% Peruvian sales tax. " },
    ],

    programNoIncluye: [
        {text: "Any domestic and international flights" },
        {text: "Extra expenses in case of modifying the itinerary due to flight cancelation, strikes or blocking of roads and train tracks by demonstrators or political activists. Travel insurance is strongly recommended. " },
        {text: "When staying overnight  in Machu Picchu, the entrance fee for the 2nd day in Machu Picchu is not included. This can be added to the itinerary upon request " },
        {text: "Expenses such us beverages on meals, tips, laundry, phone calls and other personal expenses are not included " },
        {text: "Airport departure taxes are not included: Approximate cost is US $31.00 for international flight, and US $7.40 for each domestic flight " },
    ],

  },

  {
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772127821/peru-boutique_rewope.webp",
    title: "Peru Boutique",
    text: "Luxury programs featuring the exclusive Relais & Chateaux properties.",
    name:"peru-boutique",

    programBreve: [
        {  
            titulo_breve: "Day 1 Lima", 
            text_breve: "Llegada a la 'Ciudad de los Reyes' y traslado al hotel en la capital gastronómica de América."
        },
        {  
            titulo_breve: "Day 2 Lima", 
            text_breve: "Tour por Lima moderna y colonial con visita al Museo Larco y almuerzo en su café de jardín."
        },
        {  
            titulo_breve: "Day 3 Cusco / Valle Sagrado", 
            text_breve: "Vuelo sobre los Andes hacia Cusco y traslado inmediato al Valle Sagrado para aclimatación."
        },
        {  
            titulo_breve: "Day 4 Valle Sagrado", 
            text_breve: "Visita al mercado de Pisac y almuerzo exclusivo en la histórica Hacienda Huayoccari."
        },
        {  
            titulo_breve: "Day 5 Machu Picchu", 
            text_breve: "Viaje de lujo a bordo del tren Hiram Bingham con brunch y bar abierto hacia Aguas Calientes."
        },
        {  
            titulo_breve: "Day 6 Machu Picchu", 
            text_breve: "Tour guiado por la ciudadela inca, almuerzo en Sanctuary Lodge y masaje relajante en el spa."
        },
        {  
            titulo_breve: "Day 7 Cusco", 
            text_breve: "Mañana de actividades naturales y cena gourmet a bordo del tren Hiram Bingham de retorno a Cusco."
        },
        {  
            titulo_breve: "Day 8 Cusco", 
            text_breve: "Exploración de la Catedral, el Templo del Sol y la imponente fortaleza de Sacsayhuaman."
        },
        {  
            titulo_breve: "Day 9 Lima / Salida", 
            text_breve: "Traslado al aeropuerto para vuelo de conexión en Lima y retorno internacional."
        }
    ],
    
    programItenerario: [
        {   
            ite_titulo: "Day 1, Dec 29 – Lima - Arrival", 
            ite_text: "Arrival in Lima, the 'City of Kings' famous for its Spanish Colonial architecture, extraordinary museums and cuisine. Lima is internationally recognized as the 'Gastronomic Capital of the Americas', and its cuisine is considered among the most diverse and exquisite in the world on par with French cuisine. Upon arrival a host will meet and assist you in transferring to the hotel and in registering. Overnight in Lima.", 
            ite_image: "",
        },
        {   
            ite_titulo: "Day 2, Dec 30 – Lima – Tour of modern and colonial Lima including Larco Museum  (B,L,D) ", 
            ite_text: "Breakfast. This half-day tour visits both the colonial and modern sections of Lima. Drive along the fashionable districts of Miraflores and San Isidro, El Parque del Amor (The Park of Love) and the striking beaches of Costa Verde  Colonial sites include the lovely Plaza Mayor, the Government Palace, San Francisco Church and the exquisite Torre Tagle Palace modern day seat of the Ministry of Foreign Affairs. Continue to the Larco Museum in Pueblo Libre. Lunch will be at the lovely “Café del Museo”. A space surrounded by gardens where you can enjoy a unique mixture of culture, history, modernity and good food. The menu contains classical Peruvian dishes - ceviche, causa, stir-fried beef - as well as original international creations or pastas using native ingredients. There is a fine selection of desserts and pisco-based cocktails. Afterwards, visit the world famous Larco Museum, founded in 1926, displays remarkable chronological galleries providing an excellent overview on 3000 years of development of Peruvian pre-Columbian history. Located in a unique vice-royal mansion of the 18th century built over a 7th century pre-Columbian pyramid is surrounded by beautiful gardens. The Larco Museum also features the finest gold and silver collection from Ancient Peru and the famous erotic archaeological collection, one of the most visited Peruvian tourist attractions.", 
            ite_image: "",
        },
        {   
            ite_titulo: "Day 3, Dec 31 – Lima – Cusco – Sacred Valley (B, D) ", 
            ite_text: "Breakfast.Early morning transfer from the hotel to the airport for a short but spectacular flight over the snowcapped Andes to the oldest inhabited city in the hemisphere, Cusco, at an elevation of 11,440 feet. Upon arrival a host will meet and assist you in transferring to the hotel and in registering Upon arrival a host will meet and assist you in transferring to the hotel and am registering Sacred Valley. Rest of the day free to acclimatize.", 
            ite_image: "",
        },
        {   
            ite_titulo: "Day 4, Jan 01 – Full day excursion to the Sacred Valley with lunch at Hacienda Huayoccari (B, L)", 
            ite_text: "Breakfast. Early morning transfer from the hotel to the airport for a short but spectacular flight over the snowcapped Andes to the oldest inhabited city in the hemisphere, Cusco, at an elevation of 11,440 feet. Immediate transfer to the Sacred Valley at 8,200 feet of altitude. Continue to the Pisac Indian Market, a colonial village of Pisac where an Indian Market takes place every day. During your visit to the bustling marketplace you will have the opportunity to bargain with the natives for many different types of Peruvian handicrafts and jewelry. Lunch is served at Hacienda Huayoccari. The most noticeable aspect of the house is its sensational setting, dominating the Urubamba valley in the midst of the highland crags and vegetation through which the river flows. Above it, on the very mountain top within sight of heaven are two lakes, which seem to seethe on a rainy night. With magnificent views of the Urubamba River, the Casa-Hacienda has the magical ability to make us forget the reality of life. Today’s lunch will be a remarkable event", 
            ite_image: "",
        },
        {   
            ite_titulo: "Day 5, Jan 02 – Machu Picchu excursion aboard the Hiram Bingham luxury train with overnight stay, all meals (B, L, D)", 
            ite_text: "Breakfast. Morning train ride aboard the most luxurious railway service in South America to enjoy the unbelievable sights of the 'Lost City of the Incas,' Machu Picchu. A brunch will be served on board and you will be able to enjoy its open bar. At your arrival, you will be transferred to the hotel and have the rest of the day at leisure to rest and enjoy the facilities of the hotel. Dinner at Café Inkaterra, located at the hotel. Overnight in Aguas Calientes.", 
            ite_image: "",
        },
        {   
            ite_titulo: "Day 6, Jan 03 – Guided tour to Machu Picchu (B, L, D)", 
            ite_text: "Breakfast. Guided tour to Machu Picchu. Perched 8,200 feet above the valley, it was hidden by mountains and semi-tropical jungles for 400 years until discovered by Hiram Bingham of Yale University in 1911. Archaeologists believe that the Inca 'Virgins of the Sun' took refuge from the Spanish Conquistadors here. Guided tour of the Sanctuary and plenty of free time to study the mysterious site. Lunch at the Orient Express Sanctuary Lodge, located just a few steps from the Inca citadel is also included. At your return to your hotel, you will enjoy a relaxing massage at Unu Spa. Dinner at Café Inkaterra, located at the hotel. Overnight in Aguas Calientes.", 
            ite_image: "",
        },
        {   
            ite_titulo: "Day 7, Jan 04 – Machu Picchu to Cusco aboard the Orient Express Luxury Train “Hiram Bingham”(B, D)", 
            ite_text: "Breakfast. For this morning, you can choose either do a walk to the Orchids Garden of the hotel, one of the biggest and most important in all the country or either do a birdwatching tour to discover unique birds including some endemic species. Rest of the day at leisure to enjoy the facilities of the hotel. In the afternoon, you will take your Hiram Bingham train back to Cusco. You will be able to have a wonderful dinner on board and enjoy some drinks at the bar wagon. Overnight in Cusco.", 
            ite_image: "",
        },
        {   
            ite_titulo: "Day 8, Jan 05 – Cusco City Tour and Nearby Ruins (B, L, D) ", 
            ite_text: "Breakfast. Visitors are caught up in the excitement of touring the ancient capital of the Inca Empire, a delightful combination of Inca and colonial architecture. The tour visits important landmarks such us Cusco's Cathedral, Plaza de Armas and Koricancha “The Temple of the Sun”. This tour of the oldest continuously inhabited city in the western hemisphere also includes the nearby ruins of Kenko, Puca-Pucara, Tambomachay as well as the Sacsayhuaman fortress, an imposing example of Inca military architecture.", 
            ite_image: "",
        },
        {   
            ite_titulo: "Day 9, Jan 06 – Cusco – Lima – Home (B) ", 
            ite_text: "Breakfast. Transfer to the airport for your departure to Lima and your connecting international flight. Arrive home full of great memories of the rich tradition of Colonial Lima and the mystical Land of the Incas.", 
            ite_image: "",
        },
       
    ],

    programIncluye: [
        {text: "All airport transfers listed in the itinerary " },
        {text: "Baggage handling at airports and at hotels" },
        {text: "All tours and excursions indicated in the itinerary " },
        {text: "All entrance fees and transfers needed to operate tours and excursions " },
        {text: "All train tickets, bus tickets and boat services needed to operate tours and excursions" },
        {text: "Excursion to Machu Picchu is aboard the Hiram Bingham." },
        {text: "Service of a bilingual licensed tour guide for all tours and excursions" },
        {text: "All meals indicated in the itinerary. B for breakfast, L for lunch. D for dinner" },
        {text: "Hotel accommodation and hotel service charge" },
        {text: "Hotel taxes are exempt for foreigners visiting Peru" },
        {text: "When domestic airfare within Peru is specified as included: Airfare includes all queues, security fee, fuel surcharges and 19% Peruvian sales tax. " },
    ],

    programNoIncluye: [
        {text: "Airfare LIM/CUZ/LIM" },
        {text: "When staying overnight in Machu Picchu, the entrance fee for the 2nd day in Machu Picchu is not included. This can be added to the itinerary upon request " },
        {text: "Expenses such us beverages on meals, tips, laundry, phone calls and other personal expenses are not included " },
        {text: "Airport departure taxes are not included: Approximate cost is US $31.00 for international flight, and US $7.40 for each domestic flight." },
    ],
  },

  {
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772127821/cam-cusco_g9sv5e.webp",
    title: "Peru Spectacular",
    text: "A two week program including Belmond hotels and trains",
    name:"peru-spectacular",

    programBreve: [
        {  
            titulo_breve: "Day 1 Lima", 
            text_breve: "Arrival in the 'City of Kings' and transfer to your hotel in the Gastronomic Capital of the Americas."
        },
        {  
            titulo_breve: "Day 2 Lima", 
            text_breve: "Half-day tour of Colonial and Modern Lima, visiting the Plaza Mayor and the exclusive San Isidro district."
        },
        {  
            titulo_breve: "Day 3 Cusco", 
            text_breve: "Flight to Cusco followed by a tour of the Cathedral, the Temple of the Sun, and the Sacsayhuaman fortress."
        },
        {  
            titulo_breve: "Day 4 Sacred Valley", 
            text_breve: "Full-day excursion to the Pisac Market and the 'Living Inca Town' of Ollantaytambo with lunch included."
        },
        {  
            titulo_breve: "Day 5 Machu Picchu", 
            text_breve: "Scenic train ride and guided tour of the 'Lost City of the Incas' before returning to Cusco."
        },
        {  
            titulo_breve: "Day 6 Cusco", 
            text_breve: "Free day to explore Cusco's narrow colonial streets, local markets, and traditional handicrafts."
        },
        {  
            titulo_breve: "Day 7 Home", 
            text_breve: "Transfer to the airport for your flight to Lima and your connecting flight back home."
        }
    ],
    
    programItenerario: [

        {   
            ite_titulo: "Day 1 Lima – Arrival", 
            ite_text: "Arrival in Lima, the 'City of Kings' famous for its Spanish Colonial architecture, extraordinary museums and cuisine. Lima is internationally recognized as the 'Gastronomic Capital of the Americas', and its cuisine is considered among the most diverse and exquisite in the world on par with French cuisine. Upon arrival a host will meet and assist you in transferring to the hotel and in registering.	", 
            ite_image: "",
        },
        
        {   
            ite_titulo: "Day 2 Lima – City Tour (B) ", 
            ite_text: "Tour of Modern and Colonial Lima - This half-day tour visits both the colonial and modern sections of Lima. Colonial sites include the lovely Plaza Mayor, the Government Palace, San Francisco Church and the exquisite Torre Tagle Palace modern day seat of the Ministry of Foreign Affairs. In modern Lima, drive along the exclusive residential areas of Miraflores and San Isidro. ", 
            ite_image: "",
        },
        
        {   
            ite_titulo: "Day 3 Lima – Cusco (B)", 
            ite_text: "Early morning transfer from the hotel to the airport for a short but spectacular flight over the snowcapped Andes to the oldest inhabited city in the hemisphere, Cusco, at an elevation of 11,440 feet. Upon arrival a host will meet and assist you in transferring to the hotel and in registering. Tour of Cusco and Nearby Ruins – Visitors are caught up in the excitement of touring the ancient capital of the Inca Empire, a delightful combination of Inca and colonial architecture. The tour visits important landmarks such us Cusco's Cathedral, Santo Domingo Church, Plaza de Armas and Koricancha “The Temple of the Sun”. This tour of the oldest continuously inhabited city in the western hemisphere also includes the nearby ruins of Kenko, Puca-Pucara, Tambomachay as well as the Sacsayhuaman fortress, an imposing example of Inca military architecture ", 
            ite_image: "",
        },
        
        {   
            ite_titulo: "Day 4 Cusco – Sacred Valley – Pisac Market and Ollantaytambo Archaeological Complex (B,L) ", 
            ite_text: "Full Day Excursion to the Pisac Indian Market and the Ollantaytambo Fortress - Morning departure for a drive through the fertile countryside of the Urubamba Valley to the colonial village of Pisac where a unique Indian Market takes place daily. The variety of products offered is overwhelming, from pottery with reproductions of archaeological pieces, to all kinds of textiles, jewelry and Peruvian handicrafts. During your visit to this bustling marketplace you will have the opportunity to bargain with the artisans and indigenous traders. Grab the items you like, you will hardly see the same one again. Continue to the Ollantaytambo archaeological complex, the Incas built it as a fort that included a temple, agricultural terraces, and an urban area. There are two distinct sectors: The religious and worship zone, and the residential area. Ollantaytambo was an important administrative center with probable military functions if one considers the walls and towers. There are also traces of ancient roads and aqueducts. The town of Ollantaytambo is called a 'Living Inca Town' since the inhabitants maintain very old practices and customs. Lunch is at a beautiful country estate in the Sacred Valley. Overnight at the select hotel in the Sacred Valley.", 
            ite_image: "",
        },
        
        {   
            ite_titulo: "Day 5 Sacred Valley – Machu Picchu – Cusco (B) ", 
            ite_text: "Morning train ride through the sacred valley of Urubamba to the 'Lost City of the Incas,' Machu Picchu. Perched 8,200 feet above the valley, it was hidden by mountains and semi-tropical jungles for 400 years until discovered by Hiram Bingham of Yale University in 1911. Archaeologists believe that the Inca 'Virgins of the Sun' took refuge from the Spanish Conquistadors here. Guided tour of the ruins upon arrival. ", 
            ite_image: "",
        },
        
        {   
            ite_titulo: "Day 6 Cusco – Free Day (B) ", 
            ite_text: "Wandering through this lovely city, exploring the astonishing narrow streets of this tile roof colonial town will be your unforgettable experience. You will find something astounding at every turn. Great buys are the traditional Peruvian handicrafts, alpaca-wool sweaters and rugs, ponchos, pottery, gold and silver jewelry, leather goods, etc.  Because there are such a variety of products, we strongly suggest that when you like any particular item, you should buy it - you may not find the same item in other store. Many visitors to Cusco return home wishing they had a free day to discover this imperial city on their own a free day in Cusco is a MUST!", 
            ite_image: "",
        },
        
        {   
            ite_titulo: "Day 7 Cusco – Lima – Home (B) ", 
            ite_text: "Transfer to the airport for your departure to Lima and your connecting international flight. Arrive home full of great memories of the rich tradition of Colonial Lima and the mystical Land of the Incas.", 
            ite_image: "",
        },
        
    ],

    programIncluye: [
        {text: "6 Nights of accommodation at the select hotel" },
        {text: "All airport transfers listed in the itinerary " },
        {text: "Baggage handling at airports and at hotels" },
        {text: "All tours and excursions indicated in the itinerary " },
        {text: "All entrance fees and transfers needed to operate tours and excursions " },
        {text: "All train tickets, bus tickets and boat services needed to operate tours and excursions" },
        {text: "Excursion to Machu Picchu is aboard the selected train" },
        {text: "Service of a bilingual licensed tour guide for all tours and excursions" },
        {text: "All meals indicated in the itinerary. B for breakfast, L for lunch. D for dinner" },
        {text: "Hotel accommodation and hotel service charge" },
        {text: "Hotel taxes are exempt for foreigners visiting Peru" },
        {text: "When domestic airfare within Peru is specified as included: Airfare includes all queues, security fee, fuel surcharges and 18% Peruvian sales tax. " },
    ],

    programNoIncluye: [
        {text: "Domestic and International flights." },
        {text: "Lunch in the excursion to Machu Picchu is not included" },
        {text: "Extra expenses in case of modifying the itinerary due to flight cancelation, strikes or blocking of roads and train tracks by demonstrators or political activists. Travel insurance is strongly recommended. " },
        {text: "When staying overnight in Machu Picchu, the entrance fee for the 2nd day in Machu Picchu is  not included. This can be added to the itinerary upon request. " },
        {text: "Expenses such us beverages on meals, tips, laundry, phone calls and other personal  expenses are not included" },
    ],
  },

  {
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772127821/isla-uros_m0ai0t.webp",
    title: "Peru Magic",
    text: "Explore the highlights of Lima and Cusco in one week.",
    name:"peru-magic",

    programBreve: [
        {  
            titulo_breve: "Day 1 Lima", 
            text_breve: "Arrival in Lima, the 'City of Kings,' with a private transfer to your hotel in the Gastronomic Capital."
        },
        {  
            titulo_breve: "Day 2 Lima", 
            text_breve: "Tour of Colonial and Modern Lima, including the Plaza de Armas, San Francisco Catacombs, and Miraflores."
        },
        {  
            titulo_breve: "Day 3 Cusco / Sacred Valley", 
            text_breve: "Flight to Cusco and immediate transfer to the Sacred Valley for a better altitude acclimatization."
        },
        {  
            titulo_breve: "Day 4 Sacred Valley / Aguas Calientes", 
            text_breve: "Visit Pisac Market and Ollantaytambo Fortress, followed by a scenic train ride to Machu Picchu town."
        },
        {  
            titulo_breve: "Day 5 Machu Picchu / Cusco", 
            text_breve: "Guided tour of the 'Lost City of the Incas,' Machu Picchu, and afternoon return to the city of Cusco."
        },
        {  
            titulo_breve: "Day 6 Cusco", 
            text_breve: "Tour of the Imperial City: visit the Cathedral, the Temple of the Sun, and the fortress of Sacsayhuaman."
        },
        {  
            titulo_breve: "Day 7 Home", 
            text_breve: "Transfer to the airport for your flight to Lima and connection back home with unforgettable memories."
        }
    ],
    
    programItenerario: [
        {   
            ite_titulo: "Day 1   Lima – Arrival", 
            ite_text:"Arrival in Lima, the 'City of Kings' famous for its Spanish Colonial architecture, extraordinary museums and cuisine. Lima is internationally recognized as the 'Gastronomic Capital of the Americas', and its cuisine is considered among the most diverse and exquisite in the world on par with French cuisine. Upon arrival a host will meet and assist you in transferring to the hotel and in registering.", 
            ite_image: "",
            
        },
        {   
            ite_titulo: "Day 2   Lima – Tour of Modern and Colonial Lima (B) ", 
            ite_text:"This tour visits sites which include the lovely Plaza de Armas framed by its beautiful Cathedral and the Archbishop's palaces, and Municipal Government; it will transport you back in time with only one of their steps to tread. Then visit a masterpiece of colonial architecture: the Convent of San Francisco with its famous catacombs. We will continue with modern Lima and its beautiful tourist neighborhoods of San Isidro and Miraflores, from which you can shoot incredible views of the Pacific Ocean and the cliffs of the Costa Verde.", 
            ite_image: "",
            
        },
        {   
            ite_titulo: "Day 3 Lima – Cusco – Sacred Valley (B) ", 
            ite_text:"Early morning transfer from the hotel to the airport for a short but spectacular flight over the snowcapped Andes to the oldest inhabited city in the hemisphere, Cusco, at an elevation of 11,440 feet. Immediate transfer to the Sacred Valley at 8,200 feet of altitude. Upon arrival a host will meet and assist you in transferring to the hotel and in registering.", 
            ite_image: "",
            
        },
        {   
            ite_titulo: "Day 4 Pisac Market and Ollantaytambo Archaeological Complex – Machu Picchu (B,L,D) ", 
            ite_text:"Full Day Excursion to the Pisac Indian Market and the Ollantaytambo Fortress - Morning departure for a drive through the fertile countryside of the Urubamba Valley to the colonial village of Pisac where a unique Indian Market takes place daily. The variety of products offered is overwhelming, from pottery with reproductions of archaeological pieces, to all kinds of textiles, jewelry and Peruvian handicrafts. During your visit to this bustling marketplace you will have the opportunity to bargain with the artisans and indigenous traders. Grab the items you like, you will hardly see the same one again. Continue to the Ollantaytambo archaeological complex, the Incas built it as a fort that included a temple, agricultural terraces, and an urban area. There are two distinct sectors: The religious and worship zone, and the residential area. Ollantaytambo was an important administrative center with probable military functions if one considers the walls and towers. There are also traces of ancient roads and aqueducts. The town of Ollantaytambo is called a 'Living Inca Town' since the inhabitants maintain very old practices and customs. Lunch is at a beautiful country estate in the Sacred Valley. Afternoon you will be transfer to Ollantaytambo station to take the train to Machu Picchu town. Overnight and dinner at the selected hotel in Aguas Calientes", 
            ite_image: "",
            
        },
        {   
            ite_titulo: "Day 5 Machu Picchu – Cusco (B) ", 
            ite_text:"Morning visit the 'Lost City of the Incas,' Machu Picchu. Perched 8,200 feet above the valley, it was hidden by mountains and semi-tropical jungles for 400 years until discovered by Hiram Bingham of Yale University in 1911. Archaeologists believe that the Inca 'Virgins of the Sun' took refuge from the Spanish Conquistadors here. Guided tour of the ruins. Afternoon return to Cusco.", 
            ite_image: "",
            
        },
        {   
            ite_titulo: "Day 6 Cusco City Tour and Nearby Ruins (B) ", 
            ite_text:"Tour of Cusco and Nearby Ruins – Visitors are caught up in the excitement of touring the ancient capital of the Inca Empire, a delightful combination of Inca and colonial architecture. The tour visits important landmarks such us Cusco's Cathedral, Plaza de Armas and Koricancha “The Temple of the Sun”. This tour of the oldest continuously inhabited city in the western hemisphere also includes the nearby ruins of Kenko, Puca-Pucara, Tambomachay as well as the Sacsayhuaman fortress, an imposing example of Inca military architecture", 
            ite_image: "",
            
        },
        {   
            ite_titulo: "Day 7 Cusco – Lima – Home (B) ", 
            ite_text:"Transfer to the airport for your departure to Lima and your connecting international flight. Arrive home full of great memories of the rich tradition of Colonial Lima and the mystical Land of the Incas.", 
            ite_image: "",
            
        },
    ],

    programIncluye: [
        {text: "6 nights of accommodation at the select hotel" },
        {text: "All airport transfers listed in the itinerary " },
        {text: "Baggage handling at airports and at hotels" },
        {text: "All tours and excursions indicated in the itinerary " },
        {text: "All entrance fees and transfers needed to operate tours and excursions " },
        {text: "All train tickets, bus tickets and boat services needed to operate tours and excursions" },
        {text: "Excursion to Machu Picchu is aboard the selected train " },
        {text: "Service of a bilingual licensed tour guide for all tours and excursions" },
        {text: "All meals indicated in the itinerary. B for breakfast, L for lunch. D for dinner" },
        {text: "Hotel accommodation and hotel service charge" },
        {text: "Hotel taxes are exempt for foreigners visiting Peru" },
        {text: "When domestic airfare within Peru is specified as included: Airfare includes all queues, security fee, fuel surcharges and 18% Peruvian sales tax. " },
    ],

    programNoIncluye: [
        {text: "Domestic and International flights" },
        {text: "Lunch in the excursion to Machu Picchu is not included" },
        {text: "Extra expenses in case of modifying the itinerary due to flight cancelation, strikes or blocking of roads and train tracks by demonstrators or political activists. Travel insurance is strongly recommended. " },
        {text: "When staying overnight in Machu Picchu, the entrance fee for the 2nd day in Machu Picchu is not included. This can be added to the itinerary upon request. " },
        {text: "Expenses such us beverages on meals, tips, laundry, phone calls and other personal expenses are not included. " },
    ],
  },
];




