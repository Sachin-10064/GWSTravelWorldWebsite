export interface PackageCategory {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  image: string;
  popularDestinations: string[];
}

export interface TravelPackage {
  id: string;
  title: string;
  category: string;
  duration: string;
  priceEstimate?: string;
  region: string;
  badge: string;
  heroImage: string;
  tagline: string;
  description: string;
  inclusions: string[];
  itinerary: { day: string; title: string; desc: string }[];
}

export const PACKAGE_CATEGORIES: PackageCategory[] = [
  {
    id: "solo-trips",
    title: "Solo Trips",
    tagline: "Soulful Paths & Safe Independence",
    description: "Handcrafted journeys with boutique heritage stays, local hosts, and mindful itineraries designed for self-discovery.",
    icon: "Compass",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    popularDestinations: ["Rishikesh", "Zanskar", "Hampi", "Varkala"]
  },
  {
    id: "family-holidays",
    title: "Family Holidays",
    tagline: "Generations Sharing Timeless Wonder",
    description: "Multigenerational comfort featuring spacious private estates, heritage train rides, wildlife safaris, and engaging culinary sessions.",
    icon: "Users",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80",
    popularDestinations: ["Kerala Backwaters", "Jaipur", "Shimla", "Bandhavgarh"]
  },
  {
    id: "couple-getaways",
    title: "Couple Getaways",
    tagline: "Intimate Retreats in Remarkable Settings",
    description: "Private dinners under Thar starlight, secluded coastal villas in Goa, and mist-veiled tea bungalows in Darjeeling.",
    icon: "Heart",
    image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=600&q=80",
    popularDestinations: ["Udaipur", "Kumarakom", "Coorg", "Pondicherry"]
  },
  {
    id: "honeymoon-packages",
    title: "Honeymoon Packages",
    tagline: "Unforgettable Beginnings in Regal Opulence",
    description: "Palatial lakefront suites, private champagne cruises along emerald backwaters, and bespoke spa therapies rooted in Ayurveda.",
    icon: "Sparkles",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    popularDestinations: ["Lake Pichola", "Havelock Island", "Munnar", "Kashmir"]
  },
  {
    id: "group-tours",
    title: "Group Tours",
    tagline: "Shared Expeditions & Cultural Feasts",
    description: "Curated small-group departures led by veteran historians, expert naturalists, and celebrated culinary storytellers.",
    icon: "MapPin",
    image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=600&q=80",
    popularDestinations: ["Golden Triangle", "Northeast Seven Sisters", "Ladakh High Passes", "Tamil Temple Trail"]
  }
];

