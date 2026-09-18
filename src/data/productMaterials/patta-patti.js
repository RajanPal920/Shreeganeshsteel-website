// src/data/productMaterials/pattapatti.js

// ============================================
// IMAGE IMPORTS
// ============================================
import carbon from "../../../public/images/stock/carbon-steel-flat-bar.jpg";
import patti from "../../../public/images/stock/patti-carbon-alloy-steel.jpg";
import stainless from "../../../public/images/stock/patti-stainless-duplex-steel.jpg";
import bar from "../../../public/images/stock/patti-stainless-stell-flat-bars.jpg";

// ============================================
// PATTA PATTI (FLAT BARS) — 9 Products
// ============================================
const pattapatti = [
  // ============================================
  // 1. CARBON ALLOY STEEL FLAT BARS (PATTA)
  // ============================================
  {
    id: 1,
    slug: "carbon-alloy-steel-flat-bars",
    image: carbon,
    title: "Carbon Alloy Steel Flat Bars (Patta)",
    shortDescription:
      "High Tensile Carbon Steel, Mild Steel, ASTM A36, AISI 1018, 1045 Hot Rolled & Cold Drawn Heavy Structural Flat Bars.",
    materialGroup: "Carbon & Alloy Steel Patta",
    standards:
      "ASTM A36, AISI 1018, AISI 1045, IS 2062, EN8, EN9, DIN 1015, DIN 1025",

    overview:
      "Heavy-duty carbon and alloy steel flat bars (patta) engineered for structural, manufacturing, and general engineering applications. Manufactured from high-tensile carbon steel, mild steel, ASTM A36, AISI 1018, and AISI 1045 grades in hot rolled and cold drawn conditions, our flat bars deliver superior strength, excellent weldability, and reliable machinability for heavy structural and industrial fabrication.",

    grades: [
      "Mild Steel (MS)",
      "High Tensile Carbon Steel",
      "ASTM A36",
      "AISI 1018",
      "AISI 1045",
      "IS 2062 Gr A/B/C",
      "EN8",
      "EN9",
    ],

    supplyForms: [
      "Hot Rolled Flat Bars",
      "Cold Drawn Flat Bars",
      "Precision Ground Flat Bars",
      "Slit Patti Bars",
      "Heavy Structural Flat Bars",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM A36, AISI 1018, AISI 1045, IS 2062, EN8, EN9, DIN 1015, DIN 1025",
      nominalSize: "3 mm to 200 mm Width",
      thicknessRange: "1.5 mm to 50 mm",
      lengthRange: "3 m to 12 m (Custom Cut Lengths Available)",
      materialGrades: "MS, HT Carbon Steel, A36, 1018, 1045, IS 2062, EN8, EN9",
      surfaceFinish: "Mill Finish, Pickled, Shot Blasted, Galvanized",
      manufacturingMethods: "Hot Rolled, Cold Drawn, Slit, Precision Ground",
      qualityTesting:
        "Tensile, Hardness, Impact, Chemical Analysis, Ultrasonic",
    },

    standardsCompliance: [
      "ASTM A36 — Carbon Structural Steel",
      "AISI 1018 — Low Carbon Steel",
      "AISI 1045 — Medium Carbon Steel",
      "IS 2062 — Hot Rolled Medium and High Tensile Structural Steel",
      "EN8 / EN9 — Carbon Steel for General Engineering",
      "DIN 1015 / DIN 1025 — Hot Rolled Steel Flat Bars",
    ],

    manufacturingType: "Hot Rolled / Cold Drawn",
    pressureRating: "N/A (Structural)",
    temperatureRange: "-29°C to +425°C",
    tolerance: "Per ASTM A6 / IS 2062",
    certifications: "EN 10204 3.1 MTC",

    industryApplications: [
      "Heavy structural fabrication and construction",
      "Bridge and infrastructure engineering",
      "Manufacturing and tooling applications",
      "Automotive and chassis components",
      "General engineering and machinery parts",
      "Industrial frames and supports",
    ],

    forms: "Hot Rolled & Cold Drawn",
    application: "Heavy Structural Flat Bars",
  },

  // ============================================
  // 2. CARBON ALLOY STEEL PATTI
  // ============================================
  {
    id: 2,
    slug: "carbon-alloy-steel-patti",
    image: patti,
    title: "Carbon Alloy Steel Patti",
    shortDescription:
      "EN8, EN9, EN24, AISI 4140 Precision Slit Steel Patti Bars for Manufacturing, Tooling & Dynamic Engineering Applications.",
    materialGroup: "Carbon & Alloy Steel Patti",
    standards: "EN8, EN9, EN24, AISI 4140, AISI 4340, DIN 1.7225, DIN 1.6582",

    overview:
      "Precision slit carbon and alloy steel patti bars engineered for manufacturing, tooling, and dynamic engineering applications. Manufactured from EN8, EN9, EN24, and AISI 4140 grades, our patti bars deliver superior strength, excellent machinability, and consistent dimensional accuracy for critical engineering components and precision tooling.",

    grades: [
      "EN8",
      "EN9",
      "EN19",
      "EN24",
      "EN31",
      "AISI 4140",
      "AISI 4340",
      "AISI 52100",
    ],

    supplyForms: [
      "Precision Slit Patti Bars",
      "Cold Drawn Patti Bars",
      "Ground & Polished Patti Bars",
      "Heat Treated Patti Bars",
      "Custom Cut Lengths",
    ],

    technicalSpecs: {
      standardSpecifications:
        "EN8, EN9, EN24, AISI 4140, AISI 4340, DIN 1.7225, DIN 1.6582",
      nominalSize: "3 mm to 150 mm Width",
      thicknessRange: "1.0 mm to 30 mm",
      lengthRange: "3 m to 6 m (Custom Cut Lengths Available)",
      materialGrades: "EN8, EN9, EN19, EN24, EN31, AISI 4140, 4340, 52100",
      surfaceFinish: "Mill Finish, Pickled, Ground, Polished, Black Oxide",
      manufacturingMethods: "Hot Rolled, Cold Drawn, Slit, Precision Ground",
      qualityTesting:
        "Tensile, Hardness, Impact, Chemical Analysis, Ultrasonic",
    },

    standardsCompliance: [
      "EN8 / EN9 — Carbon Steel for General Engineering",
      "EN24 — 817M40 Alloy Steel",
      "AISI 4140 — Chromium-Molybdenum Alloy Steel",
      "AISI 4340 — Nickel-Chromium-Molybdenum Alloy Steel",
      "DIN 1.7225 — 42CrMo4 Alloy Steel",
      "DIN 1.6582 — 34CrNiMo6 Alloy Steel",
    ],

    manufacturingType: "Hot Rolled / Cold Drawn / Precision Slit",
    pressureRating: "N/A (Structural)",
    temperatureRange: "-29°C to +540°C",
    tolerance: "Per EN / DIN / AISI Standards",
    certifications: "EN 10204 3.1 MTC",

    industryApplications: [
      "Manufacturing and tooling applications",
      "Dynamic engineering components",
      "Automotive and transmission parts",
      "Gear and shaft manufacturing",
      "Hydraulic and pneumatic components",
      "Precision machined parts",
    ],

    forms: "Precision Slit",
    application: "Manufacturing, Tooling & Dynamic Engineering Applications",
  },

  // ============================================
  // 3. STAINLESS & DUPLEX STEEL PATTI
  // ============================================
  {
    id: 3,
    slug: "stainless-duplex-steel-patti",
    image: stainless,
    title: "Stainless & Duplex Steel Patti",
    shortDescription:
      "Duplex UNS S31803, S32205, Super Duplex S32750, High-Alloy Corrosive Resistant Slit Patti Formats.",
    materialGroup: "Stainless & Duplex Patti",
    standards:
      "ASTM A240, ASME SA240, ASTM A276, ASTM A479, UNS S31803, S32205, S32750, NACE MR0175",

    overview:
      "High-performance stainless and duplex steel patti bars engineered for corrosive and high-strength applications. Manufactured from Duplex UNS S31803, S32205, and Super Duplex S32750 grades, our patti bars deliver exceptional resistance to chloride stress corrosion cracking, pitting, and crevice corrosion in offshore, chemical, and marine environments.",

    grades: [
      "Duplex UNS S31803",
      "Duplex UNS S32205 (2205)",
      "Super Duplex UNS S32750 (2507)",
      "Super Duplex UNS S32760",
      "SS 304 / 304L",
      "SS 316 / 316L",
      "SS 904L",
    ],

    supplyForms: [
      "Slit Patti Formats",
      "Cold Drawn Patti Bars",
      "Hot Rolled Patti Bars",
      "Precision Ground Patti Bars",
      "Custom Cut Lengths",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM A240, ASME SA240, ASTM A276, ASTM A479, NACE MR0175",
      nominalSize: "3 mm to 150 mm Width",
      thicknessRange: "1.0 mm to 30 mm",
      lengthRange: "3 m to 6 m (Custom Cut Lengths Available)",
      materialGrades:
        "Duplex S31803, S32205, Super Duplex S32750, S32760, SS 304/316/904L",
      surfaceFinish: "Pickled, Passivated, Polished, Hot Rolled, Annealed",
      manufacturingMethods: "Hot Rolled, Cold Drawn, Slit, Precision Ground",
      qualityTesting:
        "PMI, Tensile, Hardness, Impact, Chemical Analysis, Ultrasonic",
    },

    standardsCompliance: [
      "ASTM A240 — Chromium and Chromium-Nickel Stainless Steel Plate, Sheet, and Strip",
      "ASTM A276 — Stainless Steel Bars and Shapes",
      "ASTM A479 — Stainless Steel Bars and Shapes for Boilers",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Hot Rolled / Cold Drawn / Precision Slit",
    pressureRating: "N/A (Structural)",
    temperatureRange: "-50°C to +300°C",
    tolerance: "Per ASTM A6 / ASTM A484",
    certifications: "EN 10204 3.1 & 3.2 MTC, NACE MR0175 compliant",

    industryApplications: [
      "Offshore oil and gas platforms",
      "Chemical processing and acid handling",
      "Desalination plants and seawater systems",
      "Pulp and paper digesters",
      "Pollution control scrubbers",
      "Marine engineering and shipbuilding",
    ],

    forms: "Slit Patti Formats",
    application: "High-Alloy Corrosive Resistant Applications",
  },

  // ============================================
  // 4. STAINLESS STEEL FLAT BARS (PATTA)
  // ============================================
  {
    id: 4,
    slug: "stainless-steel-flat-bars",
    image: bar,
    title: "Stainless Steel Flat Bars (Patta)",
    shortDescription:
      "ASTM A240 / ASME SA240 TP 304, 304L, 316, 316L, 317L, 321, 347, 904L Industrial Polished & Hot Rolled Patta Plates.",
    materialGroup: "Stainless Steel Patta",
    standards:
      "ASTM A240, ASME SA240, ASTM A276, ASTM A479, EN 10088, DIN 17440",

    overview:
      "Premium stainless steel flat bars (patta) engineered for industrial, architectural, and high-purity applications. Manufactured from TP 304, 304L, 316, 316L, 317L, 321, 347, and 904L grades in polished and hot rolled conditions, our flat bars deliver superior corrosion resistance, excellent formability, and reliable performance in chemical, food, and pharmaceutical environments.",

    grades: [
      "TP 304",
      "TP 304L",
      "TP 316",
      "TP 316L",
      "TP 317L",
      "TP 321",
      "TP 347",
      "TP 904L",
    ],

    supplyForms: [
      "Industrial Polished Patta Plates",
      "Hot Rolled Patta Plates",
      "Cold Drawn Flat Bars",
      "Precision Ground Flat Bars",
      "Mirror Polished Flat Bars",
      "Custom Cut Lengths",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM A240, ASME SA240, ASTM A276, ASTM A479, EN 10088, DIN 17440",
      nominalSize: "3 mm to 200 mm Width",
      thicknessRange: "1.5 mm to 50 mm",
      lengthRange: "3 m to 12 m (Custom Cut Lengths Available)",
      materialGrades: "TP 304, 304L, 316, 316L, 317L, 321, 347, 904L",
      surfaceFinish: "Pickled, Passivated, Polished, Hot Rolled, Mirror Finish",
      manufacturingMethods:
        "Hot Rolled, Cold Drawn, Precision Ground, Polished",
      qualityTesting:
        "PMI, Tensile, Hardness, Impact, Chemical Analysis, Ultrasonic",
    },

    standardsCompliance: [
      "ASTM A240 — Chromium and Chromium-Nickel Stainless Steel Plate, Sheet, and Strip",
      "ASME SA240 — Chromium and Chromium-Nickel Stainless Steel Plate, Sheet, and Strip",
      "ASTM A276 — Stainless Steel Bars and Shapes",
      "ASTM A479 — Stainless Steel Bars and Shapes for Boilers",
      "EN 10088 — Stainless Steels Technical Delivery Conditions",
      "DIN 17440 — Stainless Steel Flat Products",
    ],

    manufacturingType: "Hot Rolled / Cold Drawn / Precision Ground",
    pressureRating: "N/A (Structural)",
    temperatureRange: "-196°C to +800°C",
    tolerance: "Per ASTM A6 / ASTM A484",
    certifications: "EN 10204 3.1 & 3.2 MTC",

    industryApplications: [
      "Chemical and petrochemical processing",
      "Food, beverage, and dairy equipment",
      "Pharmaceutical and biotech plants",
      "Architectural and construction fabrication",
      "Marine and offshore applications",
      "High-purity semiconductor systems",
    ],

    forms: "Industrial Polished & Hot Rolled",
    application: "Patta Plates",
  },

  // ============================================
  // 5. NICKEL ALLOY FLAT BARS (PATTA)
  // ============================================
  {
    id: 5,
    slug: "nickel-alloy-flat-bars",
    image: stainless,
    title: "Nickel Alloy Flat Bars (Patta)",
    shortDescription:
      "Nickel 200/201, Monel 400, Inconel 600/625, Incoloy 800/825 Corrosion-Resistant Slit Patti Bars for Chemical & Marine Service.",
    materialGroup: "Nickel Alloy Patta",
    standards: "ASTM B160, B164, B166, B408, B425, B446, ASME SB160, DIN 17753",

    overview:
      "Premium nickel alloy flat bars (patta) engineered for extreme temperature, pressure, and corrosive environments. Manufactured from Nickel 200/201, Monel 400, Inconel 600/625, and Incoloy 800/825 grades, our flat bars deliver exceptional oxidation resistance, high-temperature strength, and superior resistance to acids, alkalis, and seawater for chemical, marine, and nuclear applications.",

    grades: [
      "Nickel 200",
      "Nickel 201",
      "Monel 400",
      "Monel K500",
      "Inconel 600",
      "Inconel 625",
      "Inconel 718",
      "Incoloy 800",
      "Incoloy 800H",
      "Incoloy 825",
    ],

    supplyForms: [
      "Slit Patti Bars",
      "Hot Rolled Flat Bars",
      "Cold Drawn Flat Bars",
      "Precision Ground Flat Bars",
      "Custom Cut Lengths",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM B160, B164, B166, B408, B425, B446, ASME SB160, DIN 17753",
      nominalSize: "3 mm to 150 mm Width",
      thicknessRange: "1.5 mm to 40 mm",
      lengthRange: "3 m to 6 m (Custom Cut Lengths Available)",
      materialGrades:
        "Nickel 200/201, Monel 400/K500, Inconel 600/625/718, Incoloy 800/825",
      surfaceFinish: "Pickled, Passivated, Solution Annealed, Polished",
      manufacturingMethods: "Hot Rolled, Cold Drawn, Slit, Precision Ground",
      qualityTesting:
        "PMI, Tensile, Hardness, Impact, Chemical Analysis, Ultrasonic",
    },

    standardsCompliance: [
      "ASTM B160 — Nickel Rod and Bar",
      "ASTM B164 — Nickel-Copper Alloy Rod and Bar",
      "ASTM B166 — Nickel-Chromium-Iron Alloy Rod and Bar",
      "ASTM B408 — Nickel-Iron-Chromium Alloy Rod and Bar",
      "ASTM B425 — Nickel-Iron-Chromium-Molybdenum-Copper Alloy Rod and Bar",
      "ASTM B446 — Nickel-Chromium-Molybdenum-Columbium Alloy Rod and Bar",
      "DIN 17753 — Wrought Nickel Alloys",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Hot Rolled / Cold Drawn / Precision Slit",
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

    forms: "Slit Patti Bars",
    application: "Chemical, Marine & Nuclear Service",
  },

  // ============================================
  // 6. HIGH ALLOY FLAT BARS (PATTA)
  // ============================================
  {
    id: 6,
    slug: "high-alloy-flat-bars",
    image: patti,
    title: "High Alloy Flat Bars (Patta)",
    shortDescription:
      "Hastelloy C22, C276, Alloy 20, SMO 254 Slit Patti Bars for Extreme Corrosive Chemical Environments.",
    materialGroup: "High Alloys Patta",
    standards: "ASTM B574, B575, B622, B729, ASME SB574, DIN 17744",

    overview:
      "Specialized high-alloy flat bars (patta) engineered for wet chlorine, sulfuric acid, phosphoric acid, and aggressive halide services. Manufactured from Hastelloy C22, C276, Alloy 20, and SMO 254 grades, our flat bars deliver exceptional performance in the most demanding corrosive environments across chemical processing, pollution control, and pharmaceutical industries.",

    grades: [
      "Hastelloy C22",
      "Hastelloy C276",
      "Hastelloy C2000",
      "Alloy 20 (Carpenter 20)",
      "Alloy 28",
      "SMO 254",
      "Alloy 59",
    ],

    supplyForms: [
      "Slit Patti Bars",
      "Hot Rolled Flat Bars",
      "Cold Drawn Flat Bars",
      "Precision Ground Flat Bars",
      "Custom Cut Lengths",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM B574, B575, B622, B729, ASME SB574, DIN 17744",
      nominalSize: "3 mm to 150 mm Width",
      thicknessRange: "1.5 mm to 30 mm",
      lengthRange: "3 m to 6 m (Custom Cut Lengths Available)",
      materialGrades: "Hastelloy C22, C276, C2000, Alloy 20, Alloy 28, SMO 254",
      surfaceFinish: "Pickled, Passivated, Solution Annealed, Polished",
      manufacturingMethods: "Hot Rolled, Cold Drawn, Slit, Precision Ground",
      qualityTesting:
        "PMI, Tensile, Hardness, Impact, Chemical Analysis, Ultrasonic",
    },

    standardsCompliance: [
      "ASTM B574 — Low-Carbon Nickel-Chromium-Molybdenum Alloy Rod and Bar",
      "ASTM B575 — Low-Carbon Nickel-Chromium-Molybdenum Alloy Plate, Sheet, Strip",
      "ASTM B622 — Seamless Nickel and Nickel-Cobalt Alloy Pipe and Tube",
      "ASTM B729 — Seamless UNS N08020, N08026, and N08024 Alloy Pipe and Tube",
      "DIN 17744 — Wrought Nickel Alloys",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Hot Rolled / Cold Drawn / Precision Slit",
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

    forms: "Slit Patti Bars",
    application: "Extreme Corrosive Chemical Environments",
  },

  // ============================================
  // 7. TITANIUM FLAT BARS (PATTA)
  // ============================================
  {
    id: 7,
    slug: "titanium-flat-bars",
    image: bar,
    title: "Titanium Flat Bars (Patta)",
    shortDescription:
      "ASTM B348 Grade 1, 2, 5 (Ti-6Al-4V), 7 Lightweight High-Strength Corrosion-Immune Titanium Patta Bars.",
    materialGroup: "Titanium Patta",
    standards: "ASTM B348, ASTM B381, ASME SB348, DIN 17862, DIN 65328",

    overview:
      "Ultra-lightweight, high-strength titanium flat bars (patta) with impervious corrosion immunity against seawater, wet chlorine, and organic chlorides. Manufactured from Grade 1, 2, 5 (Ti-6Al-4V), and 7 grades, our flat bars deliver exceptional performance in aerospace, marine, and chemical processing applications.",

    grades: [
      "Grade 1",
      "Grade 2",
      "Grade 5 (Ti-6Al-4V)",
      "Grade 7",
      "Grade 12",
    ],

    supplyForms: [
      "Hot Rolled Flat Bars",
      "Cold Drawn Flat Bars",
      "Precision Ground Flat Bars",
      "Slit Patti Bars",
      "Custom Cut Lengths",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM B348, ASTM B381, ASME SB348, DIN 17862, DIN 65328",
      nominalSize: "3 mm to 150 mm Width",
      thicknessRange: "1.5 mm to 40 mm",
      lengthRange: "3 m to 6 m (Custom Cut Lengths Available)",
      materialGrades: "Grade 1, 2, 5 (Ti-6Al-4V), 7, 12",
      surfaceFinish: "Pickled, Passivated, Anodized, Bright Annealed",
      manufacturingMethods: "Hot Rolled, Cold Drawn, Precision Ground",
      qualityTesting:
        "PMI, Tensile, Hardness, Impact, Chemical Analysis, Ultrasonic",
    },

    standardsCompliance: [
      "ASTM B348 — Titanium and Titanium Alloy Bars and Billets",
      "ASTM B381 — Titanium and Titanium Alloy Forgings",
      "ASME SB348 — Titanium and Titanium Alloy Bars and Billets",
      "DIN 17862 — Titanium and Titanium Alloy Bars",
      "DIN 65328 — Aerospace Titanium Alloy Bolts",
    ],

    manufacturingType: "Hot Rolled / Cold Drawn / Precision Ground",
    pressureRating: "N/A (Structural)",
    temperatureRange: "-200°C to +400°C",
    tolerance: "Per ASTM / DIN Standards",
    certifications: "EN 10204 3.1 & 3.2 MTC",

    industryApplications: [
      "Aerospace and aircraft components",
      "Marine and offshore seawater systems",
      "Chemical processing and chlor-alkali plants",
      "Desalination plants",
      "Medical implants and equipment",
      "Cryogenic piping systems",
    ],

    forms: "Precision Ground Patta Bars",
    application: "Aerospace, Marine & Chemical Processing",
  },

  // ============================================
  // 8. ALLOY FLAT BARS (PATTA)
  // ============================================
  {
    id: 8,
    slug: "alloy-flat-bars",
    image: stainless,
    title: "Alloy Flat Bars (Patta)",
    shortDescription:
      "Zirconium 702, Tantalum, Copper-Nickel 70/30 & 90/10 Specialty Alloy Patta Bars for Ultra-Corrosive Service.",
    materialGroup: "Alloys Patta",
    standards: "ASTM B550, B551, B466, B467, ASME SB550, DIN 17753",

    overview:
      "Specialty alloy flat bars (patta) including zirconium, tantalum, and copper-nickel grades engineered for ultra-corrosive chemical processing, nuclear, and marine applications. Manufactured to ASTM B550, B551, B466, and B467 standards, our flat bars deliver exceptional performance in the most demanding environments.",

    grades: [
      "Zirconium 702",
      "Zirconium 705",
      "Tantalum",
      "Tantalum 2.5W",
      "Copper-Nickel 70/30",
      "Copper-Nickel 90/10",
    ],

    supplyForms: [
      "Slit Patti Bars",
      "Hot Rolled Flat Bars",
      "Cold Drawn Flat Bars",
      "Precision Ground Flat Bars",
      "Custom Cut Lengths",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM B550, B551, B466, B467, ASME SB550, DIN 17753",
      nominalSize: "3 mm to 100 mm Width",
      thicknessRange: "1.5 mm to 30 mm",
      lengthRange: "3 m to 6 m (Custom Cut Lengths Available)",
      materialGrades:
        "Zirconium 702, 705, Tantalum, Ta-2.5W, Cu-Ni 70/30, Cu-Ni 90/10",
      surfaceFinish: "Pickled, Annealed, Passivated, Polished",
      manufacturingMethods: "Hot Rolled, Cold Drawn, Slit, Precision Ground",
      qualityTesting:
        "PMI, Tensile, Hardness, Impact, Chemical Analysis, Ultrasonic",
    },

    standardsCompliance: [
      "ASTM B550 — Zirconium and Zirconium Alloy Bar and Wire",
      "ASTM B551 — Zirconium and Zirconium Alloy Strip, Sheet, and Plate",
      "ASTM B466 — Seamless Copper-Nickel Pipe and Tube",
      "ASTM B467 — Welded Copper-Nickel Pipe",
      "DIN 17753 — Wrought Nickel Alloys",
    ],

    manufacturingType: "Hot Rolled / Cold Drawn / Precision Slit",
    pressureRating: "N/A (Structural)",
    temperatureRange: "-100°C to +400°C",
    tolerance: "Per ASTM / DIN Standards",
    certifications: "EN 10204 3.1 & 3.2 MTC",

    industryApplications: [
      "Chemical processing and acid handling",
      "Nuclear power generation",
      "Marine engineering and shipbuilding",
      "Desalination and heat exchangers",
      "Pharmaceutical and food processing",
      "Pollution control equipment",
    ],

    forms: "Slit Patti Bars",
    application: "Ultra-Corrosive Service",
  },

  // ============================================
  // 9. ALLOY STEEL FLAT BARS (PATTA)
  // ============================================
  {
    id: 9,
    slug: "alloy-steel-flat-bars",
    image: carbon,
    title: "Alloy Steel Flat Bars (Patta)",
    shortDescription:
      "ASTM A182 F1, F5, F9, F11, F22, F91 Chrome-Moly High-Temperature Forged Alloy Steel Patta Bars.",
    materialGroup: "Alloy Steel Patta",
    standards:
      "ASTM A182 F1/F5/F9/F11/F22/F91, ASTM A335, ASTM A387, ASME SB182, DIN 17175",

    overview:
      "Chromium-molybdenum creep-resistant alloy steel flat bars (patta) engineered for supercritical boilers, heat recovery steam generators, and extreme-temperature steam lines. Manufactured to ASTM A182, A335, and A387 standards, our flat bars deliver reliable performance at temperatures up to 650°C.",

    grades: [
      "ASTM A182 F1",
      "ASTM A182 F5",
      "ASTM A182 F9",
      "ASTM A182 F11",
      "ASTM A182 F22",
      "ASTM A182 F91",
      "ASTM A387 Gr 11",
      "ASTM A387 Gr 22",
    ],

    supplyForms: [
      "Hot Rolled Flat Bars",
      "Cold Drawn Flat Bars",
      "Precision Ground Flat Bars",
      "Slit Patti Bars",
      "Custom Cut Lengths",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM A182, ASTM A335, ASTM A387, ASME SB182, DIN 17175",
      nominalSize: "3 mm to 200 mm Width",
      thicknessRange: "1.5 mm to 50 mm",
      lengthRange: "3 m to 12 m (Custom Cut Lengths Available)",
      materialGrades: "F1, F5, F9, F11, F22, F91, A387 Gr 11, A387 Gr 22",
      surfaceFinish: "Hot Finished, Pickled, Annealed, Shot Blasted",
      manufacturingMethods: "Hot Rolled, Cold Drawn, Slit, Precision Ground",
      qualityTesting:
        "PMI, Tensile, Hardness, Impact, Chemical Analysis, Ultrasonic",
    },

    standardsCompliance: [
      "ASTM A182 — Forged or Rolled Alloy and Stainless Steel Pipe Flanges",
      "ASTM A335 — Seamless Ferritic Alloy-Steel Pipe for High-Temperature Service",
      "ASTM A387 — Steel, Alloy, for Pressure Vessels, Plate, and Strip",
      "ASME SB182 — Forged or Rolled Alloy and Stainless Steel Pipe Flanges",
      "DIN 17175 — Seamless Tubes of Heat-Resistant Steels",
      "ASME B31.1 — Power Piping Code",
    ],

    manufacturingType: "Hot Rolled / Cold Drawn / Precision Ground",
    pressureRating: "N/A (Structural)",
    temperatureRange: "-29°C to +650°C",
    tolerance: "Per ASTM / DIN Standards",
    certifications: "EN 10204 3.1 & 3.2 MTC",

    industryApplications: [
      "Superheater and reheat steam lines",
      "Heat recovery steam generators (HRSG)",
      "Refinery hydrotreaters and hydrocrackers",
      "Power plant steam lines",
      "Petrochemical process piping",
      "High-temperature chemical reactors",
    ],

    forms: "Hot Rolled & Precision Ground",
    application: "Superheater Steam Lines, Refinery, Power Plants",
  },
];

export default pattapatti;
