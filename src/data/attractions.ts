export interface Attraction {
  id: string;
  name: string;
  location: string;
  region: string;
  category: string;
  tagline: string;
  description: string;
  highlights: string[];
  bestTime: string;
  image: string;
}

export const ATTRACTIONS: Attraction[] = [
  {
    id: "taj-mahal",
    name: "Taj Mahal",
    location: "Agra, Uttar Pradesh",
    region: "North India",
    category: "UNESCO Monument",
    tagline: "The Poetry of White Marble",
    description: "An emperor's eternal monument to love, constructed from translucent Makrana marble inlaid with jasper, jade, and lapis lazuli that shimmers with dawn's rose-gold light.",
    highlights: ["Sunrise view from Mehtab Bagh", "Pietra dura marble inlays", "Yamuna river reflection"],
    bestTime: "October to March",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "hawa-mahal",
    name: "Hawa Mahal & Amber Fort",
    location: "Jaipur, Rajasthan",
    region: "West India",
    category: "Royal Heritage",
    tagline: "The Palace of Winds & Sandstone Citadel",
    description: "A five-storey honeycomb facade of 953 jharokhas carved in pink and red sandstone, built so royal women could observe city festivals unseen.",
    highlights: ["Sheesh Mahal mirror mosaics", "Windward honeycomb balconies", "Elephant path to Amber ridge"],
    bestTime: "November to February",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "varanasi-ghats",
    name: "Varanasi Ghats",
    location: "Varanasi, Uttar Pradesh",
    region: "North India",
    category: "Spiritual Sacred Site",
    tagline: "Where Time Itself Comes to Pray",
    description: "One of the world's oldest continually inhabited cities, where life, prayer, and eternity intermingle on stone stairways dipping into the holy Ganges.",
    highlights: ["Subah-e-Banaras dawn boat ride", "Dashashwamedh evening Ganga Aarti", "Narrow alleyways & silk weavers"],
    bestTime: "October to March",
    image: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "kerala-backwaters",
    name: "Alleppey Backwaters",
    location: "Alappuzha, Kerala",
    region: "South India",
    category: "Tropical Serenity",
    tagline: "Venice of the East Under Coconut Canopies",
    description: "A tranquil labyrinth of shimmering canals, lagoons, and emerald paddy fields navigated aboard handcrafted kettuvallam houseboats.",
    highlights: ["Private thatch-roof luxury houseboat", "Fresh Karimeen fish cooked on deck", "Village palm-fringed canoe excursions"],
    bestTime: "September to March",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "ladakh-pangong",
    name: "Pangong Tso & Nubra Valley",
    location: "Leh, Ladakh",
    region: "North India",
    category: "High Altitude Wilderness",
    tagline: "The Roof of the World",
    description: "Endorheic saltwater lake at 14,270 ft that shifts between turquoise, sapphire, and cobalt hues against towering barren snowcapped peaks.",
    highlights: ["Khardung La mountain pass", "Diskit Monastery giant Buddha", "Stargazing over Pangong's mirror waters"],
    bestTime: "May to September",
    image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "hampi-ruins",
    name: "Hampi Monumental Ruins",
    location: "Vijayanagara, Karnataka",
    region: "South India",
    category: "Ancient Empire",
    tagline: "The Boulder-Strewn City of Victory",
    description: "The magnificent 14th-century capital of the Vijayanagara Empire, sprawling across surreal granite boulder fields, carved chariot shrines, and Tungabhadra riverbanks.",
    highlights: ["Vittala Temple stone chariot", "Virupaksha towering gopuram", "Sunset atop Matanga Hill"],
    bestTime: "November to February",
    image: "https://images.unsplash.com/photo-1600100397608-f010f444f434?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "rann-of-kutch",
    name: "Great Rann of Kutch",
    location: "Kutch, Gujarat",
    region: "West India",
    category: "Desert Phenomenon",
    tagline: "The Surreal White Salt Desert",
    description: "The world's largest salt desert, gleaming like an infinite field of crystalline diamonds under the silvery luminescence of full-moon nights.",
    highlights: ["Full moon desert safari", "Rann Utsav artisan pavilions", "Kala Dungar horizon view"],
    bestTime: "November to February",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "goa-beaches",
    name: "Palolem & Coastal Goa",
    location: "Canacona, South Goa",
    region: "West India",
    category: "Coastal Haven",
    tagline: "Portuguese Villas & Golden Crescent Shores",
    description: "Crescent-shaped calm bay cradled by rocky headlands and swaying coconut palms, where slow living meets Portuguese heritage villas and spice plantations.",
    highlights: ["Dolphin spotting at sunrise", "Cabo de Rama sea fort", "Fontainhas Latin Quarter walk"],
    bestTime: "October to April",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "kaziranga-park",
    name: "Kaziranga National Park",
    location: "Golaghat, Assam",
    region: "Northeast India",
    category: "Wildlife Sanctuary",
    tagline: "Haven of the Greater One-Horned Rhinoceros",
    description: "A biodiversity hotspot in the Brahmaputra floodplain hosting two-thirds of the world's great one-horned rhinos, wild water buffaloes, and Royal Bengal tigers.",
    highlights: ["Morning elephant-back grassland safari", "Orchid biodiversity park", "Brahmaputra river dolphin spot"],
    bestTime: "November to April",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "konark-sun-temple",
    name: "Konark Sun Temple",
    location: "Puri, Odisha",
    region: "East India",
    category: "Architectural Marvel",
    tagline: "The Colossal Stone Chariot of Surya",
    description: "A 13th-century engineering triumph carved entirely from chlorite stone into the form of a gigantic chariot with 24 intricate sundial wheels pulled by seven horses.",
    highlights: ["Precision astronomical sundial wheels", "Intricate Kalinga erotic sculptures", "Chandrabhaga sea breeze"],
    bestTime: "October to March",
    image: "https://images.unsplash.com/photo-1628107083040-5a337190ca38?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "meghalaya-bridges",
    name: "Living Root Bridges & Waterfalls",
    location: "Cherrapunji, Meghalaya",
    region: "Northeast India",
    category: "Bio-Engineering Wonder",
    tagline: "Abode of Clouds & Living Arboreal Architecture",
    description: "Ancient bridges woven over generations from the living aerial roots of Ficus elastica trees by Khasi and Jaintia tribes over raging subtropical rivers.",
    highlights: ["Double Decker Living Root Bridge hike", "Nohkalikai plunge waterfall", "Mawsmai limestone caves"],
    bestTime: "October to May",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "andaman-islands",
    name: "Radhanagar & Havelock",
    location: "Havelock Island, Andaman",
    region: "South India",
    category: "Island Paradise",
    tagline: "Asia’s Crown Jewel Beach",
    description: "Powder-soft white sands curving against aquamarine waters and lush tropical rainforests, renowned as one of the world's most breathtaking beaches.",
    highlights: ["Bioluminescent night kayaking", "Elephant Beach coral snorkeling", "Sunset at Radhanagar"],
    bestTime: "October to May",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1000&q=80"
  }
];
