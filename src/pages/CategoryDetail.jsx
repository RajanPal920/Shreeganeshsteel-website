import React from "react";
import { useParams, Link } from "react-router-dom";
;
import productMaterials from "../data/productMaterials";
import heroImage from "../../public/images/products/hero-product.jpg";

// ============================================
// CATEGORY META
// ============================================
export const categoryMeta = {
  "buttweld-fittings": {
    name: "Butt Weld Fittings",
    desc: "Seamless & welded elbows, tees, reducers & caps per ASME B16.9",
    division: "manufacturer",
    image: "/images/buttweld-fitting.jpg",
  },
  circles: {
    name: "Circles",
    desc: "Rolled plate circles & forged heavy discs",
    division: "supplier",
    image: "/images/stock/ss-circle.jpg",
  },
  coils: {
    name: "Coils",
    desc: "2B, BA & Mirror finish precision slit coils",
    division: "supplier",
    image: "/images/coil.jpg",
  },
  "dairy-fittings": {
    name: "Dairy & Pharma Fittings",
    desc: "Hygienic electro-polished TC ferrules & sanitary bends",
    division: "manufacturer",
    image: "/images/stock/dairy-fitting.jpg",
  },
  fasteners: {
    name: "Fasteners",
    desc: "High-tensile stud bolts, nuts & heavy bolting",
    division: "manufacturer",
    image: "/images/stock/fasteners.jpg",
  },
  "ferrule-fitting": {
    name: "Ferrule Fittings",
    desc: "Double ferrule tube fittings, instrumentation & hydraulic lines",
    division: "manufacturer",
    image: "/images/stock/super-duplex-2507-double-ferrule-tube-fittings.jpg",
  },
  flanges: {
    name: "Flanges",
    desc: "ANSI, DIN & BS forged industrial flanges",
    division: "manufacturer",
    image: "/images/stock/steel-flanges-types.jpg",
  },
  "forged-fittings": {
    name: "Forged Fittings",
    desc: "Socketweld & threaded fittings (2000# to 9000#)",
    division: "manufacturer",
    image: "/images/stock/forged-fittings.jpg",
  },
  "hose-pipe": {
    name: "Hose Pipes",
    desc: "SS corrugated flexible & wire braided hoses",
    division: "manufacturer",
    image: "/images/stock/hose-pipe.jpg",
  },
  "patta-patti": {
    name: "Patta Patti",
    desc: "Slit strips & narrow coiled strip stock",
    division: "supplier",
    image: "/images/stock/patta-patti.jpg",
  },
  "perforated-sheet": {
    name: "Perforated Sheets",
    desc: "Custom punched round, square & slotted sheets",
    division: "manufacturer",
    image: "/images/stock/perforated-sheets.jpg",
  },
  "pipes-tubes": {
    name: "Pipes & Tubes",
    desc: "High-pressure seamless & welded pipes & tubes",
    division: "supplier",
    image: "/images/pipes.jpg",
  },
  rings: {
    name: "Rings",
    desc: "Forged flange rings & lap-joint backing rings",
    division: "supplier",
    image: "/images/stock/rings.jpg",
  },
  "round-bars": {
    name: "Rods & Bars",
    desc: "Precision ground round, hex & square bars",
    division: "supplier",
    image: "/images/stock/steel-bars.jpg",
  },
  "sheets-plates": {
    name: "Sheets & Plates",
    desc: "Heavy engineering plates & cold rolled sheets",
    division: "supplier",
    image: "/images/stock/ss-sheets-plates.jpg",
  },
  "wire-mesh": {
    name: "Wire Mesh",
    desc: "Woven, welded & crimped filtration screens",
    division: "manufacturer",
    image: "/images/stock/wire-mesh.jpg",
  },
  wires: {
    name: "Wires",
    desc: "High-tensile industrial, spring & welding wires",
    division: "supplier",
    image: "/images/stock/wires.jpg",
  },
};

