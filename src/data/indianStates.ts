export interface StateData {
  id: string; // state code or slug
  name: string;
  region: "north" | "south" | "east" | "west" | "central" | "northeast";
  regionLabel: string;
  capital: string;
  tagline: string;
  description: string;
  image: string;
  topPlaces: { name: string; type: string }[];
  bestSeason: string;
  specialty: string;
}

export const INDIAN_STATES: Record<string, StateData> = {
  "RJ": {
    id: "rajasthan",
    name: "Rajasthan",
    region: "west",
    regionLabel: "West India",
    capital: "Jaipur",
    tagline: "The Land of Kings, Forts & Golden Dunes",
    description: "A desert realm where colossal Rajput citadels rise above royal lakes, intricately painted havelis whisper histories of silk merchants, and evening stars reflect upon vast Thar sands.",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=80",
    topPlaces: [
      { name: "Mehrangarh Fort, Jodhpur", type: "Citadel & Ramparts" },
      { name: "Lake Pichola, Udaipur", type: "Royal Lake & Palaces" },
      { name: "Sam Sand Dunes, Jaisalmer", type: "Desert & Camel Safaris" }
    ],
    bestSeason: "October to March",
    specialty: "Dal Baati Churma, royal miniature paintings, and heritage living palaces"
  },
  "KL": {
    id: "kerala",
    name: "Kerala",
    region: "south",
    regionLabel: "South India",
    capital: "Thiruvananthapuram",
    tagline: "God's Own Country & Emerald Canals",
    description: "A tropical corridor kissed by the Arabian Sea, where emerald lagoons weave through palm groves, fragrant spice gardens drape the misty Western Ghats, and ancient Ayurveda rejuvenates body and spirit.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=80",
    topPlaces: [
      { name: "Alleppey Backwaters", type: "Houseboat Lagoons" },
      { name: "Munnar Hills", type: "High Altitude Tea Gardens" },
      { name: "Periyar National Park", type: "Elephant & Spice Reserve" }
    ],
    bestSeason: "September to March",
    specialty: "Ayurvedic retreats, Malabar spices, and Kathakali classical dance"
  },
  "HP": {
    id: "himachal-pradesh",
    name: "Himachal Pradesh",
    region: "north",
    regionLabel: "North India",
    capital: "Shimla",
    tagline: "The Realm of Gods & Alpine Peaks",
    description: "Snow-crowned peaks of the Dhauladhar range, apple orchards of Kullu, Tibetan monasteries perched in Dharamshala, and high-altitude road adventures through Kinnaur and Spiti.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
    topPlaces: [
      { name: "Spiti Valley", type: "Cold Desert & Gompas" },
      { name: "McLeod Ganj", type: "Tibetan Culture & Dalai Lama Temple" },
      { name: "Solang Valley", type: "Skiing & Glacial Meadows" }
    ],
    bestSeason: "April to June (Spring/Summer), Dec to Feb (Snow)",
    specialty: "Siddu bread, cedarwood crafts, and high-pass trekking"
  },
  "LA": {
    id: "ladakh",
    name: "Ladakh",
    region: "north",
    regionLabel: "North India",
    capital: "Leh",
    tagline: "The Moonland of High Passes",
    description: "An awe-inspiring trans-Himalayan plateau with jagged rust-colored peaks, crystalline saltwater lakes, double-humped camel dunes in Nubra, and centuries-old Mahayana monasteries.",
    image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=900&q=80",
    topPlaces: [
      { name: "Pangong Tso", type: "Color-Shifting Glacial Lake" },
      { name: "Nubra Valley", type: "Hunder Dunes & Bactrian Camels" },
      { name: "Thiksey Monastery", type: "12-Storey Gompa" }
    ],
    bestSeason: "May to September",
    specialty: "Butter tea, Pashmina wool weaving, and cosmic stargazing"
  },
  "JK": {
    id: "jammu-and-kashmir",
    name: "Jammu & Kashmir",
    region: "north",
    regionLabel: "North India",
    capital: "Srinagar",
    tagline: "Paradise on Earth & Whispering Pines",
    description: "Mughal gardens overlooking Dal Lake's wooden houseboats, snow-blanketed slopes of Gulmarg, saffron fields of Pampore, and gentle shikara oars brushing lotus blooms.",
    image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=900&q=80",
    topPlaces: [
      { name: "Dal Lake & Nigeen", type: "Shikara Cruises & Floating Markets" },
      { name: "Gulmarg Gondola", type: "Asia's Highest Ski Resort" },
      { name: "Pahalgam Valley", type: "Betaab Valley & Pine Forests" }
    ],
    bestSeason: "March to October (Lush), Dec to Feb (Winter Wonderland)",
    specialty: "Wazwan multi-course feasts, Kashmiri Kahwa, and hand-knotted silk carpets"
  },
  "UT": {
    id: "uttarakhand",
    name: "Uttarakhand",
    region: "north",
    regionLabel: "North India",
    capital: "Dehradun",
    tagline: "Devbhoomi — Land of the Sages & Glaciers",
    description: "Where the sacred Ganges and Yamuna spring from icy glacial peaks, yoga gurus chant in Rishikesh, and alpine meadows of Chopta unfold into the Garhwal Himalayas.",
    image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=900&q=80",
    topPlaces: [
      { name: "Rishikesh & Haridwar", type: "Yoga, Rafting & Ganga Aarti" },
      { name: "Valley of Flowers", type: "UNESCO Floral Meadow" },
      { name: "Jim Corbett Park", type: "India's First Tiger Reserve" }
    ],
    bestSeason: "September to June",
    specialty: "River rafting, mountain ashrams, and Garhwali millet delicacies"
  },
  "UP": {
    id: "uttar-pradesh",
    name: "Uttar Pradesh",
    region: "north",
    regionLabel: "North India",
    capital: "Lucknow",
    tagline: "The Cradle of Dynasties & Sacred Waters",
    description: "Home to the immortal marble poem of the Taj Mahal, the timeless dawn prayers along the Varanasi ghats, and the royal Nawabi courts and poetic culinary legacy of Lucknow.",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=900&q=80",
    topPlaces: [
      { name: "Taj Mahal & Agra Fort", type: "Mughal Architectural Marvels" },
      { name: "Varanasi Ghats", type: "Spiritual Epicenter of India" },
      { name: "Lucknow Old City", type: "Chikankari & Awadhi Cuisine" }
    ],
    bestSeason: "October to March",
    specialty: "Galouti Kebabs, Banarasi Zari silk, and dawn boat journeys"
  },
  "GA": {
    id: "goa",
    name: "Goa",
    region: "west",
    regionLabel: "West India",
    capital: "Panaji",
    tagline: "Pearl of the Orient & Coastal Susegad",
    description: "Swaying coconut groves, historic Portuguese baroque churches, spice farms tucked in the foothills, and relaxed beach shacks serenaded by gentle Arabian Sea tides.",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80",
    topPlaces: [
      { name: "Palolem & Agonda", type: "Peaceful South Goa Shores" },
      { name: "Fontainhas, Panjim", type: "Latin Quarter Heritage Walks" },
      { name: "Dudhsagar Falls", type: "Four-Tiered Jungle Cascade" }
    ],
    bestSeason: "October to April",
    specialty: "Prawn balchão, bebinca layer cake, and catamaran sunsets"
  },
  "KA": {
    id: "karnataka",
    name: "Karnataka",
    region: "south",
    regionLabel: "South India",
    capital: "Bengaluru",
    tagline: "One State, Many Worlds",
    description: "From the monumental granite boulder ruins of the Vijayanagara empire in Hampi to the misty coffee plantations of Coorg and the ornate palaces of Mysore.",
    image: "https://images.unsplash.com/photo-1600100397608-f010f444f434?auto=format&fit=crop&w=900&q=80",
    topPlaces: [
      { name: "Hampi Monument Complex", type: "UNESCO World Heritage Ruins" },
      { name: "Mysore Palace", type: "Indo-Saracenic Royal Residence" },
      { name: "Coorg (Kodagu)", type: "Coffee Plantations & Waterfalls" }
    ],
    bestSeason: "October to March",
    specialty: "Mysore Pak, Coorg pandi curry, and sandalwood handicrafts"
  },
  "TN": {
    id: "tamil-nadu",
    name: "Tamil Nadu",
    region: "south",
    regionLabel: "South India",
    capital: "Chennai",
    tagline: "Land of Grand Temples & Ancient Sangam",
    description: "Thousands of years of uninterrupted classical civilization preserved in soaring gopurams of Madurai, monolithic shore shrines of Mahabalipuram, and lush Nilgiri hill stations.",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=900&q=80",
    topPlaces: [
      { name: "Meenakshi Amman Temple", type: "Madurai Thousand-Pillared Hall" },
      { name: "Brihadeeswarar, Thanjavur", type: "1000-Year Chola Engineering" },
      { name: "Mahabalipuram", type: "7th-Century Monolithic Shore Carvings" }
    ],
    bestSeason: "November to March",
    specialty: "Filter coffee, Chettinad spicy curries, and Kanchipuram silk saris"
  },
  "GJ": {
    id: "gujarat",
    name: "Gujarat",
    region: "west",
    regionLabel: "West India",
    capital: "Gandhinagar",
    tagline: "The White Desert & Asiatic Lion's Roar",
    description: "The gleaming white salt plains of the Great Rann, the only sanctuary on earth for Asiatic lions in Gir, and intricate stepwells like Rani ki Vav displaying supreme stonemasonry.",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=900&q=80",
    topPlaces: [
      { name: "Great Rann of Kutch", type: "White Salt Desert & Full Moon Camp" },
      { name: "Gir National Park", type: "Asiatic Lion Wilderness" },
      { name: "Rani Ki Vav, Patan", type: "Subterranean Stepwell Sanctuary" }
    ],
    bestSeason: "November to February",
    specialty: "Gujarati Thali, Rogan art, and Kutchi mirror embroidery"
  },
  "MH": {
    id: "maharashtra",
    name: "Maharashtra",
    region: "west",
    regionLabel: "West India",
    capital: "Mumbai",
    tagline: "Gateways, Sea Forts & Ancient Caves",
    description: "The buzzing coastal metropolis of Mumbai, rock-cut Buddhist frescoes in Ajanta and Ellora, mist-covered Western Ghat fortresses, and vineyard valleys of Nashik.",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=900&q=80",
    topPlaces: [
      { name: "Ajanta & Ellora Caves", type: "Rock-Cut Bas-Reliefs" },
      { name: "Mumbai Marine Drive", type: "Queen's Necklace & Art Deco" },
      { name: "Nashik Wine Country", type: "Vineyard Tastings & Retreats" }
    ],
    bestSeason: "October to March",
    specialty: "Misal pav, coastal Malvani seafood, and Warli folk paintings"
  },
  "MP": {
    id: "madhya-pradesh",
    name: "Madhya Pradesh",
    region: "central",
    regionLabel: "Central India",
    capital: "Bhopal",
    tagline: "The Tiger State & Sculpted Stone",
    description: "The wild heart of India with the densest Royal Bengal Tiger populations in Bandhavgarh and Kanha, sensual sandstone poetry of Khajuraho, and peaceful Buddhist stupas of Sanchi.",
    image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=900&q=80",
    topPlaces: [
      { name: "Khajuraho Group of Temples", type: "Chandela Dynasty Sculptures" },
      { name: "Bandhavgarh & Kanha", type: "Pristine Tiger Reserves" },
      { name: "Bhedaghat Marble Rocks", type: "Narmada River Gorge" }
    ],
    bestSeason: "October to April",
    specialty: "Poha Jalebi, Chanderi weaving, and tiger tracking safaris"
  },
  "AS": {
    id: "assam",
    name: "Assam",
    region: "northeast",
    regionLabel: "Northeast India",
    capital: "Dispur",
    tagline: "Brahmaputra Tides & One-Horned Rhinos",
    description: "Lush rolling tea estates under vast skies, the mighty Brahmaputra river with Majuli river island, and fertile floodplains where one-horned rhinos graze peacefully.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=80",
    topPlaces: [
      { name: "Kaziranga National Park", type: "Rhino & Wildlife Sanctuary" },
      { name: "Majuli Island", type: "World's Largest River Island" },
      { name: "Jorhat Tea Plantations", type: "Historic Tea Estate Bungalows" }
    ],
    bestSeason: "November to April",
    specialty: "Assam golden silk (Muga), single-estate CTC black tea, and Bihu dance"
  },
  "ML": {
    id: "meghalaya",
    name: "Meghalaya",
    region: "northeast",
    regionLabel: "Northeast India",
    capital: "Shillong",
    tagline: "Abode of Clouds & Living Arboreal Wonders",
    description: "A rain-kissed mystical land of dramatic waterfalls plunging through limestone canyons, crystal-clear Umngot river in Dawki, and living root bridges grown by Khasi tribes.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=80",
    topPlaces: [
      { name: "Cherrapunji & Nongriat", type: "Double Decker Root Bridges" },
      { name: "Dawki & Umngot River", type: "Glass-Transparent River Boats" },
      { name: "Mawlynnong Village", type: "Asia's Cleanest Village" }
    ],
    bestSeason: "October to May",
    specialty: "Jadoh rice, indigenous bamboo crafts, and canyon trekking"
  },
  "SK": {
    id: "sikkim",
    name: "Sikkim",
    region: "northeast",
    regionLabel: "Northeast India",
    capital: "Gangtok",
    tagline: "In the Shadow of Mount Kangchenjunga",
    description: "India's first 100% organic state, framed by the world's third highest mountain, fluttering Buddhist prayer flags in Rumtek, and high alpine rhododendron valleys of Yumthang.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
    topPlaces: [
      { name: "Gurudongmar Lake", type: "Sacred High Altitude Lake (17,800 ft)" },
      { name: "Rumtek Monastery", type: "Kagyu Buddhist Seat" },
      { name: "Yumthang Valley", type: "Valley of Rhododendrons & Hot Springs" }
    ],
    bestSeason: "March to May (Flowers), October to mid-December (Clear Skies)",
    specialty: "Steamed momos, fermented thukpa, and organic mountain tea"
  },
  "WB": {
    id: "west-bengal",
    name: "West Bengal",
    region: "east",
    regionLabel: "East India",
    capital: "Kolkata",
    tagline: "Culture, Sundarbans & Darjeeling Mist",
    description: "From Kolkata’s grand Victorian heritage and coffee house literary salons to the misty Himalayan toy trains of Darjeeling and the mangrove tiger waterways of the Sundarbans.",
    image: "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=900&q=80",
    topPlaces: [
      { name: "Darjeeling & Tiger Hill", type: "Toy Train & Kanchenjunga Sunrise" },
      { name: "Sundarbans National Park", type: "Tidal Mangrove Tiger Reserve" },
      { name: "Kolkata Cultural Core", type: "Victoria Memorial & Street Food" }
    ],
    bestSeason: "October to March",
    specialty: "Darjeeling Muscatel tea, Rosogolla sweets, and Durga Puja festival"
  },
  "OD": {
    id: "odisha",
    name: "Odisha",
    region: "east",
    regionLabel: "East India",
    capital: "Bhubaneswar",
    tagline: "The Soul of Ancient Kalinga",
    description: "Colossal stone sun chariots in Konark, sacred coastal pilgrimage of Puri Jagannath, Asia’s largest brackish lagoon in Chilika hosting Irrawaddy dolphins, and intricate Pattachitra art.",
    image: "https://images.unsplash.com/photo-1628107083040-5a337190ca38?auto=format&fit=crop&w=900&q=80",
    topPlaces: [
      { name: "Konark Sun Temple", type: "Architectural Sun Chariot" },
      { name: "Chilika Lake", type: "Flamingos & Irrawaddy Dolphins" },
      { name: "Puri Golden Beach", type: "Sacred Ghats & Coastal Waves" }
    ],
    bestSeason: "October to March",
    specialty: "Chhena Poda dessert, silver filigree work, and Odissi classical dance"
  },
  "AN": {
    id: "andaman-and-nicobar",
    name: "Andaman & Nicobar Islands",
    region: "south",
    regionLabel: "South India",
    capital: "Port Blair",
    tagline: "Turquoise Waters & Virgin Coral Reefs",
    description: "An archipelago of 572 emerald islands ringed by radiant coral reefs, bioluminescent night lagoons, historic Cellular Jail, and primeval mangrove kayaking routes.",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=900&q=80",
    topPlaces: [
      { name: "Radhanagar Beach, Havelock", type: "Asia's Premier White Sands" },
      { name: "Neil Island (Shaheed Dweep)", type: "Coral Bridges & Natural Formations" },
      { name: "Baratang Mangroves", type: "Limestone Caves & Mud Volcanoes" }
    ],
    bestSeason: "October to May",
    specialty: "Deep scuba diving, fresh crab delicacies, and sea-plane tours"
  },
  "TG": {
    id: "telangana",
    name: "Telangana",
    region: "south",
    regionLabel: "South India",
    capital: "Hyderabad",
    tagline: "City of Pearls & Kakatiya Marvels",
    description: "The grand four-arched Charminar, the whispering acoustic domes of Golconda Fort, and the UNESCO-listed Ramappa Temple with floating bricks and polished black basalt pillars.",
    image: "https://images.unsplash.com/photo-1572445271230-a78b5944a659?auto=format&fit=crop&w=900&q=80",
    topPlaces: [
      { name: "Golconda Fort & Charminar", type: "Medieval Acoustic Citadel" },
      { name: "Ramappa Temple", type: "Kakatiya Floating Bricks Masterpiece" },
      { name: "Chowmahalla Palace", type: "Nizami Splendor & Crystal Chandeliers" }
    ],
    bestSeason: "October to March",
    specialty: "Hyderabadi Dum Biryani, natural pearls, and Bidri metal craft"
  },
  "AP": {
    id: "andhra-pradesh",
    name: "Andhra Pradesh",
    region: "south",
    regionLabel: "South India",
    capital: "Amaravati / Visakhapatnam",
    tagline: "Pristine Coasts & Hilltop Sanctuaries",
    description: "The sacred hilltop shrine of Tirupati Venkateswara, scenic coastal hills of Araku Valley, and historic Buddhist stupas of Amaravati set along the Eastern Ghats.",
    image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=900&q=80",
    topPlaces: [
      { name: "Tirumala Tirupati", type: "Sacred Seven Hills Temple" },
      { name: "Araku Valley & Borra Caves", type: "Coffee Plantations & Karst Caverns" },
      { name: "Rishikonda Beach", type: "Coastal Watersports & Bay of Bengal" }
    ],
    bestSeason: "October to March",
    specialty: "Kalamkari hand-painted textiles, spicy Gongura pickle, and Araku organic coffee"
  },
  "PB": {
    id: "punjab",
    name: "Punjab",
    region: "north",
    regionLabel: "North India",
    capital: "Chandigarh",
    tagline: "Golden Shrines & Heartfelt Hospitality",
    description: "The sublime gold-leafed sanctum of the Golden Temple surrounded by the Amrit Sarovar lake, lively agricultural heartlands, and soulful Bhangra rhythms.",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=900&q=80",
    topPlaces: [
      { name: "Harmandir Sahib (Golden Temple)", type: "Spiritual Golden Sanctuary" },
      { name: "Wagah Border Ceremony", type: "Patriotic Beating Retreat" },
      { name: "Jallianwala Bagh", type: "Historic Memorial Garden" }
    ],
    bestSeason: "October to March",
    specialty: "Makki di Roti & Sarson ka Saag, Phulkari embroidery, and Langar seva"
  }
};

export const ALL_INDIAN_STATES_LIST = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman & Nicobar Islands",
  "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi",
  "Jammu & Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
];
