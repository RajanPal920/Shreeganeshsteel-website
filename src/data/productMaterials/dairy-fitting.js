// src/data/productMaterials/dairyfitting.js

// ============================================
// IMAGE IMPORTS
// ============================================
import hug from "../../../public/images/stock/hygienic-dairy-fittings.jpg";
import con from "../../../public/images/stock/conical-strainers.jpg";
import cap from "../../../public/images/stock/ss-pipe-caps.jpg";
import tees from "../../../public/images/stock/plain-tees.jpg";
import wye from "../../../public/images/stock/wye-loops.jpg";
import tc from "../../../public/images/stock/tc-clamps.jpg";
import red from "../../../public/images/stock/reducers.jpg";
import pipe from "../../../public/images/stock/pipe-holders.jpg";
import plain from "../../../public/images/stock/plain-bends.jpg";
import j from "../../../public/images/stock/j-bends.jpg";
import tcc from "../../../public/images/stock/tc-bends.jpg";
import sms from "../../../public/images/stock/sms-union.jpg";
import seam from "../../../public/images/stock/seamless-tees.jpg";

// ============================================
// DAIRY FITTINGS — 13 Products
// ============================================
const dairyfitting = [
  // ============================================
  // 1. HYGIENIC DAIRY FITTINGS
  // ============================================
  {
    id: 1,
    slug: "hygienic-dairy-fittings",
    image: hug,
    title: "Hygienic Dairy Fittings",
    shortDescription:
      "Food Grade Stainless Steel (SS 304 / 316L), Leak-Proof & Hygienic TC Connections, Corrosion Resistant & Easy Maintenance.",
    materialGroup: "Food Grade",
    standards:
      "SS 304, SS 304L, SS 316, SS 316L, BSP / NPT / DIN / SMS / IDF / TC",

    overview:
      "Premium hygienic dairy fittings engineered for sanitary processing in dairy, food, beverage, and pharmaceutical industries. Manufactured from food-grade SS 304 and 316L with electro-polished and mechanical-polished finishes, our fittings deliver leak-proof tri-clamp connections, superior corrosion resistance, and easy-clean maintenance for the most demanding hygienic applications.",

    grades: ["SS 304", "SS 304L", "SS 316", "SS 316L"],

    supplyForms: [
      "Tri-Clamp (TC) Fittings",
      "DIN Fittings",
      "SMS Fittings",
      "IDF Fittings",
      "BSP / NPT Threaded Fittings",
    ],

    technicalSpecs: {
      standardSpecifications:
        "3A Sanitary Standards, DIN 11850, DIN 11851, SMS 3008, IDF / BS 4825, ISO 2852",
      nominalSize: '1/2" to 6"',
      wallThickness: "1.2 mm to 3.0 mm",
      surfaceFinish: "Electro Polished, Mechanical Polish (320–800 Grit)",
      endConnections: "Tri-Clamp, DIN, SMS, IDF, BSP, NPT",
      qualityTesting: "Hydrostatic, PMI, Dye Penetrant, Surface Roughness (Ra)",
    },

    standardsCompliance: [
      "3A Sanitary Standards — Sanitary Fittings for Dairy & Food Processing",
      "DIN 11850 — Stainless Steel Tubes for Food & Beverage Industry",
      "DIN 11851 — Hygienic Unions for Food & Beverage Industry",
      "SMS 3008 — Swedish Milk Standard Union Fittings",
      "IDF / BS 4825 — Hygienic Fittings for Food Industry",
      "ISO 2852 — Stainless Steel Clamp Pipe Connections",
    ],

    manufacturingType: "Seamless / Welded Cold Formed",
    pressureRating: "Up to 10 Bar",
    temperatureRange: "-20°C to +200°C",
    tolerance: "Per 3A / DIN / SMS Standards",
    certifications: "EN 10204 3.1 MTC, FDA Compliant, 3A Approved",

    industryApplications: [
      "Dairy processing and milk handling systems",
      "Food processing and beverage production",
      "Pharmaceutical and biotech manufacturing",
      "Cosmetics and personal care processing",
      "Brewery and distillery sanitary lines",
      "CIP (Clean-in-Place) systems",
    ],

    forms: "Hygienic Fittings",
    application:
      "Dairy, food processing, beverage, pharmaceutical, and biotech industries",
  },

  // ============================================
  // 2. CONICAL STRAINERS
  // ============================================
  {
    id: 2,
    slug: "conical-strainers",
    image: con,
    title: "Conical Strainers",
    shortDescription:
      "Efficient Removal of Impurities Ensuring Product Purity with Electro Polished & Mechanical Polish Finishes.",
    materialGroup: "Strainers",
    standards:
      "SS 304, SS 316L, Electro Polished, Mechanical Polish (320–800 Grit)",

    overview:
      "High-efficiency conical strainers designed for removal of debris and impurities in hygienic piping systems. Manufactured from SS 304 and 316L with electro-polished and mechanical-polished finishes, our strainers protect pumps, valves, and processing equipment while maintaining product purity in dairy, food, and pharmaceutical applications.",

    grades: ["SS 304", "SS 316L"],

    supplyForms: [
      "Conical Strainers",
      "Y-Type Strainers",
      "Basket Strainers",
      "Temporary Strainers",
    ],

    technicalSpecs: {
      standardSpecifications:
        "3A Sanitary Standards, DIN 11850, SMS 3008, ISO 2852",
      nominalSize: '1/2" to 4"',
      meshSize: "20 Mesh to 200 Mesh",
      wallThickness: "1.2 mm to 3.0 mm",
      surfaceFinish: "Electro Polished, Mechanical Polish (320–800 Grit)",
      endConnections: "Tri-Clamp, DIN, SMS, IDF, BSP, NPT",
      qualityTesting: "Hydrostatic, PMI, Dye Penetrant, Surface Roughness (Ra)",
    },

    standardsCompliance: [
      "3A Sanitary Standards — Sanitary Fittings for Dairy & Food Processing",
      "DIN 11850 — Stainless Steel Tubes for Food & Beverage Industry",
      "SMS 3008 — Swedish Milk Standard Union Fittings",
      "ISO 2852 — Stainless Steel Clamp Pipe Connections",
    ],

    manufacturingType: "Seamless / Welded Cold Formed",
    pressureRating: "Up to 10 Bar",
    temperatureRange: "-20°C to +200°C",
    tolerance: "Per 3A / DIN / SMS Standards",
    certifications: "EN 10204 3.1 MTC, FDA Compliant, 3A Approved",

    industryApplications: [
      "Dairy processing and milk handling",
      "Food and beverage processing",
      "Pharmaceutical and biotech manufacturing",
      "Cosmetics processing",
      "Brewery and distillery lines",
      "CIP system protection",
    ],

    forms: "Conical Strainers",
    application:
      "Remove debris and protect pumps, valves, and processing equipment in hygienic piping systems",
  },

  // ============================================
  // 3. SS PIPE CAPS
  // ============================================
  {
    id: 3,
    slug: "ss-pipe-caps",
    image: cap,
    title: "SS Pipe Caps",
    shortDescription:
      "Secure Sealing of Pipe Ends to Prevent Contamination with Food Grade SS 304 / 316L Construction.",
    materialGroup: "Caps",
    standards: "SS 304, SS 316L, BSP / NPT / DIN / SMS / IDF / TC",

    overview:
      "Hygienic stainless steel pipe caps engineered for secure sealing of sanitary pipeline ends. Manufactured from SS 304 and 316L with polished finishes, our caps prevent contamination and maintain product purity in dairy, food, beverage, and pharmaceutical processing systems.",

    grades: ["SS 304", "SS 316L"],

    supplyForms: [
      "Tri-Clamp End Caps",
      "DIN End Caps",
      "SMS End Caps",
      "IDF End Caps",
      "Threaded End Caps",
    ],

    technicalSpecs: {
      standardSpecifications:
        "3A Sanitary Standards, DIN 11850, DIN 11851, SMS 3008, IDF / BS 4825, ISO 2852",
      nominalSize: '1/2" to 6"',
      wallThickness: "1.2 mm to 3.0 mm",
      surfaceFinish: "Electro Polished, Mechanical Polish (320–800 Grit)",
      endConnections: "Tri-Clamp, DIN, SMS, IDF, BSP, NPT",
      qualityTesting: "Hydrostatic, PMI, Dye Penetrant, Surface Roughness (Ra)",
    },

    standardsCompliance: [
      "3A Sanitary Standards — Sanitary Fittings for Dairy & Food Processing",
      "DIN 11850 — Stainless Steel Tubes for Food & Beverage Industry",
      "DIN 11851 — Hygienic Unions for Food & Beverage Industry",
      "SMS 3008 — Swedish Milk Standard Union Fittings",
      "IDF / BS 4825 — Hygienic Fittings for Food Industry",
      "ISO 2852 — Stainless Steel Clamp Pipe Connections",
    ],

    manufacturingType: "Seamless / Welded Cold Formed",
    pressureRating: "Up to 10 Bar",
    temperatureRange: "-20°C to +200°C",
    tolerance: "Per 3A / DIN / SMS Standards",
    certifications: "EN 10204 3.1 MTC, FDA Compliant, 3A Approved",

    industryApplications: [
      "Dairy processing and milk handling",
      "Food and beverage processing",
      "Pharmaceutical and biotech manufacturing",
      "Cosmetics processing",
      "Brewery and distillery lines",
      "Sanitary pipeline sealing",
    ],

    forms: "Pipe Caps",
    application:
      "Securely sealing sanitary pipelines in food, dairy, pharmaceutical, and beverage applications",
  },

  // ============================================
  // 4. PLAIN TEES
  // ============================================
  {
    id: 4,
    slug: "plain-tees",
    image: tees,
    title: "Plain Tees",
    shortDescription:
      "Smooth Directional Flow Within Pipelines with Electro Polished & Mechanical Polish Finishes.",
    materialGroup: "Tees",
    standards:
      "SS 304, SS 316L, Electro Polished, Mechanical Polish (320–800 Grit)",

    overview:
      "Precision-engineered plain tees designed for smooth directional flow within hygienic pipelines. Manufactured from SS 304 and 316L with electro-polished and mechanical-polished finishes, our tees deliver reliable flow distribution, excellent corrosion resistance, and easy-clean hygienic performance in dairy, food, and pharmaceutical processing.",

    grades: ["SS 304", "SS 316L"],

    supplyForms: [
      "Equal Plain Tees",
      "Reducing Plain Tees",
      "Tri-Clamp Tees",
      "DIN Tees",
      "SMS Tees",
    ],

    technicalSpecs: {
      standardSpecifications:
        "3A Sanitary Standards, DIN 11850, DIN 11851, SMS 3008, ISO 2852",
      nominalSize: '1/2" to 6"',
      wallThickness: "1.2 mm to 3.0 mm",
      surfaceFinish: "Electro Polished, Mechanical Polish (320–800 Grit)",
      endConnections: "Tri-Clamp, DIN, SMS, IDF, BSP, NPT",
      qualityTesting: "Hydrostatic, PMI, Dye Penetrant, Surface Roughness (Ra)",
    },

    standardsCompliance: [
      "3A Sanitary Standards — Sanitary Fittings for Dairy & Food Processing",
      "DIN 11850 — Stainless Steel Tubes for Food & Beverage Industry",
      "DIN 11851 — Hygienic Unions for Food & Beverage Industry",
      "SMS 3008 — Swedish Milk Standard Union Fittings",
      "ISO 2852 — Stainless Steel Clamp Pipe Connections",
    ],

    manufacturingType: "Seamless / Welded Cold Formed",
    pressureRating: "Up to 10 Bar",
    temperatureRange: "-20°C to +200°C",
    tolerance: "Per 3A / DIN / SMS Standards",
    certifications: "EN 10204 3.1 MTC, FDA Compliant, 3A Approved",

    industryApplications: [
      "Dairy processing and milk handling",
      "Food and beverage processing",
      "Pharmaceutical and biotech manufacturing",
      "Cosmetics processing",
      "Brewery and distillery lines",
      "Sanitary flow distribution",
    ],

    forms: "Plain Tees",
    application:
      "Reliable flow distribution in sanitary piping systems with excellent corrosion resistance",
  },

  // ============================================
  // 5. WYE LOOPS
  // ============================================
  {
    id: 5,
    slug: "wye-loops",
    image: wye,
    title: "Wye Loops",
    shortDescription:
      "Efficient Flow Direction Changes with Minimal Turbulence in Hygienic Process Piping.",
    materialGroup: "Loops",
    standards:
      "SS 304, SS 316L, Electro Polished, Mechanical Polish (320–800 Grit)",

    overview:
      "Hygienic wye loops engineered for efficient flow direction changes with minimal turbulence in sanitary process piping. Manufactured from SS 304 and 316L with polished finishes, our wye loops deliver smooth drainage, uninterrupted product flow, and superior cleanability in dairy, food, and pharmaceutical applications.",

    grades: ["SS 304", "SS 316L"],

    supplyForms: [
      "Wye Loops",
      "Y-Piece Loops",
      "Tri-Clamp Wye Loops",
      "DIN Wye Loops",
    ],

    technicalSpecs: {
      standardSpecifications:
        "3A Sanitary Standards, DIN 11850, DIN 11851, SMS 3008, ISO 2852",
      nominalSize: '1/2" to 4"',
      wallThickness: "1.2 mm to 3.0 mm",
      surfaceFinish: "Electro Polished, Mechanical Polish (320–800 Grit)",
      endConnections: "Tri-Clamp, DIN, SMS, IDF, BSP, NPT",
      qualityTesting: "Hydrostatic, PMI, Dye Penetrant, Surface Roughness (Ra)",
    },

    standardsCompliance: [
      "3A Sanitary Standards — Sanitary Fittings for Dairy & Food Processing",
      "DIN 11850 — Stainless Steel Tubes for Food & Beverage Industry",
      "DIN 11851 — Hygienic Unions for Food & Beverage Industry",
      "SMS 3008 — Swedish Milk Standard Union Fittings",
      "ISO 2852 — Stainless Steel Clamp Pipe Connections",
    ],

    manufacturingType: "Seamless / Welded Cold Formed",
    pressureRating: "Up to 10 Bar",
    temperatureRange: "-20°C to +200°C",
    tolerance: "Per 3A / DIN / SMS Standards",
    certifications: "EN 10204 3.1 MTC, FDA Compliant, 3A Approved",

    industryApplications: [
      "Dairy processing and milk handling",
      "Food and beverage processing",
      "Pharmaceutical and biotech manufacturing",
      "Cosmetics processing",
      "Brewery and distillery lines",
      "Hygienic drainage systems",
    ],

    forms: "Wye Loops",
    application:
      "Efficient drainage, smooth product flow, and hygienic process piping installations",
  },

  // ============================================
  // 6. TC CLAMPS
  // ============================================
  {
    id: 6,
    slug: "tc-clamps",
    image: tc,
    title: "TC Clamps",
    shortDescription:
      "Leak-Proof and Hygienic Tri-Clamp Connections with SS 304 / 316L Construction.",
    materialGroup: "Clamps",
    standards: "SS 304, SS 316L, TC Connections",

    overview:
      "Precision tri-clamp (TC) clamps engineered for leak-proof, hygienic pipe connections. Manufactured from SS 304 and 316L with polished finishes, our clamps deliver secure sealing, easy maintenance, and superior corrosion resistance in dairy, food, beverage, and pharmaceutical processing systems.",

    grades: ["SS 304", "SS 316L"],

    supplyForms: [
      "Single Pin Clamps",
      "Double Pin Clamps",
      "High Pressure Clamps",
      "Heavy Duty Clamps",
      "Nylon Handle Clamps",
    ],

    technicalSpecs: {
      standardSpecifications:
        "3A Sanitary Standards, ISO 2852, DIN 32676, SMS 3017",
      nominalSize: '1/2" to 12"',
      surfaceFinish: "Electro Polished, Mechanical Polish (320–800 Grit)",
      endConnections: "Tri-Clamp (TC)",
      qualityTesting: "Hydrostatic, PMI, Dye Penetrant, Surface Roughness (Ra)",
    },

    standardsCompliance: [
      "3A Sanitary Standards — Sanitary Fittings for Dairy & Food Processing",
      "ISO 2852 — Stainless Steel Clamp Pipe Connections",
      "DIN 32676 — Tri-Clamp Connections for Food & Beverage Industry",
      "SMS 3017 — Swedish Milk Standard Clamp Connections",
    ],

    manufacturingType: "Cold Formed / Machined",
    pressureRating: "Up to 16 Bar",
    temperatureRange: "-20°C to +200°C",
    tolerance: "Per 3A / ISO 2852 Standards",
    certifications: "EN 10204 3.1 MTC, FDA Compliant, 3A Approved",

    industryApplications: [
      "Dairy processing and milk handling",
      "Food and beverage processing",
      "Pharmaceutical and biotech manufacturing",
      "Cosmetics processing",
      "Brewery and distillery lines",
      "Sanitary pipeline connections",
    ],

    forms: "Tri-Clamp (TC) Clamps",
    application:
      "Secure, leak-proof, and easy-to-maintain hygienic pipe connections",
  },

  // ============================================
  // 7. REDUCERS
  // ============================================
  {
    id: 7,
    slug: "reducers",
    image: red,
    title: "Reducers",
    shortDescription:
      "Smooth Transition Between Different Pipe Sizes with Food Grade SS 304 / 316L Construction.",
    materialGroup: "Reducers",
    standards: "SS 304, SS 316L, BSP / NPT / DIN / SMS / IDF / TC",

    overview:
      "Hygienic reducers engineered for smooth transition between different pipe sizes while maintaining uninterrupted product flow. Manufactured from SS 304 and 316L with polished finishes, our reducers deliver reliable performance, superior corrosion resistance, and easy-clean hygienic performance in dairy, food, and pharmaceutical processing.",

    grades: ["SS 304", "SS 316L"],

    supplyForms: [
      "Concentric Reducers",
      "Eccentric Reducers",
      "Tri-Clamp Reducers",
      "DIN Reducers",
      "SMS Reducers",
    ],

    technicalSpecs: {
      standardSpecifications:
        "3A Sanitary Standards, DIN 11850, DIN 11851, SMS 3008, IDF / BS 4825, ISO 2852",
      nominalSize: '1/2" to 6"',
      wallThickness: "1.2 mm to 3.0 mm",
      surfaceFinish: "Electro Polished, Mechanical Polish (320–800 Grit)",
      endConnections: "Tri-Clamp, DIN, SMS, IDF, BSP, NPT",
      qualityTesting: "Hydrostatic, PMI, Dye Penetrant, Surface Roughness (Ra)",
    },

    standardsCompliance: [
      "3A Sanitary Standards — Sanitary Fittings for Dairy & Food Processing",
      "DIN 11850 — Stainless Steel Tubes for Food & Beverage Industry",
      "DIN 11851 — Hygienic Unions for Food & Beverage Industry",
      "SMS 3008 — Swedish Milk Standard Union Fittings",
      "IDF / BS 4825 — Hygienic Fittings for Food Industry",
      "ISO 2852 — Stainless Steel Clamp Pipe Connections",
    ],

    manufacturingType: "Seamless / Welded Cold Formed",
    pressureRating: "Up to 10 Bar",
    temperatureRange: "-20°C to +200°C",
    tolerance: "Per 3A / DIN / SMS Standards",
    certifications: "EN 10204 3.1 MTC, FDA Compliant, 3A Approved",

    industryApplications: [
      "Dairy processing and milk handling",
      "Food and beverage processing",
      "Pharmaceutical and biotech manufacturing",
      "Cosmetics processing",
      "Brewery and distillery lines",
      "Sanitary pipeline size transitions",
    ],

    forms: "Reducers",
    application:
      "Smooth pipe size transitions while maintaining uninterrupted product flow in hygienic systems",
  },

  // ============================================
  // 8. PIPE HOLDERS
  // ============================================
  {
    id: 8,
    slug: "pipe-holders",
    image: pipe,
    title: "Pipe Holders",
    shortDescription:
      "Stable Support for Piping Systems with SS 304 / 316L Construction.",
    materialGroup: "Holders",
    standards: "SS 304, SS 316L",

    overview:
      "Hygienic pipe holders engineered for stable support of sanitary process piping installations. Manufactured from SS 304 and 316L with polished finishes, our pipe holders deliver reliable support, superior corrosion resistance, and easy-clean hygienic performance in dairy, food, and pharmaceutical processing systems.",

    grades: ["SS 304", "SS 316L"],

    supplyForms: [
      "Pipe Holders",
      "Pipe Supports",
      "Wall Mount Holders",
      "Floor Mount Holders",
    ],

    technicalSpecs: {
      standardSpecifications: "3A Sanitary Standards, DIN 11850, SMS 3008",
      nominalSize: '1/2" to 6"',
      surfaceFinish: "Electro Polished, Mechanical Polish (320–800 Grit)",
      endConnections: "Clamp Mount, Wall Mount, Floor Mount",
      qualityTesting: "PMI, Dye Penetrant, Surface Roughness (Ra)",
    },

    standardsCompliance: [
      "3A Sanitary Standards — Sanitary Fittings for Dairy & Food Processing",
      "DIN 11850 — Stainless Steel Tubes for Food & Beverage Industry",
      "SMS 3008 — Swedish Milk Standard Union Fittings",
    ],

    manufacturingType: "Cold Formed / Fabricated",
    pressureRating: "N/A (Support Only)",
    temperatureRange: "-20°C to +200°C",
    tolerance: "Per 3A Standards",
    certifications: "EN 10204 3.1 MTC, FDA Compliant, 3A Approved",

    industryApplications: [
      "Dairy processing and milk handling",
      "Food and beverage processing",
      "Pharmaceutical and biotech manufacturing",
      "Cosmetics processing",
      "Brewery and distillery lines",
      "Sanitary piping support systems",
    ],

    forms: "Pipe Holders",
    application: "Stable support for hygienic process piping installations",
  },

  // ============================================
  // 9. PLAIN BENDS
  // ============================================
  {
    id: 9,
    slug: "plain-bends",
    image: plain,
    title: "Plain Bends",
    shortDescription:
      "Directional Flow Change with Minimal Resistance in Hygienic Pipelines.",
    materialGroup: "Bends",
    standards:
      "SS 304, SS 316L, Electro Polished, Mechanical Polish (320–800 Grit)",

    overview:
      "Precision-engineered plain bends designed for smooth directional changes in sanitary pipelines while minimizing flow resistance. Manufactured from SS 304 and 316L with electro-polished and mechanical-polished finishes, our bends deliver superior flow characteristics and easy-clean hygienic performance in dairy, food, and pharmaceutical processing.",

    grades: ["SS 304", "SS 316L"],

    supplyForms: [
      "90° Plain Bends",
      "45° Plain Bends",
      "180° Plain Bends",
      "Tri-Clamp Bends",
      "DIN Bends",
    ],

    technicalSpecs: {
      standardSpecifications:
        "3A Sanitary Standards, DIN 11850, DIN 11851, SMS 3008, ISO 2852",
      nominalSize: '1/2" to 6"',
      wallThickness: "1.2 mm to 3.0 mm",
      surfaceFinish: "Electro Polished, Mechanical Polish (320–800 Grit)",
      endConnections: "Tri-Clamp, DIN, SMS, IDF, BSP, NPT",
      qualityTesting: "Hydrostatic, PMI, Dye Penetrant, Surface Roughness (Ra)",
    },

    standardsCompliance: [
      "3A Sanitary Standards — Sanitary Fittings for Dairy & Food Processing",
      "DIN 11850 — Stainless Steel Tubes for Food & Beverage Industry",
      "DIN 11851 — Hygienic Unions for Food & Beverage Industry",
      "SMS 3008 — Swedish Milk Standard Union Fittings",
      "ISO 2852 — Stainless Steel Clamp Pipe Connections",
    ],

    manufacturingType: "Seamless / Welded Cold Formed",
    pressureRating: "Up to 10 Bar",
    temperatureRange: "-20°C to +200°C",
    tolerance: "Per 3A / DIN / SMS Standards",
    certifications: "EN 10204 3.1 MTC, FDA Compliant, 3A Approved",

    industryApplications: [
      "Dairy processing and milk handling",
      "Food and beverage processing",
      "Pharmaceutical and biotech manufacturing",
      "Cosmetics processing",
      "Brewery and distillery lines",
      "Sanitary pipeline direction changes",
    ],

    forms: "Plain Bends",
    application:
      "Smooth directional changes in sanitary pipelines while minimizing flow resistance",
  },

  // ============================================
  // 10. J BENDS
  // ============================================
  // {
  //   id: 10,
  //   slug: "j-bends",
  //   image: j,
  //   title: "J Bends",
  //   shortDescription:
  //     "Compact U-Turn Pipeline Design for Hygienic Drainage Systems.",
  //   materialGroup: "Bends",
  //   standards:
  //     "SS 304, SS 316L, Electro Polished, Mechanical Polish (320–800 Grit)",

  //   overview:
  //     "Hygienic J bends engineered for compact U-turn pipeline designs in sanitary drainage systems. Manufactured from SS 304 and 316L with polished finishes, our J bends deliver efficient fluid movement, superior cleanability, and excellent corrosion resistance in dairy, food, and pharmaceutical processing.",

  //   grades: ["SS 304", "SS 316L"],

  //   supplyForms: ["J Bends", "U-Bends", "Return Bends", "Tri-Clamp J Bends"],

  //   technicalSpecs: {
  //     standardSpecifications:
  //       "3A Sanitary Standards, DIN 11850, DIN 11851, SMS 3008, ISO 2852",
  //     nominalSize: '1/2" to 4"',
  //     wallThickness: "1.2 mm to 3.0 mm",
  //     surfaceFinish: "Electro Polished, Mechanical Polish (320–800 Grit)",
  //     endConnections: "Tri-Clamp, DIN, SMS, IDF, BSP, NPT",
  //     qualityTesting: "Hydrostatic, PMI, Dye Penetrant, Surface Roughness (Ra)",
  //   },

  //   standardsCompliance: [
  //     "3A Sanitary Standards — Sanitary Fittings for Dairy & Food Processing",
  //     "DIN 11850 — Stainless Steel Tubes for Food & Beverage Industry",
  //     "DIN 11851 — Hygienic Unions for Food & Beverage Industry",
  //     "SMS 3008 — Swedish Milk Standard Union Fittings",
  //     "ISO 2852 — Stainless Steel Clamp Pipe Connections",
  //   ],

  //   manufacturingType: "Seamless / Welded Cold Formed",
  //   pressureRating: "Up to 10 Bar",
  //   temperatureRange: "-20°C to +200°C",
  //   tolerance: "Per 3A / DIN / SMS Standards",
  //   certifications: "EN 10204 3.1 MTC, FDA Compliant, 3A Approved",

  //   industryApplications: [
  //     "Dairy processing and milk handling",
  //     "Food and beverage processing",
  //     "Pharmaceutical and biotech manufacturing",
  //     "Cosmetics processing",
  //     "Brewery and distillery lines",
  //     "Hygienic drainage systems",
  //   ],

  //   forms: "J Bends",
  //   application:
  //     "Hygienic drainage systems requiring efficient fluid movement and easy cleaning",
  // },

  // ============================================
  // 11. TC BENDS
  // ============================================
  // {
  //   id: 11,
  //   slug: "tc-bends",
  //   image: tcc,
  //   title: "TC Bends",
  //   shortDescription:
  //     "Hygienic Directional Change Using Tri-Clamp System with Electro Polished Finish.",
  //   materialGroup: "Bends",
  //   standards:
  //     "SS 304, SS 316L, TC Connections, Electro Polished, Mechanical Polish (320–800 Grit)",

  //   overview:
  //     "Hygienic TC bends engineered for directional change using the tri-clamp system in sanitary process piping. Manufactured from SS 304 and 316L with electro-polished and mechanical-polished finishes, our TC bends deliver excellent corrosion resistance, secure connections, and easy-clean hygienic performance in dairy, food, and pharmaceutical processing.",

  //   grades: ["SS 304", "SS 316L"],

  //   supplyForms: [
  //     "90° TC Bends",
  //     "45° TC Bends",
  //     "180° TC Bends",
  //     "Equal TC Bends",
  //     "Reducing TC Bends",
  //   ],

  //   technicalSpecs: {
  //     standardSpecifications:
  //       "3A Sanitary Standards, ISO 2852, DIN 32676, SMS 3017",
  //     nominalSize: '1/2" to 6"',
  //     wallThickness: "1.2 mm to 3.0 mm",
  //     surfaceFinish: "Electro Polished, Mechanical Polish (320–800 Grit)",
  //     endConnections: "Tri-Clamp (TC)",
  //     qualityTesting: "Hydrostatic, PMI, Dye Penetrant, Surface Roughness (Ra)",
  //   },

  //   standardsCompliance: [
  //     "3A Sanitary Standards — Sanitary Fittings for Dairy & Food Processing",
  //     "ISO 2852 — Stainless Steel Clamp Pipe Connections",
  //     "DIN 32676 — Tri-Clamp Connections for Food & Beverage Industry",
  //     "SMS 3017 — Swedish Milk Standard Clamp Connections",
  //   ],

  //   manufacturingType: "Seamless / Welded Cold Formed",
  //   pressureRating: "Up to 10 Bar",
  //   temperatureRange: "-20°C to +200°C",
  //   tolerance: "Per 3A / ISO 2852 Standards",
  //   certifications: "EN 10204 3.1 MTC, FDA Compliant, 3A Approved",

  //   industryApplications: [
  //     "Dairy processing and milk handling",
  //     "Food and beverage processing",
  //     "Pharmaceutical and biotech manufacturing",
  //     "Cosmetics processing",
  //     "Brewery and distillery lines",
  //     "Sanitary process piping systems",
  //   ],

  //   forms: "Tri-Clamp (TC) Bends",
  //   application:
  //     "Sanitary process piping systems with excellent corrosion resistance and polished finishes",
  // },

  // ============================================
  // 12. SMS UNION
  // ============================================
  // {
  //   id: 12,
  //   slug: "sms-union",
  //   image: sms,
  //   title: "SMS Union",
  //   shortDescription:
  //     "Easy Assembly & Dismantling for Maintenance with SS 304 / 316L Construction.",
  //   materialGroup: "Unions",
  //   standards: "SS 304, SS 316L, SMS Standards",

  //   overview:
  //     "Hygienic SMS unions engineered for easy assembly and dismantling in sanitary piping systems. Manufactured from SS 304 and 316L to SMS standards, our unions deliver quick assembly, secure sealing, and superior cleanability in dairy, food, and pharmaceutical processing applications.",

  //   grades: ["SS 304", "SS 316L"],

  //   supplyForms: [
  //     "SMS Union Fittings",
  //     "SMS Male Stud",
  //     "SMS Female Nut",
  //     "SMS Weld Liner",
  //     "SMS Blank Nut",
  //   ],

  //   technicalSpecs: {
  //     standardSpecifications:
  //       "SMS 3008, 3A Sanitary Standards, DIN 11851, ISO 2852",
  //     nominalSize: '1/2" to 4"',
  //     wallThickness: "1.2 mm to 3.0 mm",
  //     surfaceFinish: "Electro Polished, Mechanical Polish (320–800 Grit)",
  //     endConnections: "SMS Union, Weld End",
  //     qualityTesting: "Hydrostatic, PMI, Dye Penetrant, Surface Roughness (Ra)",
  //   },

  //   standardsCompliance: [
  //     "SMS 3008 — Swedish Milk Standard Union Fittings",
  //     "3A Sanitary Standards — Sanitary Fittings for Dairy & Food Processing",
  //     "DIN 11851 — Hygienic Unions for Food & Beverage Industry",
  //     "ISO 2852 — Stainless Steel Clamp Pipe Connections",
  //   ],

  //   manufacturingType: "Seamless / Welded Cold Formed",
  //   pressureRating: "Up to 10 Bar",
  //   temperatureRange: "-20°C to +200°C",
  //   tolerance: "Per SMS / 3A Standards",
  //   certifications: "EN 10204 3.1 MTC, FDA Compliant, 3A Approved",

  //   industryApplications: [
  //     "Dairy processing and milk handling",
  //     "Food and beverage processing",
  //     "Pharmaceutical and biotech manufacturing",
  //     "Cosmetics processing",
  //     "Brewery and distillery lines",
  //     "Sanitary pipeline assembly",
  //   ],

  //   forms: "SMS Union Fittings",
  //   application:
  //     "Quick assembly, secure sealing, and hygienic pipe connections in dairy and food processing plants",
  // },

  // ============================================
  // 13. SEAMLESS TEES
  // ============================================
  // {
  //   id: 13,
  //   slug: "seamless-tees",
  //   image: seam,
  //   title: "Seamless Tees",
  //   shortDescription:
  //     "Smooth Pipeline Branching with Zero Leakage Using SS 304 / 316L Seamless Construction.",
  //   materialGroup: "Tees",
  //   standards: "SS 304, SS 316L, Seamless Construction",

  //   overview:
  //     "High-purity seamless tees engineered for smooth pipeline branching with zero leakage in sanitary piping systems. Manufactured from SS 304 and 316L with seamless construction, our tees deliver superior strength, reliable performance, and excellent corrosion resistance in dairy, food, and pharmaceutical processing.",

  //   grades: ["SS 304", "SS 316L"],

  //   supplyForms: [
  //     "Equal Seamless Tees",
  //     "Reducing Seamless Tees",
  //     "Tri-Clamp Seamless Tees",
  //     "DIN Seamless Tees",
  //     "SMS Seamless Tees",
  //   ],

  //   technicalSpecs: {
  //     standardSpecifications:
  //       "3A Sanitary Standards, DIN 11850, DIN 11851, SMS 3008, ISO 2852",
  //     nominalSize: '1/2" to 6"',
  //     wallThickness: "1.2 mm to 3.0 mm",
  //     surfaceFinish: "Electro Polished, Mechanical Polish (320–800 Grit)",
  //     endConnections: "Tri-Clamp, DIN, SMS, IDF, BSP, NPT",
  //     qualityTesting: "Hydrostatic, PMI, Dye Penetrant, Surface Roughness (Ra)",
  //   },

  //   standardsCompliance: [
  //     "3A Sanitary Standards — Sanitary Fittings for Dairy & Food Processing",
  //     "DIN 11850 — Stainless Steel Tubes for Food & Beverage Industry",
  //     "DIN 11851 — Hygienic Unions for Food & Beverage Industry",
  //     "SMS 3008 — Swedish Milk Standard Union Fittings",
  //     "ISO 2852 — Stainless Steel Clamp Pipe Connections",
  //   ],

  //   manufacturingType: "Seamless Cold Formed",
  //   pressureRating: "Up to 10 Bar",
  //   temperatureRange: "-20°C to +200°C",
  //   tolerance: "Per 3A / DIN / SMS Standards",
  //   certifications: "EN 10204 3.1 MTC, FDA Compliant, 3A Approved",

  //   industryApplications: [
  //     "Dairy processing and milk handling",
  //     "Food and beverage processing",
  //     "Pharmaceutical and biotech manufacturing",
  //     "Cosmetics processing",
  //     "Brewery and distillery lines",
  //     "High-purity piping systems",
  //   ],

  //   forms: "Seamless Tees",
  //   application:
  //     "High-purity piping systems requiring strength, reliability, and corrosion resistance",
  // },
];

export default dairyfitting;
