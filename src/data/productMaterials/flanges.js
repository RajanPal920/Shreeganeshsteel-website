// src/data/productMaterials/flanges.js

// ============================================
// IMAGE IMPORTS
// ============================================
import stainless from "../../../public/images/stock/steel-flanges-types.jpg";
import nickel from "../../../public/images/stock/copper-nickel-flange-500x500.jpg";
import highAlloys from "../../../public/images/stock/hastelloy-alloy-flanges.jpg";
import duplex from "../../../public/images/stock/duplex-steel-flanges.jpg";
import superDuplex from "../../../public/images/stock/super-duplex-2507-flanges.jpg";
import titanium from "../../../public/images/stock/titanium-flanges.jpg";
import alloys from "../../../public/images/stock/alloy-steel-flanges.jpg";
import carbon from "../../../public/images/stock/carbon-steel-flanges.jpg";
import alloySteel from "../../../public/images/stock/alloy-steel-flanges.jpg";

// ============================================
// FLANGES — 9 Products (One Per Material Group)
// ============================================
const flanges = [
  // ============================================
  // 1. STAINLESS STEEL FLANGES
  // ============================================
  {
    id: 1,
    slug: "stainless-steel-flanges",
    image: stainless,
    title: "Stainless Steel Flanges",
    shortDescription:
      "ASTM A182 F304, F304L, F316, F316L, F321, F347, F904L High-Performance Weld Neck & Slip-On Industrial Flanges.",
    materialGroup: "Stainless Steel",
    standards:
      "ASTM A182, ASME B16.5, ASME B16.47, DIN 2632, EN 1092-1, MSS SP-44",

    overview:
      "Complete range of stainless steel forged flanges conforming to ASTM A182 and ASME B16.5 standards. Manufactured from premium SS 304, 304L, 316, 316L, 321, 347, and 904L grades with full material traceability and intergranular corrosion resistance — engineered for chemical processing, petrochemical, power generation, and oil & gas facilities operating under severe corrosive and high-temperature conditions.",

    grades: ["F304", "F304L", "F316", "F316L", "F321", "F347", "F904L"],

    supplyForms: [
      "Weld Neck Flanges (WN)",
      "Slip-On Flanges (SO)",
      "Blind Flanges (BL)",
      "Threaded Flanges (THD)",
      "Socket Weld Flanges (SW)",
      "Lap Joint Flanges (LJ)",
      "Orifice Flanges",
      "Long Weld Neck Flanges",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM A182, ASME B16.5, ASME B16.47, DIN 2632, EN 1092-1, MSS SP-44",
      nominalSize: '1/2" NB to 60" NB',
      pressureClass: "Class 150, 300, 600, 900, 1500, 2500 / PN 6 to PN 100",
      materialGrades: "F304, F304L, F316, F316L, F321, F347, F904L",
      faceTypes: "RF, FF, RTJ, TG, Ring Joint",
      manufacturingMethods: "Forged, Machined, Normalized, Annealed",
      surfaceFinish: "Stock Finish, Smooth Finish, Mirror Polish",
      qualityTesting:
        "PMI, Radiography, Hydrostatic, Ultrasonic, Dye Penetrant",
    },

    standardsCompliance: [
      "ASTM A182 — Forged or Rolled Alloy and Stainless Steel Pipe Flanges",
      "ASME B16.5 — Pipe Flanges and Flanged Fittings (NPS 1/2 to NPS 24)",
      "ASME B16.47 — Large Diameter Steel Flanges (NPS 26 to NPS 60)",
      "DIN 2632 — Steel Flanges with Neck",
      "EN 1092-1 — Flanges and Their Joints",
      "MSS SP-44 — Steel Pipeline Flanges",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Drop Forged / Machined",
    pressureRating: "Per ASME B16.5 / ASME B16.47",
    temperatureRange: "-196°C to +800°C",
    tolerance: "Per ASME B16.5 / DIN 2632",
    certifications: "EN 10204 3.1 & 3.2 MTC, NACE MR0175 compliant",

    industryApplications: [
      "Chemical, petrochemical, and pharmaceutical piping",
      "Offshore oil and gas platforms and subsea flowlines",
      "Power generation and desalination plant piping",
      "Refinery and hydrocarbon processing",
      "Food, beverage, and dairy sanitary systems",
      "High-purity semiconductor and cryogenic systems",
    ],

    forms: "Weld Neck, Slip-On, Blind, Threaded",
    application: "Chemical, Petrochemical & Process Piping",
  },

  // ============================================
  // 2. NICKEL ALLOY FLANGES
  // ============================================
  {
    id: 2,
    slug: "nickel-alloy-flanges",
    image: nickel,
    title: "Nickel Alloy Flanges",
    shortDescription:
      "Nickel 200/201, Monel 400, Inconel 600/625, Incoloy 800/825 Industrial Forged Flanges for Caustic & Chemical Service.",
    materialGroup: "Nickel",
    standards: "ASTM B160, B164, B166, B408, B425, B446, ASME B16.5, DIN 17753",

    overview:
      "Premium nickel alloy forged flanges engineered for extreme temperature, pressure, and corrosive environments. Manufactured from Nickel 200/201, Monel 400, Inconel 600/625, and Incoloy 800/825 grades, our flanges deliver exceptional oxidation resistance, high-temperature strength, and superior resistance to acids, alkalis, and seawater for caustic, chemical, and nuclear applications.",

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
      "Weld Neck Flanges (WN)",
      "Blind Flanges (BL)",
      "Slip-On Flanges (SO)",
      "Socket Weld Flanges (SW)",
      "Threaded Flanges (THD)",
      "Lap Joint Flanges (LJ)",
      "Orifice Flanges",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM B160, B164, B166, B408, B425, B446, ASME B16.5, ASME B16.47, DIN 17753",
      nominalSize: '1/2" NB to 48" NB',
      pressureClass: "Class 150, 300, 600, 900, 1500, 2500",
      materialGrades:
        "Nickel 200/201, Monel 400/K500, Inconel 600/625/718, Incoloy 800/825",
      faceTypes: "RF, FF, RTJ, TG, Ring Joint",
      manufacturingMethods: "Forged, Machined, Solution Annealed",
      surfaceFinish: "Stock Finish, Smooth Finish, Pickled",
      qualityTesting:
        "PMI, Radiography, Hydrostatic, Ultrasonic, Dye Penetrant",
    },

    standardsCompliance: [
      "ASTM B160 — Nickel Rod and Bar",
      "ASTM B164 — Nickel-Copper Alloy Rod and Bar",
      "ASTM B166 — Nickel-Chromium-Iron Alloy Rod and Bar",
      "ASTM B408 — Nickel-Iron-Chromium Alloy Rod and Bar",
      "ASTM B425 — Nickel-Iron-Chromium-Molybdenum-Copper Alloy Rod and Bar",
      "ASTM B446 — Nickel-Chromium-Molybdenum-Columbium Alloy Rod and Bar",
      "ASME B16.5 — Pipe Flanges and Flanged Fittings",
      "DIN 17753 — Wrought Nickel Alloys",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Drop Forged / Machined",
    pressureRating: "Per ASME B16.5 / ASME B16.47",
    temperatureRange: "-200°C to +800°C",
    tolerance: "Per ASME B16.5 / DIN 17753",
    certifications: "EN 10204 3.1 & 3.2 MTC, NACE MR0175 compliant",

    industryApplications: [
      "Caustic soda and chlor-alkali processing",
      "Chemical processing and acid handling systems",
      "Nuclear power generation and heat exchangers",
      "Offshore oil & gas and subsea systems",
      "Marine engineering and desalination plants",
      "Aerospace and turbine engine components",
    ],

    forms: "Weld Neck, Blind, Slip-On, Socket Weld",
    application: "Chemical, Caustic Soda, Halogen Reactors",
  },

  // ============================================
  // 3. HIGH ALLOY FLANGES
  // ============================================
  {
    id: 3,
    slug: "high-alloy-flanges",
    image: highAlloys,
    title: "High Alloy Flanges",
    shortDescription:
      "Hastelloy C22, C276, Alloy 20, SMO 254 Forged Flanges for Extreme Corrosive Chemical Environments.",
    materialGroup: "High Alloys",
    standards: "ASTM B574, B575, B622, B729, ASME SB574, ASME B16.5, DIN 17744",

    overview:
      "Specialized high-alloy forged flanges engineered for wet chlorine, sulfuric acid, phosphoric acid, and aggressive halide services. Manufactured from Hastelloy C22, C276, Alloy 20, and SMO 254 grades, our flanges deliver exceptional performance in the most demanding corrosive environments across chemical processing, pollution control, and pharmaceutical industries.",

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
      "Weld Neck Flanges (WN)",
      "Blind Flanges (BL)",
      "Slip-On Flanges (SO)",
      "Socket Weld Flanges (SW)",
      "Threaded Flanges (THD)",
      "Lap Joint Flanges (LJ)",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM B574, B575, B622, B729, ASME SB574, ASME B16.5, DIN 17744",
      nominalSize: '1/2" NB to 36" NB',
      pressureClass: "Class 150, 300, 600, 900, 1500, 2500",
      materialGrades: "Hastelloy C22, C276, C2000, Alloy 20, Alloy 28, SMO 254",
      faceTypes: "RF, FF, RTJ, TG, Ring Joint",
      manufacturingMethods: "Forged, Machined, Solution Annealed",
      surfaceFinish: "Stock Finish, Smooth Finish, Pickled",
      qualityTesting:
        "PMI, Radiography, Hydrostatic, Ultrasonic, Dye Penetrant",
    },

    standardsCompliance: [
      "ASTM B574 — Low-Carbon Nickel-Chromium-Molybdenum Alloy Rod and Bar",
      "ASTM B575 — Low-Carbon Nickel-Chromium-Molybdenum Alloy Plate, Sheet, Strip",
      "ASTM B622 — Seamless Nickel and Nickel-Cobalt Alloy Pipe and Tube",
      "ASTM B729 — Seamless UNS N08020, N08026, and N08024 Alloy Pipe and Tube",
      "ASME B16.5 — Pipe Flanges and Flanged Fittings",
      "DIN 17744 — Wrought Nickel Alloys",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Drop Forged / Machined",
    pressureRating: "Per ASME B16.5",
    temperatureRange: "-100°C to +700°C",
    tolerance: "Per ASME B16.5 / DIN 17744",
    certifications: "EN 10204 3.1 & 3.2 MTC",

    industryApplications: [
      "Wet chlorine and acid handling systems",
      "Phosphoric and sulfuric acid production",
      "Flue gas desulfurization (FGD) scrubbers",
      "Chemical reactors and process vessels",
      "Pharmaceutical and agrochemical processing",
      "Pollution control equipment",
    ],

    forms: "Weld Neck, Blind, Slip-On",
    application: "Wet Chlorine, Acid Handling Systems",
  },

  // ============================================
  // 4. DUPLEX STEEL FLANGES
  // ============================================
  {
    id: 4,
    slug: "duplex-steel-flanges",
    image: duplex,
    title: "Duplex Steel Flanges",
    shortDescription:
      "ASTM A182 F51 (UNS S31803 / S32205) High-Strength Anti-Pitting Duplex Steel Blind & Socket Weld Flanges.",
    materialGroup: "Duplex",
    standards: "ASTM A182 F51, ASME B16.5, ASME B16.47, NACE MR0175, DIN 2632",

    overview:
      "High-strength duplex steel forged flanges providing exceptional resistance to chloride stress corrosion cracking. Manufactured from UNS S31803 and S32205 (2205) grades, our flanges deliver superior strength and corrosion resistance for offshore oil & gas, desalination, and chemical processing applications.",

    grades: ["UNS S31803", "UNS S32205", "F51", "2205", "LDX 2101"],

    supplyForms: [
      "Weld Neck Flanges (WN)",
      "Blind Flanges (BL)",
      "Slip-On Flanges (SO)",
      "Socket Weld Flanges (SW)",
      "Threaded Flanges (THD)",
      "Lap Joint Flanges (LJ)",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM A182 F51, ASME B16.5, ASME B16.47, DIN 2632, NACE MR0175",
      nominalSize: '1/2" NB to 48" NB',
      pressureClass: "Class 150, 300, 600, 900, 1500, 2500",
      materialGrades: "UNS S31803, S32205, F51, 2205",
      faceTypes: "RF, FF, RTJ, TG, Ring Joint",
      manufacturingMethods: "Forged, Machined, Solution Annealed",
      surfaceFinish: "Stock Finish, Smooth Finish, Pickled",
      qualityTesting:
        "PMI, Radiography, Hydrostatic, Ultrasonic, Dye Penetrant",
    },

    standardsCompliance: [
      "ASTM A182 — Forged or Rolled Alloy and Stainless Steel Pipe Flanges",
      "ASME B16.5 — Pipe Flanges and Flanged Fittings",
      "ASME B16.47 — Large Diameter Steel Flanges",
      "DIN 2632 — Steel Flanges with Neck",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Drop Forged / Machined",
    pressureRating: "Per ASME B16.5 / ASME B16.47",
    temperatureRange: "-50°C to +300°C",
    tolerance: "Per ASME B16.5 / DIN 2632",
    certifications: "EN 10204 3.1 & 3.2 MTC, NACE MR0175 compliant",

    industryApplications: [
      "Offshore oil and gas platforms",
      "Subsea flowlines and risers",
      "Desalination plants and seawater systems",
      "Chemical cargo tankers",
      "Pulp and paper digesters",
      "Pollution control scrubbers",
    ],

    forms: "Blind, Socket Weld",
    application: "Offshore Platforms, Desalination Plants",
  },

  // ============================================
  // 5. SUPER DUPLEX FLANGES
  // ============================================
  {
    id: 5,
    slug: "super-duplex-flanges",
    image: superDuplex,
    title: "Super Duplex Flanges",
    shortDescription:
      "ASTM A182 F53/F55 (UNS S32750 / S32760) Super Duplex 2507 Forged Flanges for Subsea & Seawater Systems.",
    materialGroup: "Super Duplex",
    standards:
      "ASTM A182 F53/F55, ASME B16.5, ASME B16.47, NACE MR0175, DIN 2632",

    overview:
      "Ultra-high performance super duplex forged flanges designed for aggressive subsea oilfields, critical seawater loops, and chemical plant service. Manufactured from UNS S32750 (2507) and S32760 grades, our flanges offer superior strength and corrosion resistance in the most demanding environments.",

    grades: ["UNS S32750", "UNS S32760", "F53", "F55", "2507", "Zeron 100"],

    supplyForms: [
      "Weld Neck Flanges (WN)",
      "Blind Flanges (BL)",
      "Slip-On Flanges (SO)",
      "Socket Weld Flanges (SW)",
      "Threaded Flanges (THD)",
      "Lap Joint Flanges (LJ)",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM A182 F53/F55, ASME B16.5, ASME B16.47, DIN 2632, NACE MR0175",
      nominalSize: '1/2" NB to 36" NB',
      pressureClass: "Class 150, 300, 600, 900, 1500, 2500",
      materialGrades: "UNS S32750, S32760, F53, F55, 2507",
      faceTypes: "RF, FF, RTJ, TG, Ring Joint",
      manufacturingMethods: "Forged, Machined, Solution Annealed",
      surfaceFinish: "Stock Finish, Smooth Finish, Pickled",
      qualityTesting:
        "PMI, Radiography, Hydrostatic, Ultrasonic, Dye Penetrant",
    },

    standardsCompliance: [
      "ASTM A182 — Forged or Rolled Alloy and Stainless Steel Pipe Flanges",
      "ASME B16.5 — Pipe Flanges and Flanged Fittings",
      "ASME B16.47 — Large Diameter Steel Flanges",
      "DIN 2632 — Steel Flanges with Neck",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Drop Forged / Machined",
    pressureRating: "Per ASME B16.5 / ASME B16.47",
    temperatureRange: "-50°C to +300°C",
    tolerance: "Per ASME B16.5 / DIN 2632",
    certifications: "EN 10204 3.1 & 3.2 MTC, NACE MR0175 compliant",

    industryApplications: [
      "Subsea oilfields and deepwater equipment",
      "Seawater handling and desalination systems",
      "Chemical plant service and reactors",
      "Marine engineering and shipbuilding",
      "Offshore platforms and risers",
      "Pollution control scrubbers",
    ],

    forms: "Blind (BL RTJ), Weld Neck",
    application: "Subsea Oilfields, Seawater Systems",
  },

  // ============================================
  // 6. TITANIUM FLANGES
  // ============================================
  {
    id: 6,
    slug: "titanium-flanges",
    image: titanium,
    title: "Titanium Flanges",
    shortDescription:
      "ASTM B381 Grade 1, 2, 5 (Ti-6Al-4V), 7 Lightweight High-Strength Corrosion-Immune Titanium Forged Flanges.",
    materialGroup: "Titanium",
    standards: "ASTM B381, ASME B16.5, ASME B16.47, DIN 2632, NACE MR0175",

    overview:
      "Ultra-lightweight, high-strength titanium forged flanges with impervious corrosion immunity against seawater, wet chlorine, and organic chlorides. Manufactured from Grade 1, 2, 5 (Ti-6Al-4V), and 7 grades, our flanges deliver exceptional performance in aerospace, marine, and chemical processing applications.",

    grades: [
      "Grade 1",
      "Grade 2",
      "Grade 5 (Ti-6Al-4V)",
      "Grade 7",
      "Grade 12",
    ],

    supplyForms: [
      "Weld Neck Flanges (WN)",
      "Blind Flanges (BL)",
      "Slip-On Flanges (SO)",
      "Socket Weld Flanges (SW)",
      "Threaded Flanges (THD)",
      "Lap Joint Flanges (LJ)",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM B381, ASME B16.5, ASME B16.47, DIN 2632, NACE MR0175",
      nominalSize: '1/2" NB to 36" NB',
      pressureClass: "Class 150, 300, 600, 900, 1500, 2500",
      materialGrades: "Grade 1, 2, 5 (Ti-6Al-4V), 7, 12",
      faceTypes: "RF, FF, RTJ, TG, Ring Joint",
      manufacturingMethods: "Forged, Machined, Annealed",
      surfaceFinish: "Stock Finish, Smooth Finish, Passivated",
      qualityTesting:
        "PMI, Radiography, Hydrostatic, Ultrasonic, Dye Penetrant",
    },

    standardsCompliance: [
      "ASTM B381 — Titanium and Titanium Alloy Forgings",
      "ASME B16.5 — Pipe Flanges and Flanged Fittings",
      "ASME B16.47 — Large Diameter Steel Flanges",
      "DIN 2632 — Steel Flanges with Neck",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Drop Forged / Machined",
    pressureRating: "Per ASME B16.5 / ASME B16.47",
    temperatureRange: "-200°C to +400°C",
    tolerance: "Per ASME B16.5 / DIN 2632",
    certifications: "EN 10204 3.1 & 3.2 MTC",

    industryApplications: [
      "Aerospace and aircraft components",
      "Marine and offshore seawater systems",
      "Chemical processing and chlor-alkali plants",
      "Desalination plants",
      "Medical implants and equipment",
      "Cryogenic piping systems",
    ],

    forms: "Weld Neck, Blind, Slip-On",
    application: "Aerospace, Marine, Chemical Processing",
  },

  // ============================================
  // 7. ALLOY FLANGES
  // ============================================
  {
    id: 7,
    slug: "alloy-flanges",
    image: alloys,
    title: "Alloy Flanges",
    shortDescription:
      "Zirconium 702, Tantalum, Copper-Nickel 70/30 & 90/10 Specialty Alloy Flanges for Ultra-Corrosive Service.",
    materialGroup: "Alloys",
    standards: "ASTM B550, B551, B466, B467, ASME SB550, ASME B16.5, DIN 17753",

    overview:
      "Specialty alloy forged flanges including zirconium, tantalum, and copper-nickel grades engineered for ultra-corrosive chemical processing, nuclear, and marine applications. Manufactured to ASTM B550, B551, B466, and B467 standards, our flanges deliver exceptional performance in the most demanding environments.",

    grades: [
      "Zirconium 702",
      "Zirconium 705",
      "Tantalum",
      "Tantalum 2.5W",
      "Copper-Nickel 70/30",
      "Copper-Nickel 90/10",
    ],

    supplyForms: [
      "Weld Neck Flanges (WN)",
      "Blind Flanges (BL)",
      "Slip-On Flanges (SO)",
      "Socket Weld Flanges (SW)",
      "Threaded Flanges (THD)",
      "Lap Joint Flanges (LJ)",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM B550, B551, B466, B467, ASME SB550, ASME B16.5, DIN 17753",
      nominalSize: '1/2" NB to 24" NB',
      pressureClass: "Class 150, 300, 600, 900, 1500",
      materialGrades:
        "Zirconium 702, Zirconium 705, Tantalum, Cu-Ni 70/30, Cu-Ni 90/10",
      faceTypes: "RF, FF, RTJ, TG, Ring Joint",
      manufacturingMethods: "Forged, Machined, Annealed",
      surfaceFinish: "Stock Finish, Smooth Finish, Pickled",
      qualityTesting:
        "PMI, Radiography, Hydrostatic, Ultrasonic, Dye Penetrant",
    },

    standardsCompliance: [
      "ASTM B550 — Zirconium and Zirconium Alloy Bar and Wire",
      "ASTM B551 — Zirconium and Zirconium Alloy Strip, Sheet, and Plate",
      "ASTM B466 — Seamless Copper-Nickel Pipe and Tube",
      "ASTM B467 — Welded Copper-Nickel Pipe",
      "ASME B16.5 — Pipe Flanges and Flanged Fittings",
      "DIN 17753 — Wrought Nickel Alloys",
    ],

    manufacturingType: "Drop Forged / Machined",
    pressureRating: "Per ASME B16.5",
    temperatureRange: "-100°C to +400°C",
    tolerance: "Per ASME B16.5 / DIN 17753",
    certifications: "EN 10204 3.1 & 3.2 MTC",

    industryApplications: [
      "Chemical processing and acid handling",
      "Nuclear power generation",
      "Marine engineering and shipbuilding",
      "Desalination and heat exchangers",
      "Pharmaceutical and food processing",
      "Pollution control equipment",
    ],

    forms: "Weld Neck, Blind, Slip-On",
    application: "Chemical Processing, Nuclear, Marine",
  },

  // ============================================
  // 8. CARBON STEEL FLANGES
  // ============================================
  {
    id: 8,
    slug: "carbon-steel-flanges",
    image: carbon,
    title: "Carbon Steel Flanges",
    shortDescription:
      "ASTM A105, A350 LF2, A694 F52/F60/F65/F70 Normalized Drop-Forged Carbon Steel Industrial Flanges.",
    materialGroup: "Carbon",
    standards:
      "ASTM A105, ASTM A350 LF2, ASTM A694 F52/F60/F65/F70, ASME B16.5, ASME B16.47, MSS SP-44",

    overview:
      "Heavy-duty carbon steel forged flanges engineered for high-pressure, high-temperature, and low-temperature piping systems. Manufactured to ASTM A105, A350, and A694 standards, our flanges deliver superior strength and reliability in refineries, power plants, oil & gas pipelines, and heavy engineering applications.",

    grades: [
      "ASTM A105",
      "ASTM A350 LF2",
      "ASTM A694 F52",
      "ASTM A694 F60",
      "ASTM A694 F65",
      "ASTM A694 F70",
    ],

    supplyForms: [
      "Weld Neck Flanges (WN)",
      "Blind Flanges (BL)",
      "Slip-On Flanges (SO)",
      "Threaded Flanges (THD)",
      "Socket Weld Flanges (SW)",
      "Lap Joint Flanges (LJ)",
      "Orifice Flanges",
      "Long Weld Neck Flanges",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM A105, ASTM A350 LF2, ASTM A694, ASME B16.5, ASME B16.47, MSS SP-44",
      nominalSize: '1/2" NB to 60" NB',
      pressureClass: "Class 150, 300, 600, 900, 1500, 2500",
      materialGrades: "A105, A350 LF2, A694 F52, F60, F65, F70",
      faceTypes: "RF, FF, RTJ, TG, Ring Joint",
      manufacturingMethods: "Drop Forged, Normalized, Machined",
      surfaceFinish: "Black, Varnished, Galvanized, Yellow Chromate",
      qualityTesting: "PMI, Radiography, Hydrostatic, Ultrasonic, Impact Test",
    },

    standardsCompliance: [
      "ASTM A105 — Carbon Steel Forgings for Piping Applications",
      "ASTM A350 — Carbon and Low-Alloy Steel Forgings for Piping Components",
      "ASTM A694 — Carbon and Alloy Steel Forgings for Pipe Flanges",
      "ASME B16.5 — Pipe Flanges and Flanged Fittings",
      "ASME B16.47 — Large Diameter Steel Flanges",
      "MSS SP-44 — Steel Pipeline Flanges",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Drop Forged / Normalized / Machined",
    pressureRating: "Per ASME B16.5 / ASME B16.47",
    temperatureRange: "-46°C to +425°C",
    tolerance: "Per ASME B16.5 / ASME B16.47",
    certifications: "EN 10204 3.1 MTC, NACE MR0175 compliant",

    industryApplications: [
      "Oil and gas transmission pipelines",
      "Refinery and petrochemical process piping",
      "Steam generation and power plants",
      "Low-temperature and cryogenic service",
      "Heavy engineering and industrial infrastructure",
      "Water and gas distribution systems",
    ],

    forms: "Weld Neck, Blind, Slip-On, Threaded",
    application: "Oil & Gas, Steam Pipelines",
  },

  // ============================================
  // 9. ALLOY STEEL FLANGES
  // ============================================
  {
    id: 9,
    slug: "alloy-steel-flanges",
    image: alloySteel,
    title: "Alloy Steel Flanges",
    shortDescription:
      "ASTM A182 F1, F5, F9, F11, F22, F91 Chrome-Moly High-Temperature Forged Alloy Steel Flanges.",
    materialGroup: "Alloy Steel",
    standards:
      "ASTM A182 F1/F5/F9/F11/F22/F91, ASTM A335, ASME B16.5, ASME B16.47, ASME B31.1",

    overview:
      "Chromium-molybdenum creep-resistant alloy steel forged flanges engineered for supercritical boilers, heat recovery steam generators, and extreme-temperature steam lines. Manufactured to ASTM A182 and A335 standards, our flanges deliver reliable performance at temperatures up to 650°C.",

    grades: [
      "ASTM A182 F1",
      "ASTM A182 F5",
      "ASTM A182 F9",
      "ASTM A182 F11",
      "ASTM A182 F22",
      "ASTM A182 F91",
    ],

    supplyForms: [
      "Weld Neck Flanges (WN)",
      "Blind Flanges (BL)",
      "Slip-On Flanges (SO)",
      "Socket Weld Flanges (SW)",
      "Threaded Flanges (THD)",
      "Lap Joint Flanges (LJ)",
      "Orifice Flanges",
      "Long Weld Neck Flanges",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM A182, ASTM A335, ASME B16.5, ASME B16.47, ASME B31.1, DIN 2632",
      nominalSize: '1/2" NB to 48" NB',
      pressureClass: "Class 150, 300, 600, 900, 1500, 2500",
      materialGrades: "F1, F5, F9, F11, F22, F91",
      faceTypes: "RF, FF, RTJ, TG, Ring Joint",
      manufacturingMethods: "Drop Forged, Normalized, Annealed, Machined",
      surfaceFinish: "Hot Finished, Pickled, Annealed",
      qualityTesting: "PMI, Radiography, Hydrostatic, Ultrasonic, Impact Test",
    },

    standardsCompliance: [
      "ASTM A182 — Forged or Rolled Alloy and Stainless Steel Pipe Flanges",
      "ASTM A335 — Seamless Ferritic Alloy-Steel Pipe for High-Temperature Service",
      "ASME B16.5 — Pipe Flanges and Flanged Fittings",
      "ASME B16.47 — Large Diameter Steel Flanges",
      "ASME B31.1 — Power Piping Code",
      "DIN 2632 — Steel Flanges with Neck",
    ],

    manufacturingType: "Drop Forged / Normalized / Machined",
    pressureRating: "Per ASME B16.5 / ASME B16.47 / ASME B31.1",
    temperatureRange: "-29°C to +650°C",
    tolerance: "Per ASME B16.5 / ASME B16.47",
    certifications: "EN 10204 3.1 & 3.2 MTC",

    industryApplications: [
      "Superheater and reheat steam lines",
      "Heat recovery steam generators (HRSG)",
      "Refinery hydrotreaters and hydrocrackers",
      "Power plant steam lines",
      "Petrochemical process piping",
      "High-temperature chemical reactors",
    ],

    forms: "Weld Neck, Blind, Slip-On",
    application: "Superheater Steam Lines, Refinery, Power Plants",
  },
];

export default flanges;
