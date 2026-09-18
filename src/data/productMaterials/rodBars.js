// src/data/productMaterials/rodBars.js

// ============================================
// IMAGE IMPORTS — Only these 6 images
// ============================================
import round from "../../../public/images/stock/round-bars.jpg";
import rectangle from "../../../public/images/stock/rectangle-bars.jpg";
import bright from "../../../public/images/stock/bright-bars.jpg";
import flat from "../../../public/images/stock/flat-bars.jpg";
import hex from "../../../public/images/stock/hex-bars.jpg";
import square from "../../../public/images/stock/square-bars.jpg";

// ============================================
// RODS & BARS — 9 Products (One Per Material Group)
// ============================================
const rodBars = [
  // ============================================
  // 1. STAINLESS STEEL ROUND BARS
  // ============================================
  {
    id: 1,
    slug: "stainless-steel-round-bars",
    image: bright,
    title:
      "Stainless Steel Round Bars Supplier – 304, 304L, 316, 316L, 310S, 904L & More",
    shortDescription:
      "Premium Stainless Steel Round Bars manufactured in various grades for machining, fabrication, construction, and engineering applications.",
    materialGroup: "Stainless Steel",
    standards:
      "ASTM A276, ASTM A479, ASTM A484, ASME SA276, EN 10088, DIN 17440, NACE MR0175",

    overview:
      "Complete range of stainless steel round bars conforming to ASTM A276, A479, and A484 standards. Manufactured from premium SS 304, 304L, 316, 316L, 310S, 321, 347, and 904L grades with full material traceability and intergranular corrosion resistance — engineered for machining, fabrication, construction, and critical engineering applications.",

    grades: [
      "SS 304",
      "SS 304L",
      "SS 316",
      "SS 316L",
      "SS 310S",
      "SS 321",
      "SS 347",
      "SS 904L",
    ],

    supplyForms: [
      "Round Bars",
      "Bright Bars",
      "Peeled & Ground Bars",
      "Centerless Ground Bars",
      "Polished Bars",
      "Hot Rolled Bars",
      "Cold Drawn Bars",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM A276, ASTM A479, ASTM A484, ASME SA276, EN 10088, DIN 17440, NACE MR0175",
      diameterRange: "3 mm to 500 mm",
      lengthRange: "3 m to 6 m (Custom Cut Lengths Available)",
      materialGrades: "SS 304/304L/316/316L/310S/321/347/904L",
      surfaceFinish:
        "Bright, Peeled, Ground, Polished, Black, Pickled, Passivated",
      manufacturingMethods: "Hot Rolled, Cold Drawn, Peeled, Ground, Polished",
      qualityTesting: "PMI, Tensile, Hardness, Ultrasonic, Dye Penetrant",
    },

    standardsCompliance: [
      "ASTM A276 — Stainless Steel Bars and Shapes",
      "ASTM A479 — Stainless Steel Bars and Shapes for Boilers",
      "ASTM A484 — General Requirements for Stainless Steel Bars, Billets, and Forgings",
      "ASME SA276 — Stainless Steel Bars and Shapes",
      "EN 10088 — Stainless Steels Technical Delivery Conditions",
      "DIN 17440 — Stainless Steel Flat Products",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Hot Rolled / Cold Drawn / Peeled & Ground",
    pressureRating: "N/A (Structural)",
    temperatureRange: "-196°C to +800°C",
    tolerance: "Per ASTM A484 / EN 10088",
    certifications: "EN 10204 3.1 & 3.2 MTC, NACE MR0175 compliant",

    industryApplications: [
      "Machining and fabrication",
      "Construction and structural engineering",
      "Chemical and petrochemical processing",
      "Food, beverage, and pharmaceutical equipment",
      "Offshore oil and gas platforms",
      "Power generation and desalination plants",
    ],

    forms: "Round Bars, Bright Bars, Peeled & Ground Bars",
    application:
      "Machining, fabrication, construction, and engineering applications",
  },

  // ============================================
  // 2. CARBON STEEL ROUND BARS
  // ============================================
  {
    id: 2,
    slug: "carbon-steel-round-bars",
    image: round,
    title: "Carbon Steel Round Bars Supplier – ASTM A36, A105, C45, IS 2062",
    shortDescription:
      "Heavy-duty Carbon Steel Round Bars manufactured to ASTM A36, A105, C45, and IS 2062 standards for structural, machining, and industrial applications.",
    materialGroup: "Carbon Steel",
    standards:
      "ASTM A36, ASTM A105, IS 2062, C45 (EN8), EN 10025, DIN 1013, NACE MR0175",

    overview:
      "Heavy-duty carbon steel round bars engineered for structural, machining, and general engineering applications. Manufactured to ASTM A36, A105, IS 2062, and C45 standards in hot rolled and cold drawn conditions, our carbon steel bars deliver superior strength, excellent weldability, and reliable machinability for heavy structural and industrial fabrication.",

    grades: [
      "ASTM A36",
      "ASTM A105",
      "C45 (EN8)",
      "IS 2062 Gr A/B/C",
      "EN 10025 S275/S355",
      "AISI 1018",
      "AISI 1045",
    ],

    supplyForms: [
      "Round Bars",
      "Bright Bars",
      "Peeled & Ground Bars",
      "Cold Drawn Bars",
      "Hot Rolled Bars",
      "Forged Bars",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM A36, ASTM A105, IS 2062, C45 (EN8), EN 10025, DIN 1013",
      diameterRange: "6 mm to 500 mm",
      lengthRange: "3 m to 6 m (Custom Cut Lengths Available)",
      materialGrades: "A36, A105, C45, IS 2062, S275/S355, AISI 1018, 1045",
      surfaceFinish:
        "Black, Bright, Peeled, Ground, Polished, Galvanized, Zinc Plated",
      manufacturingMethods: "Hot Rolled, Cold Drawn, Forged, Peeled, Ground",
      qualityTesting:
        "Tensile, Hardness, Impact, Chemical Analysis, Ultrasonic",
    },

    standardsCompliance: [
      "ASTM A36 — Carbon Structural Steel",
      "ASTM A105 — Carbon Steel Forgings for Piping Applications",
      "IS 2062 — Hot Rolled Medium and High Tensile Structural Steel",
      "EN 10025 — Hot Rolled Products of Structural Steels",
      "DIN 1013 — Hot Rolled Round Steel Bars",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Hot Rolled / Cold Drawn / Forged",
    pressureRating: "N/A (Structural)",
    temperatureRange: "-46°C to +540°C",
    tolerance: "Per ASTM A6 / IS 2062",
    certifications: "EN 10204 3.1 MTC, NACE MR0175 compliant",

    industryApplications: [
      "Structural fabrication and construction",
      "Heavy machinery and equipment",
      "Automotive and chassis components",
      "Oil and gas transmission pipelines",
      "Bridge and infrastructure engineering",
      "General engineering and industrial applications",
    ],

    forms: "Round Bars, Bright Bars, Peeled & Ground Bars",
    application: "Structural, machining, and industrial applications",
  },

  // ============================================
  // 3. TITANIUM ROUND BARS
  // ============================================
  {
    id: 3,
    slug: "titanium-round-bars",
    image: round,
    title: "Titanium Round Bars Supplier – Grade 2 & Grade 5",
    shortDescription:
      "Titanium Round Bars offering exceptional corrosion resistance, lightweight strength, and outstanding performance for aerospace, marine, and chemical industries.",
    materialGroup: "Titanium",
    standards:
      "ASTM B348, ASTM B381, ASME SB348, DIN 17862, DIN 65328, AMS 4928",

    overview:
      "Ultra-lightweight, high-strength titanium round bars with impervious corrosion immunity against seawater, wet chlorine, and organic chlorides. Manufactured from Grade 1, 2, 5 (Ti-6Al-4V), and 7 grades, our titanium round bars deliver exceptional performance in aerospace, marine, and chemical processing applications.",

    grades: [
      "Grade 1",
      "Grade 2",
      "Grade 5 (Ti-6Al-4V)",
      "Grade 7",
      "Grade 12",
    ],

    supplyForms: [
      "Round Bars",
      "Bright Bars",
      "Peeled & Ground Bars",
      "Centerless Ground Bars",
      "Polished Bars",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM B348, ASTM B381, ASME SB348, DIN 17862, DIN 65328, AMS 4928",
      diameterRange: "3 mm to 350 mm",
      lengthRange: "3 m to 6 m (Custom Cut Lengths Available)",
      materialGrades: "Grade 1, 2, 5 (Ti-6Al-4V), 7, 12",
      surfaceFinish: "Bright, Peeled, Ground, Polished, Pickled, Passivated",
      manufacturingMethods: "Hot Rolled, Cold Drawn, Peeled, Ground, Polished",
      qualityTesting: "PMI, Tensile, Hardness, Ultrasonic, Dye Penetrant",
    },

    standardsCompliance: [
      "ASTM B348 — Titanium and Titanium Alloy Bars and Billets",
      "ASTM B381 — Titanium and Titanium Alloy Forgings",
      "ASME SB348 — Titanium and Titanium Alloy Bars and Billets",
      "DIN 17862 — Titanium and Titanium Alloy Bars",
      "DIN 65328 — Aerospace Titanium Alloy Bolts",
      "AMS 4928 — Titanium Alloy Bars, Forgings, and Rings",
    ],

    manufacturingType: "Hot Rolled / Cold Drawn / Peeled & Ground",
    pressureRating: "N/A (Structural)",
    temperatureRange: "-200°C to +400°C",
    tolerance: "Per ASTM B348 / DIN 17862",
    certifications: "EN 10204 3.1 & 3.2 MTC",

    industryApplications: [
      "Aerospace and aircraft components",
      "Marine and offshore seawater systems",
      "Chemical processing and chlor-alkali plants",
      "Medical implants and equipment",
      "Desalination plants",
      "Cryogenic piping systems",
    ],

    forms: "Round Bars, Bright Bars, Peeled & Ground Bars",
    application: "Aerospace, marine, and chemical industries",
  },

  // ============================================
  // 4. ALLOY STEEL ROUND BARS
  // ============================================
  {
    id: 4,
    slug: "alloy-steel-round-bars",
    image: square,
    title: "Alloy Steel Round Bars Supplier – 4140, 4340, EN24, EN19",
    shortDescription:
      "Chromium-Molybdenum Alloy Steel Round Bars engineered for high-strength, high-temperature, and critical engineering applications.",
    materialGroup: "Alloy Steel",
    standards:
      "ASTM A193 B7, ASTM A320 L7, AISI 4140, AISI 4340, EN19, EN24, DIN 1.7225, DIN 1.6582",

    overview:
      "Chromium-molybdenum high-strength alloy steel round bars engineered for high-strength, high-temperature, and critical engineering applications. Manufactured from AISI 4140, AISI 4340, EN19, and EN24 grades, our alloy steel round bars deliver superior mechanical strength, fatigue resistance, and reliability for automotive, aerospace, and heavy machinery applications.",

    grades: [
      "AISI 4140 (EN19)",
      "AISI 4340 (EN24)",
      "AISI 4130",
      "AISI 8620",
      "EN8D",
      "EN353",
      "ASTM A193 B7",
      "ASTM A320 L7",
    ],

    supplyForms: [
      "Round Bars",
      "Bright Bars",
      "Peeled & Ground Bars",
      "Cold Drawn Bars",
      "Hot Rolled Bars",
      "Forged Bars",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM A193 B7, ASTM A320 L7, AISI 4140, AISI 4340, EN19, EN24, DIN 1.7225, DIN 1.6582",
      diameterRange: "6 mm to 500 mm",
      lengthRange: "3 m to 6 m (Custom Cut Lengths Available)",
      materialGrades: "4140, 4340, 4130, 8620, EN8D, EN19, EN24, EN353",
      surfaceFinish: "Black, Bright, Peeled, Ground, Polished, Heat Treated",
      manufacturingMethods:
        "Hot Rolled, Cold Drawn, Forged, Peeled, Ground, Heat Treated",
      qualityTesting: "PMI, Tensile, Hardness, Impact, Ultrasonic",
    },

    standardsCompliance: [
      "ASTM A193 — Alloy-Steel and Stainless Steel Bolting for High-Temperature Service",
      "ASTM A320 — Alloy-Steel and Stainless Steel Bolting for Low-Temperature Service",
      "AISI 4140 — Chromium-Molybdenum Alloy Steel",
      "AISI 4340 — Nickel-Chromium-Molybdenum Alloy Steel",
      "DIN 1.7225 — 42CrMo4 Alloy Steel",
      "DIN 1.6582 — 34CrNiMo6 Alloy Steel",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Hot Rolled / Cold Drawn / Forged / Heat Treated",
    pressureRating: "N/A (Structural)",
    temperatureRange: "-29°C to +540°C",
    tolerance: "Per ASTM A6 / EN 10060",
    certifications: "EN 10204 3.1 MTC, NACE MR0175 compliant",

    industryApplications: [
      "Automotive and transmission components",
      "Aerospace and aircraft parts",
      "Heavy machinery and equipment",
      "Gears, shafts, and axles",
      "Oil and gas drilling tools",
      "High-strength fasteners and bolting",
    ],

    forms: "Round Bars, Bright Bars, Peeled & Ground Bars",
    application:
      "High-strength, high-temperature, and critical engineering applications",
  },

  // ============================================
  // 5. HIGH-PERFORMANCE ALLOY ROUND BARS
  // ============================================
  {
    id: 5,
    slug: "high-performance-alloy-round-bars",
    image: hex,
    title:
      "High-Performance Alloy Round Bars Supplier – Nimonic, Nichrome, Nitronic & Alloy",
    shortDescription:
      "High-performance alloy round bars designed for high-temperature, aerospace, power generation, and critical engineering applications.",
    materialGroup: "High-Performance Alloys",
    standards:
      "ASTM B408, B446, B637, AMS 5666, AMS 5731, DIN 17742, DIN 17753",

    overview:
      "Specialized high-performance alloy round bars engineered for high-temperature, aerospace, and critical engineering applications. Manufactured from Nimonic, Nichrome, Nitronic, and other specialized alloys, our round bars deliver exceptional oxidation resistance, high-temperature strength, and superior mechanical properties in the most demanding environments.",

    grades: [
      "Nimonic 75",
      "Nimonic 80A",
      "Nimonic 90",
      "Nichrome",
      "Nitronic 50",
      "Nitronic 60",
      "Nilo 36",
      "Nilo 42",
      "Nilo 48",
    ],

    supplyForms: [
      "Round Bars",
      "Bright Bars",
      "Peeled & Ground Bars",
      "Centerless Ground Bars",
      "Polished Bars",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM B408, B446, B637, AMS 5666, AMS 5731, DIN 17742, DIN 17753",
      diameterRange: "3 mm to 300 mm",
      lengthRange: "3 m to 6 m (Custom Cut Lengths Available)",
      materialGrades:
        "Nimonic 75/80A/90, Nichrome, Nitronic 50/60, Nilo 36/42/48",
      surfaceFinish: "Bright, Peeled, Ground, Polished, Pickled, Passivated",
      manufacturingMethods: "Hot Rolled, Cold Drawn, Peeled, Ground, Polished",
      qualityTesting: "PMI, Tensile, Hardness, Ultrasonic, Dye Penetrant",
    },

    standardsCompliance: [
      "ASTM B408 — Nickel-Iron-Chromium Alloy Rod and Bar",
      "ASTM B446 — Nickel-Chromium-Molybdenum-Columbium Alloy Rod and Bar",
      "ASTM B637 — Precipitation-Hardening Nickel Alloy Bars, Forgings, and Forging Stock",
      "AMS 5666 — Nickel Alloy Corrosion and Heat-Resistant Bars, Forgings, and Rings",
      "AMS 5731 — Nickel Alloy Corrosion and Heat-Resistant Bars, Forgings, and Rings",
      "DIN 17742 — Wrought Nickel-Chromium Alloys",
      "DIN 17753 — Wrought Nickel Alloys",
    ],

    manufacturingType: "Hot Rolled / Cold Drawn / Peeled & Ground",
    pressureRating: "N/A (Structural)",
    temperatureRange: "-200°C to +1000°C",
    tolerance: "Per ASTM / AMS / DIN Standards",
    certifications: "EN 10204 3.1 & 3.2 MTC",

    industryApplications: [
      "Aerospace and aircraft engine components",
      "Power generation and gas turbine engines",
      "High-temperature furnace components",
      "Nuclear reactors and heat exchangers",
      "Chemical processing and petrochemical",
      "Precision engineering and instrumentation",
    ],

    forms: "Round Bars, Bright Bars, Peeled & Ground Bars",
    application:
      "High-temperature, aerospace, power generation, and critical engineering applications",
  },

  // ============================================
  // 6. NICKEL ALLOY ROUND BARS
  // ============================================
  {
    id: 6,
    slug: "nickel-alloy-round-bars",
    image: rectangle,
    title:
      "Nickel Alloy Round Bars Supplier – 200, 201, Monel 400, Inconel 600/625/718, Incoloy 800/825",
    shortDescription:
      "Premium Nickel Alloy Round Bars offering excellent thermal conductivity, corrosion resistance, and high-temperature strength for chemical processing applications.",
    materialGroup: "Nickel Alloy",
    standards:
      "ASTM B160, B164, B166, B408, B425, B446, ASME SB160, DIN 17753, NACE MR0175",

    overview:
      "Premium nickel alloy round bars engineered for extreme temperature, pressure, and corrosive environments. Manufactured from Nickel 200/201, Monel 400, Inconel 600/625/718, and Incoloy 800/825 grades, our round bars deliver exceptional oxidation resistance, high-temperature strength, and superior resistance to acids, alkalis, and seawater.",

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
      "Round Bars",
      "Bright Bars",
      "Peeled & Ground Bars",
      "Centerless Ground Bars",
      "Polished Bars",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM B160, B164, B166, B408, B425, B446, ASME SB160, DIN 17753",
      diameterRange: "3 mm to 350 mm",
      lengthRange: "3 m to 6 m (Custom Cut Lengths Available)",
      materialGrades:
        "Nickel 200/201, Monel 400/K500, Inconel 600/625/718, Incoloy 800/825",
      surfaceFinish: "Bright, Peeled, Ground, Polished, Pickled, Passivated",
      manufacturingMethods: "Hot Rolled, Cold Drawn, Peeled, Ground, Polished",
      qualityTesting: "PMI, Tensile, Hardness, Ultrasonic, Dye Penetrant",
    },

    standardsCompliance: [
      "ASTM B160 — Nickel Rod and Bar",
      "ASTM B164 — Nickel-Copper Alloy Rod and Bar",
      "ASTM B166 — Nickel-Chromium-Iron Alloy Rod and Bar",
      "ASTM B408 — Nickel-Iron-Chromium Alloy Rod and Bar",
      "ASTM B425 — Nickel-Iron-Chromium-Molybdenum-Copper Alloy Rod and Bar",
      "ASTM B446 — Nickel-Chromium-Molybdenum-Columbium Alloy Rod and Bar",
      "ASME SB160 — Nickel Rod and Bar",
      "DIN 17753 — Wrought Nickel Alloys",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Hot Rolled / Cold Drawn / Peeled & Ground",
    pressureRating: "N/A (Structural)",
    temperatureRange: "-200°C to +800°C",
    tolerance: "Per ASTM / DIN Standards",
    certifications: "EN 10204 3.1 & 3.2 MTC, NACE MR0175 compliant",

    industryApplications: [
      "Chemical processing and acid handling systems",
      "Marine engineering and desalination plants",
      "Nuclear power generation and heat exchangers",
      "Offshore oil & gas and subsea instrumentation",
      "Aerospace and turbine engine components",
      "Heat treatment furnaces and industrial equipment",
    ],

    forms: "Round Bars, Bright Bars, Peeled & Ground Bars",
    application:
      "Chemical processing, marine, nuclear, and offshore industries",
  },

  // ============================================
  // 7. DUPLEX & SUPER DUPLEX ROUND BARS
  // ============================================
  {
    id: 7,
    slug: "duplex-super-duplex-round-bars",
    image: flat,
    title:
      "Duplex & Super Duplex Steel Round Bars Supplier – S31803, S32205, S32750, S32760 & S32550",
    shortDescription:
      "Duplex and Super Duplex Steel Round Bars combining high strength with exceptional corrosion resistance for offshore and marine applications.",
    materialGroup: "Duplex Alloys",
    standards:
      "ASTM A276, ASTM A479, ASTM A182, ASME SA276, NACE MR0175, EN 10088",

    overview:
      "High-strength duplex and super duplex steel round bars providing exceptional resistance to chloride stress corrosion cracking. Manufactured from UNS S31803, S32205, S32750, S32760, and S32550 grades, our round bars deliver superior strength and corrosion resistance for offshore oil & gas, desalination, and chemical processing applications.",

    grades: [
      "Duplex UNS S31803",
      "Duplex UNS S32205 (2205)",
      "Super Duplex UNS S32750 (2507)",
      "Super Duplex UNS S32760",
      "Super Duplex UNS S32550",
      "F51",
      "F53",
      "F55",
      "F61",
    ],

    supplyForms: [
      "Round Bars",
      "Bright Bars",
      "Peeled & Ground Bars",
      "Centerless Ground Bars",
      "Polished Bars",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM A276, ASTM A479, ASTM A182, ASME SA276, NACE MR0175, EN 10088",
      diameterRange: "6 mm to 350 mm",
      lengthRange: "3 m to 6 m (Custom Cut Lengths Available)",
      materialGrades:
        "S31803, S32205, S32750, S32760, S32550, F51, F53, F55, F61",
      surfaceFinish:
        "Bright, Peeled, Ground, Polished, Pickled, Solution Annealed",
      manufacturingMethods: "Hot Rolled, Cold Drawn, Peeled, Ground, Polished",
      qualityTesting: "PMI, Tensile, Hardness, Ultrasonic, Dye Penetrant",
    },

    standardsCompliance: [
      "ASTM A276 — Stainless Steel Bars and Shapes",
      "ASTM A479 — Stainless Steel Bars and Shapes for Boilers",
      "ASTM A182 — Forged or Rolled Alloy and Stainless Steel Pipe Flanges",
      "ASME SA276 — Stainless Steel Bars and Shapes",
      "EN 10088 — Stainless Steels Technical Delivery Conditions",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Hot Rolled / Cold Drawn / Peeled & Ground",
    pressureRating: "N/A (Structural)",
    temperatureRange: "-50°C to +300°C",
    tolerance: "Per ASTM A484 / EN 10088",
    certifications: "EN 10204 3.1 & 3.2 MTC, NACE MR0175 compliant",

    industryApplications: [
      "Offshore oil and gas platforms",
      "Subsea flowlines and risers",
      "Desalination plants and seawater systems",
      "Chemical cargo tankers",
      "Pulp and paper digesters",
      "Pollution control scrubbers",
    ],

    forms: "Round Bars, Bright Bars, Peeled & Ground Bars",
    application: "Offshore, marine, chemical, and oil & gas industries",
  },

  // ============================================
  // 8. HIGH ALLOY ROUND BARS
  // ============================================
  {
    id: 8,
    slug: "high-alloy-round-bars",
    image: square,
    title:
      "High Alloy Round Bars Supplier – Hastelloy C22, C276, Alloy 20, SMO 254 & Alloy 28",
    shortDescription:
      "High Alloy Round Bars providing outstanding corrosion resistance in highly aggressive chemical and industrial environments.",
    materialGroup: "High Alloys",
    standards:
      "ASTM B574, B575, B622, B729, B564, ASME SB574, DIN 17744, NACE MR0175",

    overview:
      "Specialized high-alloy round bars engineered for wet chlorine, sulfuric acid, phosphoric acid, and aggressive halide services. Manufactured from Hastelloy C22, C276, Alloy 20, SMO 254, and Alloy 28 grades, our round bars deliver exceptional performance in the most demanding corrosive environments across chemical processing, pollution control, and pharmaceutical industries.",

    grades: [
      "Hastelloy C22",
      "Hastelloy C276",
      "Hastelloy C2000",
      "Hastelloy B2",
      "Hastelloy B3",
      "Alloy 20 (Carpenter 20)",
      "Alloy 28",
      "SMO 254",
      "Alloy 59",
    ],

    supplyForms: [
      "Round Bars",
      "Bright Bars",
      "Peeled & Ground Bars",
      "Centerless Ground Bars",
      "Polished Bars",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM B574, B575, B622, B729, B564, ASME SB574, DIN 17744, NACE MR0175",
      diameterRange: "3 mm to 300 mm",
      lengthRange: "3 m to 6 m (Custom Cut Lengths Available)",
      materialGrades:
        "Hastelloy C22/C276/C2000/B2/B3, Alloy 20, Alloy 28, SMO 254, Alloy 59",
      surfaceFinish:
        "Bright, Peeled, Ground, Polished, Pickled, Solution Annealed",
      manufacturingMethods: "Hot Rolled, Cold Drawn, Peeled, Ground, Polished",
      qualityTesting: "PMI, Tensile, Hardness, Ultrasonic, Dye Penetrant",
    },

    standardsCompliance: [
      "ASTM B574 — Low-Carbon Nickel-Chromium-Molybdenum Alloy Rod and Bar",
      "ASTM B575 — Low-Carbon Nickel-Chromium-Molybdenum Alloy Plate, Sheet, Strip",
      "ASTM B622 — Seamless Nickel and Nickel-Cobalt Alloy Pipe and Tube",
      "ASTM B729 — Seamless UNS N08020, N08026, and N08024 Alloy Pipe and Tube",
      "ASTM B564 — Nickel Alloy Forgings",
      "ASME SB574 — Low-Carbon Nickel-Chromium-Molybdenum Alloy Rod and Bar",
      "DIN 17744 — Wrought Nickel Alloys",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Hot Rolled / Cold Drawn / Peeled & Ground",
    pressureRating: "N/A (Structural)",
    temperatureRange: "-100°C to +700°C",
    tolerance: "Per ASTM / DIN Standards",
    certifications: "EN 10204 3.1 & 3.2 MTC",

    industryApplications: [
      "Wet chlorine and acid handling systems",
      "Phosphoric and sulfuric acid production",
      "Flue gas desulfurization (FGD) scrubbers",
      "Chemical reactors and process vessels",
      "Pharmaceutical and agrochemical processing",
      "Pollution control equipment",
    ],

    forms: "Round Bars, Bright Bars, Peeled & Ground Bars",
    application: "Extreme corrosive chemical environments",
  },

  // ============================================
  // 9. COPPER NICKEL ROUND BARS
  // ============================================
  {
    id: 9,
    slug: "copper-nickel-round-bars",
    image: rectangle,
    title: "Copper Nickel Round Bars Supplier – 70/30 & 90/10",
    shortDescription:
      "Copper Nickel Round Bars manufactured for marine engineering, desalination plants, condensers, and heat exchanger applications.",
    materialGroup: "Copper Nickel",
    standards:
      "ASTM B151, ASTM B466, ASTM B467, ASME SB151, DIN 17670, EN 12163",

    overview:
      "Copper Nickel round bars offering outstanding seawater corrosion resistance for shipbuilding, desalination plants, condensers, and heat exchangers. Manufactured from Copper-Nickel 70/30 (C71500) and 90/10 (C70600) grades, our round bars deliver excellent resistance to seawater corrosion, biofouling, and erosion in the most demanding marine environments.",

    grades: [
      "Copper-Nickel 90/10 (C70600)",
      "Copper-Nickel 70/30 (C71500)",
      "Copper-Nickel 66/30/2/2",
      "Cupro-Nickel 95/5",
    ],

    supplyForms: [
      "Round Bars",
      "Bright Bars",
      "Peeled & Ground Bars",
      "Centerless Ground Bars",
      "Polished Bars",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM B151, ASTM B466, ASTM B467, ASME SB151, DIN 17670, EN 12163",
      diameterRange: "5 mm to 300 mm",
      lengthRange: "3 m to 6 m (Custom Cut Lengths Available)",
      materialGrades:
        "Cu-Ni 90/10 (C70600), Cu-Ni 70/30 (C71500), 66/30/2/2, 95/5",
      surfaceFinish: "Mill Finish, Pickled, Polished, Annealed, Bright",
      manufacturingMethods: "Hot Rolled, Cold Drawn, Peeled, Ground, Polished",
      qualityTesting: "PMI, Tensile, Hardness, Ultrasonic, Dye Penetrant",
    },

    standardsCompliance: [
      "ASTM B151 — Copper-Nickel-Zinc Alloy (Nickel Silver) and Copper-Nickel Rod and Bar",
      "ASTM B466 — Seamless Copper-Nickel Pipe and Tube",
      "ASTM B467 — Welded Copper-Nickel Pipe",
      "ASME SB151 — Copper-Nickel-Zinc Alloy and Copper-Nickel Rod and Bar",
      "DIN 17670 — Copper and Copper Alloy Sheet and Strip",
      "EN 12163 — Copper and Copper Alloys — Rod for General Purposes",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Hot Rolled / Cold Drawn / Peeled & Ground",
    pressureRating: "N/A (Structural)",
    temperatureRange: "-196°C to +400°C",
    tolerance: "Per ASTM / DIN Standards",
    certifications: "EN 10204 3.1 & 3.2 MTC, NACE MR0175 compliant",

    industryApplications: [
      "Shipbuilding and marine structures",
      "Desalination plants and seawater systems",
      "Condensers and heat exchangers",
      "Offshore oil and gas platforms",
      "Power generation and nuclear",
      "Seawater piping and cooling systems",
    ],

    forms: "Round Bars, Bright Bars, Peeled & Ground Bars",
    application:
      "Marine engineering, desalination plants, condensers, and heat exchangers",
  },
];

export default rodBars;
