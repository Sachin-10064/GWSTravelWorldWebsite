export interface Experience {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  image: string;
  places: string[];
  durationHint: string;
  accent: string;
  buttonText: string;
}

export const EXPERIENCES: Experience[] = [
  {
    id: "advanture",
    title: "Scuba & Coral Reefs",
    subtitle: "High Himalayas, Ocean Depths & Wild Rapids",
    description: "Explore crystal-clear waters, vibrant coral reefs, and legendary dive spots across Havelock & Neil Islands.",
    tag: "High Altitude & Water Sports",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    places: ["Havelock Island", "Neil Island", "Zanskar Valley", "Rishikesh"],
    durationHint: "7 - 14 Days",
    accent: "#0284C7",
    buttonText: "EXPLORE NOW"
  },
  {
    id: "heritage-architecture",
    title: "Luxury Beach Resorts",
    subtitle: "Handpicked Eco-Resorts & Royal Architecture",
    description: "Handpicked eco-resorts & beachfront villas tailored for ultimate tropical luxury and heritage serenity.",
    tag: "Royal & Coastal Luxury",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",
    places: ["Havelock Beachfront", "Udaipur Palaces", "Goa Villas", "Kumarakom"],
    durationHint: "6 - 12 Days",
    accent: "#0284C7",
    buttonText: "BOOK STAY"
  },
  {
    id: "spiritual",
    title: "Island Heritage",
    subtitle: "Historic Ruins, Chants & Timeless Sacred Lands",
    description: "Uncover historic ruins and stories of Ross Island, Cellular Jail, and timeless sacred river ghats.",
    tag: "Sacred & Living Heritage",
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=800&q=80",
    places: ["Ross Island", "Cellular Jail", "Varanasi Ghats", "Rishikesh"],
    durationHint: "5 - 9 Days",
    accent: "#0284C7",
    buttonText: "DISCOVER"
  },
  {
    id: "beaches",
    title: "Pristine Beaches",
    subtitle: "Turquoise Lagoons & White Sands",
    description: "Relax on world-famous white sands of Radhanagar & Kalapathar, and secluded turquoise lagoons.",
    tag: "Tropical Sanctuaries",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    places: ["Radhanagar Beach", "Kalapathar", "Elephant Beach", "Palolem"],
    durationHint: "5 - 8 Days",
    accent: "#0284C7",
    buttonText: "EXPLORE"
  },
  {
    id: "wildlife-nature",
    title: "Active Outdoor & Water Sports",
    subtitle: "Tiger Safaris, Mangrove Kayaking & Deep Wilderness",
    description: "Sea walking, mangrove kayaking, bioluminescence tours, island trekking routes, and wild tiger safaris.",
    tag: "Protected Wilderness & Outdoors",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
    places: ["Havelock Kayaking", "Ranthambore", "Kaziranga", "Baratang Caves"],
    durationHint: "5 - 9 Days",
    accent: "#0284C7",
    buttonText: "VIEW TOURS"
  },
  {
    id: "culture-fastival-food",
    title: "Culture, Festivals & Culinary Trails",
    subtitle: "Living Colors, Vibrant Rhythms & Royal Spices",
    description: "Immerse yourself in Pushkar's desert camel fair, Bengal's Durga Puja beats, Nagaland Hornbill tribal dances, and royal Awadhi culinary masterclasses.",
    tag: "Living Traditions & Gastronomy",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    places: ["Pushkar Fair", "Old Delhi", "Lucknow", "Nagaland"],
    durationHint: "5 - 8 Days",
    accent: "#0284C7",
    buttonText: "EXPLORE CULTURE"
  }
];
