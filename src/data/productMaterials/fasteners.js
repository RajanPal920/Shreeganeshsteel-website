// src/data/productMaterials/fasteners.js

// ============================================
// IMAGE IMPORTS
// ============================================
import stainless from "../../../public/images/stock/stainless-duplex-steel-fasteners.jpg";
import nickel from "../../../public/images/stock/nickel-copper-alloy-fasteners.jpg";
import highAlloys from "../../../public/images/stock/hastelloy-fasteners.jpg";
import duplex from "../../../public/images/stock/duplex-steel-fasteners.jpg";
import superDuplex from "../../../public/images/stock/super-duplex-fasteners.jpg";
import titanium from "../../../public/images/stock/titanium-fasteners.jpg";
import alloys from "../../../public/images/stock/alloy-steel-fasteners.jpg";
import carbon from "../../../public/images/stock/carbon-alloy-steel-fasteners.jpg";
import alloySteel from "../../../public/images/stock/alloy-steel-fasteners.jpg";

// ============================================
// FASTENERS — 9 Products (One Per Material Group)
// ============================================
const fasteners = [
  // ============================================
  // 1. STAINLESS STEEL FASTENERS
  // ============================================
  {
    id: 1,
    slug: "stainless-steel-fasteners",
    image: stainless,
    title: "Stainless Steel Fasteners",
    shortDescription:
      "A2-70, A4-80, SS 304, 316L, 317L, 321, 904L Heavy-Lock Bolts, Nuts, Studs & Washers for Marine & Petrochemical.",
    materialGroup: "Stainless Steel",
    standards:
      "ASTM A193 B8/B8M, ASTM A194 8/8M, ASTM F593, ASTM F594, DIN 933, DIN 934, ISO 3506",

    overview:
      "Premium stainless steel fasteners engineered for superior corrosion resistance in marine, petrochemical, food processing, and construction environments. Manufactured from A2-70, A4-80, SS 304, 316L, 317L, 321, and 904L grades with full material traceability and excellent mechanical strength — ideal for critical bolting applications exposed to chlorides and aggressive chemicals.",

    grades: [
      "A2-70",
      "A4-80",
      "SS 304",
      "SS 304L",
      "SS 316",
      "SS 316L",
      "SS 317L",
      "SS 321",
      "SS 904L",
    ],

    supplyForms: [
      "Hex Bolts",
      "Hex Nuts",
      "Stud Bolts",
      "Threaded Rods",
      "Washers",
      "Anchor Bolts",
      "Socket Head Cap Screws",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM A193, ASTM A194, ASTM F593, ASTM F594, DIN 933, DIN 934, ISO 3506",
      nominalSize: 'M3 to M56 / 1/8" to 4"',
      threadTypes: "Metric, UNC, UNF, BSW, BSP",
      materialGrades: "A2-70, A4-80, 304, 316L, 317L, 321, 904L",
      surfaceFinish: "Plain, Passivated, Zinc Plated, HDG, PTFE Coated",
      manufacturingMethods: "Cold Forged, Hot Forged, Machined",
      qualityTesting: "PMI, Tensile, Hardness, Salt Spray, Dye Penetrant",
    },

    standardsCompliance: [
      "ASTM A193 — Alloy-Steel and Stainless Steel Bolting for High-Temperature Service",
      "ASTM A194 — Carbon and Alloy Steel Nuts for Bolts for High-Pressure Service",
      "ASTM F593 — Stainless Steel Bolts, Hex Cap Screws, and Studs",
      "ASTM F594 — Stainless Steel Nuts",
      "ISO 3506 — Mechanical Properties of Corrosion-Resistant Stainless Steel Fasteners",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Cold Forged / Hot Forged / Machined",
    pressureRating: "Per ASTM A193 / A194",
    temperatureRange: "-196°C to +800°C",
    tolerance: "Per DIN / ISO / ASME B18.2.1",
    certifications: "EN 10204 3.1 & 3.2 MTC, NACE MR0175 compliant",

    industryApplications: [
      "Marine and offshore structures",
      "Petrochemical and refinery piping",
      "Food processing and dairy equipment",
      "Pharmaceutical and biotech plants",
      "Construction and structural steel",
      "Desalination and seawater systems",
    ],

    forms: "Bolts, Nuts, Studs, Washers",
    application:
      "Marine, petrochemical, food processing, and construction industries",
  },

  // ============================================
  // 2. NICKEL ALLOY FASTENERS
  // ============================================
  {
    id: 2,
    slug: "nickel-alloy-fasteners",
    image: nickel,
    title: "Nickel Alloy Fasteners",
    shortDescription:
      "Nickel 200/201, Monel 400, K500, Inconel 600/625, Incoloy 800/825 High-Conductivity Sub-Sea Mount Hardware.",
    materialGroup: "Nickel",
    standards: "ASTM B160, B164, B166, B408, B425, B446, ASME SB160, DIN 17753",

    overview:
      "Premium nickel alloy fasteners engineered for extreme temperature, pressure, and corrosive environments. Manufactured from Nickel 200/201, Monel 400, K500, Inconel 600/625, and Incoloy 800/825 grades, our fasteners deliver exceptional oxidation resistance, high-temperature strength, and superior resistance to acids, alkalis, and seawater for subsea, chemical, and aerospace applications.",

    grades: [
      "Nickel 200",
      "Nickel 201",
      "Monel 400",
      "Monel K500",
      "Inconel 600",
      "Inconel 601",
      "Inconel 625",
      "Inconel 718",
      "Inconel X-750",
      "Incoloy 800",
      "Incoloy 800H",
      "Incoloy 825",
    ],

    supplyForms: [
      "Hex Bolts",
      "Hex Nuts",
      "Stud Bolts",
      "Threaded Rods",
      "Washers",
      "Socket Head Cap Screws",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM B160, B164, B166, B408, B425, B446, ASME SB160, DIN 17753",
      nominalSize: 'M3 to M56 / 1/8" to 4"',
      threadTypes: "Metric, UNC, UNF, BSW, BSP",
      materialGrades:
        "Nickel 200/201, Monel 400/K500, Inconel 600/625/718, Incoloy 800/825",
      surfaceFinish: "Plain, Passivated, Solution Annealed, Pickled",
      manufacturingMethods: "Cold Forged, Hot Forged, Machined",
      qualityTesting: "PMI, Tensile, Hardness, Salt Spray, Dye Penetrant",
    },

    standardsCompliance: [
      "ASTM B160 — Nickel Rod and Bar",
      "ASTM B164 — Nickel-Copper Alloy Rod and Bar",
      "ASTM B166 — Nickel-Chromium-Iron Alloy Rod and Bar",
      "ASTM B408 — Nickel-Iron-Chromium Alloy Rod and Bar",
      "ASTM B425 — Nickel-Iron-Chromium-Molybdenum-Copper Alloy Rod and Bar",
      "ASTM B446 — Nickel-Chromium-Molybdenum-Columbium Alloy Rod and Bar",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Cold Forged / Hot Forged / Machined",
    pressureRating: "Per ASTM B160 / B164 / B166",
    temperatureRange: "-200°C to +800°C",
    tolerance: "Per DIN / ISO / ASME B18.2.1",
    certifications: "EN 10204 3.1 & 3.2 MTC, NACE MR0175 compliant",

    industryApplications: [
      "Marine engineering and desalination plants",
      "Offshore oil & gas and subsea structures",
      "Chemical processing and acid handling",
      "Aerospace and turbine engine components",
      "Nuclear power generation",
      "Heat treatment furnaces and industrial equipment",
    ],

    forms: "Bolts, Nuts, Studs, Washers",
    application:
      "Marine engineering, desalination plants, offshore structures, chemical industries",
  },

  // ============================================
  // 3. HIGH ALLOY FASTENERS
  // ============================================
  {
    id: 3,
    slug: "high-alloy-fasteners",
    image: highAlloys,
    title: "High Alloy Fasteners",
    shortDescription:
      "Hastelloy C276, C22, B2, B3, Alloy X Hex Bolts, Studs & Washers for Petrochemical Refineries.",
    materialGroup: "High Alloys",
    standards: "ASTM B574, B575, B572, B619, B622, ASME SB574, DIN 17744",

    overview:
      "Specialized high-alloy fasteners engineered for wet chlorine, sulfuric acid, phosphoric acid, and aggressive halide services. Manufactured from Hastelloy C276, C22, B2, B3, and Alloy X grades, our fasteners deliver exceptional performance in the most demanding corrosive environments across petrochemical refineries, chemical processing, and pollution control industries.",

    grades: [
      "Hastelloy C276",
      "Hastelloy C22",
      "Hastelloy B2",
      "Hastelloy B3",
      "Hastelloy X",
      "Hastelloy C2000",
      "Alloy 20",
      "SMO 254",
    ],

    supplyForms: [
      "Hex Bolts",
      "Hex Nuts",
      "Stud Bolts",
      "Threaded Rods",
      "Washers",
      "Socket Head Cap Screws",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM B574, B575, B572, B619, B622, ASME SB574, DIN 17744",
      nominalSize: 'M3 to M48 / 1/8" to 3"',
      threadTypes: "Metric, UNC, UNF, BSW, BSP",
      materialGrades:
        "Hastelloy C276, C22, B2, B3, X, C2000, Alloy 20, SMO 254",
      surfaceFinish: "Plain, Solution Annealed, Pickled",
      manufacturingMethods: "Cold Forged, Hot Forged, Machined",
      qualityTesting: "PMI, Tensile, Hardness, Dye Penetrant",
    },

    standardsCompliance: [
      "ASTM B574 — Low-Carbon Nickel-Chromium-Molybdenum Alloy Rod and Bar",
      "ASTM B575 — Low-Carbon Nickel-Chromium-Molybdenum Alloy Plate, Sheet, Strip",
      "ASTM B572 — UNS N06002 Nickel Alloy Rod and Bar",
      "ASTM B619 — Welded Nickel and Nickel-Cobalt Alloy Pipe",
      "ASTM B622 — Seamless Nickel and Nickel-Cobalt Alloy Pipe and Tube",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Cold Forged / Hot Forged / Machined",
    pressureRating: "Per ASTM B574 / B575",
    temperatureRange: "-100°C to +700°C",
    tolerance: "Per DIN / ISO / ASME B18.2.1",
    certifications: "EN 10204 3.1 & 3.2 MTC",

    industryApplications: [
      "Wet chlorine and acid handling systems",
      "Phosphoric and sulfuric acid production",
      "Flue gas desulfurization (FGD) scrubbers",
      "Chemical reactors and process vessels",
      "Petrochemical refineries",
      "Pollution control equipment",
    ],

    forms: "Hex Bolts, Studs, Washers",
    application:
      "Chemical processing, offshore, and aggressive industrial environments",
  },

  // ============================================
  // 4. DUPLEX STEEL FASTENERS
  // ============================================
  {
    id: 4,
    slug: "duplex-steel-fasteners",
    image: duplex,
    title: "Duplex Steel Fasteners",
    shortDescription:
      "Duplex UNS S31803 / S32205 (2205) High-Strength Bolts, Nuts & Studs for Chloride-Rich Offshore Environments.",
    materialGroup: "Duplex",
    standards:
      "ASTM A479 UNS S31803/S32205, ASTM A182 F51, ASME B18.2.1, NACE MR0175",

    overview:
      "High-strength duplex steel fasteners providing exceptional resistance to chloride stress corrosion cracking. Manufactured from UNS S31803 and S32205 (2205) grades, our fasteners deliver superior strength and corrosion resistance for offshore oil & gas, desalination, and chemical processing applications.",

    grades: ["UNS S31803", "UNS S32205", "2205", "F51", "LDX 2101"],

    supplyForms: [
      "Hex Bolts",
      "Hex Nuts",
      "Stud Bolts",
      "Threaded Rods",
      "Washers",
      "Socket Head Cap Screws",
    ],

    technicalSpecs: {
      standardSpecifications: "ASTM A479, ASTM A182, ASME B18.2.1, NACE MR0175",
      nominalSize: 'M3 to M56 / 1/8" to 4"',
      threadTypes: "Metric, UNC, UNF, BSW, BSP",
      materialGrades: "UNS S31803, S32205, 2205, F51",
      surfaceFinish: "Plain, Passivated, Solution Annealed",
      manufacturingMethods: "Cold Forged, Hot Forged, Machined",
      qualityTesting: "PMI, Tensile, Hardness, Salt Spray, Dye Penetrant",
    },

    standardsCompliance: [
      "ASTM A479 — Stainless Steel Bars and Shapes for Use in Boilers",
      "ASTM A182 — Forged or Rolled Alloy and Stainless Steel Pipe Flanges",
      "ASME B18.2.1 — Square and Hex Bolts and Screws",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Cold Forged / Hot Forged / Machined",
    pressureRating: "Per ASTM A479",
    temperatureRange: "-50°C to +300°C",
    tolerance: "Per ASME B18.2.1",
    certifications: "EN 10204 3.1 & 3.2 MTC, NACE MR0175 compliant",

    industryApplications: [
      "Offshore oil and gas platforms",
      "Subsea flowlines and risers",
      "Desalination plants and seawater systems",
      "Chemical cargo tankers",
      "Pulp and paper digesters",
      "Pollution control scrubbers",
    ],

    forms: "Bolts, Nuts, Studs, Washers",
    application: "Offshore platforms, desalination plants, chemical processing",
  },

  // ============================================
  // 5. SUPER DUPLEX FASTENERS
  // ============================================
  {
    id: 5,
    slug: "super-duplex-fasteners",
    image: superDuplex,
    title: "Super Duplex Fasteners",
    shortDescription:
      "Super Duplex UNS S32750 (2507) / S32760 Heavy-Duty Bolts & Studs for Subsea & Seawater Systems.",
    materialGroup: "Super Duplex",
    standards:
      "ASTM A479 UNS S32750/S32760, ASTM A182 F53/F55, ASME B18.2.1, NACE MR0175",

    overview:
      "Ultra-high performance super duplex fasteners designed for aggressive subsea oilfields, critical seawater loops, and chemical plant service. Manufactured from UNS S32750 (2507) and S32760 grades, our fasteners offer superior strength and corrosion resistance in the most demanding environments.",

    grades: ["UNS S32750", "UNS S32760", "2507", "F53", "F55", "Zeron 100"],

    supplyForms: [
      "Hex Bolts",
      "Hex Nuts",
      "Stud Bolts",
      "Threaded Rods",
      "Washers",
      "Socket Head Cap Screws",
    ],

    technicalSpecs: {
      standardSpecifications: "ASTM A479, ASTM A182, ASME B18.2.1, NACE MR0175",
      nominalSize: 'M3 to M48 / 1/8" to 3"',
      threadTypes: "Metric, UNC, UNF, BSW, BSP",
      materialGrades: "UNS S32750, S32760, 2507, F53, F55",
      surfaceFinish: "Plain, Passivated, Solution Annealed",
      manufacturingMethods: "Cold Forged, Hot Forged, Machined",
      qualityTesting: "PMI, Tensile, Hardness, Salt Spray, Dye Penetrant",
    },

    standardsCompliance: [
      "ASTM A479 — Stainless Steel Bars and Shapes for Use in Boilers",
      "ASTM A182 — Forged or Rolled Alloy and Stainless Steel Pipe Flanges",
      "ASME B18.2.1 — Square and Hex Bolts and Screws",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Cold Forged / Hot Forged / Machined",
    pressureRating: "Per ASTM A479",
    temperatureRange: "-50°C to +300°C",
    tolerance: "Per ASME B18.2.1",
    certifications: "EN 10204 3.1 & 3.2 MTC, NACE MR0175 compliant",

    industryApplications: [
      "Subsea oilfields and deepwater equipment",
      "Seawater handling and desalination systems",
      "Chemical plant service and reactors",
      "Marine engineering and shipbuilding",
      "Offshore platforms and risers",
      "Pollution control scrubbers",
    ],

    forms: "Bolts, Nuts, Studs, Washers",
    application: "Subsea oilfields, desalination plants, seawater systems",
  },

  // ============================================
  // 6. TITANIUM FASTENERS
  // ============================================
  {
    id: 6,
    slug: "titanium-fasteners",
    image: titanium,
    title: "Titanium Fasteners",
    shortDescription:
      "Titanium Grade 1, 2, 5 (Ti-6Al-4V), 7 Ultra-Lightweight Aerospace Clamping Bolts, Nuts & Washers.",
    materialGroup: "Titanium",
    standards: "ASTM B348, ASTM F467, ASTM F468, ASME SB348, DIN 65328",

    overview:
      "Ultra-lightweight, high-strength titanium fasteners with impervious corrosion immunity against seawater, wet chlorine, and organic chlorides. Manufactured from Grade 1, 2, 5 (Ti-6Al-4V), and 7 grades, our fasteners deliver exceptional performance in aerospace, marine, and chemical processing applications.",

    grades: [
      "Grade 1",
      "Grade 2",
      "Grade 5 (Ti-6Al-4V)",
      "Grade 7",
      "Grade 12",
    ],

    supplyForms: [
      "Hex Bolts",
      "Hex Nuts",
      "Stud Bolts",
      "Threaded Rods",
      "Washers",
      "Socket Head Cap Screws",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM B348, ASTM F467, ASTM F468, ASME SB348, DIN 65328",
      nominalSize: 'M3 to M36 / 1/8" to 1-1/2"',
      threadTypes: "Metric, UNC, UNF, BSW, BSP",
      materialGrades: "Grade 1, 2, 5 (Ti-6Al-4V), 7, 12",
      surfaceFinish: "Plain, Passivated, Anodized, Bright Annealed",
      manufacturingMethods: "Cold Forged, Hot Forged, Machined",
      qualityTesting: "PMI, Tensile, Hardness, Dye Penetrant",
    },

    standardsCompliance: [
      "ASTM B348 — Titanium and Titanium Alloy Bars and Billets",
      "ASTM F467 — Nonferrous Nuts for General Use",
      "ASTM F468 — Nonferrous Bolts, Hex Cap Screws, and Studs",
      "ASME SB348 — Titanium and Titanium Alloy Bars and Billets",
      "DIN 65328 — Aerospace Titanium Alloy Bolts",
    ],

    manufacturingType: "Cold Forged / Hot Forged / Machined",
    pressureRating: "Per ASTM F467 / F468",
    temperatureRange: "-200°C to +400°C",
    tolerance: "Per ASME B18.2.1",
    certifications: "EN 10204 3.1 & 3.2 MTC",

    industryApplications: [
      "Aerospace and aircraft components",
      "Marine and offshore seawater systems",
      "Chemical processing and chlor-alkali plants",
      "Desalination plants",
      "Medical implants and equipment",
      "Cryogenic piping systems",
    ],

    forms: "Bolts, Nuts, Studs, Washers",
    application: "Aerospace, marine, and medical industries",
  },

  // ============================================
  // 7. ALLOY FASTENERS
  // ============================================
  {
    id: 7,
    slug: "alloy-fasteners",
    image: alloys,
    title: "Alloy Fasteners",
    shortDescription:
      "Zirconium 702, Tantalum, Copper-Nickel 70/30 & 90/10 Specialty Alloy Fasteners for Ultra-Corrosive Service.",
    materialGroup: "Alloys",
    standards: "ASTM B550, B551, B466, B467, ASME SB550, DIN 17753",

    overview:
      "Specialty alloy fasteners including zirconium, tantalum, and copper-nickel grades engineered for ultra-corrosive chemical processing, nuclear, and marine applications. Manufactured to ASTM B550, B551, B466, and B467 standards, our fasteners deliver exceptional performance in the most demanding environments.",

    grades: [
      "Zirconium 702",
      "Tantalum",
      "Copper-Nickel 70/30",
      "Copper-Nickel 90/10",
    ],

    supplyForms: [
      "Hex Bolts",
      "Hex Nuts",
      "Stud Bolts",
      "Threaded Rods",
      "Washers",
      "Socket Head Cap Screws",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM B550, B551, B466, B467, ASME SB550, DIN 17753",
      nominalSize: 'M3 to M36 / 1/8" to 1-1/2"',
      threadTypes: "Metric, UNC, UNF, BSW, BSP",
      materialGrades: "Zirconium 702, Tantalum, Cu-Ni 70/30, Cu-Ni 90/10",
      surfaceFinish: "Plain, Pickled, Annealed",
      manufacturingMethods: "Cold Forged, Hot Forged, Machined",
      qualityTesting: "PMI, Tensile, Hardness, Dye Penetrant",
    },

    standardsCompliance: [
      "ASTM B550 — Zirconium and Zirconium Alloy Bar and Wire",
      "ASTM B551 — Zirconium and Zirconium Alloy Strip, Sheet, and Plate",
      "ASTM B466 — Seamless Copper-Nickel Pipe and Tube",
      "ASTM B467 — Welded Copper-Nickel Pipe",
      "DIN 17753 — Wrought Nickel Alloys",
    ],

    manufacturingType: "Cold Forged / Hot Forged / Machined",
    pressureRating: "Per ASTM B550 / B551",
    temperatureRange: "-100°C to +400°C",
    tolerance: "Per ASME B18.2.1",
    certifications: "EN 10204 3.1 & 3.2 MTC",

    industryApplications: [
      "Chemical processing and acid handling",
      "Nuclear power generation",
      "Marine engineering and shipbuilding",
      "Desalination and heat exchangers",
      "Pharmaceutical and food processing",
      "Pollution control equipment",
    ],

    forms: "Bolts, Nuts, Studs, Washers",
    application: "Chemical processing, nuclear, marine",
  },

  // ============================================
  // 8. CARBON STEEL FASTENERS
  // ============================================
  {
    id: 8,
    slug: "carbon-steel-fasteners",
    image: carbon,
    title: "Carbon Steel Fasteners",
    shortDescription:
      "ASTM A193 B7, B7M, ASTM A320 L7, Grade 4.8, 8.8, 10.9, 12.9 High-Tensile Structural Anchor Bolts & Nuts.",
    materialGroup: "Carbon",
    standards:
      "ASTM A193 B7, B7M, ASTM A320 L7, ASTM A307, Grade 4.8, 8.8, 10.9, 12.9, DIN 933, DIN 934",

    overview:
      "Heavy-duty carbon steel fasteners engineered for high-pressure, high-temperature, and structural applications. Manufactured to ASTM A193, A320, and A307 standards, our fasteners deliver superior strength and reliability in refineries, power plants, heavy engineering, and structural steel applications.",

    grades: [
      "ASTM A193 B7",
      "ASTM A193 B7M",
      "ASTM A320 L7",
      "ASTM A307",
      "Grade 4.8",
      "Grade 8.8",
      "Grade 10.9",
      "Grade 12.9",
    ],

    supplyForms: [
      "Hex Bolts",
      "Hex Nuts",
      "Stud Bolts",
      "Threaded Rods",
      "Washers",
      "Anchor Bolts",
      "Structural Bolts",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM A193, ASTM A320, ASTM A307, DIN 933, DIN 934, ISO 898",
      nominalSize: 'M3 to M64 / 1/8" to 4"',
      threadTypes: "Metric, UNC, UNF, BSW, BSP",
      materialGrades: "A193 B7, B7M, A320 L7, A307, Grade 4.8, 8.8, 10.9, 12.9",
      surfaceFinish: "Plain, Black, Zinc Plated, HDG, Xylan, PTFE Coated",
      manufacturingMethods: "Cold Forged, Hot Forged, Machined",
      qualityTesting: "PMI, Tensile, Hardness, Salt Spray, Impact Test",
    },

    standardsCompliance: [
      "ASTM A193 — Alloy-Steel and Stainless Steel Bolting for High-Temperature Service",
      "ASTM A320 — Alloy-Steel and Stainless Steel Bolting for Low-Temperature Service",
      "ASTM A307 — Carbon Steel Bolts, Studs, and Threaded Rod",
      "ISO 898 — Mechanical Properties of Fasteners",
      "DIN 933 / DIN 934 — Hex Bolts and Hex Nuts",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Cold Forged / Hot Forged / Machined",
    pressureRating: "Per ASTM A193 / A320",
    temperatureRange: "-101°C to +540°C",
    tolerance: "Per DIN / ISO / ASME B18.2.1",
    certifications: "EN 10204 3.1 MTC, NACE MR0175 compliant",

    industryApplications: [
      "Heavy engineering and structural steel",
      "Power plants and steam generation",
      "Refinery and petrochemical piping",
      "Oil and gas transmission pipelines",
      "Industrial piping and flanges",
      "Bridge and construction bolting",
    ],

    forms: "Bolts, Nuts, Studs, Washers",
    application:
      "Heavy engineering, structural steel, power plants, and industrial piping",
  },

  // ============================================
  // 9. ALLOY STEEL FASTENERS
  // ============================================
  {
    id: 9,
    slug: "alloy-steel-fasteners",
    image: alloySteel,
    title: "Alloy Steel Fasteners",
    shortDescription:
      "ASTM A193 B16, B8, B8M, ASTM A320 L7, L43 Chrome-Moly High-Temperature Stud Bolts & Nuts.",
    materialGroup: "Alloy Steel",
    standards:
      "ASTM A193 B16, B8, B8M, ASTM A320 L7, L43, ASTM A194 2H, 4, 7, 8, DIN 933, DIN 934",

    overview:
      "Chromium-molybdenum creep-resistant alloy steel fasteners engineered for supercritical boilers, heat recovery steam generators, and extreme-temperature steam lines. Manufactured to ASTM A193, A320, and A194 standards, our fasteners deliver reliable performance at temperatures up to 650°C.",

    grades: [
      "ASTM A193 B16",
      "ASTM A193 B8",
      "ASTM A193 B8M",
      "ASTM A320 L7",
      "ASTM A320 L43",
      "ASTM A194 2H",
      "ASTM A194 4",
      "ASTM A194 7",
      "ASTM A194 8",
    ],

    supplyForms: [
      "Hex Bolts",
      "Hex Nuts",
      "Stud Bolts",
      "Threaded Rods",
      "Washers",
      "Socket Head Cap Screws",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM A193, ASTM A320, ASTM A194, DIN 933, DIN 934, ISO 898",
      nominalSize: 'M3 to M64 / 1/8" to 4"',
      threadTypes: "Metric, UNC, UNF, BSW, BSP",
      materialGrades: "A193 B16, B8, B8M, A320 L7, L43, A194 2H, 4, 7, 8",
      surfaceFinish: "Plain, Black, Zinc Plated, HDG, Xylan, PTFE Coated",
      manufacturingMethods: "Cold Forged, Hot Forged, Machined",
      qualityTesting: "PMI, Tensile, Hardness, Salt Spray, Impact Test",
    },

    standardsCompliance: [
      "ASTM A193 — Alloy-Steel and Stainless Steel Bolting for High-Temperature Service",
      "ASTM A320 — Alloy-Steel and Stainless Steel Bolting for Low-Temperature Service",
      "ASTM A194 — Carbon and Alloy Steel Nuts for Bolts for High-Pressure Service",
      "ASME B31.1 — Power Piping Code",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Cold Forged / Hot Forged / Machined",
    pressureRating: "Per ASTM A193 / A320 / A194",
    temperatureRange: "-101°C to +650°C",
    tolerance: "Per DIN / ISO / ASME B18.2.1",
    certifications: "EN 10204 3.1 & 3.2 MTC, NACE MR0175 compliant",

    industryApplications: [
      "Superheater steam lines",
      "Heat recovery steam generators (HRSG)",
      "Refinery hydrotreaters and hydrocrackers",
      "Power plant steam lines",
      "Petrochemical process piping",
      "High-temperature chemical reactors",
    ],

    forms: "Bolts, Nuts, Studs, Washers",
    application:
      "Superheater steam lines, refinery, power plants, high-temp service",
  },
];

export default fasteners;
