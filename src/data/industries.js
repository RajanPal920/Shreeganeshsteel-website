export const industries = [
  {
    id: 1,
    slug: "oil-gas",
    number: "01",
    category: "Energy",
    name: "Oil & Gas",
    shortDesc:
      "Steel products for demanding pipeline, process and infrastructure applications.",
    image: "/images/industries/oil-gas.jpg",
    longDesc:
      "Our products support upstream, midstream and downstream operations — from high-pressure transmission pipelines to refinery process equipment.",
    productCategories: [
      "Pipes",
      "Flanges",
      "Butt Weld Fittings",
      "Valves",
      "Bars",
    ],
    applications: [
      "Pipeline systems",
      "Process equipment",
      "Industrial infrastructure",
    ],
  },
  {
    id: 2,
    slug: "petrochemical",
    number: "02",
    category: "Process",
    name: "Petrochemical",
    shortDesc:
      "Corrosion-resistant materials engineered for chemical processing environments.",
    image: "/images/industries/petrochemical.jpg",
    longDesc:
      "Our stainless and duplex steel products are designed to withstand aggressive chemical environments in refineries and petrochemical plants.",
    productCategories: [
      "Pipes",
      "Flanges",
      "Forged Fittings",
      "Valves",
      "Bars",
    ],
    applications: [
      "Refinery piping",
      "Heat exchangers",
      "Storage & transfer systems",
    ],
  },
  {
    id: 3,
    slug: "chemical-processing",
    number: "03",
    category: "Process",
    name: "Chemical Processing",
    shortDesc:
      "Specialty steel products for chemical reactors, acid handling and process systems.",
    image: "/images/industries/chemical.jpg",
    longDesc:
      "Our duplex and stainless steel products are engineered for the aggressive environments found in chemical processing industries — from reactors to acid handling systems.",
    productCategories: [
      "Duplex Steel",
      "Pipes",
      "Flanges",
      "Valves",
      "Forged Fittings",
    ],
    applications: [
      "Chemical reactors",
      "Acid handling systems",
      "Process piping",
    ],
  },
  {
    id: 4,
    slug: "pharmaceutical",
    number: "04",
    category: "Precision",
    name: "Pharmaceutical",
    shortDesc:
      "High-purity steel components for hygienic and contamination-free processing.",
    image: "/images/industries/pharmaceutical.jpg",
    longDesc:
      "We supply precision stainless steel products for pharmaceutical manufacturing where material purity and surface finish are critical.",
    productCategories: [
      "Pipes & Tubes",
      "Flanges",
      "Forged Fittings",
      "Valves",
    ],
    applications: [
      "Process piping",
      "Clean utility systems",
      "Sanitary equipment",
    ],
  },
  {
    id: 5,
    slug: "marine-offshore",
    number: "05",
    category: "Marine",
    name: "Marine & Offshore",
    shortDesc:
      "Duplex and super duplex products for shipbuilding and offshore platforms.",
    image: "/images/industries/marine.jpg",
    longDesc:
      "Our marine-grade steel products offer superior corrosion resistance for the most demanding offshore and shipbuilding applications.",
    productCategories: [
      "Duplex Steel",
      "Pipes",
      "Flanges",
      "Butt Weld Fittings",
    ],
    applications: [
      "Offshore platforms",
      "Shipbuilding systems",
      "Seawater handling",
    ],
  },
  {
    id: 6,
    slug: "power-energy",
    number: "06",
    category: "Power",
    name: "Power & Energy",
    shortDesc:
      "Reliable steel components for thermal, nuclear and renewable power plants.",
    image: "/images/industries/power-energy.jpg",
    longDesc:
      "Our products are trusted in power generation environments where reliability and high-temperature performance are essential.",
    productCategories: [
      "Pipes & Tubes",
      "Flanges",
      "Butt Weld Fittings",
      "Bars",
    ],
    applications: [
      "Boiler & steam systems",
      "Turbine piping",
      "Cooling systems",
    ],
  },
  {
    id: 7,
    slug: "heavy-engineering",
    number: "07",
    category: "Engineering",
    name: "Heavy Engineering",
    shortDesc:
      "Heavy-duty steel products for machinery, fabrication and structural applications.",
    image: "/images/industries/engineering.jpg",
    longDesc:
      "Our alloy and carbon steel products support large-scale fabrication and industrial machinery manufacturing.",
    productCategories: ["Bars", "Plates", "Flanges", "Forged Fittings"],
    applications: [
      "Industrial machinery",
      "Structural fabrication",
      "Heavy equipment",
    ],
  },
  {
    id: 8,
    slug: "construction",
    number: "08",
    category: "Infrastructure",
    name: "Construction & Infrastructure",
    shortDesc:
      "Steel products for structural, infrastructure and construction applications.",
    image: "/images/industries/construction.jpg",
    longDesc:
      "Our steel products support construction and infrastructure projects where strength, durability and reliability are essential.",
    productCategories: ["Bars", "Plates", "Pipes & Tubes", "Flanges"],
    applications: [
      "Structural fabrication",
      "Infrastructure projects",
      "Industrial construction",
    ],
  },
  {
    id: 9,
    slug: "water-infrastructure",
    number: "09",
    category: "Water",
    name: "Water & Infrastructure",
    shortDesc:
      "Steel solutions for water treatment, distribution and infrastructure systems.",
    image: "/images/industries/water-infrastructure.jpg",
    longDesc:
      "Our products support water treatment plants, distribution networks and municipal infrastructure where corrosion resistance is critical.",
    productCategories: ["Pipes & Tubes", "Flanges", "Valves", "Bars"],
    applications: [
      "Water treatment plants",
      "Distribution networks",
      "Municipal infrastructure",
    ],
  },
];

// Quick helper to find an industry by slug
export const getIndustryBySlug = (slug) =>
  industries.find((i) => i.slug === slug);
