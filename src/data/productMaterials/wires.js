// src/data/productMaterials/wires.js

// ============================================
// IMAGE IMPORTS — Only these 7 images
// ============================================
import bright from "../../../public/images/stock/bright-wire.jpg";
import coil from "../../../public/images/stock/coil-wire.jpg";
import coilheadingwireImage from "../../../public/images/stock/cold-heading-wire.jpg";
import filler from "../../../public/images/stock/filler-wire.jpg";
import weilding from "../../../public/images/stock/welding-wire.jpg";
import rope from "../../../public/images/stock/wire-rope.jpg";
import spool from "../../../public/images/stock/spool-wire.jpg";

// ============================================
// WIRES — 9 Products (One Per Material Group)
// ============================================
const wires = [
  // ============================================
  // 1. STAINLESS STEEL WIRES
  // ============================================
  {
    id: 1,
    slug: "stainless-steel-wires",
    image: coil,
    title:
      "Stainless Steel Wires Supplier – 304, 304L, 316, 316L, 310S, 904L & More",
    shortDescription:
      "High-quality Stainless Steel Wires manufactured in various grades for welding, spring manufacturing, fasteners, construction, and industrial applications.",
    materialGroup: "Stainless Steel",
    standards:
      "ASTM A580, ASTM A313, ASTM A555, ASME SA580, EN 10270, DIN 17740, NACE MR0175",

    overview:
      "Complete range of stainless steel wires conforming to ASTM A580, A313, and A555 standards. Manufactured from premium SS 304, 304L, 316, 316L, 310S, 321, 347, and 904L grades with full material traceability and intergranular corrosion resistance — engineered for welding, spring manufacturing, fasteners, construction, and industrial applications.",

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
      "Bright Wire",
      "Coil Wire",
      "Spool Wire",
      "Filler Wire",
      "Welding Wire",
      "Spring Wire",
      "Cold Heading Wire",
      "Wire Rope",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM A580, ASTM A313, ASTM A555, ASME SA580, EN 10270, DIN 17740",
      wireDiameter: "0.025 mm to 12.0 mm",
      coilWeight: "5 kg to 500 kg",
      spoolWeight: "1 kg to 25 kg",
      materialGrades: "SS 304/304L/316/316L/310S/321/347/904L",
      surfaceFinish: "Bright, Pickled, Passivated, Polished, Soap Coated",
      manufacturingMethods: "Cold Drawn, Annealed, Pickled, Bright",
      qualityTesting: "PMI, Tensile, Hardness, Dimensional, Surface Inspection",
    },

    standardsCompliance: [
      "ASTM A580 — Stainless Steel Wire",
      "ASTM A313 — Chromium-Nickel Stainless Steel Spring Wire",
      "ASTM A555 — General Requirements for Stainless Steel Wire and Wire Rods",
      "ASME SA580 — Stainless Steel Wire",
      "EN 10270 — Steel Wire for Mechanical Springs",
      "DIN 17740 — Wrought Nickel Alloys",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Cold Drawn / Annealed / Pickled / Bright",
    pressureRating: "N/A (Wire)",
    temperatureRange: "-196°C to +800°C",
    tolerance: "Per ASTM A555 / EN 10270",
    certifications: "EN 10204 3.1 & 3.2 MTC, NACE MR0175 compliant",

    industryApplications: [
      "Welding and fabrication",
      "Spring manufacturing",
      "Fasteners and bolts",
      "Construction and structural",
      "Food, beverage, and pharmaceutical",
      "Chemical and petrochemical processing",
    ],

    forms: "Coil Wire, Bright Wire, Spool Wire, Filler Wire, Welding Wire",
    application:
      "Welding, spring manufacturing, fasteners, construction, and industrial applications",
  },

  // ============================================
  // 2. CARBON STEEL WIRES
  // ============================================
  {
    id: 2,
    slug: "carbon-steel-wires",
    image: bright,
    title: "Carbon Steel Wires Supplier – Low, Medium & High Carbon",
    shortDescription:
      "Heavy-duty Carbon Steel Wires manufactured to ASTM A227, A228, A229 standards for spring, rope, welding, and industrial applications.",
    materialGroup: "Carbon Steel",
    standards:
      "ASTM A227, ASTM A228, ASTM A229, ASTM A641, EN 10270-1, DIN 17223, IS 4454",

    overview:
      "Heavy-duty carbon steel wires engineered for spring, rope, welding, and general engineering applications. Manufactured to ASTM A227, A228, A229, and A641 standards in low, medium, and high carbon grades, our carbon steel wires deliver superior strength, excellent fatigue resistance, and reliable performance in heavy industrial and construction applications.",

    grades: [
      "Low Carbon Steel",
      "Medium Carbon Steel",
      "High Carbon Steel",
      "ASTM A227",
      "ASTM A228",
      "ASTM A229",
      "ASTM A641",
    ],

    supplyForms: [
      "Bright Wire",
      "Coil Wire",
      "Spool Wire",
      "Filler Wire",
      "Welding Wire",
      "Spring Wire",
      "Cold Heading Wire",
      "Wire Rope",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM A227, ASTM A228, ASTM A229, ASTM A641, EN 10270-1, DIN 17223, IS 4454",
      wireDiameter: "0.10 mm to 12.0 mm",
      coilWeight: "5 kg to 1000 kg",
      spoolWeight: "1 kg to 25 kg",
      materialGrades:
        "Low Carbon, Medium Carbon, High Carbon, A227, A228, A229, A641",
      surfaceFinish: "Bright, Galvanized, Phosphate Coated, Soap Coated, Oiled",
      manufacturingMethods:
        "Cold Drawn, Annealed, Galvanized, Phosphate Coated",
      qualityTesting:
        "Tensile, Hardness, Fatigue, Dimensional, Surface Inspection",
    },

    standardsCompliance: [
      "ASTM A227 — Steel Wire, Hard Drawn for Mechanical Springs",
      "ASTM A228 — Steel Wire, Music Spring Quality",
      "ASTM A229 — Steel Wire, Oil-Tempered for Mechanical Springs",
      "ASTM A641 — Zinc-Coated (Galvanized) Carbon Steel Wire",
      "EN 10270-1 — Steel Wire for Mechanical Springs",
      "DIN 17223 — Round Steel Wire for Springs",
      "IS 4454 — Steel Wire for Mechanical Springs",
    ],

    manufacturingType: "Cold Drawn / Annealed / Galvanized / Phosphate Coated",
    pressureRating: "N/A (Wire)",
    temperatureRange: "-29°C to +400°C",
    tolerance: "Per ASTM A641 / EN 10270-1",
    certifications: "EN 10204 3.1 MTC",

    industryApplications: [
      "Spring manufacturing",
      "Wire rope and cable",
      "Welding and fabrication",
      "Fasteners and bolts",
      "Construction and structural",
      "Agricultural and fencing",
    ],

    forms: "Coil Wire, Bright Wire, Spool Wire, Filler Wire, Welding Wire",
    application: "Spring, rope, welding, and industrial applications",
  },

  // ============================================
  // 3. TITANIUM WIRES
  // ============================================
  {
    id: 3,
    slug: "titanium-wires",
    image: bright,
    title: "Titanium Wires Supplier – Grade 2 & Grade 5",
    shortDescription:
      "Premium Titanium Wires offering exceptional corrosion resistance, lightweight strength, and superior performance for aerospace, marine, medical, and chemical industries.",
    materialGroup: "Titanium",
    standards:
      "ASTM B863, ASTM F67, ASTM F136, ASME SB863, DIN 17865, AMS 4951, AMS 4956",

    overview:
      "Ultra-lightweight, high-strength titanium wires with impervious corrosion immunity against seawater, wet chlorine, and organic chlorides. Manufactured from Grade 1, 2, 5 (Ti-6Al-4V), and 7 grades, our titanium wires deliver exceptional performance in aerospace, marine, medical, and chemical processing applications.",

    grades: [
      "Grade 1",
      "Grade 2",
      "Grade 5 (Ti-6Al-4V)",
      "Grade 7",
      "Grade 12",
      "Ti-6Al-4V ELI (Grade 23)",
    ],

    supplyForms: [
      "Bright Wire",
      "Coil Wire",
      "Spool Wire",
      "Filler Wire",
      "Welding Wire",
      "Straight Wire",
      "Medical Grade Wire",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM B863, ASTM F67, ASTM F136, ASME SB863, DIN 17865, AMS 4951, AMS 4956",
      wireDiameter: "0.025 mm to 8.0 mm",
      coilWeight: "1 kg to 100 kg",
      spoolWeight: "0.5 kg to 25 kg",
      materialGrades: "Grade 1, 2, 5 (Ti-6Al-4V), 7, 12, 23",
      surfaceFinish: "Bright, Pickled, Passivated, Polished, Anodized",
      manufacturingMethods: "Cold Drawn, Annealed, Pickled, Bright",
      qualityTesting: "PMI, Tensile, Hardness, Ultrasonic, Surface Inspection",
    },

    standardsCompliance: [
      "ASTM B863 — Titanium and Titanium Alloy Wire",
      "ASTM F67 — Unalloyed Titanium for Surgical Implant Applications",
      "ASTM F136 — Wrought Titanium-6Aluminum-4Vanadium ELI Alloy for Surgical Implants",
      "ASME SB863 — Titanium and Titanium Alloy Wire",
      "DIN 17865 — Titanium and Titanium Alloy Wire",
      "AMS 4951 — Titanium Alloy Wire",
      "AMS 4956 — Titanium Alloy Wire",
    ],

    manufacturingType: "Cold Drawn / Annealed / Pickled / Bright",
    pressureRating: "N/A (Wire)",
    temperatureRange: "-200°C to +400°C",
    tolerance: "Per ASTM B863 / DIN 17865",
    certifications: "EN 10204 3.1 & 3.2 MTC",

    industryApplications: [
      "Aerospace and aircraft components",
      "Medical implants and surgical instruments",
      "Marine and offshore seawater systems",
      "Chemical processing and chlor-alkali plants",
      "Welding and fabrication",
      "Desalination and heat exchangers",
    ],

    forms: "Bright Wire, Coil Wire, Spool Wire, Filler Wire, Welding Wire",
    application: "Aerospace, marine, medical, and chemical industries",
  },

  // ============================================
  // 4. ALLOY STEEL WIRES
  // ============================================
  {
    id: 4,
    slug: "alloy-steel-wires",
    image: filler,
    title: "Alloy Steel Wires Supplier – 4140, 4340, EN24, EN19",
    shortDescription:
      "Chromium-Molybdenum Alloy Steel Wires engineered for high-strength, high-temperature, and critical engineering applications.",
    materialGroup: "Alloy Steel",
    standards:
      "ASTM A401, ASTM A752, AISI 4140, AISI 4340, EN19, EN24, DIN 1.7225, DIN 1.6582",

    overview:
      "Chromium-molybdenum high-strength alloy steel wires engineered for high-strength, high-temperature, and critical engineering applications. Manufactured from AISI 4140, AISI 4340, EN19, and EN24 grades, our alloy steel wires deliver superior mechanical strength, fatigue resistance, and reliability for automotive, aerospace, and heavy machinery applications.",

    grades: [
      "AISI 4140 (EN19)",
      "AISI 4340 (EN24)",
      "AISI 4130",
      "AISI 8620",
      "EN8D",
      "EN353",
      "ASTM A401",
      "ASTM A752",
    ],

    supplyForms: [
      "Bright Wire",
      "Coil Wire",
      "Spool Wire",
      "Filler Wire",
      "Welding Wire",
      "Spring Wire",
      "Cold Heading Wire",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM A401, ASTM A752, AISI 4140, AISI 4340, EN19, EN24, DIN 1.7225, DIN 1.6582",
      wireDiameter: "0.10 mm to 12.0 mm",
      coilWeight: "5 kg to 500 kg",
      spoolWeight: "1 kg to 25 kg",
      materialGrades:
        "4140, 4340, 4130, 8620, EN8D, EN19, EN24, EN353, A401, A752",
      surfaceFinish: "Bright, Phosphate Coated, Annealed, Soap Coated, Oiled",
      manufacturingMethods:
        "Cold Drawn, Annealed, Phosphate Coated, Heat Treated",
      qualityTesting: "PMI, Tensile, Hardness, Fatigue, Dimensional",
    },

    standardsCompliance: [
      "ASTM A401 — Steel Wire, Alloy Cold Heading Quality",
      "ASTM A752 — Steel Wire, Alloy Spring Quality",
      "AISI 4140 — Chromium-Molybdenum Alloy Steel",
      "AISI 4340 — Nickel-Chromium-Molybdenum Alloy Steel",
      "DIN 1.7225 — 42CrMo4 Alloy Steel",
      "DIN 1.6582 — 34CrNiMo6 Alloy Steel",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType:
      "Cold Drawn / Annealed / Phosphate Coated / Heat Treated",
    pressureRating: "N/A (Wire)",
    temperatureRange: "-29°C to +540°C",
    tolerance: "Per ASTM A752 / DIN Standards",
    certifications: "EN 10204 3.1 MTC, NACE MR0175 compliant",

    industryApplications: [
      "Spring manufacturing",
      "Fasteners and bolts",
      "Automotive and transmission components",
      "Aerospace and aircraft parts",
      "Heavy machinery and equipment",
      "Oil and gas drilling tools",
    ],

    forms: "Bright Wire, Coil Wire, Spool Wire, Filler Wire, Welding Wire",
    application:
      "High-strength, high-temperature, and critical engineering applications",
  },

  // ============================================
  // 5. HIGH-PERFORMANCE ALLOY WIRES
  // ============================================
  {
    id: 5,
    slug: "high-performance-alloy-wires",
    image: spool,
    title:
      "High-Performance Alloy Wires Supplier – Nimonic, Nichrome, Nitronic, Nilo & More",
    shortDescription:
      "High-performance Alloy Wires engineered for high-temperature, aerospace, electrical, and critical engineering applications.",
    materialGroup: "High-Performance Alloys",
    standards:
      "ASTM B408, B446, B637, AMS 5666, AMS 5731, DIN 17742, DIN 17753",

    overview:
      "Specialized high-performance alloy wires engineered for high-temperature, aerospace, electrical, and critical engineering applications. Manufactured from Nimonic, Nichrome, Nitronic, Nilo, and other specialized alloys, our wires deliver exceptional oxidation resistance, high-temperature strength, and superior mechanical properties in the most demanding environments.",

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
      "Bright Wire",
      "Coil Wire",
      "Spool Wire",
      "Filler Wire",
      "Welding Wire",
      "Resistance Wire",
      "Thermocouple Wire",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM B408, B446, B637, AMS 5666, AMS 5731, DIN 17742, DIN 17753",
      wireDiameter: "0.025 mm to 8.0 mm",
      coilWeight: "1 kg to 100 kg",
      spoolWeight: "0.5 kg to 25 kg",
      materialGrades:
        "Nimonic 75/80A/90, Nichrome, Nitronic 50/60, Nilo 36/42/48",
      surfaceFinish: "Bright, Pickled, Passivated, Polished, Enameled",
      manufacturingMethods: "Cold Drawn, Annealed, Pickled, Bright",
      qualityTesting:
        "PMI, Tensile, Hardness, Electrical Resistivity, Dimensional",
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

    manufacturingType: "Cold Drawn / Annealed / Pickled / Bright",
    pressureRating: "N/A (Wire)",
    temperatureRange: "-200°C to +1000°C",
    tolerance: "Per ASTM / AMS / DIN Standards",
    certifications: "EN 10204 3.1 & 3.2 MTC",

    industryApplications: [
      "Aerospace and aircraft engine components",
      "Power generation and gas turbine engines",
      "Electrical heating elements",
      "Thermocouples and resistance wires",
      "High-temperature furnace components",
      "Nuclear reactors and heat exchangers",
    ],

    forms: "Bright Wire, Coil Wire, Spool Wire, Filler Wire, Resistance Wire",
    application:
      "High-temperature, aerospace, electrical, and critical engineering applications",
  },

  // ============================================
  // 6. NICKEL ALLOY WIRES
  // ============================================
  {
    id: 6,
    slug: "nickel-alloy-wires",
    image: rope,
    title:
      "Nickel Alloy Wires Supplier – 200, 201, Monel 400, Inconel 600/625/718, Incoloy 800/825",
    shortDescription:
      "Nickel Alloy 200/201 Wires providing excellent thermal conductivity, corrosion resistance, and durability for industrial applications.",
    materialGroup: "Nickel Alloy",
    standards:
      "ASTM B160, B164, B166, B408, B425, B446, ASME SB160, DIN 17753, NACE MR0175",

    overview:
      "Premium nickel alloy wires engineered for extreme temperature, pressure, and corrosive environments. Manufactured from Nickel 200/201, Monel 400, Inconel 600/625/718, and Incoloy 800/825 grades, our wires deliver exceptional oxidation resistance, high-temperature strength, and superior resistance to acids, alkalis, and seawater.",

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
      "Bright Wire",
      "Coil Wire",
      "Spool Wire",
      "Filler Wire",
      "Welding Wire",
      "Thermocouple Wire",
      "Resistance Wire",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM B160, B164, B166, B408, B425, B446, ASME SB160, DIN 17753",
      wireDiameter: "0.025 mm to 8.0 mm",
      coilWeight: "1 kg to 100 kg",
      spoolWeight: "0.5 kg to 25 kg",
      materialGrades:
        "Nickel 200/201, Monel 400/K500, Inconel 600/625/718, Incoloy 800/825",
      surfaceFinish: "Bright, Pickled, Passivated, Polished, Enameled",
      manufacturingMethods: "Cold Drawn, Annealed, Pickled, Bright",
      qualityTesting:
        "PMI, Tensile, Hardness, Electrical Resistivity, Dimensional",
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

    manufacturingType: "Cold Drawn / Annealed / Pickled / Bright",
    pressureRating: "N/A (Wire)",
    temperatureRange: "-200°C to +800°C",
    tolerance: "Per ASTM / DIN Standards",
    certifications: "EN 10204 3.1 & 3.2 MTC, NACE MR0175 compliant",

    industryApplications: [
      "Chemical processing and acid handling systems",
      "Marine engineering and desalination plants",
      "Nuclear power generation and heat exchangers",
      "Aerospace and turbine engine components",
      "Thermocouples and resistance wires",
      "Heat treatment furnaces and industrial equipment",
    ],

    forms: "Bright Wire, Coil Wire, Spool Wire, Filler Wire, Welding Wire",
    application: "Industrial and chemical applications",
  },

  // ============================================
  // 7. DUPLEX & SUPER DUPLEX WIRES
  // ============================================
  {
    id: 7,
    slug: "duplex-super-duplex-steel-wires",
    image: filler,
    title:
      "Duplex & Super Duplex Steel Wires Supplier – S31803, S32205, S32750 & S32760",
    shortDescription:
      "Duplex and Super Duplex Steel Wires combining high tensile strength with exceptional corrosion resistance for offshore, marine, and chemical industries.",
    materialGroup: "Duplex Alloys",
    standards:
      "ASTM A580, ASTM A313, ASTM A555, ASME SA580, NACE MR0175, EN 10088",

    overview:
      "High-strength duplex and super duplex steel wires providing exceptional resistance to chloride stress corrosion cracking. Manufactured from UNS S31803, S32205, S32750, and S32760 grades, our wires deliver superior strength and corrosion resistance for offshore oil & gas, desalination, and chemical processing applications.",

    grades: [
      "Duplex UNS S31803",
      "Duplex UNS S32205 (2205)",
      "Super Duplex UNS S32750 (2507)",
      "Super Duplex UNS S32760",
      "F51",
      "F53",
      "F55",
      "F61",
    ],

    supplyForms: [
      "Bright Wire",
      "Coil Wire",
      "Spool Wire",
      "Filler Wire",
      "Welding Wire",
      "Spring Wire",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM A580, ASTM A313, ASTM A555, ASME SA580, EN 10088, NACE MR0175",
      wireDiameter: "0.10 mm to 8.0 mm",
      coilWeight: "5 kg to 500 kg",
      spoolWeight: "1 kg to 25 kg",
      materialGrades: "S31803, S32205, S32750, S32760, F51, F53, F55, F61",
      surfaceFinish: "Bright, Pickled, Passivated, Polished, Soap Coated",
      manufacturingMethods: "Cold Drawn, Annealed, Pickled, Bright",
      qualityTesting: "PMI, Tensile, Hardness, Dimensional, Surface Inspection",
    },

    standardsCompliance: [
      "ASTM A580 — Stainless Steel Wire",
      "ASTM A313 — Chromium-Nickel Stainless Steel Spring Wire",
      "ASTM A555 — General Requirements for Stainless Steel Wire and Wire Rods",
      "ASME SA580 — Stainless Steel Wire",
      "EN 10088 — Stainless Steels Technical Delivery Conditions",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Cold Drawn / Annealed / Pickled / Bright",
    pressureRating: "N/A (Wire)",
    temperatureRange: "-50°C to +300°C",
    tolerance: "Per ASTM A555 / EN 10088",
    certifications: "EN 10204 3.1 & 3.2 MTC, NACE MR0175 compliant",

    industryApplications: [
      "Offshore oil and gas platforms",
      "Subsea flowlines and risers",
      "Desalination plants and seawater systems",
      "Chemical cargo tankers",
      "Pulp and paper digesters",
      "Pollution control scrubbers",
    ],

    forms: "Bright Wire, Coil Wire, Spool Wire, Filler Wire, Welding Wire",
    application: "Offshore, marine, chemical, and oil & gas industries",
  },

  // ============================================
  // 8. HIGH ALLOY WIRES
  // ============================================
  {
    id: 8,
    slug: "high-alloy-wires",
    image: spool,
    title:
      "High Alloy Wires Supplier – Hastelloy C22, C276, Alloy 20, SMO 254 & Alloy 28",
    shortDescription:
      "Hastelloy Wires designed to withstand highly corrosive chemicals, acids, and harsh industrial processing environments.",
    materialGroup: "High Alloys",
    standards:
      "ASTM B574, B575, B622, B729, B564, ASME SB574, DIN 17744, NACE MR0175",

    overview:
      "Specialized high-alloy wires engineered for wet chlorine, sulfuric acid, phosphoric acid, and aggressive halide services. Manufactured from Hastelloy C22, C276, Alloy 20, SMO 254, and Alloy 28 grades, our wires deliver exceptional performance in the most demanding corrosive environments across chemical processing, pollution control, and pharmaceutical industries.",

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
      "Bright Wire",
      "Coil Wire",
      "Spool Wire",
      "Filler Wire",
      "Welding Wire",
      "Spring Wire",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM B574, B575, B622, B729, B564, ASME SB574, DIN 17744, NACE MR0175",
      wireDiameter: "0.10 mm to 8.0 mm",
      coilWeight: "5 kg to 500 kg",
      spoolWeight: "1 kg to 25 kg",
      materialGrades:
        "Hastelloy C22/C276/C2000/B2/B3, Alloy 20, Alloy 28, SMO 254, Alloy 59",
      surfaceFinish: "Bright, Pickled, Passivated, Polished, Soap Coated",
      manufacturingMethods: "Cold Drawn, Annealed, Pickled, Bright",
      qualityTesting: "PMI, Tensile, Hardness, Dimensional, Surface Inspection",
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

    manufacturingType: "Cold Drawn / Annealed / Pickled / Bright",
    pressureRating: "N/A (Wire)",
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

    forms: "Bright Wire, Coil Wire, Spool Wire, Filler Wire, Welding Wire",
    application:
      "Highly corrosive chemicals, acids, and harsh industrial processing",
  },

  // ============================================
  // 9. COPPER NICKEL WIRES
  // ============================================
  {
    id: 9,
    slug: "copper-nickel-wires",
    image: rope,
    title: "Copper Nickel Wires Supplier – 70/30 & 90/10",
    shortDescription:
      "Copper Nickel Wires offering excellent seawater corrosion resistance for marine engineering, heat exchangers, condensers, and desalination plants.",
    materialGroup: "Copper Nickel",
    standards:
      "ASTM B206, ASTM B467, ASME SB206, DIN 17670, EN 12166, NACE MR0175",

    overview:
      "Copper Nickel wires offering outstanding seawater corrosion resistance for shipbuilding, desalination plants, condensers, and heat exchangers. Manufactured from Copper-Nickel 70/30 (C71500) and 90/10 (C70600) grades, our wires deliver excellent resistance to seawater corrosion, biofouling, and erosion in the most demanding marine environments.",

    grades: [
      "Copper-Nickel 90/10 (C70600)",
      "Copper-Nickel 70/30 (C71500)",
      "Copper-Nickel 66/30/2/2",
      "Cupro-Nickel 95/5",
    ],

    supplyForms: [
      "Bright Wire",
      "Coil Wire",
      "Spool Wire",
      "Filler Wire",
      "Welding Wire",
      "Spring Wire",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM B206, ASTM B467, ASME SB206, DIN 17670, EN 12166",
      wireDiameter: "0.10 mm to 8.0 mm",
      coilWeight: "5 kg to 500 kg",
      spoolWeight: "1 kg to 25 kg",
      materialGrades:
        "Cu-Ni 90/10 (C70600), Cu-Ni 70/30 (C71500), 66/30/2/2, 95/5",
      surfaceFinish: "Mill Finish, Pickled, Polished, Annealed, Bright",
      manufacturingMethods: "Cold Drawn, Annealed, Pickled, Bright",
      qualityTesting: "PMI, Tensile, Hardness, Dimensional, Surface Inspection",
    },

    standardsCompliance: [
      "ASTM B206 — Copper-Nickel-Zinc Alloy (Nickel Silver) and Copper-Nickel Rod and Bar",
      "ASTM B467 — Welded Copper-Nickel Pipe",
      "ASME SB206 — Copper-Nickel-Zinc Alloy and Copper-Nickel Rod and Bar",
      "DIN 17670 — Copper and Copper Alloy Sheet and Strip",
      "EN 12166 — Copper and Copper Alloys — Wire for General Purposes",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Cold Drawn / Annealed / Pickled / Bright",
    pressureRating: "N/A (Wire)",
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

    forms: "Bright Wire, Coil Wire, Spool Wire, Filler Wire, Welding Wire",
    application:
      "Marine engineering, heat exchangers, condensers, and desalination plants",
  },
];

export default wires;
