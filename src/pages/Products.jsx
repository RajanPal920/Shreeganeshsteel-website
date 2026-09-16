import React, { useState, useEffect, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Footer from "../components/Footer";
import { products, productCategories } from "../data/products";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Read category from URL — defaults to "All"
  const urlCategory = searchParams.get("category") || "All";

  const [activeCategory, setActiveCategory] = useState(urlCategory);
  const [searchQuery, setSearchQuery] = useState("");

  // Sync state when URL changes (e.g. user clicks from Header)
  useEffect(() => {
    setActiveCategory(urlCategory);
  }, [urlCategory]);

  // Update URL when pill is clicked
  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (cat === "All") {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  // Filter products based on category + search
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory =
        activeCategory === "All" || p.category === activeCategory;
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="w-full bg-white">
      {/* ============ HERO BANNER ============ */}
      <section className="relative text-white overflow-hidden min-h-[450px] lg:min-h-[700px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/product.jpeg")',
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1320px] mx-auto px-5 sm:px-8 py-14 sm:py-20">
          <div className="max-w-3xl backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.35)]">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-white/70 font-mono tracking-wider uppercase mb-6">
              <Link to="/" className="hover:text-[#c9a961] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#ad8527] font-bold">Products</span>
              {activeCategory !== "All" && (
                <>
                  <span>/</span>
                  <span className="text-white/90 font-bold">
                    {activeCategory}
                  </span>
                </>
              )}
            </nav>

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.25em] uppercase text-[#ad8527] mb-4">
              <span className="w-8 h-px bg-[#c9a961]" />
              Our Product Range
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold tracking-tight leading-[1.05] mb-5 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              {activeCategory === "All" ? (
                <>
                  Complete Industrial
                  <br />
                  <em className="not-italic text-[#ad8527]">
                    Steel Catalogue.
                  </em>
                </>
              ) : (
                <>
                  {activeCategory}
                  <br />
                  <em className="not-italic text-[#ad8527]">
                    Product Range.
                  </em>
                </>
              )}
            </h1>

            {/* Description */}
            <p className="text-white/90 leading-relaxed mb-8 text-base sm:text-lg">
              {activeCategory === "All"
                ? `Explore our comprehensive range of ${products.length} industrial steel products — engineered for critical applications across oil & gas, petrochemical, pharma, marine and energy sectors.`
                : `Browse our ${activeCategory.toLowerCase()} range — precision-engineered for critical industrial applications worldwide.`}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-x-10 gap-y-4 pt-6 border-t border-white/20">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-none">
                  {filteredProducts.length}
                </div>
                <div className="text-[0.68rem] font-medium tracking-widest uppercase text-[#ad8527] mt-1.5">
                  Products
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-none">
                  {productCategories.length - 1}
                </div>
                <div className="text-[0.68rem] font-medium tracking-widest uppercase text-[#ad8527] mt-1.5">
                  Categories
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-none">
                  40+
                </div>
                <div className="text-[0.68rem] font-medium tracking-widest uppercase text-[#ad8527] mt-1.5">
                  Countries
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FILTERS + SEARCH ============ */}
      <section className="sticky top-[60px] sm:top-[68px] z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 py-4">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
            {/* Category pills */}
            <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0 -mx-5 px-5 lg:mx-0 lg:px-0 scrollbar-hide">
              {productCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-[#0a1628] text-white shadow-md"
                      : "bg-gray-100 text-[#5a6b7d] hover:bg-gray-200 hover:text-[#0a1628]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full lg:w-72 flex-shrink-0">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8896a6] pointer-events-none"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm text-[#0a1628] placeholder:text-[#8896a6] focus:border-[#c9a961] focus:bg-white focus:ring-2 focus:ring-[#c9a961]/15 outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-gray-200 hover:bg-[#c9a961] hover:text-white flex items-center justify-center transition-all"
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Result count */}
          <div className="mt-3 text-xs text-[#8896a6] font-mono tracking-wider uppercase">
            Showing{" "}
            <span className="text-[#c9a961] font-bold">
              {filteredProducts.length}
            </span>{" "}
            {filteredProducts.length === 1 ? "product" : "products"}
            {activeCategory !== "All" && (
              <>
                {" "}
                in{" "}
                <span className="text-[#0a1628] font-bold">
                  {activeCategory}
                </span>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ============ PRODUCTS GRID ============ */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#f7f8fa]">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#c9a961]/10 text-[#c9a961] mb-6">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0a1628] mb-2">
                No products found
              </h3>
              <p className="text-[#5a6b7d] mb-6">
                Try changing your search or filter.
              </p>
              <button
                onClick={() => {
                  handleCategoryChange("All");
                  setSearchQuery("");
                }}
                className="inline-flex items-center gap-2 bg-[#0a1628] hover:bg-[#c9a961] hover:text-[#0a1628] text-white font-bold text-sm px-6 py-3 rounded-lg transition-all"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
              {filteredProducts.map((p, i) => (
                <Link
                  key={p.id}
                  to={`/products/${p.slug}`}
                  className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(10,22,40,0.15)] hover:border-[#c9a961]/50 transition-all duration-500 flex flex-col"
                  style={{
                    animation: `fadeUp 0.5s ease ${i * 0.04}s both`,
                  }}
                >
                  {/* Image */}
                  <div className="relative aspect-[5/4] overflow-hidden bg-gray-100">
                    <span className="absolute top-2.5 left-2.5 z-20 w-7 h-7 rounded-full bg-[#0a1628] text-[#c9a961] text-[0.65rem] font-bold font-mono flex items-center justify-center shadow-lg border border-[#c9a961]/30">
                      {String(p.id).padStart(2, "0")}
                    </span>

                    <span className="absolute top-2.5 right-2.5 z-20 bg-white/95 backdrop-blur-sm text-[#0a1628] text-[0.55rem] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full border border-gray-200">
                      {p.category}
                    </span>

                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />

                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#c9a961] via-[#c9a961] to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                  </div>

                  {/* Content */}
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="text-[0.95rem] sm:text-base font-bold text-[#0a1628] mb-1.5 leading-snug group-hover:text-[#c9a961] transition-colors duration-300">
                      {p.name}
                    </h3>
                    <p className="text-[0.8rem] text-[#5a6b7d] leading-snug mb-3 flex-1 line-clamp-2">
                      {p.desc}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-3">
                      <span className="text-[0.6rem] font-mono tracking-wider uppercase bg-[#f7f8fa] text-[#5a6b7d] px-1.5 py-0.5 rounded border border-gray-100">
                        {p.material}
                      </span>
                      <span className="text-[0.6rem] font-mono tracking-wider uppercase bg-[#f7f8fa] text-[#5a6b7d] px-1.5 py-0.5 rounded border border-gray-100">
                        {p.standards}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-gray-100 group-hover:border-[#c9a961]/30 transition-colors">
                      <span className="text-[0.7rem] font-bold tracking-widest uppercase text-[#0a1628] group-hover:text-[#c9a961] transition-colors">
                        View Details
                      </span>
                      <span className="w-6 h-6 rounded-full bg-[#0a1628] group-hover:bg-[#c9a961] text-white group-hover:text-[#0a1628] flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
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

      {/* ============ BOTTOM CTA ============ */}
      <section className="py-14 sm:py-16 bg-white border-t border-gray-200">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="relative rounded-2xl bg-gradient-to-br from-[#0a1628] via-[#0f1e38] to-[#142b4d] p-8 sm:p-12 text-white text-center overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#c9a961]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#c8102e]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
                Can't find what you're{" "}
                <em className="not-italic text-[#c9a961]">looking for?</em>
              </h3>
              <p className="text-white/70 text-sm sm:text-base max-w-xl mx-auto mb-7">
                We manufacture custom products based on your specific
                requirements. Get in touch with our team for bulk orders and
                custom specifications.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://wa.me/917313726773?text=Hello%20Shree%20Ganesh%20Steel%2C%20I%20have%20a%20custom%20requirement."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#c9a961] hover:bg-[#b89851] text-[#0a1628] font-bold text-sm px-7 py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Send Custom Inquiry
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-[#c9a961] hover:text-[#c9a961] text-white font-semibold text-sm px-7 py-3.5 rounded-lg transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
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

export default Products;