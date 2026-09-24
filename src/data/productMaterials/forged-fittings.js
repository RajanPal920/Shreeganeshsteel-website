// src/data/productMaterials/forgedfitting.js

// ============================================
// IMAGE IMPORTS
// ============================================
import car from "../../../public/images/stock/carbon-alloy-steel-forged-fittings.jpg";
import hast from "../../../public/images/stock/hastelloy-forged-fittings.jpg";
import inc from "../../../public/images/stock/incoloy-forged-fittings.jpg";
import mon from "../../../public/images/stock/monel-forged-fittings.jpg";
import nic from "../../../public/images/stock/nickel-copper-alloy-forged-fittings.jpg";

// ============================================
// FORGED FITTINGS — 9 Products (One Per Material Group)
// ============================================
const forgedfitting = [
  // ============================================
  // 1. CARBON & ALLOY STEEL FORGED FITTINGS
  // ============================================
  {
    id: 1,
    slug: "carbon-alloy-steel-forged-fittings",
    image: car,
    title: "Carbon Alloy Steel Forged Fittings",
    shortDescription:
      "ASTM A105, A350 LF2, ASTM A182 F5, F11, F22, F91 Class 3000 / 6000 / 9000 High-Pressure Socket Weld & Threaded Unions.",
    materialGroup: "Carbon & Alloy Steel",
    standards:
      "ASTM A105, ASTM A350 LF2, ASTM A182 F5/F11/F22/F91, ASME B16.11, MSS SP-79, MSS SP-83, MSS SP-95, MSS SP-97",

    overview:
      "Heavy-duty carbon and alloy steel forged fittings engineered for high-pressure, high-temperature, and low-temperature piping systems. Manufactured to ASTM A105, A350, and A182 standards in Class 3000, 6000, and 9000 pressure ratings, our forged fittings deliver superior strength, reliable sealing, and long service life in refineries, power plants, oil & gas, and heavy engineering applications.",

    grades: [
      "ASTM A105",
      "ASTM A350 LF2",
      "ASTM A182 F5",
      "ASTM A182 F11",
      "ASTM A182 F22",
      "ASTM A182 F91",
    ],

    supplyForms: [
      "Socket Weld Unions",
      "Threaded Unions",
      "Socket Weld Elbows (90°/45°)",
      "Threaded Elbows (90°/45°)",
      "Socket Weld Tees",
      "Threaded Tees",
      "Socket Weld Crosses",
      "Threaded Crosses",
      "Socket Weld Couplings (Full/Half)",
      "Threaded Couplings (Full/Half)",
      "Socket Weld Caps",
      "Threaded Caps",
      "Swage Nipples (Concentric/Eccentric)",
      "Bull Plugs",
      "Hex Plugs & Bushings",
      "Street Elbows",
      "Weldolets, Sockolets, Threadolets",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM A105, ASTM A350, ASTM A182, ASME B16.11, MSS SP-79, MSS SP-83, MSS SP-95, MSS SP-97",
      nominalSize: '1/8" NB to 4" NB',
      pressureClass: "Class 2000, 3000, 6000, 9000",
      materialGrades: "A105, A350 LF2, A182 F5, F11, F22, F91",
      endConnections: "Socket Weld (SW), Threaded (NPT/BSP)",
      threadTypes: "NPT, BSP, BSPT, Metric",
      manufacturingMethods: "Drop Forged, Machined, Normalized",
      surfaceFinish: "Black, Varnished, Galvanized, Yellow Chromate",
      qualityTesting:
        "PMI, Radiography, Hydrostatic, Ultrasonic, Dye Penetrant",
    },

    standardsCompliance: [
      "ASTM A105 — Carbon Steel Forgings for Piping Applications",
      "ASTM A350 — Carbon and Low-Alloy Steel Forgings for Piping Components",
      "ASTM A182 — Forged or Rolled Alloy and Stainless Steel Pipe Flanges",
      "ASME B16.11 — Forged Fittings, Socket-Welding and Threaded",
      "MSS SP-79 — Socket-Welding Reducer Inserts",
      "MSS SP-83 — Steel Pipe Unions, Socket-Welding and Threaded",
      "MSS SP-95 — Swage(d) Nipples and Bull Plugs",
      "MSS SP-97 — Integrally Reinforced Forged Branch Outlet Fittings",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Drop Forged / Machined",
    pressureRating: "Class 2000 / 3000 / 6000 / 9000",
    temperatureRange: "-46°C to +650°C",
    tolerance: "Per ASME B16.11 / MSS SP Standards",
    certifications: "EN 10204 3.1 MTC, NACE MR0175 compliant",

    industryApplications: [
      "High-pressure piping systems",
      "Refinery and petrochemical process piping",
      "Power plants and steam generation",
      "Oil and gas transmission pipelines",
      "Low-temperature and cryogenic service",
      "Heavy engineering and industrial infrastructure",
    ],

    forms:
      "Class 3000 / 6000 / 9000 High-Pressure Socket Weld & Threaded Unions",
    application:
      "High-pressure piping systems, refineries, power plants, oil & gas, and heavy engineering",
  },

  // ============================================
  // 2. HASTELLOY FORGED FITTINGS
  // ============================================
  {
    id: 2,
    slug: "hastelloy-forged-fittings",
    image: hast,
    title: "Hastelloy Forged Fittings",
    shortDescription:
      "Hastelloy C276, C22, B2, B3, Alloy X Forged Crosses, Tees, and Full Couplings for Harsh Chemical Corrosive Streams.",
    materialGroup: "Hastelloy Core",
    standards:
      "ASTM B574, B575, B622, B619, B626, ASME SB574, ASME B16.11, DIN 17744",

    overview:
      "Specialized Hastelloy forged fittings engineered for wet chlorine, sulfuric acid, phosphoric acid, and aggressive halide services. Manufactured from Hastelloy C276, C22, B2, B3, and Alloy X grades, our forged fittings deliver exceptional performance in the most demanding corrosive environments across chemical processing, petrochemical refineries, and pollution control industries.",

    grades: [
      "Hastelloy C276",
      "Hastelloy C22",
      "Hastelloy B2",
      "Hastelloy B3",
      "Hastelloy X",
      "Hastelloy C2000",
    ],

    supplyForms: [
      "Forged Crosses",
      "Forged Tees",
      "Forged Elbows (90°/45°)",
      "Full Couplings",
      "Half Couplings",
      "Socket Weld Unions",
      "Threaded Unions",
      "Swage Nipples",
      "Hex Plugs & Bushings",
      "Weldolets, Sockolets, Threadolets",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM B574, B575, B622, B619, B626, ASME SB574, ASME B16.11, DIN 17744",
      nominalSize: '1/8" NB to 4" NB',
      pressureClass: "Class 2000, 3000, 6000, 9000",
      materialGrades: "Hastelloy C276, C22, B2, B3, X, C2000",
      endConnections: "Socket Weld (SW), Threaded (NPT/BSP)",
      threadTypes: "NPT, BSP, BSPT, Metric",
      manufacturingMethods: "Drop Forged, Machined, Solution Annealed",
      surfaceFinish: "Pickled, Passivated, Solution Annealed",
      qualityTesting:
        "PMI, Radiography, Hydrostatic, Ultrasonic, Dye Penetrant",
    },

    standardsCompliance: [
      "ASTM B574 — Low-Carbon Nickel-Chromium-Molybdenum Alloy Rod and Bar",
      "ASTM B575 — Low-Carbon Nickel-Chromium-Molybdenum Alloy Plate, Sheet, Strip",
      "ASTM B622 — Seamless Nickel and Nickel-Cobalt Alloy Pipe and Tube",
      "ASTM B619 — Welded Nickel and Nickel-Cobalt Alloy Pipe",
      "ASTM B626 — Welded Nickel and Nickel-Cobalt Alloy Tube",
      "ASME B16.11 — Forged Fittings, Socket-Welding and Threaded",
      "DIN 17744 — Wrought Nickel Alloys",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Drop Forged / Machined",
    pressureRating: "Class 2000 / 3000 / 6000 / 9000",
    temperatureRange: "-100°C to +700°C",
    tolerance: "Per ASME B16.11 / DIN 17744",
    certifications: "EN 10204 3.1 & 3.2 MTC",

    industryApplications: [
      "Wet chlorine and acid handling systems",
      "Phosphoric and sulfuric acid production",
      "Flue gas desulfurization (FGD) scrubbers",
      "Chemical reactors and process vessels",
      "Petrochemical refineries",
      "Pollution control equipment",
    ],

    forms: "Forged Crosses, Tees, and Full Couplings",
    application:
      "Highly corrosive chemicals, acids, and aggressive industrial processing environments",
  },

  // ============================================
  // 3. INCOLOY FORGED FITTINGS
  // ============================================
  {
    id: 3,
    slug: "incoloy-forged-fittings",
    image: hast,
    title: "Incoloy Forged Fittings",
    shortDescription:
      "Incoloy 800, 800H, 800HT, 825 Forged Swage Nipples, Street Elbows, and Hex Plugs for High-Stress Processing Lines.",
    materialGroup: "Incoloy Superalloy",
    standards:
      "ASTM B407, B408, B425, B366, ASME SB407, ASME B16.11, DIN 17753",

    overview:
      "Premium Incoloy forged fittings engineered for elevated-temperature industrial applications. Manufactured from Incoloy 800, 800H, 800HT, and 825 grades, our forged fittings deliver superior resistance to oxidation, carburization, and reducing/oxidizing acids in petrochemical, heat exchanger, and furnace applications.",

    grades: [
      "Incoloy 800",
      "Incoloy 800H",
      "Incoloy 800HT",
      "Incoloy 825",
      "Incoloy 925",
    ],

    supplyForms: [
      "Forged Swage Nipples (Concentric/Eccentric)",
      "Forged Street Elbows",
      "Forged Hex Plugs",
      "Forged Elbows (90°/45°)",
      "Forged Tees",
      "Forged Crosses",
      "Full Couplings",
      "Half Couplings",
      "Socket Weld Unions",
      "Threaded Unions",
      "Weldolets, Sockolets, Threadolets",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM B407, B408, B425, B366, ASME SB407, ASME B16.11, DIN 17753",
      nominalSize: '1/8" NB to 4" NB',
      pressureClass: "Class 2000, 3000, 6000, 9000",
      materialGrades: "Incoloy 800, 800H, 800HT, 825, 925",
      endConnections: "Socket Weld (SW), Threaded (NPT/BSP)",
      threadTypes: "NPT, BSP, BSPT, Metric",
      manufacturingMethods: "Drop Forged, Machined, Solution Annealed",
      surfaceFinish: "Pickled, Passivated, Solution Annealed",
      qualityTesting:
        "PMI, Radiography, Hydrostatic, Ultrasonic, Dye Penetrant",
    },

    standardsCompliance: [
      "ASTM B407 — Nickel-Iron-Chromium Alloy Seamless Pipe and Tube",
      "ASTM B408 — Nickel-Iron-Chromium Alloy Rod and Bar",
      "ASTM B425 — Nickel-Iron-Chromium-Molybdenum-Copper Alloy Rod and Bar",
      "ASTM B366 — Factory-Made Wrought Nickel and Nickel Alloy Fittings",
      "ASME B16.11 — Forged Fittings, Socket-Welding and Threaded",
      "DIN 17753 — Wrought Nickel Alloys",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Drop Forged / Machined",
    pressureRating: "Class 2000 / 3000 / 6000 / 9000",
    temperatureRange: "-100°C to +800°C",
    tolerance: "Per ASME B16.11 / DIN 17753",
    certifications: "EN 10204 3.1 & 3.2 MTC",

    industryApplications: [
      "Heat exchangers and process industries",
      "Petrochemical and refinery piping",
      "Heat treatment furnaces",
      "Steam generators and heat exchangers",
      "Chemical processing equipment",
      "Pollution control systems",
    ],

    forms: "Forged Swage Nipples, Street Elbows, and Hex Plugs",
    application: "Heat exchangers and process industries",
  },

  // ============================================
  // 4. INCONEL FORGED FITTINGS
  // ============================================
  {
    id: 4,
    slug: "inconel-forged-fittings",
    image: inc,
    title: "Inconel Forged Fittings",
    shortDescription:
      "Inconel 600, 625, 718, X-750 Oxidation-Resistant Half Couplings and Socket Weld Reducing Tees for Nuclear & Aerospace Engineering.",
    materialGroup: "Inconel Core",
    standards:
      "ASTM B166, B446, B564, B366, ASME SB166, ASME B16.11, DIN 17753",

    overview:
      "High-performance Inconel forged fittings engineered for extreme temperature and oxidation-resistant environments. Manufactured from Inconel 600, 625, 718, and X-750 grades, our forged fittings deliver exceptional mechanical strength and corrosion resistance in thermal power, aerospace, nuclear, and chemical processing applications.",

    grades: [
      "Inconel 600",
      "Inconel 601",
      "Inconel 625",
      "Inconel 718",
      "Inconel X-750",
    ],

    supplyForms: [
      "Oxidation-Resistant Half Couplings",
      "Socket Weld Reducing Tees",
      "Forged Elbows (90°/45°)",
      "Forged Tees",
      "Forged Crosses",
      "Full Couplings",
      "Socket Weld Unions",
      "Threaded Unions",
      "Swage Nipples",
      "Hex Plugs & Bushings",
      "Weldolets, Sockolets, Threadolets",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM B166, B446, B564, B366, ASME SB166, ASME B16.11, DIN 17753",
      nominalSize: '1/8" NB to 4" NB',
      pressureClass: "Class 2000, 3000, 6000, 9000",
      materialGrades: "Inconel 600, 601, 625, 718, X-750",
      endConnections: "Socket Weld (SW), Threaded (NPT/BSP)",
      threadTypes: "NPT, BSP, BSPT, Metric",
      manufacturingMethods: "Drop Forged, Machined, Solution Annealed",
      surfaceFinish: "Pickled, Passivated, Solution Annealed",
      qualityTesting:
        "PMI, Radiography, Hydrostatic, Ultrasonic, Dye Penetrant",
    },

    standardsCompliance: [
      "ASTM B166 — Nickel-Chromium-Iron Alloy Rod and Bar",
      "ASTM B446 — Nickel-Chromium-Molybdenum-Columbium Alloy Rod and Bar",
      "ASTM B564 — Nickel Alloy Forgings",
      "ASTM B366 — Factory-Made Wrought Nickel and Nickel Alloy Fittings",
      "ASME B16.11 — Forged Fittings, Socket-Welding and Threaded",
      "DIN 17753 — Wrought Nickel Alloys",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Drop Forged / Machined",
    pressureRating: "Class 2000 / 3000 / 6000 / 9000",
    temperatureRange: "-200°C to +800°C",
    tolerance: "Per ASME B16.11 / DIN 17753",
    certifications: "EN 10204 3.1 & 3.2 MTC",

    industryApplications: [
      "Extreme temperatures and high-pressure systems",
      "Aerospace and turbine engine components",
      "Nuclear reactors and heat exchangers",
      "Petrochemical and power generation",
      "Chemical processing and acid handling",
      "Heat treatment furnaces",
    ],

    forms: "Oxidation-Resistant Half Couplings and Socket Weld Reducing Tees",
    application:
      "Extreme temperatures, high-pressure systems, aerospace, petrochemical, and power generation",
  },

  // ============================================
  // 5. MONEL FORGED FITTINGS
  // ============================================
  {
    id: 5,
    slug: "monel-forged-fittings",
    image: mon,
    title: "Monel Forged Fittings",
    shortDescription:
      "Monel 400, Monel K500 Forged Threaded Caps, Bosses, and Reducing Inserts Built for High-Salinity Marine Piping.",
    materialGroup: "Monel Alloy",
    standards: "ASTM B164, B564, B366, ASME SB164, ASME B16.11, DIN 17743",

    overview:
      "Specialty Monel forged fittings engineered for seawater, acid, and alkaline environments. Manufactured from Monel 400 and Monel K500 grades, our forged fittings deliver outstanding resistance to marine corrosion, hydrochloric acid, and sulfuric acid in desalination, marine engineering, and chemical processing applications.",

    grades: ["Monel 400", "Monel K500", "Monel R405"],

    supplyForms: [
      "Forged Threaded Caps",
      "Forged Bosses",
      "Forged Reducing Inserts",
      "Forged Elbows (90°/45°)",
      "Forged Tees",
      "Forged Crosses",
      "Full Couplings",
      "Half Couplings",
      "Socket Weld Unions",
      "Threaded Unions",
      "Swage Nipples",
      "Hex Plugs & Bushings",
      "Weldolets, Sockolets, Threadolets",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM B164, B564, B366, ASME SB164, ASME B16.11, DIN 17743",
      nominalSize: '1/8" NB to 4" NB',
      pressureClass: "Class 2000, 3000, 6000, 9000",
      materialGrades: "Monel 400, K500, R405",
      endConnections: "Socket Weld (SW), Threaded (NPT/BSP)",
      threadTypes: "NPT, BSP, BSPT, Metric",
      manufacturingMethods: "Drop Forged, Machined, Annealed",
      surfaceFinish: "Pickled, Passivated, Annealed",
      qualityTesting:
        "PMI, Radiography, Hydrostatic, Ultrasonic, Dye Penetrant",
    },

    standardsCompliance: [
      "ASTM B164 — Nickel-Copper Alloy Rod and Bar",
      "ASTM B564 — Nickel Alloy Forgings",
      "ASTM B366 — Factory-Made Wrought Nickel and Nickel Alloy Fittings",
      "ASME B16.11 — Forged Fittings, Socket-Welding and Threaded",
      "DIN 17743 — Wrought Nickel-Copper Alloys",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Drop Forged / Machined",
    pressureRating: "Class 2000 / 3000 / 6000 / 9000",
    temperatureRange: "-100°C to +480°C",
    tolerance: "Per ASME B16.11 / DIN 17743",
    certifications: "EN 10204 3.1 & 3.2 MTC",

    industryApplications: [
      "Seawater and marine environments",
      "Acid and alkali handling systems",
      "Desalination infrastructure components",
      "Offshore oil and gas platforms",
      "Seawater heat exchangers",
      "Chemical processing and acid handling",
    ],

    forms: "Forged Threaded Caps, Bosses, and Reducing Inserts",
    application: "Seawater, acids, alkalis, and marine environments",
  },

  // ============================================
  // 6. NICKEL COPPER ALLOY FORGED FITTINGS
  // ============================================
  {
    id: 6,
    slug: "nickel-copper-alloy-forged-fittings",
    image: nic,
    title: "Nickel Copper Alloy Forged Fittings",
    shortDescription:
      "Copper-Nickel 70/30, 90/10 Forged Lateral Tees, Weldolets, and Threaded Elbows for Offshore Marine Platforms.",
    materialGroup: "Nickel Copper",
    standards:
      "ASTM B466, B467, B564, B366, ASME SB466, ASME B16.11, DIN 17743",

    overview:
      "Premium copper-nickel alloy forged fittings engineered for subsea pipelines, offshore structures, and marine engineering. Manufactured from Copper-Nickel 70/30 and 90/10 grades, our forged fittings deliver excellent resistance to seawater corrosion and biofouling in the most demanding marine environments.",

    grades: [
      "Copper-Nickel 70/30",
      "Copper-Nickel 90/10",
      "Copper-Nickel 66/30/2/2",
    ],

    supplyForms: [
      "Forged Lateral Tees",
      "Weldolets",
      "Threaded Elbows (90°/45°)",
      "Forged Tees",
      "Forged Crosses",
      "Full Couplings",
      "Half Couplings",
      "Socket Weld Unions",
      "Threaded Unions",
      "Swage Nipples",
      "Hex Plugs & Bushings",
      "Sockolets, Threadolets",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM B466, B467, B564, B366, ASME SB466, ASME B16.11, DIN 17743",
      nominalSize: '1/8" NB to 4" NB',
      pressureClass: "Class 2000, 3000, 6000, 9000",
      materialGrades: "Cu-Ni 70/30, Cu-Ni 90/10, Cu-Ni 66/30/2/2",
      endConnections: "Socket Weld (SW), Threaded (NPT/BSP)",
      threadTypes: "NPT, BSP, BSPT, Metric",
      manufacturingMethods: "Drop Forged, Machined, Annealed",
      surfaceFinish: "Pickled, Passivated, Annealed",
      qualityTesting:
        "PMI, Radiography, Hydrostatic, Ultrasonic, Dye Penetrant",
    },

    standardsCompliance: [
      "ASTM B466 — Seamless Copper-Nickel Pipe and Tube",
      "ASTM B467 — Welded Copper-Nickel Pipe",
      "ASTM B564 — Nickel Alloy Forgings",
      "ASTM B366 — Factory-Made Wrought Nickel and Nickel Alloy Fittings",
      "ASME B16.11 — Forged Fittings, Socket-Welding and Threaded",
      "DIN 17743 — Wrought Nickel-Copper Alloys",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Drop Forged / Machined",
    pressureRating: "Class 2000 / 3000 / 6000 / 9000",
    temperatureRange: "-100°C to +400°C",
    tolerance: "Per ASME B16.11 / DIN 17743",
    certifications: "EN 10204 3.1 & 3.2 MTC",

    industryApplications: [
      "Marine engineering and offshore platforms",
      "Subsea pipeline systems",
      "Condensers and heat exchangers",
      "Desalination plants",
      "Seawater cooling systems",
      "Anti-biofouling offshore joint runs",
    ],

    forms: "Forged Lateral Tees, Weldolets, and Threaded Elbows",
    application:
      "Marine engineering, offshore platforms, condensers, and chemical processing",
  },

  // ============================================
  // 7. STAINLESS & DUPLEX STEEL FORGED FITTINGS
  // ============================================
  {
    id: 7,
    slug: "stainless-duplex-steel-forged-fittings",
    image: car,
    title: "Stainless & Duplex Steel Forged Fittings",
    shortDescription:
      "ASTM A182 F304L, F316L, F321, F347, 904L / Duplex F51, F53, F60 / Super Duplex F55 Structural Branch Connections & Sockolets.",
    materialGroup: "Stainless & Duplex",
    standards:
      "ASTM A182 F304L/F316L/F321/F347/904L, ASTM A182 F51/F53/F55/F60, ASME B16.11, MSS SP-97, NACE MR0175",

    overview:
      "High-performance stainless and duplex steel forged fittings engineered for demanding industrial environments requiring corrosion resistance and high strength. Manufactured from SS 304L, 316L, 321, 347, 904L and Duplex F51, F53, F60, and Super Duplex F55 grades, our forged fittings deliver superior corrosion resistance, reliable sealing, and long service life in chemical, petrochemical, offshore, and marine applications.",

    grades: [
      "ASTM A182 F304L",
      "ASTM A182 F316L",
      "ASTM A182 F321",
      "ASTM A182 F347",
      "ASTM A182 F904L",
      "Duplex F51",
      "Duplex F53",
      "Duplex F60",
      "Super Duplex F55",
    ],

    supplyForms: [
      "Structural Branch Connections",
      "Sockolets",
      "Weldolets",
      "Threadolets",
      "Elbolets",
      "Forged Elbows (90°/45°)",
      "Forged Tees",
      "Forged Crosses",
      "Full Couplings",
      "Half Couplings",
      "Socket Weld Unions",
      "Threaded Unions",
      "Swage Nipples",
      "Hex Plugs & Bushings",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM A182, ASME B16.11, MSS SP-97, MSS SP-79, MSS SP-83, MSS SP-95, NACE MR0175",
      nominalSize: '1/8" NB to 4" NB',
      pressureClass: "Class 2000, 3000, 6000, 9000",
      materialGrades: "F304L, F316L, F321, F347, F904L, F51, F53, F55, F60",
      endConnections: "Socket Weld (SW), Threaded (NPT/BSP), Butt Weld",
      threadTypes: "NPT, BSP, BSPT, Metric",
      manufacturingMethods: "Drop Forged, Machined, Solution Annealed",
      surfaceFinish: "Pickled, Passivated, Solution Annealed",
      qualityTesting:
        "PMI, Radiography, Hydrostatic, Ultrasonic, Dye Penetrant",
    },

    standardsCompliance: [
      "ASTM A182 — Forged or Rolled Alloy and Stainless Steel Pipe Flanges",
      "ASME B16.11 — Forged Fittings, Socket-Welding and Threaded",
      "MSS SP-97 — Integrally Reinforced Forged Branch Outlet Fittings",
      "MSS SP-79 — Socket-Welding Reducer Inserts",
      "MSS SP-83 — Steel Pipe Unions, Socket-Welding and Threaded",
      "MSS SP-95 — Swage(d) Nipples and Bull Plugs",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Drop Forged / Machined",
    pressureRating: "Class 2000 / 3000 / 6000 / 9000",
    temperatureRange: "-196°C to +800°C",
    tolerance: "Per ASME B16.11 / MSS SP Standards",
    certifications: "EN 10204 3.1 & 3.2 MTC, NACE MR0175 compliant",

    industryApplications: [
      "Chemical and petrochemical process piping",
      "Offshore oil and gas platforms",
      "Subsea flowlines and risers",
      "Power generation and desalination plants",
      "Marine engineering and shipbuilding",
      "Demanding industrial environments requiring corrosion resistance",
    ],

    forms: "Structural Branch Connections & Sockolets",
    application:
      "Demanding industrial environments requiring corrosion resistance and high strength",
  },

  // ============================================
  // 8. TANTALUM FORGED FITTINGS
  // ============================================
  {
    id: 8,
    slug: "tantalum-forged-fittings",
    image: mon,
    title: "Tantalum Forged Fittings",
    shortDescription:
      "Pure Tantalum UNS R05200, Tantalum-Tungsten Alloys (Ta-10W, Ta-2.5W) Specialized High-Acid Chemical Process Hardware.",
    materialGroup: "Tantalum Rare Core",
    standards:
      "ASTM B521, ASTM B365, ASTM B708, ASME SB521, ASME B16.11, DIN 17753",

    overview:
      "Specialty tantalum forged fittings engineered for ultra-corrosive chemical processing, nuclear, and high-purity applications. Manufactured from pure Tantalum UNS R05200 and Tantalum-Tungsten alloys (Ta-10W, Ta-2.5W), our forged fittings deliver exceptional resistance to acids, halides, and aggressive chemical environments — with superior chemical resistance and purity.",

    grades: [
      "Tantalum UNS R05200",
      "Tantalum UNS R05400",
      "Tantalum-Tungsten Ta-10W",
      "Tantalum-Tungsten Ta-2.5W",
    ],

    supplyForms: [
      "Specialized High-Acid Chemical Process Hardware",
      "Forged Elbows (90°/45°)",
      "Forged Tees",
      "Forged Crosses",
      "Full Couplings",
      "Half Couplings",
      "Socket Weld Unions",
      "Threaded Unions",
      "Swage Nipples",
      "Hex Plugs & Bushings",
      "Weldolets, Sockolets, Threadolets",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM B521, ASTM B365, ASTM B708, ASME SB521, ASME B16.11, DIN 17753",
      nominalSize: '1/8" NB to 2" NB',
      pressureClass: "Class 2000, 3000, 6000",
      materialGrades: "Tantalum UNS R05200, R05400, Ta-10W, Ta-2.5W",
      endConnections: "Socket Weld (SW), Threaded (NPT/BSP)",
      threadTypes: "NPT, BSP, BSPT, Metric",
      manufacturingMethods: "Drop Forged, Machined, Annealed",
      surfaceFinish: "Pickled, Annealed, Passivated",
      qualityTesting:
        "PMI, Radiography, Hydrostatic, Ultrasonic, Dye Penetrant",
    },

    standardsCompliance: [
      "ASTM B521 — Tantalum and Tantalum Alloy Seamless and Welded Tubes",
      "ASTM B365 — Tantalum and Tantalum Alloy Rod and Wire",
      "ASTM B708 — Tantalum and Tantalum Alloy Plate, Sheet, and Strip",
      "ASME B16.11 — Forged Fittings, Socket-Welding and Threaded",
      "DIN 17753 — Wrought Nickel Alloys",
    ],

    manufacturingType: "Drop Forged / Machined",
    pressureRating: "Class 2000 / 3000 / 6000",
    temperatureRange: "-100°C to +300°C",
    tolerance: "Per ASME B16.11 / DIN 17753",
    certifications: "EN 10204 3.1 & 3.2 MTC",

    industryApplications: [
      "Highly corrosive chemical processing",
      "Pharmaceutical and high-purity applications",
      "Nuclear power generation",
      "Aerospace and defense components",
      "Medical implants and equipment",
      "Research and laboratory systems",
    ],

    forms: "Specialized High-Acid Chemical Process Hardware",
    application:
      "Highly corrosive chemical processing applications requiring exceptional chemical resistance and purity",
  },

  // ============================================
  // 9. TITANIUM FORGED FITTINGS
  // ============================================
  {
    id: 9,
    slug: "titanium-forged-fittings",
    image: hast,
    title: "Titanium Forged Fittings",
    shortDescription:
      "ASTM B381 Gr. 1, Gr. 2, Gr. 5 (Ti-6Al-4V), Gr. 7 High Strength-to-Weight Threadolets and Socket Weld Fittings.",
    materialGroup: "Titanium Core",
    standards: "ASTM B381, ASTM B348, ASME SB381, ASME B16.11, DIN 65328",

    overview:
      "Ultra-lightweight, high-strength titanium forged fittings with impervious corrosion immunity against seawater, wet chlorine, and organic chlorides. Manufactured from Grade 1, 2, 5 (Ti-6Al-4V), and 7 grades, our forged fittings deliver exceptional performance in aerospace, marine, and chemical processing applications.",

    grades: [
      "Grade 1",
      "Grade 2",
      "Grade 5 (Ti-6Al-4V)",
      "Grade 7",
      "Grade 12",
    ],

    supplyForms: [
      "High Strength-to-Weight Threadolets",
      "Socket Weld Fittings",
      "Forged Elbows (90°/45°)",
      "Forged Tees",
      "Forged Crosses",
      "Full Couplings",
      "Half Couplings",
      "Socket Weld Unions",
      "Threaded Unions",
      "Swage Nipples",
      "Hex Plugs & Bushings",
      "Weldolets, Sockolets",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM B381, ASTM B348, ASME SB381, ASME B16.11, DIN 65328",
      nominalSize: '1/8" NB to 4" NB',
      pressureClass: "Class 2000, 3000, 6000, 9000",
      materialGrades: "Grade 1, 2, 5 (Ti-6Al-4V), 7, 12",
      endConnections: "Socket Weld (SW), Threaded (NPT/BSP)",
      threadTypes: "NPT, BSP, BSPT, Metric",
      manufacturingMethods: "Drop Forged, Machined, Annealed",
      surfaceFinish: "Pickled, Passivated, Anodized",
      qualityTesting:
        "PMI, Radiography, Hydrostatic, Ultrasonic, Dye Penetrant",
    },

    standardsCompliance: [
      "ASTM B381 — Titanium and Titanium Alloy Forgings",
      "ASTM B348 — Titanium and Titanium Alloy Bars and Billets",
      "ASME SB381 — Titanium and Titanium Alloy Forgings",
      "ASME B16.11 — Forged Fittings, Socket-Welding and Threaded",
      "DIN 65328 — Aerospace Titanium Alloy Bolts",
    ],

    manufacturingType: "Drop Forged / Machined",
    pressureRating: "Class 2000 / 3000 / 6000 / 9000",
    temperatureRange: "-200°C to +400°C",
    tolerance: "Per ASME B16.11 / DIN 65328",
    certifications: "EN 10204 3.1 & 3.2 MTC",

    industryApplications: [
      "Aerospace and aircraft components",
      "Marine and offshore seawater systems",
      "Chemical processing and chlor-alkali plants",
      "Desalination plants",
      "Medical implants and equipment",
      "Cryogenic piping systems",
    ],

    forms: "High Strength-to-Weight Threadolets and Socket Weld Fittings",
    application: "Aerospace, marine, and chemical industries",
  },
];

export default forgedfitting;
