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
    fondo: "https://wallpapers.com/images/high/dragon-ball-pictures-8ysxg9ho676kf3g7.webp",
    title: "Nuevo Programa",
    text: "por implmentar",
    name:"#",


    programBreve: [
        {   titulo_breve: "Dia 1 Lima", text_breve: "Llegada a Lima. Por la tarde visita por Lima Colonial y Moderna, visita al Museo Larco.",},
        {   titulo_breve: "Dia 2 Lima", text_breve: "Llegada a Lima. Por la tarde visita por Lima Colonial y Moderna, visita al Museo Larco.",},
        {   titulo_breve: "Dia 3 Lima", text_breve: "Llegada a Lima. Por la tarde visita por Lima Colonial y Moderna, visita al Museo Larco.",},
        {   titulo_breve: "Dia 4 Lima", text_breve: "Llegada a Lima. Por la tarde visita por Lima Colonial y Moderna, visita al Museo Larco.",},
        {   titulo_breve: "Dia 5 Lima", text_breve: "Llegada a Lima. Por la tarde visita por Lima Colonial y Moderna, visita al Museo Larco.",},
        {   titulo_breve: "Dia 6 Lima", text_breve: "Llegada a Lima. Por la tarde visita por Lima Colonial y Moderna, visita al Museo Larco.",},  
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
        {   titulo_breve: "Dia 1 Lima", text_breve: "Llegada a Lima. Por la tarde visita por Lima Colonial y Moderna, visita al Museo Larco.",},
        {   titulo_breve: "Día 2 - Lima / Cusco", text_breve: "Traslado al aeropuerto para tomar el vuelo a Cusco. Por la tarde visita a Cusco y sus Ruinas. (D)",},
        {   titulo_breve: "Día 3 - Cusco / Machu Picchu / Cusco", text_breve: "Excursión a Machu Picchu. (D,A)",},
        {   titulo_breve: "Día 4 - Cusco / Valle Sagrado / Cusco", text_breve: "Excursión al Mercado Indio de Pisac y Fortaleza de Ollantaytambo. (D,A)",},
        {   titulo_breve: "Día 5 - Cusco", text_breve: "Día libre en Cusco para realizar actividades independientes. (D)",},
        {   titulo_breve: "Día 6 - Cusco / Lima / Casa", text_breve: "Traslado al aeropuerto para tomar el vuelo a Lima y de ahí tomar el vuelo de conexión de regreso a casa. (D)",},  
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
        {text: "Total 08 noches de hotel." },
        {text: "Alojamiento + 8 desayuno + 7 cenas" },
        {text: "Traslados, visitas / excursiones según programa en minibús / autocar con aire acondicionado." },
        {text: "Guías de habla Hispana acompañante de Udaipur-Agra, y  guía local de habla hispana en Delhi durante las visitas." },
        {text: "Entradas en los monumentos." },
        {text: "Tarifa aérea Delhi/Udaipur, especialmente negociada – sujeto a modificación / pequeña variación (vuelos internos en clase turista. Incluye tasas, suplemento e incremento de combustible hasta la fecha)." },
        {text: " Impuestos locales y el service tax, aplicados en estos momentos." },
    ],

    programNoIncluye: [
        {text: "Tarifa aérea internacional y tasas de aeropuerto." },
        {text: "Gastos personales como bebidas, propinas, visados, seguros, lavandería así como llamadas telefónicas." },
        {text: "Ningún gasto derivado de problemas ajenos a la organización como desastres naturales, accidentes, evacuación médica, cancelación de vuelos, demoras o cambios de horario etc" },
        {text: "Cualquier otro servicio que no haya sido especificado como 'incluido'" },
    ],


  },

  {
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772127821/wonders-of-peru_dbdgn7.webp",
    title: "Wonders of Peru",
    text: "Explore the highlights of Lima and Cusco in one week.",
    name:"wonders-of-peru",

        programBreve: [
        {   titulo_breve: "Dia 1 Lima", text_breve: "Llegada a Lima. Por la tarde visita por Lima Colonial y Moderna, visita al Museo Larco.",},
        {   titulo_breve: "Dia 2 Lima", text_breve: "Llegada a Lima. Por la tarde visita por Lima Colonial y Moderna, visita al Museo Larco.",},
        {   titulo_breve: "Dia 3 Lima", text_breve: "Llegada a Lima. Por la tarde visita por Lima Colonial y Moderna, visita al Museo Larco.",},
        {   titulo_breve: "Dia 4 Lima", text_breve: "Llegada a Lima. Por la tarde visita por Lima Colonial y Moderna, visita al Museo Larco.",},
        {   titulo_breve: "Dia 5 Lima", text_breve: "Llegada a Lima. Por la tarde visita por Lima Colonial y Moderna, visita al Museo Larco.",},
        {   titulo_breve: "Dia 6 Lima", text_breve: "Llegada a Lima. Por la tarde visita por Lima Colonial y Moderna, visita al Museo Larco.",},  
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
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772127821/peru-boutique_rewope.webp",
    title: "Peru Boutique",
    text: "Luxury programs featuring the exclusive Relais & Chateaux properties.",
    name:"peru-boutique",

        programBreve: [
        {   titulo_breve: "Dia 1 Lima", text_breve: "Llegada a Lima. Por la tarde visita por Lima Colonial y Moderna, visita al Museo Larco.",},
        {   titulo_breve: "Dia 2 Lima", text_breve: "Llegada a Lima. Por la tarde visita por Lima Colonial y Moderna, visita al Museo Larco.",},
        {   titulo_breve: "Dia 3 Lima", text_breve: "Llegada a Lima. Por la tarde visita por Lima Colonial y Moderna, visita al Museo Larco.",},
        {   titulo_breve: "Dia 4 Lima", text_breve: "Llegada a Lima. Por la tarde visita por Lima Colonial y Moderna, visita al Museo Larco.",},
        {   titulo_breve: "Dia 5 Lima", text_breve: "Llegada a Lima. Por la tarde visita por Lima Colonial y Moderna, visita al Museo Larco.",},
        {   titulo_breve: "Dia 6 Lima", text_breve: "Llegada a Lima. Por la tarde visita por Lima Colonial y Moderna, visita al Museo Larco.",},  
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
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772127821/cam-cusco_g9sv5e.webp",
    title: "Peru Spectacular",
    text: "A two week program including Belmond hotels and trains",
    name:"peru-spectacular",


        programBreve: [
        {   titulo_breve: "Dia 1 Lima", text_breve: "Llegada a Lima. Por la tarde visita por Lima Colonial y Moderna, visita al Museo Larco.",},
        {   titulo_breve: "Dia 2 Lima", text_breve: "Llegada a Lima. Por la tarde visita por Lima Colonial y Moderna, visita al Museo Larco.",},
        {   titulo_breve: "Dia 3 Lima", text_breve: "Llegada a Lima. Por la tarde visita por Lima Colonial y Moderna, visita al Museo Larco.",},
        {   titulo_breve: "Dia 4 Lima", text_breve: "Llegada a Lima. Por la tarde visita por Lima Colonial y Moderna, visita al Museo Larco.",},
        {   titulo_breve: "Dia 5 Lima", text_breve: "Llegada a Lima. Por la tarde visita por Lima Colonial y Moderna, visita al Museo Larco.",},
        {   titulo_breve: "Dia 6 Lima", text_breve: "Llegada a Lima. Por la tarde visita por Lima Colonial y Moderna, visita al Museo Larco.",},  
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
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772127821/isla-uros_m0ai0t.webp",
    title: "Peru Magic",
    text: "Explore the highlights of Lima and Cusco in one week.",
    name:"peru-magic",



        programBreve: [
        {   titulo_breve: "Dia 1 Lima", text_breve: "Llegada a Lima. Por la tarde visita por Lima Colonial y Moderna, visita al Museo Larco.",},
        {   titulo_breve: "Dia 2 Lima", text_breve: "Llegada a Lima. Por la tarde visita por Lima Colonial y Moderna, visita al Museo Larco.",},
        {   titulo_breve: "Dia 3 Lima", text_breve: "Llegada a Lima. Por la tarde visita por Lima Colonial y Moderna, visita al Museo Larco.",},
        {   titulo_breve: "Dia 4 Lima", text_breve: "Llegada a Lima. Por la tarde visita por Lima Colonial y Moderna, visita al Museo Larco.",},
        {   titulo_breve: "Dia 5 Lima", text_breve: "Llegada a Lima. Por la tarde visita por Lima Colonial y Moderna, visita al Museo Larco.",},
        {   titulo_breve: "Dia 6 Lima", text_breve: "Llegada a Lima. Por la tarde visita por Lima Colonial y Moderna, visita al Museo Larco.",},  
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

 


];



