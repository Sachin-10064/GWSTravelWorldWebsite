export interface ActivityItem {
  icon: 'flight' | 'market' | 'food' | 'spa' | 'yacht' | 'sunset' | 'hiking' | 'hotel' | 'diving' | 'turtle' | 'cave' | 'ruins' | 'surf' | 'star';
  title?: string;
  description: string;
}

export interface DayItinerary {
  dayNumber: number;
  dayTitle: string;
  tags: string[];
  activities: ActivityItem[];
  images: {
    url: string;
    alt: string;
    caption?: string;
  }[];
}

export interface TripPackage {
  id: string;
  slug: string;
  duration: string;
  nightsCount: number;
  location: string;
  title: string;
  subtitle: string;
  description: string;
  rating: number;
  reviewsCount: number;
  image: string;
  heroImages: string[];
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: DayItinerary[];
}

export const tripsData: TripPackage[] = [
  {
    id: "trip-1",
    slug: "emerald-paradise-escape",
    duration: "12 NIGHTS",
    nightsCount: 12,
    location: "HAVELOCK & NEIL ISLAND",
    title: "THE EMERALD PARADISE ESCAPE",
    subtitle: "Ultimate 12-Day Island & Lagoon Luxury Expedition",
    description:
      "Embark on a luxury 12-night odyssey featuring pristine white beaches, private yacht transfers, and exclusive coral reef diving in Havelock & Neil Island.",
    rating: 4.95,
    reviewsCount: 128,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85",
    heroImages: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1200&q=85"
    ],
    highlights: [
      "Private catamaran transfers between Port Blair, Havelock & Neil Island",
      "Luxury overwater/beachfront villa stay with private decks",
      "PADI certified private coral reef scuba diving session",
      "Sunset champagne yacht charter along Radhanagar coast",
      "Bioluminescent kayaking experience under star-lit skies"
    ],
    inclusions: [
      "All luxury resort accommodations (12 nights)",
      "Daily gourmet buffet breakfast and chef-curated private dinners",
      "Inter-island speed ferry & private AC vehicle transfers",
      "Scuba diving equipment & certified instructor fee",
      "All island entry permits & environmental clearings"
    ],
    exclusions: [
      "Flight tickets to/from Port Blair (IXZ)",
      "Personal shopping & alcohol unless specified in itinerary",
      "Travel insurance coverage"
    ],
    itinerary: [
      {
        dayNumber: 1,
        dayTitle: "Arrival & Artisan Discovery",
        tags: ["CULTURE", "LEISURE"],
        activities: [
          {
            icon: "flight",
            description: "Morning arrival at Port Blair. Private transfer to your luxury overwater villa. Settle in and enjoy a curated tropical breakfast on your private deck."
          },
          {
            icon: "market",
            description: "Afternoon guided exploration of local artisan markets. Discover handwoven Andamanese textiles and traditional mother-of-pearl crafts."
          },
          {
            icon: "food",
            description: "Evening welcome dinner featuring regional seafood specialties prepared by our executive chef."
          }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=85", alt: "Overwater villa balcony" },
          { url: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=600&q=85", alt: "Artisan crafts" },
          { url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=85", alt: "Tropical beach" }
        ]
      },
      {
        dayNumber: 2,
        dayTitle: "Wellness & Golden Hours",
        tags: ["RELAXATION", "ROMANCE"],
        activities: [
          {
            icon: "spa",
            description: "Begin the day with a restorative signature spa treatment using indigenous botanical ingredients in our open-air pavilion."
          },
          {
            icon: "yacht",
            description: "Late afternoon private yacht charter. Cruise the coastline while sipping craft cocktails as the sun sets over the horizon."
          },
          {
            icon: "sunset",
            description: "Return for an exclusive private beach dinner under the stars, a truly unforgettable gastronomic experience."
          }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=85", alt: "Spa pavilion" },
          { url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=85", alt: "Sunset Yacht Cruise" },
          { url: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=600&q=85", alt: "Island shoreline" }
        ]
      },
      {
        dayNumber: 3,
        dayTitle: "Coastal Heights & Coral Reefs",
        tags: ["ADVENTURE", "NATURE"],
        activities: [
          {
            icon: "hiking",
            description: "An invigorating morning hike to Mount Harriet's peak, offering panoramic views of the entire archipelago at sunrise."
          },
          {
            icon: "diving",
            description: "Afternoon private coral reef dive at Elephant Beach. Encounter sea turtles, clownfish, and vibrant staghorn coral gardens."
          },
          {
            icon: "hotel",
            description: "Return to your villa for a night of relaxation, enjoying the ocean breeze from your expansive private balcony."
          }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=85", alt: "Panoramic coastal view" },
          { url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=85", alt: "Oceanfront bedroom" },
          { url: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=600&q=85", alt: "Coral dive" }
        ]
      },
      {
        dayNumber: 4,
        dayTitle: "Havelock Island Luxury Cruise",
        tags: ["CRUISE", "ISLAND HOPPING"],
        activities: [
          {
            icon: "yacht",
            description: "Morning private catamaran transfer to Havelock Island (Swaraj Dweep). Settle into your beachfront canopy villa."
          },
          {
            icon: "food",
            description: "Enjoy a fresh coconut seafood lunch at Radhanagar Beach shore."
          },
          {
            icon: "sunset",
            description: "Dusk stroll along the famous white sands of Radhanagar Beach, watching rays of gold reflect on calm waters."
          }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=85", alt: "Radhanagar Sands" },
          { url: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=600&q=85", alt: "Beachfront Villa" }
        ]
      },
      {
        dayNumber: 5,
        dayTitle: "Deep Sea Diving & Turtle Bay",
        tags: ["DIVING", "WILDLIFE"],
        activities: [
          {
            icon: "diving",
            description: "Guided boat excursion to Aquarium Reef for an immersive 2-hour deep sea scuba dive with certified master divers."
          },
          {
            icon: "turtle",
            description: "Snorkel alongside gentle green sea turtles in the shallow warm waters of Turtle Bay."
          },
          {
            icon: "star",
            description: "Night bioluminescence sea kayaking tour through calm mangrove estuaries under glowing constellations."
          }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=800&q=85", alt: "Aquarium reef diving" },
          { url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=85", alt: "Bioluminescence night" }
        ]
      },
      {
        dayNumber: 6,
        dayTitle: "Elephant Beach Watersports & Rainforest Trek",
        tags: ["SPORTS", "TREKKING"],
        activities: [
          {
            icon: "hiking",
            description: "Trek through the lush tropical rainforest trail leading directly down to Elephant Beach."
          },
          {
            icon: "surf",
            description: "Experience high-speed jet skiing, sea walking, and banana boat rides along the protected coral cove."
          },
          {
            icon: "food",
            description: "Private beachside barbecue lunch served with fresh chilled tropical fruits."
          }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=85", alt: "Elephant beach cove" },
          { url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=85", alt: "Beach BBQ" }
        ]
      },
      {
        dayNumber: 7,
        dayTitle: "Neil Island Transition & Howrah Bridge",
        tags: ["GEOLOGY", "EXPLORATION"],
        activities: [
          {
            icon: "yacht",
            description: "Savor breakfast before boarding a speed ferry to Neil Island (Shaheed Dweep)."
          },
          {
            icon: "ruins",
            description: "Guided tour to the natural rock formation known as Howrah Bridge during low tide."
          },
          {
            icon: "hotel",
            description: "Check into Neil's premiere eco-luxury coconut grove resort."
          }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=800&q=85", alt: "Howrah Natural Bridge" },
          { url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=85", alt: "Neil Island resort" }
        ]
      },
      {
        dayNumber: 8,
        dayTitle: "Laxmanpur Sunset & Coral Garden Snorkeling",
        tags: ["CORAL", "SUNSET"],
        activities: [
          {
            icon: "diving",
            description: "Morning snorkel session at Bharatpur Beach, exploring shallow coral reefs teeming with colorful parrotfish."
          },
          {
            icon: "sunset",
            description: "Witness the legendary horizon glow at Laxmanpur Beach sunset point."
          },
          {
            icon: "food",
            description: "Candle-lit dinner at an organic farm-to-table seaside kitchen."
          }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=85", alt: "Laxmanpur Beach sunset" },
          { url: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=600&q=85", alt: "Bharatpur Reef" }
        ]
      },
      {
        dayNumber: 9,
        dayTitle: "Private Lagoon Kayaking & Beach Day",
        tags: ["KAYAKING", "LEISURE"],
        activities: [
          {
            icon: "surf",
            description: "Morning glass-bottom kayak excursion along Neil Island's tranquil turquoise lagoon."
          },
          {
            icon: "spa",
            description: "Afternoon outdoor herbal foot massage and aromatherapy relaxation."
          },
          {
            icon: "star",
            description: "Stargazing and bonfire acoustic music night on Sitapur Beach."
          }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=85", alt: "Sitapur beach night" },
          { url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=85", alt: "Lagoon kayaking" }
        ]
      },
      {
        dayNumber: 10,
        dayTitle: "Return to Port Blair & Chidiyatapu Sunset",
        tags: ["HERITAGE", "BIRDING"],
        activities: [
          {
            icon: "yacht",
            description: "Return ferry ride to Port Blair. Check into your heritage suite overlooking the bay."
          },
          {
            icon: "hiking",
            description: "Drive to Chidiyatapu (Bird Island) for a nature walk through coastal reserve forests."
          },
          {
            icon: "sunset",
            description: "Capture stunning photography as the sun dips behind distant volcanic peaks."
          }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=85", alt: "Chidiyatapu sunset" },
          { url: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=600&q=85", alt: "Port Blair suite" }
        ]
      },
      {
        dayNumber: 11,
        dayTitle: "Ross Island Heritage Walk & Gala Night",
        tags: ["HISTORY", "CELEBRATION"],
        activities: [
          {
            icon: "ruins",
            description: "Private speed-boat excursion to Ross Island. Explore overgrown 19th-century British ruins and peacock sanctuaries."
          },
          {
            icon: "market",
            description: "Souvenir shopping at Sagarika Govt Emporium for authentic shell jewelry and wood carvings."
          },
          {
            icon: "food",
            description: "Exclusive 5-course farewell gala dinner on a private harbor boat with live island music."
          }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=800&q=85", alt: "Ross Island Ruins" },
          { url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=85", alt: "Farewell Gala Dinner" }
        ]
      },
      {
        dayNumber: 12,
        dayTitle: "Sunrise Breakfast & Airport Transfer",
        tags: ["DEPARTURE", "MEMORIES"],
        activities: [
          {
            icon: "food",
            description: "Sunrise chef breakfast served on the ocean deck with panoramic harbor views."
          },
          {
            icon: "flight",
            description: "Private VIP transfer to Veer Savarkar International Airport (IXZ) for your homeward flight."
          }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=85", alt: "Sunrise ocean deck" },
          { url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=85", alt: "Farewell island vista" }
        ]
      }
    ]
  },
  {
    id: "trip-2",
    slug: "rhythm-of-wild-water",
    duration: "8 NIGHTS",
    nightsCount: 8,
    location: "BARATANG & MAYABUNDER",
    title: "THE RHYTHM OF WILD WATER",
    subtitle: "Expedition into Ancient Caves & Mangrove Forests",
    description:
      "Navigate dense mangrove creeks, ancient limestone caves, and undiscovered bioluminescent bays under star-lit skies.",
    rating: 4.88,
    reviewsCount: 94,
    image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1200&q=85",
    heroImages: [
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=1200&q=85"
    ],
    highlights: [
      "Speedboat safari through dense green mangrove tunnel channels",
      "Guided trek into million-year-old Baratang Limestone Caves",
      "Witness natural Mud Volcanoes of North Andaman",
      "Night kayaker experience in glowing bioluminescent waters",
      "Stay in eco-luxury forest lodges surrounded by wildlife"
    ],
    inclusions: [
      "All eco-lodge accommodations for 8 nights",
      "Permits for Tribal Reserve sanctuary buffer zones",
      "Private boat safaris & local naturalists",
      "All meals (breakfast, packed expedition lunches, dinner)"
    ],
    exclusions: [
      "Personal camera fees at specific reserves",
      "Alcoholic beverages"
    ],
    itinerary: [
      {
        dayNumber: 1,
        dayTitle: "Mangrove Safari & Arrival",
        tags: ["NATURE", "EXPEDITION"],
        activities: [
          {
            icon: "yacht",
            description: "Early morning transfer to Baratang Jetty. Board high-speed boats weaving through dense mangrove channels."
          },
          {
            icon: "cave",
            description: "Guided 1.5 km boardwalk trek into the breathtaking Baratang Limestone Caves with stalactite formations."
          },
          {
            icon: "hotel",
            description: "Check-in at forest canopy eco-resort. Evening campfire with authentic island folk acoustic music."
          }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=800&q=85", alt: "Mangrove creek water safari" },
          { url: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=600&q=85", alt: "Limestone cave detail" },
          { url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=85", alt: "Forest eco resort" }
        ]
      },
      {
        dayNumber: 2,
        dayTitle: "Mud Volcanoes & Bioluminescence",
        tags: ["GEOLOGY", "NIGHT SAFARI"],
        activities: [
          {
            icon: "hiking",
            description: "Morning Jeep drive through Jarawa reserve buffer zone to view rare natural Mud Volcanoes."
          },
          {
            icon: "turtle",
            description: "Afternoon visit to Avis Island secluded sandbars, observing hermit crabs and wild sea birds."
          },
          {
            icon: "star",
            description: "Night kayak expedition across Mayabunder bay, watching the ocean light up with bright blue bioluminescence."
          }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=85", alt: "Mayabunder bay waters" },
          { url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=85", alt: "Starry night bay view" }
        ]
      },
      {
        dayNumber: 3,
        dayTitle: "Rangat Mangrove Walk & Cutbert Bay",
        tags: ["TREK", "ECO TOUR"],
        activities: [
          {
            icon: "hiking",
            description: "Walk the Dhaninalla Mangrove Nature Walkway, the longest wooden boardwalk trail in India."
          },
          {
            icon: "turtle",
            description: "Visit Cutbert Bay turtle sanctuary and learn about wildlife conservation efforts."
          },
          {
            icon: "food",
            description: "Organic forest lunch served in bamboo huts."
          }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=85", alt: "Dhaninalla Boardwalk" },
          { url: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=600&q=85", alt: "Cutbert Bay Beach" }
        ]
      },
      {
        dayNumber: 4,
        dayTitle: "Mayabunder & Karamatang Beach",
        tags: ["BEACH", "RELAXATION"],
        activities: [
          {
            icon: "hotel",
            description: "Check in at Mayabunder beachfront wooden chalets surrounded by coconut trees."
          },
          {
            icon: "sunset",
            description: "Unwind at Karamatang Beach, famous for its calm waters and turtle nesting sands."
          },
          {
            icon: "food",
            description: "Traditional tribal meal cooked in fresh banana leaf wraps."
          }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=800&q=85", alt: "Karamatang Shore" },
          { url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=85", alt: "Mayabunder Chalets" }
        ]
      },
      {
        dayNumber: 5,
        dayTitle: "Diglipur & Kalipur Coral Reefs",
        tags: ["CORAL", "DIVING"],
        activities: [
          {
            icon: "yacht",
            description: "Drive north to Diglipur. Boat ride to Craggy Island for snorkeling in shallow coral lagoons."
          },
          {
            icon: "diving",
            description: "Explore underwater sea caves filled with vibrant clownfish colonies."
          },
          {
            icon: "star",
            description: "Night campfire on Kalipur beach watching clear constellation patterns."
          }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=85", alt: "Craggy Island Reefs" },
          { url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=85", alt: "Diglipur Lagoon" }
        ]
      },
      {
        dayNumber: 6,
        dayTitle: "Ross & Smith Twin Island Sandbar",
        tags: ["ISLAND HOPPING", "BEACH"],
        activities: [
          {
            icon: "yacht",
            description: "Private speed boat to Ross & Smith Twin Islands."
          },
          {
            icon: "hiking",
            description: "Walk across the natural white sandbar connecting the two virgin islands."
          },
          {
            icon: "sunset",
            description: "Sunset photography along the narrow sand bar strip."
          }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=85", alt: "Ross & Smith Sandbar" },
          { url: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=600&q=85", alt: "Twin Island waters" }
        ]
      },
      {
        dayNumber: 7,
        dayTitle: "Jungle Creek Kayaking & Eco Lodge",
        tags: ["KAYAKING", "WILDLIFE"],
        activities: [
          {
            icon: "surf",
            description: "Early morning kayak safari through narrow river streams inside Kalighat creek."
          },
          {
            icon: "spa",
            description: "Afternoon herbal steam bath and rejuvenation at eco lodge."
          },
          {
            icon: "food",
            description: "Expedition celebration dinner featuring regional forest spices."
          }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=800&q=85", alt: "Jungle kayak stream" },
          { url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=85", alt: "Eco lodge retreat" }
        ]
      },
      {
        dayNumber: 8,
        dayTitle: "Return Journey to Port Blair",
        tags: ["DEPARTURE", "TRANSIT"],
        activities: [
          {
            icon: "flight",
            description: "Morning scenic drive through North-South Andaman trunk road."
          },
          {
            icon: "food",
            description: "Farewell lunch at Port Blair before airport transfer for your departure flight."
          }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=85", alt: "Scenic island road" },
          { url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=85", alt: "Port Blair farewell" }
        ]
      }
    ]
  },
  {
    id: "trip-3",
    slug: "highlights-of-andaman-luxury",
    duration: "9 NIGHTS",
    nightsCount: 9,
    location: "PORT BLAIR & RADHANAGAR",
    title: "HIGHLIGHTS OF ANDAMAN LUXURY",
    subtitle: "A Curated Heritage & World-Class Beach Resort Escape",
    description:
      "A curated journey across colonial heritage, world-class beach resorts in Havelock, and sunset cruises off Chidiyatapu.",
    rating: 4.92,
    reviewsCount: 156,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
    heroImages: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85"
    ],
    highlights: [
      "Exclusive Light & Sound Show VIP seating at Cellular Jail",
      "Stay at Taj Exotica / Barefoot luxury resort on Radhanagar Beach",
      "Private sundowner sessions at Chidiyatapu Sunset Point",
      "Glass bottom boat tour to Jolly Buoy Island Marine National Park"
    ],
    inclusions: [
      "9 nights luxury stay at 5-star beachfront resorts",
      "Private luxury sedan transport for all land transfers",
      "Fast catamaran tickets (Makruzz / Nautika)",
      "Daily breakfast & dinner curated menus"
    ],
    exclusions: [
      "Personal expenses & tipping",
      "Optional helicopter joyrides"
    ],
    itinerary: [
      {
        dayNumber: 1,
        dayTitle: "Colonial Heritage & Sound of Freedom",
        tags: ["HERITAGE", "LUXURY"],
        activities: [
          {
            icon: "ruins",
            description: "Morning arrival at Port Blair. Tour the historic Cellular Jail monument with a private historian."
          },
          {
            icon: "food",
            description: "High tea at Fortune Resort Bayview overlooking Port Blair harbor."
          },
          {
            icon: "star",
            description: "VIP access to the poignant Light & Sound show narrating India's freedom struggle."
          }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=85", alt: "Port Blair Harbor" },
          { url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=85", alt: "Resort tea lounge" }
        ]
      },
      {
        dayNumber: 2,
        dayTitle: "Radhanagar World Class Sands",
        tags: ["BEACH", "RELAXATION"],
        activities: [
          {
            icon: "yacht",
            description: "Board luxury Makruzz catamaran to Havelock Island (Beach No. 7)."
          },
          {
            icon: "hotel",
            description: "Check-in at Taj Exotica Resort & Spa set in 46 acres of lush rainforest."
          },
          {
            icon: "sunset",
            description: "Sunset barefoot walk along Radhanagar Beach, rated Asia's Best Beach."
          }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=85", alt: "Radhanagar Beach sunset" },
          { url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=85", alt: "Taj Exotica Villa Pool" }
        ]
      },
      {
        dayNumber: 3,
        dayTitle: "Elephant Beach Reef Snorkeling",
        tags: ["DIVING", "WATERSPORTS"],
        activities: [
          {
            icon: "diving",
            description: "Private speed boat ride to Elephant Beach for coral reef snorkeling."
          },
          {
            icon: "spa",
            description: "Afternoon couples spa treatment at Jiva Spa in Taj Exotica."
          },
          {
            icon: "food",
            description: "Candle-lit seafood buffet under canopy palms."
          }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=800&q=85", alt: "Elephant Beach reef" },
          { url: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=600&q=85", alt: "Beachfront dining" }
        ]
      },
      {
        dayNumber: 4,
        dayTitle: "Kalapathar Beach & Stargazing",
        tags: ["PHOTOGRAPHY", "STARGAZING"],
        activities: [
          {
            icon: "hiking",
            description: "Sunrise photo walk along Kalapathar black rock coast."
          },
          {
            icon: "surf",
            description: "Afternoon paddleboarding in calm turquoise lagoon waters."
          },
          {
            icon: "star",
            description: "Stargazing experience with private telescope setup on resort beach."
          }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=85", alt: "Kalapathar black rocks" },
          { url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=85", alt: "Stargazing setup" }
        ]
      },
      {
        dayNumber: 5,
        dayTitle: "Neil Island Eco Luxury Retreat",
        tags: ["ISLAND", "TRANQUILITY"],
        activities: [
          {
            icon: "yacht",
            description: "Luxury ferry transfer to Neil Island. Check into Samudra luxury villa."
          },
          {
            icon: "ruins",
            description: "Visit Howrah Natural Bridge rock archway during low tide."
          },
          {
            icon: "sunset",
            description: "Sunset cocktails at Laxmanpur Beach sunset point."
          }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=85", alt: "Neil Island Samudra Villa" },
          { url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=85", alt: "Howrah Arch" }
        ]
      },
      {
        dayNumber: 6,
        dayTitle: "Bharatpur Reef & Glass Bottom Boat",
        tags: ["CORAL", "FAMILY"],
        activities: [
          {
            icon: "diving",
            description: "Glass bottom boat tour over Bharatpur's delicate coral reef gardens."
          },
          {
            icon: "food",
            description: "Tropical fruit tasting & fresh coconut water on beach."
          },
          {
            icon: "hotel",
            description: "Relaxing evening by the infinity pool overlooking the Andaman Sea."
          }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=800&q=85", alt: "Bharatpur Reef" },
          { url: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=600&q=85", alt: "Infinity Pool Villa" }
        ]
      },
      {
        dayNumber: 7,
        dayTitle: "Jolly Buoy Island Marine National Park",
        tags: ["MARINE PARK", "PROTECTED REEF"],
        activities: [
          {
            icon: "yacht",
            description: "Ferry transfer to Mahatma Gandhi Marine National Park at Jolly Buoy."
          },
          {
            icon: "turtle",
            description: "Snorkel in ultra-clear sanctuary waters surrounded by giant corals."
          },
          {
            icon: "food",
            description: "Eco-friendly picnic lunch packed in biodegradable leaves."
          }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=85", alt: "Jolly Buoy Lagoon" },
          { url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=85", alt: "Coral Marine Reserve" }
        ]
      },
      {
        dayNumber: 8,
        dayTitle: "Chidiyatapu Sunset & Bird Sanctuary",
        tags: ["SUNSET", "WILDLIFE"],
        activities: [
          {
            icon: "hiking",
            description: "Nature trek through Chidiyatapu Biological Park."
          },
          {
            icon: "sunset",
            description: "Watch golden hour colors at Chidiyatapu's famous ocean viewpoint."
          },
          {
            icon: "food",
            description: "Luxury seafood dinner at Sea Shell Resort."
          }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=85", alt: "Chidiyatapu sunset point" },
          { url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=85", alt: "Sea Shell Resort dinner" }
        ]
      },
      {
        dayNumber: 9,
        dayTitle: "Souvenir Shopping & Homeward Bound",
        tags: ["SHOPPING", "DEPARTURE"],
        activities: [
          {
            icon: "market",
            description: "Morning artisan shopping for pearl jewelry at Sagarika."
          },
          {
            icon: "flight",
            description: "Private chauffeur transfer to Port Blair airport for departure."
          }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=800&q=85", alt: "Port Blair souvenir emporium" },
          { url: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=600&q=85", alt: "Airport transfer view" }
        ]
      }
    ]
  },
  {
    id: "trip-4",
    slug: "heritage-underwater-trails",
    duration: "5 NIGHTS",
    nightsCount: 5,
    location: "ROSS & NORTH BAY",
    title: "HERITAGE & UNDERWATER TRAILS",
    subtitle: "Historical Island Ruins & Undersea Walking Wonders",
    description:
      "Discover historical ruins wrapped in tropical jungle, followed by ocean bottom walks and glass-bottom submarine tours.",
    rating: 4.82,
    reviewsCount: 79,
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=1200&q=85",
    heroImages: [
      "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1200&q=85"
    ],
    highlights: [
      "Ross Island (Netaji Subhash Chandra Bose Dweep) colonial ruins tour",
      "SeaWalk experience on the ocean floor surrounded by friendly reef fish",
      "Semi-submarine coral reef viewing boat excursion",
      "Friendly spotted deer and peacock encounters on Ross Island"
    ],
    inclusions: [
      "5 nights 4-star boutique hotel stay",
      "SeaWalk experience ticket & video footage",
      "Ferries & entry tickets to Ross & North Bay",
      "Daily breakfast & lunch"
    ],
    exclusions: [
      "Personal photoshoots",
      "Extreme watersports like jet ski optional add-ons"
    ],
    itinerary: [
      {
        dayNumber: 1,
        dayTitle: "Ross Island Ruins & Wildlife Walk",
        tags: ["HISTORY", "WILDLIFE"],
        activities: [
          {
            icon: "yacht",
            description: "Short 15-minute boat ride from Aberdeen Jetty to Ross Island."
          },
          {
            icon: "ruins",
            description: "Explore British colonial ruins overgrown with giant banyan tree roots, bakery, church, and ballroom."
          },
          {
            icon: "turtle",
            description: "Spot wild tame deer and peacocks roaming freely through historical sanctuaries."
          }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=800&q=85", alt: "Ross Island ruins" },
          { url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=85", alt: "Ross island lighthouse" }
        ]
      },
      {
        dayNumber: 2,
        dayTitle: "North Bay SeaWalk & Reef Wonders",
        tags: ["DIVING", "ADVENTURE"],
        activities: [
          {
            icon: "diving",
            description: "Undersea Walking session with specialized diving helmet on North Bay's vibrant coral seabed."
          },
          {
            icon: "yacht",
            description: "Ride the Coral Safari semi-submarine with underwater glass viewing chambers."
          },
          {
            icon: "food",
            description: "Beachside seafood BBQ lunch on North Bay shore."
          }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=85", alt: "SeaWalk underwater coral" },
          { url: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=600&q=85", alt: "North Bay lighthouse" }
        ]
      },
      {
        dayNumber: 3,
        dayTitle: "Corbyn's Cove Watersports & Sunset",
        tags: ["BEACH", "SPORTS"],
        activities: [
          {
            icon: "surf",
            description: "Thrilling jet ski and speed boat rides at Corbyn's Cove Beach."
          },
          {
            icon: "sunset",
            description: "Relax under swaying coconut palms watching the waves hit the curved bay."
          },
          {
            icon: "food",
            description: "Dinner at Waves Restaurant with live acoustic guitar performance."
          }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=85", alt: "Corbyn's Cove Beach" },
          { url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=85", alt: "Jet ski watersports" }
        ]
      },
      {
        dayNumber: 4,
        dayTitle: "Chidiyatapu Sunset & Trail Trek",
        tags: ["TREKKING", "SUNSET"],
        activities: [
          {
            icon: "hiking",
            description: "Trek through lush green forests down to Munda Pahad beach."
          },
          {
            icon: "sunset",
            description: "Panoramic sunset view over the southern tip of South Andaman."
          },
          {
            icon: "star",
            description: "Night stargazing along the quiet coastal highway."
          }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=85", alt: "Munda Pahad beach" },
          { url: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=600&q=85", alt: "Chidiyatapu sunset" }
        ]
      },
      {
        dayNumber: 5,
        dayTitle: "Anthropological Museum & Departure",
        tags: ["HERITAGE", "DEPARTURE"],
        activities: [
          {
            icon: "ruins",
            description: "Visit Anthropological Museum detailing indigenous Andamanese tribal history."
          },
          {
            icon: "flight",
            description: "Transfer to Port Blair airport for your homeward journey."
          }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=800&q=85", alt: "Museum heritage" },
          { url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=85", alt: "Port Blair departure" }
        ]
      }
    ]
  },
  {
    id: "trip-5",
    slug: "untouched-isles-expedition",
    duration: "7 NIGHTS",
    nightsCount: 7,
    location: "LITTLE ANDAMAN & DIGLIPUR",
    title: "UNTOUCHED ISLES EXPEDITION",
    subtitle: "Remote Island Surfing, Waterfalls & Turtle Nesting",
    description:
      "Trek to Twin Islands, witness sea turtle nesting grounds, and surf legendary breaks in remote coastal paradises.",
    rating: 4.90,
    reviewsCount: 64,
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85",
    heroImages: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85"
    ],
    highlights: [
      "Trek to Saddle Peak, highest point of Andaman Islands",
      "Witness Olive Ridley turtle nesting at Kalipur & Ramnagar beaches",
      "Explore White Surf & Whisper Wave waterfalls in Little Andaman",
      "Walk the natural sandbar connecting Ross & Smith Islands"
    ],
    inclusions: [
      "7 nights island cottage stays",
      "Govt permits & wildlife ranger guides",
      "Inter-island ship/ferry transfers",
      "All meals & trekking gear"
    ],
    exclusions: [
      "Surfing gear rental (available on request)",
      "Personal items"
    ],
    itinerary: [
      {
        dayNumber: 1,
        dayTitle: "Smith & Ross Twin Island Sandbar Walk",
        tags: ["EXPEDITION", "BEACH"],
        activities: [
          {
            icon: "yacht",
            description: "Early morning speed boat from Diglipur to Ross & Smith Twin Islands."
          },
          {
            icon: "hiking",
            description: "Walk across the natural white sandbar that emerges during low tide connecting the two islands."
          },
          {
            icon: "diving",
            description: "Snorkel in crystal turquoise lagoon waters along untouched coral gardens."
          }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=85", alt: "Ross and Smith sandbar" },
          { url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=85", alt: "Turquoise lagoon waters" }
        ]
      },
      {
        dayNumber: 2,
        dayTitle: "Waterfalls & Sea Turtle Nesting Night",
        tags: ["WILDLIFE", "ECO TOUR"],
        activities: [
          {
            icon: "hiking",
            description: "Jungle trek through lush tropical canopy to White Surf waterfall."
          },
          {
            icon: "turtle",
            description: "Night vigil with wildlife forest officers at Kalipur Beach to witness rare Olive Ridley sea turtles laying eggs."
          },
          {
            icon: "star",
            description: "Beach bonfire and dinner under pristine dark night skies."
          }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=800&q=85", alt: "Waterfalls in rainforest" },
          { url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=85", alt: "Kalipur beach night" }
        ]
      },
      {
        dayNumber: 3,
        dayTitle: "Saddle Peak National Park Trek",
        tags: ["MOUNTAIN", "TREKKING"],
        activities: [
          {
            icon: "hiking",
            description: "Ascend Saddle Peak (732m), the highest mountain in the Andaman archipelago, surrounded by endemic tropical fauna."
          },
          {
            icon: "food",
            description: "Summit picnic lunch overlooking the endless Bay of Bengal."
          },
          {
            icon: "hotel",
            description: "Overnight stay in seaside bamboo eco-cabins."
          }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=800&q=85", alt: "Saddle Peak rainforest" },
          { url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=85", alt: "Summit ocean view" }
        ]
      },
      {
        dayNumber: 4,
        dayTitle: "Little Andaman Butler Bay Surfing",
        tags: ["SURFING", "ADVENTURE"],
        activities: [
          {
            icon: "surf",
            description: "Catch world-class surf waves at Butler Bay in Little Andaman."
          },
          {
            icon: "turtle",
            description: "Visit Netaji Nagar beach to spot nesting leatherback turtles."
          },
          {
            icon: "sunset",
            description: "Sunset campfire with local surf guides."
          }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=85", alt: "Butler Bay surf break" },
          { url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=85", alt: "Little Andaman beach" }
        ]
      },
      {
        dayNumber: 5,
        dayTitle: "Whisper Wave Waterfalls & Elephant Safari",
        tags: ["WATERFALLS", "EXPEDITION"],
        activities: [
          {
            icon: "hiking",
            description: "Trek through deep interior rainforests to Whisper Wave dual waterfalls."
          },
          {
            icon: "diving",
            description: "Swim in natural freshwater jungle pools fed by mountain streams."
          },
          {
            icon: "food",
            description: "Fresh forest fruit picnic."
          }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=800&q=85", alt: "Whisper Wave waterfall pool" },
          { url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=85", alt: "Jungle freshwater stream" }
        ]
      },
      {
        dayNumber: 6,
        dayTitle: "Red Skin Island Coral Gardens",
        tags: ["CORAL", "SNORKELING"],
        activities: [
          {
            icon: "yacht",
            description: "Boat excursion to Red Skin Island inside the marine sanctuary."
          },
          {
            icon: "diving",
            description: "Snorkel across pristine shallow coral reef flats filled with red organ-pipe coral."
          },
          {
            icon: "sunset",
            description: "Dusk relaxation on pristine uncrowded beaches."
          }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=800&q=85", alt: "Red Skin Island Reef" },
          { url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=85", alt: "Marine sanctuary cove" }
        ]
      },
      {
        dayNumber: 7,
        dayTitle: "Homeward Cruise & Farewell",
        tags: ["TRANSIT", "DEPARTURE"],
        activities: [
          {
            icon: "yacht",
            description: "Scenic ferry voyage returning back to Port Blair harbor."
          },
          {
            icon: "flight",
            description: "VIP transfer to Port Blair airport for homeward flights."
          }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=85", alt: "Return ferry seascape" },
          { url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=85", alt: "Port Blair farewell" }
        ]
      }
    ]
  },
  {
    id: "trip-6",
    slug: "celestial-sea-luxury-villas",
    duration: "6 NIGHTS",
    nightsCount: 6,
    location: "KALAPATHAR & ELEPHANT BEACH",
    title: "CELESTIAL SEA & LUXURY VILLAS",
    subtitle: "Beachfront Villa Bliss & Stargazing Marine Safaris",
    description:
      "Private beachfront villa stays with dusk stargazing sessions, private dining, and guided marine biology dives.",
    rating: 4.96,
    reviewsCount: 112,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=85",
    heroImages: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85"
    ],
    highlights: [
      "Private pool villa at Kalapathar black-rock beach front",
      "Astro-photography guided stargazing session with telescope",
      "Private marine biologist guided night snorkel session",
      "Romantic candle-light 5-course dinner directly on the beach"
    ],
    inclusions: [
      "6 nights private pool luxury villa",
      "Private butler service",
      "Telescope night stargazing experience",
      "All meals & private transfers"
    ],
    exclusions: [
      "Airfare",
      "Personal shopping"
    ],
    itinerary: [
      {
        dayNumber: 1,
        dayTitle: "Kalapathar Black Rocks & Sunset Serenity",
        tags: ["ROMANCE", "LUXURY"],
        activities: [
          {
            icon: "hotel",
            description: "Private check-in at Kalapathar Luxury Beachfront Pool Villa with ocean views."
          },
          {
            icon: "sunset",
            description: "Stroll along Kalapathar Beach with turquoise waters contrasting against jet-black volcanic rocks."
          },
          {
            icon: "food",
            description: "Beachside candle-lit seafood dining with private chef."
          }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=85", alt: "Kalapathar luxury villa beach view" },
          { url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=85", alt: "Romantic sunset beach dinner" }
        ]
      },
      {
        dayNumber: 2,
        dayTitle: "Elephant Beach Snorkeling & Celestial Night",
        tags: ["STARGAZING", "MARINE"],
        activities: [
          {
            icon: "diving",
            description: "Speedboat ride to Elephant Beach for guided private snorkeling over reef drop-offs."
          },
          {
            icon: "spa",
            description: "Afternoon aromatherapy couple massage in open-air seaside pavilion."
          },
          {
            icon: "star",
            description: "Night high-powered telescope stargazing session led by an astronomer, viewing planets & milky way."
          }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=85", alt: "Elephant beach turquoise water" },
          { url: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=600&q=85", alt: "Milky way stargazing night" }
        ]
      },
      {
        dayNumber: 3,
        dayTitle: "Private Lagoon Kayaking & Floating Breakfast",
        tags: ["LUXURY", "WATER"],
        activities: [
          {
            icon: "food",
            description: "Floating gourmet breakfast served in your private villa infinity pool."
          },
          {
            icon: "surf",
            description: "Guided clear-bottom kayak journey through protected lagoon waters."
          },
          {
            icon: "sunset",
            description: "Sunset champagne tasting on resort sun deck."
          }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=85", alt: "Private pool floating breakfast" },
          { url: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=600&q=85", alt: "Clear bottom kayaking" }
        ]
      },
      {
        dayNumber: 4,
        dayTitle: "Bioluminescent Night Snorkeling Expedition",
        tags: ["BIOLUMINESCENCE", "NIGHT DIVE"],
        activities: [
          {
            icon: "diving",
            description: "Night bio-luminescent snorkeling led by marine biologist, glowing with marine plankton."
          },
          {
            icon: "spa",
            description: "Deep tissue massage treatment at jungle spa."
          },
          {
            icon: "food",
            description: "Private beach bonfire barbecue with lobster & grilled tiger prawns."
          }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=85", alt: "Night bioluminescent sea glow" },
          { url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=85", alt: "Private beach BBQ" }
        ]
      },
      {
        dayNumber: 5,
        dayTitle: "Radhanagar Sunset Yacht Cruise",
        tags: ["YACHT", "SUNSET"],
        activities: [
          {
            icon: "yacht",
            description: "Private luxury yacht charter along Radhanagar coastline."
          },
          {
            icon: "sunset",
            description: "Sunset cocktails on yacht deck with live saxophonist performance."
          },
          {
            icon: "food",
            description: "Chef's special 5-course dinner paired with fine wines."
          }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=85", alt: "Luxury yacht sunset deck" },
          { url: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=600&q=85", alt: "Gourmet wine dinner" }
        ]
      },
      {
        dayNumber: 6,
        dayTitle: "Villa Spa Checkout & Airport Departure",
        tags: ["SPA", "DEPARTURE"],
        activities: [
          {
            icon: "spa",
            description: "Morning seaside meditation and final holistic massage."
          },
          {
            icon: "flight",
            description: "Private luxury vehicle transfer to Port Blair airport for departure."
          }
        ],
        images: [
          { url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=85", alt: "Seaside meditation pavilion" },
          { url: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=600&q=85", alt: "Airport departure transfer" }
        ]
      }
    ]
  }
];

export function getTripById(id: string): TripPackage | undefined {
  return tripsData.find((trip) => trip.id === id || trip.slug === id);
}
