import React from "react";
import { useParams, Link } from "react-router-dom";

import productMaterials from "../data/productMaterials";

// ============================================
// FIND SUB-PRODUCT ACROSS ALL CATEGORIES
// ============================================
const findProductBySlug = (slug) => {
  for (const [categorySlug, items] of Object.entries(productMaterials)) {
    if (Array.isArray(items)) {
      const found = items.find((p) => p.slug === slug);
      if (found) {
        return { product: found, categorySlug };
      }
    }
  }
  return null;
};

// ============================================
// CATEGORY META
// ============================================
const categoryMeta = {
  "buttweld-fittings": {
    name: "Butt Weld Fittings",
    division: "manufacturer",
    image: "/images/categories/butt-weld-fittings.jpg",
  },
  circles: {
    name: "Circles",
    division: "supplier",
    image: "/images/categories/circle.jpg",
  },
  coils: {
    name: "Coils",
    division: "supplier",
    image: "/images/categories/quile-coil.jpg",
  },
  "dairy-fittings": {
    name: "Dairy & Pharma Fittings",
    division: "manufacturer",
    image: "/images/categories/dairy-pharma-fittings.jpg",
  },
  fasteners: {
    name: "Fasteners",
    division: "manufacturer",
    image: "/images/categories/fasteners.jpg",
  },
  "ferrule-fittings": {
    name: "Ferrule Fittings",
    division: "supplier",
    image: "/images/categories/ferrule-fittings.jpg",
  },
  flanges: {
    name: "Flanges",
    division: "manufacturer",
    image: "/images/categories/ss-flanges.jpg",
  },
  "forged-fittings": {
    name: "Forged Fittings",
    division: "manufacturer",
    image: "/images/categories/forged-fittings.jpg",
  },
  "hose-pipe": {
    name: "Hose Pipes",
    division: "manufacturer",
    image: "/images/categories/hose-pipes.jpg",
  },
  "patta-patti": {
    name: "Patta Patti",
    division: "supplier",
    image: "/images/categories/patapatti.jpg",
  },
  "perforated-sheet": {
    name: "Perforated Sheets",
    division: "manufacturer",
    image: "/images/categories/perforated-sheets.jpg",
  },
  "pipes-tubes": {
    name: "Pipes & Tubes",
    division: "supplier",
    image: "/images/categories/hdpe-pipe-fittings.jpg",
  },
  rings: {
    name: "Rings",
    division: "supplier",
    image: "/images/categories/ring.jpg",
  },
  "round-bars": {
    name: "Rods & Bars",
    division: "supplier",
    image: "/images/categories/steel-bars.jpg",
  },
  "sheets-plates": {
    name: "Sheets & Plates",
    division: "supplier",
    image: "/images/categories/sheets-plates.jpg",
  },
  "wire-mesh": {
    name: "Wire Mesh",
    division: "manufacturer",
    image: "/images/categories/wire-mesh.jpg",
  },
  wires: {
    name: "Wires",
    division: "supplier",
    image: "/images/categories/wires.jpg",
  },
};

// ============================================
// EXTRACT MATERIAL KEYWORD
// ============================================
const extractMaterialKeyword = (product) => {
  const source =
    `${product.materialGroup || ""} ${product.title || ""}`.toLowerCase();

  const keywords = [
    "stainless",
    "duplex",
    "super duplex",
    "carbon",
    "alloy",
    "hastelloy",
    "incoloy",
    "inconel",
    "monel",
    "nickel",
    "copper",
    "titanium",
    "tantalum",
    "brass",
    "aluminium",
    "aluminum",
  ];

  for (const kw of keywords) {
    if (source.includes(kw)) return kw;
  }

  return null;
};

// ============================================
// SPEC ROW COMPONENT
// ============================================
const SpecRow = ({ label, value }) => {
  if (!value || (Array.isArray(value) && value.length === 0)) return null;
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4 text-sm py-2 border-b border-gray-100 last:border-0">
      <span className="text-[#8896a6] font-medium flex-shrink-0">{label}</span>
      <span className="font-semibold text-[#0B3E8C] sm:text-right">
        {Array.isArray(value) ? value.join(", ") : value}
      </span>
    </div>
  );
};

