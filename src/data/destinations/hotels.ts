export interface Hotel {
  slug: string;
  title: string;
  fondo: string;
  destination: string;
}

export const hotels: Hotel[] = [

  // 1️⃣ LIMA
  {
    slug: "belmond-miraflores-park",
    title: "Miraflores Park, A Belmond Hotel",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/Miraflores-Park_k8kxau.webp",
    destination: "lima",
  },
  {
    slug: "hotel-b",
    title: "Hotel B",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/Hotel-B_wzettc.webp",
    destination: "lima",
  },
  {
    slug: "jw-marriott-lima",
    title: "JW Marriott Hotel Lima",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/Marriott-Miraflores_obgk9p.webp",
    destination: "lima",
  },
  {
    slug: "ac-hotel-lima",
    title: "AC Hotel Lima Miraflores",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/AC_j04ali.webp",
    destination: "lima",
  },
  {
    slug: "country-club-lima",
    title: "Country Club Lima Hotel",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/country-club_zshijx.webp",
    destination: "lima",
  },

  // 2️⃣ CUSCO
  {
    slug: "monasterio-belmond",
    title: "Monasterio, A Belmond Hotel Cusco",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/monasterio_v66tbl.webp",
    destination: "cusco",
  },
  {
    slug: "jw-marriott-cusco",
    title: "JW Marriott El Convento Cusco",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/marriott-cusco_jhzguk.webp",
    destination: "cusco",
  },
  {
    slug: "palacio-del-inka",
    title: "Palacio del Inka, A Luxury Collection",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/palacio-del-inka_iyacvk.webp",
    destination: "cusco",
  },

  // 3️⃣ MACHU PICCHU
  {
    slug: "sanctuary-lodge",
    title: "Sanctuary Lodge, A Belmond Hotel",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/Sanctuary-lodge_fcinjh.webp",
    destination: "machu-picchu",
  },
  {
    slug: "inkaterra-machu-picchu",
    title: "Inkaterra Machu Picchu Pueblo Hotel",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/inkaterra-mapi_xhz39g.webp",
    destination: "machu-picchu",
  },
  {
    slug: "sumaq-machu-picchu",
    title: "Sumaq Machu Picchu Hotel",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/sumaq_rhesqt.webp",
    destination: "machu-picchu",
  },

  // 4️⃣ AREQUIPA
  {
    slug: "las-casitas-colca",
    title: "Las Casitas, A Belmond Hotel",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/CASITA-GARDEN_goxo5t.webp",
    destination: "arequipa",
  },
  {
    slug: "aranwa-colca",
    title: "Aranwa Pueblito Encantado del Colca",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/DESTINO_iy0m0r.webp",
    destination: "arequipa",
  },
  {
    slug: "cirqa-arequipa",
    title: "CIRQA",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/CIRQA2_kqgw1k.webp",
    destination: "arequipa",
  },

  // 5️⃣ PUNO
  {
    slug: "titilaka",
    title: "Titilaka",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/inkaterra-mapi_xhz39g.webp",
    destination: "puno",
  },

  // 6️⃣ SACRED VALLEY
  {
    slug: "tambo-del-inka",
    title: "Tambo del Inka, A Luxury Collection",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/tambo-inka_rixdeu.webp",
    destination: "sacred-valley",
  },
  {
    slug: "rio-sagrado",
    title: "Rio Sagrado, A Belmond Hotel",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/Belmond-rio-sagrado_va7vha.webp",
    destination: "sacred-valley",
  },
  {
    slug: "inkaterra-hacienda",
    title: "Inkaterra Hacienda Urubamba",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/inkaterra-hacienda_i1y8x9.webp",
    destination: "sacred-valley",
  },

  // 7️⃣ AMAZON RIVER CRUISES
  {
    slug: "aria-amazon",
    title: "Aria Amazon",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/amazon-cruises_p0ij0b.webp",
    destination: "amazon-river-cruises",
  },
  {
    slug: "delfin-i",
    title: "Delfin I",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/delfin1-cruises_uez3zm.webp",
    destination: "amazon-river-cruises",
  },
  {
    slug: "delfin-ii",
    title: "Delfin II",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/delfin2-cruises_l11b9r.webp",
    destination: "amazon-river-cruises",
  },

  // 8️⃣ LUXURY TRAINS
  {
    slug: "belmond-hiram-bingham",
    title: "Belmond Hiram Bingham",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/hiram-bingham_dfwjik.webp",
    destination: "luxury-trains",
  },
  {
    slug: "belmond-andean-explorer",
    title: "Belmond Andean Explorer",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/andean-explorer_ry8rv8.webp",
    destination: "luxury-trains",
  },

  // 9️⃣ NAZCA - PARACAS
  {
    slug: "hotel-paracas",
    title: "Hotel Paracas, A Luxury Collection",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772559657/JARANA-BAR_ux98is.jpg",
    destination: "nazca-paracas",
  },
  {
    slug: "aranwa-paracas",
    title: "Aranwa Paracas Resort & Spa",
    fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772559640/DESTINO_opoomc.jpg",
    destination: "nazca-paracas",
  },

];