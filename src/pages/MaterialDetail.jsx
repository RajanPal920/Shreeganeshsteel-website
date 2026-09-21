import React from "react";
import { useParams, Link } from "react-router-dom";
import { getMaterialBySlug } from "../data/materials";
import productMaterials from "../data/productMaterials";

// ============================================
// FLATTEN ALL PRODUCTS
// ============================================
const getAllProducts = () => {
  const allProducts = [];
  for (const [categorySlug, items] of Object.entries(productMaterials)) {
    if (Array.isArray(items)) {
      items.forEach((product) => {
        allProducts.push({
          ...product,
          categorySlug,
        });
      });
    }
  }
  return allProducts;
};

// ============================================
// MATERIAL → KEYWORDS MAP (strict)
// ============================================
// ============================================
// MATERIAL SLUG → EXACT materialGroup MATCH
// (strict — no partial matching)
// ============================================
const materialKeywords = {
  "stainless-steel": ["Stainless Steel"],
  carbon: ["Carbon"],
  "alloy-steel": ["Alloy Steel"],
  duplex: ["Duplex"],
  "super-duplex": ["Super Duplex"],
  nickel: ["Nickel"],
  "high-alloys": ["High Alloys"],
  titanium: ["Titanium"],
  alloys: ["Alloys"],
};

