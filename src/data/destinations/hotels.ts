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

  //  LIMA
  {
    slug: "belmond-miraflores-park",
    title: "Miraflores Park, A Belmond Hotel",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634001/FOTO_PORTADA_ruluoz.jpg",
    description:"Set in a verdant garden, Belmond Miraflores Park is a true urban sanctuary beside the city’s cultural gems. Located in Miraflores, one of the most exclusive residential areas of Lima, this boutique hotel offers awesome views over the Pacific Ocean. Its modern facilities, spacious suites and personalized service make this hotel the perfect place for travelers. Tragaluz restaurant offers a wide variety of international dishes with Asian, Mediterranean and Peruvian touches, as well as innovative cocktails and snacks served on an elegant terrace.",
    destination: "lima",
    hotelImage: [
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634001/FOTO_PORTADA_ruluoz.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772633982/RESTAURANT_OBSERVATORY_l5tmsu.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772633982/PRESIDENTIAL_POOL_SUITE_eimqtd.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772633981/OCEAN_VIEW_CLUB_yc36js.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772633981/GUEST_STAIRCASE_jjc6o5.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772633980/GUEST_POOL1_f0ehsk.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772633979/GIMNASIO_k2hzr5.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772633979/BMIRAFLORESPARK_wicwr7.jpg"},
    ],
  },
  {
    slug: "hotel-b",
    title: "Hotel B",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772633987/FOTO_PORTADA_v8xoc3.jpg",
    description:"The first Relais &amp; Châteaux hotel in Lima is ideally located in the heart of Barranco, the most bohemian and artistic district in the city. The house is a pristine example of a Belle Époque mansion, originally built in 1914. It offers 20 guestrooms; ten of them have been restored to maintain the spirit of this grand house and equipped with modern comforts; in addition to seven annexed rooms in the contemporary wing and three new ones over the art gallery. The bar &amp; restaurant hosts a lively mix of savvy locals and inquisitive travelers open for coffee, meals, tea time or drinks. The Grand Room is decorated to recall the bohemian cafes, a traditional hotel bar with stunning pieces of modern art.",
    destination: "lima",

    hotelImage: [
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772633988/HOTEL_B2_ecjzgs.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772633988/ROOFTOP_s52xek.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772633987/HOTEL_B_errsk8.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772633987/FOTO_PORTADA_v8xoc3.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772633985/EL_PATIO_xohgxb.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772633984/BAR_qdlbau.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772633984/ATELIER1_edujal.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772633983/ATELIER_wrvoal.jpg"},
    ],
  },
  {
    slug: "jw-marriott-lima",
    title: "JW Marriott Hotel Lima",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772633990/FOTO_PORTADA_fq20we.jpg",
    description:"It is located in Lima’s vibrant financial and exclusive district of San Isidro. All 301 spacious and elegant guest rooms and suites, with incredible views of the city, are designed so that you are guaranteed perfect rest and comfort with our famous Heavenly Bed® and Heavenly Bath®. It has also been recognized by TripAdvisor in 3 categories of Travelers’ Choice Award 2017, as one of the most luxurious hotels in South America and with the most exceptional service. Heavenly Spa by Westin® is considered the largest urban spa in South America. It has 17 treatment rooms and a great variety of services, designed tailor-made to our clients.",
    destination: "lima",
    hotelImage: [
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772633994/PRIME_ROOM_hnlfz1.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772633993/PRESIDENTIAL_SUITE_p2xgxc.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772633992/POOL_cypiki.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772633992/JW_MARRIOTT_LIMA_EXTERIOR2_frn74k.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772633990/FOTO_PORTADA_fq20we.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772633989/EXECUTIVE_LOUNGE_vqkgln.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772633989/DELUXE_BATHROOM_iwdzyk.jpg"},
    ],
  },
  {
    slug: "ac-hotel-lima",
    title: "AC Hotel Lima Miraflores",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772633976/FOTO_PORTADA_qw7mdq.jpg",
    description:"AC Hotel Lima Miraflores enjoys an unbeatable location at Malecon de la Reserva, with a stunning ocean view in Miraflores. In summer, beautiful sunsets are part of the hotel´s landscape, since they can be seen from AC Lounge and Bar, most of the rooms and the rooftop. In addition, AC Hotel Lima Miraflores is located a few minutes ́walk from popular  attractions as Kennedy Park, where travellers immerse themselves into the local culture, the Indigenous Market, where beautiful handcrafts can be bought and next to Larcomar, an upscale shopping center with a vast variety of dining options and well-known brand stores.",
    destination: "lima",
  
    hotelImage: [
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772633978/JUNIOR_SUITE_ppgubj.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772633977/INSUMO_pjwz24.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772633977/GUEST_BATHROOM_DELUXE_crogcf.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772633976/FOTO_PORTADA_qw7mdq.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772633976/DELUXE_OCEAN_VIEW_tsixwi.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772633975/DELUXE_CITY_VIEW2_vrixyg.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772633974/AC_KITCHEN_do8x1m.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772633974/AC_BAR_xiaeaw.jpg"},
    ],
  },
  {
    slug: "country-club-lima",
    title: "Country Club Lima Hotel",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772633971/FOTO_PORTADA_b7gvpp.jpg",
    description:"Walking through Country Club Lima Hotel means being a part of Lima’s history: cosmopolitan, traditional, unique. Each corner of the hotel houses a story, a legend, a mystery, as well as more than 300 works of art from the Pedro de Osma Museum, which tell the tale of the city’s past. The hotel recently underwent a remodeling that emphasizes the classic architecture while highlighting a new, contemporary design tailored to the needs of the modern traveler. The result is a perfect unity of the glamour of the past and the vanguard of the present.",
    destination: "lima",
  
    hotelImage: [
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772633973/SUITE_GOBERNADOR_DE_LUJO_vsb2tq.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772633973/SUITE_GOBERNADOR_DE_LUJO_BATHROOM_sibmo9.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772633971/FOTO_PORTADA_b7gvpp.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772633971/POOL_lk9wdf.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772633971/PERROQUET_qyb6z3.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772633970/LOBBY_ajb6bu.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772633970/MASTER_ROOM_a8hzew.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772633970/BAR_INGL%C3%89S_dpobti.jpg"},
    ],
  },

  {
    slug: "the-westin-hotel",
    title: "The Westin Lima Hotel & Convention Center ",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772633995/FOTO_PORTADA_bflqjo.jpg",
    description:"It is located in Lima’s vibrant financial and exclusive district of San Isidro. All 301 spacious and elegant guest rooms and suites, with incredible views of the city, are designed so that you are guaranteed perfect rest and comfort with our famous Heavenly Bed® and Heavenly Bath®. It has also been recognized by TripAdvisor in 3 categories of Travelers’ Choice Award 2017, as one of the most luxurious hotels in South America and with the most exceptional service. Heavenly Spa by Westin® is considered the largest urban spa in South America. It has 17 treatment rooms and a great variety of services, designed tailor-made to our clients.",
    destination: "lima",

    hotelImage: [
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772633999/WESTIN_EXTERIOR_jhf1fh.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772633998/SALAR_BAR_ph3b6m.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772633998/MASTER_SUITE_ROOM_gjblmi.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772633997/MAIN_POOL_qled7t.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772633997/LOBBY_tp33p8.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772633995/FOTO_PORTADA_bflqjo.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772633995/EXECUTIVE_ROOM_wuzmax.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772633994/EXECUTIVE_LOUNGE_yzccmj.jpg"},
    ],

  },

  //  CUSCO
  {
    slug: "monasterio-belmond",
    title: "Monasterio, A Belmond Hotel Cusco",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634082/FOTO_CARATULA_bh4prc.jpg",
    description:"Steps from Cusco’s lively Central Square lies Belmond Hotel Monasterio, a restored 16th century monastery and one of the city’s most cherished landmarks. Set around a stunning central courtyard with a 300-year-old cedar tree, this charming retreat is known for its exceptional architecture, including a gilded chapel hung with fine works of art. As the original architecture of the monastery remains lergely unchanged, our enchanting rooms reflect their origins as homes of Jesuit seminarians. No two are alike and all vary in size and format. Three times a week, we stage a vibrant opera night featuring Cusco´s finest tenor and soprano.",
    destination: "cusco",

    
    hotelImage: [
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634085/SUPERIOR_ROOM_bf1a3y.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634084/ONE_BEDROOM_SUITE2_rxm8t5.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634083/LOBBY_rrj2cq.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634082/ILLARIY_tbyouw.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634082/FOTO_CARATULA_bh4prc.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634081/EL_TUPAY_cejeih.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634080/DELUXE_ROOM_nwuyno.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634078/BMONASTERIO_vt6fro.jpg"},
    ],


  },


    {
    slug: "palacio-nazarenas",
    title: "Palacio Nazarenas",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634087/FOTO_CARATULA_sr8hkz.jpg",
    description: "Set in a tranquil plaza behind Cusco’s Main Square, this restored 17th-Century Palace and Convent is now one of the city’s most exclusive hotels. An irresistible mix of ancient and modern, it blends inca walls, a cloistered courtyard and ancient fountain with a fabulous spa, the city’s first outdoor pool and a cuttingedge restaurant. With a blend of understated elegance and Peruvian flourishes, each boutique suite is a spacious sanctuary. Oxygen-enriched air enhances wellbeing, while delicate Andean aromas revive and rejuvenate. All suites feature Peruvian travertine decor and exquisite views of the hotel courtyard or beyond.",
    destination: "cusco",

    hotelImage: [
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634092/SUITE_STUDIO_DELUXE_CITY_VIEW_baxv3x.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634091/STUDIO_SUITE_efd5i1.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634090/SENZO_q8unvr.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634089/SENZO_BAR_wouiia.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634088/INCA_STUDIO_SUITE_g3ua3a.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634087/HYPNOZE_SPA_pnc8j6.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634087/FOTO_CARATULA_sr8hkz.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634086/BPALACIO_f1pwg7.jpg"},
    ],
  },

      {
    slug: "inkaterra-la-casona",
    title: "Inkaterra La Casona Relais Chateau ",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634056/FOTO_CARATULA_kiotwo.jpg",
    description:"A grand colonial-era manor house steeped in history, Inkaterra La Casona is an exclusive boutique retreat. Located on the charming Plaza Las Nazarenas in the heart of the city’s historic centre, it was formerly the private pad of Spanish conquistadors. Today the meticulously restored 16th century abode is a national historic monument and hides 11 sumptuous suites around a grassy, arcaded courtyard patio. Replete with exquisite antiques and traditional warm- hued textiles, characterful original features are complemented by contemporary comforts of underfloor heating and decadent bathrooms. The personalised service of Peru’s first luxury Relais &amp; Chateaux property is that of an intimate, private home, providing the perfect hideaway to discover the imperial city of the Incas.",
    destination: "cusco",
  
    hotelImage: [
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634060/PATIO_SUITE_bwksle.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634059/LOBBY_frrkhu.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634058/INTERIOR3_fbxqja.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634058/INTERIOR2_gd2ojy.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634057/IKT_LA_CASONA_pp4yrs.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634056/FOTO_CARATULA_kiotwo.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634055/DINING_ROOM_jbi8dw.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634054/BALCON_SUITE_mw6xy4.jpg"},
    ],
  },
  {
    slug: "jw-marriott-cusco",
    title: "JW Marriott El Convento Cusco",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634062/FOTO_CARATULA_nwrrhu.jpg",
    description:"Located three blocks away from the Historic Center of the city of Cusco, the JW Marriott El Convento Cusco has a personalized design surrounding the ancient Colonial San Agustin Convent of the XVI century declared cultural heritage by the Peruvian government. Carefully restored, one can appreciate archaeological ruins from the pre-Inca, Inca, Colonial, Republican and Contemporary periods, which give the hotel a unique character offering an incomparable cultural experience to its visitors. Being the first Marriott property built at 3,400 masl, it has 153 rooms all with a supplementary oxygen system. The hotel has a spa, restaurant, bar, meeting rooms and archaeological exhibition rooms.",
    destination: "cusco",

    hotelImage: [
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634070/RECEPTION_opz9gf.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634068/QESPI_RESTAURANT_lf3chm.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634067/QESPI_BAR_ize5iv.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634065/PATIO_gduhoy.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634064/LOBBY_rejaqa.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634063/INCA_WALL2_jb4hav.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634062/FOTO_CARATULA_nwrrhu.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634061/CLASSIC_INCA_x8vd9z.jpg"},
    ],

  },
  {
    slug: "palacio-del-inka",
    title: "Palacio del Inka, A Luxury Collection",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634071/FOTO_CARATULA_lbumuw.jpg",
    description:"This hotel shares the archeological jewels and the combination of Inca and colonial architecture of the city. The hotel has been declared a Cultural Heritage of the city of Cusco as it was part of the most famous and sacred temple of Incan times, the Qorikancha or Temple of the Sun, and also one of the most acclaimed residences of Colonial Peru, the “Casona de los Cuatro Bustos”. Its 203 rooms and suites have been designed to offer the best rest. Most of them feature details carved in wood and many have friezes and ceilings hand-painted by famous local artists.",
    destination: "cusco",

    hotelImage: [
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634077/RUMI_BAR_pc7tuz.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634076/PRESIDENTIAL_SUITE_tacmxs.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634074/PREMIUM_ROOM_w4ueic.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634074/PATIO_y9hvtb.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634073/LOBBY_jtljeq.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634072/INTI_RAYMI_RESTAURANT_epgbxd.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634071/FOTO_CARATULA_lbumuw.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634070/BUFFET_BREAKFAST_bslxj6.jpg"},
    ],

  },

  // MACHU PICCHU
  {
    slug: "sanctuary-lodge",
    title: "Sanctuary Lodge, A Belmond Hotel",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634191/FOTO_CARATULA_t0jomc.jpg",
    description:"Boasting an exclusive location just steps from the entrance to the Sanctuary of Machu Picchu, our uniquely privileged position offers guests unrivalled accesos to the Sacred Citadel. Visit early in the morning when it is magically quiet just as the crowds are arriving, return to our mountain retreat to find an oasis of calm. Relax in the orchid gardens spotting hummingbirds or meditate facing the Huayna Picchu Mountain. Unwind with a yoga session, take part in a traditional shaman ceremony in the garden, or sip muña tea in Tampu Bar. Tranquility, wonder and beauty are at the heart of our unique experience.",
    destination: "machu-picchu",


    hotelImage: [
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634197/TAMPU_RESTAURANT_afvzoy.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634196/SUPERIOR_TERRACE_vdiwdi.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634195/STANDARD_PATIO_ROOM_c0ofyc.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634194/GARDENS_ptpzww.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634191/FOTO_CARATULA_t0jomc.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634191/DELUXE_TERRACE2_hnnnku.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634189/DELUXE_TERRACE_tqxdce.jpg"},
    ],

  },
  {
    slug: "inkaterra-machu-picchu",
    title: "Inkaterra Machu Picchu Pueblo Hotel",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634174/FOTO_CARATULA_rqpl7k.jpg",
    description:"This National Geographic Unique Lodge of the World has the character of an intimate Andean-style village on the hill slope, waterfalls, stone pathways and 83 whitewashed adobe casitas tucked away in the Andean cloud forest. Within its five hectares (12.3 acres) of exquisite natural beauty, 214 bird species have been registered; as also the world’s largest native orchid collection (372 species) in its natural habitat. The renowned Unu Spa combines classic nurturing with a mystical Andean approach and the first-class restaurant shares the secrets of Peruvian cuisine with a contemporary twist.",
    destination: "machu-picchu",
  
    hotelImage: [
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634179/SUPERIOR_DELUXE_ROOM_lf7uot.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634177/LOBBY_bcvmhl.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634176/JR_SUITE_mrqha7.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634175/INKATERRA_SUITE_qtsj6l.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634174/FOTO_CARATULA_rqpl7k.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634173/ENTRANCE_ez811h.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634172/DINING_ROOM_egnb8n.jpg"},
      
    ],
  },
  {
    slug: "sumaq-machu-picchu",
    title: "Sumaq Machu Picchu Hotel",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634181/FOTO_CARATULA_yspl9d.jpg",
    description:"Sumaq Machu Picchu hotel, named one of South America’s best hotels by Condé Nast Traveler and Travel + Leisure, is located at the foot of the historic sanctuary of Machu Picchu near the beautiful Vilcanota River, and offers impressive views of the mountains and landscapes. A hotel with a contemporary Andean style inspired by the ancient Peruvian cultures, this hotel offers personalized luxury service, innovative Peruvian cuisine, and a relaxing spa that features ancient Inca treatments for the body and mind. The luxury property features 62 exquisitely appointed rooms and suites, including 1 imperial suite, 2 junior suites and 59 standard rooms. Sumaq has been awarded Rainforest Alliance certification for its focus on sustainability.",
    destination: "machu-picchu",
      
    hotelImage: [
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634187/QUNUQ_RESTAURANT_jymg8j.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634186/LOBBY2_h0o8er.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634184/LOBBY_tssjhh.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634183/JR_SUITE_iqotpo.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634182/JR_SUITE_BATHROOM_atzlhp.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634181/FOTO_CARATULA_yspl9d.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634179/DELUXE_RIVER_VIEW_batnym.jpg"},
      {image:""},
      
    ],
  },

  //  AREQUIPA
  {
    slug: "las-casitas-colca",
    title: "Las Casitas, A Belmond Hotel",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634245/CASITA_GARDEN_znmp2u.jpg",
    description:"Surrounded by the spellbinding landscapes of Peru´s plunging Colca Canyon, Belmond Las Casitas offers the ultimate Andean escape. Within our serene gardens lie 20 luxurious cottages and a magnificent spa, all offering spectacular views. Embark on treks through the vast, verdant fields or saunter around the hotel farm. Spend time in harmony with the wonders of nature and learn about the local communities of this lush valley where time stands still. Twenty generous casitas are dotted around the property, including a Presidential Casita. Each offers a luxurious bedroom, attractive lounge and large bathroom, as well as a private terrace and small private heated pool.",
    destination: "arequipa",
    
    hotelImage: [
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634251/SPA_SAMAY_ex0tpo.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634250/POOL_ad9nuf.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634249/LIBRARY_oefvij.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634247/EXTERIOR_am4rtq.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634246/CASITA_VALLEY_VIEW2_op0vxn.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634245/CASITA_GARDEN_znmp2u.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634242/CASITA_GARDEN_VIEW2_eyqdqr.jpg"},
      
    ],
  },
  {
    slug: "aranwa-colca",
    title: "Aranwa Pueblito Encantado del Colca",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634226/FOTO_CARATULA_tyosvu.jpg",
    description:"It is a dream hotel, full of legends, andean and colonial traditions, surrounded by stunning views, located in the district of Coporaque along the Colca riverbank, three hours from the city of Arequipa. The natural beauty of this place makes their guests enjoy a relaxing experience, allowing them to appreciate the majesty of the andean mountains as they walk through its lush gardens breathing fresh air. At night, hundreds of stars in the sky offer one of the most amazing spectacles that can be observed in nature, along with many shooting stars that create an atmosphere of magic and enchantment.",
    destination: "arequipa",
      
    hotelImage: [
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634254/PISCINA_SPA4_edbipy.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634230/SUITE_vwrarh.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634229/SUITE_BATHROOM_mkvmc7.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634229/SUITE_BATHROOM_mkvmc7.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634227/HABITACION_DELUXE_a3xq3e.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634226/FOTO_CARATULA_tyosvu.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634224/COMEDOR_cyp5vl.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634223/COLCA_PANORAMICA_B_ffvqbl.jpg"},
      
    ],
  },
  {
    slug: "cirqa-arequipa",
    title: "CIRQA",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634237/CIRQA2_ncd4zc.jpg",
    description:"Located in the historic centre of Arequipa, Cirqa shares an age-old bond with the San Agustin Church. Like the Church’s traditional parador, where monks would receive travellers with one-of-a-kind service and hearty cuisine, Cirqa was fervently inspired by the unbounded hospitality and ecclesiastical history that still define Arequipa to its core. Honouring this original concept, Cirqa is a place of both rest and fine cuisine. In the parador, travellers can embark on a myriad of excursions or choose to sample homegrown dishes in the several eating areas. This hotel has 11 rooms in three different categories (Claustro, Aposento and Bóveda) and a patio with heated plunge pool and therapy spa room.",
    destination: "arequipa",
      
    hotelImage: [
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634242/RESTAURANTE_ljei5s.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634240/POOL_x3bruj.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634238/FOTO_CARATULA_huwfx7.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634237/CIRQA2_ncd4zc.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634235/CIRQA_h6b7zd.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634234/B%C3%93VEDA2_upx1no.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634232/APOSENTO_eewx2q.jpg"},
      {image:""},
      
    ],
  },

  //  PUNO
  {
    slug: "titilaka",
    title: "Titilaka",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634203/FOTO_CARATULA_nyzjcj.jpg",
    description:"Titilaka, a remote Experience Lodge on the shores of Lake Titicaca, will immerse you in the intriguing allure of Lake Titicaca where sky, earth, and water connect. Surrounded by stunning scenery and pristine geography, Titilaka’s contemporary design and comfort integrates with the natural environment. Its architectural concept is closely linked to a special place positioned starkly between water, mountains and sky. The Lodge is not only a welcoming lodge full of contemporary comforts and caring services, but a place designed to integrate with the environment and pay homage to the cultures of Lake Titicaca.",
    destination: "puno",
      
    hotelImage: [
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634206/TITILAKA2_gomb77.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634205/RESTAURANT_nxdxli.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634204/KING_ROOM2_qtdani.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634203/FOTO_CARATULA_nyzjcj.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634201/EXTERIOR_fskj6i.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634200/DAWN_BATHROOM_sxedvv.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634199/CORNER_BATHROOM_am8gyl.jpg"},
      
    ],
  },

  // SACRED VALLEY
  {
    slug: "tambo-del-inka",
    title: "Tambo del Inka, A Luxury Collection",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634098/FOTO_CARATULA_ugmqjd.jpg",
    description:"This hotel has 128 rooms and suites, facing the river or the mountains; some of them have a balcony or terrace. Kallpa Spa, well known as one of the best spas in South America, it offers a wide variety of treatments based on ingredients from the Incas time. The hotel has a heated indoor and outdoor swimming pool, overlooking the mountains. In this property you will find a 5,000 m2 wide organic vegetable garden with products ranging from vegetables, greens, aromatic herbs, among others. The hotel is located close to the main archeological sites and has a private railway station onsite.",
    destination: "sacred-valley",
      
    hotelImage: [
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634106/POOL_uz1jre.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634102/SENIOR_SUITE_hkmh2s.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634101/LOBBY_fqjeiz.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634100/KIRI_BAR_chxqp3.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634099/JR_SUITE_bsdr98.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634098/FOTO_CARATULA_ugmqjd.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634098/HAWA_RESTAURANT_j6hrjy.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634096/DELUXE_nstqvq.jpg"},
      
    ],
  },
  {
    slug: "rio-sagrado",
    title: "Rio Sagrado, A Belmond Hotel",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634105/FOTO_CARATULA_yhiqyd.jpg",
    description:"In the Sacred Valley of the Incas, among verdand fields and towering mountains, lies Belmond Hotel Rio Sagrado. Designed in the style of a local village, with charming villas constructed from natural materials, it offers views of the mighty Urubamba River from each of the rooms. Each hideaway sits on a raised terrace that cascades down to the water’s edge. Private balconies offer sublime vistas onto the Sacred Valley. Inside, bright and airy spaces combine with enticing alpaca fabrics and indigenous design flourishes to conjure a sense of serenity.",
    destination: "sacred-valley",
      
    hotelImage: [
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634109/SPA_xdwu2t.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634109/MOVIE_NIGHT_emihp7.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634107/GARDEN_JR_SUITE2_nqncjb.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634106/GARDEN_JR_SUITE_baua0q.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634105/FOTO_CARATULA_yhiqyd.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634104/EL_HUERTO_BAR_oullq1.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634103/DELUXE_TERRACE_vks3x1.jpg"},
      
    ],
  },
  {
    slug: "inkaterra-hacienda",
    title: "Inkaterra Hacienda Urubamba",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634113/FOTO_CARATULA_j4l78u.jpg",
    description:"A contemporary hacienda-style hotel overlooking the heart of the Sacred Valley of the Incas, (39mi-63km) from Cusco, on the way to Machu Picchu, among imposing green mountains and harvest fields. All rooms and casitas feature breathtaking views of the Urubamba Mountain Range, immersing guests in open space, serenity and relaxing solitude. The architecture and interiors of this National Geographic Unique Lodge of the World, are inspired by the area’s cultural history, with colonial furniture, authentic Pre-Inca textiles &amp; masks and handcrafted woodwork that add to the hacienda’s Andean charm. An Earth to Table concept is operated with a 10-acre organic plantation where guests are welcome to pick their own produce. Carbon-free crops such as quinoa, Urubamba giant corn, medicinal herbs and a variety of potatoes are farmed with traditional hand tools and oxen, as done centuries ago.",
    destination: "sacred-valley",
      
    hotelImage: [
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634115/SUPERIOR_DELUXE_hp9vwp.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634114/LOBBY_pil4yy.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634113/FOTO_CARATULA_j4l78u.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634112/DINING_ROOM_iumxbn.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634111/CASITAS_uzygii.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634110/CASITA_URUBAMBA_p4mb05.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634109/BAR_js4uzf.jpg"},
      
    ],
  },
  {
    slug: "sol-luna",
    title: "SOL & LUNA",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772817274/sol-y-lunaexterior-view_sofj2i.webp",
    description:"At an altitude of 2800 m, colours are brilliant: the blue of the sky, the red of the earth and a fragmented mosaic created by a profusion of flowers. Sol &amp; Luna is inspired by this luminous setting and is a paean to the Sacred Valley of the Incas. Its architecture is a mix of avant-garde and primitive Peru, its clay walls are a backdrop to both contemporary and traditional Peruvian art, and its stones, beams and bricks from the valley find their natural home here. Its mouthwatering cuisine also draws its inspiration from local gastronomy, yet with a contemporary twist. Sol &amp; Luna is close to archaeological sites and offers a doorway to this lost civilisation.",
    destination: "sacred-valley",
      
    hotelImage: [
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772817239/7698701946_edc31f017b_o_5_11zon_tt7430.webp"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772817236/7257186696_163b9df765_o_8_11zon_rkx4hm.webp"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772817241/6_10_11zon_mkz7po.webp"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772817235/7273438860_c6ff3ae621_o_4_11zon_mcinso.webp"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772817235/7256599826_045a8ea44e_o_7_11zon_a2orhx.webp"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772817243/2_14_11zon_pkazjm.webp"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772817252/5_9_11zon_t2kjsw.webp"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772817244/11_19_11zon_psstft.webp"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772817246/4_16_11zon_q63caj.webp"},
      
    ],
  },

  // AMAZON RIVER CRUISES
  {
    slug: "aria-amazon",
    title: "Aria Amazon",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/amazon-cruises_p0ij0b.webp",
    description:"Designed by innovative architect Jordi Puig, Aria Amazon is a river cruise ship that is custom-built to explore the Peruvian Amazon and the famed Pacaya-Samiria National Reserve in absolute comfort and luxury — with minimal impact to the delicate Amazon river and rainforest environment. On board, 16 spacious suites with floor-to-ceiling windows give guests a full view of the Amazon’s majestic river and rainforests. The top deck features ample amenities that include a jacuzzi, indoor lounge and bar, and an outdoor observation deck. In the dining room, guests also savor the best of Peruvian cuisine with a comprehensive dining menu created by Pedro Miguel Schiaffino, one of Peru’s most accomplished chefs known for using produce and ingredients from the Peruvian Amazon. With small-group excursions of no larger than eight conducted by highly-experienced naturalist guides, guests can be assured of the most fulfilling, life-enriching wildlife encounters they can get from an Amazon discovery cruise deep in the Amazon rainforest.",
    destination: "amazon-river-cruises",
      
    hotelImage: [
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634293/TWIN_SUITE_ys0gvc.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634293/SUITE_BATHROOM_dvjnl4.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634291/OUTDOOR_LOUNGE_jnsczs.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634290/OUTDOOR_JACUZZI_ezxhg2.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634288/MASSAGE_ROOM_lztong.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634287/INDOOR_LOUNGE_xtrztb.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634285/FOTO_PORTADA_mbnvb8.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634283/ARIA_CRUISE_lbzml3.jpg"},
      
    ],
  },
  {
    slug: "delfin-i",
    title: "Delfin I",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634256/DELFIN_I_1_zzodlg.jpg",
    description:"Delfin I takes you one step beyond in terms of service, intimacy and personal attention. This River vessel offers just 04 exclusive oversized suites with panoramic private terraces; 02 of these with a private whirlpool for the ultimate treat. Travelers will be spoiled by the floor-to-ceiling windows that allow nature to be part of the natural suite décor. The 3 times per day cabin service will ensure you the most optimal personalized experience. On the top deck, guests will find a lounge area, bar and entertainment center which are perfect places to relax in, while the jungle unfolds before their eyes. On the Delfin I, guests can get out on the water with the kayaks and stand up paddleboards. Lenght: 67 feet Beam: 33 feet Draft: 5´8” Capacity: 8 passengers / 12 passenger maximum",
    destination: "amazon-river-cruises",
      
    hotelImage: [
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634269/FOTO_PORTADA_puwgwo.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634267/DELFIN_I_8_ax8xbv.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634266/DELFIN_I_6_lhj4qw.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634266/DELFIN_I_7_rumygr.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634262/DELFIN_I_5_ycrung.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634260/DELFIN_I_3_rajtlj.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634259/DELFIN_I_2_caz4ks.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634256/DELFIN_I_1_zzodlg.jpg"},
      
    ],
  },
  {
    slug: "delfin-ii",
    title: "Delfin II",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634274/DELFIN_II_5_s13t4p.jpg",
    description:"Delfin II was built and launched in March 2009. The 14 cabins of this vessel include 04 Master Suites with 180° panoramic windows and 10 Suites, including 02 sets of Suites that can be interconnected to accomodate families. With movie screen sized windows and first-rate design, they offer both elegance and comfort while sailing through the Amazon region. An array of spaces, including the dining room, an observation deck and lounge, a bar, an entertainment center, and a lecture room, among others, provide ideal gathering places for all guests. Birdwatching, trailwalks, paddle boarding and fishing are some of the exciting activities you can practice. Lenght: 135 feet Beam: 32 feet Draft: 8´25” Capacity: 28 passengers ",
    destination: "amazon-river-cruises",
      
    hotelImage: [
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634281/FOTO_PORTADA_rbdsxn.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634280/DELFIN_II_8_hsfrsm.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634278/DELFIN_II_7_brm9zl.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634277/DELFIN_II_6_v2qvor.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634274/DELFIN_II_5_s13t4p.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634272/DELFIN_II_4_pz6vjm.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634271/DELFIN_II_3_xfln14.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634270/DELFIN_II_1_jpxuwn.jpg"},
      
    ],
  },

  // LUXURY TRAINS
  {
    slug: "belmond-hiram-bingham",
    title: "Belmond Hiram Bingham",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634375/FOTO_CARATULA_q0p1c2.jpg",
    description:"Be swept away by old-world charm as Belmond Hiram Bingham journeys through the Peruvian highlands. Gleaming wood-panelled interiors and brass finishes evoke classic 1920’s parlour cars, while vibrant colours and nature- inspired motifs reveal a distinctly Peruvian soul. Named after the American explorer who re-discovered the site of Machu Picchu, the train invites you to admire the bespoke artwork installation and to delight in exclusive on-board experiences. Savour classic local flavours and gourmet cuisine as the train meanders through the breathtaking Sacred Valley. Celebrate with a lively dance as musicians play in the Bar Car. Marvel at the fertile lands and soaring mountains between Cusco and Machu Picchu. Bring the lost art of the pioneer to life with a thrilling rail adventure through the heart of the Inca Empire on Belmond Hiram Bingham. Ranked as the #10 Best Train in the World – 2020 Readers’ Choice Awards.",
    destination: "luxury-trains",
      
    hotelImage: [
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634380/THE_TRAIN_yxqbqe.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634379/OBSERVATION_CAR_wwyfgv.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634378/RESTAURANT_CAR_i6iwto.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634375/FOTO_CARATULA_q0p1c2.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634373/DANCERS_n48byf.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634372/BAR_CAR_zl5bbr.jpg"},
      
    ],
  },
  {
    slug: "belmond-andean-explorer",
    title: "Belmond Andean Explorer",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634361/FOTO_CARATULA_f3iduy.jpg",
    description:"Fresh, bold and wild, Belmond Andean Explorer arrives on the horizon in striking style as the first luxury sleeper train in South America. The silky midnight-blue livery of the train’s 16 carriages shimmers against the backdrop of Peru’s lofty landscapes as it soars across the Andean plains.Take in the rugged beauty of rural Peru and the tranquility of Lake Titicaca. Discover a floating community at the unique Islas Uros, a fascinating collection of man-made islands using buoyant reeds to stay afloat. Pause en-route from Puno to Cusco at the La Raya market, a colourful stretch of stalls brimming with handicrafts and traditional ware. Arrive in style to Arequipa; Peru’s second city is rich in vibrant colours and enticing spice-laden scents. Journeys from Cusco to Arequipa capture the heart of the Andean region, with a range of inspiring excursions each day. This train marks a departure from classic vintage luxury, instead evoking a contemporary aesthetic perfectly designed to frame the awe-inspiring Andean landscape. Ranked as the #3 Best Train in the World – 2020 Readers’ Choice Awards.",
    destination: "luxury-trains",
      
    hotelImage: [
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634370/TWIN_BED_CABIN2_egaxvg.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634369/TWIN_BED_CABIN_mu4cvt.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634368/THE_TRAIN_cof8d1.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634366/SUITE_CABIN_BED_abfoph.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634363/OBSERVATION_CAR2_hbgzha.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634362/LOUNGE_CAR_hbdrru.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634361/FOTO_CARATULA_f3iduy.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634359/DINING_CAR_wlftol.jpg"},
      
    ],
  },

  // NAZCA - PARACAS
  {
    slug: "hotel-paracas",
    title: "Hotel Paracas, A Luxury Collection",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634331/FOTO_CARATULA_eyk9mu.jpg",
    description:"Set in one of the most beautiful natural settings on the Peruvian coast, the Hotel Paracas, a Luxury Collection Resort is part of the Starwood Hotels &amp; Resorts group. The bay is a natural reserve lined with wild beaches and sheltering large populations of sea lions, Humboldt penguins and sea otters. Hotel Paracas is spread over nearly 35 hectares along the bay. It has 120 rooms, two pools, a lounge bar, three restaurants and a spa that offers every luxury imaginable. It also has meeting rooms that can host up to 500 people, a Kid’s Club area, and spaces for reading and family activities. All this contributes to making the Hotel Paracas the very best choice for luxury accommodation along the Peruvian coast.",
    destination: "nazca-paracas",
      
    hotelImage: [
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634347/SUITE_TERRACE_yzwhqj.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634346/RECEPTION_etdzqo.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634333/PRIVATE_DOCK_bgncsw.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634332/OCEAN_VIEW_ROOM_cy6rjn.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634331/FOTO_CARATULA_eyk9mu.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634329/BAR_LOUNGE_r1qjto.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634328/BALLESTAS_RESTAURANT_sh1d2g.jpg"},
      
    ],
  },
  {
    slug: "aranwa-paracas",
    title: "Aranwa Paracas Resort & Spa",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634351/FOTO_CARATULA_f0n8cu.jpg",
    description:"Paracas Bay is located in the province of Pisco. This place of wonderful natural diversity invites you to take a journey through its vast and rich history, an invitation difficult to resist. This exclusive and modern hotel is the perfect place to relax and enjoy with your friends, partner or family, as it has special spaces and activities for children. Our spacious and beautiful facilities, exquisite cuisine and excellent service are part of the proposal that Aranwa has for you in this new location. The hotel offers 115 sea view rooms, a spa conditioned to offer an experience of beauty, relaxation and renovation, and modern and exclusive facilities specially designed for conferences, cocktails, parties and important events, which can be held at the Convention Center, Lounge Bar on the pier, chapel, gardens, among others.",
    destination: "nazca-paracas",
      
    hotelImage: [
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634351/FOTO_CARATULA_f0n8cu.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634326/SPA_h6qlcf.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634324/JARANA_BAR_yhxlqk.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634323/DELUXE_ukv3iw.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634323/BARRA_BRISAS_BAR_vekyei.jpg"},
      {image:"https://res.cloudinary.com/dlgeap8h0/image/upload/v1772634322/DELUXE_TERRAZA_nqevtc.jpg"},
      
    ],
  },

];