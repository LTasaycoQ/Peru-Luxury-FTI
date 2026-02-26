export interface programsData {
  fondo: string;
  name: string;
  title: string;
  text: string;
  programBreve: programBreve[];
  programItenerario: programItenerario[];
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


export const programs: programsData[] = [

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
        {   ite_titulo: "Día 1 - Llegada a Lima", ite_text: "Una ciudad que vive, donde el pasado se mezcla con el presente. Donde los palacios, monasterios y conventos coloniales existen en asombrosa armonía con modernas edificaciones y las más impresionantes y milenarias huacas Pre-incas. Ya sea en el zaguán de una vieja casona o en la profundidad de una lúgubre catacumba. Lima, la ciudad de los reyes te espera, para deslumbrarte con su magia y embriagarte con su sabor. Al llegar al aeropuerto de Lima, un anfitrión lo recibirá y lo asistirá en su traslado y registro en el hotel. Visita por Lima, moderna y colonial. Una ciudad que siempre te recibirá con los brazos abiertos. La visita a la Lima Colonial incluye un deslumbrador paseo por la Plaza de Armas, enmarcada por la Catedral, el Palacio de Gobierno y el Palacio Torre Tagle transportándote al pasado con solo pisar uno de sus escalones. También pasearemos por Miraflores y San Isidro, dos de los barrios más hermosos y exclusivos de la capital. Disfruta una experiencia fuera de lo común visitando el famoso Museo Larco. Su valiosa colección está compuesta por más de 10.000 piezas de cerámica Mochica, Chimú y de otras civilizaciones Pre-incas. Para los interesados en las costumbres más íntimas de esta antigua cultura, la colección de cerámica erótica del Museo es una representación fiel y única en su género.", ite_image: "https://www.fiesta-tours-peru.com/img/itineraries/1.jpg",},
        {   ite_titulo: "Dia 2 Lima", ite_text: "Desayuno. Traslado al aeropuerto para tomar el vuelo a Cusco. Al llegar al aeropuerto, un anfitrión lo recibirá y lo asistirá en su traslado y registro en el hotel. Por la tarde la emoción y el asombro serán inigualables, desde la Catedral a la Plaza de Armas, pasando por el Convento de Santo Domingo, construido sobre el famoso Templo del Koricancha; hasta las ruinas de Kenko, Puca Pucará, Tambomachay y la Fortaleza de Sacsayhuamán. Alguna vez el centro de la civilización Inca; Cusco sigue cautivando a sus visitantes, viviendo en sus recuerdos por mucho, mucho tiempo. (D)", ite_image: "https://www.fiesta-tours-peru.com/img/itineraries/1.jpg",},
        {   ite_titulo: "Día 3 - Lima / Cusco", ite_text: "Desayuno. Traslado a la estación del tren para iniciar nuestro viaje a la ciudad perdida de los Incas, Machu Picchu. Esta impresionante y colosal ciudadela constituye uno de los más importantes atractivos turísticos de Cusco. 400 años escondida por las montañas y la selva tropical, fue descubierta en 1911 por el explorador norteamericano Hiram Bingham. Empezamos la mañana llegando a ella por tren. Machu Picchu, centro de culto y observación astronómica a la vez el refugio privado del Inca Pachacútec, consta de dos grandes áreas, una agrícola y otra urbana, donde se destacan los templos, plazas y mausoleos reales construidos con exquisita perfección. Esta excursión incluye un almuerzo en el hotel Sanctuary Lodge. Por la tarde retorno a Cusco. (D,A)", ite_image: "https://www.fiesta-tours-peru.com/img/itineraries/1.jpg",},
        {   ite_titulo: "Día 4 - Cusco / Machu Picchu / Cusco", ite_text: "Desayuno. Viajaremos por las fértiles campiñas hasta arribar al colonial pueblo de Pisac (Diario). Un mercado colorido y de abundantes maravillas se presentará ante tus ojos, donde tendrás la oportunidad de observar y comprar la más variada artesanía y joyería cuzqueña. Después de almorzar, nuestro tour continúa hacia Ollantaytambo, una antigua fortaleza inca compuesta por numerosos templos y terrazas que se elevan majestuosamente sobre el valle. Por la tarde retorno a Cusco. (D,A)", ite_image: "https://www.fiesta-tours-peru.com/img/itineraries/1.jpg",},
        {   ite_titulo: "Día 5 - Cusco / Sacred Valley / Cusco", ite_text: "Desayuno. Día libre para realizar actividades independientes. Camine a través de esta adorable ciudad, explorando sus asombrosas calles estrechas la cual será una experiencia inolvidable. Excelentes compras son las tradicionales artesanías Peruanas, chompas de lana de alpaca, ponchos, cerámica, joyas de oro y plata, etc. Debido a la gran variedad de productos, nosotros recomendamos que una vez que encuentre un artículo en particular lo compre ya que puede ser que no encuentre uno similar en otra tienda. (D)", ite_image: "https://www.fiesta-tours-peru.com/img/itineraries/1.jpg",},
        {   ite_titulo: "Día 6 - Cusco", ite_text: "Desayuno. Traslado al aeropuerto para tomar el vuelo a Lima y de ahí tomar el vuelo de conexión de regreso a casa. (D)", ite_image: "",},
        {   ite_titulo: "Día 7 - Cusco / Lima / Casa", ite_text: "Desayuno. Traslado al aeropuerto para tomar el vuelo a Lima y de ahí tomar el vuelo de conexión de regreso a casa. (D)", ite_image: "",},
    ],


  },
  {
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772127821/wonders-of-peru_dbdgn7.webp",
    title: "Legacy of The Incas",
    text: "A two week program including Belmond hotels and trains.",
    name:"leas",


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


  },

  {
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772127821/peru-boutique_rewope.webp",
    title: "Legacy of The Incas",
    text: "A two week program including Belmond hotels and trains.",
    name:"incas",

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


  },

  {
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772127821/cam-cusco_g9sv5e.webp",
    title: "Legacy of The Incas",
    text: "A two week program including Belmond hotels and trains.",
    name:"he-incas",


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


  },

  {
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772127821/isla-uros_m0ai0t.webp",
    title: "Legacy of The Incas",
    text: "A two week program including Belmond hotels and trains.",
    name:"legacy",



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


  },

  {
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772127821/conv-sta-catalina_ybzufc.webp",
    title: "Legacy of The Incas",
    text: "A two week program including Belmond hotels and trains.",
    name:"legacas",


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


  },


];



