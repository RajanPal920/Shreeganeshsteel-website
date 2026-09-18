// ============================================
// CATEGORIES — Based on productMaterials keys
// ============================================
export const products = [
  // ============================================
  // MANUFACTURER CATEGORIES
  // ============================================
  {
    id: 1,
    slug: "buttweld-fittings",
    name: "Butt Weld Fittings",
    desc: "Seamless & welded elbows, tees, reducers & caps",
    image: "/images/stock/buttweld-fitting.jpg",
    division: "manufacturer",
    longDesc:
      "Seamless & welded butt weld fittings per ASME B16.9 — elbows, tees, reducers, caps, stub ends & return bends. Available in SS 304/316/321, carbon steel & alloy steel.",
    applications: [
      "Pipeline fabrication",
      "Process piping",
      "Refineries",
      "Power plants",
    ],
  },
  {
    id: 2,
    slug: "forged-fittings",
    name: "Forged Fittings",
    desc: "Socketweld & threaded fittings (2000# to 9000#)",
    image: "/images/stock/incoloy-forged-fittings.jpg",
    division: "manufacturer",
    longDesc:
      'High-pressure forged fittings per ASME B16.11 — elbows, tees, unions, couplings, bushings, plugs & nipples. Sizes 1/4" to 4" NB, class 2000# to 9000#.',
    applications: [
      "High-pressure piping",
      "Instrumentation",
      "Hydraulic systems",
      "Small-bore connections",
    ],
  },
  {
    id: 3,
    slug: "flanges",
    name: "Flanges",
    desc: "ANSI, DIN & BS forged industrial flanges",
    image: "/images/stock/hastelloy-alloy-flanges.jpg",
    division: "manufacturer",
    longDesc:
      'Complete range of flanges — Weld Neck, Slip-On, Blind, Socket Weld, Lap Joint, Spectacle, Ring Joint & Orifice. Sizes 1/2" to 40" NB, class 150# to 2500#.',
    applications: [
      "Pipeline connections",
      "Pressure vessels",
      "Heat exchangers",
      "Process equipment",
    ],
  },
  {
    id: 4,
    slug: "fasteners",
    name: "Fasteners",
    desc: "High-tensile stud bolts, nuts & heavy bolting",
    image: "/images/stock/stainless-duplex-steel-fasteners.jpg",
    division: "manufacturer",
    longDesc:
      "Complete range of fasteners — stud bolts, hex bolts, nuts, washers, threaded rods, anchor fasteners & refractory anchors. Available in SS, alloy steel & exotic alloys.",
    applications: [
      "Flanged joints",
      "Structural connections",
      "Heavy machinery",
      "Pressure equipment",
    ],
  },
  {
    id: 5,
    slug: "dairy-fittings",
    name: "Dairy & Pharma Fittings",
    desc: "Hygienic electro-polished TC ferrules & sanitary bends",
    image: "/images/stock/hygienic-dairy-fittings.jpg",
    division: "manufacturer",
    longDesc:
      'Electro-polished dairy & sanitary fittings — bends, tees, crosses, reducers, unions & clamps. Range 1/2" to 12" OD, finish: mirror / matt / electro-polished.',
    applications: [
      "Dairy processing",
      "Pharmaceutical manufacturing",
      "Food & beverage",
      "Bio-pharma",
    ],
  },
  {
    id: 6,
    slug: "hose-pipe",
    name: "Hose Pipes",
    desc: "SS corrugated flexible & wire braided hoses",
    image: "/images/stock/annular-corrugated-hose.jpg",
    division: "manufacturer",
    longDesc:
      "SS corrugated flexible hoses & wire braided hoses for high-pressure & high-temperature applications. Available in SS 304 & SS 316.",
    applications: [
      "Flexible connections",
      "Vibration isolation",
      "High-temperature service",
      "Steam lines",
    ],
  },
  {
    id: 7,
    slug: "wire-mesh",
    name: "Wire Mesh",
    desc: "Woven, welded & crimped filtration screens",
    image: "/images/stock/chain-link-mesh.jpg",
    division: "manufacturer",
    longDesc:
      "Woven, welded & crimped wire mesh for filtration & screening. Available in SS 304 & SS 316 in various mesh sizes.",
    applications: [
      "Filtration",
      "Screening",
      "Chemical processing",
      "Pharmaceutical",
    ],
  },
  {
    id: 8,
    slug: "perforated-sheet",
    name: "Perforated Sheets",
    desc: "Custom punched round, square & slotted sheets",
    image: "/images/stock/galvanized-perforated-sheets.jpg",
    division: "manufacturer",
    longDesc:
      "Custom punched perforated sheets with round, square & slotted holes. Available in SS, MS & other materials.",
    applications: [
      "Filtration",
      "Ventilation",
      "Decorative panels",
      "Industrial screens",
    ],
  },

  // ============================================
  // SUPPLIER CATEGORIES
  // ============================================
  {
    id: 9,
    slug: "pipes-tubes",
    name: "Pipes & Tubes",
    desc: "High-pressure seamless & welded pipes & tubes",
    image: "/images/stock/alloy-20-pipes.jpg",
    division: "supplier",
    longDesc:
      'SS pipes 1/2" to 30", duplex pipes, alloy steel & carbon steel pipes, copper-nickel pipes & SS tubes 6mm–355.60mm OD.',
    applications: [
      "Oil & gas pipelines",
      "Heat exchangers",
      "Boiler tubes",
      "Process piping",
    ],
  },
  {
    id: 10,
    slug: "sheets-plates",
    name: "Sheets & Plates",
    desc: "Heavy engineering plates & cold rolled sheets",
    image: "/images/stock/alloy-28-sheets.jpg",
    division: "supplier",
    longDesc:
      "SS sheets & plates (ASTM A240), alloy steel plates, carbon steel plates, titanium sheets — thickness 0.5mm to 200mm.",
    applications: [
      "Pressure vessels",
      "Heat exchangers",
      "Structural fabrication",
      "Process equipment",
    ],
  },
  {
    id: 11,
    slug: "round-bars",
    name: "Rods & Bars",
    desc: "Precision ground round, hex & square bars",
    image: "/images/stock/bright-bars.jpg",
    division: "supplier",
    longDesc:
      "Bright bars 5mm–350mm, black bars 16mm–350mm, square bars 5mm–250mm, hex bars 5mm–150mm. Available in rolled, forged, annealed & cold-roll conditions.",
    applications: [
      "Machining components",
      "Fastener manufacturing",
      "Valve bodies",
      "Pump shafts",
    ],
  },
  {
    id: 12,
    slug: "wires",
    name: "Wires",
    desc: "High-tensile industrial, spring & welding wires",
    image: "/images/stock/bright-wire.jpg",
    division: "supplier",
    longDesc:
      "High-tensile industrial, spring & welding wires in SS & other materials. Diameter 0.1mm to 5mm.",
    applications: [
      "Welding",
      "Spring manufacturing",
      "Industrial ropes",
      "Fencing",
    ],
  },
  {
    id: 13,
    slug: "circles",
    name: "Circles",
    desc: "Rolled plate circles & forged heavy discs",
    image: "/images/stock/machined-forged-circles.jpg",
    division: "supplier",
    longDesc:
      "Rolled plate circles & forged heavy discs in SS & other materials. Custom diameters available.",
    applications: [
      "Flange blanks",
      "Gasket manufacturing",
      "Pressure plates",
      "Custom components",
    ],
  },
  {
    id: 14,
    slug: "patta-patti",
    name: "Patta Patti",
    desc: "Slit strips & narrow coiled strip stock",
    image: "/images/stock/carbon-steel-flat-bar.jpg",
    division: "supplier",
    longDesc:
      "Slit strips & narrow coiled strip stock in SS 304/316 & other materials. Custom widths available.",
    applications: [
      "Strip processing",
      "Coil-fed operations",
      "Custom fabrication",
      "Continuous lines",
    ],
  },
  {
    id: 15,
    slug: "coils",
    name: "Coils",
    desc: "2B, BA & Mirror finish precision slit coils",
    image: "/images/stock/alloy-28-coils.jpg",
    division: "supplier",
    longDesc:
      "Precision slit coils in 2B, BA & Mirror finishes. Available in SS 304/316 in various widths & thicknesses.",
    applications: [
      "Continuous processing",
      "Coil-fed fabrication",
      "Automotive",
      "Appliances",
    ],
  },
  {
    id: 16,
    slug: "rings",
    name: "Rings",
    desc: "Forged flange rings & lap-joint backing rings",
    image: "/images/stock/duplex-super-duplex-rings.jpg",
    division: "supplier",
    longDesc:
      "Forged flange rings & lap-joint backing rings in SS & alloy steel. Custom sizes available.",
    applications: [
      "Flange assemblies",
      "Lap-joint connections",
      "Pressure equipment",
      "Process piping",
    ],
  },
];

// ============================================
// HELPERS
// ============================================
export const getCategoryBySlug = (slug) =>
  products.find((c) => c.slug === slug);

export const getManufacturerCategories = () =>
  products.filter((c) => c.division === "manufacturer");

export const getSupplierCategories = () =>
  products.filter((c) => c.division === "supplier");
