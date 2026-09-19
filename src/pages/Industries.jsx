import React, { useState } from "react";
import { Link } from "react-router-dom";
import { industries } from "../data/industries";

// ============================================
// INDUSTRY CARD
// ============================================
const IndustryCard = ({ industry }) => (
  <Link
    to="/industries"
    data-cursor="view-industry"
    aria-label={`View ${industry.name} products`}
    className="group relative bg-white border border-[#E8EBEF] rounded-[20px] overflow-hidden transition-all duration-500 ease-out hover:-translate-y-[5px] hover:border-[#1E6FD9]/50 hover:shadow-[0_20px_50px_rgba(11,62,140,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E6FD9] focus-visible:ring-offset-2"
  >
    {/* Image */}
    <div className="relative aspect-[16/10] overflow-hidden bg-[#f7f8fa]">
      <img
        src={industry.image}
        alt={industry.name}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-[700ms] ease-out group-hover:scale-[1.04]"
        onError={(e) => {
          e.target.style.display = "none";
        }}
      />

      {/* Number badge */}
      <div className="absolute top-4 left-4">
        <span className="w-8 h-8 rounded-full bg-white/95 backdrop-blur-sm text-[#0B3E8C] text-xs font-extrabold flex items-center justify-center border border-white/40">
          {industry.number}
        </span>
      </div>

      {/* Category label */}
      <div className="absolute bottom-4 left-4">
        <span className="text-[0.62rem] font-bold tracking-[0.22em] uppercase text-[#E63946]">
          {industry.category}
        </span>
      </div>

      {/* Red micro-line */}
      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#C8102E] via-[#E63946] to-transparent scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
    </div>

    {/* Content */}
    <div className="p-5 sm:p-6">
      <h3 className="relative inline-block text-lg sm:text-xl font-bold text-[#0B3E8C] mb-2 group-hover:text-[#C8102E] transition-colors duration-300">
        {industry.name}
        <span className="absolute bottom-0 left-0 w-full h-px bg-[#C8102E] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
      </h3>

      <p className="text-sm text-[#68758A] leading-relaxed mb-5">
        {industry.shortDesc}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-[#E8EBEF]">
        <span className="text-[0.68rem] font-bold tracking-[0.18em] uppercase text-[#0B3E8C] group-hover:text-[#C8102E] transition-colors">
          View Products
        </span>
        <span className="w-7 h-7 rounded-full bg-[#0B3E8C] text-white flex items-center justify-center transition-all duration-300 group-hover:bg-[#C8102E] group-hover:translate-x-1">
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
// INDUSTRIES PAGE
// ============================================
const Industries = () => {
  const [activeSlug, setActiveSlug] = useState(industries[0].slug);
  const active = industries.find((i) => i.slug === activeSlug);

  return (
    <div className="w-full bg-white overflow-x-hidden">
      {/* ==========================================
    SECTION 1: HERO
   ========================================== */}
      <section className="relative text-white overflow-hidden">
        <div className="relative min-h-[500px] sm:min-h-[560px] lg:min-h-[650px] flex items-center">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("/images/industries.jpg")',
            }}
          />

          {/* Content wrapper */}
          <div className="relative z-10 w-full max-w-[1320px] mx-auto px-5 sm:px-8 py-16 sm:py-20 flex items-center justify-center">
            {/* ✅ GLASS MORPHISM CONTAINER */}
            <div className="max-w-3xl w-full mx-auto backdrop-blur-s bg-[#0B3E8C]/40 border border-white/90 rounded-2xl sm:rounded-3xl px-6 sm:px-10 lg:px-14 py-10 sm:py-12 lg:py-14 shadow-[0_25px_60px_rgba(0,0,0,0.35)] text-center">
              {/* Eyebrow */}
              <div className="inline-flex items-center justify-center gap-3 text-[0.7rem] sm:text-xs font-bold tracking-[0.25em] uppercase text-[#E63946] mb-5">
                <span className="w-8 h-px bg-[#E63946]" />
                Industries
                <span className="w-8 h-px bg-[#E63946]" />
              </div>

              {/* Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold tracking-tight leading-[1.08] mb-6 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
                Steel Solutions
                <br />
                for{" "}
                <em className="not-italic text-[#E63946]">
                  Critical Industries.
                </em>
              </h1>

              {/* Description */}
              <p className="text-white/90 leading-relaxed max-w-2xl mx-auto text-base sm:text-lg mb-8">
                Precision-engineered steel products supporting demanding
                industrial applications across diverse sectors.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-x-12 gap-y-5 pt-6 border-t border-white/20">
                <div>
                  <div className="text-3xl font-extrabold tracking-tight leading-none tabular-nums text-white">
                    26+
                  </div>
                  <div className="text-[0.68rem] font-medium tracking-widest uppercase text-[#4A9EFF] mt-2">
                    Products
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold tracking-tight leading-none tabular-nums text-white">
                    14
                  </div>
                  <div className="text-[0.68rem] font-medium tracking-widest uppercase text-[#E63946] mt-2">
                    Categories
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold tracking-tight leading-none tabular-nums text-white">
                    40+
                  </div>
                  <div className="text-[0.68rem] font-medium tracking-widest uppercase text-[#4A9EFF] mt-2">
                    Countries
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 2: OVERVIEW
         ========================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase text-[#1E6FD9] mb-4">
                <span className="w-6 h-px bg-[#E63946]" />
                Industry Expertise
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3E8C] tracking-tight leading-tight mb-6">
                Built Around
                <br />
                <span className="text-[#C8102E]">Your Industry.</span>
              </h2>
              <p className="text-[#68758A] leading-relaxed mb-6">
                At Shree Ganesh Steel Corporation, we understand that every
                industry has unique material, dimensional and performance
                requirements. Our product range is engineered to support
                critical applications across diverse sectors.
              </p>
              <p className="text-[#68758A] leading-relaxed">
                From high-pressure pipelines to precision pharmaceutical
                systems, our stainless, duplex and alloy steel products are
                trusted where quality and reliability are non-negotiable.
              </p>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(11,62,140,0.15)] border border-[#E8EBEF] group">
                <img
                  src="/images/hero/quality.jpg"
                  alt="Industrial applications"
                  loading="lazy"
                  className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-[1.03] transition-transform duration-[900ms] ease-out"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>

              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white border border-[#E8EBEF] rounded-2xl p-5 shadow-[0_15px_40px_rgba(11,62,140,0.12)] max-w-[220px]">
                <div className="space-y-3">
                  {["Quality", "Traceability", "Reliability"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          i % 2 === 0 ? "bg-[#1E6FD9]" : "bg-[#E63946]"
                        }`}
                      />
                      <span className="text-xs font-bold tracking-[0.15em] uppercase text-[#0B3E8C]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 3: INDUSTRY GRID
         ========================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#f7f8fa]">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase text-[#1E6FD9] mb-4">
              <span className="w-6 h-px bg-[#E63946]" />
              Industries We Serve
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3E8C] tracking-tight leading-tight mb-4">
              Engineered Material Solutions.
            </h2>
            <p className="text-[#68758A] leading-relaxed">
              Steel products for demanding environments across diverse global
              industries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <IndustryCard key={industry.id} industry={industry} />
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 4: SPOTLIGHT
         ========================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#0B3E8C] text-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#1E6FD9]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#C8102E]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.4)] border border-white/10 group order-2 lg:order-1">
              <img
                src="/images/industries/Industry-Spotlight.jpg"
                alt="Oil & Gas industry"
                loading="lazy"
                className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-[1.03] transition-transform duration-[900ms] ease-out"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase text-[#4A9EFF] mb-4">
                <span className="w-6 h-px bg-[#E63946]" />
                Industry Spotlight
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-6">
                Steel Built for
                <br />
                <span className="text-[#E63946]">Demanding Environments.</span>
              </h2>
              <p className="text-white/70 leading-relaxed mb-8">
                Our Oil & Gas range is engineered for high-pressure,
                high-temperature and corrosive environments — trusted across
                pipeline systems, process equipment and industrial
                infrastructure worldwide.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-[0.65rem] font-bold tracking-[0.22em] uppercase text-[#4A9EFF] mb-3">
                    Product Categories
                  </div>
                  <ul className="space-y-1.5">
                    {["Pipes", "Flanges", "Fittings", "coils"].map((p, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-white/75"
                      >
                        <span
                          className={`w-1 h-1 rounded-full ${
                            i % 2 === 0 ? "bg-[#4A9EFF]" : "bg-[#E63946]"
                          }`}
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-[0.65rem] font-bold tracking-[0.22em] uppercase text-[#E63946] mb-3">
                    Applications
                  </div>
                  <ul className="space-y-1.5">
                    {[
                      "Pipeline systems",
                      "Process equipment",
                      "Industrial infrastructure",
                    ].map((a, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-white/75"
                      >
                        <span
                          className={`w-1 h-1 rounded-full ${
                            i % 2 === 0 ? "bg-[#E63946]" : "bg-[#4A9EFF]"
                          }`}
                        />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                to="/products"
                className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#4A9EFF] hover:text-[#E63946] transition-colors group"
              >
                View Products
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 5: INDUSTRY → PRODUCT MAPPING
         ========================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#f7f8fa]">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase text-[#1E6FD9] mb-4">
              <span className="w-6 h-px bg-[#E63946]" />
              Find the Right Product
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3E8C] tracking-tight leading-tight mb-4">
              For Your Application.
            </h2>
            <p className="text-[#68758A] leading-relaxed">
              Select your industry to see the product categories we supply for
              its specific requirements.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {industries.map((ind) => (
              <button
                key={ind.slug}
                onClick={() => setActiveSlug(ind.slug)}
                className={`px-4 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                  activeSlug === ind.slug
                    ? "bg-[#0B3E8C] text-white shadow-md"
                    : "bg-white text-[#68758A] hover:bg-[#0B3E8C]/5 hover:text-[#0B3E8C] border border-[#E8EBEF]"
                }`}
              >
                {ind.name}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="bg-white border border-[#E8EBEF] rounded-2xl p-6 sm:p-8 lg:p-10">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <div className="text-[0.65rem] font-bold tracking-[0.22em] uppercase text-[#E63946] mb-3">
                  {active.category}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B3E8C] tracking-tight mb-4">
                  {active.name}
                </h3>
                <p className="text-[#68758A] leading-relaxed mb-6">
                  {active.longDesc}
                </p>

                <div>
                  <div className="text-[0.65rem] font-bold tracking-[0.22em] uppercase text-[#0B3E8C] mb-2">
                    Applications
                  </div>
                  <ul className="space-y-1.5">
                    {active.applications.map((app, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-[#68758A]"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#E63946]" />
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <div className="text-[0.65rem] font-bold tracking-[0.22em] uppercase text-[#0B3E8C] mb-3">
                  Product Categories
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {active.productCategories.map((prod, i) => (
                    <li key={i}>
                      <Link
                        to={`/products?category=${encodeURIComponent(prod)}`}
                        className="group flex items-center justify-between p-3 rounded-lg border border-[#E8EBEF] hover:border-[#1E6FD9]/40 hover:bg-[#1E6FD9]/[0.04] transition-all duration-300"
                      >
                        <span className="text-sm font-semibold text-[#0B3E8C] group-hover:text-[#C8102E] transition-colors">
                          {prod}
                        </span>
                        <span className="text-[#68758A] group-hover:text-[#C8102E] group-hover:translate-x-1 transition-all">
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 6: WHY CHOOSE US
         ========================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#0B3E8C] text-white relative overflow-hidden">
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#C8102E]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase text-[#4A9EFF] mb-4">
              <span className="w-6 h-px bg-[#E63946]" />
              Why Choose Us
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Built for
              <span className="text-[#E63946]"> Industrial Demands.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {[
              {
                n: "01",
                t: "Quality Assurance",
                d: "Strict quality control at every stage — from raw material sourcing to final dispatch.",
              },
              {
                n: "02",
                t: "Material Traceability",
                d: "Every batch traced back to its mill certificate with grade and heat number.",
              },
              {
                n: "03",
                t: "Wide Product Range",
                d: "Stainless, duplex, alloy and carbon steel products across multiple categories.",
              },
              {
                n: "04",
                t: "Technical Support",
                d: "Grade selection, specification matching and application guidance from our team.",
              },
              {
                n: "05",
                t: "Global Supply",
                d: "Products delivered to clients across diverse international markets.",
              },
              {
                n: "06",
                t: "Reliable Delivery",
                d: "Streamlined production and logistics to meet committed timelines.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`pt-6 border-t transition-colors duration-500 group ${
                  i % 2 === 0
                    ? "border-white/15 hover:border-[#4A9EFF]/60"
                    : "border-white/15 hover:border-[#E63946]/60"
                }`}
              >
                <div
                  className={`text-[0.65rem] font-bold tracking-[0.22em] uppercase mb-3 ${
                    i % 2 === 0 ? "text-[#4A9EFF]" : "text-[#E63946]"
                  }`}
                >
                  {item.n}
                </div>
                <h3
                  className={`text-base font-bold text-white mb-2 transition-colors ${
                    i % 2 === 0
                      ? "group-hover:text-[#4A9EFF]"
                      : "group-hover:text-[#E63946]"
                  }`}
                >
                  {item.t}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {item.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 7: QUALITY & TECHNICAL SUPPORT
         ========================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase text-[#1E6FD9] mb-4">
                <span className="w-6 h-px bg-[#E63946]" />
                Quality & Technical Support
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3E8C] tracking-tight leading-tight mb-6">
                Quality That Supports
                <br />
                <span className="text-[#C8102E]">Critical Applications.</span>
              </h2>
              <p className="text-[#68758A] leading-relaxed">
                Every product we supply is backed by our commitment to quality
                verification, material traceability and technical support —
                ensuring it meets the demands of your application.
              </p>
            </div>

            <div className="space-y-3">
              {[
                "Material Test Certificates",
                "Chemical Analysis",
                "Mechanical Testing",
                "Dimensional Inspection",
                "Grade & Specification Support",
                "Packing & Documentation",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 bg-[#f7f8fa] border border-[#E8EBEF] rounded-xl hover:border-[#1E6FD9]/40 hover:bg-white transition-all duration-300"
                >
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs font-mono ${
                      i % 2 === 0
                        ? "bg-[#1E6FD9]/15 text-[#1E6FD9]"
                        : "bg-[#C8102E]/15 text-[#C8102E]"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <span className="text-sm font-semibold text-[#0B3E8C]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 8: FINAL CTA
         ========================================== */}
      <section className="py-16 sm:py-20 bg-[#f7f8fa] border-t border-[#E8EBEF]">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-[#0B3E8C] via-[#0B3E8C] to-[#092a54] p-8 sm:p-12 lg:p-16 text-white overflow-hidden">
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#1E6FD9]/25 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#C8102E]/25 rounded-full blur-3xl pointer-events-none" />

            <div className="relative max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.25em] uppercase text-[#E63946] mb-4">
                <span className="w-6 h-px bg-[#E63946]" />
                Get In Touch
                <span className="w-6 h-px bg-[#E63946]" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
                Have an Industry-Specific
                <br />
                <span className="text-[#E63946]">Requirement?</span>
              </h2>
              <p className="text-white/75 leading-relaxed mb-8 text-base sm:text-lg max-w-2xl mx-auto">
                Tell us your application, material grade, dimensions and
                quantity. Our team will get back to you with the right solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#C8102E] hover:bg-[#1E6FD9] text-white font-bold text-sm px-7 py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Request a Quote
                  <span>→</span>
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-[#E63946] hover:text-[#E63946] text-white font-semibold text-sm px-7 py-3.5 rounded-lg transition-all duration-300"
                >
                  Explore Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
