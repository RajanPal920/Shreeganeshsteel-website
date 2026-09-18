// ============================================
// MATERIALS DATA
// ============================================
export const materials = [
  {
    slug: "stainless-steel",
    name: "Stainless Steel",
    icon: "shield",
    number: "01",
    desc: "304, 316L, 321, 310S, 347, 904L",
    longDesc:
      "Premium austenitic, ferritic, and heat-resistant stainless steel grades for pressure vessels, chemical processing, and industrial applications.",
    grades: [
      "304",
      "304L",
      "316",
      "316L",
      "321",
      "321H",
      "310S",
      "347",
      "347H",
      "904L",
    ],
    accent: "#C8102E",
  },
  {
    slug: "nickel",
    name: "Nickel",
    icon: "flame",
    number: "02",
    desc: "Nickel 200/201, Inconel 600/625, 800",
    longDesc:
      "High-performance nickel alloys with excellent corrosion resistance at elevated temperatures.",
    grades: [
      "Nickel 200",
      "Nickel 201",
      "Inconel 600",
      "Inconel 625",
      "Incoloy 800",
      "Incoloy 825",
    ],
    accent: "#1E6FD9",
  },
  {
    slug: "high-alloys",
    name: "High Alloys",
    icon: "atom",
    number: "03",
    desc: "Hastelloy C22, Alloy 20, SMO 254",
    longDesc:
      "Super-austenitic and nickel-iron-chromium alloys for extreme corrosion environments.",
    grades: [
      "Hastelloy C22",
      "Hastelloy C276",
      "Alloy 20",
      "SMO 254",
      "254 SMO",
    ],
    accent: "#C8102E",
  },
  {
    slug: "duplex",
    name: "Duplex",
    icon: "zap",
    number: "04",
    desc: "UNS S31803 (2205), UNS S32205",
    longDesc:
      "Dual-phase austenitic-ferritic steels offering high strength and chloride stress corrosion resistance.",
    grades: ["UNS S31803", "UNS S32205", "2205", "LDX 2101"],
    accent: "#1E6FD9",
  },
  {
    slug: "super-duplex",
    name: "Super Duplex",
    icon: "anchor",
    number: "05",
    desc: "UNS S32750 (2507), UNS S32760",
    longDesc:
      "Ultra-high performance super duplex grades for aggressive subsea and chemical plant service.",
    grades: ["UNS S32750", "UNS S32760", "2507", "Zeron 100"],
    accent: "#C8102E",
  },
  {
    slug: "titanium",
    name: "Titanium",
    icon: "shield-check",
    number: "06",
    desc: "Grade 1, Grade 2, Grade 5 (Ti-6Al-4V)",
    longDesc:
      "Lightweight, high-strength titanium with exceptional corrosion immunity in seawater and chlorides.",
    grades: ["Grade 1", "Grade 2", "Grade 5", "Grade 7", "Grade 12"],
    accent: "#1E6FD9",
  },
  {
    slug: "alloys",
    name: "Alloys",
    icon: "layers",
    number: "07",
    desc: "Zirconium 702, Tantalum, Cu-Ni 70/30",
    longDesc:
      "Specialty alloys including zirconium, tantalum, and copper-nickel for specialized industrial applications.",
    grades: ["Zirconium 702", "Tantalum", "Cu-Ni 70/30", "Cu-Ni 90/10"],
    accent: "#C8102E",
  },
  {
    slug: "carbon",
    name: "Carbon",
    icon: "file",
    number: "08",
    desc: "ASTM A106 Gr B, A105, A333 Gr 6",
    longDesc:
      "Carbon steel grades for high-pressure hydrocarbons, steam generation, and industrial infrastructure.",
    grades: [
      "ASTM A106 Gr B",
      "ASTM A105",
      "ASTM A333 Gr 6",
      "ASTM A516 Gr 70",
    ],
    accent: "#1E6FD9",
  },
  {
    slug: "alloy-steel",
    name: "Alloy Steel",
    icon: "wrench",
    number: "09",
    desc: "ASTM A335 P5, P9, P11, P22, P91, F11",
    longDesc:
      "Chromium-molybdenum creep-resistant alloy steel for supercritical boilers and high-temperature service.",
    grades: ["ASTM A335 P5", "P9", "P11", "P22", "P91", "F11", "F22"],
    accent: "#C8102E",
  },
];

export const getMaterialBySlug = (slug) =>
  materials.find((m) => m.slug === slug);
