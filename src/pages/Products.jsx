import React from "react";
import { Link } from "react-router-dom";

import productMaterials from "../data/productMaterials";

// ============================================
// CATEGORY META (name, desc, division)
// ============================================
const categoryMeta = {
  "buttweld-fittings": {
    name: "Butt Weld Fittings",
    desc: "Seamless & welded elbows, tees, reducers & caps per ASME B16.9",
    division: "manufacturer",
  },
  circles: {
    name: "Circles",
    desc: "Rolled plate circles & forged heavy discs",
    division: "supplier",
  },
  coils: {
    name: "Coils",
    desc: "2B, BA & Mirror finish precision slit coils",
    division: "supplier",
  },
  "dairy-fittings": {
    name: "Dairy & Pharma Fittings",
    desc: "Hygienic electro-polished TC ferrules & sanitary bends",
    division: "manufacturer",
  },
  fasteners: {
    name: "Fasteners",
    desc: "High-tensile stud bolts, nuts & heavy bolting",
    division: "manufacturer",
  },
  "ferrule-fittings": {
    name: "Ferrule Fittings",
    desc: "Double ferrule tube fittings, instrumentation & hydraulic lines",
    division: "supplier",
  },
  flanges: {
    name: "Flanges",
    desc: "ANSI, DIN & BS forged industrial flanges",
    division: "manufacturer",
  },
  "forged-fittings": {
    name: "Forged Fittings",
    desc: "Socketweld & threaded fittings (2000# to 9000#)",
    division: "manufacturer",
  },
  "hose-pipe": {
    name: "Hose Pipes",
    desc: "SS corrugated flexible & wire braided hoses",
    division: "manufacturer",
  },
  "patta-patti": {
    name: "Patta Patti",
    desc: "Slit strips & narrow coiled strip stock",
    division: "supplier",
  },
  "perforated-sheet": {
    name: "Perforated Sheets",
    desc: "Custom punched round, square & slotted sheets",
    division: "manufacturer",
  },
  "pipes-tubes": {
    name: "Pipes & Tubes",
    desc: "High-pressure seamless & welded pipes & tubes",
    division: "supplier",
  },
  rings: {
    name: "Rings",
    desc: "Forged flange rings & lap-joint backing rings",
    division: "supplier",
  },
  "round-bars": {
    name: "Rods & Bars",
    desc: "Precision ground round, hex & square bars",
    division: "supplier",
  },
  "sheets-plates": {
    name: "Sheets & Plates",
    desc: "Heavy engineering plates & cold rolled sheets",
    division: "supplier",
  },
  "wire-mesh": {
    name: "Wire Mesh",
    desc: "Woven, welded & crimped filtration screens",
    division: "manufacturer",
  },
  wires: {
    name: "Wires",
    desc: "High-tensile industrial, spring & welding wires",
    division: "supplier",
  },
};

// ============================================
// BUILD CATEGORIES
// ============================================
const allCategories = Object.entries(productMaterials).map(
  ([slug, items], i) => {
    const meta = categoryMeta[slug] || {
      name: slug
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" "),
      desc: "Industrial steel product",
      division: "manufacturer",
    };

    // Count sub-products
    const count = Array.isArray(items) ? items.length : 1;

    // Use first sub-product's image as category image
    const image = Array.isArray(items) && items[0]?.image ? items[0].image : "";

    return {
      id: i + 1,
      slug,
      image,
      count,
      ...meta,
    };
  },
);

