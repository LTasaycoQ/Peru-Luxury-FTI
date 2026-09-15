export interface programsData {
    fondo: string;
    fondoHeader?: string;
    name: string;
    title: string;
    text: string;
    imgCardLink?: imgCardLink[];
    programBreve: programBreve[];
    programItenerario: programItenerario[];
    programIncluye: programIncluye[];
    programNoIncluye: programIncluye[];
}


export interface imgCardLink{
    imagen: string;
    link: string;
}

export interface programBreve {
    titulo_breve: string;
    text_breve: string;
}

export interface programItenerario {
    ite_titulo: string;
    ite_text: string;
    ite_image: string[];
}

export interface programIncluye {
    text: string;
}
export interface programNoIncluye {
    text: string;
}

export const programs: programsData[] = [

    {
        fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/f_auto,q_auto/v1772827864/iStock-1410778842_11zon_ijhdch.webp",
        title: "Eight Unforgettable Nights as you Step Back in Time ",
        text: "Eight unforgettable nights exploring the royal legacy of the Inca Empire.",
        name: "seven",
        fondoHeader: "https://res.cloudinary.com/dlgeap8h0/image/upload/f_auto,q_auto/v1778193169/iStock-2210582847_eugby5.jpg",

        imgCardLink: [
            {imagen: "https://res.cloudinary.com/dlgeap8h0/image/upload/f_auto,q_auto/v1772812725/lima6_gpntwj.webp", link: "lima",},
            {imagen: "https://res.cloudinary.com/dlgeap8h0/image/upload/f_auto,q_auto/v1772633988/ROOFTOP_s52xek.jpg", link: "lima",},
            {imagen: "https://res.cloudinary.com/dlgeap8h0/image/upload/f_auto,q_auto/v1771865774/monasterio_v66tbl.webp", link: "cusco",},
            {imagen: "https://res.cloudinary.com/dlgeap8h0/image/upload/f_auto,q_auto/mapi-portada_vvfhnw.webp", link: "machu-picchu",},
            {imagen: "https://res.cloudinary.com/dlgeap8h0/image/upload/f_auto,q_auto,w_700/v1772812892/catedral-cusco_z0lmgr.webp", link: "cusco",},
        ],
        programBreve: [
            { titulo_breve: "Day 1 - Arrival in Lima.", text_breve: "Arrival in Lima, the Gastronomic Capital of the Americas." },
            { titulo_breve: "Day 2 - Colonia Lima & Peruvian Paso Horse Show. (B,L) ", text_breve: "Colonial Lima city tour and traditional Peruvian Paso Horse Show." },
            { titulo_breve: "Day 3 - Lima, Cusco & Sacred Valley. (B,L)", text_breve: "Fly to Cusco and transfer to the scenic Sacred Valley." },
            { titulo_breve: "Day 4 - Pisac Andean Market, Pisac Archaeological Complex and Ollantaytambo Fortress. (B)", text_breve: "Visit Pisac Market and the impressive Ollantaytambo Fortress." },
            { titulo_breve: "Day 5 - Maras Salt Pools, Moray Terraces. (B) ", text_breve: "Explore the Maras Salt Pools and Moray agricultural terraces." },
            { titulo_breve: "Day 6 - Ollantaytambo Pueblo & Journey to Machu Picchu. (B) ", text_breve: "Walk through Ollantaytambo Pueblo and travel to Machu Picchu." },
            { titulo_breve: "Day 7 - Visit to Machu Picchu. (B) ", text_breve: "Full day at Machu Picchu with optional Huayna Picchu hike." },
            { titulo_breve: "Day 8 - Cusco City Tour and Sacsayhuaman", text_breve: "Cusco City Tour, Sacsayhuaman, and Andahuaylillas Church." },
            { titulo_breve: "Day 9 – Cusco to Lima and Home (B) ", text_breve: "Larco Museum visit in Lima and international departure home." }
        ],
        programItenerario: [
            {
                ite_titulo: "Day 1: Arrival in Lima",
                ite_text: `
                The City of Kings – The Gastronomic Capital of America – Capital of the Viceroyalty of Peru – Three Times Crowned Villa Welcome to the Capital of Flavors – Arrival in Lima. Peru's stunning capital is globally celebrated for its majestic colonial architecture, fascinating historical museums, and a legendary gastronomic scene that proudly rivals French haute cuisine, standing firmly as one of the most diverse culinary destinations on the planet.
                </br>
               Upon your arrival, enjoy a seamless private transfer directly to your hotel. You will have a free evening to begin exploring the local culinary landscape. Please note that if you wish to secure a table at top award-winning restaurants across Lima, Cusco, and the Sacred Valley, these dining experiences are at your own expense. Because these exclusive gastronomic sanctuaries experience extreme demand and operate with strictly limited seating, planning and securing your reservations up to six months in advance is essential.
               
               </br>
               </br>
                Peru has firmly established itself at the pinnacle of global haute cuisine, driven by visionary masters who transform native ingredients into true edible masterpieces, consistently earning top international accolades. Among these legendary culinary temples are Central, led by Virgilio Martínez alongside Pía León, and Maido, celebrated worldwide for its Nikkei creations.
               
               </br>
               </br>
               This elite circuit also features Astrid y Gastón, founded by pioneers Astrid Gutsche and Gastón Acurio, who first introduced authentic Peruvian flavors to the global stage from the historic Casa Hacienda Moreyra.
                
               To complete your first day, indulge your senses at Tragaluz, located within the Belmond Miraflores Park, where contemporary art blends with the cuisine of chef Ricardo Ehni.
               `,
                ite_image: [
                    "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772750032/1_13_11zon_nipbhx.webp",
                ],
            },
            {
                ite_titulo: "Day 2: Viceregal Lima & Peruvian Paso Horse Show (B,L)",
                ite_text: `
                The Majestic "City of Kings" opens its doors to us. We will begin the tour in the historic Plaza Mayor, the colonial heart of Lima's birthplace, where independence was proclaimed, featuring its beautiful and iconic central fountain.
                </br>
                </br>
                Right there we will admire the Government Palace, seat of the executive branch that dazzles with its neo-baroque architecture and its martial changing of the guard. Then, we will delve into the mysticism of the Basilica and Convent of San Francisco, a world-acclaimed monumental baroque complex.
                </br>
                </br>
                This UNESCO World Heritage site is famous for its legendary library, its cloisters adorned with tiles, and its mysterious underground colonial catacombs.
                </br>
                Following this deep historical immersion, we will transfer towards an exclusive and traditional hacienda situated on the outskirts of the city. In this atmosphere of absolute distinction and surrounded by beautiful gardens, you will delight in an exquisite high-end Creole cuisine lunch.
                </br>
                Directly in front of your table, the arena will become the stage for a wonderful living tradition: the majestic Peruvian Paso Horse show.
                </br>
                This noble specimen, entirely unique in its kind, dazzles the world with its signature "Paso Llano," a rhythmic and smooth four-beat lateral gait that redefines equestrian elegance in a perfect dance, where the chalán's skill and the animal's pride merge with grace without equal.
               </br>
               At the end of the show, a return transfer to your hotel in Lima will be provided.
                If time permits, we will be able to visit Pachacamac, the most important pre-Hispanic sanctuary on Peru's central coast. We will tour its imposing mud pyramids and temples dedicated to the creator god of the universe, immersing ourselves in the mysticism and living archaeology of this sacred place.

                `,
                ite_image: [
                    "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772750026/2_14_11zon_scv4xy.webp",
                ],
            },
            {
                ite_titulo: "Day 3: Lima, Cusco & Sacred Valley (B, L)",
                ite_text: `
                Cusco - The Capital of the Inca Empire - Abode of the Gods - Navel of the World.Upon your arrival in Cusco, you will be transferred to the Terra Andina Colonial Mansion. An Estate in Cusco’s Historic Center, a jewel built in the late 1700s during the Spanish Colonial Era 
                </br>
                </br>
               Enjoy an extraordinary included lunch, a wonderful culinary experience at the distinguished In-Terra restaurant, where you will delight in a gastronomic proposal that pays tribute to local wealth, masterfully intertwining Andean and Creole ingredients under a vanguard and modern vision, integrated harmoniously as part of today's select experiences.
                </br>
                </br>
               These meals represent the Sacred Nourishment service, a direct reference to the Inca worldview, where the earth (Pachamama) provided supplies with a nearly religious respect.
                </br>
               Menu Design and Local Connection: Your chefs were trained and the menu was designed under the expert advisory of professionals formed at Le Cordon Bleu.
                </br>
                In the afternoon, transfer to the Sacred Valley for a gradual acclimatization, featuring a brief stop at the interactive Yucay Living Museum. 
              </br>
              More than a visit, an absolute immersion. The Living Culture Museum is a magical interactive setting where history is touched and breathed.
               
              </br>
              </br>
              Passengers will marvel at observing closely the ancestral natural wool dyeing process, sharing moments with friendly alpacas and vicuñas in an idyllic environment, and discovering the agricultural secrets that fed the Inca Empire.
            Free Evening: Gastronomic Discovery in the Sacred Valley. Independent dinner, the Sacred Valley houses some of the most exclusive luxury hotel sanctuaries and refuges on the continent, whose culinary proposals are authentic works of art.

              `,
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772750035/3_15_11zon_yjd5lr.webp",],
            },
            {
                ite_titulo: "Day 4: Pisac Andean Market & Archaeological Site, Hacienda Huayoccari & Ollantaytambo Fortress (B, L)",
                ite_text: `
                   The Andean Heart of the Sacred Valley – Pisac Handicraft Market in the Sacred Valley features a wide variety of artisanal products. On Sundays, the Varayoc gather—traditional mayors and highest authorities of the indigenous communities (Ayllus). Chosen for their wisdom, they carry the Inka Varayoc: a sacred silver staff embodying order, justice, and connection to their ancestors.
                    </br>
                    </br>
                   Visit the Pisac Archaeological Center – The "Little Machu Picchu," situated atop a hill. It features an irrigation system, an observatory, and a solar clock (Intiwatana). Its slopes exhibit still-active Inca terraces. Due to its structures, the site served a triple purpose: military, religious, and agricultural, operating as an estate while defending the southern access to the Sacred Valley.
                    </br>
                    </br>
                    Hacienda Huayoccari: The sanctuary where art and flavors tell Peru's story to the world. The Entrance: An avenue of trees guides you to a courtyard that completely isolates you from the outside world. The Labyrinth of History: Its halls form an intimate museum featuring a collection of art with pre-Inca, Inca, colonial, and republican pieces. The Window to the Infinite: Large windows frame the green immensity of the Sacred Valley; you will be dining inside a chest of historical treasures hidden within the Andes.
                    </br>
                    </br>
                    The Ollantaytambo Archaeological Complex – The Ollantaytambo Fortress – The Royal House of the Sun. The Incas built a fortress that included a temple, agricultural terraces, an urban zone, a religious and ceremonial area, and a residential zone. Ollantaytambo was an administrative center with military functions, walls, and towers, featuring vestiges of ancient trails and aqueducts. This complex also stands out for the Monumental Temple of the Sun.
                  
                `,
                ite_image: [
                    "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772826657/4.1_11zon_vqleda.webp",
                    "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772750027/4_16_11zon_yhdrvg.webp",
                ],
            },
            {
                ite_titulo: "Day 5: Maras Salt Mines, Moray Terraces & Garden Lunch (B, L)",
                ite_text: `
               The Maras Salt Mines, located in the Sacred Valley, are among the region's remarkable excursions. This stunning site houses over 3,000 terraced salt ponds fed by a mineral-rich underground spring. Their extraction follows an authentic pre-Inca method: water evaporates under the warm Andean sun, and local families hand-scrape the fine layer of pink salt—a prized artisanal product preserving this living landscape today.
                </br>
              The Moray Terraces, another extraordinary excursion, captivate visitors with concentric circular platforms that functioned as an Inca agricultural laboratory. Their ingenious design creates natural thermal variations of up to 15 °C between levels, effectively simulating distinct ecological floors. Thanks to a flawless drainage system, this massive amphitheater never floods, standing as a brilliant testament to the advanced scientific knowledge that mastered the sacred geography.
                </br>
                </br>
              Lunch in the Garden of El Huerto-Muju. Delight in an exquisite garden lunch at El Huerto-Muju, a sanctuary paying tribute to the Andean pantry using fresh ingredients from its organic grounds. Savor your dishes lulled by the gentle sound of the nearby river, birdsong, and breathtaking views of the majestic mountains, connecting local culinary tradition with world-class haute cuisine.
                </br>
              Enjoy a free afternoon in the Sacred Valley. Take a peaceful stroll along the flowing water or treat yourself to a relaxing spa session with mountain views. Walk among lush vegetation, listen to local wildlife, or find quiet corners for reflection. Embrace the absolute peace to fully immerse yourself in this mythical natural haven.
                </br>
                </br>
               You may also experience the "Mayu Willka - Andean Therapies" Spa, offering specialized holistic treatments and massages rooted in ancient Andean traditions.
                </br>
                </br>
               Free evening and dinner on your own.
                </br>
             `,
                ite_image: [
                    "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772826705/5.1_11zon_dt5nzz.webp",
                    "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772750033/5_9_11zon_y6t4zl.webp",
                ],
            },
            {
                ite_titulo: "Day 6: Ollantaytambo Pueblo, - Pachamanca - Train to Machu Picchu (B, L)",
                ite_text: `
                Ollantaytambo Pueblo – Living Inca Town – Peru's First Charming Village. Explore an ancient town in the Sacred Valley, continuously inhabited since the 1200s.
                It preserves its original Inca urban layout and stone architecture. Residents maintain ancient practices and customs, while traditional water channels create a unique and authentic atmosphere.
                This extraordinary town was recognized by the World Tourism Organization (UNWTO) as one of the "Best Tourism Villages" in the world.

                </br>
                </br>
                
                Walking through Ollantaytambo is sharing the serene rhythm of Andean life, feeling history in every corner, and connecting with a community that honors its traditions with pride.

                </br>
                </br>
               Additionally, it is a delight to contemplate its clay ovens, where fire guards ancient techniques to bring artisanal bread to life. A genuine, inspiring, and deeply human experience that invites you to stop, observe, and say: "I want to experience this."
                </br>
                </br>
                Inca Pachamanca: Ancestral Ritual in Ollantaytambo. After touring the Village.
                Pachamanca - Earth Oven. Foods are cooked underground with hot stones following pre-Columbian methods. The outdoor lunch includes native potatoes, sweet potatoes, and salads facing Andean landscapes.
                </br>

                The activity includes a guided tour of its organic farm, artisanal distillery, and coffee roaster, besides the ritual process. An unforgettable experience that celebrates Peruvian gastronomy before taking the train to Aguas Calientes.
                Panoramic Adventure on the Andean Train to Aguas Calientes Machu Picchu Pueblo,beneath the ancient citadel. While the train snakes through the imposing Sacred Valley, the landscape transforms into a lush high jungle, marking the arrival at the mystical gateway of the Incas.
                </br>
                </br>
                An unforgettable journey!
                </br>
                </br>
                Free evening and unscheduled dinner.



            `,
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772819075/6_11zon_tkua6z.webp",],
            },
            {
                ite_titulo: "Day 7: Visit to Machu Picchu - Pachacutec's Refuge (B,L)",
                ite_text: `
                Transfer to the bus station in Machu Picchu Town. Ascent to the legendary Lost City of the Incas along a winding, narrow gravel road, designed to overcome the considerable elevation difference between Machu Picchu Town and the archaeological site.
                </br>
                </br>
                The Historic Sanctuary Citadel of Machu Picchu - The Legendary Lost City of the Incas - The Sacred Citadel in the Clouds - World Heritage Site - Old Mountain, chosen as one of the New Seven Wonders of the World, is a masterpiece of Inca architecture and engineering built during the 1400s atop a mountain ridge, right at the meeting point between the Andes mountain range and the Peruvian jungle
                </br>
                </br>
               It functioned under the rule of Inca Pachacutec as an important ceremonial, political, and religious center, as well as serving as a private retreat for the imperial elite. The complex is divided with exquisite precision into two large sectors: the agricultural sector, made up of impressive cultivation terraces, and the urban sector, where plazas, royal mausoleums, and palaces are concentrated. Its structures stand out worldwide for their imposing stone walls, perfectly fitted together without the use of mortar, as well as for temples designed specifically for astronomical observation and alignment.
                </br>
                </br>
               After the fall of the empire, this architectural jewel of the Inca civilization remained hidden and protected by dense vegetation for 400 years, until American explorer Hiram Bingham revealed it to the world in 1911. Today, its mystical atmosphere and spectacular natural surroundings make it Peru's most important and most visited cultural symbol.
                </br>
                </br>
                Enjoy a delicious lunch at the Sanctuary Lodge, exploring the exquisite local cuisine. Lunch is included in the itinerary for this day.
                </br>
            `,
                ite_image: [
                    "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772826812/7.1_11zon_loxcq0.webp",
                    "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772750023/7_11_11zon_c3jxa0.webp",
                ],
            },
            {
                ite_titulo: "Machu Picchu Royalty",
                ite_text: `
               Throughout the walk, visitors explore up close the finest and most sacred enclosures of Machu Picchu, including the Temple of the Sun with its semicircular shape, the Royal Tomb inside a cavern, the Inca's House with its residential rooms, and the ceremonial water fountain system. The tour continues toward the northern area to admire the Sector of the Three Doorways and the Sacred Rock, a carved monolith that mimics the profile of the surrounding mountains, finally concluding at the Temple of the Condor, an exclusive area of this circuit where you can admire the stone sculpture of this sacred bird before leaving the complex.
                </br>
                </br>
               Optional Hike to Huayna Picchu - The Young Mountain - The Guardian of Machu Picchu: Your tour guide is available for a morning hike along the steep stone-paved path of Huayna Picchu, the pyramid-shaped mountain that rises above Machu Picchu, to enjoy a breathtaking panoramic view of the site, a Condor's Eye View.
                </br>
                </br>
                Those who reach the summit will enjoy a moving view of how carefully Machu Picchu was integrated into its natural surroundings. Towering Andean peaks rise in the distance, while the winding Urubamba River almost completely encircles the main site. Don't miss it; Huayna Picchu is what most people miss at Machu Picchu, according to BBC Travel.
                </br>
                Hikers will see the Temple of the Moon, a mystical sanctuary hidden in caves and built into the rock. It stands out for having some of the finest stonework at the site.
                </br>
                It is without a doubt one of the most wonderful landscapes in the world!
                The secret to climbing Huayna Picchu is to walk 10 minutes and rest 5 minutes, walk 10 minutes and rest 5 minutes, and so on…

                </br>
                </br>
              At the end of the visit, we will board the train to return to Cusco.
               
            `,
                ite_image: [
                    
                    "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772826862/9.1_11zon_kyz8ug.webp",
                    "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772750024/9_17_11zon_bzbvwq.webp",
                    "https://res.cloudinary.com/dlgeap8h0/image/upload/8_11zon_11zon_facbyt.webp",
                ],
            },

            {
                ite_titulo: `Day 8: Cusco City Tour - Sacsayhuaman - Tipon, a Masterpiece of Inca Hydraulic Engineering - Historic Church of Andahuaylillas - The Sistine Chapel of the Americas (B,L) `,
                ite_text: `
                 On the Cusco tour, visitors immerse themselves in the excitement of exploring the ancient capital of the Inca Empire, a charming blend of Inca and colonial architecture.
                </br>
                </br>
                The tour visits important sites such as Cusco Cathedral, the Plaza de Armas, and Koricancha - The Temple of the Sun - the Supreme Temple of the Incas, the most sacred temple of the Inca Empire, passing through Intik'ijllu or Callejón del Sol.
                </br>
                </br>
               Callejón del Sol - Street of the Inca Walls - Street of the House of the Virgins of the Sun, known as Intik'ijllu during the Inca Empire, represents one of the best-preserved urban and religious axes of the Tahuantinsuyo. In Cusco (the "navel of the world"), it was strictly reserved for the Inca, the royal families, and the elite; this particular street was an exclusive path of great historical importance for its architectural and security design.
                </br>
               Korikancha - Temple of the Sun - Golden Enclosure - The Golden Site - Supreme Temple of the Incas, was not a king's palace but rather the sacred religious and political temple of the Inca Empire, and it stands as one of the greatest physical ironies in human history.
                </br>
                </br>
                The conquistadors arrived with the European mindset that a strong structure must be rigid, heavy, and cemented to last.
                </br>
                </br>
            The Incas understood that the earth in the Andes moves constantly, and that true resilience lies in flexibility and dynamic fitting.
                </br>
                </br>
            This tour of the oldest continuously inhabited city in the Western Hemisphere also includes the monumental Inca archaeological site of Sacsayhuaman.
            
                `,
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772750025/10_18_11zon_hfqrhl.webp",],
            },
            {
                ite_titulo: "The Fortress of Sacsayhuaman - Satisfied Falcon - Place Where the Falcon Is Sated - The Head of the Puma, an imposing example of Inca military architecture.",
                ite_text: `
                The walls of Sacsayhuaman are the stuff of legend, but one myth needs to be dispelled: the Incas did not use disorganized brute force, but rather astonishingly advanced physics.
                </br>
                </br>
               The blocks weigh 125 tons, fitted together so perfectly that not even a pin can fit between them; you are looking at the pinnacle of pre-Hispanic stone engineering. This is how they truly achieved it, entirely on their own and without European technology.
                Cahuide, The Titan of the Tower

                </br>
                </br>
                In an agonizing hand-to-hand battle on the zigzagging terraces, the Spanish managed to corner the last Inca defenders. There, atop the cylindrical tower of Muyucmarca, an imposing figure emerged: a captain of the Inca nobility (an orejón) whom popular history came to call Cahuide.
                </br>
                </br>
               He ran back and forth across the tower like a caged lion. He was completely alone, surrounded, and covered in both enemy and his own blood.
                </br>
                </br>
              He realized he had no more stones left to throw, nor men left to command.
                He threw himself off the top of the tower. He chose to be shattered against the ancient rocks of Sacsayhuaman rather than see his hands bound by foreign chains.

                </br>
                </br>
               Enjoy a delicious box lunch, exploring the exquisite local cuisine. This meal is included today.
                </br>
                Tipon - The Water Route - The Sanctuary of the Water Masters. In the afternoon, heading south to the Sacred Valley, toward Tipon, a Masterpiece of Inca Hydraulic Engineering, an impressive Inca archaeological complex famous for its advanced system of water canals, agricultural terraces, and ceremonial enclosures.

            `,
                ite_image: [
                    "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772819339/11.1_11zon_dtqdjp.webp",
                    "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772750031/11_19_11zon_bdo2w0.webp",
                ],
            },



             {
                ite_titulo: "The Sanctuary of the Water Masters, Tipon, is more than an archaeological site; it is a masterpiece of celestial hydraulic engineering that defies time.",
                ite_text: `
               At this sanctuary, the Incas achieved the impossible: they carved the mountain to tame water, turning a natural resource into a spectacle of art, mysticism, and science that continues to function perfectly after more than 500 years. In Tipon, silence does not exist. The water sings as it descends the mountain; the site is alive with the constant murmur of sacred springs that emerge from the rocks and flow with millimetric precision through channels of polished stone. Without modern technology, Inca engineers calculated exact gradients so that the water would flow without eroding the stone or overflowing.
                </br>
                </br>
              Today, the channels still pour crystal-clear water with the same force and precision as in the time of the Empire. The twelve agricultural terraces, of perfect symmetry, embrace the ravine. They were not just for growing crops; they were climate laboratories and altars of worship to Pachamama (Mother Earth) and Unu (Water), where the retaining walls absorb the sun's heat to create microclimates.

                </br>
                </br>
               We will continue on to the town of Andahuaylillas - The Sistine Chapel of the Americas - The Golden Temple of America, a charming and peaceful traditional town in Cusco's Southern Valley, famous around the world. There we will visit the monumental Church of San Pedro Apostol, rightfully dubbed the Sistine Chapel of the Americas, known for its Baroque murals, gilded altars, and colonial paintings. Its beauty lies both in its mystical colonial religious architecture and in the deep serenity of its Andean landscapes. The interior is covered in multicolored frescoes. Notable are the paintings from the renowned Cusco School and the iconic mural depicting the Path to Heaven and Hell. The main altar is covered in gold leaf, mirrors, and embossed silver.
                </br>
                </br>
             Evening free at leisure.
                </br>

            `,
                ite_image: [
                    "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772819339/11.1_11zon_dtqdjp.webp",
                    "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772750031/11_19_11zon_bdo2w0.webp",
                ],
            },



            {
                ite_titulo: "Day 9: San Blas Hill, Cusco-Lima Flight, and Return Home (B)",
                ite_text: `
             In the morning, visit Cuesta de San Blas - The Hill That Tires the Fox - The Artisans' Neighborhood. Discover Cusco's magical portal and prepare for an experience that will transform the way you see the world.
                </br>
                </br>
                Leave behind the bustle of conventional tourism near Calle Triunfo and get ready to cross an authentic emotional threshold.
                </br>
                </br>
                As you climb, you'll notice the outside noise fade completely away, inviting you to sync your own rhythm with the mystical silence of the Andean rocks; a walk that stops being a simple journey and becomes the best therapy for disconnecting.
                
                A Journey Through Time Via Living Architecture

                </br>
                </br>
                Walking up this iconic hill is to witness a visual dialogue found nowhere else on the planet. Here, the perfect, indestructible solidity of the Inca walls serves as the base that supports the fragility of white adobe and carved colonial wooden balconies.
                </br>
                </br>
                It's the perfect setting for your best photographs and memories: a beautiful historical scar where two opposing worlds embraced tightly to create the most bohemian, photogenic, and vibrant neighborhood in all of Cusco.
                </br>
                </br>
                The Corner Where Art Breathes and Invites You to Stay
                </br>
                Beyond its charming shops and specialty cafés, San Blas envelops you in the energy of a living artisan workshop that has been at work for centuries.
                </br>
                As you walk its streets, you'll feel the very walls breathing the creativity of the legendary Cusco master image-makers, floating in an atmosphere steeped in history, fine woods, and ancient pigments.
                </br>
                Forget the rush, pack your bags, and come discover why climbing Cuesta de San Blas isn't just reaching a destination, but living the true essence of the heart of the Andes.
            `,
                ite_image: [
                    "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772819339/11.1_11zon_dtqdjp.webp",
                    "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772750031/11_19_11zon_bdo2w0.webp",
                ],
            },

            {
                ite_titulo: "Cuesta de San Blas is like a Stone Clock",
                ite_text: `
               it stops being a simple street and becomes an emotional portal, the Backbone of Cusco Art. It doesn't simply climb toward a neighborhood, but ascends backward through time; and, as you go on and the air grows thinner, the stone seems to Awaken.
                </br>
                </br>
                What We'll See on Cuesta de San Blas
                </br>
                </br>
                The Long-Necked Sculptures: Heirs to the style of the Mendivil family, who create virgins and saints with elongated, stylized necks.
                </br>
                </br>
                Ceramicists: Master clay workers whose range spans pre-Hispanic replicas to the "Merida" style.
                </br>
                </br>
                Woodcarvers: Specialists in colonial frames covered in gold leaf and fine furniture.
                Painters of the Cusco School: Artists who keep alive the oil-painting technique with gold applications typical of the 17th century.
                </br>
                </br>
                    Weavers and jewelers: Although more can be found on the side streets, on the hill itself you'll see silver jewelry set with Andean stones.
You'll also find renowned galleries and the white facades with blue doors that house the workshops of great families such as the Mendivils, almost at the top near San Blas Plaza.


                </br>
                </br>
                There is a strong presence of contemporary jewelry and small painting displays that make use of the Inca walls serving as a base along several stretches of that side.
                </br>
                </br>
                The San Blas Pulpit - The Crowning Achievement in Wood
                The pulpit of San Blas is not just a piece of liturgical furniture; it is a cedar tree that learned to speak Quechua and Latin at the same time.
                It is the exact reflection of a clash of worlds reconciled through the hands of a craftsman.
                </br>
                The Solomonic columns not only spiral on their axis, but hold up the structure with a visual tension that defies gravity. It is a play of light and shadow where the empty space works as hard as the relief carving.


            `,
                ite_image: [
                    "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772819339/11.1_11zon_dtqdjp.webp",
                    "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772750031/11_19_11zon_bdo2w0.webp",
                ],
            },



              {
                ite_titulo: "Afterward, you'll see a few cafés with balconies offering views over the street.",
                ite_text: `
              Transfer to the airport for your flight to Lima and connection with your international flight.
                </br>
                </br>
               Return home with unforgettable memories of the rich tradition of colonial Lima, the imposing snow-capped Andean mountains, and the lush valleys along the winding road leading to the breathtaking view of Machu Picchu, the astonishing Inca legacy.
                </br>
                </br>
                If the layover between your Cusco-Lima-Home flights allows, we suggest having lunch at the Museum Café and then visiting the Larco Museum.
                </br>
                Lunch at the Museum Café.

                </br>
                </br>
                A space surrounded by gardens where you can enjoy a unique blend of culture, history, modernity, and good food.
                Visit to the Larco Museum - The Guardian of Pre-Columbian Art - The Larco Museum's Open Storage

                </br>
                </br>
               The open storage area is one of the museum's most famous and unique features. Visitors can walk directly among the shelves where more than 30,000 pre-Columbian ceramic archaeological pieces are stored and classified.
                </br>The Gold and Silver Gallery
                </br>
                   This dazzling hall displays the most important collection of clothing and precious-metal jewelry used by the rulers of ancient Peru. Crowns, ear ornaments, nose rings, and chest plates showcase the extraordinary technical skill of goldsmiths from cultures such as the Moche, Chimu, and Sican, crafted to honor their gods.
                The Larco Museum, founded in 1926, features notable chronological galleries that offer an excellent overview of 3,000 years of development in pre-Columbian Peruvian history.
                </br>
                </br>
                Housed in a unique 18th-century viceregal mansion built atop a 7th-century pre-Columbian pyramid, it is surrounded by beautiful gardens.

            `,
                ite_image: [
                    "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772819339/11.1_11zon_dtqdjp.webp",
                    "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772750031/11_19_11zon_bdo2w0.webp",
                ],
            },





        ],
        programIncluye: [
            { text: "All airport transfers listed in the itinerary" },
            { text: "Baggage handling at airports and at hotels" },
            { text: "All tours and excursions indicated in the itinerary " },
            { text: "All entrance fees and transfers needed to operate tours and excursions " },
            { text: "All train tickets, bus tickets and boat services needed to operate tours and excursions" },
            { text: "Excursion to Machu Picchu is aboard the requested train" },
            { text: "Service of a bilingual licensed tour guide for all tours and excursions" },
            { text: "All meals indicated in the itinerary. B for breakfast, L for lunch. D for dinner" },
            { text: "Hotel accommodation and hotel service charge" },
            { text: "Hotel taxes are exempt for foreigners visiting Peru" },
            { text: "When domestic airfare within Peru is specified as included: Airfare includes all queues, security fee, fuel surcharges and 18% Peruvian sales tax. " },
        ],
        programNoIncluye: [
            { text: "Extra expenses in case of modifying the itinerary due to flight cancelation, strikes or blocking of roads and train tracks by demonstrators or political activists. Travel insurance is strongly recommended. " },
            { text: "When staying overnight  in Machu Picchu, the entrance fee for the 2nd day in Machu Picchu is not included. This can be added to the itinerary upon request " },
            { text: "Expenses such us beverages on meals, tips, laundry, phone calls and other personal expenses are not included" },
        ],
    },

    {
        fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772127821/incas-legacy_grfvrl.webp",
        title: "Legacy of The Incas",
        text: "A two week program including Belmond hotels and trains.",
        name: "legacy-of-the-incas",
        fondoHeader: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1778791322/pexels-gilmer-diaz-estela-7143997_nh3okl.jpg",

        imgCardLink: [
            {imagen: "https://res.cloudinary.com/dlgeap8h0/image/upload/f_auto,q_auto,w_700/v1772812676/lima4_bu8wrf.webp", link: "lima",},
            {imagen: "https://res.cloudinary.com/dlgeap8h0/image/upload/sacred-valley-portada_c39kms.webp", link: "sacred-valley",},
            {imagen: "https://res.cloudinary.com/dlgeap8h0/image/upload/luxury-train_i18flh.webp", link: "luxury-trains",},
            {imagen: "https://res.cloudinary.com/dlgeap8h0/image/upload/mapi-portada_vvfhnw.webp", link: "machu-picchu",},
            {imagen: "https://res.cloudinary.com/dlgeap8h0/image/upload/f_auto,q_auto,w_700/v1772812868/sacsayhuaman-cusco_ulhk25.webp", link: "cusco",},
        ],
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
                ite_text: `
            <a class="estilosPrueba" href="/destinations/lima">Arrival in Lima, </a> the “City of Kings” famous for its Spanish Colonial architecture, extraordinary museums and cuisine. Lima is internationally recognized as the “Gastronomic Capital of the Americas”, and its cuisine is considered among the most diverse and exquisite in the world on par with French cuisine. Upon arrival a host will meet and assist you in transferring to the hotel and in registering. `,
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772741167/1_27_11zon_ha5pjh.webp",],
            },
            {
                ite_titulo: "Day 2 – Lima (B) City Tour – Modern and Colonial Lima ",
                ite_text: "Tour of Modern and Colonial Lima - This half-day tour visits both the colonial and modern sections of Lima. Colonial sites include the lovely Plaza Mayor, the Government Palace, San Francisco Church and the exquisite Torre Tagle Palace modern day seat of the Ministry of Foreign Affairs. In modern Lima, drive along the exclusive residential areas of Miraflores and San Isidro. ",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772741177/2_28_11zon_daagtq.webp",],
            },
            {
                ite_titulo: "Lunch at Cala Restaurant, on The Pacific Ocean",
                ite_text: "From the day it opened, Cala has adopted a successful combination of stupendous cuisine, an excellent view of the sea, reasonable prices and a revitalized the menu with new and modern dishes that emphasize respect for the ingredients. Strategically located on the shores of the Pacific Ocean, its setting and atmosphere are outstanding, casual and contemporary. An ideal place for lunch by the sea, while listening to the sound of the waves. ",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772741167/3_29_11zon_jezbts.webp",],
            },

            {
                ite_titulo: "Visit to Private Art Collection and Mario Testino Photography Exhibition",
                ite_text: "Mario Testino photography exhibition is in the attractive neighborhood of Barranco, which was the place to be in the 19th century and retains its laid-back charm today. Mario Testino is recognized as one of the world’s most influential photographers, well-known for his pictures of the British Royal family, famous actors and beauties for the greatest international magazines, his creative exhibitions and books. Also visit Pedro de Osma Museum. At evening dinner at Central Restaurant. The dinner is on passengers’ account. ",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772741167/4_30_11zon_osbbar.webp",],
            },

            {
                ite_titulo: "Day 3 – Lima / Cusco / Sacred Valley (B, L) ",
                ite_text: "Early morning transfer from the hotel to the airport for a short but spectacular flight over the snowcapped Andes to the oldest inhabited city in the hemisphere, Cusco, at an elevation of 11,440 feet. Upon arrival in Cusco you will be met after luggage collection by our representative and transferred to the hotel in the Sacred Valley. A la Carte lunch at Terra Andina Colonial Mansion before continuing to the Sacred Valley. En route you will enjoy a scenic drive through a stunning landscape to the Sacred Valley of the Incas. ",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772741179/5_16_11zon_ulgqjd.webp",],
            },
            {
                ite_titulo: "Lunch at The Colonial Patio",
                ite_text: "Located inside a 17th Century Colonial Mansion with its original arches is enhanced with a delicate-designed hand carved wood balcony that creates a pleasant setting. The welcoming and elegant “Colonial Patio” offers a small but unique and enticing selection of Creole, contemporary and novo-Andina dishes. ",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772741168/6_17_11zon_dcifpb.webp",],
            },
            {
                ite_titulo: "Visit Awana Kancha, the living museum of the Andes",
                ite_text: "Visit Awanakancha Center, where weavers of more than 12 communities of Southern Peru exhibit the spinning, dyeing and weaving of Andean traditional textiles helping to preserve the traditional costumes. Your visit includes the opportunity to observe an exhibition and explanation of the four types of South American camels. Here you will find the finest of the traditional and industrial Andean textiles in South America. ",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772741169/7_18_11zon_nc2vjc.webp",],
            },
            {
                ite_titulo: "Ceramic Workshop with Pablo Seminario",
                ite_text: "Pablo Seminario Ceramic Studio has been dedicated to the discovery of techniques and designs from ancient Peruvian cultures. Pablo presents a new art expression, providing continuity to these cultural inheritances. He concentrates on making large-format works of art, “great plates”, as he calls them, at his personal workshop. The images that emerge here are the result of the patient work of following the tradition of pre-Colombian pottery, an ambitious task which got underway 20 years ago and which he continues to develop.  ",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772741170/8_19_11zon_g4mqkc.webp",],
            },

            {

                ite_titulo: "Day 4 – Sacred Valley (B) Excursion to Moray Terraces and Maras Salt Pools",
                ite_text: "At Moray, you will find “the Inca laboratory”. The circles were used for the development of different strains of crops. Between the highest and lowest terraces there is a difference of up to 15 degrees. Although the difference between neighboring terraces is very small, it is great enough to create distinct microclimates that change growing conditions and allow the propagation of a huge variety of plants each with slightly different growth requirements. ",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772741172/9_20_11zon_yfwllq.webp",],
            },


            {
                ite_titulo: "Maras Salt Pools",
                ite_text: "Continues to the ancient town of Maras, by coach or hiking (approx. 2 hours) to enjoy a dramatic view of the salt pools and its outstanding Spanish door arches and vast church. We then drop down into the Sacred Valley of the Incas to the salt pans of Salineras. Here more than 5000 terraces are still in production and many families of Maras bring their salt to the market of Urubamba on mules. ",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772741172/10_21_11zon_gtla6q.webp",],
            },
            {
                ite_titulo: "Lunch reservations at MIL",
                ite_text: "It’s a unique journey to get to the latest Virgilio Martinez creation, the unique MIL, located by Moray terraces just above Cusco, at 11,200 ft of altitude and surrounded by Andean landscape. MIL introduces “ancestral cuisine” similar to Central, the Lima restaurant that positioned Virgilio among the World’s best. MIL has a fascinating menu with nearby Andean ingredients. Enjoy your lunch at the most talked-about Peruvian restaurant. Reservations using credit card is required. ",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772741173/11_22_11zon_vstgqy.webp",],
            },


            {
                ite_titulo: "Day 5 – Sacred Valley (B)Visit to Chinchero and Pisac Market",
                ite_text: "The traditional and Andean towns of Chinchero and Pisac are known as “the birthplace of the rainbow”, and they have the full complement of photogenic attractions: Inca ruins, Andean village houses, an elaborate colonial church built on Inca foundations, and of course the handicrafts from the Quechua stallholders. ",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772741174/12_23_11zon_xzuylg.webp",],
            },

            {
                ite_titulo: "Ollantaytambo Archaeological Complex",
                ite_text: "Afternoon visit to the Ollantaytambo archaeological complex, the Incas built it as a fort that included a temple, agricultural terraces, and an urban area. There are two distinct sectors: The religious and worship zone, and the residential area. Ollantaytambo was an important administrative center with probable military functions if one considers the walls and towers. There are also traces of ancient roads and aqueducts as well as several Inca’s waterways coming from nearby rivers that still benefit the town irrigation system. During the Spanish conquest of Peru Ollantaytambo was the stronghold the Inca’s resistance. Its cobblestoned streets are part of the Inca’s city planning in the 1200s. The town of Ollantaytambo is called a “Living Inca Town” because their inhabitants still maintain ancient practices and customs from their ancestors ",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772741179/13_24_11zon_mtzu10.webp",],
            },
            {
                ite_titulo: "Lunch is served at Hacienda Huayoccari",
                ite_text: "The most noticeable aspect of the house is its sensational setting, dominating the Urubamba valley in the midst of the highland crags and vegetation through which the river flows. Above it, on the very mountain top within sight of heaven are two lakes, which seem to seethe on a rainy night. With magnificent views of the Urubamba River, the Casa-Hacienda has the magical ability to make us forget the reality of life. Today’s lunch will be a remarkable event. ",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772741175/14_25_11zon_hk3qat.webp",],
            },


            {
                ite_titulo: "Day 6 – Sacred Valley / Machu Picchu (B) Machu Picchu excursion aboard the luxury Belmond’s Hiram Bingham Train, operates daily except the last Sunday of the month – Two Night Stay",
                ite_text: "Morning train ride aboard the most luxurious railway service in South America to enjoy the unbelievable sights of the “Lost City of the Incas,” Machu Picchu. A brunch will be served on board and you will be able to enjoy its open bar. Guided tour of Machu Picchu. Perched 8,200 feet above the valley, it was hidden by mountains and semi-tropical jungles for 400 years until discovered by Hiram Bingham of Yale University in 1911. Archaeologists believe that the Inca “Virgins of the Sun” took refuge from the Spanish Conquistadors here.",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772741176/15_26_11zon_wtffkm.webp",],
            },


            {
                ite_titulo: "Day 7 – Hike to Huayna Picchu (B)",
                ite_text: "Tour guide at disposal for a morning hike to the steep stone-paved trail of Huayna Picchu, the pyramid-shape mountain above Machu Picchu to enjoy an impressive and breathtaking view of the site. The few of those who climb the peak take advantage of the opportunity to see the even more impressive Temple of Moon. Tucked into a complex of caves hidden from the main ruins is an otherworldly shrine — possibly a burial site — built directly into the mountain rock. The Temple of the Moon features some of the finest stonework in Machu Picchu. The main reward for the climb up the ancient stone stairs is the most incredible view that can be achieved (short of a helicopter) of how Machu Picchu was carefully integrated into its natural surroundings. Among skyscraping Andean peaks tower in the distance while the winding Urubamba River nearly wraps itself around the main site. Do not miss it; Huayna Picchu is “what most people miss at Machu Picchu” (BBC Travel). Reservation is needed. ",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772742010/16_11zon_e3t0u2.webp",],
            },
            {
                ite_titulo: "Day 8 – Machu Picchu Free Day / Cusco (B)",
                ite_text: "Free morning to enjoy one of the most incredible sights on earth, the sanctuary of Machu Picchu. Take as much time as you need to study these magnificent ruins or hike the steep stone-paved trail of Huayna Picchu, the pyramid shape mountain above Machu Picchu for a for an impressive and breathtaking “condor view” of the site (reservation and extra fee are needed). Other activities are: ● Stroll to the Inca Bridge a secret entrance used by the Inca’s army ● Walk toward the Inca Trail to find the historic Sun Gate (Intipunku) ● Soak in the unique thermal springs of town ● Wander into the Mandor valley ● Explore the open air market of Machu Picchu village ● Visit Manuel Chavez Museum ● Hike the round-shape mountain of Putukusi. ",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772744534/17_11zon_navgh0.webp",],
            },
            {
                ite_titulo: "Evening return to Cusco",
                ite_text: "Morning is free to return to the citadel and explore it at your own pace or for a leisure walk to the legendary Sun Gate which was the entrance of the Inca Army into Machu Picchu. An optional hike to Huayna Picchu is recommended. Rest of the morning at leisure to enjoy the open market of Machu Picchu village (Aguas Calientes). Late afternoon return to Cusco aboard the Hiram Bingham luxury train. You will be able to have a wonderful dinner on board and enjoy some drinks at the wagon’s open bar. ",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772744538/18_11zon_m7bre2.webp",],
            },

            {
                ite_titulo: "Day 9 – Cusco Nearby Ruins (B)",
                ite_text: "Tour of Cusco and Nearby Ruins – Visit Sacsayhuaman fortress, an imposing example of Inca military architecture. It was built using colossal limestone blocks using a variety of interlocking shapes. The estimated weight of some stones is over 120 tons. Visitors are still wondering how it was constructed. Other archaeological sites included in the tour are the Incan military lookout point of Puca-Pucara and the Sanctuaries of Kenko and Tambomachay. ",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772745058/19_11zon_t3mxc4.webp",],
            },

            {
                ite_titulo: "Cusco city highlights",
                ite_text: "Visitors are caught up in the excitement of touring the ancient capital of the Inca Empire, a delightful combination of Inca and colonial architecture. The tour visits important landmarks such us Cusco’s Cathedral, Plaza de Armas and Koricancha “The Temple of the Sun”. Tour includes a visit to the emblematic Cusco neighborhood of San Blas, filled with narrow typical streets, charming small homes, galleries and craft workshops, where you see local artisans at work. Cusco is the oldest continuously inhabited city in the western hemisphere. ",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772737277/12_11zon_uumkih.webp",],
            },

            {
                ite_titulo: "Day 10 – Cusco / Puno (B, L, D) 3-Days Andean Crossing aboard Belmond Andean Explorer Cusco, Puno - Lake Titicaca, Arequipa - Colca Canyon Departs: Thursdays ",
                ite_text: "Belmond Andean Explorer is South America’s first luxury train that combine genuine daytime getaways with sleeping accommodations at night, all while traversing the Peruvian Andes.",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772744530/19_11zon_xtrbcy.webp",],
            },

            {
                ite_titulo: "Day 11 – Puno (B, L, D)",
                ite_text: "Your 11th day begins with a stunning sunrise over Lake Titicaca, followed by breakfast on board before setting off to explore the Uros and Taquile islands. After a morning of boat exploration and a traditional lunch at Collata Beach—complete with local dance and craft displays—you'll head back to the station for tea time. As the train departs for Arequipa in the late afternoon, you can relax with pre-dinner cocktails and a gourmet meal before spending the night at Saracocha.",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772744531/20_11zon_vk6uog.webp",],
            },

            {
                ite_titulo: "Day 12 – Puno / Arequipa / Colca Canyon (B, L)",
                ite_text: "Your 11th day begins with a stunning sunrise over Lake Titicaca, followed by breakfast on board before setting off to explore the Uros and Taquile islands. After a morning of boat exploration and a traditional lunch at Collata Beach—complete with local dance and craft displays—you'll head back to the station for tea time. As the train departs for Arequipa in the late afternoon, you can relax with pre-dinner cocktails and a gourmet meal before spending the night at Saracocha.",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772744530/22_11zon_bgv0ku.webp",],
            },

            {
                ite_titulo: "Continue to Colca Canyon Colca Canyon Expedition - 2 Days",
                ite_text: "Departure towards the highlands passing through Yura-Pampa Cañahuas and La Pulpera with good possibility of observing groups of wild vicuñas and fighting cattle. The road to the Colca Canyon reaches a high point of 13,000 feet before dropping down to the valley, an area of breath taking landscapes surrounded by terracing and snow-capped peaks. Far below, at a depth of 10,000 feet, the Colca River winds along the bottom of the canyon, the world’s deepest. Stop en route to see petroglyphs in the Caves of Mollepunco and in the town of Callali to see natural hill formations with the appearance of enchanted castles. Continue to La Calera to enjoy the thermal baths under the stars. Overnight in the Colca Canyon area ",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772744535/21_11zon_cnbyl6.webp",],
            },

            {
                ite_titulo: "Day 13 – Colca Canyon / Arequipa / Lima (B) Exploring the Colca Canyon, to Arequipa and fly to Lima",
                ite_text: "Early morning we will depart to the Condor Cross, where you will you will appreciate the depth of the canyon which is considered much deeper than the Grand Canyon. And you will appreciate the majestic flight of the Condor. Continue until Cabanaconde town, a big producer of corn and the second largest in the Valley. Visit the villages of Macca and Yanque with churches colonial times. Also visit the Mirador de Antahuilque. Return to the hotel, check out and pick up your luggage. Depart to Arequipa and continue to Arequipa Airport for your ",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772744692/25_11zon_jkyomr.webp",],
            },

            {
                ite_titulo: "Day 14 – Lima – Larco Museum (B)",
                ite_text: "Visit the Larco Museum. Founded in 1926, the Larco Museum showcases remarkable chronological galleries providing an excellent overview on 3000 years of development of Peruvian pre-Columbian history. Features the finest gold and silver collection from Ancient Peru and the famous erotic archaeological collection, one of the most visited Peruvian tourist attractions ",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772744691/26_11zon_iphqvj.webp",],
            },
            {
                ite_titulo: "Casa Luna",
                ite_text: "Casa Luna’s Nativity Scenes Gallery - In Casa Luna…every day is Christmas. Located in the exclusive district of San Isidro, Casa Luna exhibits an impressive collection of nativity scenes and cribs, and other figures representing Peruvian religiosity. A magnificent example of pre-Columbian art, colonial. ",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772748343/27_11zon_rkwie2.webp",],
            },
            {
                ite_titulo: "Lunch at Astrid y Gaston in magnificent 17th century plantation Casa Hacienda Moreyra",
                ite_text: "Where the food is absolutely wonderful!. This stylish restaurant is constantly rated as one of World’s best, it is owned and managed by a Cordon Bleu–trained, husband/ wife team. Astrid (pastry chef) and Gaston (principal chef) made a name for themselves with this highly successfurestaurant. It is “the dinning place” for upscale locals",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772744698/28_11zon_smtunm.webp",],
            },
            {
                ite_titulo: "Magic Water Circuit",
                ite_text: "Late afternoon visit the Magic Water Circuit at Parque de la Reserva. This recently remodeled park boasts 12 beautiful water fountains that literally “dance” under an awesome choreography of music, lights and laser beams. This park is the pride of Lima and has been recognized by the Guinness Book of World Records as the largest water fountain park in the world. The 80-meter high water fountain is an impressive view. ",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772744701/29_11zon_kksyvh.webp",],
            },
            {
                ite_titulo: "Lima / Home Day room at your Hotel, Hotel - Airport transfer",
                ite_text: "Use of a day room until late evening. Transfer to the airport for your departure flight. Arrive home full of great memories of the rich tradition of Colonial Lima, the snowcapped roaring Andean mountains and lush valleys, and the zig-zag road to the overwhelming sight of Machu Picchu, the amazing legacy the Incas. ",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772744697/30_11zon_li1ocq.webp",],
            },
        ],
        programIncluye: [
            { text: "All airport transfers listed in the itinerary" },
            { text: "Baggage handling at airports and at hotels" },
            { text: "All tours and excursions indicated in the itinerary" },
            { text: "All entrance fees and transfers needed to operate tours and excursions" },
            { text: "All train tickets, bus tickets and boat services needed to operate tours and excursions" },
            { text: "Excursion to Machu Picchu is aboard the Hiram Bingham train service." },
            { text: "Service of a bilingual licensed tour guide for all tours and excursions" },
            { text: "All meals indicated in the itinerary. B for breakfast, L for lunch. D for dinner" },
            { text: "Hotel accommodation and hotel service charge" },
            { text: "Hotel taxes are exempt for foreigners visiting Peru" },
            { text: "When domestic airfare within Peru is specified as included: Airfare includes all queues, security fee, fuel surcharges and 18% Peruvian sales tax. " },

        ],
        programNoIncluye: [
            { text: "Extra expenses in case of modifying the itinerary due to flight cancelation, strikes or blocking of roads and train tracks by demonstrators or political activists. Travel insurance is strongly recommended. " },
            { text: "Expenses such us beverages on meals, tips, laundry, phone calls and other personal expenses are not included" },
        ],


    },

    {

        fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772127821/wonders-of-peru_dbdgn7.webp",
        title: "Wonders of Peru",
        text: "Explore the highlights of Lima and Cusco in one week.",
        name: "wonders-of-peru",
        fondoHeader: "https://res.cloudinary.com/dlgeap8h0/image/upload/f_auto,q_auto/v1780928807/iStock-547136030_lr3tsw.jpg",

        imgCardLink: [
            {imagen: "https://res.cloudinary.com/dlgeap8h0/image/upload/f_auto,q_auto,w_700/v1772812725/lima6_gpntwj.webp", link: "lima",},
            {imagen: "https://res.cloudinary.com/dlgeap8h0/image/upload/f_auto,q_auto,w_700/v1772813378/Arequipa-5_11zon_gjmvmc.webp", link: "arequipa",},
            {imagen: "https://res.cloudinary.com/dlgeap8h0/image/upload/Titicaca-Lake-portada2_jfbusw.webp", link: "puno",},            
            {imagen: "https://res.cloudinary.com/dlgeap8h0/image/upload/sacred-valley-portada_c39kms.webp", link: "sacred-valley",},
            {imagen: "https://res.cloudinary.com/dlgeap8h0/image/upload/mapi-portada_vvfhnw.webp", link: "machu-picchu",},
            {imagen: "https://res.cloudinary.com/dlgeap8h0/image/upload/f_auto,q_auto,w_700/v1772813539/Titicaca-Lake6_11zon_kdc3up.webp", link: "puno",},
        ],
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
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772746857/1_17_11zon_kfbp00.webp",],
            },
            {
                ite_titulo: "Day 2   Lima - Tour of Colonial Lima and Larco Museum (B) ",
                ite_text: "Tour of Colonial Lima including the world famous Larco Museum - This half-day tour visits both the colonial and modern sections of Lima. Colonial sites include the lovely Plaza Mayor, the Government Palace, San Francisco Church and the exquisite Torre Tagle Palace modern day seat of the Ministry of Foreign Affairs. Continue to the Larco Museum in Pueblo Libre. Visit the world famous Larco Museum - The Larco Museum, founded in 1926, displays remarkable chronological galleries providing an excellent overview on 3000 years of development of Peruvian pre-Columbian history. Located in a unique vice-royal mansion of the 18th century built over a 7th century pre-Columbian pyramid is surrounded by beautiful gardens. The Larco Museum also features the finest gold and silver collection from Ancient Peru and the famous erotic archaeological collection, one of the most visited Peruvian tourist attractions.",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772746857/2_18_11zon_cwfhm1.webp",],
            },
            {
                ite_titulo: "Day 3 Lima / Arequipa / Colca Canyon (B,L,D) ",
                ite_text: "Transfer to the airport for your flight to Arequipa at an elevation of 7,300 feet. Upon arrival a host will meet and assist you in transferring to the hotel and in registering. Also known as the 'White City' for its many constructions built of white volcanic stone, Arequipa is at the foothills of the Misti Volcano (the guardian of the city) and it has a splendid Cathedral that is considered one of the first seventeenth century religious monuments of the city.",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772746857/3_19_11zon_wldofv.webp",],
            },
            {
                ite_titulo: "Day 4 Colca Canyon / Puno – Lake Titikaka (B,L) ",
                ite_text: "To maximize your probability of seeing condors we depart very early towards a superb natural lookout point “Cross of the Condor” from where one can watch condors wheeling across the Colca Canyon, at about an altitude of 15,000 feet. The valley also features pre-Inca ruins, pre-Inca burial grounds and archaeological remains left behind by the Collagua, the ancient inhabitants of the area. Drive further in to the canyon to observe the way of life in this remote land and to admire the impressive irrigation system and the fertile mountains terraced for farming of the Colca valley. The overland trip to Puno features unique natural scenery of the Peruvian Highlands. Evening arrival in Puno.",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772746858/4_9_11zon_qrkipo.webp",],
            },
            {
                ite_titulo: "Day 5 Puno – Uros and Taquile Islands on Lake Titikaka (B,L)",
                ite_text: "Boat excursion to Uros and Taquile Islands on Lake Titikaka. This full day excursion will take you to the highest navigable lake in the world to the floating islands of the Uros Indians, man-made islands by tying totora reeds. The Uros considered themselves Lords of the Lake; they hunt wild birds and maintain traditional fishing methods. The men have developed an extraordinary skill in weaving reeds; producing houses, boats and handicrafts, and the women are expert knitters    Continuing to Taquile where a native community of about 400 families still lives with the traditions and high principals of the Incas. Taquile is a very important site on Lake Titikaka for its archeological remains, the sacred and ceremonial sites, the festive activities and their rituals. Taquile is characterized by its friendly inhabitants, who maintain their customs and traditional clothing. They distinguish themselves by their detailed, fine, and colorful textiles with symmetrical decorations and symbols that reflect their way of life and Andean beliefs. Lunch is included.",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772746858/5_10_11zon_ygbynb.webp",],
            },
            {
                ite_titulo: "Day 6 Puno to Cusco (B,L)",
                ite_text: "Bus journey through the Peruvian Andes from Puno to Cusco - Today one of South America's most extraordinary overland trips takes you by coach to Cusco passing through striking highland scenery and picturesque Andean villages. Brief stops at Raqchi to see the remains of the remarkable temple of Viracocha, considered by the historians an important Inca construction, and at the town of Andahuaylillas, a showcase of the colonial art in Peru, sometimes called 'the Sistine Chapel of America'. Lunch is included.",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772746858/6_11_11zon_mrimb8.webp",],
            },
            {
                ite_titulo: "Day 7 Cusco City Tour and Nearby Ruins (B) ",
                ite_text: "Tour of Cusco and Nearby Ruins – Visitors are caught up in the excitement of touring the ancient capital of the Inca Empire, a delightful combination of Inca and colonial architecture. The tour visits important landmarks such us Cusco's Cathedral, Plaza de Armas and Koricancha “The Temple of the Sun”. This tour of the oldest continuously inhabited city in the western hemisphere also includes the nearby ruins of Kenko, Puca-Pucara, Tambomachay as well as the Sacsayhuaman fortress, an imposing example of Inca military architecture",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772746858/7_12_11zon_ef1z8g.webp",],
            },
            {
                ite_titulo: "Day 8 Cusco – Free Day (B) ",
                ite_text: "Wandering through this lovely city, exploring the astonishing narrow streets of this tile roof colonial town will be your unforgettable experience. You will find something astounding at every turn. Great buys are the traditional Peruvian handicrafts, alpaca-wool sweaters and rugs, ponchos, pottery, gold and silver jewelry, leather goods, etc.  Because there are such a variety of products, we strongly suggest that when you like any particular item, you should buy it - you may not find the same item in other store. Many visitors to Cusco return home wishing they had a free day to discover this imperial city on their own, a free time in Cusco is a MUST!",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772746859/8_13_11zon_ilib0b.webp",],
            },
            {
                ite_titulo: "Day 9 Pisac Market and Ollantaytambo Archaeological Complex (B,L) ",
                ite_text: "Full Day Excursion to the Pisac Indian Market and the Ollantaytambo Fortress - Morning departure for a drive through the fertile countryside of the Urubamba Valley to the colonial village of Pisac where an Indian Market takes place Tuesdays, Thursdays and Sundays. Other days you will tour the religious nucleus and archaeological site of Pisac. During your visit to the bustling marketplace you will have the opportunity to bargain with the natives for many different types of Peruvian handicrafts and jewelry.   Continue to the Ollantaytambo archaeological complex, the Incas built it as a fort that included a temple, agricultural terraces, and an urban area. There are two distinct sectors: The religious and worship zone, and the residential area. Ollantaytambo was an important administrative center with probable military functions if one considers the walls and towers. There are also traces of ancient roads and aqueducts. The town of Ollantaytambo is called a 'Living Inca Town' since the inhabitants maintain very old practices and customs. Lunch is at a beautiful country estate on the shores of the Urubamba River. ",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772746861/9_14_11zon_rr5yjc.webp",],
            },
            {
                ite_titulo: "Day 10 Cusco / Machu Picchu / Cusco (B,L) ",
                ite_text: "Morning train ride through the sacred valley of Urubamba to the 'Lost City of the Incas,' Machu Picchu. Perched 8,200 feet above the valley, it was hidden by mountains and semi-tropical jungles for 400 years until discovered by Hiram Bingham of Yale University in 1911. Archaeologists believe that the Inca 'Virgins of the Sun' took refuge from the Spanish Conquistadors here. Guided tour of the ruins upon arrival. Lunch is included.",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772746861/10_15_11zon_tk4kvr.webp",],
            },
            {
                ite_titulo: "Day 11 Cusco – Lima – Home (B) ",
                ite_text: "Transfer to the airport for your departure to Lima, in your arrival you will be assisted for a representative in your connecting international flight. Arrive home full of great memories of the rich tradition of Colonial Lima, the snowcapped roaring Andean mountains and lush valleys, and the zig-zag road to the overwhelming sight of Machu Picchu, the amazing legacy the Incas.",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772746860/11_16_11zon_cgvrcr.webp",],
            },
        ],
        programIncluye: [
            { text: "11 nights of accommodation" },
            { text: "All airport transfers listed in the itinerary " },
            { text: "Baggage handling at airports and at hotels" },
            { text: "All tours and excursions indicated in the itinerary " },
            { text: "All entrance fees and transfers needed to operate tours and excursions " },
            { text: "All train tickets, bus tickets and boat services needed to operate tours and excursions" },
            { text: "Excursion to Machu Picchu is aboard the Expedition" },
            { text: "Lunch in the excursion to Machu Picchu at Café Inkaterra Restaurant" },
            { text: "Service of a bilingual licensed tour guide for all tours and excursions" },
            { text: "All meals indicated in the itinerary. B for breakfast, L for lunch. D for dinner" },
            { text: "Hotel accommodation and hotel service charge" },
            { text: "Hotel taxes are exempt for foreigners visiting Peru" },
            { text: "When domestic airfare within Peru is specified as included: Airfare includes all queues, security fee, fuel surcharges and 18% Peruvian sales tax. " },
        ],
        programNoIncluye: [
            { text: "Any domestic and international flights" },
            { text: "Extra expenses in case of modifying the itinerary due to flight cancelation, strikes or blocking of roads and train tracks by demonstrators or political activists. Travel insurance is strongly recommended. " },
            { text: "When staying overnight  in Machu Picchu, the entrance fee for the 2nd day in Machu Picchu is not included. This can be added to the itinerary upon request " },
            { text: "Expenses such us beverages on meals, tips, laundry, phone calls and other personal expenses are not included " },
            { text: "Airport departure taxes are not included: Approximate cost is US $31.00 for international flight, and US $7.40 for each domestic flight " },
        ],

    },

    {
        fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772127821/peru-boutique_rewope.webp",
        title: "Peru Boutique",
        text: "Luxury programs featuring the exclusive Relais & Chateaux properties.",
        name: "peru-boutique",
        fondoHeader: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1781105272/iStock-923075094_fa0wmh.jpg",
        imgCardLink: [
            {imagen: "https://res.cloudinary.com/dlgeap8h0/image/upload/f_auto,q_auto,w_700/v1772812676/lima4_bu8wrf.webp", link: "lima",},
            {imagen: "https://res.cloudinary.com/dlgeap8h0/image/upload/sacred-valley-portada_c39kms.webp", link: "sacred-valley",},
            {imagen: "https://res.cloudinary.com/dlgeap8h0/image/upload/mapi-portada_vvfhnw.webp", link: "machu-picchu",},
            {imagen: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772813011/Cusco-portada2_uaizlj.webp", link: "cusco",},
        ],
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
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772737265/1_11zon_kzo7yw.webp",],
            },


            {
                ite_titulo: "Day 2, Dec 30 – Lima – Tour of modern and colonial Lima including Larco Museum  (B,L,D) ",
                ite_text: "Breakfast. This half-day tour visits both the colonial and modern sections of Lima. Drive along the fashionable districts of Miraflores and San Isidro, El Parque del Amor (The Park of Love) and the striking beaches of Costa Verde  Colonial sites include the lovely Plaza Mayor, the Government Palace, San Francisco Church and the exquisite Torre Tagle Palace modern day seat of the Ministry of Foreign Affairs. Continue to the Larco Museum in Pueblo Libre. Lunch will be at the lovely “Café del Museo”. A space surrounded by gardens where you can enjoy a unique mixture of culture, history, modernity and good food. The menu contains classical Peruvian dishes - ceviche, causa, stir-fried beef - as well as original international creations or pastas using native ingredients. There is a fine selection of desserts and pisco-based cocktails. Afterwards, visit the world famous Larco Museum, founded in 1926, displays remarkable chronological galleries providing an excellent overview on 3000 years of development of Peruvian pre-Columbian history. Located in a unique vice-royal mansion of the 18th century built over a 7th century pre-Columbian pyramid is surrounded by beautiful gardens. The Larco Museum also features the finest gold and silver collection from Ancient Peru and the famous erotic archaeological collection, one of the most visited Peruvian tourist attractions.",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772737264/2_11zon_ueug9p.webp",],
            },
            {
                ite_titulo: "Dinner at Astrid & Gaston Restaurant",
                ite_text: "At night, you will have dinner at Astrid & Gaston. Considered as the best restaurant in Latin American and one of the top 25 best in the world. The food is absolutely wonderful. This stylish and colonial restaurant, the first in Peru becoming a member of Relais & Chateaux, is owned and managed by a Cordon Bleu–trained, husband/wife team. Astrid (pastry chef) and Gaston (principal chef) made a name for themselves with this highly successful restaurant. Located one block from Miraflores Main Plaza is “the dinning place” for upscale locals. Overnight in Lima. ",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772737264/3_11zon_x7ouof.webp",],
            },
            {
                ite_titulo: "Day 3, Dec 31 – Lima – Cusco – Sacred Valley (B, D) ",
                ite_text: "Breakfast.Early morning transfer from the hotel to the airport for a short but spectacular flight over the snowcapped Andes to the oldest inhabited city in the hemisphere, Cusco, at an elevation of 11,440 feet. Upon arrival a host will meet and assist you in transferring to the hotel and in registering Upon arrival a host will meet and assist you in transferring to the hotel and am registering Sacred Valley. Rest of the day free to acclimatize.",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772737271/4_11zon_pclzjy.webp",],
            },
            {
                ite_titulo: "Dinner at Wayra ",
                ite_text: "A casual gastronomic style that emphasises local flavours and customs. Delicious Peruvian cuisine at the 'Chef Table'. The underground wine cellar contains vintages from all over the world and the restaurant promotes Peruvian pisco. The restaurant -decorated with item of popular Peruvian art- is the place to enjoy the privileged atmosphere of the Sacred Valley. It has direct access and facilities for events of all types, artistic and cultural shows, cookery classes and demonstrations tours and wine tasting.Overnight at the Sacred Valley.",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772737263/5_11zon_nfzrsn.webp",],
            },

            {
                ite_titulo: "Day 4, Jan 01 – Full day excursion to the Sacred Valley with lunch at Hacienda Huayoccari (B, L)",
                ite_text: "Breakfast. Early morning transfer from the hotel to the airport for a short but spectacular flight over the snowcapped Andes to the oldest inhabited city in the hemisphere, Cusco, at an elevation of 11,440 feet. Immediate transfer to the Sacred Valley at 8,200 feet of altitude. Continue to the Pisac Indian Market, a colonial village of Pisac where an Indian Market takes place every day. During your visit to the bustling marketplace you will have the opportunity to bargain with the natives for many different types of Peruvian handicrafts and jewelry. Lunch is served at Hacienda Huayoccari. The most noticeable aspect of the house is its sensational setting, dominating the Urubamba valley in the midst of the highland crags and vegetation through which the river flows. Above it, on the very mountain top within sight of heaven are two lakes, which seem to seethe on a rainy night. With magnificent views of the Urubamba River, the Casa-Hacienda has the magical ability to make us forget the reality of life. Today’s lunch will be a remarkable event",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772737267/6_11zon_jfeffk.webp",],
            },

            {
                ite_titulo: "Visit to Pablo Seminario ceramic workshop:",
                ite_text: "Pablo Seminario Ceramic Studio has been dedicated to the discovery of techniques and designs from ancient Peruvian cultures. Pablo presents a new art expression, providing continuity to these cultural inheritances. He concentrates on making large-format works of art, 'great plates', as he calls them, at his personal workshop. The images that emerge here are the result of the patient work of following the tradition of pre-Colombian pottery, an ambitious task which got underway 20 years ago and which he continues to develop.",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772737268/7_11zon_yohhjg.webp",],
            },

            {
                ite_titulo: "Ollantaytambo Archaeological Complex ",
                ite_text: "Continue to the Ollantaytambo archaeological complex, the Incas built it as a fort that included a temple, agricultural terraces, and an urban area. There are two distinct sectors: The religious and worship zone, and the residential area. Ollantaytambo was an important administrative center with probable military functions if one considers the walls and towers. There are also traces of ancient roads and aqueducts. The town of Ollantaytambo is called a 'Living Inca Town' since the inhabitants maintain very old practices and customs. Lunch is at a beautiful country estate on the shores of the Urubamba River. ",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772737267/8_11zon_hqryqs.webp",],
            },


            {
                ite_titulo: "Day 5, Jan 02 – Machu Picchu excursion aboard the Hiram Bingham luxury train with overnight stay, all meals (B, L, D)",
                ite_text: "Breakfast. Morning train ride aboard the most luxurious railway service in South America to enjoy the unbelievable sights of the 'Lost City of the Incas,' Machu Picchu. A brunch will be served on board and you will be able to enjoy its open bar. At your arrival, you will be transferred to the hotel and have the rest of the day at leisure to rest and enjoy the facilities of the hotel. Dinner at Café Inkaterra, located at the hotel. Overnight in Aguas Calientes.",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772737269/9_11zon_eu7ran.webp",],
            },
            {
                ite_titulo: "Day 6, Jan 03 – Guided tour to Machu Picchu (B, L, D)",
                ite_text: "Breakfast. Guided tour to Machu Picchu. Perched 8,200 feet above the valley, it was hidden by mountains and semi-tropical jungles for 400 years until discovered by Hiram Bingham of Yale University in 1911. Archaeologists believe that the Inca 'Virgins of the Sun' took refuge from the Spanish Conquistadors here. Guided tour of the Sanctuary and plenty of free time to study the mysterious site. Lunch at the Orient Express Sanctuary Lodge, located just a few steps from the Inca citadel is also included. At your return to your hotel, you will enjoy a relaxing massage at Unu Spa. Dinner at Café Inkaterra, located at the hotel. Overnight in Aguas Calientes.",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772737265/10_11zon_l375uv.webp",],
            },
            {
                ite_titulo: "Day 7, Jan 04 – Machu Picchu to Cusco aboard the Orient Express Luxury Train “Hiram Bingham”(B, D)",
                ite_text: "Breakfast. For this morning, you can choose either do a walk to the Orchids Garden of the hotel, one of the biggest and most important in all the country or either do a birdwatching tour to discover unique birds including some endemic species. Rest of the day at leisure to enjoy the facilities of the hotel. In the afternoon, you will take your Hiram Bingham train back to Cusco. You will be able to have a wonderful dinner on board and enjoy some drinks at the bar wagon. Overnight in Cusco.",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772737266/11_11zon_pnf8ff.webp",],
            },
            {
                ite_titulo: "Day 8, Jan 05 – Cusco City Tour and Nearby Ruins (B, L, D) ",
                ite_text: "Breakfast. Visitors are caught up in the excitement of touring the ancient capital of the Inca Empire, a delightful combination of Inca and colonial architecture. The tour visits important landmarks such us Cusco's Cathedral, Plaza de Armas and Koricancha “The Temple of the Sun”. This tour of the oldest continuously inhabited city in the western hemisphere also includes the nearby ruins of Kenko, Puca-Pucara, Tambomachay as well as the Sacsayhuaman fortress, an imposing example of Inca military architecture.",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772737277/12_11zon_uumkih.webp",],
            },


            {
                ite_titulo: "Lunch at Chicha by Gastón Acurio",
                ite_text: "Lunch will be at Chicha Restaurant, by worldwide famous chef Gastón Acurio. A wonderful restaurant where you will have the chance to enjoy the best of traditional Peruvian food in a modern way. Rest of the day will be at leisure to enjoy the city at your own pace.",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772737357/13_11zon_i7opov.webp",],
            },

            {
                ite_titulo: "Dinner at MAP Café  ",
                ite_text: "The exclusive MAP Café is located inside the MAP Museum (Museo de Arte Pre-Colombino), with an elegant and minimalist design of glass and steel that creates a pleasant setting.  They offer and impressive and appetizing selection of ingenious dishes from the Contemporary-Peruvian Cuisine. One of the best choices in Cusco. Return to the hotel. Overnight in Cusco.",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772737359/14_11zon_iqpnss.webp",],
            },
            {
                ite_titulo: "Day 9, Jan 06 – Cusco – Lima – Home (B) ",
                ite_text: "Breakfast. Transfer to the airport for your departure to Lima and your connecting international flight. Arrive home full of great memories of the rich tradition of Colonial Lima and the mystical Land of the Incas.",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772737356/15_11zon_cprgcn.webp",],
            },

        ],
        programIncluye: [
            { text: "All airport transfers listed in the itinerary " },
            { text: "Baggage handling at airports and at hotels" },
            { text: "All tours and excursions indicated in the itinerary " },
            { text: "All entrance fees and transfers needed to operate tours and excursions " },
            { text: "All train tickets, bus tickets and boat services needed to operate tours and excursions" },
            { text: "Excursion to Machu Picchu is aboard the Hiram Bingham." },
            { text: "Service of a bilingual licensed tour guide for all tours and excursions" },
            { text: "All meals indicated in the itinerary. B for breakfast, L for lunch. D for dinner" },
            { text: "Hotel accommodation and hotel service charge" },
            { text: "Hotel taxes are exempt for foreigners visiting Peru" },
            { text: "When domestic airfare within Peru is specified as included: Airfare includes all queues, security fee, fuel surcharges and 19% Peruvian sales tax. " },
        ],
        programNoIncluye: [
            { text: "Airfare LIM/CUZ/LIM" },
            { text: "When staying overnight in Machu Picchu, the entrance fee for the 2nd day in Machu Picchu is not included. This can be added to the itinerary upon request " },
            { text: "Expenses such us beverages on meals, tips, laundry, phone calls and other personal expenses are not included " },
            { text: "Airport departure taxes are not included: Approximate cost is US $31.00 for international flight, and US $7.40 for each domestic flight." },
        ],
    },

    {
        fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772127821/cam-cusco_g9sv5e.webp",
        title: "Peru Spectacular",
        text: "A two week program including Belmond hotels and trains",
        name: "peru-spectacular",
        fondoHeader: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1778685759/iStock-858373544_evgxxd.jpg",

        imgCardLink: [
            {imagen: "https://res.cloudinary.com/dlgeap8h0/image/upload/f_auto,q_auto,w_700/v1772812676/lima4_bu8wrf.webp", link: "lima",},
            {imagen: "https://res.cloudinary.com/dlgeap8h0/image/upload/sacred-valley-portada_c39kms.webp", link: "sacred-valley",},
            {imagen: "https://res.cloudinary.com/dlgeap8h0/image/upload/mapi-portada_vvfhnw.webp", link: "machu-picchu",},
            {imagen: "https://res.cloudinary.com/dlgeap8h0/image/upload/f_auto,q_auto,w_700/v1772812868/sacsayhuaman-cusco_ulhk25.webp", link: "cusco",},
        
        ],
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
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772747860/1_6_11zon_znotjd.webp",],
            },

            {
                ite_titulo: "Day 2 Lima – City Tour (B) ",
                ite_text: "Tour of Modern and Colonial Lima - This half-day tour visits both the colonial and modern sections of Lima. Colonial sites include the lovely Plaza Mayor, the Government Palace, San Francisco Church and the exquisite Torre Tagle Palace modern day seat of the Ministry of Foreign Affairs. In modern Lima, drive along the exclusive residential areas of Miraflores and San Isidro. ",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772747861/2_7_11zon_c9vfo0.webp",],
            },

            {
                ite_titulo: "Day 3 Lima – Cusco (B)",
                ite_text: "Early morning transfer from the hotel to the airport for a short but spectacular flight over the snowcapped Andes to the oldest inhabited city in the hemisphere, Cusco, at an elevation of 11,440 feet. Upon arrival a host will meet and assist you in transferring to the hotel and in registering. Tour of Cusco and Nearby Ruins – Visitors are caught up in the excitement of touring the ancient capital of the Inca Empire, a delightful combination of Inca and colonial architecture. The tour visits important landmarks such us Cusco's Cathedral, Santo Domingo Church, Plaza de Armas and Koricancha “The Temple of the Sun”. This tour of the oldest continuously inhabited city in the western hemisphere also includes the nearby ruins of Kenko, Puca-Pucara, Tambomachay as well as the Sacsayhuaman fortress, an imposing example of Inca military architecture ",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772747864/3_1_11zon_qyqamc.webp",],
            },

            {
                ite_titulo: "Day 4 Cusco – Sacred Valley – Pisac Market and Ollantaytambo Archaeological Complex (B,L) ",
                ite_text: "Full Day Excursion to the Pisac Indian Market and the Ollantaytambo Fortress - Morning departure for a drive through the fertile countryside of the Urubamba Valley to the colonial village of Pisac where a unique Indian Market takes place daily. The variety of products offered is overwhelming, from pottery with reproductions of archaeological pieces, to all kinds of textiles, jewelry and Peruvian handicrafts. During your visit to this bustling marketplace you will have the opportunity to bargain with the artisans and indigenous traders. Grab the items you like, you will hardly see the same one again. Continue to the Ollantaytambo archaeological complex, the Incas built it as a fort that included a temple, agricultural terraces, and an urban area. There are two distinct sectors: The religious and worship zone, and the residential area. Ollantaytambo was an important administrative center with probable military functions if one considers the walls and towers. There are also traces of ancient roads and aqueducts. The town of Ollantaytambo is called a 'Living Inca Town' since the inhabitants maintain very old practices and customs. Lunch is at a beautiful country estate in the Sacred Valley. Overnight at the select hotel in the Sacred Valley.",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772747862/4_2_11zon_p5cdsa.webp",],
            },

            {
                ite_titulo: "Day 5 Sacred Valley – Machu Picchu – Cusco (B) ",
                ite_text: "Morning train ride through the sacred valley of Urubamba to the 'Lost City of the Incas,' Machu Picchu. Perched 8,200 feet above the valley, it was hidden by mountains and semi-tropical jungles for 400 years until discovered by Hiram Bingham of Yale University in 1911. Archaeologists believe that the Inca 'Virgins of the Sun' took refuge from the Spanish Conquistadors here. Guided tour of the ruins upon arrival. ",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772747868/5_3_11zon_uhcofe.webp",],
            },

            {
                ite_titulo: "Day 6 Cusco – Free Day (B) ",
                ite_text: "Wandering through this lovely city, exploring the astonishing narrow streets of this tile roof colonial town will be your unforgettable experience. You will find something astounding at every turn. Great buys are the traditional Peruvian handicrafts, alpaca-wool sweaters and rugs, ponchos, pottery, gold and silver jewelry, leather goods, etc.  Because there are such a variety of products, we strongly suggest that when you like any particular item, you should buy it - you may not find the same item in other store. Many visitors to Cusco return home wishing they had a free day to discover this imperial city on their own a free day in Cusco is a MUST!",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772747862/6_4_11zon_u1wlez.webp",],
            },

            {
                ite_titulo: "Day 7 Cusco – Lima – Home (B) ",
                ite_text: "Transfer to the airport for your departure to Lima and your connecting international flight. Arrive home full of great memories of the rich tradition of Colonial Lima and the mystical Land of the Incas.",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772747862/7_5_11zon_v6btoa.webp",],
            },

        ],
        programIncluye: [
            { text: "6 Nights of accommodation at the select hotel" },
            { text: "All airport transfers listed in the itinerary " },
            { text: "Baggage handling at airports and at hotels" },
            { text: "All tours and excursions indicated in the itinerary " },
            { text: "All entrance fees and transfers needed to operate tours and excursions " },
            { text: "All train tickets, bus tickets and boat services needed to operate tours and excursions" },
            { text: "Excursion to Machu Picchu is aboard the selected train" },
            { text: "Service of a bilingual licensed tour guide for all tours and excursions" },
            { text: "All meals indicated in the itinerary. B for breakfast, L for lunch. D for dinner" },
            { text: "Hotel accommodation and hotel service charge" },
            { text: "Hotel taxes are exempt for foreigners visiting Peru" },
            { text: "When domestic airfare within Peru is specified as included: Airfare includes all queues, security fee, fuel surcharges and 18% Peruvian sales tax. " },
        ],
        programNoIncluye: [
            { text: "Domestic and International flights." },
            { text: "Lunch in the excursion to Machu Picchu is not included" },
            { text: "Extra expenses in case of modifying the itinerary due to flight cancelation, strikes or blocking of roads and train tracks by demonstrators or political activists. Travel insurance is strongly recommended. " },
            { text: "When staying overnight in Machu Picchu, the entrance fee for the 2nd day in Machu Picchu is  not included. This can be added to the itinerary upon request. " },
            { text: "Expenses such us beverages on meals, tips, laundry, phone calls and other personal  expenses are not included" },
        ],
    },

    {
        fondo: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1772127821/isla-uros_m0ai0t.webp",
        title: "Peru Magic",
        text: "Explore the highlights of Lima and Cusco in one week.",
        name: "peru-magic",
        fondoHeader: "https://res.cloudinary.com/dlgeap8h0/image/upload/v1780928721/iStock-172168375_bllhpa.jpg",

        imgCardLink: [
            {imagen: "https://res.cloudinary.com/dlgeap8h0/image/upload/f_auto,q_auto,w_700/v1772812676/lima4_bu8wrf.webp", link: "lima",},
            {imagen: "https://res.cloudinary.com/dlgeap8h0/image/upload/sacred-valley-portada_c39kms.webp", link: "sacred-valley",},
            {imagen: "https://res.cloudinary.com/dlgeap8h0/image/upload/luxury-train_i18flh.webp", link: "luxury-trains",},
            {imagen: "https://res.cloudinary.com/dlgeap8h0/image/upload/mapi-portada_vvfhnw.webp", link: "machu-picchu",},
            {imagen: "https://res.cloudinary.com/dlgeap8h0/image/upload/f_auto,q_auto,w_700/v1772812868/sacsayhuaman-cusco_ulhk25.webp", link: "cusco",},
        ],
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
                ite_text: "Arrival in Lima, the 'City of Kings' famous for its Spanish Colonial architecture, extraordinary museums and cuisine. Lima is internationally recognized as the 'Gastronomic Capital of the Americas', and its cuisine is considered among the most diverse and exquisite in the world on par with French cuisine. Upon arrival a host will meet and assist you in transferring to the hotel and in registering.",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772747481/1_5_11zon_tuctbe.webp",],

            },
            {
                ite_titulo: "Day 2   Lima – Tour of Modern and Colonial Lima (B) ",
                ite_text: "This tour visits sites which include the lovely Plaza de Armas framed by its beautiful Cathedral and the Archbishop's palaces, and Municipal Government; it will transport you back in time with only one of their steps to tread. Then visit a masterpiece of colonial architecture: the Convent of San Francisco with its famous catacombs. We will continue with modern Lima and its beautiful tourist neighborhoods of San Isidro and Miraflores, from which you can shoot incredible views of the Pacific Ocean and the cliffs of the Costa Verde.",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772747482/2_6_11zon_by6yd0.webp",],

            },
            {
                ite_titulo: "Day 3 Lima – Cusco – Sacred Valley (B) ",
                ite_text: "Early morning transfer from the hotel to the airport for a short but spectacular flight over the snowcapped Andes to the oldest inhabited city in the hemisphere, Cusco, at an elevation of 11,440 feet. Immediate transfer to the Sacred Valley at 8,200 feet of altitude. Upon arrival a host will meet and assist you in transferring to the hotel and in registering.",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772747484/3_7_11zon_n8hjsx.webp",],

            },
            {
                ite_titulo: "Day 4 Pisac Market and Ollantaytambo Archaeological Complex – Machu Picchu (B,L,D) ",
                ite_text: "Full Day Excursion to the Pisac Indian Market and the Ollantaytambo Fortress - Morning departure for a drive through the fertile countryside of the Urubamba Valley to the colonial village of Pisac where a unique Indian Market takes place daily. The variety of products offered is overwhelming, from pottery with reproductions of archaeological pieces, to all kinds of textiles, jewelry and Peruvian handicrafts. During your visit to this bustling marketplace you will have the opportunity to bargain with the artisans and indigenous traders. Grab the items you like, you will hardly see the same one again. Continue to the Ollantaytambo archaeological complex, the Incas built it as a fort that included a temple, agricultural terraces, and an urban area. There are two distinct sectors: The religious and worship zone, and the residential area. Ollantaytambo was an important administrative center with probable military functions if one considers the walls and towers. There are also traces of ancient roads and aqueducts. The town of Ollantaytambo is called a 'Living Inca Town' since the inhabitants maintain very old practices and customs. Lunch is at a beautiful country estate in the Sacred Valley. Afternoon you will be transfer to Ollantaytambo station to take the train to Machu Picchu town. Overnight and dinner at the selected hotel in Aguas Calientes",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772747482/4_1_11zon_kwv7q7.webp",],

            },
            {
                ite_titulo: "Day 5 Machu Picchu – Cusco (B) ",
                ite_text: "Morning visit the 'Lost City of the Incas,' Machu Picchu. Perched 8,200 feet above the valley, it was hidden by mountains and semi-tropical jungles for 400 years until discovered by Hiram Bingham of Yale University in 1911. Archaeologists believe that the Inca 'Virgins of the Sun' took refuge from the Spanish Conquistadors here. Guided tour of the ruins. Afternoon return to Cusco.",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772747482/5_2_11zon_rkjjul.webp",],

            },
            {
                ite_titulo: "Day 6 Cusco City Tour and Nearby Ruins (B) ",
                ite_text: "Tour of Cusco and Nearby Ruins – Visitors are caught up in the excitement of touring the ancient capital of the Inca Empire, a delightful combination of Inca and colonial architecture. The tour visits important landmarks such us Cusco's Cathedral, Plaza de Armas and Koricancha “The Temple of the Sun”. This tour of the oldest continuously inhabited city in the western hemisphere also includes the nearby ruins of Kenko, Puca-Pucara, Tambomachay as well as the Sacsayhuaman fortress, an imposing example of Inca military architecture",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772747482/6_3_11zon_eakc9p.webp",],

            },
            {
                ite_titulo: "Day 7 Cusco – Lima – Home (B) ",
                ite_text: "Transfer to the airport for your departure to Lima and your connecting international flight. Arrive home full of great memories of the rich tradition of Colonial Lima and the mystical Land of the Incas.",
                ite_image: ["https://res.cloudinary.com/dlgeap8h0/image/upload/v1772747483/7_4_11zon_hfsvru.webp",],

            },
        ],
        programIncluye: [
            { text: "6 nights of accommodation at the select hotel" },
            { text: "All airport transfers listed in the itinerary " },
            { text: "Baggage handling at airports and at hotels" },
            { text: "All tours and excursions indicated in the itinerary " },
            { text: "All entrance fees and transfers needed to operate tours and excursions " },
            { text: "All train tickets, bus tickets and boat services needed to operate tours and excursions" },
            { text: "Excursion to Machu Picchu is aboard the selected train " },
            { text: "Service of a bilingual licensed tour guide for all tours and excursions" },
            { text: "All meals indicated in the itinerary. B for breakfast, L for lunch. D for dinner" },
            { text: "Hotel accommodation and hotel service charge" },
            { text: "Hotel taxes are exempt for foreigners visiting Peru" },
            { text: "When domestic airfare within Peru is specified as included: Airfare includes all queues, security fee, fuel surcharges and 18% Peruvian sales tax. " },
        ],
        programNoIncluye: [
            { text: "Domestic and International flights" },
            { text: "Lunch in the excursion to Machu Picchu is not included" },
            { text: "Extra expenses in case of modifying the itinerary due to flight cancelation, strikes or blocking of roads and train tracks by demonstrators or political activists. Travel insurance is strongly recommended. " },
            { text: "When staying overnight in Machu Picchu, the entrance fee for the 2nd day in Machu Picchu is not included. This can be added to the itinerary upon request. " },
            { text: "Expenses such us beverages on meals, tips, laundry, phone calls and other personal expenses are not included. " },
        ],
    },
];




