// src/data/productMaterials/buttweldFitting.js

// ============================================
// IMAGE IMPORTS
// ============================================
import carbon from "../../../public/images/stock/carbon-steel-butt-weld-fittings.jpg";
import inco from "../../../public/images/stock/buttweld-fitting.jpg";
import hast from "../../../public/images/stock/Hastelloy-Buttweld-Fittings.jpg";
import incol from "../../../public/images/stock/Inconel-Buttweld-Fittings.jpg";
import nic from "../../../public/images/stock/Nickel-Copper-Alloy-Buttweld-Fittings.jpg";
import nickelAlloy from "../../../public/images/stock/nickel-alloy-buttweld-fittings.jpg";
import duplex from "../../../public/images/stock/duplex-steel-buttweld-fittings.jpg";
import titani from "../../../public/images/stock/titanium-buttweld-fittings.jpg";
import alloySteel from "../../../public/images/stock/alloy-steel-buttweld-fittings.jpg";

// ============================================
// BUTTWELD FITTINGS — 9 Products (One Per Material Group)
// ============================================
const buttweldFitting = [
  // ============================================
  // 1. STAINLESS STEEL BUTTWELD FITTINGS
  // ============================================
  {
    id: 1,
    slug: "stainless-steel-buttweld-fittings",
    image: duplex,
    title: "Stainless Steel Buttweld Fittings",
    shortDescription:
      "304, 316L, 321, 310S, 347, 904L Seamless & Welded Elbows, Tees, Reducers for Critical Service.",
    materialGroup: "Stainless Steel",
    standards: "ASTM A403, ASTM A815, ASME B16.9, ASME B16.28, MSS SP-43",

    overview:
      "Complete range of stainless steel butt weld fittings conforming to ASTM A403 and ASME B16.9 standards. Manufactured from premium SS 304, 316, 316L, 321, 347, and 904L grades with full material traceability and intergranular corrosion resistance — engineered for chemical processing, power generation, and oil & gas facilities.",

    grades: [
      "SS 304",
      "SS 304L",
      "SS 316",
      "SS 316L",
      "SS 321",
      "SS 310S",
      "SS 347",
      "SS 904L",
    ],

    supplyForms: [
      "90° / 45° Long Radius Elbows",
      "Equal / Reducing Tees",
      "Concentric / Eccentric Reducers",
      "End Caps",
      "Stub Ends",
      "Return Bends",
    ],

    technicalSpecs: {
      standardSpecifications: "ASTM A403, ASME B16.9, ASME B16.28, MSS SP-43",
      nominalSize: '1/2" NB to 48" NB',
      wallThickness: "Sch 5S to Sch XXS",
      manufacturingMethods: "Seamless, Welded, Cold Formed, Hot Formed",
      surfaceFinish: "Pickled, Passivated, Sand Blasted, Mirror Polished",
      endConnections: "Butt Weld Ends (Beveled)",
      qualityTesting: "Radiography, PMI, Hydrostatic, Ultrasonic",
    },

    standardsCompliance: [
      "ASTM A403 / A403M — Wrought Austenitic Stainless Steel Piping Fittings",
      "ASME B16.9 — Factory-Made Wrought Buttwelding Fittings",
      "ASME B16.28 — Wrought Steel Buttwelding Short Radius Elbows and Returns",
      "MSS SP-43 — Wrought and Fabricated Butt-Welding Fittings for Low Pressure",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Seamless / Welded Cold Formed",
    pressureRating: "Per ASME B16.9 / ASME B31.3",
    tolerance: "Per ASME B16.9",
    certifications: "EN 10204 3.1 & 3.2 MTC, NACE MR0175 compliant",

    industryApplications: [
      "Chemical, petrochemical, and pharmaceutical process piping",
      "Offshore oil and gas platforms and subsea flowlines",
      "Power generation and desalination plant piping",
      "Food, beverage, and dairy sanitary systems",
      "Refinery and hydrocarbon processing",
      "High-purity semiconductor and cryogenic systems",
    ],

    forms: "Elbows, Tees, Reducers, Caps, Stub Ends",
    application:
      "Chemical processing, oil & gas, power generation, pharmaceutical",
  },

  // ============================================
  // 2. CARBON STEEL BUTTWELD FITTINGS
  // ============================================
  {
    id: 2,
    slug: "carbon-steel-buttweld-fittings",
    image: carbon,
    title: "Carbon Steel Buttweld Fittings",
    shortDescription:
      "ASTM A106 Gr B, A105, A333 Low Temp Carbon Steel Seamless Fittings for High-Pressure Service.",
    materialGroup: "Carbon",
    standards:
      "ASTM A234, ASTM A420, ASTM A106, ASTM A105, ASTM A333, ASME B16.9",

    overview:
      "Heavy-duty carbon steel butt weld fittings engineered for high-pressure, high-temperature, and low-temperature piping systems. Manufactured to ASTM A234, A420, A106, A105, and A333 standards, our fittings deliver superior strength and reliability in refineries, power plants, oil & gas pipelines, and heavy engineering applications.",

    grades: [
      "ASTM A106 Gr B",
      "ASTM A105",
      "ASTM A333 Gr 6",
      "ASTM A234 WPB",
      "ASTM A420 WPL6",
    ],

    supplyForms: [
      "90° / 45° Long Radius Elbows",
      "Equal / Reducing Tees",
      "Concentric / Eccentric Reducers",
      "End Caps",
      "Stub Ends",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM A234, ASTM A420, ASME B16.9, ASME B16.28, MSS SP-75",
      nominalSize: '1/2" NB to 48" NB',
      wallThickness: "Sch 10 to Sch XXS",
      manufacturingMethods: "Seamless, Welded, Cold Formed, Hot Formed",
      surfaceFinish: "Black, Varnished, Galvanized",
      endConnections: "Butt Weld Ends (Beveled)",
      qualityTesting: "Radiography, Hydrostatic, Ultrasonic, PMI",
    },

    standardsCompliance: [
      "ASTM A234 — Piping Fittings of Wrought Carbon Steel and Alloy Steel",
      "ASTM A420 — Piping Fittings for Low-Temperature Service",
      "ASTM A106 — Seamless Carbon Steel Pipe for High-Temperature Service",
      "ASTM A105 — Carbon Steel Forgings for Piping Applications",
      "ASTM A333 — Seamless and Welded Steel Pipe for Low-Temperature Service",
      "ASME B16.9 — Factory-Made Wrought Buttwelding Fittings",
      "MSS SP-75 — High-Test Wrought Butt-Welding Fittings",
    ],

    manufacturingType: "Seamless / Welded Cold Formed",
    pressureRating: "Per ASME B16.9 / ASME B31.3",
    tolerance: "Per ASME B16.9",
    certifications: "EN 10204 3.1 MTC, NACE MR0175 compliant",

    industryApplications: [
      "High-pressure oil and gas transmission pipelines",
      "Refinery and petrochemical process piping",
      "Steam generation and power plants",
      "Low-temperature and cryogenic service",
      "Heavy engineering and industrial infrastructure",
      "Water and gas distribution systems",
    ],

    forms: "Elbows, Tees, Reducers, Caps, Stub Ends",
    application:
      "High-pressure piping systems, refineries, power plants, heavy engineering",
  },

  // ============================================
  // 3. ALLOY STEEL BUTTWELD FITTINGS
  // ============================================
  {
    id: 3,
    slug: "alloy-steel-buttweld-fittings",
    image: alloySteel,
    title: "Alloy Steel Buttweld Fittings",
    shortDescription:
      "ASTM A335 P5, P9, P11, P22, P91 Chrome-Moly High-Temperature Forged Fittings for Steam Lines.",
    materialGroup: "Alloy Steel",
    standards: "ASTM A234, ASTM A335, ASME B16.9, ASME B16.28, ASME B31.1",

    overview:
      "Chromium-molybdenum creep-resistant alloy steel butt weld fittings engineered for supercritical boilers, heat recovery steam generators, and extreme-temperature steam lines. Manufactured to ASTM A335 and A234 standards, our fittings deliver reliable performance at temperatures up to 650°C.",

    grades: [
      "ASTM A335 P5",
      "ASTM A335 P9",
      "ASTM A335 P11",
      "ASTM A335 P22",
      "ASTM A335 P91",
      "ASTM A335 P92",
    ],

    supplyForms: [
      "90° / 45° Long Radius Elbows",
      "Equal / Reducing Tees",
      "Concentric / Eccentric Reducers",
      "End Caps",
    ],

    technicalSpecs: {
      standardSpecifications: "ASTM A234, ASTM A335, ASME B16.9, ASME B16.28",
      nominalSize: '1/2" NB to 36" NB',
      wallThickness: "Sch 10 to Sch XXS",
      manufacturingMethods: "Seamless, Hot Formed, Cold Formed",
      surfaceFinish: "Hot Finished, Pickled, Annealed",
      endConnections: "Butt Weld Ends (Beveled)",
      qualityTesting: "Radiography, Hydrostatic, Ultrasonic",
    },

    standardsCompliance: [
      "ASTM A335 — Seamless Ferritic Alloy-Steel Pipe for High-Temperature Service",
      "ASTM A234 — Piping Fittings of Wrought Carbon Steel and Alloy Steel",
      "ASME B16.9 — Factory-Made Wrought Buttwelding Fittings",
      "ASME B16.28 — Wrought Steel Buttwelding Short Radius Elbows and Returns",
      "ASME B31.1 — Power Piping Code",
    ],

    manufacturingType: "Seamless Hot Formed / Cold Formed",
    pressureRating: "Per ASME B31.1",
    tolerance: "Per ASME B16.9",
    certifications: "EN 10204 3.1 & 3.2 MTC",

    industryApplications: [
      "Supercritical boiler tubes",
      "Heat recovery steam generators (HRSG)",
      "Refinery hydrotreaters and hydrocrackers",
      "Power plant steam lines",
      "Petrochemical process piping",
      "High-temperature chemical reactors",
    ],

    forms: "Elbows, Tees, Reducers, Caps",
    application:
      "Superheater steam lines, power plants, refinery hydrotreaters",
  },

  // ============================================
  // 4. DUPLEX STEEL BUTTWELD FITTINGS
  // ============================================
  {
    id: 4,
    slug: "duplex-steel-buttweld-fittings",
    image: duplex,
    title: "Duplex Steel Buttweld Fittings",
    shortDescription:
      "UNS S31803 (2205), UNS S32205 Duplex Steel Seamless Elbows, Tees & Reducers for Chloride-Rich Service.",
    materialGroup: "Duplex",
    standards: "ASTM A815, ASME B16.9, ASME B16.28",

    overview:
      "High-strength dual-phase austenitic-ferritic stainless steel butt weld fittings providing exceptional resistance to chloride stress corrosion cracking. Manufactured to ASTM A815 standards, our fittings deliver superior strength and corrosion resistance for offshore oil & gas, chemical tankers, and desalination applications.",

    grades: ["UNS S31803", "UNS S32205", "2205", "LDX 2101"],

    supplyForms: [
      "90° / 45° Long Radius Elbows",
      "Equal / Reducing Tees",
      "Concentric / Eccentric Reducers",
      "End Caps",
    ],

    technicalSpecs: {
      standardSpecifications: "ASTM A815, ASME B16.9, ASME B16.28",
      nominalSize: '1/2" NB to 24" NB',
      wallThickness: "Sch 10S to Sch XXS",
      manufacturingMethods: "Seamless, Cold Formed, Hot Formed",
      surfaceFinish: "Solution Annealed, Pickled",
      endConnections: "Butt Weld Ends (Beveled)",
      qualityTesting: "Radiography, PMI, Hydrostatic",
    },

    standardsCompliance: [
      "ASTM A815 — Wrought Ferritic, Ferritic/Austenitic Stainless Steel Piping Fittings",
      "ASME B16.9 — Factory-Made Wrought Buttwelding Fittings",
      "ASME B16.28 — Wrought Steel Buttwelding Short Radius Elbows and Returns",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Seamless Cold Formed",
    pressureRating: "Per ASME B31.3",
    tolerance: "Per ASME B16.9",
    certifications: "EN 10204 3.1 & 3.2 MTC, NACE MR0175 compliant",

    industryApplications: [
      "Offshore oil and gas platforms",
      "Subsea flowlines and risers",
      "Desalination plants and seawater systems",
      "Chemical cargo tankers",
      "Pulp and paper digesters",
      "Pollution control scrubbers",
    ],

    forms: "Elbows, Tees, Reducers, Caps",
    application:
      "Offshore platforms, desalination, chemical processing, marine",
  },

  // ============================================
  // 5. SUPER DUPLEX BUTTWELD FITTINGS
  // ============================================
  {
    id: 5,
    slug: "super-duplex-buttweld-fittings",
    image: duplex,
    title: "Super Duplex Buttweld Fittings",
    shortDescription:
      "UNS S32750 (2507), UNS S32760 Super Duplex Seamless Fittings for Subsea Oilfields & Seawater Systems.",
    materialGroup: "Super Duplex",
    standards: "ASTM A815, ASME B16.9, ASME B16.28",

    overview:
      "Ultra-high performance super duplex butt weld fittings designed for aggressive subsea oilfields, critical seawater loops, and chemical plant service. Manufactured to ASTM A815 standards, our fittings offer superior strength and corrosion resistance in the most demanding environments.",

    grades: ["UNS S32750", "UNS S32760", "2507", "Zeron 100"],

    supplyForms: [
      "90° / 45° Long Radius Elbows",
      "Equal / Reducing Tees",
      "Concentric / Eccentric Reducers",
      "End Caps",
    ],

    technicalSpecs: {
      standardSpecifications: "ASTM A815, ASME B16.9, ASME B16.28",
      nominalSize: '1/2" NB to 16" NB',
      wallThickness: "Sch 10S to Sch XXS",
      manufacturingMethods: "Seamless Cold Formed",
      surfaceFinish: "Solution Annealed, Pickled",
      endConnections: "Butt Weld Ends (Beveled)",
      qualityTesting: "Radiography, PMI, Hydrostatic",
    },

    standardsCompliance: [
      "ASTM A815 — Wrought Ferritic, Ferritic/Austenitic Stainless Steel Piping Fittings",
      "ASME B16.9 — Factory-Made Wrought Buttwelding Fittings",
      "ASME B16.28 — Wrought Steel Buttwelding Short Radius Elbows and Returns",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Seamless Cold Formed",
    pressureRating: "Per ASME B31.3",
    tolerance: "Per ASME B16.9",
    certifications: "EN 10204 3.1 & 3.2 MTC, NACE MR0175 compliant",

    industryApplications: [
      "Subsea oilfields and deepwater equipment",
      "Seawater handling and desalination systems",
      "Chemical plant service and reactors",
      "Marine engineering and shipbuilding",
      "Offshore platforms and risers",
      "Pollution control scrubbers",
    ],

    forms: "Elbows, Tees, Reducers, Caps",
    application: "Subsea oilfields, seawater systems, chemical processing",
  },

  // ============================================
  // 6. NICKEL ALLOY BUTTWELD FITTINGS
  // ============================================
  {
    id: 6,
    slug: "nickel-alloy-buttweld-fittings",
    image: nickelAlloy,
    title: "Nickel Alloy Buttweld Fittings",
    shortDescription:
      "Nickel 200/201, Monel 400, Inconel 600/625/718, Incoloy 800/825 Seamless Fittings for Extreme Corrosion.",
    materialGroup: "Nickel",
    standards: "ASTM B366, ASME B16.9, ASME B16.28, MSS SP-43",

    overview:
      "Premium nickel alloy butt weld fittings engineered for extreme temperature, pressure, and corrosive environments. Manufactured to ASTM B366 standards, our fittings deliver exceptional oxidation resistance, high-temperature strength, and superior resistance to acids, alkalis, and seawater.",

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
      "90° / 45° Long Radius Elbows",
      "Equal / Reducing Tees",
      "Concentric / Eccentric Reducers",
      "End Caps",
      "Stub Ends",
    ],

    technicalSpecs: {
      standardSpecifications: "ASTM B366, ASME B16.9, ASME B16.28, MSS SP-43",
      nominalSize: '1/2" NB to 24" NB',
      wallThickness: "Sch 10S to Sch XXS",
      manufacturingMethods: "Seamless, Cold Formed, Hot Formed",
      surfaceFinish: "Solution Annealed, Pickled",
      endConnections: "Butt Weld Ends (Beveled)",
      qualityTesting: "Radiography, PMI, Hydrostatic, Ultrasonic",
    },

    standardsCompliance: [
      "ASTM B366 — Factory-Made Wrought Nickel and Nickel Alloy Fittings",
      "ASME B16.9 — Factory-Made Wrought Buttwelding Fittings",
      "ASME B16.28 — Wrought Steel Buttwelding Short Radius Elbows and Returns",
      "MSS SP-43 — Wrought and Fabricated Butt-Welding Fittings for Low Pressure",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Seamless Cold Formed / Hot Formed",
    pressureRating: "Per ASME B31.3",
    tolerance: "Per ASME B16.9",
    certifications: "EN 10204 3.1 & 3.2 MTC, NACE MR0175 compliant",

    industryApplications: [
      "Chemical processing and acid handling systems",
      "Aerospace and turbine engine components",
      "Nuclear power generation and heat exchangers",
      "Offshore oil & gas and subsea systems",
      "Marine engineering and desalination plants",
      "Heat treatment furnaces and industrial equipment",
    ],

    forms: "Elbows, Tees, Reducers, Caps, Stub Ends",
    application: "Chemical, aerospace, nuclear, offshore, marine industries",
  },

  // ============================================
  // 7. HIGH ALLOYS BUTTWELD FITTINGS
  // ============================================
  {
    id: 7,
    slug: "high-alloys-buttweld-fittings",
    image: hast,
    title: "High Alloys Buttweld Fittings",
    shortDescription:
      "Hastelloy C22, C276, Alloy 20, SMO 254 Seamless Fittings for Extreme Corrosive & Acid Handling Systems.",
    materialGroup: "High Alloys",
    standards: "ASTM B366, ASTM B462, ASME B16.9, ASME B16.28",

    overview:
      "Specialized high-alloy butt weld fittings engineered for wet chlorine, sulfuric acid, phosphoric acid, and aggressive halide services. Manufactured from Hastelloy C22, C276, Alloy 20, and SMO 254 grades, our fittings deliver exceptional performance in the most demanding corrosive environments across chemical processing, pollution control, and pharmaceutical industries.",

    grades: [
      "Hastelloy C22",
      "Hastelloy C276",
      "Hastelloy C2000",
      "Alloy 20",
      "Alloy 28",
      "SMO 254",
      "Alloy 59",
    ],

    supplyForms: [
      "90° / 45° Long Radius Elbows",
      "Equal / Reducing Tees",
      "Concentric / Eccentric Reducers",
      "End Caps",
    ],

    technicalSpecs: {
      standardSpecifications: "ASTM B366, ASTM B462, ASME B16.9, ASME B16.28",
      nominalSize: '1/2" NB to 16" NB',
      wallThickness: "Sch 10S to Sch XXS",
      manufacturingMethods: "Seamless, Cold Formed",
      surfaceFinish: "Solution Annealed, Pickled",
      endConnections: "Butt Weld Ends (Beveled)",
      qualityTesting: "Radiography, PMI, Hydrostatic",
    },

    standardsCompliance: [
      "ASTM B366 — Factory-Made Wrought Nickel and Nickel Alloy Fittings",
      "ASTM B462 — Wrought Nickel and Nickel Alloy Fittings",
      "ASME B16.9 — Factory-Made Wrought Buttwelding Fittings",
      "ASME B16.28 — Wrought Steel Buttwelding Short Radius Elbows and Returns",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Seamless Cold Formed",
    pressureRating: "Per ASME B31.3",
    tolerance: "Per ASME B16.9",
    certifications: "EN 10204 3.1 & 3.2 MTC",

    industryApplications: [
      "Wet chlorine and acid handling systems",
      "Phosphoric and sulfuric acid production",
      "Flue gas desulfurization (FGD) scrubbers",
      "Chemical reactors and process vessels",
      "Pharmaceutical and agrochemical processing",
      "Pollution control equipment",
    ],

    forms: "Elbows, Tees, Reducers, Caps",
    application: "Wet chlorine, acid handling, aggressive chemical processes",
  },

  // ============================================
  // 8. TITANIUM BUTTWELD FITTINGS
  // ============================================
  {
    id: 8,
    slug: "titanium-buttweld-fittings",
    image: titani,
    title: "Titanium Buttweld Fittings",
    shortDescription:
      "ASTM B363 WP Gr. 1, Gr. 2, Gr. 5 (Ti-6Al-4V), Gr. 7 High Strength-to-Weight Cryogenic Pipeline Fittings.",
    materialGroup: "Titanium",
    standards: "ASTM B363, ASME B16.9, ASME B16.28",

    overview:
      "Ultra-lightweight, high-strength titanium butt weld fittings with impervious corrosion immunity against seawater, wet chlorine, and organic chlorides. Manufactured to ASTM B363 standards, our fittings deliver exceptional performance in aerospace, marine, and chemical processing applications.",

    grades: [
      "Grade 1",
      "Grade 2",
      "Grade 5 (Ti-6Al-4V)",
      "Grade 7",
      "Grade 12",
    ],

    supplyForms: [
      "90° / 45° Long Radius Elbows",
      "Equal / Reducing Tees",
      "Concentric / Eccentric Reducers",
      "End Caps",
    ],

    technicalSpecs: {
      standardSpecifications: "ASTM B363, ASME B16.9, ASME B16.28",
      nominalSize: '1/2" NB to 24" NB',
      wallThickness: "Sch 10S to Sch XXS",
      manufacturingMethods: "Seamless, Cold Formed",
      surfaceFinish: "Pickled, Passivated, Bright Annealed",
      endConnections: "Butt Weld Ends (Beveled)",
      qualityTesting: "Radiography, PMI, Hydrostatic",
    },

    standardsCompliance: [
      "ASTM B363 — Wrought Titanium and Titanium Alloy Fittings",
      "ASME B16.9 — Factory-Made Wrought Buttwelding Fittings",
      "ASME B16.28 — Wrought Steel Buttwelding Short Radius Elbows and Returns",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "Seamless Cold Formed",
    pressureRating: "Per ASME B31.3",
    tolerance: "Per ASME B16.9",
    certifications: "EN 10204 3.1 & 3.2 MTC",

    industryApplications: [
      "Aerospace and aircraft components",
      "Marine and offshore seawater systems",
      "Chemical processing and chlor-alkali plants",
      "Desalination plants",
      "Medical implants and equipment",
      "Cryogenic piping systems",
    ],

    forms: "Elbows, Tees, Reducers, Caps",
    application: "Aerospace, marine, chemical processing, cryogenic",
  },

  // ============================================
  // 9. ALLOYS BUTTWELD FITTINGS
  // ============================================
  {
    id: 9,
    slug: "alloys-buttweld-fittings",
    image: nic,
    title: "Alloys Buttweld Fittings",
    shortDescription:
      "Zirconium 702, Tantalum, Copper-Nickel 70/30 & 90/10 Specialty Alloy Fittings for Ultra-Corrosive Service.",
    materialGroup: "Alloys",
    standards: "ASTM B523, B521, B466, B467, B658, ASME B16.9",

    overview:
      "Specialty alloy butt weld fittings including zirconium, tantalum, and copper-nickel grades engineered for ultra-corrosive chemical processing, nuclear, and marine applications. Manufactured to ASTM B523, B521, B466, B467, and B658 standards, our fittings deliver exceptional performance in the most demanding environments.",

    grades: [
      "Zirconium 702",
      "Tantalum",
      "Copper-Nickel 70/30",
      "Copper-Nickel 90/10",
    ],

    supplyForms: [
      "90° / 45° Long Radius Elbows",
      "Equal / Reducing Tees",
      "Concentric / Eccentric Reducers",
      "End Caps",
      "Stub Ends",
    ],

    technicalSpecs: {
      standardSpecifications: "ASTM B523, B521, B466, B467, B658, ASME B16.9",
      nominalSize: '1/2" NB to 12" NB',
      wallThickness: "Sch 10S to Sch XXS",
      manufacturingMethods: "Seamless, Cold Formed",
      surfaceFinish: "Pickled, Annealed",
      endConnections: "Butt Weld Ends (Beveled)",
      qualityTesting: "Radiography, PMI, Hydrostatic",
    },

    standardsCompliance: [
      "ASTM B523 — Seamless and Welded Zirconium and Zirconium Alloy Tubes",
      "ASTM B521 — Tantalum and Tantalum Alloy Seamless and Welded Tubes",
      "ASTM B466 — Seamless Copper-Nickel Pipe and Tube",
      "ASTM B467 — Welded Copper-Nickel Pipe",
      "ASTM B658 — Zirconium and Zirconium Alloy Seamless and Welded Pipe",
      "ASME B16.9 — Factory-Made Wrought Buttwelding Fittings",
    ],

    manufacturingType: "Seamless Cold Formed",
    pressureRating: "Per ASME B31.3",
    tolerance: "Per ASME B16.9",
    certifications: "EN 10204 3.1 & 3.2 MTC",

    industryApplications: [
      "Chemical processing and acid handling",
      "Nuclear power generation",
      "Marine engineering and shipbuilding",
      "Desalination and heat exchangers",
      "Pharmaceutical and food processing",
      "Pollution control equipment",
    ],

    forms: "Elbows, Tees, Reducers, Caps, Stub Ends",
    application: "Chemical processing, nuclear, marine, desalination",
  },
];

export default buttweldFitting;