const Products = () => {
  const manufacturerCategories = allCategories.filter(
    (c) => c.division === "manufacturer",
  );
  const supplierCategories = allCategories.filter(
    (c) => c.division === "supplier",
  );

  return (
    <div className="w-full bg-white">
      {/* ==========================================
          HERO
         ========================================== */}
      <section className="relative text-white overflow-hidden min-h-[400px] lg:min-h-[550px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/images/product.jpeg")' }}
        />

        <div className="relative z-10 w-full max-w-[1320px] mx-auto px-5 sm:px-8 py-14 sm:py-20">
          <div className="max-w-3xl backdrop-blur-s bg-[#0B3E8C]/40 border border-white/70 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[0_25px_60px_rgba(11,62,140,0.35)]">
            <nav className="flex items-center gap-2 text-xs text-white/70 font-mono tracking-wider uppercase mb-6">
              <Link to="/" className="hover:text-[#4A9EFF] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#E63946] font-bold">Products</span>
            </nav>

            <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.25em] uppercase text-[#E63946] mb-4">
              <span className="w-8 h-px bg-[#E63946]" />
              Our Product Range
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold tracking-tight leading-[1.05] mb-5 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              Complete Industrial
              <br />
              <em className="not-italic text-[#E63946]">Steel Catalogue.</em>
            </h1>

            <p className="text-white leading-relaxed mb-8 text-base sm:text-lg">
              Explore our {allCategories.length} categories across manufacturer
              & supplier divisions. Click any category to explore its products.
            </p>

            <div className="flex flex-wrap gap-x-10 gap-y-4 pt-6 border-t border-white/20">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-none">
                  {allCategories.length}
                </div>
                <div className="text-[0.68rem] font-bold tracking-widest uppercase text-[#f7f7f7] mt-1.5">
                  Categories
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-none">
                  {manufacturerCategories.length}
                </div>
                <div className="text-[0.68rem] font-bold tracking-widest uppercase text-[#E63946] mt-1.5">
                  Manufactured
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-none">
                  {supplierCategories.length}
                </div>
                <div className="text-[0.68rem] font-bold tracking-widest uppercase text-[#f8f9fa] mt-1.5">
                  Sourced
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          MANUFACTURER DIVISION
         ========================================== */}
      {manufacturerCategories.length > 0 && (
        <section className="py-16 sm:py-20 lg:py-24 bg-[#f7f8fa]">
          <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
            <div className="mb-10">
              <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase text-[#C8102E] mb-3">
                <span className="w-6 h-px bg-[#C8102E]" />
                Our Products Range
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B3E8C] tracking-tight leading-tight">
                Manufactured
                <span className="text-[#C8102E]"> In-House.</span>
              </h2>
            </div>

            {/* ✅ FIXED GRID — items-stretch for equal heights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 items-stretch">
              {manufacturerCategories.map((cat, i) => (
                <CategoryCard key={cat.id} cat={cat} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ==========================================
          SUPPLIER DIVISION
         ========================================== */}
      {supplierCategories.length > 0 && (
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
            <div className="mb-10">
              <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase text-[#1E6FD9] mb-3">
                <span className="w-6 h-px bg-[#1E6FD9]" />
                Our Products Range
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B3E8C] tracking-tight leading-tight">
                Sourced From
                <span className="text-[#1E6FD9]"> Trusted Partners.</span>
              </h2>
            </div>

            {/* ✅ FIXED GRID — items-stretch for equal heights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 items-stretch">
              {supplierCategories.map((cat, i) => (
                <CategoryCard key={cat.id} cat={cat} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

     

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

// ============================================
// CATEGORY CARD — HOVER OVERLAY REMOVED
// ============================================
const CategoryCard = ({ cat, index }) => {
  const isManufacturer = cat.division === "manufacturer";

  return (
    <Link
      to={`/categories/${cat.slug}`}
      className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(11,62,140,0.15)] transition-all duration-500 flex flex-col h-full"
      style={{ animation: `fadeUp 0.5s ease ${index * 0.04}s both` }}
    >
      {/* Image — fixed aspect ratio */}
      <div className="relative aspect-[5/4] overflow-hidden bg-gray-100 flex-shrink-0">
        <span
          className={`absolute top-3 left-3 z-20 px-3 py-1 rounded-full text-white text-[0.6rem] font-bold tracking-widest uppercase shadow-lg ${
            isManufacturer ? "bg-[#C8102E]" : "bg-[#1E6FD9]"
          }`}
        >
          {cat.division}
        </span>

        <img
          src={cat.image}
          alt={cat.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />

        {/* ❌ Hover gradient overlay — REMOVED */}
        {/* ❌ Bottom accent line — REMOVED */}
      </div>

      {/* Content — flex-1 to fill remaining space */}
      <div className="p-5 flex flex-col flex-1">
        <h3
          className={`text-lg font-bold mb-2 leading-snug transition-colors duration-300 text-[#0B3E8C] ${
            isManufacturer
              ? "group-hover:text-[#C8102E]"
              : "group-hover:text-[#1E6FD9]"
          }`}
        >
          {cat.name}
        </h3>
        <p className="text-sm text-[#5a6b7d] leading-relaxed mb-4 flex-1 line-clamp-2">
          {cat.desc}
        </p>

        {/* CTA — stuck to bottom */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
          <span
            className={`text-[0.7rem] font-bold tracking-widest uppercase text-[#0B3E8C] ${
              isManufacturer
                ? "group-hover:text-[#C8102E]"
                : "group-hover:text-[#1E6FD9]"
            }`}
          >
            {cat.count} {cat.count === 1 ? "Product" : "Products"}
          </span>
          <span
            className={`w-7 h-7 rounded-full text-white flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 ${
              isManufacturer
                ? "bg-[#0B3E8C] group-hover:bg-[#C8102E]"
                : "bg-[#0B3E8C] group-hover:bg-[#1E6FD9]"
            }`}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Products;
