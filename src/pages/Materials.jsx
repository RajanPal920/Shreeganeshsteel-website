import React from "react";
import { Link } from "react-router-dom";


// ============================================
// MATERIALS DATA — with images from /images/stock/
// ============================================
const materials = [
  {
    slug: "stainless-steel",
    name: "Stainless Steel",
    number: "01",
    image: "/images/stock/stainless-steel.jpg",
    desc: "304, 316L, 321, 310S, 347, 904L",
    longDesc:
      "Premium austenitic, ferritic, and heat-resistant stainless steel grades for pressure vessels, chemical processing, and industrial applications.",
    grades: [
      "304",
      "304L",
      "316",
      "316L",
      "321",
      "321H",
      "310S",
      "347",
      "904L",
    ],
    accent: "#C8102E",
  },
  {
    slug: "nickel",
    name: "Nickel",
    number: "02",
    image: "/images/stock/nickel.jpg",
    desc: "Nickel 200/201, Inconel 600/625, 800",
    longDesc:
      "High-performance nickel alloys with excellent corrosion resistance at elevated temperatures.",
    grades: [
      "Nickel 200",
      "Nickel 201",
      "Inconel 600",
      "Inconel 625",
      "Incoloy 800",
    ],
    accent: "#1E6FD9",
  },
  {
    slug: "high-alloys",
    name: "High Alloys",
    number: "03",
    image: "/images/stock/high-alloys.jpg",
    desc: "Hastelloy C22, Alloy 20, SMO 254",
    longDesc:
      "Super-austenitic and nickel-iron-chromium alloys for extreme corrosion environments.",
    grades: ["Hastelloy C22", "Hastelloy C276", "Alloy 20", "SMO 254"],
    accent: "#C8102E",
  },
  {
    slug: "duplex",
    name: "Duplex",
    number: "04",
    image: "/images/stock/duplex.jpg",
    desc: "UNS S31803 (2205), UNS S32205",
    longDesc:
      "Dual-phase austenitic-ferritic steels offering high strength and chloride stress corrosion resistance.",
    grades: ["UNS S31803", "UNS S32205", "2205", "LDX 2101"],
    accent: "#1E6FD9",
  },
  {
    slug: "super-duplex",
    name: "Super Duplex",
    number: "05",
    image: "/images/stock/super-duplex.jpg",
    desc: "UNS S32750 (2507), UNS S32760",
    longDesc:
      "Ultra-high performance super duplex grades for aggressive subsea and chemical plant service.",
    grades: ["UNS S32750", "UNS S32760", "2507", "Zeron 100"],
    accent: "#C8102E",
  },
  {
    slug: "titanium",
    name: "Titanium",
    number: "06",
    image: "/images/stock/titanium.jpg",
    desc: "Grade 1, Grade 2, Grade 5 (Ti-6Al-4V)",
    longDesc:
      "Lightweight, high-strength titanium with exceptional corrosion immunity in seawater and chlorides.",
    grades: ["Grade 1", "Grade 2", "Grade 5", "Grade 7", "Grade 12"],
    accent: "#1E6FD9",
  },
  {
    slug: "alloys",
    name: "Alloys",
    number: "07",
    image: "/images/stock/alloys.jpg",
    desc: "Zirconium 702, Tantalum, Cu-Ni 70/30",
    longDesc:
      "Specialty alloys including zirconium, tantalum, and copper-nickel for specialized industrial applications.",
    grades: ["Zirconium 702", "Tantalum", "Cu-Ni 70/30", "Cu-Ni 90/10"],
    accent: "#C8102E",
  },
  {
    slug: "carbon",
    name: "Carbon",
    number: "08",
    image: "/images/stock/carbon.jpg",
    desc: "ASTM A106 Gr B, A105, A333 Gr 6",
    longDesc:
      "Carbon steel grades for high-pressure hydrocarbons, steam generation, and industrial infrastructure.",
    grades: [
      "ASTM A106 Gr B",
      "ASTM A105",
      "ASTM A333 Gr 6",
      "ASTM A516 Gr 70",
    ],
    accent: "#1E6FD9",
  },
  {
    slug: "alloy-steel",
    name: "Alloy Steel",
    number: "09",
    image: "/images/stock/alloy-steel.jpg",
    desc: "ASTM A335 P5, P9, P11, P22, P91, F11",
    longDesc:
      "Chromium-molybdenum creep-resistant alloy steel for supercritical boilers and high-temperature service.",
    grades: ["ASTM A335 P5", "P9", "P11", "P22", "P91", "F11", "F22"],
    accent: "#C8102E",
  },
];