// ============================================
// PRODUCT DETAIL PAGE
// ============================================
export default function ProductDetail() {
  const { slug } = useParams();

  const result = findProductBySlug(slug);

  // Not found
  if (!result) {
    return (
      <div className="w-full">
        <div className="min-h-[60vh] flex items-center justify-center px-5">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#0B3E8C] mb-4">
              Product Not Found
            </h1>
            <p className="text-[#5a6b7d] mb-8">
              The product you're looking for doesn't exist.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-[#0B3E8C] hover:bg-[#C8102E] text-white font-bold text-sm px-7 py-3.5 rounded-lg transition-all"
            >
              ← Back to Products
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const { product, categorySlug } = result;
  const categoryInfo = categoryMeta[categorySlug] || {
    name: categorySlug.replace(/-/g, " "),
    division: "manufacturer",
  };

  const isManufacturer = categoryInfo.division === "manufacturer";

  const materialKeyword = extractMaterialKeyword(product);

  const sameCategoryProducts = (productMaterials[categorySlug] || []).filter(
    (p) => p.slug !== product.slug,
  );

  let relatedProducts = [];
  if (materialKeyword) {
    relatedProducts = sameCategoryProducts.filter((p) => {
      const pKeyword = extractMaterialKeyword(p);
      return pKeyword === materialKeyword;
    });
  }

  const displayRelated =
    relatedProducts.length > 0 ? relatedProducts : sameCategoryProducts;

  // ✅ LIMIT TO 4 RELATED PRODUCTS
  const limitedRelated = displayRelated.slice(0, 4);

  const relatedLabel = materialKeyword
    ? `${materialKeyword
        .split(" ")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ")} Products`
    : categoryInfo.name;

  // ✅ Check if product has extended data
  const hasExtendedData =
    product.overview ||
    product.grades ||
    product.supplyForms ||
    product.technicalSpecs ||
    product.standardsCompliance ||
    product.industryApplications;

  return (
    <div className="w-full bg-white">
      {/* Breadcrumb */}
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 pt-8">
        <nav className="flex items-center gap-2 text-xs text-[#8896a6] font-medium tracking-wider uppercase flex-wrap">
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
          <Link
            to={`/categories/${categorySlug}`}
            className="hover:text-[#C8102E] transition-colors capitalize"
          >
            {categoryInfo.name}
          </Link>
          <span>/</span>
          <span className="text-[#0B3E8C] font-bold truncate max-w-[200px]">
            {product.title}
          </span>
        </nav>
      </div>

      {/* Product Content */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(200,16,46,0.15)] border-2 border-[#C8102E]/20 bg-[#f7f8fa]">
              <img
                src={
                  product.image ||
                  categoryInfo.image ||
                  "/images/products/hero-product.jpg"
                }
                alt={product.title || "Product"}
                className="w-full aspect-[4/3] object-cover"
                onError={(e) => {
                  if (
                    e.target.src !==
                    window.location.origin + "/images/products/hero-product.jpg"
                  ) {
                    e.target.src = "/images/products/hero-product.jpg";
                  } else {
                    e.target.style.display = "none";
                  }
                }}
              />
              {/* Product Number Badge */}
              <span className="absolute top-4 left-4 z-20 bg-[#C8102E] text-white text-xs font-bold font-medium tracking-widest uppercase px-3 py-1.5 rounded-lg shadow-lg">
                {product.materialGroup}
              </span>
            </div>

            {/* Details */}
            <div>
              <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase mb-4 text-[#C8102E]">
                <span className="w-6 h-px bg-[#C8102E]" />
                {product.materialGroup}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B3E8C] tracking-tight leading-tight mb-6">
                {product.title}
              </h1>

              {/* Red underline accent */}
              <div className="w-20 h-1 bg-gradient-to-r from-[#C8102E] to-[#E63946] rounded-full mb-6" />

              <p className="text-[#5a6b7d] leading-relaxed mb-8 text-base sm:text-lg">
                {product.shortDescription}
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/917021519829?text=${encodeURIComponent(
                    `Hello Shree Ganesh Steel, I would like to inquire about: ${product.title}`,
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-white font-bold text-sm px-7 py-3.5 rounded-lg transition-all duration-300 bg-[#C8102E] hover:bg-[#0B3E8C] shadow-[0_10px_30px_rgba(200,16,46,0.3)] hover:shadow-[0_15px_40px_rgba(11,62,140,0.4)] hover:-translate-y-0.5"
                >
                  Send Inquiry
                </a>
                <Link
                  to={`/categories/${categorySlug}`}
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#C8102E]/20 hover:border-[#C8102E] hover:text-[#C8102E] text-[#0B3E8C] font-semibold text-sm px-7 py-3.5 rounded-lg transition-all duration-300"
                >
                  ← Back to Category
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          PRODUCT OVERVIEW & SPECIFICATIONS SCOPE
         ========================================== */}
      {product.overview && (
        <section className="py-12 sm:py-14 bg-[#f7f8fa] border-t border-gray-200">
          <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
            <div className="bg-white rounded-2xl border-l-4 border-l-[#C8102E] border border-gray-200 p-6 sm:p-8 lg:p-10">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase mb-3 text-[#C8102E]">
                  <span className="w-6 h-px bg-[#C8102E]" />
                  Product Overview
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B3E8C] tracking-tight">
                  Supply Specifications{" "}
                  <span className="text-[#C8102E]">Scope.</span>
                </h2>
              </div>
              <p className="text-[#5a6b7d] font-medium leading-relaxed text-base sm:text-lg">
                {product.overview}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ==========================================
          AVAILABLE METALLURGICAL GRADES
         ========================================== */}
      {Array.isArray(product.grades) && product.grades.length > 0 && (
        <section className="py-12 sm:py-14 bg-white border-t border-gray-200">
          <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
            <div className="bg-[#f7f8fa] rounded-2xl border border-gray-200 p-6 sm:p-8 lg:p-10">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase mb-3 text-[#C8102E]">
                  <span className="w-6 h-px bg-[#C8102E]" />
                  Available Metallurgical Grades
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B3E8C] tracking-tight">
                  Grades <span className="text-[#C8102E]">Offered.</span>
                </h2>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {product.grades.map((grade, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold tracking-wider uppercase px-3.5 py-2 rounded-lg border-2 bg-[#C8102E]/5 text-[#C8102E] border-[#C8102E]/20 hover:bg-[#C8102E]/10 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E]" />
                    {grade}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ==========================================
          STANDARD SUPPLY FORMS & PROFILES
         ========================================== */}
      {Array.isArray(product.supplyForms) && product.supplyForms.length > 0 && (
        <section className="py-12 sm:py-14 bg-[#f7f8fa] border-t border-gray-200">
          <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 lg:p-10">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase mb-3 text-[#C8102E]">
                  <span className="w-6 h-px bg-[#C8102E]" />
                  Standard Supply Forms
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B3E8C] tracking-tight">
                  Forms & <span className="text-[#C8102E]">Profiles.</span>
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {product.supplyForms.map((form, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-4 bg-[#f7f8fa] border border-gray-200 rounded-xl hover:border-[#C8102E]/30 hover:bg-[#C8102E]/[0.02] transition-colors"
                  >
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center bg-[#C8102E]/10 text-[#C8102E]">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="text-sm font-semibold text-[#0B3E8C]">
                      {form}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ==========================================
          TECHNICAL SPECIFICATIONS MATRIX
         ========================================== */}
      {product.technicalSpecs && (
        <section className="py-12 sm:py-14 bg-white border-t border-gray-200">
          <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
            <div className="mb-10">
              <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase mb-3 text-[#C8102E]">
                <span className="w-6 h-px bg-[#C8102E]" />
                Technical Specifications
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B3E8C] tracking-tight">
                Dimensional <span className="text-[#C8102E]">Data Matrix.</span>
              </h2>
              <p className="text-sm text-[#5a6b7d] mt-2">
                Official dimensional ranges, manufacturing tolerances, and
                international mill delivery standards
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#0B3E8C]">
                      <th className="text-left text-white text-xs font-bold tracking-widest uppercase px-6 py-4 w-[35%]">
                        Specification Parameter
                      </th>
                      <th className="text-left text-white text-xs font-bold tracking-widest uppercase px-6 py-4">
                        Standard Offering & Dimensional Capabilities
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(product.technicalSpecs).map(
                      ([key, value], i) => (
                        <tr
                          key={key}
                          className={`border-b border-gray-100 last:border-0 ${
                            i % 2 === 0 ? "bg-white" : "bg-[#f7f8fa]"
                          }`}
                        >
                          <td className="px-6 py-4 text-sm font-bold text-[#C8102E] capitalize">
                            {key
                              .replace(/([A-Z])/g, " $1")
                              .replace(/^./, (str) => str.toUpperCase())
                              .trim()}
                          </td>
                          <td className="px-6 py-4 text-sm text-[#5a6b7d] leading-relaxed">
                            {value}
                          </td>
                        </tr>
                      ),
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ==========================================
          STANDARDS & QUALITY COMPLIANCE
         ========================================== */}
      {Array.isArray(product.standardsCompliance) &&
        product.standardsCompliance.length > 0 && (
          <section className="py-12 sm:py-14 bg-[#f7f8fa] border-t border-gray-200">
            <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
              <div className="bg-white rounded-2xl border-l-4 border-l-[#C8102E] border border-gray-200 p-6 sm:p-8 lg:p-10">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase mb-3 text-[#C8102E]">
                    <span className="w-6 h-px bg-[#C8102E]" />
                    Standards & Quality Compliance
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B3E8C] tracking-tight">
                    Governing <span className="text-[#C8102E]">Standards.</span>
                  </h2>
                  <p className="text-sm text-[#5a6b7d] mt-2">
                    Every lot is delivered with complete mill test
                    certification, heat traceability, and third-party inspection
                    compliance
                  </p>
                </div>
                <ul className="space-y-3">
                  {product.standardsCompliance.map((standard, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 p-4 bg-[#f7f8fa] border border-gray-200 rounded-xl hover:border-[#C8102E]/30 transition-colors"
                    >
                      <span className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5 bg-[#C8102E]/10 text-[#C8102E]">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          <polyline points="9 12 11 14 15 10" />
                        </svg>
                      </span>
                      <span className="text-sm text-[#0B3E8C] leading-relaxed font-medium">
                        {standard}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Extra Quality Metrics */}
                <div className="mt-6 pt-6 border-t border-gray-100 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {product.manufacturingType && (
                    <div className="p-4 bg-[#f7f8fa] rounded-xl border-t-2 border-t-[#C8102E]">
                      <div className="text-[0.62rem] font-bold tracking-widest uppercase text-[#C8102E] mb-1.5">
                        Manufacturing Type
                      </div>
                      <div className="text-sm font-bold text-[#0B3E8C]">
                        {product.manufacturingType}
                      </div>
                    </div>
                  )}
                  {product.pressureRating && (
                    <div className="p-4 bg-[#f7f8fa] rounded-xl border-t-2 border-t-[#C8102E]">
                      <div className="text-[0.62rem] font-bold tracking-widest uppercase text-[#C8102E] mb-1.5">
                        Pressure Rating
                      </div>
                      <div className="text-sm font-bold text-[#0B3E8C]">
                        {product.pressureRating}
                      </div>
                    </div>
                  )}
                  {product.tolerance && (
                    <div className="p-4 bg-[#f7f8fa] rounded-xl border-t-2 border-t-[#C8102E]">
                      <div className="text-[0.62rem] font-bold tracking-widest uppercase text-[#C8102E] mb-1.5">
                        Tolerance
                      </div>
                      <div className="text-sm font-bold text-[#0B3E8C]">
                        {product.tolerance}
                      </div>
                    </div>
                  )}
                  {product.certifications && (
                    <div className="p-4 bg-[#f7f8fa] rounded-xl border-t-2 border-t-[#C8102E]">
                      <div className="text-[0.62rem] font-bold tracking-widest uppercase text-[#C8102E] mb-1.5">
                        Certifications
                      </div>
                      <div className="text-sm font-bold text-[#0B3E8C]">
                        {product.certifications}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

      {/* ==========================================
          TARGET INDUSTRIAL APPLICATIONS
         ========================================== */}
      {Array.isArray(product.industryApplications) &&
        product.industryApplications.length > 0 && (
          <section className="py-12 sm:py-14 bg-white border-t border-gray-200">
            <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
              <div className="bg-[#f7f8fa] rounded-2xl border border-gray-200 p-6 sm:p-8 lg:p-10">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase mb-3 text-[#C8102E]">
                    <span className="w-6 h-px bg-[#C8102E]" />
                    Target Industrial Applications
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B3E8C] tracking-tight">
                    Engineered for{" "}
                    <span className="text-[#C8102E]">Critical Service.</span>
                  </h2>
                </div>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {product.industryApplications.map((app, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:border-[#C8102E]/30 transition-colors"
                    >
                      <span className="flex-shrink-0 w-2 h-2 rounded-full mt-2 bg-[#C8102E]" />
                      <span className="text-sm text-[#0B3E8C] leading-relaxed font-medium">
                        {app}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

      {/* ==========================================
          SIMPLE SPECS — Only if no extended data
         ========================================== */}
      {!hasExtendedData && (
        <section className="py-12 sm:py-16 bg-[#f7f8fa] border-t border-gray-200">
          <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
            <div className="mb-10">
              <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase mb-3 text-[#C8102E]">
                <span className="w-6 h-px bg-[#C8102E]" />
                Product Specifications
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B3E8C] tracking-tight">
                Technical <span className="text-[#C8102E]">Details.</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
                <h3 className="text-sm font-bold tracking-widest uppercase text-[#C8102E] mb-5 pb-3 border-b border-gray-100">
                  Core Information
                </h3>
                <div className="space-y-0">
                  <SpecRow
                    label="Material Group"
                    value={product.materialGroup}
                  />
                  <SpecRow label="Division" value={categoryInfo.division} />
                  <SpecRow label="Category" value={categoryInfo.name} />
                  <SpecRow label="Standards" value={product.standards} />
                  <SpecRow label="Forms" value={product.forms} />
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
                <h3 className="text-sm font-bold tracking-widest uppercase text-[#C8102E] mb-5 pb-3 border-b border-gray-100">
                  Application
                </h3>
                <div className="space-y-0">
                  <SpecRow label="Application" value={product.application} />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ==========================================
          RELATED PRODUCTS — Max 4
         ========================================== */}
      {limitedRelated.length > 0 && (
        <section className="py-14 sm:py-16 lg:py-20 bg-white border-t border-gray-200">
          <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase mb-3 text-[#C8102E]">
                  <span className="w-6 h-px bg-[#C8102E]" />
                  Related Products
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B3E8C] tracking-tight">
                  More <span className="text-[#C8102E]">{relatedLabel}</span>
                </h2>
              </div>

              <Link
                to={`/categories/${categorySlug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-[#0B3E8C] hover:text-[#C8102E] transition-colors group"
              >
                View All
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:translate-x-1 transition-transform"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {limitedRelated.map((p, i) => (
                <Link
                  key={p.slug}
                  to={`/products/${p.slug}`}
                  className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(200,16,46,0.15)] hover:border-[#C8102E]/50 transition-all duration-500 flex flex-col"
                  style={{
                    animation: `fadeUp 0.5s ease ${i * 0.06}s both`,
                  }}
                >
                  <div className="relative aspect-[5/4] overflow-hidden bg-gray-100">
                    <span className="absolute top-2.5 left-2.5 z-20 w-7 h-7 rounded-full text-white text-[0.65rem] font-bold font-medium flex items-center justify-center shadow-lg border border-white/30 bg-[#C8102E]">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {p.materialGroup && (
                      <span className="absolute top-2.5 right-2.5 z-20 bg-white/95 backdrop-blur-sm text-[#0B3E8C] text-[0.55rem] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full border border-gray-200 max-w-[100px] truncate">
                        {p.materialGroup}
                      </span>
                    )}

                    <img
                      src={p.image || "/images/products/hero-product.jpg"}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      onError={(e) => {
                        if (
                          e.target.src !==
                          window.location.origin +
                            "/images/products/hero-product.jpg"
                        ) {
                          e.target.src = "/images/products/hero-product.jpg";
                        } else {
                          e.target.style.display = "none";
                        }
                      }}
                    />
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
                        <span className="text-[0.6rem] font-medium tracking-wider uppercase bg-[#C8102E]/5 text-[#C8102E] px-1.5 py-0.5 rounded border border-[#C8102E]/20 line-clamp-1">
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
          </div>
        </section>
      )}

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
