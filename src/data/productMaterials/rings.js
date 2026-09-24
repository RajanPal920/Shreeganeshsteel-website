// src/data/productMaterials/rings.js

// ============================================
// IMAGE IMPORTS
// ============================================
import stain from "../../../public/images/stock/stainless-steel-forged-rings.jpg";
import duplex from "../../../public/images/stock/duplex-super-duplex-rings.jpg";
import nik from "../../../public/images/stock/nickel-alloy-rings.jpg";
import car from "../../../public/images/stock/carbon-mild-steel-rings.jpg";

// ============================================
// FORGED RINGS — 9 Products
// ============================================
const rings = [
  // ============================================
  // 1. STAINLESS STEEL FORGED RINGS
  // ============================================
  {
    id: 1,
    slug: "stainless-steel-forged-rings",
    image: stain,
    title: "Stainless Steel Forged Rings",
    shortDescription:
      "ASTM A182 F304, F304L, F316, F316L, F317L, F321, F347, F44 (904L), Seamless Rolled Band Rings.",
    materialGroup: "Stainless Steel",
    standards:
      "ASTM A182, ASTM A240, ASME SB182, EN 10222-5, DIN 17440, NACE MR0175",

    overview:
      "Premium stainless steel forged rings conforming to ASTM A182 and ASME SB182 standards. Manufactured from premium SS 304, 304L, 316, 316L, 317L, 321, 347, and 904L grades with full material traceability and intergranular corrosion resistance — engineered for flanges, pressure vessels, heavy engineering, and industrial applications operating under severe corrosive and high-temperature conditions.",

    grades: [
      "F304",
      "F304L",
      "F316",
      "F316L",
      "F317L",
      "F321",
      "F347",
      "F44 (904L)",
    ],

    supplyForms: [
      "Seamless Rolled Band Rings",
      "Forged Ring Blanks",
      "Rolled Ring Shells",
      "Precision Machined Rings",
      "Custom Cut Ring Segments",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM A182, ASTM A240, ASME SB182, EN 10222-5, DIN 17440, NACE MR0175",
      ringOuterDiameter: "100 mm to 5000 mm",
      ringInnerDiameter: "50 mm to 4800 mm",
      ringThickness: "10 mm to 500 mm",
      ringHeight: "20 mm to 1000 mm",
      materialGrades: "F304, F304L, F316, F316L, F317L, F321, F347, F44 (904L)",
      surfaceFinish: "Pickled, Passivated, Machined, Polished",
      manufacturingMethods: "Forged, Rolled, Seamless Rolled, Machined",
      qualityTesting: "PMI, Tensile, Hardness, Ultrasonic, Dye Penetrant",
    },

    standardsCompliance: [
      "ASTM A182 — Forged or Rolled Alloy and Stainless Steel Pipe Flanges",
      "ASTM A240 — Chromium and Chromium-Nickel Stainless Steel Plate, Sheet, and Strip",
      "ASME SB182 — Forged or Rolled Alloy and Stainless Steel Pipe Flanges",
      "EN 10222-5 — Steel Forgings for Pressure Purposes",
      "DIN 17440 — Stainless Steel Flat Products",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Forged / Rolled / Seamless Rolled",
    pressureRating: "Per ASME BPVC Section VIII",
    temperatureRange: "-196°C to +800°C",
    tolerance: "Per ASTM A788 / EN 10222-5",
    certifications: "EN 10204 3.1 & 3.2 MTC, NACE MR0175 compliant",

    industryApplications: [
      "Flanges and pipe fittings",
      "Pressure vessels and boilers",
      "Heavy engineering and industrial machinery",
      "Chemical and petrochemical processing",
      "Power generation and nuclear",
      "Offshore oil and gas platforms",
    ],

    forms: "Seamless Rolled Band Rings",
    application:
      "Flanges, pressure vessels, heavy engineering, and industrial applications",
  },

  // ============================================
  // 2. CARBON & MILD STEEL FORGED RINGS
  // ============================================
  {
    id: 2,
    slug: "carbon-mild-steel-rings",
    image: car,
    title: "Carbon & Mild Steel Forged Rings",
    shortDescription:
      "ASTM A105 Forged Carbon, A350 LF2 Class 1/2, Carbon Steel C45, Structural MS Grade Shells & Heavy Base Rings.",
    materialGroup: "Carbon Steel",
    standards:
      "ASTM A105, ASTM A350 LF2, ASTM A266, IS 2062, EN 10222-2, C45 (EN8)",

    overview:
      "Heavy-duty carbon and mild steel forged rings engineered for structural fabrication, heavy machinery, power plants, and general engineering. Manufactured to ASTM A105, A350, and IS 2062 standards, our forged rings deliver superior strength, excellent weldability, and reliable machinability for heavy structural and industrial applications.",

    grades: [
      "ASTM A105 Forged Carbon",
      "ASTM A350 LF2 Class 1",
      "ASTM A350 LF2 Class 2",
      "Carbon Steel C45 (EN8)",
      "Structural MS Grade",
      "IS 2062 Gr A/B/C",
      "ASTM A266 Gr 1/2/3/4",
    ],

    supplyForms: [
      "Structural MS Grade Shells",
      "Heavy Base Rings",
      "Forged Ring Blanks",
      "Rolled Ring Shells",
      "Precision Machined Rings",
      "Custom Cut Ring Segments",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM A105, ASTM A350 LF2, ASTM A266, IS 2062, EN 10222-2",
      ringOuterDiameter: "100 mm to 5000 mm",
      ringInnerDiameter: "50 mm to 4800 mm",
      ringThickness: "10 mm to 500 mm",
      ringHeight: "20 mm to 1000 mm",
      materialGrades: "A105, A350 LF2 Cl 1/2, C45, MS, IS 2062, A266",
      surfaceFinish: "Mill Finish, Pickled, Shot Blasted, Galvanized, Machined",
      manufacturingMethods: "Forged, Rolled, Seamless Rolled, Machined",
      qualityTesting:
        "Tensile, Hardness, Impact, Chemical Analysis, Ultrasonic",
    },

    standardsCompliance: [
      "ASTM A105 — Carbon Steel Forgings for Piping Applications",
      "ASTM A350 — Carbon and Low-Alloy Steel Forgings for Piping Components",
      "ASTM A266 — Carbon Steel Forgings for Pressure Vessel Components",
      "IS 2062 — Hot Rolled Medium and High Tensile Structural Steel",
      "EN 10222-2 — Steel Forgings for Pressure Purposes",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Forged / Rolled / Normalized",
    pressureRating: "Per ASME BPVC Section VIII",
    temperatureRange: "-46°C to +540°C",
    tolerance: "Per ASTM A788 / EN 10222-2",
    certifications: "EN 10204 3.1 MTC, NACE MR0175 compliant",

    industryApplications: [
      "Structural fabrication and construction",
      "Heavy machinery and equipment",
      "Power plants and steam generation",
      "Refineries and petrochemical plants",
      "Oil and gas transmission pipelines",
      "General engineering and industrial infrastructure",
    ],

    forms: "Structural MS Grade Shells & Heavy Base Rings",
    application:
      "Structural fabrication, heavy machinery, power plants, refineries, and general engineering",
  },

  // ============================================
  // 3. ALLOY STEEL FORGED RINGS
  // ============================================
  {
    id: 3,
    slug: "alloy-steel-forged-rings",
    image: car,
    title: "Alloy Steel Forged Rings",
    shortDescription:
      "ASTM A182 F1, F5, F9, F11, F22, F91, ASTM A335 P5, P9, P11, P22, P91 Chrome-Moly High-Temperature Forged Rings.",
    materialGroup: "Alloy Steel",
    standards:
      "ASTM A182 F1/F5/F9/F11/F22/F91, ASTM A335, ASTM A387, ASME SB182, EN 10222-2",

    overview:
      "Chromium-molybdenum creep-resistant alloy steel forged rings engineered for supercritical boilers, heat recovery steam generators, and extreme-temperature steam lines. Manufactured to ASTM A182, A335, and A387 standards, our forged rings deliver reliable performance at temperatures up to 650°C.",

    grades: [
      "ASTM A182 F1",
      "ASTM A182 F5",
      "ASTM A182 F9",
      "ASTM A182 F11",
      "ASTM A182 F22",
      "ASTM A182 F91",
      "ASTM A335 P5",
      "ASTM A335 P9",
      "ASTM A335 P11",
      "ASTM A335 P22",
      "ASTM A335 P91",
      "ASTM A387 Gr 11",
      "ASTM A387 Gr 22",
    ],

    supplyForms: [
      "Forged Ring Blanks",
      "Rolled Ring Shells",
      "Seamless Rolled Band Rings",
      "Precision Machined Rings",
      "Custom Cut Ring Segments",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM A182, ASTM A335, ASTM A387, ASME SB182, EN 10222-2",
      ringOuterDiameter: "100 mm to 4000 mm",
      ringInnerDiameter: "50 mm to 3800 mm",
      ringThickness: "10 mm to 400 mm",
      ringHeight: "20 mm to 800 mm",
      materialGrades:
        "F1, F5, F9, F11, F22, F91, P5, P9, P11, P22, P91, A387 Gr 11/22",
      surfaceFinish: "Hot Finished, Pickled, Annealed, Machined",
      manufacturingMethods: "Forged, Rolled, Seamless Rolled, Machined",
      qualityTesting: "PMI, Tensile, Hardness, Impact, Ultrasonic",
    },

    standardsCompliance: [
      "ASTM A182 — Forged or Rolled Alloy and Stainless Steel Pipe Flanges",
      "ASTM A335 — Seamless Ferritic Alloy-Steel Pipe for High-Temperature Service",
      "ASTM A387 — Steel, Alloy, for Pressure Vessels, Plate, and Strip",
      "ASME SB182 — Forged or Rolled Alloy and Stainless Steel Pipe Flanges",
      "EN 10222-2 — Steel Forgings for Pressure Purposes",
      "ASME B31.1 — Power Piping Code",
    ],

    manufacturingType: "Forged / Rolled / Normalized",
    pressureRating: "Per ASME B31.1 / ASME BPVC",
    temperatureRange: "-29°C to +650°C",
    tolerance: "Per ASTM A788 / EN 10222-2",
    certifications: "EN 10204 3.1 & 3.2 MTC",

    industryApplications: [
      "Superheater and reheat steam lines",
      "Heat recovery steam generators (HRSG)",
      "Refinery hydrotreaters and hydrocrackers",
      "Power plant steam lines",
      "Petrochemical process piping",
      "High-temperature chemical reactors",
    ],

    forms: "Forged Ring Blanks & Rolled Ring Shells",
    application:
      "Superheater steam lines, power plants, refinery, petrochemical",
  },

  // ============================================
  // 4. DUPLEX & SUPER DUPLEX FORGED RINGS
  // ============================================
  {
    id: 4,
    slug: "duplex-super-duplex-rings",
    image: duplex,
    title: "Duplex & Super Duplex Rings",
    shortDescription:
      "ASTM A182 F51, F53, F55, UNS S31803, S32205, S32750, S32760, High-Stress Marine Seawater Ring Shells.",
    materialGroup: "Duplex Alloys",
    standards:
      "ASTM A182 F51/F53/F55, ASTM A240, ASME SB182, NACE MR0175, EN 10222-5",

    overview:
      "High-strength duplex and super duplex forged rings providing exceptional resistance to chloride stress corrosion cracking. Manufactured from UNS S31803, S32205, S32750, and S32760 grades, our forged rings deliver superior strength and corrosion resistance for offshore oil & gas, desalination, and chemical processing applications.",

    grades: [
      "Duplex UNS S31803",
      "Duplex UNS S32205 (2205)",
      "Super Duplex UNS S32750 (2507)",
      "Super Duplex UNS S32760",
      "F51",
      "F53",
      "F55",
      "F60",
    ],

    supplyForms: [
      "High-Stress Marine Seawater Ring Shells",
      "Forged Ring Blanks",
      "Rolled Ring Shells",
      "Seamless Rolled Band Rings",
      "Precision Machined Rings",
      "Custom Cut Ring Segments",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM A182, ASTM A240, ASME SB182, EN 10222-5, NACE MR0175",
      ringOuterDiameter: "100 mm to 4000 mm",
      ringInnerDiameter: "50 mm to 3800 mm",
      ringThickness: "10 mm to 400 mm",
      ringHeight: "20 mm to 800 mm",
      materialGrades: "F51, F53, F55, F60, S31803, S32205, S32750, S32760",
      surfaceFinish: "Solution Annealed, Pickled, Machined",
      manufacturingMethods: "Forged, Rolled, Seamless Rolled, Machined",
      qualityTesting:
        "PMI, Tensile, Hardness, Impact, Ultrasonic, Dye Penetrant",
    },

    standardsCompliance: [
      "ASTM A182 — Forged or Rolled Alloy and Stainless Steel Pipe Flanges",
      "ASTM A240 — Chromium and Chromium-Nickel Stainless Steel Plate, Sheet, and Strip",
      "ASME SB182 — Forged or Rolled Alloy and Stainless Steel Pipe Flanges",
      "EN 10222-5 — Steel Forgings for Pressure Purposes",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Forged / Rolled / Solution Annealed",
    pressureRating: "Per ASME BPVC Section VIII",
    temperatureRange: "-50°C to +300°C",
    tolerance: "Per ASTM A788 / EN 10222-5",
    certifications: "EN 10204 3.1 & 3.2 MTC, NACE MR0175 compliant",

    industryApplications: [
      "Offshore oil and gas platforms",
      "Subsea flowlines and risers",
      "Desalination plants and seawater systems",
      "Chemical cargo tankers",
      "Pulp and paper digesters",
      "Pollution control scrubbers",
    ],

    forms: "High-Stress Marine Seawater Ring Shells",
    application: "Offshore, marine, chemical, and oil & gas industries",
  },

  // ============================================
  // 5. NICKEL ALLOY FORGED RINGS
  // ============================================
  {
    id: 5,
    slug: "nickel-alloy-rings",
    image: nik,
    title: "Nickel & Alloy Steel Rings",
    shortDescription:
      "Monel 400, Monel K500, Inconel 600, Inconel 625, Inconel 718, Hastelloy C276, Alloy 20, Alloy Steel F11, F22, F91.",
    materialGroup: "Nickel & Alloys",
    standards:
      "ASTM B564, ASTM B160, B164, B166, B446, ASME SB564, DIN 17753, NACE MR0175",

    overview:
      "Premium nickel and alloy steel forged rings engineered for high-temperature, corrosive, and critical industrial applications requiring superior mechanical strength. Manufactured from Monel 400, Monel K500, Inconel 600/625/718, Hastelloy C276, Alloy 20, and Alloy Steel F11/F22/F91 grades, our forged rings deliver exceptional performance in the most demanding environments.",

    grades: [
      "Monel 400",
      "Monel K500",
      "Inconel 600",
      "Inconel 625",
      "Inconel 718",
      "Hastelloy C276",
      "Hastelloy C22",
      "Alloy 20",
      "Alloy Steel F11",
      "Alloy Steel F22",
      "Alloy Steel F91",
    ],

    supplyForms: [
      "Seamless Rolled Rings",
      "Forged Ring Blanks",
      "Rolled Ring Shells",
      "Precision Machined Rings",
      "Custom Cut Ring Segments",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM B564, ASTM B160, B164, B166, B446, ASME SB564, DIN 17753, NACE MR0175",
      ringOuterDiameter: "100 mm to 4000 mm",
      ringInnerDiameter: "50 mm to 3800 mm",
      ringThickness: "10 mm to 400 mm",
      ringHeight: "20 mm to 800 mm",
      materialGrades:
        "Monel 400/K500, Inconel 600/625/718, Hastelloy C276/C22, Alloy 20, F11/F22/F91",
      surfaceFinish: "Pickled, Passivated, Solution Annealed, Machined",
      manufacturingMethods: "Forged, Rolled, Seamless Rolled, Machined",
      qualityTesting:
        "PMI, Tensile, Hardness, Impact, Ultrasonic, Dye Penetrant",
    },

    standardsCompliance: [
      "ASTM B564 — Nickel Alloy Forgings",
      "ASTM B160 — Nickel Rod and Bar",
      "ASTM B164 — Nickel-Copper Alloy Rod and Bar",
      "ASTM B166 — Nickel-Chromium-Iron Alloy Rod and Bar",
      "ASTM B446 — Nickel-Chromium-Molybdenum-Columbium Alloy Rod and Bar",
      "ASME SB564 — Nickel Alloy Forgings",
      "DIN 17753 — Wrought Nickel Alloys",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Forged / Rolled / Solution Annealed",
    pressureRating: "Per ASME BPVC Section VIII",
    temperatureRange: "-200°C to +800°C",
    tolerance: "Per ASTM A788 / DIN 17753",
    certifications: "EN 10204 3.1 & 3.2 MTC, NACE MR0175 compliant",

    industryApplications: [
      "High-temperature and corrosive chemical processing",
      "Aerospace and turbine engine components",
      "Nuclear power generation and heat exchangers",
      "Offshore oil & gas and subsea systems",
      "Marine engineering and desalination plants",
      "Heat treatment furnaces and industrial equipment",
    ],

    forms: "Seamless Rolled Rings",
    application:
      "High-temperature, corrosive, and critical industrial applications requiring superior mechanical strength",
  },

  // ============================================
  // 6. HIGH ALLOY FORGED RINGS
  // ============================================
  {
    id: 6,
    slug: "high-alloy-rings",
    image: nik,
    title: "High Alloy Forged Rings",
    shortDescription:
      "Hastelloy C22, C276, Alloy 20, SMO 254, Alloy 28 Seamless Rolled Rings for Extreme Corrosive Chemical Environments.",
    materialGroup: "High Alloys",
    standards:
      "ASTM B564, B574, B575, B622, B729, ASME SB564, DIN 17744, NACE MR0175",

    overview:
      "Specialized high-alloy forged rings engineered for wet chlorine, sulfuric acid, phosphoric acid, and aggressive halide services. Manufactured from Hastelloy C22, C276, Alloy 20, SMO 254, and Alloy 28 grades, our forged rings deliver exceptional performance in the most demanding corrosive environments across chemical processing, pollution control, and pharmaceutical industries.",

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
      "Seamless Rolled Rings",
      "Forged Ring Blanks",
      "Rolled Ring Shells",
      "Precision Machined Rings",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM B564, B574, B575, B622, B729, ASME SB564, DIN 17744, NACE MR0175",
      ringOuterDiameter: "100 mm to 3000 mm",
      ringInnerDiameter: "50 mm to 2800 mm",
      ringThickness: "10 mm to 300 mm",
      ringHeight: "20 mm to 600 mm",
      materialGrades: "Hastelloy C22, C276, C2000, Alloy 20, Alloy 28, SMO 254",
      surfaceFinish: "Pickled, Passivated, Solution Annealed, Machined",
      manufacturingMethods: "Forged, Rolled, Seamless Rolled, Machined",
      qualityTesting:
        "PMI, Tensile, Hardness, Impact, Ultrasonic, Dye Penetrant",
    },

    standardsCompliance: [
      "ASTM B564 — Nickel Alloy Forgings",
      "ASTM B574 — Low-Carbon Nickel-Chromium-Molybdenum Alloy Rod and Bar",
      "ASTM B575 — Low-Carbon Nickel-Chromium-Molybdenum Alloy Plate, Sheet, Strip",
      "ASTM B622 — Seamless Nickel and Nickel-Cobalt Alloy Pipe and Tube",
      "ASTM B729 — Seamless UNS N08020, N08026, and N08024 Alloy Pipe and Tube",
      "ASME SB564 — Nickel Alloy Forgings",
      "DIN 17744 — Wrought Nickel Alloys",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Forged / Rolled / Solution Annealed",
    pressureRating: "Per ASME BPVC Section VIII",
    temperatureRange: "-100°C to +700°C",
    tolerance: "Per ASTM A788 / DIN 17744",
    certifications: "EN 10204 3.1 & 3.2 MTC",

    industryApplications: [
      "Wet chlorine and acid handling systems",
      "Phosphoric and sulfuric acid production",
      "Flue gas desulfurization (FGD) scrubbers",
      "Chemical reactors and process vessels",
      "Pharmaceutical and agrochemical processing",
      "Pollution control equipment",
    ],

    forms: "Seamless Rolled Rings",
    application: "Extreme Corrosive Chemical Environments",
  },

  // ============================================
  // 7. TITANIUM FORGED RINGS
  // ============================================
  {
    id: 7,
    slug: "titanium-forged-rings",
    image: stain,
    title: "Titanium Forged Rings",
    shortDescription:
      "ASTM B381 Grade 1, 2, 5 (Ti-6Al-4V), 7 Lightweight High-Strength Corrosion-Immune Titanium Forged Rings.",
    materialGroup: "Titanium",
    standards:
      "ASTM B381, ASTM B348, ASME SB381, DIN 17862, DIN 65328, NACE MR0175",

    overview:
      "Ultra-lightweight, high-strength titanium forged rings with impervious corrosion immunity against seawater, wet chlorine, and organic chlorides. Manufactured from Grade 1, 2, 5 (Ti-6Al-4V), and 7 grades, our forged rings deliver exceptional performance in aerospace, marine, and chemical processing applications.",

    grades: [
      "Grade 1",
      "Grade 2",
      "Grade 5 (Ti-6Al-4V)",
      "Grade 7",
      "Grade 12",
    ],

    supplyForms: [
      "Seamless Rolled Rings",
      "Forged Ring Blanks",
      "Rolled Ring Shells",
      "Precision Machined Rings",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM B381, ASTM B348, ASME SB381, DIN 17862, DIN 65328, NACE MR0175",
      ringOuterDiameter: "100 mm to 3000 mm",
      ringInnerDiameter: "50 mm to 2800 mm",
      ringThickness: "10 mm to 300 mm",
      ringHeight: "20 mm to 600 mm",
      materialGrades: "Grade 1, 2, 5 (Ti-6Al-4V), 7, 12",
      surfaceFinish: "Pickled, Passivated, Anodized, Machined",
      manufacturingMethods: "Forged, Rolled, Seamless Rolled, Machined",
      qualityTesting:
        "PMI, Tensile, Hardness, Impact, Ultrasonic, Dye Penetrant",
    },

    standardsCompliance: [
      "ASTM B381 — Titanium and Titanium Alloy Forgings",
      "ASTM B348 — Titanium and Titanium Alloy Bars and Billets",
      "ASME SB381 — Titanium and Titanium Alloy Forgings",
      "DIN 17862 — Titanium and Titanium Alloy Bars",
      "DIN 65328 — Aerospace Titanium Alloy Bolts",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Forged / Rolled / Annealed",
    pressureRating: "Per ASME BPVC Section VIII",
    temperatureRange: "-200°C to +400°C",
    tolerance: "Per ASTM A788 / DIN 17862",
    certifications: "EN 10204 3.1 & 3.2 MTC",

    industryApplications: [
      "Aerospace and aircraft components",
      "Marine and offshore seawater systems",
      "Chemical processing and chlor-alkali plants",
      "Desalination plants",
      "Medical implants and equipment",
      "Cryogenic piping systems",
    ],

    forms: "Seamless Rolled Rings",
    application: "Aerospace, Marine & Chemical Processing",
  },

  // ============================================
  // 8. ALLOY FORGED RINGS
  // ============================================
  {
    id: 8,
    slug: "alloy-rings",
    image: nik,
    title: "Alloy Forged Rings",
    shortDescription:
      "Zirconium 702, Tantalum, Copper-Nickel 70/30 & 90/10 Specialty Alloy Forged Rings for Ultra-Corrosive Service.",
    materialGroup: "Alloys",
    standards:
      "ASTM B550, B551, B466, B467, B564, ASME SB550, DIN 17753, NACE MR0175",

    overview:
      "Specialty alloy forged rings including zirconium, tantalum, and copper-nickel grades engineered for ultra-corrosive chemical processing, nuclear, and marine applications. Manufactured to ASTM B550, B551, B466, and B467 standards, our forged rings deliver exceptional performance in the most demanding environments.",

    grades: [
      "Zirconium 702",
      "Zirconium 705",
      "Tantalum",
      "Tantalum 2.5W",
      "Copper-Nickel 70/30",
      "Copper-Nickel 90/10",
    ],

    supplyForms: [
      "Seamless Rolled Rings",
      "Forged Ring Blanks",
      "Rolled Ring Shells",
      "Precision Machined Rings",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM B550, B551, B466, B467, B564, ASME SB550, DIN 17753, NACE MR0175",
      ringOuterDiameter: "100 mm to 2500 mm",
      ringInnerDiameter: "50 mm to 2300 mm",
      ringThickness: "10 mm to 250 mm",
      ringHeight: "20 mm to 500 mm",
      materialGrades:
        "Zirconium 702, 705, Tantalum, Ta-2.5W, Cu-Ni 70/30, Cu-Ni 90/10",
      surfaceFinish: "Pickled, Annealed, Passivated, Machined",
      manufacturingMethods: "Forged, Rolled, Seamless Rolled, Machined",
      qualityTesting:
        "PMI, Tensile, Hardness, Impact, Ultrasonic, Dye Penetrant",
    },

    standardsCompliance: [
      "ASTM B550 — Zirconium and Zirconium Alloy Bar and Wire",
      "ASTM B551 — Zirconium and Zirconium Alloy Strip, Sheet, and Plate",
      "ASTM B466 — Seamless Copper-Nickel Pipe and Tube",
      "ASTM B467 — Welded Copper-Nickel Pipe",
      "ASTM B564 — Nickel Alloy Forgings",
      "ASME SB550 — Zirconium and Zirconium Alloy Bar and Wire",
      "DIN 17753 — Wrought Nickel Alloys",
    ],

    manufacturingType: "Forged / Rolled / Annealed",
    pressureRating: "Per ASME BPVC Section VIII",
    temperatureRange: "-100°C to +400°C",
    tolerance: "Per ASTM A788 / DIN 17753",
    certifications: "EN 10204 3.1 & 3.2 MTC",

    industryApplications: [
      "Chemical processing and acid handling",
      "Nuclear power generation",
      "Marine engineering and shipbuilding",
      "Desalination and heat exchangers",
      "Pharmaceutical and food processing",
      "Pollution control equipment",
    ],

    forms: "Seamless Rolled Rings",
    application: "Ultra-Corrosive Service",
  },

  // ============================================
  // 9. COPPER NICKEL FORGED RINGS
  // ============================================
  {
    id: 9,
    slug: "copper-nickel-rings",
    image: duplex,
    title: "Copper Nickel Forged Rings",
    shortDescription:
      "Copper-Nickel 70/30 (C71500) & 90/10 (C70600) Seawater Corrosion-Resistant Forged Rings for Marine Applications.",
    materialGroup: "Copper Nickel",
    standards:
      "ASTM B466, B467, B564, ASME SB466, DIN 17670, EN 1652, NACE MR0175",

    overview:
      "Copper Nickel forged rings offering outstanding seawater corrosion resistance for shipbuilding, desalination plants, condensers, and heat exchangers. Manufactured from Copper-Nickel 70/30 (C71500) and 90/10 (C70600) grades, our forged rings deliver excellent resistance to seawater corrosion, biofouling, and erosion in the most demanding marine environments.",

    grades: [
      "Copper-Nickel 90/10 (C70600)",
      "Copper-Nickel 70/30 (C71500)",
      "Copper-Nickel 66/30/2/2",
      "Cupro-Nickel 95/5",
    ],

    supplyForms: [
      "Seamless Rolled Rings",
      "Forged Ring Blanks",
      "Rolled Ring Shells",
      "Precision Machined Rings",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM B466, B467, B564, ASME SB466, DIN 17670, EN 1652, NACE MR0175",
      ringOuterDiameter: "100 mm to 2500 mm",
      ringInnerDiameter: "50 mm to 2300 mm",
      ringThickness: "10 mm to 250 mm",
      ringHeight: "20 mm to 500 mm",
      materialGrades:
        "Cu-Ni 90/10 (C70600), Cu-Ni 70/30 (C71500), 66/30/2/2, 95/5",
      surfaceFinish: "Mill Finish, Pickled, Annealed, Machined",
      manufacturingMethods: "Forged, Rolled, Seamless Rolled, Machined",
      qualityTesting:
        "PMI, Tensile, Hardness, Impact, Ultrasonic, Dye Penetrant",
    },

    standardsCompliance: [
      "ASTM B466 — Seamless Copper-Nickel Pipe and Tube",
      "ASTM B467 — Welded Copper-Nickel Pipe",
      "ASTM B564 — Nickel Alloy Forgings",
      "ASME SB466 — Seamless Copper-Nickel Pipe and Tube",
      "DIN 17670 — Copper and Copper Alloy Sheet and Strip",
      "EN 1652 — Copper and Copper Alloys — Plate, Sheet, Strip",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Forged / Rolled / Annealed",
    pressureRating: "Per ASME BPVC Section VIII",
    temperatureRange: "-196°C to +400°C",
    tolerance: "Per ASTM A788 / DIN 17670",
    certifications: "EN 10204 3.1 & 3.2 MTC, NACE MR0175 compliant",

    industryApplications: [
      "Shipbuilding and marine structures",
      "Desalination plants and seawater systems",
      "Condensers and heat exchangers",
      "Offshore oil and gas platforms",
      "Power generation and nuclear",
      "Seawater piping and cooling systems",
    ],

    forms: "Seamless Rolled Rings",
    application:
      "Shipbuilding, desalination plants, condensers, and heat exchangers",
  },
];

export default rings;
