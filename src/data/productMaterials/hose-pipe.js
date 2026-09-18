// src/data/productMaterials/hosepipe.js

// ============================================
// IMAGE IMPORTS
// ============================================
import annul from "../../../public/images/stock/annular-corrugated-hose.jpg";
import cor from "../../../public/images/stock/corrugated-ss-hose-pipe.jpg";
import high from "../../../public/images/stock/high-pressure-ss-hose-assembly.jpg";
import ptfe from "../../../public/images/stock/ptfe-lined-ss-hose-pipe.jpg";
import braid from "../../../public/images/stock/ss-braided-hose-pipe.jpg";
import end from "../../../public/images/stock/ss-hose-with-end-fittings.jpg";
import strip from "../../../public/images/stock/strip-wound-hose-pipe.jpg";

// ============================================
// HOSE PIPES — 9 Products (One Per Material)
// ============================================
const hosepipe = [
  // ============================================
  // 1. STAINLESS STEEL HOSE PIPE
  // ============================================
  {
    id: 1,
    slug: "stainless-steel-hose-pipe",
    image: cor,
    title: "Stainless Steel Hose Pipe",
    shortDescription:
      "SS 304, 316L, 321 Corrugated Flexible Hose with Single/Double Wire Braid for High-Pressure & Thermal Service.",
    materialGroup: "Stainless Steel",
    standards: "SS 304, 316L, 321, ASTM A240, EN 10088",

    overview:
      "Premium stainless steel corrugated flexible hoses with single or double wire braid construction, engineered for high-pressure, high-temperature, and vibration-intensive applications. Manufactured from SS 304, 316L, and 321 grades, our hoses deliver superior flexibility, fatigue resistance, and corrosion immunity across chemical processing, refineries, and power generation facilities.",

    grades: ["SS 304", "SS 304L", "SS 316", "SS 316L", "SS 321", "SS 316Ti"],

    supplyForms: [
      "Annular Corrugated Hose",
      "Helical Corrugated Hose",
      "Single Wire Braid",
      "Double Wire Braid",
      "With End Fittings",
    ],

    technicalSpecs: {
      standardSpecifications: "ASTM A240, EN 10088, BS 6501, ISO 10380",
      nominalSize: '1/4" NB to 12" NB',
      outsideDiameter: "6.0 mm to 300 mm",
      wallThickness: "0.3 mm to 2.0 mm",
      pressureRating: "Up to 250 Bar (Double Braid)",
      temperatureRange: "-196°C to +600°C",
      manufacturingMethods: "Hydroformed, Mechanically Formed Corrugations",
      surfaceFinish: "Bright Annealed, Pickled, Passivated",
      endConnections: "Fixed/Swivel Flanges, Camlock, NPT, BSP, Weld Stub",
      qualityTesting: "Hydrostatic, Pneumatic, Helium Leak Test, PMI",
    },

    standardsCompliance: [
      "BS 6501 — Corrugated Metallic Hose Assemblies",
      "ISO 10380 — Corrugated Metal Hoses and Hose Assemblies",
      "ASTM A240 — Chromium and Chromium-Nickel Stainless Steel Plate, Sheet, and Strip",
      "EN 10088 — Stainless Steels Technical Delivery Conditions",
    ],

    manufacturingType: "Hydroformed / Mechanically Formed",
    pressureRating: "Up to 250 Bar (Double Braid)",
    tolerance: "Per BS 6501 / ISO 10380",
    certifications: "EN 10204 3.1 MTC, PMI Verified",

    industryApplications: [
      "Vibration absorption in pumps, compressors, and turbines",
      "Thermal expansion compensation in steam and hot water lines",
      "High-pressure hydraulic and pneumatic fluid transfer",
      "Chemical processing and pharmaceutical fluid handling",
      "Oil & gas refineries and petrochemical plants",
      "Food & beverage and dairy sanitary transfer",
    ],

    forms: "Corrugated Flexible, Wire Braided",
    application:
      "Vibration absorption, thermal expansion, high-pressure fluid transfer",
  },

  // ============================================
  // 2. NICKEL ALLOY HOSE PIPE
  // ============================================
  {
    id: 2,
    slug: "nickel-alloy-hose-pipe",
    image: braid,
    title: "Nickel Alloy Hose Pipe",
    shortDescription:
      "Nickel 200/201, Monel 400, Inconel 600/625, Incoloy 800/825 Corrugated Flexible Hose for Chemical & Marine Service.",
    materialGroup: "Nickel",
    standards: "ASTM B161, B163, B165, B167, B407, B423, B444",

    overview:
      "Premium nickel alloy corrugated flexible hoses engineered for extreme temperature, pressure, and corrosive environments. Manufactured from Nickel 200/201, Monel 400, Inconel 600/625, and Incoloy 800/825 grades, our hoses deliver exceptional oxidation resistance, high-temperature strength, and superior resistance to acids, alkalis, and seawater across chemical processing, aerospace, and marine industries.",

    grades: [
      "Nickel 200",
      "Nickel 201",
      "Monel 400",
      "Monel K500",
      "Inconel 600",
      "Inconel 625",
      "Incoloy 800",
      "Incoloy 825",
    ],

    supplyForms: [
      "Corrugated Flexible Hose",
      "Single Wire Braid",
      "Double Wire Braid",
      "With End Fittings",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM B161, B163, B165, B167, B407, B423, B444, ISO 10380",
      nominalSize: '1/4" NB to 8" NB',
      outsideDiameter: "6.0 mm to 200 mm",
      wallThickness: "0.3 mm to 1.5 mm",
      pressureRating: "Up to 200 Bar (Double Braid)",
      temperatureRange: "-200°C to +800°C",
      manufacturingMethods: "Hydroformed, Mechanically Formed",
      surfaceFinish: "Solution Annealed, Pickled",
      endConnections: "Flanges, Camlock, NPT, BSP, Weld Stub",
      qualityTesting: "Hydrostatic, Helium Leak Test, PMI",
    },

    standardsCompliance: [
      "ASTM B161 — Nickel Seamless Pipe and Tube",
      "ASTM B163 — Seamless Nickel and Nickel Alloy Condenser and Heat-Exchanger Tubes",
      "ASTM B165 — Nickel-Copper Alloy (UNS N04400) Seamless Pipe and Tube",
      "ASTM B167 — Nickel-Chromium-Iron Alloys Seamless Pipe and Tube",
      "ASTM B407 — Nickel-Iron-Chromium Alloy Seamless Pipe and Tube",
      "ISO 10380 — Corrugated Metal Hoses and Hose Assemblies",
    ],

    manufacturingType: "Hydroformed / Mechanically Formed",
    pressureRating: "Up to 200 Bar",
    tolerance: "Per ASTM / ISO 10380",
    certifications: "EN 10204 3.1 & 3.2 MTC, NACE MR0175 compliant",

    industryApplications: [
      "Chemical processing and acid handling systems",
      "Aerospace and turbine engine fuel lines",
      "Nuclear power generation and heat exchangers",
      "Offshore oil & gas and subsea systems",
      "Marine engineering and desalination plants",
      "Heat treatment furnaces and industrial equipment",
    ],

    forms: "Corrugated Flexible, Wire Braided",
    application: "Chemical processing, marine engineering, offshore platforms",
  },

  // ============================================
  // 3. HIGH ALLOY HOSE PIPE
  // ============================================
  {
    id: 3,
    slug: "high-alloy-hose-pipe",
    image: high,
    title: "High Alloy Hose Pipe",
    shortDescription:
      "Hastelloy C276, C22, Alloy 20, SMO 254 Corrugated Hose for Extreme Corrosive & Acid Handling Systems.",
    materialGroup: "High Alloys",
    standards: "ASTM B622, B619, B626, B729, B775, B829",

    overview:
      "Specialized high-alloy corrugated hoses engineered for wet chlorine, sulfuric acid, phosphoric acid, and aggressive halide services. Manufactured from Hastelloy C276, C22, Alloy 20, and SMO 254 grades, our hoses deliver exceptional performance in the most demanding corrosive environments across chemical processing, pollution control, and pharmaceutical industries.",

    grades: [
      "Hastelloy C276",
      "Hastelloy C22",
      "Hastelloy C2000",
      "Alloy 20",
      "Alloy 28",
      "SMO 254",
    ],

    supplyForms: [
      "Corrugated Flexible Hose",
      "Single Wire Braid",
      "Double Wire Braid",
      "PTFE Lined",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM B622, B619, B626, B729, B775, B829, ISO 10380",
      nominalSize: '1/4" NB to 6" NB',
      outsideDiameter: "6.0 mm to 150 mm",
      wallThickness: "0.3 mm to 1.2 mm",
      pressureRating: "Up to 150 Bar",
      temperatureRange: "-100°C to +700°C",
      manufacturingMethods: "Hydroformed, Mechanically Formed",
      surfaceFinish: "Solution Annealed, Pickled",
      endConnections: "Flanges, Camlock, NPT, Weld Stub",
      qualityTesting: "Hydrostatic, Helium Leak Test, PMI",
    },

    standardsCompliance: [
      "ASTM B622 — Seamless Nickel and Nickel-Cobalt Alloy Pipe and Tube",
      "ASTM B619 — Welded Nickel and Nickel-Cobalt Alloy Pipe",
      "ASTM B626 — Welded Nickel and Nickel-Cobalt Alloy Tube",
      "ASTM B729 — Seamless UNS N08020, N08026, and N08024 Alloy Pipe and Tube",
      "ISO 10380 — Corrugated Metal Hoses and Hose Assemblies",
    ],

    manufacturingType: "Hydroformed / Mechanically Formed",
    pressureRating: "Up to 150 Bar",
    tolerance: "Per ASTM / ISO 10380",
    certifications: "EN 10204 3.1 & 3.2 MTC",

    industryApplications: [
      "Wet chlorine and acid handling systems",
      "Phosphoric and sulfuric acid production",
      "Flue gas desulfurization (FGD) scrubbers",
      "Chemical reactors and process vessels",
      "Pharmaceutical and agrochemical processing",
      "Pollution control equipment",
    ],

    forms: "Corrugated Flexible, Wire Braided",
    application: "Wet chlorine, acid handling, aggressive chemical processes",
  },

  // ============================================
  // 4. DUPLEX STEEL HOSE PIPE
  // ============================================
  {
    id: 4,
    slug: "duplex-steel-hose-pipe",
    image: annul,
    title: "Duplex Steel Hose Pipe",
    shortDescription:
      "Duplex UNS S31803 / S32205 (2205) Corrugated Flexible Hose for Chloride-Rich Offshore & Desalination Systems.",
    materialGroup: "Duplex",
    standards: "ASTM A790, A789, ASME B36.19M",

    overview:
      "High-strength duplex steel corrugated flexible hoses providing exceptional resistance to chloride stress corrosion cracking. Manufactured from UNS S31803 and S32205 (2205) grades, our hoses deliver superior strength and corrosion resistance for offshore oil & gas, desalination, and chemical processing applications.",

    grades: ["UNS S31803", "UNS S32205", "2205", "LDX 2101"],

    supplyForms: [
      "Corrugated Flexible Hose",
      "Single Wire Braid",
      "Double Wire Braid",
    ],

    technicalSpecs: {
      standardSpecifications: "ASTM A790, A789, ASME B36.19M, ISO 10380",
      nominalSize: '1/4" NB to 8" NB',
      outsideDiameter: "6.0 mm to 200 mm",
      wallThickness: "0.3 mm to 1.5 mm",
      pressureRating: "Up to 200 Bar",
      temperatureRange: "-50°C to +300°C",
      manufacturingMethods: "Hydroformed, Mechanically Formed",
      surfaceFinish: "Solution Annealed, Pickled",
      endConnections: "Flanges, Camlock, NPT, Weld Stub",
      qualityTesting: "Hydrostatic, Helium Leak Test, PMI",
    },

    standardsCompliance: [
      "ASTM A790 — Seamless and Welded Ferritic/Austenitic Stainless Steel Pipe",
      "ASTM A789 — Seamless and Welded Ferritic/Austenitic Stainless Steel Tubing",
      "ASME B36.19M — Stainless Steel Pipe Dimensions",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
      "ISO 10380 — Corrugated Metal Hoses and Hose Assemblies",
    ],

    manufacturingType: "Hydroformed / Mechanically Formed",
    pressureRating: "Up to 200 Bar",
    tolerance: "Per ASTM / ISO 10380",
    certifications: "EN 10204 3.1 & 3.2 MTC, NACE MR0175 compliant",

    industryApplications: [
      "Offshore oil and gas platforms",
      "Subsea flowlines and risers",
      "Desalination plants and seawater systems",
      "Chemical cargo tankers",
      "Pulp and paper digesters",
      "Pollution control scrubbers",
    ],

    forms: "Corrugated Flexible, Wire Braided",
    application: "Offshore platforms, desalination plants, chemical processing",
  },

  // ============================================
  // 5. SUPER DUPLEX HOSE PIPE
  // ============================================
  {
    id: 5,
    slug: "super-duplex-hose-pipe",
    image: end,
    title: "Super Duplex Hose Pipe",
    shortDescription:
      "Super Duplex UNS S32750 (2507) / S32760 Corrugated Hose for Subsea Oilfields & Seawater Applications.",
    materialGroup: "Super Duplex",
    standards: "ASTM A790, A789, ASME B36.19M",

    overview:
      "Ultra-high performance super duplex corrugated hoses designed for aggressive subsea oilfields, critical seawater loops, and chemical plant service. Manufactured from UNS S32750 (2507) and S32760 grades, our hoses offer superior strength and corrosion resistance in the most demanding environments.",

    grades: ["UNS S32750", "UNS S32760", "2507", "Zeron 100"],

    supplyForms: [
      "Corrugated Flexible Hose",
      "Single Wire Braid",
      "Double Wire Braid",
    ],

    technicalSpecs: {
      standardSpecifications: "ASTM A790, A789, ASME B36.19M, ISO 10380",
      nominalSize: '1/4" NB to 6" NB',
      outsideDiameter: "6.0 mm to 150 mm",
      wallThickness: "0.3 mm to 1.2 mm",
      pressureRating: "Up to 250 Bar",
      temperatureRange: "-50°C to +300°C",
      manufacturingMethods: "Hydroformed, Mechanically Formed",
      surfaceFinish: "Solution Annealed, Pickled",
      endConnections: "Flanges, Camlock, NPT, Weld Stub",
      qualityTesting: "Hydrostatic, Helium Leak Test, PMI",
    },

    standardsCompliance: [
      "ASTM A790 — Seamless and Welded Ferritic/Austenitic Stainless Steel Pipe",
      "ASTM A789 — Seamless and Welded Ferritic/Austenitic Stainless Steel Tubing",
      "ASME B36.19M — Stainless Steel Pipe Dimensions",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
      "ISO 10380 — Corrugated Metal Hoses and Hose Assemblies",
    ],

    manufacturingType: "Hydroformed / Mechanically Formed",
    pressureRating: "Up to 250 Bar",
    tolerance: "Per ASTM / ISO 10380",
    certifications: "EN 10204 3.1 & 3.2 MTC, NACE MR0175 compliant",

    industryApplications: [
      "Subsea oilfields and deepwater equipment",
      "Seawater handling and desalination systems",
      "Chemical plant service and reactors",
      "Marine engineering and shipbuilding",
      "Offshore platforms and risers",
      "Pollution control scrubbers",
    ],

    forms: "Corrugated Flexible, Wire Braided",
    application: "Subsea oilfields, desalination plants, seawater systems",
  },

  // ============================================
  // 6. TITANIUM HOSE PIPE
  // ============================================
  {
    id: 6,
    slug: "titanium-hose-pipe",
    image: strip,
    title: "Titanium Hose Pipe",
    shortDescription:
      "ASTM B338 Grade 1, 2, 5 (Ti-6Al-4V), 7 Corrugated Flexible Hose for Aerospace, Marine & Chemical Processing.",
    materialGroup: "Titanium",
    standards: "ASTM B338, ASTM B861, ASTM B862",

    overview:
      "Ultra-lightweight, high-strength titanium corrugated flexible hoses with impervious corrosion immunity against seawater, wet chlorine, and organic chlorides. Manufactured from Grade 1, 2, 5 (Ti-6Al-4V), and 7 grades, our hoses deliver exceptional performance in aerospace, marine, and chemical processing applications.",

    grades: [
      "Grade 1",
      "Grade 2",
      "Grade 5 (Ti-6Al-4V)",
      "Grade 7",
      "Grade 12",
    ],

    supplyForms: [
      "Corrugated Flexible Hose",
      "Single Wire Braid",
      "Double Wire Braid",
      "PTFE Lined",
    ],

    technicalSpecs: {
      standardSpecifications: "ASTM B338, B861, B862, ISO 10380",
      nominalSize: '1/4" NB to 6" NB',
      outsideDiameter: "6.0 mm to 150 mm",
      wallThickness: "0.3 mm to 1.2 mm",
      pressureRating: "Up to 150 Bar",
      temperatureRange: "-200°C to +400°C",
      manufacturingMethods: "Hydroformed, Mechanically Formed",
      surfaceFinish: "Pickled, Bright Annealed",
      endConnections: "Flanges, Camlock, NPT, Weld Stub",
      qualityTesting: "Hydrostatic, Helium Leak Test, PMI",
    },

    standardsCompliance: [
      "ASTM B338 — Seamless and Welded Titanium and Titanium Alloy Tubes",
      "ASTM B861 — Titanium and Titanium Alloy Seamless Pipe",
      "ASTM B862 — Titanium and Titanium Alloy Welded Pipe",
      "ISO 10380 — Corrugated Metal Hoses and Hose Assemblies",
    ],

    manufacturingType: "Hydroformed / Mechanically Formed",
    pressureRating: "Up to 150 Bar",
    tolerance: "Per ASTM / ISO 10380",
    certifications: "EN 10204 3.1 & 3.2 MTC",

    industryApplications: [
      "Aerospace and aircraft fuel lines",
      "Marine and seawater systems",
      "Chemical processing and chlor-alkali cells",
      "Medical equipment and implants",
      "Desalination plants",
      "Heat exchangers and condensers",
    ],

    forms: "Corrugated Flexible, Wire Braided",
    application: "Aerospace, marine, chemical processing, medical equipment",
  },

  // ============================================
  // 7. ALLOY HOSE PIPE
  // ============================================
  {
    id: 7,
    slug: "alloy-hose-pipe",
    image: ptfe,
    title: "Alloy Hose Pipe",
    shortDescription:
      "Zirconium 702, Tantalum, Copper-Nickel 70/30 & 90/10 Specialty Alloy Hose for Ultra-Corrosive Service.",
    materialGroup: "Alloys",
    standards: "ASTM B523, B521, B466, B467, B658",

    overview:
      "Specialty alloy corrugated hoses including zirconium, tantalum, and copper-nickel grades engineered for ultra-corrosive chemical processing, nuclear, and marine applications. Manufactured to ASTM B523, B521, B466, B467, and B658 standards, our hoses deliver exceptional performance in the most demanding environments.",

    grades: [
      "Zirconium 702",
      "Tantalum",
      "Copper-Nickel 70/30",
      "Copper-Nickel 90/10",
    ],

    supplyForms: [
      "Corrugated Flexible Hose",
      "PTFE Lined",
      "Single Wire Braid",
    ],

    technicalSpecs: {
      standardSpecifications: "ASTM B523, B521, B466, B467, B658, ISO 10380",
      nominalSize: '1/4" NB to 4" NB',
      outsideDiameter: "6.0 mm to 100 mm",
      wallThickness: "0.3 mm to 1.0 mm",
      pressureRating: "Up to 100 Bar",
      temperatureRange: "-100°C to +400°C",
      manufacturingMethods: "Hydroformed, Mechanically Formed",
      surfaceFinish: "Pickled, Annealed",
      endConnections: "Flanges, Camlock, NPT, Weld Stub",
      qualityTesting: "Hydrostatic, Helium Leak Test, PMI",
    },

    standardsCompliance: [
      "ASTM B523 — Seamless and Welded Zirconium and Zirconium Alloy Tubes",
      "ASTM B521 — Tantalum and Tantalum Alloy Seamless and Welded Tubes",
      "ASTM B466 — Seamless Copper-Nickel Pipe and Tube",
      "ASTM B467 — Welded Copper-Nickel Pipe",
      "ASTM B658 — Zirconium and Zirconium Alloy Seamless and Welded Pipe",
      "ISO 10380 — Corrugated Metal Hoses and Hose Assemblies",
    ],

    manufacturingType: "Hydroformed / Mechanically Formed",
    pressureRating: "Up to 100 Bar",
    tolerance: "Per ASTM / ISO 10380",
    certifications: "EN 10204 3.1 & 3.2 MTC",

    industryApplications: [
      "Chemical processing and acid handling",
      "Nuclear power generation",
      "Marine engineering and shipbuilding",
      "Desalination and heat exchangers",
      "Pharmaceutical and food processing",
      "Pollution control equipment",
    ],

    forms: "Corrugated Flexible, Wire Braided",
    application: "Chemical processing, nuclear, marine",
  },

  // ============================================
  // 8. CARBON STEEL HOSE PIPE
  // ============================================
  {
    id: 8,
    slug: "carbon-steel-hose-pipe",
    image: annul,
    title: "Carbon Steel Hose Pipe",
    shortDescription:
      "ASTM A106, A105, A333 Gr 6 Corrugated Flexible Carbon Steel Hose for Steam, Oil & Industrial Fluid Transfer.",
    materialGroup: "Carbon",
    standards: "ASTM A106, A105, A333 Gr 6",

    overview:
      "Heavy-duty carbon steel corrugated flexible hoses engineered for steam, oil, and industrial fluid transfer. Manufactured to ASTM A106, A105, and A333 Gr 6 standards, our hoses deliver reliable performance in high-pressure steam lines, oil & gas pipelines, and industrial fluid transfer applications.",

    grades: ["ASTM A106 Gr A/B/C", "ASTM A105", "ASTM A333 Gr 1/6"],

    supplyForms: [
      "Corrugated Flexible Hose",
      "Strip Wound Hose",
      "With End Fittings",
    ],

    technicalSpecs: {
      standardSpecifications: "ASTM A106, A105, A333 Gr 6, ISO 10380",
      nominalSize: '1/2" NB to 12" NB',
      outsideDiameter: "12.7 mm to 300 mm",
      wallThickness: "0.5 mm to 2.0 mm",
      pressureRating: "Up to 100 Bar",
      temperatureRange: "-29°C to +425°C",
      manufacturingMethods: "Hydroformed, Strip Wound",
      surfaceFinish: "Black, Varnished, Galvanized",
      endConnections: "Flanges, Camlock, NPT, Weld Stub",
      qualityTesting: "Hydrostatic, Radiography, Ultrasonic",
    },

    standardsCompliance: [
      "ASTM A106 — Seamless Carbon Steel Pipe for High-Temperature Service",
      "ASTM A105 — Carbon Steel Forgings for Piping Applications",
      "ASTM A333 — Seamless and Welded Steel Pipe for Low-Temperature Service",
      "ISO 10380 — Corrugated Metal Hoses and Hose Assemblies",
    ],

    manufacturingType: "Hydroformed / Strip Wound",
    pressureRating: "Up to 100 Bar",
    tolerance: "Per ASTM / ISO 10380",
    certifications: "EN 10204 3.1 MTC",

    industryApplications: [
      "Steam lines and boiler connections",
      "Oil and gas transmission pipelines",
      "Refinery and petrochemical piping",
      "Industrial fluid transfer systems",
      "Water and gas distribution networks",
      "Structural and industrial applications",
    ],

    forms: "Corrugated Flexible, Strip Wound",
    application: "Steam lines, oil & gas pipelines, industrial fluid transfer",
  },

  // ============================================
  // 9. ALLOY STEEL HOSE PIPE
  // ============================================
  {
    id: 9,
    slug: "alloy-steel-hose-pipe",
    image: high,
    title: "Alloy Steel Hose Pipe",
    shortDescription:
      "ASTM A335 P5, P9, P11, P22, P91 Chrome-Moly Corrugated Hose for High-Temperature Superheater Steam Lines.",
    materialGroup: "Alloy Steel",
    standards: "ASTM A335, ASTM A213, ASME B36.10M",

    overview:
      "Chromium-molybdenum creep-resistant alloy steel corrugated hoses engineered for supercritical boilers, heat recovery steam generators, and extreme-temperature steam lines. Manufactured to ASTM A335 and A213 standards, our hoses deliver reliable performance at temperatures up to 650°C.",

    grades: ["ASTM A335 P5", "P9", "P11", "P22", "P91", "P92"],

    supplyForms: [
      "Corrugated Flexible Hose",
      "Strip Wound Hose",
      "With End Fittings",
    ],

    technicalSpecs: {
      standardSpecifications: "ASTM A335, A213, ASME B36.10M, ISO 10380",
      nominalSize: '1/2" NB to 10" NB',
      outsideDiameter: "12.7 mm to 250 mm",
      wallThickness: "0.5 mm to 2.0 mm",
      pressureRating: "Up to 150 Bar",
      temperatureRange: "-29°C to +650°C",
      manufacturingMethods: "Hydroformed, Strip Wound",
      surfaceFinish: "Hot Finished, Pickled, Annealed",
      endConnections: "Flanges, Camlock, NPT, Weld Stub",
      qualityTesting: "Hydrostatic, Radiography, Ultrasonic",
    },

    standardsCompliance: [
      "ASTM A335 — Seamless Ferritic Alloy-Steel Pipe for High-Temperature Service",
      "ASTM A213 — Seamless Ferritic and Austenitic Alloy-Steel Boiler, Superheater, and Heat-Exchanger Tubes",
      "ASME B36.10M — Welded and Seamless Wrought Steel Pipe Dimensions",
      "ASME B31.1 — Power Piping Code",
      "ISO 10380 — Corrugated Metal Hoses and Hose Assemblies",
    ],

    manufacturingType: "Hydroformed / Strip Wound",
    pressureRating: "Up to 150 Bar",
    tolerance: "Per ASTM / ISO 10380",
    certifications: "EN 10204 3.1 & 3.2 MTC",

    industryApplications: [
      "Supercritical boiler tubes",
      "Heat recovery steam generators (HRSG)",
      "Refinery hydrotreaters and hydrocrackers",
      "Power plant steam lines",
      "Petrochemical process piping",
      "High-temperature chemical reactors",
    ],

    forms: "Corrugated Flexible, Strip Wound",
    application:
      "Superheater steam lines, power plants, refinery hydrotreaters",
  },
];

export default hosepipe;
