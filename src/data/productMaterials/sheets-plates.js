// src/data/productMaterials/sheets.js

// ============================================
// IMAGE IMPORTS — Only these 9 images
// ============================================
import tita from "../../../public/images/stock/titanium-sheets.jpg";
import stain from "../../../public/images/stock/stainless-steel-sheets.jpg";
import high from "../../../public/images/stock/high-performance-alloy-sheets.jpg";
import ally28 from "../../../public/images/stock/alloy-28-sheets.jpg";
import special from "../../../public/images/stock/special-alloy-sheets.jpg";
import ally200 from "../../../public/images/stock/nickel-alloy-200-201-sheets.jpg";
import mon from "../../../public/images/stock/monel-400-sheets.jpg";
import inc from "../../../public/images/stock/inconel-sheets.jpg";
import cop from "../../../public/images/stock/copper-nickel-sheets.jpg";

// ============================================
// SHEETS — 9 Products (One Per Material Group)
// ============================================
const sheets = [
  // ============================================
  // 1. TITANIUM SHEETS
  // ============================================
  {
    id: 1,
    slug: "titanium-sheets",
    image: tita,
    title: "Titanium Sheets Supplier – Grade 2 & Grade 5",
    shortDescription:
      "Titanium Sheets offering exceptional strength, lightweight properties, and superior corrosion resistance for aerospace, marine, and chemical industries.",
    materialGroup: "Titanium",
    standards:
      "ASTM B265, ASTM B338, ASME SB265, DIN 17860, DIN 65328, AMS 4911",

    overview:
      "Ultra-lightweight, high-strength titanium sheets with impervious corrosion immunity against seawater, wet chlorine, and organic chlorides. Manufactured from Grade 1, 2, 5 (Ti-6Al-4V), and 7 grades in hot rolled and cold rolled conditions, our titanium sheets deliver exceptional performance in aerospace, marine, and chemical processing applications.",

    grades: [
      "Grade 1",
      "Grade 2",
      "Grade 5 (Ti-6Al-4V)",
      "Grade 7",
      "Grade 12",
    ],

    supplyForms: [
      "Hot Rolled Sheets",
      "Cold Rolled Sheets",
      "Precision Ground Sheets",
      "Polished Sheets",
      "Custom Cut Lengths",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM B265, ASTM B338, ASME SB265, DIN 17860, DIN 65328, AMS 4911",
      sheetThickness: "0.3 mm to 6 mm",
      width: "1000 mm to 2500 mm",
      length: "2000 mm to 6000 mm",
      materialGrades: "Grade 1, 2, 5 (Ti-6Al-4V), 7, 12",
      surfaceFinish: "Pickled, Passivated, Anodized, Bright Annealed, Polished",
      manufacturingMethods: "Hot Rolled, Cold Rolled, Annealed",
      qualityTesting: "PMI, Tensile, Hardness, Dimensional, Surface Inspection",
    },

    standardsCompliance: [
      "ASTM B265 — Titanium and Titanium Alloy Strip, Sheet, and Plate",
      "ASTM B338 — Seamless and Welded Titanium and Titanium Alloy Tubes",
      "ASME SB265 — Titanium and Titanium Alloy Strip, Sheet, and Plate",
      "DIN 17860 — Titanium and Titanium Alloy Sheet, Strip, and Plate",
      "DIN 65328 — Aerospace Titanium Alloy Bolts",
      "AMS 4911 — Titanium Alloy Sheet, Strip, and Plate",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Hot Rolled / Cold Rolled / Annealed",
    pressureRating: "Per ASME BPVC Section VIII",
    temperatureRange: "-200°C to +400°C",
    tolerance: "Per ASTM B265 / DIN 17860",
    certifications: "EN 10204 3.1 & 3.2 MTC, NACE MR0175 compliant",

    industryApplications: [
      "Aerospace and aircraft components",
      "Marine and offshore seawater systems",
      "Chemical processing and chlor-alkali plants",
      "Desalination plants",
      "Medical implants and equipment",
      "Cryogenic and heat exchanger systems",
    ],

    forms: "Hot Rolled, Cold Rolled, Precision Ground Sheets",
    application: "Aerospace, marine, and chemical industries",
  },

  // ============================================
  // 2. STAINLESS STEEL SHEETS
  // ============================================
  {
    id: 2,
    slug: "stainless-steel-sheets",
    image: stain,
    title:
      "Stainless Steel Sheets Supplier – 304, 304L, 316, 316L, 310S, 904L & More",
    shortDescription:
      "Premium Stainless Steel Sheets manufactured in various grades for fabrication, pressure vessels, food processing, pharmaceutical, and engineering applications.",
    materialGroup: "Stainless Steel",
    standards:
      "ASTM A240, ASME SA240, ASTM A480, EN 10088, DIN 17440, ISO 9444",

    overview:
      "Complete range of stainless steel sheets conforming to ASTM A240, ASME SA240, and ASTM A480 standards. Manufactured from premium SS 304, 304L, 316, 316L, 310S, 321, 347, and 904L grades with full material traceability and intergranular corrosion resistance — engineered for chemical processing, pressure vessels, food processing, pharmaceutical, and architectural fabrication.",

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
      "Hot Rolled Sheets",
      "Cold Rolled Sheets",
      "2B Finish Sheets",
      "BA Finish Sheets",
      "No.4 Finish Sheets",
      "Mirror Polished Sheets",
      "Chequered Sheets",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM A240, ASME SA240, ASTM A480, EN 10088, DIN 17440, ISO 9444",
      sheetThickness: "0.3 mm to 6 mm",
      width: "1000 mm to 3000 mm",
      length: "2000 mm to 12000 mm",
      materialGrades: "SS 304/304L/316/316L/310S/321/347/904L",
      surfaceFinish:
        "No.1, 2B, BA, No.4, No.8 Mirror, Hairline, Chequered, Embossed",
      manufacturingMethods: "Hot Rolled, Cold Rolled, Annealed, Pickled",
      qualityTesting: "PMI, Tensile, Hardness, Dimensional, Surface Inspection",
    },

    standardsCompliance: [
      "ASTM A240 — Chromium and Chromium-Nickel Stainless Steel Plate, Sheet, and Strip",
      "ASME SA240 — Chromium and Chromium-Nickel Stainless Steel Plate, Sheet, and Strip",
      "ASTM A480 — General Requirements for Flat-Rolled Stainless and Heat-Resisting Steel",
      "EN 10088 — Stainless Steels Technical Delivery Conditions",
      "DIN 17440 — Stainless Steel Flat Products",
      "ISO 9444 — Continuously Hot-Rolled Stainless Steel Strip and Plate",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Hot Rolled / Cold Rolled",
    pressureRating: "Per ASME BPVC Section VIII / ASME B31.3",
    temperatureRange: "-196°C to +800°C",
    tolerance: "Per ASTM A480 / EN 10088",
    certifications: "EN 10204 3.1 & 3.2 MTC, NACE MR0175 compliant",

    industryApplications: [
      "Chemical, petrochemical, and pharmaceutical process equipment",
      "Pressure vessels, boilers, and heat exchangers",
      "Food, beverage, and dairy processing",
      "Architectural cladding and construction",
      "Offshore oil and gas platforms",
      "Desalination plants and power generation",
    ],

    forms: "Hot Rolled Sheets, Cold Rolled Sheets, Polished Sheets",
    application:
      "Fabrication, pressure vessels, food processing, pharmaceutical, and engineering applications",
  },

  // ============================================
  // 3. HIGH-PERFORMANCE ALLOY SHEETS
  // ============================================
  {
    id: 3,
    slug: "high-performance-alloy-sheets",
    image: high,
    title:
      "High-Performance Alloy Sheets Supplier – Nimonic, Nichrome, Nitronic, Nilo & Alloy",
    shortDescription:
      "High-performance alloy sheets engineered for extreme temperatures, aerospace, power generation, and demanding industrial applications.",
    materialGroup: "High-Performance Alloys",
    standards:
      "ASTM B168, B409, B443, B536, B575, AMS 5540, AMS 5596, DIN 17742, DIN 17753",

    overview:
      "Specialized high-performance alloy sheets engineered for high-temperature, aerospace, and critical engineering applications. Manufactured from Nimonic, Nichrome, Nitronic, Nilo, and other specialized alloys, our sheets deliver exceptional oxidation resistance, high-temperature strength, and superior mechanical properties in the most demanding environments.",

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
      "Hot Rolled Sheets",
      "Cold Rolled Sheets",
      "Precision Ground Sheets",
      "Aerospace Grade Sheets",
      "Custom Cut Lengths",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM B168, B409, B443, B536, B575, AMS 5540, AMS 5596, DIN 17742, DIN 17753",
      sheetThickness: "0.3 mm to 6 mm",
      width: "1000 mm to 2500 mm",
      length: "2000 mm to 6000 mm",
      materialGrades:
        "Nimonic 75/80A/90, Nichrome, Nitronic 50/60, Nilo 36/42/48",
      surfaceFinish: "Pickled, Passivated, Polished, Bright Annealed",
      manufacturingMethods: "Hot Rolled, Cold Rolled, Solution Annealed",
      qualityTesting: "PMI, Tensile, Hardness, Dimensional, Surface Inspection",
    },

    standardsCompliance: [
      "ASTM B168 — Nickel-Chromium-Iron Alloys Plate, Sheet, and Strip",
      "ASTM B409 — Nickel-Iron-Chromium Alloy Plate, Sheet, and Strip",
      "ASTM B443 — Nickel-Chromium-Molybdenum-Columbium Alloy Plate, Sheet, and Strip",
      "ASTM B536 — Nickel-Iron-Chromium-Silicon Alloys Plate, Sheet, and Strip",
      "ASTM B575 — Low-Carbon Nickel-Chromium-Molybdenum Alloy Plate, Sheet, Strip",
      "AMS 5540 — Nickel Alloy Corrosion and Heat-Resistant Sheet, Strip, and Plate",
      "AMS 5596 — Nickel Alloy Corrosion and Heat-Resistant Sheet, Strip, and Plate",
      "DIN 17742 — Wrought Nickel-Chromium Alloys",
      "DIN 17753 — Wrought Nickel Alloys",
    ],

    manufacturingType: "Hot Rolled / Cold Rolled / Solution Annealed",
    pressureRating: "Per ASME BPVC Section VIII",
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

    forms: "Hot Rolled Sheets, Cold Rolled Sheets, Precision Ground Sheets",
    application:
      "High-temperature, aerospace, power generation, and demanding industrial applications",
  },

  // ============================================
  // 4. ALLOY 28 SHEETS
  // ============================================
  {
    id: 4,
    slug: "alloy-28-sheets",
    image: ally28,
    title: "Alloy 28 Sheets Supplier – UNS N08028",
    shortDescription:
      "Alloy 28 Sheets offering excellent resistance to pitting, crevice corrosion, and aggressive chemical processing environments.",
    materialGroup: "Alloy 28",
    standards: "ASTM B709, ASTM B729, ASME SB709, DIN 17744, NACE MR0175",

    overview:
      "Alloy 28 sheets providing excellent resistance to pitting, crevice corrosion, and aggressive chemical environments. Manufactured to ASTM B709 and B729 standards, our Alloy 28 sheets deliver exceptional performance in sulfuric acid, phosphoric acid, and chloride-rich environments across chemical processing, marine, and pollution control industries.",

    grades: ["Alloy 28 (UNS N08028)", "Sanicro 28", "1.4563"],

    supplyForms: [
      "Hot Rolled Sheets",
      "Cold Rolled Sheets",
      "Precision Ground Sheets",
      "Custom Cut Lengths",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM B709, ASTM B729, ASME SB709, DIN 17744, NACE MR0175",
      sheetThickness: "0.5 mm to 6 mm",
      width: "1000 mm to 2500 mm",
      length: "2000 mm to 6000 mm",
      materialGrades: "Alloy 28 (UNS N08028), Sanicro 28, 1.4563",
      surfaceFinish: "Pickled, Passivated, Polished, Solution Annealed",
      manufacturingMethods: "Hot Rolled, Cold Rolled, Solution Annealed",
      qualityTesting: "PMI, Tensile, Hardness, Dimensional, Surface Inspection",
    },

    standardsCompliance: [
      "ASTM B709 — Iron-Nickel-Chromium-Molybdenum Alloy Plate, Sheet, and Strip",
      "ASTM B729 — Seamless UNS N08020, N08026, and N08024 Alloy Pipe and Tube",
      "ASME SB709 — Iron-Nickel-Chromium-Molybdenum Alloy Plate, Sheet, and Strip",
      "DIN 17744 — Wrought Nickel Alloys",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Hot Rolled / Cold Rolled / Solution Annealed",
    pressureRating: "Per ASME BPVC Section VIII",
    temperatureRange: "-196°C to +400°C",
    tolerance: "Per ASTM / DIN Standards",
    certifications: "EN 10204 3.1 & 3.2 MTC, NACE MR0175 compliant",

    industryApplications: [
      "Sulfuric and phosphoric acid production",
      "Chemical processing and acid handling",
      "Marine and offshore structures",
      "Pollution control scrubbers",
      "Pulp and paper digesters",
      "Heat exchangers and condensers",
    ],

    forms: "Hot Rolled Sheets, Cold Rolled Sheets, Precision Ground Sheets",
    application:
      "Chemical processing, marine, offshore, and pollution control industries",
  },

  // ============================================
  // 5. SPECIAL ALLOY SHEETS
  // ============================================
  {
    id: 5,
    slug: "special-alloy-sheets",
    image: special,
    title: "Special Alloy Sheets Supplier – SMO 254 (F44) & Alloy 20",
    shortDescription:
      "Special Alloy Sheets manufactured for outstanding corrosion resistance in offshore, marine, and chemical processing industries.",
    materialGroup: "Special Alloys",
    standards:
      "ASTM B463, ASTM B729, ASTM A240, ASME SB463, DIN 17744, NACE MR0175",

    overview:
      "Special alloy sheets including SMO 254 (F44) and Alloy 20 engineered for exceptional corrosion resistance in marine, offshore, and chemical processing industries. Manufactured to ASTM B463, B729, and A240 standards, our sheets deliver superior resistance to pitting, crevice corrosion, and sulfuric acid environments.",

    grades: [
      "SMO 254 (F44)",
      "Alloy 20 (Carpenter 20)",
      "Alloy 20Cb-3",
      "UNS N08020",
      "UNS S31254",
    ],

    supplyForms: [
      "Hot Rolled Sheets",
      "Cold Rolled Sheets",
      "Precision Ground Sheets",
      "Custom Cut Lengths",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM B463, ASTM B729, ASTM A240, ASME SB463, DIN 17744, NACE MR0175",
      sheetThickness: "0.5 mm to 6 mm",
      width: "1000 mm to 2500 mm",
      length: "2000 mm to 6000 mm",
      materialGrades:
        "SMO 254 (F44), Alloy 20, Alloy 20Cb-3, UNS N08020, S31254",
      surfaceFinish: "Pickled, Passivated, Polished, Solution Annealed",
      manufacturingMethods: "Hot Rolled, Cold Rolled, Solution Annealed",
      qualityTesting: "PMI, Tensile, Hardness, Dimensional, Surface Inspection",
    },

    standardsCompliance: [
      "ASTM B463 — UNS N08020 Alloy Plate, Sheet, and Strip",
      "ASTM B729 — Seamless UNS N08020, N08026, and N08024 Alloy Pipe and Tube",
      "ASTM A240 — Chromium and Chromium-Nickel Stainless Steel Plate, Sheet, and Strip",
      "ASME SB463 — UNS N08020 Alloy Plate, Sheet, and Strip",
      "DIN 17744 — Wrought Nickel Alloys",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Hot Rolled / Cold Rolled / Solution Annealed",
    pressureRating: "Per ASME BPVC Section VIII",
    temperatureRange: "-196°C to +400°C",
    tolerance: "Per ASTM / DIN Standards",
    certifications: "EN 10204 3.1 & 3.2 MTC, NACE MR0175 compliant",

    industryApplications: [
      "Chemical processing and acid handling",
      "Marine and offshore structures",
      "Pulp and paper digesters",
      "Pollution control scrubbers",
      "Pharmaceutical and food processing",
      "Heat exchangers and condensers",
    ],

    forms: "Hot Rolled Sheets, Cold Rolled Sheets, Precision Ground Sheets",
    application: "Offshore, marine, and chemical processing industries",
  },

  // ============================================
  // 6. NICKEL ALLOY 200/201 SHEETS
  // ============================================
  {
    id: 6,
    slug: "nickel-alloy-200-201-sheets",
    image: ally200,
    title: "Nickel Alloy 200 / 201 Sheets Supplier",
    shortDescription:
      "Nickel Alloy 200/201 Sheets providing excellent thermal conductivity and corrosion resistance for industrial and chemical applications.",
    materialGroup: "Nickel Alloy",
    standards: "ASTM B162, ASME SB162, DIN 17740, NACE MR0175",

    overview:
      "Nickel Alloy 200/201 sheets manufactured for excellent thermal conductivity, corrosion resistance, and chemical processing applications. Manufactured to ASTM B162 standards, our Nickel 200/201 sheets deliver superior resistance to acids, alkalis, and seawater, with exceptional thermal and electrical conductivity.",

    grades: ["Nickel 200", "Nickel 201", "Nickel 205", "Nickel 212"],

    supplyForms: [
      "Hot Rolled Sheets",
      "Cold Rolled Sheets",
      "Precision Ground Sheets",
      "Custom Cut Lengths",
    ],

    technicalSpecs: {
      standardSpecifications: "ASTM B162, ASME SB162, DIN 17740, NACE MR0175",
      sheetThickness: "0.5 mm to 6 mm",
      width: "1000 mm to 2500 mm",
      length: "2000 mm to 6000 mm",
      materialGrades: "Nickel 200, 201, 205, 212",
      surfaceFinish: "Pickled, Passivated, Polished, Bright Annealed",
      manufacturingMethods: "Hot Rolled, Cold Rolled, Annealed",
      qualityTesting: "PMI, Tensile, Hardness, Dimensional, Surface Inspection",
    },

    standardsCompliance: [
      "ASTM B162 — Nickel Plate, Sheet, and Strip",
      "ASME SB162 — Nickel Plate, Sheet, and Strip",
      "DIN 17740 — Wrought Nickel Alloys",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Hot Rolled / Cold Rolled / Annealed",
    pressureRating: "Per ASME BPVC Section VIII",
    temperatureRange: "-196°C to +600°C",
    tolerance: "Per ASTM / DIN Standards",
    certifications: "EN 10204 3.1 & 3.2 MTC, NACE MR0175 compliant",

    industryApplications: [
      "Chemical processing and caustic handling",
      "Electronics and electrical components",
      "Food processing and handling equipment",
      "Heat exchangers and condensers",
      "Nuclear power generation",
      "Aerospace and missile components",
    ],

    forms: "Hot Rolled Sheets, Cold Rolled Sheets, Precision Ground Sheets",
    application: "Industrial and chemical applications",
  },

  // ============================================
  // 7. MONEL 400 SHEETS
  // ============================================
  {
    id: 7,
    slug: "monel-400-sheets",
    image: mon,
    title: "Monel 400 Sheets Supplier",
    shortDescription:
      "Monel 400 Sheets designed for superior resistance to seawater, acids, alkalis, and harsh marine environments.",
    materialGroup: "Monel Alloy",
    standards: "ASTM B127, ASME SB127, DIN 17743, NACE MR0175",

    overview:
      "Monel 400 sheets offering superior resistance to seawater, acids, alkalis, and harsh marine environments. Manufactured to ASTM B127 standards, our Monel 400 sheets deliver outstanding resistance to marine corrosion, hydrochloric acid, and sulfuric acid in desalination, marine engineering, and chemical processing applications.",

    grades: ["Monel 400", "Monel K500", "Monel R405"],

    supplyForms: [
      "Hot Rolled Sheets",
      "Cold Rolled Sheets",
      "Precision Ground Sheets",
      "Custom Cut Lengths",
    ],

    technicalSpecs: {
      standardSpecifications: "ASTM B127, ASME SB127, DIN 17743, NACE MR0175",
      sheetThickness: "0.5 mm to 6 mm",
      width: "1000 mm to 2500 mm",
      length: "2000 mm to 6000 mm",
      materialGrades: "Monel 400, K500, R405",
      surfaceFinish: "Pickled, Passivated, Polished, Annealed",
      manufacturingMethods: "Hot Rolled, Cold Rolled, Annealed",
      qualityTesting: "PMI, Tensile, Hardness, Dimensional, Surface Inspection",
    },

    standardsCompliance: [
      "ASTM B127 — Nickel-Copper Alloy Plate, Sheet, and Strip",
      "ASME SB127 — Nickel-Copper Alloy Plate, Sheet, and Strip",
      "DIN 17743 — Wrought Nickel-Copper Alloys",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Hot Rolled / Cold Rolled / Annealed",
    pressureRating: "Per ASME BPVC Section VIII",
    temperatureRange: "-196°C to +480°C",
    tolerance: "Per ASTM / DIN Standards",
    certifications: "EN 10204 3.1 & 3.2 MTC, NACE MR0175 compliant",

    industryApplications: [
      "Seawater and marine environments",
      "Desalination plants and heat exchangers",
      "Chemical processing and acid handling",
      "Offshore oil and gas platforms",
      "Storage tanks and vessels",
      "Power generation and nuclear",
    ],

    forms: "Hot Rolled Sheets, Cold Rolled Sheets, Precision Ground Sheets",
    application: "Seawater, acids, alkalis, and harsh marine environments",
  },

  // ============================================
  // 8. INCONEL & INCOLOY SHEETS
  // ============================================
  {
    id: 8,
    slug: "inconel-incoloy-sheets",
    image: inc,
    title:
      "Inconel & Incoloy Sheets Supplier – 600, 601, 625, 690, 718, 725, X-750, 800, 800H, 800HT, 825, 925 & 330",
    shortDescription:
      "Premium Inconel & Incoloy Sheets engineered for high-temperature strength, oxidation resistance, and demanding industrial applications.",
    materialGroup: "Inconel & Incoloy",
    standards:
      "ASTM B168, B409, B443, B536, B575, ASME SB168, DIN 17742, DIN 17751, NACE MR0175",

    overview:
      "Premium Inconel and Incoloy sheets engineered for high-temperature strength, oxidation resistance, and demanding industrial applications. Manufactured from Inconel 600, 601, 625, 690, 718, 725, X-750, and Incoloy 800, 800H, 800HT, 825, 925, 330 (DS 330) grades, our sheets deliver exceptional mechanical strength and corrosion resistance in thermal power, aerospace, and chemical processing applications.",

    grades: [
      "Inconel 600",
      "Inconel 601",
      "Inconel 625",
      "Inconel 690",
      "Inconel 718",
      "Inconel 725",
      "Inconel X-750",
      "Incoloy 800",
      "Incoloy 800H",
      "Incoloy 800HT",
      "Incoloy 825",
      "Incoloy 925",
      "Incoloy 330 (DS 330)",
    ],

    supplyForms: [
      "Hot Rolled Sheets",
      "Cold Rolled Sheets",
      "Precision Ground Sheets",
      "Aerospace Grade Sheets",
      "Custom Cut Lengths",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM B168, B409, B443, B536, B575, ASME SB168, DIN 17742, DIN 17751",
      sheetThickness: "0.5 mm to 6 mm",
      width: "1000 mm to 2500 mm",
      length: "2000 mm to 6000 mm",
      materialGrades:
        "Inconel 600/601/625/690/718/725/X-750, Incoloy 800/800H/800HT/825/925/330",
      surfaceFinish: "Pickled, Passivated, Polished, Solution Annealed",
      manufacturingMethods: "Hot Rolled, Cold Rolled, Solution Annealed",
      qualityTesting: "PMI, Tensile, Hardness, Dimensional, Surface Inspection",
    },

    standardsCompliance: [
      "ASTM B168 — Nickel-Chromium-Iron Alloys Plate, Sheet, and Strip",
      "ASTM B409 — Nickel-Iron-Chromium Alloy Plate, Sheet, and Strip",
      "ASTM B443 — Nickel-Chromium-Molybdenum-Columbium Alloy Plate, Sheet, and Strip",
      "ASTM B536 — Nickel-Iron-Chromium-Silicon Alloys Plate, Sheet, and Strip",
      "ASTM B575 — Low-Carbon Nickel-Chromium-Molybdenum Alloy Plate, Sheet, Strip",
      "ASME SB168 — Nickel-Chromium-Iron Alloys Plate, Sheet, and Strip",
      "DIN 17742 — Wrought Nickel-Chromium Alloys",
      "DIN 17751 — Wrought Nickel-Iron Alloys",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Hot Rolled / Cold Rolled / Solution Annealed",
    pressureRating: "Per ASME BPVC Section VIII",
    temperatureRange: "-200°C to +1000°C",
    tolerance: "Per ASTM / DIN Standards",
    certifications: "EN 10204 3.1 & 3.2 MTC, NACE MR0175 compliant",

    industryApplications: [
      "Thermal power and gas turbine components",
      "Aerospace and aircraft engine parts",
      "Nuclear reactors and heat exchangers",
      "Chemical processing and acid handling",
      "Heat treatment furnaces",
      "Pollution control equipment",
    ],

    forms: "Hot Rolled Sheets, Cold Rolled Sheets, Precision Ground Sheets",
    application:
      "High-temperature, aerospace, nuclear, and chemical processing industries",
  },

  // ============================================
  // 9. COPPER NICKEL SHEETS
  // ============================================
  {
    id: 9,
    slug: "copper-nickel-sheets",
    image: cop,
    title: "Copper Nickel Sheets Supplier – 70/30 & 90/10",
    shortDescription:
      "Copper Nickel Sheets manufactured for marine engineering, desalination plants, heat exchangers, condensers, and seawater piping systems.",
    materialGroup: "Copper Nickel",
    standards:
      "ASTM B171, ASTM B122, ASME SB171, DIN 17670, EN 1652, NACE MR0175",

    overview:
      "Copper Nickel sheets offering outstanding seawater corrosion resistance for shipbuilding, desalination plants, condensers, and heat exchangers. Manufactured from Copper-Nickel 70/30 (C71500) and 90/10 (C70600) grades, our sheets deliver excellent resistance to seawater corrosion, biofouling, and erosion in the most demanding marine environments.",

    grades: [
      "Copper-Nickel 90/10 (C70600)",
      "Copper-Nickel 70/30 (C71500)",
      "Copper-Nickel 66/30/2/2",
      "Cupro-Nickel 95/5",
    ],

    supplyForms: [
      "Hot Rolled Sheets",
      "Cold Rolled Sheets",
      "Precision Ground Sheets",
      "Custom Cut Lengths",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM B171, ASTM B122, ASME SB171, DIN 17670, EN 1652",
      sheetThickness: "0.5 mm to 6 mm",
      width: "1000 mm to 2500 mm",
      length: "2000 mm to 6000 mm",
      materialGrades:
        "Cu-Ni 90/10 (C70600), Cu-Ni 70/30 (C71500), 66/30/2/2, 95/5",
      surfaceFinish: "Mill Finish, Pickled, Polished, Annealed",
      manufacturingMethods: "Hot Rolled, Cold Rolled, Annealed",
      qualityTesting: "PMI, Tensile, Hardness, Dimensional, Surface Inspection",
    },

    standardsCompliance: [
      "ASTM B171 — Copper-Alloy Plate and Sheet for Pressure Vessels",
      "ASTM B122 — Copper-Nickel-Tin Alloy, Copper-Nickel-Zinc Alloy, and Copper-Nickel Plate, Sheet, Strip",
      "ASME SB171 — Copper-Alloy Plate and Sheet for Pressure Vessels",
      "DIN 17670 — Copper and Copper Alloy Sheet and Strip",
      "EN 1652 — Copper and Copper Alloys — Plate, Sheet, Strip",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Hot Rolled / Cold Rolled / Annealed",
    pressureRating: "Per ASME BPVC Section VIII",
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

    forms: "Hot Rolled Sheets, Cold Rolled Sheets, Precision Ground Sheets",
    application:
      "Marine engineering, desalination plants, heat exchangers, condensers, and seawater piping systems",
  },
];

export default sheets;