export const TRAVEL_PACKAGES: TravelPackage[] = [
  {
    id: "rajasthan-royal-heritage",
    title: "Rajasthan Royal Heritage",
    category: "Heritage & Culture",
    duration: "9 Days / 8 Nights",
    region: "West India",
    badge: "Signature Collection",
    heroImage: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",
    tagline: "Living in the Palaces of Maharajas",
    description: "Traverse Jaipur’s pink sandstone gateways, Jodhpur’s blue ramparts, and Udaipur’s floating marble pavilions with royal concierge privileges.",
    inclusions: [
      "Stays in authentic heritage palaces & royal havelis",
      "Private vintage car transfer in Udaipur",
      "Sunset camel caravan through Sam Dunes, Jaisalmer",
      "Exclusive access to private palace armories"
    ],
    itinerary: [
      { day: "Day 1-3", title: "Jaipur - The Pink City", desc: "Private tour of Amber Fort, Hawa Mahal, and high tea with a royal historian." },
      { day: "Day 4-5", title: "Jodhpur - The Blue Citadel", desc: "Mehrangarh Fort ramparts and guided walk through the cobalt blue alleys of Navchokiya." },
      { day: "Day 6-7", title: "Jaisalmer - The Golden Mirage", desc: "Living fort exploration and luxury tented encampment under the Thar stars." },
      { day: "Day 8-9", title: "Udaipur - City of Lakes", desc: "Sunset private boat cruise on Lake Pichola and farewell banquet at Jagmandir Island." }
    ]
  },
  {
    id: "kerala-backwater-escape",
    title: "Kerala Backwater & Spice Escape",
    category: "Tropical Serenity",
    duration: "7 Days / 6 Nights",
    region: "South India",
    badge: "Wellness & Nature",
    heroImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80",
    tagline: "Drifting Through Whispering Canals",
    description: "Immerse in the emerald waters of Vembanad Lake, organic cardamon plantations in Munnar, and centuries-old Ayurvedic rejuvenation therapies.",
    inclusions: [
      "Handcrafted solar-assisted luxury kettuvallam houseboat",
      "Daily personalized Ayurvedic wellness consultations",
      "Private spice plantation walk with resident botanist",
      "Traditional Kathakali performance & green-room makeup access"
    ],
    itinerary: [
      { day: "Day 1-2", title: "Kochi - Colonial Coast", desc: "Explore historic Fort Kochi, Chinese fishing nets, and spice market auctions." },
      { day: "Day 3-4", title: "Munnar - Emerald Tea Highlands", desc: "Trek through mist-wrapped estates and visit high-elevation organic tea gardens." },
      { day: "Day 5-6", title: "Alleppey - Backwater Slumber", desc: "Cruise through secluded canals, dining on freshly caught Karimeen and red rice." },
      { day: "Day 7", title: "Marari Beach Departure", desc: "Relax on untouched fisherman beaches before onward flight from Cochin." }
    ]
  },
  {
    id: "himalayan-high-altitude",
    title: "Himalayan High Altitude Odyssey",
    category: "Adventure & High Pass",
    duration: "10 Days / 9 Nights",
    region: "North India",
    badge: "Epic Expedition",
    heroImage: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1000&q=80",
    tagline: "Where Earth Touches the Heavens",
    description: "Ascend past the world’s highest motorable mountain passes into surreal moonscapes of Ladakh, ancient Buddhist gompas, and turquoise glacial lakes.",
    inclusions: [
      "Oxygen-equipped 4x4 expedition vehicles & paramedic support",
      "Luxury glamping domes overlooking Pangong Tso",
      "Private blessing ceremony at Thiksey Monastery",
      "Bactrian double-humped camel safari in Nubra Valley dunes"
    ],
    itinerary: [
      { day: "Day 1-2", title: "Leh - Acclimatization & Monasteries", desc: "Slow living in Leh, visiting Leh Palace, Shanti Stupa, and local apricot orchards." },
      { day: "Day 3-4", title: "Nubra Valley via Khardung La", desc: "Crossing the 17,982 ft pass into the sand dunes of Hunder and Diskit gompa." },
      { day: "Day 5-7", title: "Pangong Tso - Color-Shifting Waters", desc: "Traverse high altitude Chang La to spend two magical nights beside Pangong." },
      { day: "Day 8-10", title: "Hemis & Indus Valley Return", desc: "Exploring Hemis museum and returning to Leh for farewell Ladakhi banquet." }
    ]
  },
  {
    id: "goa-coastal-slow-living",
    title: "Goa Coastal Retreat & Heritage",
    category: "Coastal Haven",
    duration: "6 Days / 5 Nights",
    region: "West India",
    badge: "Slow Travel",
    heroImage: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80",
    tagline: "Susegad, Sea Breezes & Latin Quarters",
    description: "Discover the soulful, quiet side of Goa: preserved 18th-century Portuguese mansions, secluded southern bays, and innovative Konkan culinary masterclasses.",
    inclusions: [
      "Stay in an exquisitely restored Indo-Portuguese villa",
      "Chef-guided market tour and traditional feni tasting",
      "Private catamaran sailing along Cabo de Rama cliffs",
      "Morning yoga pavilion sessions facing the Arabian Sea"
    ],
    itinerary: [
      { day: "Day 1-2", title: "Panjim & Fontainhas", desc: "Walking through pastel Portuguese avenues, art galleries, and jazz bistros." },
      { day: "Day 3-4", title: "South Goa Secret Bays", desc: "Unwind on serene sands of Cola and Palolem, swimming in freshwater lagoons." },
      { day: "Day 5-6", title: "Spice Estates & Estuaries", desc: "Kayaking through mangrove channels and farewell feast of spicy prawn balchão." }
    ]
  },
  {
    id: "northeast-living-root",
    title: "Northeast Living Roots & Tea Estates",
    category: "Biodiversity & Tribes",
    duration: "8 Days / 7 Nights",
    region: "Northeast India",
    badge: "Off the Beaten Track",
    heroImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80",
    tagline: "Into the Realm of Clouds & Living Architecture",
    description: "Hike deep into sacred subtropical rainforests to walk across centuries-old living root bridges, and sip the world’s finest single-estate teas in Assam.",
    inclusions: [
      "Heritage tea planter’s colonial bungalow stay in Jorhat",
      "Private Khasi indigenous village naturalist guides",
      "Elephant safari in Kaziranga National Park",
      "River crossing on the sacred Brahmaputra"
    ],
    itinerary: [
      { day: "Day 1-2", title: "Guwahati & Shillong", desc: "Drive into the 'Scotland of the East', visiting Umiam Lake and Don Bosco museum." },
      { day: "Day 3-4", title: "Cherrapunji & Living Root Bridges", desc: "Descent to Nongriat’s Double Decker living root bridge and crystal waterfalls." },
      { day: "Day 5-6", title: "Kaziranga Safari", desc: "Grassland drives tracking one-horned rhinos, wild elephants, and deer herds." },
      { day: "Day 7-8", title: "Assam Tea Heritage", desc: "Tea tasting masterclass and departure with artisanal harvest leaves." }
    ]
  },
  {
    id: "golden-triangle-varanasi",
    title: "Golden Triangle & Timeless Varanasi",
    category: "Classic Cultural",
    duration: "8 Days / 7 Nights",
    region: "North India",
    badge: "Quintessential India",
    heroImage: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
    tagline: "Emperors, Monuments & the Holy River",
    description: "The definitive cultural introduction to India: Delhi’s bustling monuments, the ethereal marble of the Taj Mahal, Jaipur’s royal citadels, and holy Varanasi.",
    inclusions: [
      "Exclusive dawn boat along Varanasi’s Manikarnika Ghat",
      "Sunrise entry tickets with priority escort to the Taj Mahal",
      "Rickshaw odyssey through Old Delhi’s Chandni Chowk",
      "Luxury chauffeured sedan throughout the entire journey"
    ],
    itinerary: [
      { day: "Day 1-2", title: "Delhi - Capital of Dynasties", desc: "Qutub Minar, Humayun’s Tomb, and Old Delhi street delicacies." },
      { day: "Day 3", title: "Agra - The Marble Wonder", desc: "Sunrise at Taj Mahal and exploration of red sandstone Agra Fort." },
      { day: "Day 4-5", title: "Jaipur - Rajput Splendor", desc: "Amber Fort, City Palace, and gem-cutting ateliers." },
      { day: "Day 6-8", title: "Varanasi - The Eternal City", desc: "Flight to Varanasi for Ganga Aarti, Sarnath Buddhist stupa, and departure." }
    ]
  },
  {
    id: "wildlife-safari-expedition",
    title: "Royal Bengal Tiger & Wilderness Safari",
    category: "Wildlife & Nature",
    duration: "7 Days / 6 Nights",
    region: "Central India",
    badge: "Wild Sanctuary",
    heroImage: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1000&q=80",
    tagline: "In the Footsteps of the Striped King",
    description: "Venture deep into the sal forests and ancient ravines of Ranthambore and Bandhavgarh with India’s foremost wildlife trackers and biologists.",
    inclusions: [
      "Six private open-top 4x4 safari drives in premium forest zones",
      "Stay in eco-luxury jungle lodges with campfire evenings",
      "Field naturalist talks on tiger conservation & habitat preservation",
      "All park permits, camera fees, and forest ranger gratuities"
    ],
    itinerary: [
      { day: "Day 1-3", title: "Ranthambore National Park", desc: "Morning and afternoon game drives past ancient forest ruins and banyan trees." },
      { day: "Day 4-6", title: "Bandhavgarh National Park", desc: "Highest density tiger country, tracking big cats, leopards, and sloth bears." },
      { day: "Day 7", title: "Jabalpur Departure", desc: "Scenic boat ride along the marble rocks of Bhedaghat before flight." }
    ]
  },
  {
    id: "dravidian-temple-trail",
    title: "Grand Dravidian Temple Trail",
    category: "Architecture & Heritage",
    duration: "7 Days / 6 Nights",
    region: "South India",
    badge: "Sacred Architecture",
    heroImage: "https://images.unsplash.com/photo-1600100397608-f010f444f434?auto=format&fit=crop&w=1000&q=80",
    tagline: "Living Monoliths & Bronze Sculptures",
    description: "Explore the towering gopurams of Meenakshi Temple in Madurai, the Chola engineering marvel of Thanjavur, and French colonial Pondicherry.",
    inclusions: [
      "Private priest-accompanied darshan at Brihadeeswarar Temple",
      "Heritage Chettinad mansion stay with 7-course spice banquet",
      "Artisan bronze casting demonstration in Swamimalai",
      "French Quarter cycling tour in Pondicherry"
    ],
    itinerary: [
      { day: "Day 1-2", title: "Chennai & Mahabalipuram", desc: "Shore Temple rock carvings and Arjuna's Penance ocean monoliths." },
      { day: "Day 3-4", title: "Thanjavur & Chettinad", desc: "Great Living Chola Temples and antique havelis with Burmese teak columns." },
      { day: "Day 5-6", title: "Madurai - Soul of Tamil Nadu", desc: "Evening procession at the thousand-pillared Meenakshi Amman Temple." },
      { day: "Day 7", title: "Departure", desc: "Bespoke silk sari weaving atelier visit before departure flight." }
    ]
  }
];
