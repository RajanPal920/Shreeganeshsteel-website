// src/data/productMaterials/perforatedsheet.js

// ============================================
// IMAGE IMPORTS
// ============================================
import stain from "../../../public/images/stock/stainless-duplex-steel-perforated-sheets.jpg";
import car from "../../../public/images/stock/carbon-alloy-steel-perforated-sheets.jpg";
import nik from "../../../public/images/stock/nickel-copper-alloy-perforated-sheets.jpg";
import alu from "../../../public/images/stock/aluminum-perforated-sheets.jpg";
import gal from "../../../public/images/stock/galvanized-perforated-sheets.jpg";

// ============================================
// PERFORATED SHEETS — 9 Products
// ============================================
const perforatedsheet = [
  // ============================================
  // 1. STAINLESS & DUPLEX STEEL PERFORATED SHEETS
  // ============================================
  {
    id: 1,
    slug: "stainless-duplex-steel-perforated-sheets",
    image: stain,
    title: "Stainless & Duplex Steel Perforated Sheets",
    shortDescription:
      "SS 304, 304L, 316, 316L, 321, 347, 904L / Duplex UNS S31803, S32205, Super Duplex S32750.",
    materialGroup: "Stainless & Duplex",
    standards:
      "ASTM A240, ASME SA240, ASTM A480, EN 10088, DIN 17440, ISO 9444",

    overview:
      "Premium stainless and duplex steel perforated sheets engineered for filtration, architectural, and industrial applications. Manufactured from SS 304, 304L, 316, 316L, 321, 347, 904L, and Duplex UNS S31803/S32205, Super Duplex S32750 grades in precision CNC-punched and laser-cut configurations, our perforated sheets deliver superior corrosion resistance, excellent formability, and reliable performance in chemical, food, and architectural environments.",

    grades: [
      "SS 304",
      "SS 304L",
      "SS 316",
      "SS 316L",
      "SS 321",
      "SS 347",
      "SS 904L",
      "Duplex UNS S31803",
      "Duplex UNS S32205 (2205)",
      "Super Duplex UNS S32750 (2507)",
    ],

    supplyForms: [
      "Precision CNC-Punched Sheets",
      "Laser-Cut Perforated Sheets",
      "Round Hole Perforated Sheets",
      "Square Hole Perforated Sheets",
      "Slotted Hole Perforated Sheets",
      "Decorative Perforated Sheets",
      "Micro-Perforated Sheets",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM A240, ASME SA240, ASTM A480, EN 10088, DIN 17440, ISO 9444",
      sheetThickness: "0.5 mm to 12 mm",
      holeDiameter: "0.5 mm to 100 mm",
      holePatterns: "Round, Square, Slotted, Hexagonal, Decorative, Custom",
      openArea: "10% to 80%",
      sheetSize:
        "1000 x 2000 mm, 1250 x 2500 mm, 1500 x 3000 mm (Custom Sizes Available)",
      materialGrades:
        "SS 304/304L/316/316L/321/347/904L, Duplex 2205, Super Duplex 2507",
      surfaceFinish: "Pickled, Passivated, Polished, 2B, BA, No.4, Mirror",
      manufacturingMethods:
        "CNC Punching, Laser Cutting, Water Jet Cutting, Plasma Cutting",
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

    manufacturingType: "CNC Punched / Laser Cut / Water Jet Cut",
    pressureRating: "N/A (Structural)",
    temperatureRange: "-196°C to +800°C",
    tolerance: "Per ASTM A480 / EN 10088",
    certifications: "EN 10204 3.1 & 3.2 MTC, NACE MR0175 compliant",

    industryApplications: [
      "Filtration and separation equipment",
      "Architectural facades and cladding",
      "Acoustic panels and ventilation systems",
      "Industrial screening and sieving",
      "Food and beverage processing equipment",
      "Chemical and petrochemical processing",
    ],

    forms: "Precision CNC-Punched and Laser-Cut Sheets",
    application:
      "Filtration, architectural facades, acoustic panels, ventilation systems, and industrial screening",
  },

  // ============================================
  // 2. CARBON & ALLOY STEEL PERFORATED SHEETS
  // ============================================
  {
    id: 2,
    slug: "carbon-alloy-steel-perforated-sheets",
    image: car,
    title: "Carbon & Alloy Steel Perforated Sheets",
    shortDescription:
      "Mild Steel C45, Structural IS 2062, Low Carbon Forged runs, Chrome-Moly High Tensile Alloy Grades.",
    materialGroup: "Carbon & Alloy",
    standards:
      "ASTM A36, ASTM A283, IS 2062, C45 (EN8), AISI 1018, AISI 1045, AISI 4140, ASTM A387",

    overview:
      "Heavy-duty carbon and alloy steel perforated sheets engineered for structural fabrication, mining, and heavy engineering applications. Manufactured from Mild Steel C45, IS 2062 structural steel, low carbon forged runs, and chrome-moly high tensile alloy grades, our perforated sheets deliver superior strength, excellent weldability, and reliable performance in the most demanding industrial environments.",

    grades: [
      "Mild Steel C45 (EN8)",
      "Structural IS 2062 Gr A/B/C",
      "Low Carbon Steel AISI 1018",
      "Medium Carbon AISI 1045",
      "Chrome-Moly AISI 4140",
      "ASTM A36",
      "ASTM A283 Gr C",
      "ASTM A387 Gr 11/22",
    ],

    supplyForms: [
      "Precision CNC-Punched Sheets",
      "Laser-Cut Perforated Sheets",
      "Round Hole Perforated Sheets",
      "Square Hole Perforated Sheets",
      "Slotted Hole Perforated Sheets",
      "Heavy-Duty Perforated Sheets",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM A36, ASTM A283, IS 2062, C45 (EN8), AISI 1018, AISI 1045, AISI 4140, ASTM A387",
      sheetThickness: "0.5 mm to 25 mm",
      holeDiameter: "1 mm to 100 mm",
      holePatterns: "Round, Square, Slotted, Hexagonal, Custom",
      openArea: "10% to 80%",
      sheetSize:
        "1000 x 2000 mm, 1250 x 2500 mm, 1500 x 3000 mm (Custom Sizes Available)",
      materialGrades:
        "MS C45, IS 2062, AISI 1018/1045/4140, ASTM A36/A283/A387",
      surfaceFinish: "Mill Finish, Pickled, Shot Blasted, Galvanized, Painted",
      manufacturingMethods:
        "CNC Punching, Laser Cutting, Water Jet Cutting, Plasma Cutting",
      qualityTesting:
        "Tensile, Hardness, Impact, Chemical Analysis, Dimensional",
    },

    standardsCompliance: [
      "ASTM A36 — Carbon Structural Steel",
      "ASTM A283 — Low and Intermediate Tensile Strength Carbon Steel Plates",
      "IS 2062 — Hot Rolled Medium and High Tensile Structural Steel",
      "AISI 1018/1045/4140 — Carbon and Alloy Steel Grades",
      "ASTM A387 — Steel, Alloy, for Pressure Vessels, Plate, and Strip",
    ],

    manufacturingType: "CNC Punched / Laser Cut / Plasma Cut",
    pressureRating: "N/A (Structural)",
    temperatureRange: "-29°C to +650°C",
    tolerance: "Per ASTM A6 / IS 2062",
    certifications: "EN 10204 3.1 MTC",

    industryApplications: [
      "Structural fabrication and construction",
      "Mining and material handling",
      "Heavy engineering and industrial equipment",
      "Agricultural machinery and equipment",
      "Transportation and automotive components",
      "Safety guards and protective screens",
    ],

    forms: "Precision CNC-Punched and Laser-Cut Sheets",
    application:
      "Structural fabrication, mining, construction, material handling, and heavy engineering",
  },

  // ============================================
  // 3. NICKEL & COPPER STEEL PERFORATED SHEETS
  // ============================================
  {
    id: 3,
    slug: "nickel-copper-alloy-perforated-sheets",
    image: nik,
    title: "Nickel & Copper Steel Perforated Sheets",
    shortDescription:
      "Monel 400, Inconel 600/625, Hastelloy C276, Cupro Nickel 90/10 (C70600) and 70/30 (C71500) Alloys.",
    materialGroup: "Nickel & Copper",
    standards: "ASTM B127, B162, B168, B575, B171, ASME SB127, DIN 17750",

    overview:
      "Premium nickel and copper alloy perforated sheets engineered for extreme temperature, pressure, and corrosive environments. Manufactured from Monel 400, Inconel 600/625, Hastelloy C276, and Cupro Nickel 90/10 (C70600) and 70/30 (C71500) grades, our perforated sheets deliver exceptional oxidation resistance, high-temperature strength, and superior resistance to acids, alkalis, and seawater for marine, chemical, and offshore applications.",

    grades: [
      "Monel 400",
      "Monel K500",
      "Inconel 600",
      "Inconel 625",
      "Inconel 718",
      "Hastelloy C276",
      "Hastelloy C22",
      "Cupro Nickel 90/10 (C70600)",
      "Cupro Nickel 70/30 (C71500)",
    ],

    supplyForms: [
      "Precision CNC-Punched Sheets",
      "Laser-Cut Perforated Sheets",
      "Round Hole Perforated Sheets",
      "Square Hole Perforated Sheets",
      "Slotted Hole Perforated Sheets",
      "Micro-Perforated Sheets",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM B127, B162, B168, B575, B171, ASME SB127, DIN 17750",
      sheetThickness: "0.5 mm to 12 mm",
      holeDiameter: "0.5 mm to 50 mm",
      holePatterns: "Round, Square, Slotted, Hexagonal, Custom",
      openArea: "10% to 70%",
      sheetSize: "1000 x 2000 mm, 1250 x 2500 mm (Custom Sizes Available)",
      materialGrades:
        "Monel 400/K500, Inconel 600/625/718, Hastelloy C276/C22, Cu-Ni 90/10, 70/30",
      surfaceFinish: "Pickled, Passivated, Annealed, Polished",
      manufacturingMethods:
        "CNC Punching, Laser Cutting, Water Jet Cutting, Plasma Cutting",
      qualityTesting: "PMI, Tensile, Hardness, Dimensional, Surface Inspection",
    },

    standardsCompliance: [
      "ASTM B127 — Nickel-Copper Alloy Plate, Sheet, and Strip",
      "ASTM B162 — Nickel Plate, Sheet, and Strip",
      "ASTM B168 — Nickel-Chromium-Iron Alloys Plate, Sheet, and Strip",
      "ASTM B575 — Low-Carbon Nickel-Chromium-Molybdenum Alloy Plate, Sheet, Strip",
      "ASTM B171 — Copper-Alloy Plate and Sheet for Pressure Vessels",
      "ASME SB127 — Nickel-Copper Alloy Plate, Sheet, and Strip",
      "DIN 17750 — Wrought Nickel Alloys",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "CNC Punched / Laser Cut / Water Jet Cut",
    pressureRating: "N/A (Structural)",
    temperatureRange: "-200°C to +800°C",
    tolerance: "Per ASTM / DIN Standards",
    certifications: "EN 10204 3.1 & 3.2 MTC, NACE MR0175 compliant",

    industryApplications: [
      "Marine and offshore structures",
      "Chemical processing and acid handling",
      "Offshore oil and gas platforms",
      "Heat exchangers and condensers",
      "Desalination plants and seawater systems",
      "Nuclear power generation",
    ],

    forms: "Precision CNC-Punched and Laser-Cut Sheets",
    application:
      "Marine, chemical processing, offshore, and heat exchanger applications",
  },

  // ============================================
  // 4. ALUMINUM PERFORATED SHEETS
  // ============================================
  {
    id: 4,
    slug: "aluminum-perforated-sheets",
    image: alu,
    title: "Aluminum Perforated Sheets",
    shortDescription:
      "Aluminium 1100 Commercial, 3003, 5052 Marine Grade, 6061-T6 High Strength Structural Configurations.",
    materialGroup: "Aluminum Structural",
    standards: "ASTM B209, ASTM B221, EN 485, EN 573, ISO 6361, DIN 1783",

    overview:
      "Lightweight, high-strength aluminum perforated sheets engineered for architectural, decorative, and industrial applications. Manufactured from Aluminium 1100 Commercial, 3003, 5052 Marine Grade, and 6061-T6 grades in precision CNC-punched and laser-cut configurations, our perforated sheets deliver excellent corrosion resistance, superior strength-to-weight ratio, and reliable performance in architectural, transportation, and marine environments.",

    grades: [
      "Aluminium 1100 Commercial",
      "Aluminium 3003",
      "Aluminium 5052 Marine Grade",
      "Aluminium 6061-T6",
      "Aluminium 5083",
      "Aluminium 6082",
    ],

    supplyForms: [
      "Precision CNC-Punched Sheets",
      "Laser-Cut Perforated Sheets",
      "Round Hole Perforated Sheets",
      "Square Hole Perforated Sheets",
      "Slotted Hole Perforated Sheets",
      "Decorative Perforated Sheets",
      "Anodized Perforated Sheets",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM B209, ASTM B221, EN 485, EN 573, ISO 6361, DIN 1783",
      sheetThickness: "0.5 mm to 12 mm",
      holeDiameter: "0.5 mm to 100 mm",
      holePatterns: "Round, Square, Slotted, Hexagonal, Decorative, Custom",
      openArea: "10% to 80%",
      sheetSize:
        "1000 x 2000 mm, 1250 x 2500 mm, 1500 x 3000 mm (Custom Sizes Available)",
      materialGrades: "1100, 3003, 5052, 6061-T6, 5083, 6082",
      surfaceFinish: "Mill Finish, Anodized, Powder Coated, PVDF Coated",
      manufacturingMethods: "CNC Punching, Laser Cutting, Water Jet Cutting",
      qualityTesting: "Tensile, Hardness, Dimensional, Surface Inspection",
    },

    standardsCompliance: [
      "ASTM B209 — Aluminum and Aluminum-Alloy Sheet and Plate",
      "ASTM B221 — Aluminum and Aluminum-Alloy Extruded Bars, Rods, Wire, Profiles, and Tubes",
      "EN 485 — Aluminium and Aluminium Alloys — Sheet, Strip, and Plate",
      "EN 573 — Aluminium and Aluminium Alloys — Chemical Composition",
      "ISO 6361 — Wrought Aluminium and Aluminium Alloy Sheets, Strips, and Plates",
      "DIN 1783 — Aluminium Semi-Finished Products",
    ],

    manufacturingType: "CNC Punched / Laser Cut / Water Jet Cut",
    pressureRating: "N/A (Structural)",
    temperatureRange: "-80°C to +200°C",
    tolerance: "Per ASTM B209 / EN 485",
    certifications: "EN 10204 3.1 MTC",

    industryApplications: [
      "Architectural cladding and facades",
      "Decorative panels and ceilings",
      "Ventilation and HVAC systems",
      "Transportation and automotive components",
      "Marine and offshore structures",
      "Signage and display panels",
    ],

    forms: "Precision CNC-Punched and Laser-Cut Sheets",
    application:
      "Architectural cladding, decorative panels, ceilings, and ventilation systems",
  },

  // ============================================
  // 5. GALVANIZED PERFORATED SHEETS
  // ============================================
  {
    id: 5,
    slug: "galvanized-perforated-sheets",
    image: gal,
    title: "Galvanized Perforated Sheets",
    shortDescription:
      "Hot-Dip Galvanized Iron (HDGI), Electro-Galvanized Mild Steel Sheet Runs, Anti-Corrosive Zinc Shielding Layers.",
    materialGroup: "Galvanized Structural",
    standards: "ASTM A653, ASTM A924, IS 277, IS 1079, EN 10346, JIS G3302",

    overview:
      "Anti-corrosive galvanized perforated sheets engineered for fencing, industrial partitions, and outdoor construction. Manufactured from Hot-Dip Galvanized Iron (HDGI) and Electro-Galvanized Mild Steel sheet runs with anti-corrosive zinc shielding layers, our perforated sheets deliver superior corrosion resistance, long service life, and reliable performance in outdoor and industrial environments.",

    grades: [
      "Hot-Dip Galvanized Iron (HDGI)",
      "Electro-Galvanized Mild Steel",
      "HDGI IS 277",
      "HDGI ASTM A653",
      "Electro-Galvanized EN 10346",
    ],

    supplyForms: [
      "Precision CNC-Punched Sheets",
      "Laser-Cut Perforated Sheets",
      "Round Hole Perforated Sheets",
      "Square Hole Perforated Sheets",
      "Slotted Hole Perforated Sheets",
      "Heavy-Duty Galvanized Perforated Sheets",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM A653, ASTM A924, IS 277, IS 1079, EN 10346, JIS G3302",
      sheetThickness: "0.5 mm to 12 mm",
      holeDiameter: "0.5 mm to 100 mm",
      holePatterns: "Round, Square, Slotted, Hexagonal, Custom",
      openArea: "10% to 80%",
      sheetSize: "1000 x 2000 mm, 1250 x 2500 mm (Custom Sizes Available)",
      materialGrades: "HDGI, Electro-Galvanized MS, IS 277, ASTM A653",
      zincCoating: "Z100 to Z600 (g/m²)",
      surfaceFinish: "Galvanized, Chromate Passivated, Oiled",
      manufacturingMethods: "CNC Punching, Laser Cutting, Plasma Cutting",
      qualityTesting: "Tensile, Hardness, Zinc Coating Weight, Dimensional",
    },

    standardsCompliance: [
      "ASTM A653 — Steel Sheet, Zinc-Coated (Galvanized) or Zinc-Iron Alloy-Coated",
      "ASTM A924 — General Requirements for Steel Sheet, Metallic-Coated",
      "IS 277 — Galvanized Steel Sheets (Plain and Corrugated)",
      "IS 1079 — Hot Rolled Carbon Steel Sheet and Strip",
      "EN 10346 — Continuously Hot-Dip Coated Steel Flat Products",
      "JIS G3302 — Hot-Dip Zinc-Coated Steel Sheet",
    ],

    manufacturingType: "CNC Punched / Laser Cut / Plasma Cut",
    pressureRating: "N/A (Structural)",
    temperatureRange: "-29°C to +200°C",
    tolerance: "Per ASTM A924 / IS 277",
    certifications: "EN 10204 3.1 MTC",

    industryApplications: [
      "Fencing and perimeter security",
      "Industrial partitions and screens",
      "Agricultural equipment and machinery",
      "Outdoor construction and infrastructure",
      "Ventilation and HVAC systems",
      "Material handling and storage",
    ],

    forms: "Precision CNC-Punched and Laser-Cut Sheets",
    application:
      "Fencing, industrial partitions, agricultural equipment, and outdoor construction",
  },

  // ============================================
  // 6. TITANIUM PERFORATED SHEETS
  // ============================================
  {
    id: 6,
    slug: "titanium-perforated-sheets",
    image: alu,
    title: "Titanium Perforated Sheets",
    shortDescription:
      "ASTM B265 Grade 1, 2, 5 (Ti-6Al-4V), 7 Lightweight High-Strength Corrosion-Immune Titanium Perforated Sheets.",
    materialGroup: "Titanium",
    standards: "ASTM B265, ASTM B338, ASME SB265, DIN 17860, DIN 65328",

    overview:
      "Ultra-lightweight, high-strength titanium perforated sheets with impervious corrosion immunity against seawater, wet chlorine, and organic chlorides. Manufactured from Grade 1, 2, 5 (Ti-6Al-4V), and 7 grades in precision CNC-punched and laser-cut configurations, our perforated sheets deliver exceptional performance in aerospace, marine, and chemical processing applications.",

    grades: [
      "Grade 1",
      "Grade 2",
      "Grade 5 (Ti-6Al-4V)",
      "Grade 7",
      "Grade 12",
    ],

    supplyForms: [
      "Precision CNC-Punched Sheets",
      "Laser-Cut Perforated Sheets",
      "Round Hole Perforated Sheets",
      "Square Hole Perforated Sheets",
      "Slotted Hole Perforated Sheets",
      "Micro-Perforated Sheets",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM B265, ASTM B338, ASME SB265, DIN 17860, DIN 65328",
      sheetThickness: "0.5 mm to 12 mm",
      holeDiameter: "0.5 mm to 50 mm",
      holePatterns: "Round, Square, Slotted, Hexagonal, Custom",
      openArea: "10% to 70%",
      sheetSize: "1000 x 2000 mm, 1250 x 2500 mm (Custom Sizes Available)",
      materialGrades: "Grade 1, 2, 5 (Ti-6Al-4V), 7, 12",
      surfaceFinish: "Pickled, Passivated, Anodized, Bright Annealed",
      manufacturingMethods: "CNC Punching, Laser Cutting, Water Jet Cutting",
      qualityTesting: "PMI, Tensile, Hardness, Dimensional, Surface Inspection",
    },

    standardsCompliance: [
      "ASTM B265 — Titanium and Titanium Alloy Strip, Sheet, and Plate",
      "ASTM B338 — Seamless and Welded Titanium and Titanium Alloy Tubes",
      "ASME SB265 — Titanium and Titanium Alloy Strip, Sheet, and Plate",
      "DIN 17860 — Titanium and Titanium Alloy Sheet, Strip, and Plate",
      "DIN 65328 — Aerospace Titanium Alloy Bolts",
    ],

    manufacturingType: "CNC Punched / Laser Cut / Water Jet Cut",
    pressureRating: "N/A (Structural)",
    temperatureRange: "-200°C to +400°C",
    tolerance: "Per ASTM B265 / DIN 17860",
    certifications: "EN 10204 3.1 & 3.2 MTC",

    industryApplications: [
      "Aerospace and aircraft components",
      "Marine and offshore seawater systems",
      "Chemical processing and chlor-alkali plants",
      "Desalination plants",
      "Medical implants and equipment",
      "Cryogenic filtration systems",
    ],

    forms: "Precision CNC-Punched and Laser-Cut Sheets",
    application: "Aerospace, Marine & Chemical Processing",
  },

  // ============================================
  // 7. HIGH ALLOY PERFORATED SHEETS
  // ============================================
  {
    id: 7,
    slug: "high-alloy-perforated-sheets",
    image: nik,
    title: "High Alloy Perforated Sheets",
    shortDescription:
      "Hastelloy C22, C276, Alloy 20, SMO 254 Precision Perforated Sheets for Extreme Corrosive Chemical Environments.",
    materialGroup: "High Alloys",
    standards: "ASTM B575, B574, B622, B729, ASME SB575, DIN 17744",

    overview:
      "Specialized high-alloy perforated sheets engineered for wet chlorine, sulfuric acid, phosphoric acid, and aggressive halide services. Manufactured from Hastelloy C22, C276, Alloy 20, and SMO 254 grades in precision CNC-punched and laser-cut configurations, our perforated sheets deliver exceptional performance in the most demanding corrosive environments across chemical processing, pollution control, and pharmaceutical industries.",

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
      "Precision CNC-Punched Sheets",
      "Laser-Cut Perforated Sheets",
      "Round Hole Perforated Sheets",
      "Square Hole Perforated Sheets",
      "Slotted Hole Perforated Sheets",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM B575, B574, B622, B729, ASME SB575, DIN 17744",
      sheetThickness: "0.5 mm to 10 mm",
      holeDiameter: "0.5 mm to 50 mm",
      holePatterns: "Round, Square, Slotted, Hexagonal, Custom",
      openArea: "10% to 70%",
      sheetSize: "1000 x 2000 mm, 1250 x 2500 mm (Custom Sizes Available)",
      materialGrades: "Hastelloy C22, C276, C2000, Alloy 20, Alloy 28, SMO 254",
      surfaceFinish: "Pickled, Passivated, Solution Annealed, Polished",
      manufacturingMethods: "CNC Punching, Laser Cutting, Water Jet Cutting",
      qualityTesting: "PMI, Tensile, Hardness, Dimensional, Surface Inspection",
    },

    standardsCompliance: [
      "ASTM B575 — Low-Carbon Nickel-Chromium-Molybdenum Alloy Plate, Sheet, Strip",
      "ASTM B574 — Low-Carbon Nickel-Chromium-Molybdenum Alloy Rod and Bar",
      "ASTM B622 — Seamless Nickel and Nickel-Cobalt Alloy Pipe and Tube",
      "ASTM B729 — Seamless UNS N08020, N08026, and N08024 Alloy Pipe and Tube",
      "ASME SB575 — Low-Carbon Nickel-Chromium-Molybdenum Alloy Plate, Sheet, Strip",
      "DIN 17744 — Wrought Nickel Alloys",
      "NACE MR0175 / ISO 15156 — Sulfide Stress Cracking Resistant Materials",
    ],

    manufacturingType: "CNC Punched / Laser Cut / Water Jet Cut",
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

    forms: "Precision CNC-Punched and Laser-Cut Sheets",
    application: "Extreme Corrosive Chemical Environments",
  },

  // ============================================
  // 8. COPPER & BRASS PERFORATED SHEETS
  // ============================================
  {
    id: 8,
    slug: "copper-brass-perforated-sheets",
    image: nik,
    title: "Copper & Brass Perforated Sheets",
    shortDescription:
      "Copper C11000, Brass C26000, Cupro-Nickel C70600 / C71500 Decorative & Industrial Perforated Sheets.",
    materialGroup: "Copper & Brass",
    standards: "ASTM B152, B36, B171, ASME SB152, DIN 17670, EN 1652",

    overview:
      "Premium copper and brass perforated sheets engineered for decorative, architectural, and industrial applications. Manufactured from Copper C11000, Brass C26000, and Cupro-Nickel C70600/C71500 grades, our perforated sheets deliver excellent electrical and thermal conductivity, superior corrosion resistance, and reliable performance in marine, architectural, and electrical applications.",

    grades: [
      "Copper C11000 (ETP)",
      "Copper C12200 (DHP)",
      "Brass C26000 (Cartridge)",
      "Brass C28000 (Muntz)",
      "Cupro-Nickel C70600 (90/10)",
      "Cupro-Nickel C71500 (70/30)",
    ],

    supplyForms: [
      "Precision CNC-Punched Sheets",
      "Laser-Cut Perforated Sheets",
      "Round Hole Perforated Sheets",
      "Square Hole Perforated Sheets",
      "Decorative Perforated Sheets",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM B152, ASTM B36, ASTM B171, ASME SB152, DIN 17670, EN 1652",
      sheetThickness: "0.5 mm to 10 mm",
      holeDiameter: "0.5 mm to 50 mm",
      holePatterns: "Round, Square, Slotted, Hexagonal, Decorative, Custom",
      openArea: "10% to 80%",
      sheetSize: "1000 x 2000 mm, 1250 x 2500 mm (Custom Sizes Available)",
      materialGrades:
        "Copper C11000, C12200, Brass C26000, C28000, Cu-Ni C70600, C71500",
      surfaceFinish: "Mill Finish, Polished, Lacquered, Antiqued, Anodized",
      manufacturingMethods: "CNC Punching, Laser Cutting, Water Jet Cutting",
      qualityTesting: "Tensile, Hardness, Dimensional, Surface Inspection",
    },

    standardsCompliance: [
      "ASTM B152 — Copper Sheet, Strip, Plate, and Rolled Bar",
      "ASTM B36 — Brass Plate, Sheet, Strip, and Rolled Bar",
      "ASTM B171 — Copper-Alloy Plate and Sheet for Pressure Vessels",
      "ASME SB152 — Copper Sheet, Strip, Plate, and Rolled Bar",
      "DIN 17670 — Copper and Copper Alloy Sheet and Strip",
      "EN 1652 — Copper and Copper Alloys — Plate, Sheet, Strip",
    ],

    manufacturingType: "CNC Punched / Laser Cut / Water Jet Cut",
    pressureRating: "N/A (Structural)",
    temperatureRange: "-100°C to +300°C",
    tolerance: "Per ASTM / DIN Standards",
    certifications: "EN 10204 3.1 MTC",

    industryApplications: [
      "Architectural and decorative cladding",
      "Electrical and electronic components",
      "Marine and offshore seawater systems",
      "Heat exchangers and condensers",
      "Musical instruments and art installations",
      "Roofing and gutter systems",
    ],

    forms: "Precision CNC-Punched and Laser-Cut Sheets",
    application: "Architectural, Decorative & Industrial Applications",
  },

  // ============================================
  // 9. ALLOY STEEL PERFORATED SHEETS
  // ============================================
  {
    id: 9,
    slug: "alloy-steel-perforated-sheets",
    image: car,
    title: "Alloy Steel Perforated Sheets",
    shortDescription:
      "ASTM A387 Gr 11, Gr 22, AISI 4140, 4340 Chrome-Moly High-Temperature Precision Perforated Sheets.",
    materialGroup: "Alloy Steel",
    standards:
      "ASTM A387, ASTM A182, AISI 4140, AISI 4340, ASME SB387, DIN 17175",

    overview:
      "Chromium-molybdenum creep-resistant alloy steel perforated sheets engineered for supercritical boilers, heat recovery steam generators, and extreme-temperature steam lines. Manufactured to ASTM A387, A182, and AISI 4140/4340 standards, our perforated sheets deliver reliable performance at temperatures up to 650°C.",

    grades: [
      "ASTM A387 Gr 11",
      "ASTM A387 Gr 22",
      "ASTM A387 Gr 5",
      "ASTM A387 Gr 9",
      "AISI 4140",
      "AISI 4340",
      "ASTM A182 F11",
      "ASTM A182 F22",
    ],

    supplyForms: [
      "Precision CNC-Punched Sheets",
      "Laser-Cut Perforated Sheets",
      "Round Hole Perforated Sheets",
      "Square Hole Perforated Sheets",
      "Slotted Hole Perforated Sheets",
    ],

    technicalSpecs: {
      standardSpecifications:
        "ASTM A387, ASTM A182, AISI 4140, AISI 4340, ASME SB387, DIN 17175",
      sheetThickness: "0.5 mm to 25 mm",
      holeDiameter: "1 mm to 100 mm",
      holePatterns: "Round, Square, Slotted, Hexagonal, Custom",
      openArea: "10% to 80%",
      sheetSize: "1000 x 2000 mm, 1250 x 2500 mm (Custom Sizes Available)",
      materialGrades: "A387 Gr 11/22/5/9, AISI 4140/4340, A182 F11/F22",
      surfaceFinish: "Hot Finished, Pickled, Annealed, Shot Blasted",
      manufacturingMethods: "CNC Punching, Laser Cutting, Plasma Cutting",
      qualityTesting: "PMI, Tensile, Hardness, Impact, Dimensional",
    },

    standardsCompliance: [
      "ASTM A387 — Steel, Alloy, for Pressure Vessels, Plate, and Strip",
      "ASTM A182 — Forged or Rolled Alloy and Stainless Steel Pipe Flanges",
      "AISI 4140 — Chromium-Molybdenum Alloy Steel",
      "AISI 4340 — Nickel-Chromium-Molybdenum Alloy Steel",
      "ASME SB387 — Steel, Alloy, for Pressure Vessels, Plate, and Strip",
      "DIN 17175 — Seamless Tubes of Heat-Resistant Steels",
      "ASME B31.1 — Power Piping Code",
    ],

    manufacturingType: "CNC Punched / Laser Cut / Plasma Cut",
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
      "High-temperature filtration systems",
    ],

    forms: "Precision CNC-Punched and Laser-Cut Sheets",
    application: "Superheater Steam Lines, Refinery, Power Plants",
  },
];

export default perforatedsheet;