// ============================================
// MATERIAL CARD
// ============================================
const MaterialCard = ({ material, index }) => (
  <Link
    to={`/materials/${material.slug}`}
    className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(11,62,140,0.15)] hover:border-[#1E6FD9]/40 transition-all duration-500 flex flex-col"
    style={{ animation: `fadeUp 0.6s ease ${index * 0.06}s both` }}
  >
    {/* Image */}
    <div className="relative aspect-[10/9] overflow-hidden bg-gray-100">
      {/* Number badge */}
      <span
        className="absolute top-3 left-3 z-20 w-9 h-9 rounded-lg text-white text-xs font-bold font-mono flex items-center justify-center shadow-lg border border-white/30"
        style={{ backgroundColor: material.accent }}
      >
        {material.number}
      </span>

      {/* Arrow on hover */}
      <span className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-[#C8102E] text-white flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-lg">
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
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
      </span>

      <img
        src={material.image}
        alt={material.name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        onError={(e) => {
          e.target.src = "/images/stock/placeholder.jpg";
        }}
      />

      {/* Bottom accent line */}
      <span
        className="absolute bottom-0 left-0 w-full h-1 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
        style={{
          background: `linear-gradient(to right, ${material.accent}, ${material.accent}80, transparent)`,
        }}
      />
    </div>

    {/* Content */}
    <div className="p-5 sm:p-6 flex flex-col flex-1">
      {/* Name */}
      <h3 className="text-lg sm:text-xl font-bold text-[#0B3E8C] mb-2 group-hover:text-[#C8102E] transition-colors leading-snug">
        {material.name}
      </h3>

      {/* Desc */}
      <p className="text-sm text-[#5a6b7d] leading-relaxed mb-4 flex-1 line-clamp-2">
        {material.desc}
      </p>

      {/* Grades */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {material.grades.slice(0, 3).map((g, i) => (
          <span
            key={i}
            className="text-[0.62rem] font-mono tracking-wider uppercase bg-[#f7f8fa] text-[#0B3E8C] px-2 py-0.5 rounded border border-gray-200"
          >
            {g}
          </span>
        ))}
        {material.grades.length > 3 && (
          <span className="text-[0.62rem] font-mono tracking-wider uppercase bg-[#f7f8fa] text-[#8896a6] px-2 py-0.5 rounded border border-gray-200">
            +{material.grades.length - 3}
          </span>
        )}
      </div>

      {/* CTA */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100 group-hover:border-[#C8102E]/30 transition-colors">
        <span className="text-[0.7rem] font-bold tracking-widest uppercase text-[#0B3E8C] group-hover:text-[#C8102E] transition-colors">
          Explore Material
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
);

// ============================================
// MATERIALS PAGE
// ============================================
export default function Materials() {
  return (
    <div className="w-full bg-white overflow-x-hidden">
      {/* ==========================================
          HERO — Glass card centered
         ========================================== */}
      <section className="relative text-white overflow-hidden">
        <div className="relative min-h-[460px] sm:min-h-[530px] lg:min-h-[590px] flex items-center">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{backgroundImage: 'url("/images/products/hero-product.jpg")'}}
          />


          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* Content — centered glass card */}
          <div className="relative z-10 w-full max-w-[1320px] mx-auto px-5 sm:px-8 py-14 sm:py-16 flex items-center justify-center">
            <div className="max-w-3xl w-full mx-auto backdrop-blur-xl bg-[#0B3E8C]/20 border border-white/20 rounded-2xl sm:rounded-3xl px-6 sm:px-10 lg:px-14 py-10 sm:py-12 shadow-[0_25px_60px_rgba(0,0,0,0.3)] text-center">
              {/* Breadcrumb */}
              <nav className="flex items-center justify-center gap-2 text-xs text-white/70 font-bold tracking-wider uppercase mb-5">
                <Link to="/" className="hover:text-[#f1f4f7] transition-colors">
                  Home
                </Link>
                <span>/</span>
                <span className="text-white font-bold">Materials</span>
              </nav>

              {/* Eyebrow */}
              <div className="inline-flex items-center gap-3 text-[0.7rem] sm:text-xs font-bold tracking-[0.25em] uppercase text-white mb-4">
                <span className="w-8 h-px bg-[#E63946]" />
                Metallurgical Grades
                <span className="w-8 h-px bg-[#E63946]" />
              </div>

              {/* Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-bold tracking-tight leading-[1.08] mb-5 text-white">
                Certified Materials for
                <br />
                <em className="not-italic text-[#E63946]">
                  Critical Applications.
                </em>
              </h1>

              {/* Description */}
              <p className="text-white leading-relaxed max-w-2xl mx-auto text-base sm:text-lg mb-8 font-bold">
                Aerospace, chemical, oil & gas, and industrial metallurgy —
                sourced from prime mills with full EN 10204 3.1 & 3.2 mill test
                certificates and PMI verification.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-x-12 gap-y-5 pt-6 border-t border-white/20">
                <div>
                  <div className="text-3xl font-extrabold tracking-tight leading-none tabular-nums text-white">
                    {materials.length}
                  </div>
                  <div className="text-[0.68rem] font-bold tracking-widest uppercase text-white mt-2">
                    Material Groups
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold tracking-tight leading-none tabular-nums text-white">
                    100%
                  </div>
                  <div className="text-[0.68rem] font-bold tracking-widest uppercase text-white mt-2">
                    Mill Certified
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold tracking-tight leading-none tabular-nums text-white">
                    EN 10204
                  </div>
                  <div className="text-[0.68rem] font-bold tracking-widest uppercase text-white mt-2">
                    3.1 & 3.2
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          MATERIALS GRID
         ========================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#f7f8fa]">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase text-[#C8102E] mb-4">
              <span className="w-6 h-px bg-[#C8102E]" />
              Available Materials
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3E8C] tracking-tight leading-tight mb-4">
              Browse Our Material
              <span className="text-[#C8102E]"> Portfolio.</span>
            </h2>
            <p className="text-[#5a6b7d] leading-relaxed font-bold">
              Click any material to explore products available in that grade
              family, with full technical specifications and certifications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {materials.map((m, i) => (
              <MaterialCard key={m.slug} material={m} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          CERTIFICATION STRIP
         ========================================== */}
      <section className="py-14 sm:py-16 bg-white border-t border-gray-200">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                title: "EN 10204 3.1 & 3.2",
                desc: "Mill Test Certificates with full heat traceability",
              },
              {
                title: "100% PMI Verified",
                desc: "Positive Material Identification on every batch",
              },
              {
                title: "Prime Mill Quality",
                desc: "Sourced from certified global mill partners",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-[#f7f8fa] rounded-2xl border border-gray-200"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0B3E8C] text-white flex items-center justify-center mb-4">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-[#0B3E8C] mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-[#5a6b7d] font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          CTA
         ========================================== */}
      <section className="py-14 sm:py-16 bg-[#f7f8fa] border-t border-gray-200">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-[#0B3E8C] via-[#0d47a1] to-[#C8102E] p-8 sm:p-12 lg:p-16 text-white overflow-hidden">
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.25em] uppercase text-white mb-4">
                <span className="w-6 h-px bg-white/60" />
                Direct Inquiry
                <span className="w-6 h-px bg-white/60" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
                Need a Specific
                <br />
                <span className="text-white/80">Grade or Specification?</span>
              </h2>
              <p className="text-white font-bold leading-relaxed mb-8 text-base sm:text-lg max-w-2xl mx-auto">
                Share your material grade, dimensions, quantity, and
                certification requirements our team responds within 2 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://wa.me/919619435529?text=Hello%20Shree%20Ganesh%20Steel%2C%20I%20have%20a%20material%20inquiry."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-white/90 text-[#0B3E8C] font-bold text-sm px-7 py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Request a Quote
                  <span>→</span>
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold text-sm px-7 py-3.5 rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


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
}