// ============================================
// MATERIAL DETAIL PAGE
// ============================================
export default function MaterialDetail() {
  const { slug } = useParams();
  const material = getMaterialBySlug(slug);

  if (!material) {
    return (
      <div className="w-full">
        <div className="min-h-[60vh] flex items-center justify-center px-5">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#0B3E8C] mb-4">
              Material Not Found
            </h1>
            <Link
              to="/materials"
              className="inline-flex items-center gap-2 bg-[#0B3E8C] hover:bg-[#C8102E] text-white font-bold text-sm px-7 py-3.5 rounded-lg transition-all"
            >
              ← Back to Materials
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // ✅ Get all products
  const allProducts = getAllProducts();

  // ✅ EXACT MATCH — sirf wahi products jinka materialGroup exact match kare
  const keywords = materialKeywords[material.slug] || [material.name];

  const displayProducts = allProducts.filter((p) => {
    const materialGroup = (p.materialGroup || "").trim().toLowerCase();
    return keywords.some((kw) => materialGroup === kw.trim().toLowerCase());
  });

  return (
    <div className="w-full bg-white">
      {/* ==========================================
    HERO
   ========================================== */}
      <section className="relative text-white overflow-hidden">
        <div className="relative min-h-[500px] sm:min-h-[550px] lg:min-h-[620px] flex items-center overflow-hidden">
          {/* ✅ Background Image — clear, no heavy overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("/images/products/hero-product.jpg")',
            }}
          />

          {/* ✅ Very subtle gradient — text readable but image clear */}

          {/* Decorative blurs */}
          <div className="absolute -top-40 -right-40 w-[500px] h-[480px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[480px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

          {/* Content — centered */}
          <div className="relative z-10 w-full max-w-[1320px] mx-auto px-5 sm:px-8 py-16 sm:py-20">
            {/* ✅ GLASS CARD */}
            <div className="max-w-2xl mx-auto text-center backdrop-blur-s bg-[#0B3E8C]/40 border border-white/20 rounded-2xl sm:rounded-3xl px-5 sm:px-8 lg:px-10 py-7 sm:py-8 shadow-[0_25px_60px_rgba(0,0,0,0.35)]">
              {/* Breadcrumb */}
              <nav className="flex items-center justify-center gap-2 text-xs text-white/80 font-mono tracking-wider uppercase mb-6 flex-wrap">
                <Link to="/" className="hover:text-[#E63946] transition-colors">
                  Home
                </Link>
                <span>/</span>
                <Link
                  to="/materials"
                  className="hover:text-[#E63946] transition-colors"
                >
                  Materials
                </Link>
                <span>/</span>
                <span className="text-white font-bold">{material.name}</span>
              </nav>

              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.25em] uppercase text-[#4A9EFF] mb-5">
                <span className="w-8 h-px bg-white" />
                Material · {material.number}
                <span className="w-8 h-px bg-white" />
              </div>

              {/* Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold tracking-tight leading-[1.05] mb-5">
                {material.name}
                <br />
                <em className="not-italic text-[#E63946]">Product Range.</em>
              </h1>

              {/* Description */}
              <p className="text-white leading-relaxed max-w-2xl mx-auto text-base sm:text-lg mb-6">
                {material.longDesc}
              </p>

              {/* Grades */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {material.grades.map((g, i) => (
                  <span
                    key={i}
                    className="text-[0.7rem] font-mono tracking-wider uppercase bg-white/10 border border-white/20 px-3 py-1.5 rounded-full text-white font-bold"
                  >
                    {g}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 pt-6 border-t border-white/20 max-w-md mx-auto">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-none">
                    {displayProducts.length}
                  </div>
                  <div className="text-[0.68rem] font-medium tracking-widest uppercase text-[#E63946] mt-1.5">
                    Products Available
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-none">
                    {material.grades.length}
                  </div>
                  <div className="text-[0.68rem] font-medium tracking-widest uppercase text-[#4A9EFF] mt-1.5">
                    Grades
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          PRODUCTS GRID
         ========================================== */}
      <section className="py-16 sm:py-20 bg-[#f7f8fa]">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase text-[#C8102E] mb-3">
              <span className="w-6 h-px bg-[#C8102E]" />
              Materails
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B3E8C] tracking-tight">
              {material.name} <span className="text-[#C8102E]">Products.</span>
            </h2>
            <p className="text-sm text-[#5a6b7d] mt-2">
              {displayProducts.length}{" "}
              {displayProducts.length === 1 ? "product" : "products"} available
              in {material.name}
            </p>
          </div>

          {displayProducts.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-gray-200">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#C8102E]/10 text-[#C8102E] mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0B3E8C] mb-2">
                No products found for {material.name}
              </h3>
              <p className="text-[#5a6b7d] mb-6">
                We're updating this catalog. Browse all products or contact us
                for specific requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2 bg-[#0B3E8C] hover:bg-[#C8102E] text-white font-bold text-sm px-7 py-3.5 rounded-lg transition-all"
                >
                  View All Products →
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#0B3E8C]/15 hover:border-[#C8102E] hover:text-[#C8102E] text-[#0B3E8C] font-semibold text-sm px-7 py-3.5 rounded-lg transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
              {displayProducts.map((p, i) => (
                <Link
                  key={p.id || p.slug || i}
                  to={`/products/${p.slug}`}
                  className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(11,62,140,0.15)] hover:border-[#1E6FD9]/50 transition-all duration-500 flex flex-col"
                  style={{ animation: `fadeUp 0.5s ease ${i * 0.04}s both` }}
                >
                  <div className="relative aspect-[5/4] overflow-hidden bg-gray-100">
                    <span className="absolute top-2.5 left-2.5 z-20 w-7 h-7 rounded-full bg-[#C8102E] text-white text-[0.65rem] font-bold font-mono flex items-center justify-center shadow-lg border border-white/30">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {p.materialGroup && (
                      <span className="absolute top-2.5 right-2.5 z-20 bg-white/95 backdrop-blur-sm text-[#0B3E8C] text-[0.55rem] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full border border-gray-200 max-w-[100px] truncate">
                        {p.materialGroup}
                      </span>
                    )}

                    <img
                      src={p.image || "/images/products/hero-product.jpg"}
                      alt={p.title || p.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.target.src = "/images/products/hero-product.jpg";
                      }}
                    />

                    <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#C8102E] via-[#1E6FD9] to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-base font-bold text-[#0B3E8C] mb-2 group-hover:text-[#C8102E] transition-colors leading-snug">
                      {p.title || p.name}
                    </h3>
                    <p className="text-sm text-[#5a6b7d] line-clamp-2 mb-4 flex-1 leading-relaxed">
                      {p.shortDescription || p.desc}
                    </p>

                    {p.standards && (
                      <div className="flex flex-wrap gap-1 mb-3">
                        <span className="text-[0.6rem] font-mono tracking-wider uppercase bg-[#f7f8fa] text-[#0B3E8C] px-2 py-0.5 rounded border border-gray-200 line-clamp-1">
                          {p.standards.split(",")[0]}
                        </span>
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <span className="text-[0.7rem] font-bold tracking-widest uppercase text-[#0B3E8C] group-hover:text-[#C8102E] transition-colors">
                        View Details
                      </span>
                      <span className="w-7 h-7 rounded-full bg-[#0B3E8C] group-hover:bg-[#C8102E] text-white flex items-center justify-center transition-all group-hover:translate-x-1">
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
}
