export interface Region {
  id: string;
  name: string;
  tagline: string;
  description: string;
}

export const REGIONS: Region[] = [
  {
    id: "all",
    name: "All India",
    tagline: "The Subcontinent in Full Glory",
    description: "From snow-crowned Himalayan crests to southern coconut shores, discover an ancient civilization of boundless wonder."
  },
  {
    id: "north",
    name: "North India",
    tagline: "Himalayas, Valleys & Royal Legacies",
    description: "Towering alpine passes of Ladakh and Himachal, spirituality along the sacred Ganges, and regal forts."
  },
  {
    id: "south",
    name: "South India",
    tagline: "Verdant Backwaters & Dravidian Temples",
    description: "Tranquil lagoons of Kerala, living stone temples of Tamil Nadu, lush coffee estates of Coorg, and tropical shores."
  },
  {
    id: "west",
    name: "West India",
    tagline: "Golden Deserts, Forts & Vibrant Coasts",
    description: "The Thar desert dunes of Jaisalmer, white salt expanses of Kutch, buzzing Mumbai, and Portuguese-tinted Goa."
  },
  {
    id: "east",
    name: "East India",
    tagline: "Cultural Renaissance & Sacred Riverbanks",
    description: "Colonial art and literature in Kolkata, ancient sun temples of Konark, and Bodh Gaya's timeless wisdom."
  },
  {
    id: "central",
    name: "Central India",
    tagline: "The Wild Heart & Ancient Sculptures",
    description: "Dense teak forests teeming with Bengal tigers, sculpted erotic poetry of Khajuraho, and historic river ghats of Narmada."
  },
  {
    id: "northeast",
    name: "Northeast India",
    tagline: "Living Root Bridges & Mist-Shrouded Hills",
    description: "Seven Sister states steeped in biodiversity, roaring Brahmaputra, cloud-grazing Cherrapunji, and tea gardens of Assam."
  }
];