// ============================================
// CATEGORY DETAIL PAGE
// ============================================
const CategoryDetail = () => {
  const { slug } = useParams();

  // ✅ Normalize slug
  let normalizedSlug = slug;

  if (categoryMeta[slug] && productMaterials[slug]) {
    normalizedSlug = slug;
  } else if (categoryMeta[`${slug}s`] && productMaterials[`${slug}s`]) {
    normalizedSlug = `${slug}s`;
  } else if (
    slug.endsWith("s") &&
    categoryMeta[slug.slice(0, -1)] &&
    productMaterials[slug.slice(0, -1)]
  ) {
    normalizedSlug = slug.slice(0, -1);
  }

  const meta = categoryMeta[normalizedSlug];
  const items = productMaterials[normalizedSlug];

  // Not found
  if (!meta || !items) {
    return (
      <div className="w-full">
        <div className="min-h-[60vh] flex items-center justify-center px-5">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#0B3E8C] mb-4">
              Category Not Found
            </h1>
            <p className="text-[#5a6b7d] mb-8">
              The category you're looking for doesn't exist.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-[#C8102E] hover:bg-[#0B3E8C] text-white font-bold text-sm px-7 py-3.5 rounded-lg transition-all"
            >
              ← Back to Products
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const isManufacturer = meta.division === "manufacturer";
  const subProducts = Array.isArray(items) ? items : [];

  // ✅ Theme gradients
  const themeGradient = isManufacturer
    ? "from-[#C8102E] via-[#E63946] to-transparent"
    : "from-[#1E6FD9] via-[#4A9EFF] to-transparent";
  const themeTextClass = isManufacturer ? "text-[#C8102E]" : "text-[#1E6FD9]";

  return (
    <div className="w-full bg-white">
      {/* HERO */}
      <section className="relative text-white overflow-hidden min-h-[420px] lg:min-h-[460px] xl:min-h-[480px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />

        <div className="relative z-10 w-full max-w-[1320px] mx-auto px-5 sm:px-8 py-14 sm:py-20 lg:py-24">
          <div className="max-w-3xl backdrop-blur-xl bg-[#0B3E8C]/40 border border-white/55 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 ">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-white font-bold tracking-wider uppercase mb-6 flex-wrap">
              <Link to="/" className="hover:text-[#C8102E] transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link
                to="/products"
                className="hover:text-[#C8102E] transition-colors"
              >
                Products
              </Link>
              <span>/</span>
              <span className="font-bold text-[#E63946]">{meta.name}</span>
            </nav>

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.25em] uppercase text-white mb-4">
              <span className="w-8 h-px bg-[#E63946]" />
              {meta.division} Division
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold tracking-tight leading-[1.05] mb-5 text-white">
              {meta.name}
              <br />
              <em className="not-italic text-[#E63946]">Products.</em>
            </h1>

            {/* Description */}
            <p className="text-white font-bold leading-relaxed mb-8 text-base sm:text-lg">
              {meta.desc}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-x-10 gap-y-4 pt-6 border-t border-white/20">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-none">
                  {subProducts.length}
                </div>
                <div className="text-[0.70rem] font-medium tracking-widest uppercase text-white mt-1.5">
                  Products
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-none capitalize">
                  {meta.division}
                </div>
                <div className="text-[0.70rem] font-medium tracking-widest uppercase text-white mt-1.5">
                  Division
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUB-PRODUCTS GRID */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#f7f8fa]">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="mb-10">
            <div
              className={`inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase mb-3 ${themeTextClass}`}
            >
              <span
                className={`w-6 h-px ${
                  isManufacturer ? "bg-[#C8102E]" : "bg-[#1E6FD9]"
                }`}
              />
              {subProducts.length} Products Available
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3E8C] tracking-tight">
              {meta.name} <span className={themeTextClass}>Range.</span>
            </h2>
          </div>

          {subProducts.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-gray-200">
              <p className="text-[#5a6b7d] mb-4">
                No products available in this category yet.
              </p>
              <Link
                to="/products"
                className="inline-block text-sm font-bold uppercase tracking-widest text-[#C8102E]"
              >
                ← View All Products
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
              {subProducts.map((p, i) => (
                <Link
                  key={p.slug || i}
                  to={`/products/${p.slug}`}
                  className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(200,16,46,0.15)] hover:border-[#C8102E]/50 transition-all duration-500 flex flex-col"
                  style={{ animation: `fadeUp 0.5s ease ${i * 0.04}s both` }}
                >
                  <div className="relative aspect-[5/4] overflow-hidden bg-gray-100">
                    {/* Number badge — red */}
                    <span className="absolute top-2.5 left-2.5 z-20 w-7 h-7 rounded-full text-white text-[0.65rem] font-bold font-medium flex items-center justify-center shadow-lg border border-white/30 bg-[#C8102E]">
                      {String(p.id || i + 1).padStart(2, "0")}
                    </span>

                    {p.materialGroup && (
                      <span className="absolute top-2.5 right-2.5 z-20 bg-white/95 backdrop-blur-sm text-[#0B3E8C] text-[0.55rem] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full border border-gray-200">
                        {p.materialGroup}
                      </span>
                    )}

                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />

                    {/* Bottom accent — red gradient */}
                    <span className="absolute bottom-0 left-0 w-full h-1 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-[#C8102E] via-[#E63946] to-transparent" />
                  </div>

                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="text-[0.95rem] sm:text-base font-bold mb-1.5 leading-snug transition-colors duration-300 text-[#0B3E8C] group-hover:text-[#C8102E]">
                      {p.title}
                    </h3>
                    <p className="text-[0.8rem] text-[#5a6b7d] leading-snug mb-3 flex-1 line-clamp-2">
                      {p.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {p.standards && (
                        <span className="text-[0.6rem] font-mono tracking-wider uppercase bg-[#C8102E]/5 text-[#C8102E] px-1.5 py-0.5 rounded border border-[#C8102E]/20 line-clamp-1">
                          {p.standards.split(",")[0]}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <span className="text-[0.7rem] font-bold tracking-widest uppercase transition-colors text-[#0B3E8C] group-hover:text-[#C8102E]">
                        View Details
                      </span>
                      <span className="w-6 h-6 rounded-full text-white flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 bg-[#0B3E8C] group-hover:bg-[#C8102E]">
                        <svg
                          width="11"
                          height="11"
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
              ))}
            </div>
          )}

          {/* Back */}
          <div className="mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-[#C8102E] hover:bg-[#0B3E8C] text-white font-bold text-sm px-7 py-3.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl group"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:-translate-x-1 transition-transform"
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              Back to All Categories
            </Link>
          </div>
        </div>
      </section>

  

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
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

export default CategoryDetail;
