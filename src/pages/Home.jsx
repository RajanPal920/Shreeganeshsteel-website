import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";

// ============================================
// HERO SLIDES DATA
// ============================================
const heroSlides = [
  {
    id: 1,
    eyebrow: "PRECISION • QUALITY • RELIABILITY",
    titleLine1: "Engineered Steel Solutions",
    titleLine2: "Built for Industry.",
    desc: "Premium stainless steel, carbon steel and alloy steel products engineered to meet demanding industrial requirements with uncompromising quality.",
    image: "/images/hero/slide-1.jpg",
    primary: "Explore Products",
    secondary: "Request a Quote",
  },
  {
    id: 2,
    eyebrow: "FLANGES • FITTINGS • PIPES",
    titleLine1: "Complete Piping Solutions",
    titleLine2: "For Every Application.",
    desc: "ANSI, DIN, JIS flanges, butt weld fittings, forged fittings and precision pipes & tubes — manufactured to ASME and international standards.",
    image: "/images/hero/slide-2.jpg",
    primary: "View Catalogue",
    secondary: "Send Enquiry",
  },
  {
    id: 3,
    eyebrow: "GLOBAL EXPORT • PAN-INDIA SUPPLY",
    titleLine1: "Trusted Supply Partner",
    titleLine2: "to 40+ Countries.",
    desc: "Reliable sourcing, bulk order capability, industrial packaging and export-ready documentation — delivered on schedule, every time.",
    image: "/images/hero/slide-3.jpg",
    primary: "Explore Products",
    secondary: "Talk to Our Team",
  },
  {
    id: 4,
    eyebrow: "QUALITY • TRACEABILITY • COMPLIANCE",
    titleLine1: "Certified Quality,",
    titleLine2: "Measurable Trust.",
    desc: "Every product inspected at every stage — with full material traceability, EN 10204 3.1 certification and dimensionally accurate tolerances.",
    image: "/images/hero/slide-4.jpg",
    primary: "Our Quality Standards",
    secondary: "Request a Quote",
  },
];

const industries = [
  { name: "Oil & Gas", image: "/images/industries/oil-gas.jpg" },
  { name: "Petrochemical", image: "/images/industries/petrochemical.jpg" },
  { name: "Chemical", image: "/images/industries/chemical.jpg" },
  { name: "Pharmaceutical", image: "/images/industries/pharmaceutical.jpg" },
  { name: "Power & Energy", image: "/images/industries/power-energy.jpg" },
  { name: "Engineering", image: "/images/industries/engineering.jpg" },
  { name: "Auto-Mobile", image: "/images/industries/construction.jpg" },
  {
    name: "Water & Infrastructure",
    image: "/images/industries/water-infrastructure.jpg",
  },
];

// ============================================
// COUNT-UP COMPONENT
// ============================================
function CountUp({ end, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now) => {
              const p = Math.min((now - start) / duration, 1);
              setCount(Math.floor(p * end));
              if (p < 1) requestAnimationFrame(tick);
              else setCount(end);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // ✅ Auto-play — pause on hover
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToSlide = (i) => setCurrentSlide(i);
  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
    );

  const slide = heroSlides[currentSlide];

  return (
    <div className="w-full overflow-x-hidden bg-white text-[#1a1a1a]">
      <main>
        {/* ==================== HERO ==================== */}
        <section id="home" className="relative w-full bg-white">
          <div className="relative w-full h-[calc(85vh-100px)] sm:h-[calc(100vh-100px)] lg:h-[calc(95vh-90px)] min-h-[550px] sm:min-h-[650px] lg:min-h-[600px] overflow-hidden">
            {heroSlides.map((s, i) => (
              <div
                key={s.id}
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                  i === currentSlide ? "opacity-100" : "opacity-0"
                }`}
                style={{ backgroundImage: `url("${s.image}")` }}
              />
            ))}

            {/* Text content */}
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="max-w-[1320px] w-full mx-auto px-5 sm:px-8">
                <div
                  key={currentSlide}
                  className="max-w-3xl backdrop-blur-xl bg-[#0B3E8C]/40 border border-white/90 rounded-2xl p-5 sm:p-6 lg:p-7"
                >
                  {/* Eyebrow — animation delay 0.1s */}
                  <div
                    className="inline-flex items-center gap-3 text-[0.7rem] sm:text-xs font-bold tracking-[0.25em] uppercase text-white mb-3"
                    style={{ animation: "heroFadeUp 0.8s ease-out 0.1s both" }}
                  >
                    <span className="w-6 sm:w-8 h-px bg-[#E63946]" />
                    {slide.eyebrow}
                  </div>

                  {/* Heading — two lines animate separately */}
                  <h1 className="text-[1.7rem] leading-[1.1] sm:text-[2.3rem] lg:text-[3rem] xl:text-[3.3rem] font-medium sm:font-extrabold tracking-tight text-white mb-3 sm:mb-4">
                    <span
                      className="block"
                      style={{
                        animation: "heroFadeUp 0.9s ease-out 0.25s both",
                      }}
                    >
                      {slide.titleLine1}
                    </span>
                    <em
                      className="not-italic text-[#ed505d] block"
                      style={{
                        animation: "heroFadeUp 0.9s ease-out 0.45s both",
                      }}
                    >
                      {slide.titleLine2}
                    </em>
                  </h1>

                  {/* Description — delay 0.65s */}
                  <p
                    className="text-[0.9rem] sm:text-[0.95rem] lg:text-base text-white font-extrabold leading-relaxed max-w-2xl mb-5 sm:mb-6"
                    style={{ animation: "heroFadeUp 0.9s ease-out 0.65s both" }}
                  >
                    {slide.desc}
                  </p>

                  {/* CTA Buttons — delays 0.85s / 0.95s */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-5 sm:mb-6">
                    <Link
                      to="/products"
                      className="inline-flex items-center justify-center gap-2 bg-[#C8102E] hover:bg-[#a5384a] text-white font-bold text-sm px-6 py-3 rounded-md shadow-md hover:shadow-xl transition-all duration-300"
                      style={{
                        animation: "heroFadeUp 0.9s ease-out 0.85s both",
                      }}
                    >
                      {slide.primary}
                      <span>→</span>
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold text-sm px-6 py-3 rounded-md hover:bg-white/10 transition-all duration-300"
                      style={{
                        animation: "heroFadeUp 0.9s ease-out 0.95s both",
                      }}
                    >
                      {slide.secondary}
                    </Link>
                  </div>

                  {/* Trust badges — stagger animation */}
                  <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-5 pt-5 border-t border-white/20">
                    {[
                      "Quality Assured",
                      "Industrial Grade",
                      "Global Supply",
                    ].map((pill, i) => (
                      <div
                        key={i}
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white"
                        style={{
                          animation: `heroFadeUp 0.8s ease-out ${1.1 + i * 0.12}s both`,
                        }}
                      >
                        <span className="w-5 h-5 rounded-full bg-[#E63946] text-[white] text-xs font-bold inline-flex items-center justify-center">
                          ✓
                        </span>
                        {pill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Arrows */}
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-[#C8102E] text-white flex items-center justify-center text-2xl font-bold shadow-lg backdrop-blur-md border border-white/20 transition-all"
            >
              ‹
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-[#C8102E] text-white flex items-center justify-center text-2xl font-bold shadow-lg backdrop-blur-md border border-white/20 transition-all"
            >
              ›
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-[3px] rounded-full transition-all duration-300 ${
                    i === currentSlide
                      ? "w-10 bg-[#C8102E]"
                      : "w-6 bg-white/60 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* ✅ Animation Keyframes */}
          <style>{`
    @keyframes heroFadeUp {
      0% {
        opacity: 0;
        transform: translateY(24px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @media (prefers-reduced-motion: reduce) {
      #home * {
        animation: none !important;
      }
    }
  `}</style>
        </section>

        {/* ==================== STATS ==================== */}
        <section className="relative bg-[#0B3E8C] overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-[#1E6FD9]/15 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-[#C8102E]/20 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(30,111,217,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(30,111,217,0.6) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ca1533] to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#1E6FD9]/50 to-transparent" />
          </div>

          <div className="max-w-[1320px] mx-auto px-5 sm:px-8 py-14 sm:py-18 lg:py-20 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-full h-full"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  ),
                  end: 20,
                  suffix: "+",
                  label: "Industry Experience",
                  sub: "Years",
                  accent: "#E63946",
                },
                {
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-full h-full"
                    >
                      <rect x="3" y="3" width="7" height="7" rx="1" />
                      <rect x="14" y="3" width="7" height="7" rx="1" />
                      <rect x="3" y="14" width="7" height="7" rx="1" />
                      <rect x="14" y="14" width="7" height="7" rx="1" />
                    </svg>
                  ),
                  end: 1000,
                  suffix: "+",
                  label: "Products & Specifications",
                  sub: "Catalogue",
                  accent: "#4A9EFF",
                },
                {
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-full h-full"
                    >
                      <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
                    </svg>
                  ),
                  end: 50,
                  suffix: "+",
                  label: "Industrial Applications",
                  sub: "Verticals",
                  accent: "#E63946",
                },
                {
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-full h-full"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                    </svg>
                  ),
                  end: null,
                  textValue: "Global",
                  label: "Supply Capability",
                  sub: "Worldwide",
                  accent: "#4A9EFF",
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="group relative p-6 sm:p-7 rounded-2xl bg-[#093a7b] hover:bg-[#2b69ba] border border-white/10 hover:border-[#4A9EFF]/20 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(30,111,217,0.2)] transition-all duration-500 overflow-hidden"
                  style={{
                    animation: `statFadeUp 0.7s ease ${i * 0.12}s both`,
                  }}
                >
                  <span className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#E63946] via-[#4A9EFF] to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1500ms] pointer-events-none" />
                  <span className="absolute -top-16 -right-16 w-40 h-40 bg-[#E63946]/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  <div className="relative">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0">
                        <div
                          className="absolute inset-0 rounded-xl border transition-all duration-500"
                          style={{
                            background: `linear-gradient(135deg, ${stat.accent}20, ${stat.accent}05)`,
                            borderColor: `${stat.accent}50`,
                          }}
                        />
                        <div className="relative w-full h-full text-white p-3 flex items-center justify-center group-hover:text-white group-hover:rotate-6 transition-all duration-500">
                          {stat.icon}
                        </div>
                      </div>
                      <div className="text-[0.65rem] sm:text-xs font-medium font-bold tracking-widest text-white group-hover:text-white transition-colors">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                    </div>

                    <div className="mb-3">
                      <b className="block text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none group-hover:text-[#4A9EFF] transition-colors duration-500">
                        {stat.end !== null && stat.end !== undefined ? (
                          <CountUp end={stat.end} suffix={stat.suffix} />
                        ) : (
                          stat.textValue
                        )}
                      </b>
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-white/95 mb-1 leading-snug">
                      {stat.label}
                    </h4>
                    <p className="text-xs font-bold tracking-widest  text-white/95 uppercase transition-colors duration-300">
                      {stat.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <style>{`
            @keyframes statFadeUp {
              from { opacity: 0; transform: translateY(30px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>
        </section>

        {/* ==================== ABOUT ==================== */}
        <section id="about" className="py-16 sm:py-20 lg:py-28 bg-white">
          <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
              <div className="relative rounded-xl overflow-hidden shadow-2xl w-full max-w-md mx-auto lg:max-w-none min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
                <img
                  src="/images/hero/homeAbout.jpg"
                  alt="Steel warehouse"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#0B3E8C]/95 to-transparent text-white">
                  <b className="block text-lg font-bold">
                    Committed to Quality.
                  </b>
                  <span className="text-sm text-[#E63946] italic font-semibold">
                    Committed to You.
                  </span>
                </div>
              </div>

              <div>
                <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase text-[#1E6FD9] mb-4">
                  <span className="w-6 h-px bg-[#E63946]" />
                  About Shree Ganesh Steel
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B3E8C] tracking-tight leading-tight mb-6">
                  Engineering Quality.
                  <br />
                  <em className="not-italic text-[#C8102E]">
                    Delivering Confidence.
                  </em>
                </h2>
                <p className="text-[#5a6b7d] text-base font-medium leading-relaxed mb-6">
                  Shree Ganesh Steel Corporation is a trusted manufacturer and
                  supplier of industrial steel products, fittings and components
                  serving critical industries across India and worldwide.
                </p>

                <div className="space-y-5 my-8">
                  {[
                    {
                      t: "Quality First",
                      d: "Every product inspected at every stage of production.",
                    },
                    {
                      t: "Technical Expertise",
                      d: "Experienced team focused on accurate specification matching.",
                    },
                    {
                      t: "Timely Delivery",
                      d: "Efficient logistics ensuring on-schedule dispatch.",
                    },
                  ].map((p, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="w-9 h-9 rounded-md bg-[#f7f8fa] border border-gray-200 flex items-center justify-center text-[#C8102E] text-sm flex-shrink-0">
                        ◆
                      </div>
                      <div>
                        <b className="block text-sm font-bold text-[#0B3E8C] mb-1">
                          {p.t}
                        </b>
                        <p className="text-sm font-medium text-[#5a6b7d]">
                          {p.d}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-[#0B3E8C] hover:bg-[#C8102E] text-white font-bold text-sm px-7 py-3.5 rounded-md transition-all duration-300"
                >
                  Discover Our Company <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== PRODUCT CATEGORIES ==================== */}
        <section
          id="products"
          className="py-16 sm:py-20 lg:py-28 bg-[#f7f8fa] relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#1E6FD9]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#C8102E]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-[1320px] mx-auto px-5 sm:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase text-[#1E6FD9] mb-4 justify-center">
                <span className="w-6 h-px bg-[#E63946]" />
                Our Product Range
                <span className="w-6 h-px bg-[#E63946]" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B3E8C] tracking-tight leading-tight mb-5">
                Industrial Steel Products,
                <br />
                <em className="not-italic text-[#C8102E]">
                  Built for Every Requirement.
                </em>
              </h2>
              <p className="text-[#5a6b7d] font-medium leading-relaxed max-w-2xl mx-auto">
                Comprehensive range of stainless steel, carbon steel, and alloy
                steel products for demanding industrial applications.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
              {[
                "sheets-plates",
                "pipes-tubes",
                "round-bars",
                "fasteners",
                "flanges",
                "buttweld-fittings",
                "coils",
                "wires",
              ]
                .map((slug) => products.find((c) => c.slug === slug))
                .filter(Boolean)
                .map((c, i) => (
                  <Link
                    key={c.id}
                    to={`/categories/${c.slug}`}
                    className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(11,62,140,0.15)] hover:border-[#1E6FD9]/50 transition-all duration-500 flex flex-col"
                    style={{
                      animation: `catFadeUp 0.6s ease ${i * 0.06}s both`,
                    }}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                      <span className="absolute top-3 left-3 z-20 w-8 h-8 rounded-full bg-[#0B3E8C] text-white text-xs font-bold font-medium flex items-center justify-center shadow-lg border border-[#1E6FD9]/30">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-[#C8102E] text-white flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-lg">
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
                        src={c.image || "/images/categories/placeholder.jpg"}
                        alt={c.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />

                      <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#C8102E] via-[#1E6FD9] to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                    </div>

                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="text-lg font-bold text-[#0B3E8C] mb-2.5 leading-snug group-hover:text-[#C8102E] transition-colors duration-300">
                        {c.name}
                      </h3>
                      <p className="text-sm text-[#5a6b7d] leading-relaxed mb-5 flex-1">
                        {c.desc}
                      </p>
                      <span className="text-xs font-bold tracking-widest uppercase text-[#0B3E8C] group-hover:text-[#C8102E] transition-colors inline-flex items-center justify-between gap-2 pt-4 border-t border-gray-100 group-hover:border-[#C8102E]/30">
                        <span>Explore Products</span>
                        <span className="inline-flex items-center gap-1 transform group-hover:translate-x-1 transition-transform duration-300">
                          →
                        </span>
                      </span>
                    </div>
                  </Link>
                ))}
            </div>

            <div className="text-center mt-12 sm:mt-14">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-[#0B3E8C] hover:bg-[#C8102E] text-white font-bold text-sm px-8 py-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl group"
              >
                View Complete Product Range
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </Link>
            </div>
          </div>

          <style>{`
    @keyframes catFadeUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `}</style>
        </section>

        {/* ==================== FEATURED ==================== */}
        <section className="py-16 sm:py-20 lg:py-28 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1E6FD9]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C8102E]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-[1320px] mx-auto px-5 sm:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase text-[#1E6FD9] mb-4 justify-center">
                <span className="w-6 h-px bg-[#E63946]" />
                Featured Products
                <span className="w-6 h-px bg-[#E63946]" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B3E8C] tracking-tight leading-tight mb-5">
                Precision-Engineered{" "}
                <em className="not-italic text-[#C8102E]">Specifications.</em>
              </h2>
              <p className="text-[#5a6b7d] font-medium leading-relaxed max-w-2xl mx-auto">
                Selected industrial products with full traceability and material
                certification.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {[
                "dairy-fittings",
                "hose-pipe",
                "forged-fittings",
                "patta-patti",
                "perforated-sheet",
                "wire-mesh",
              ]
                .map((slug) => products.find((c) => c.slug === slug))
                .filter(Boolean)
                .map((p, i) => (
                  <div
                    key={`${p.id}-${i}`}
                    className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-[0_25px_60px_rgba(11,62,140,0.15)] hover:border-[#1E6FD9]/50 hover:-translate-y-2 transition-all duration-500 flex flex-col"
                    style={{
                      animation: `featFadeUp 0.6s ease ${i * 0.08}s both`,
                    }}
                  >
                    <Link to={`/categories/${p.slug}`} className="block">
                      <div className="relative aspect-[16/11] overflow-hidden bg-gray-100">
                        <span className="absolute top-4 left-4 z-20 bg-gradient-to-r from-[#C8102E] to-[#E63946] text-white text-[0.65rem] font-bold tracking-widest uppercase px-3 py-1.5 rounded-md shadow-lg border border-white/10">
                          ★ Featured
                        </span>
                        <span className="absolute top-0 right-0 z-20 w-20 h-20 bg-[#C8102E] rotate-45 translate-x-10 -translate-y-10 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500" />
                        <img
                          src={p.image || "/images/categories/placeholder.jpg"}
                          alt={p.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                          onError={(e) => {
                            e.target.style.display = "none";
                          }}
                        />
                        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </Link>

                    <div className="p-5 sm:p-6 flex flex-col flex-1">
                      <Link to={`/categories/${p.slug}`}>
                        <h3 className="text-lg font-bold text-[#0B3E8C] mb-4 leading-snug group-hover:text-[#C8102E] transition-colors duration-300">
                          {p.name}
                        </h3>
                      </Link>

                      <div className="space-y-2.5 py-4 border-y border-gray-100 mb-5">
                        <div className="flex justify-between gap-3 text-sm">
                          <span className="text-[#8896a6] font-medium">
                            Division
                          </span>
                          <span className="font-bold text-[#0B3E8C] text-right capitalize">
                            {p.division}
                          </span>
                        </div>
                        <div className="flex justify-between gap-3 text-sm">
                          <span className="text-[#8896a6] font-medium">
                            Type
                          </span>
                          <span className="font-bold text-[#0B3E8C] text-right">
                            {p.desc?.split("&")[0]?.trim() || "Industrial"}
                          </span>
                        </div>
                      </div>

                      <div className="flex gap-2.5 mt-auto">
                        <Link
                          to={`/categories/${p.slug}`}
                          className="flex-1 text-xs font-bold tracking-widest uppercase py-3 rounded-lg border-2 border-[#0B3E8C]/15 group-hover:border-[#C8102E] group-hover:text-[#C8102E] text-[#0B3E8C] text-center transition-all duration-300"
                        >
                          View Details
                        </Link>

                        <a
                          href={`https://wa.me/917021519829?text=${encodeURIComponent(
                            `Hello Shree Ganesh Steel, I would like to inquire about: ${p.name}\n\nPlease share pricing and availability.`,
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 text-xs font-bold tracking-widest uppercase py-3 rounded-lg bg-[#0B3E8C] hover:bg-[#25d366] text-white text-center transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center justify-center gap-1.5"
                        >
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                          </svg>
                          Send Inquiry
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <div className="text-center mt-12 sm:mt-14">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-[#0B3E8C] hover:bg-[#C8102E] text-white font-bold text-sm px-8 py-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl group"
              >
                View All Products
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </Link>
            </div>
          </div>

          <style>{`
    @keyframes featFadeUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `}</style>
        </section>

        {/* ==================== WHY US ==================== */}
        <section
          id="why"
          className="py-16 sm:py-20 lg:py-28 bg-[#0B3E8C] text-white relative overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 w-[600px] h-[600px] bg-[#1E6FD9]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-[#C8102E]/20 rounded-full blur-3xl pointer-events-none" />
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(30,111,217,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(30,111,217,0.5) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <div className="max-w-[1320px] mx-auto px-5 sm:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase text-white mb-4 justify-center">
                <span className="w-6 h-px bg-[#E63946]" />
                Why Choose Us
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-5">
                Why Industries Choose
                <br />
                <em className="not-italic text-[#E63946]">
                  Shree Ganesh Steel.
                </em>
              </h2>
              <p className="text-white font-bold leading-relaxed max-w-2xl mx-auto">
                Six pillars that define our commitment to industrial excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {[
                {
                  n: "01",
                  t: "Premium Quality",
                  d: "Consistent quality materials meeting industrial requirements.",
                  accent: "#E63946",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-full h-full"
                    >
                      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" />
                      <path d="M12 22V12" />
                      <path d="M3 7l9 5 9-5" />
                    </svg>
                  ),
                },
                {
                  n: "02",
                  t: "Wide Product Range",
                  d: "Comprehensive range of steel products and fittings.",
                  accent: "#4A9EFF",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-full h-full"
                    >
                      <rect x="3" y="3" width="7" height="7" rx="1" />
                      <rect x="14" y="3" width="7" height="7" rx="1" />
                      <rect x="3" y="14" width="7" height="7" rx="1" />
                      <rect x="14" y="14" width="7" height="7" rx="1" />
                    </svg>
                  ),
                },
                {
                  n: "03",
                  t: "Technical Expertise",
                  d: "Experienced team focused on accurate product specifications.",
                  accent: "#E63946",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-full h-full"
                    >
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24" />
                    </svg>
                  ),
                },
                {
                  n: "04",
                  t: "Reliable Supply",
                  d: "Efficient sourcing, inventory management and timely dispatch.",
                  accent: "#4A9EFF",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-full h-full"
                    >
                      <path d="M1 3h15v13H1z" />
                      <path d="M16 8h4l3 3v5h-7V8z" />
                      <circle cx="5.5" cy="18.5" r="2.5" />
                      <circle cx="18.5" cy="18.5" r="2.5" />
                    </svg>
                  ),
                },
                {
                  n: "05",
                  t: "Custom Requirements",
                  d: "Solutions based on customer-specific sizes and specifications.",
                  accent: "#E63946",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-full h-full"
                    >
                      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
                    </svg>
                  ),
                },
                {
                  n: "06",
                  t: "Customer First",
                  d: "Long-term relationships built on trust and transparency.",
                  accent: "#4A9EFF",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-full h-full"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  ),
                },
              ].map((x, i) => (
                <div
                  key={i}
                  className="group relative p-7 sm:p-8 bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 rounded-xl hover:border-[#4A9EFF]/50 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(30,111,217,0.2)] transition-all duration-500 overflow-hidden"
                  style={{ animation: `fadeInUp 0.6s ease ${i * 0.1}s both` }}
                >
                  <span
                    className="absolute top-0 left-0 w-full h-0.5 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                    style={{
                      background: `linear-gradient(to right, ${x.accent}, ${x.accent}, transparent)`,
                    }}
                  />
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1E6FD9]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
                  <span
                    className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ backgroundColor: `${x.accent}30` }}
                  />

                  <div className="relative flex items-start justify-between mb-6">
                    <div
                      className="w-12 h-12 sm:w-14 sm:h-14 p-2.5 rounded-lg border text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                      style={{
                        backgroundColor: `${x.accent}20`,
                        borderColor: `${x.accent}50`,
                      }}
                    >
                      {x.icon}
                    </div>
                    <span
                      className="font-medium text-xs text-white font-bold tracking-widest transition-colors duration-300 pt-2"
                      // style={{ color: `${x.accent}99` }}
                    >
                      {x.n}
                    </span>
                  </div>

                  <div className="relative">
                    <h3
                      className="text-lg sm:text-xl font-bold mb-3 text-white transition-colors duration-300 leading-snug"
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = x.accent)
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "white")
                      }
                    >
                      {x.t}
                    </h3>
                    <p className="text-sm sm:text-[0.95rem] text-white/70 group-hover:text-white/90 leading-relaxed transition-colors duration-300">
                      {x.d}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <style>{`
            @keyframes fadeInUp {
              from { opacity: 0; transform: translateY(30px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>
        </section>

        {/* ==================== INDUSTRIES ==================== */}
        <section id="industries" className="py-16 sm:py-20 lg:py-28 bg-white">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase text-[#1E6FD9] mb-4">
                <span className="w-6 h-px bg-[#E63946]" />
                Industries We Serve
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B3E8C] tracking-tight leading-tight mb-5">
                Serving{" "}
                <em className="not-italic text-[#C8102E]">
                  Critical Industries.
                </em>
              </h2>
              <p className="text-[#5a6b7d] font-medium leading-relaxed">
                Reliable steel supply across industries that demand precision,
                durability and compliance.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {industries.map((ind, i) => (
                <div
                  key={i}
                  className="relative rounded-lg overflow-hidden cursor-pointer group"
                >
                  <img
                    src={ind.image}
                    alt={ind.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 transition-all duration-300" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <h4 className="text-base font-bold group-hover:text-[#E63946] transition-colors">
                      {ind.name}
                    </h4>
                    <span className="inline-block text-[#E63946] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 mt-1">
                      →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== QUALITY ==================== */}
        <section id="quality" className="py-16 sm:py-20 lg:py-28 bg-[#f7f8fa]">
          <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
              <div className="rounded-xl overflow-hidden shadow-2xl aspect-[4/3] max-w-md mx-auto lg:max-w-none w-full relative">
                <img
                  src="/images/hero/quality.jpg"
                  alt="Quality inspection"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase text-[#1E6FD9] mb-4">
                  <span className="w-6 h-px bg-[#E63946]" />
                  Quality Assurance
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B3E8C] tracking-tight leading-tight mb-6">
                  Quality You Can
                  <br />
                  <em className="not-italic text-[#C8102E]">
                    Measure. Trust You Can Build.
                  </em>
                </h2>
                <p className="text-[#5a6b7d] font-medium leading-relaxed mb-8">
                  Every product passes through stringent inspection protocols
                  ensuring dimensional accuracy, material integrity and full
                  documentation.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {[
                    {
                      t: "Material Quality",
                      d: "Certified raw materials from approved sources.",
                    },
                    {
                      t: "Dimensional Accuracy",
                      d: "Precise tolerance control as per standards.",
                    },
                    {
                      t: "Inspection & Testing",
                      d: "Multi-stage QC with documented test reports.",
                    },
                    {
                      t: "Packaging & Docs",
                      d: "Export-grade packing with full documentation.",
                    },
                  ].map((p, i) => (
                    <div
                      key={i}
                      className="p-4 bg-white border border-gray-200 rounded-lg hover:border-[#C8102E] hover:-translate-y-0.5 hover:shadow-md transition-all"
                    >
                      <b className="block text-xs font-bold tracking-wider uppercase text-[#0B3E8C] mb-1.5">
                        {p.t}
                      </b>
                      <p className="text-xs text-[#5a6b7d]">{p.d}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 mb-8">
                  {["ISO 9001:2015", "MSME", "MTC"].map((c, i) => (
                    <div
                      key={i}
                      className="px-4 py-2.5 bg-white border border-gray-200 rounded-md font-medium text-xs font-bold tracking-widest uppercase text-[#0B3E8C] hover:border-[#C8102E] hover:text-[#C8102E] transition-all"
                    >
                      {c}
                    </div>
                  ))}
                </div>

                <Link
                  to="/"
                  className="inline-flex items-center gap-2 bg-[#0B3E8C] hover:bg-[#C8102E] text-white font-bold text-sm px-7 py-3.5 rounded-md transition-all duration-300"
                >
                  View Quality Standards <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== INFRASTRUCTURE ==================== */}
        <section id="infra" className="relative py-20 lg:py-32 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("/images/infrastructure.jpg")' }}
          />
          <div className="absolute inset-0 bg-[#0B3E8C]/5" />

          <div className="max-w-[1320px] mx-auto px-5 sm:px-8 relative z-10 text-white">
            {/* GLASS CONTAINER */}
            <div
              className="max-w-3xl rounded-2xl p-7 sm:p-9 lg:p-11 border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.35)]"
              style={{
                background: "rgba(255, 255, 225, 0.02)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
              }}
            >
              <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.25em] uppercase text-white mb-5">
                <span className="w-8 h-px bg-[#E63946]" />
                Infrastructure
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-tight mb-6">
                Built for Scale.
                <br />
                <em className="not-italic text-[#E63946]">
                  Ready for Industry.
                </em>
              </h2>

              <p className="text-white leading-relaxed mb-10 text-base font-bold sm:text-lg">
                Our warehouse and dispatch infrastructure is designed to handle
                bulk industrial orders with efficiency from inventory management
                and material handling to export-grade packaging.
              </p>

              <Link
                to="/"
                className="inline-flex items-center gap-2 bg-[#C8102E] hover:bg-[#1E6FD9] text-white font-bold text-sm px-7 py-3.5 rounded-md shadow-md transition-all"
              >
                Explore Our Infrastructure <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ==================== GLOBAL ==================== */}
        <section className="py-16 sm:py-20 lg:py-28 bg-[#f7f8fa]">
          <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.25em] uppercase text-[#1E6FD9] mb-4 justify-center">
                <span className="w-6 h-px bg-[#E63946]" />
                Global Presence
                <span className="w-6 h-px bg-[#E63946]" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B3E8C] tracking-tight leading-tight mb-5">
                Countries We{" "}
                <em className="not-italic text-[#C8102E]">Export To.</em>
              </h2>
              <p className="text-[#5a6b7d] font-medium leading-relaxed">
                We proudly serve clients across 50+ countries worldwide with our
                premium metal products.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
              {[
                { code: "us", name: "United States" },
                { code: "ca", name: "Canada" },
                { code: "mx", name: "Mexico" },
                { code: "gb", name: "United Kingdom" },
                { code: "de", name: "Germany" },
                { code: "fr", name: "France" },
                { code: "it", name: "Italy" },
                { code: "es", name: "Spain" },
                { code: "pt", name: "Portugal" },
                { code: "nl", name: "Netherlands" },
                { code: "be", name: "Belgium" },
                { code: "ch", name: "Switzerland" },
                { code: "at", name: "Austria" },
                { code: "se", name: "Sweden" },
                { code: "no", name: "Norway" },
                { code: "dk", name: "Denmark" },
                { code: "ae", name: "UAE" },
                { code: "sa", name: "Saudi Arabia" },
                { code: "sg", name: "Singapore" },
                { code: "au", name: "Australia" },
              ].map((c, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-lg p-5 shadow-[0_2px_8px_rgba(11,62,140,0.06)] hover:shadow-[0_20px_50px_rgba(200,16,46,0.15)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center cursor-pointer border border-gray-100 hover:border-transparent relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C8102E] via-[#1E6FD9] to-[#0B3E8C] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                  <div className="relative z-10 w-full flex flex-col items-center">
                    <div className="w-14 h-10 sm:w-16 sm:h-12 rounded overflow-hidden shadow-sm mb-3 group-hover:scale-110 transition-transform duration-300 bg-gray-100">
                      <img
                        src={`https://flagcdn.com/w160/${c.code}.png`}
                        srcSet={`https://flagcdn.com/w320/${c.code}.png 2x`}
                        alt={`${c.name} flag`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#0B3E8C] group-hover:text-white transition-colors duration-300 uppercase tracking-wider leading-tight mb-3">
                      {c.name}
                    </h4>
                    <div className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <span className="inline-flex items-center gap-1.5 text-[0.65rem] font-bold tracking-widest uppercase text-white bg-white/20 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/30">
                        ✈ Export Market
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== CTA ==================== */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center scale-105 animate-[subtleZoom_20s_ease-in-out_infinite_alternate]"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=85")',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B3E8C]/95 via-[#0B3E8C]/90 to-[#092a54]/85" />
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#1E6FD9]/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#C8102E]/25 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(30,111,217,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(30,111,217,0.8) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C8102E] to-transparent" />

          <div className="max-w-[1320px] mx-auto px-5 sm:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.25em] uppercase text-white mb-6 justify-center">
                <span className="w-8 h-px bg-[#E63946]" />
                Get Started Today
                <span className="w-8 h-px bg-[#E63946]" />
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
                Have a{" "}
                <em className="not-italic text-[#E63946] relative inline-block">
                  Steel Requirement?
                </em>
              </h2>

              <p className="text-white font-bold text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                Tell us what you need. Our team will help you find the right
                product and specification —{" "}
                <span className="text-[#E63946] font-semibold">
                  within 24 hours
                </span>
                .
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <a
                  href="https://wa.me/917313726773?text=Hello%20Shree%20Ganesh%20Steel%2C%20I%20would%20like%20to%20request%20a%20quote."
                  target="_blank"
                  rel="noreferrer"
                  className="group relative inline-flex items-center justify-center gap-2 bg-[#C8102E] hover:bg-[#1E6FD9] text-white font-bold text-sm px-8 py-4 rounded-lg shadow-[0_10px_30px_rgba(200,16,46,0.4)] hover:shadow-[0_15px_40px_rgba(30,111,217,0.5)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="relative"
                  >
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="12" y1="18" x2="12" y2="12" />
                    <line x1="9" y1="15" x2="15" y2="15" />
                  </svg>
                  <span className="relative">Request a Quote</span>
                  <span className="relative group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </a>
                <a
                  href="tel:+917313726773"
                  className="group inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-[#E63946] hover:bg-[#C8102E]/10 text-white hover:text-[#E63946] font-semibold text-sm px-8 py-4 rounded-lg transition-all duration-300 backdrop-blur-sm"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Talk to Our Team
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pt-8 border-t border-white/15">
                {[
                  {
                    icon: (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    ),
                    text: "24-Hour Response",
                  },
                  {
                    icon: (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" />
                        <path d="M9 12l2 2 4-4" />
                      </svg>
                    ),
                    text: "ISO 9001:2015 Certified",
                  },
                  {
                    icon: (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                      </svg>
                    ),
                    text: "Global Supply",
                  },
                  {
                    icon: (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                      </svg>
                    ),
                    text: "500+ Happy Clients",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group inline-flex items-center gap-2 text-xs sm:text-sm text-white hover:text-[#E63946] transition-colors duration-300"
                  >
                    <span className="text-[#E63946] group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <style>{`
            @keyframes subtleZoom {
              from { transform: scale(1.05); }
              to { transform: scale(1.15); }
            }
          `}</style>
        </section>

        {/* ==================== CONTACT ==================== */}
        <section
          id="contact"
          className="py-16 sm:py-20 lg:py-28 bg-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1E6FD9]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C8102E]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-[1320px] mx-auto px-5 sm:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase text-[#1E6FD9] mb-4 justify-center">
                <span className="w-6 h-px bg-[#E63946]" />
                Get In Touch
                <span className="w-6 h-px bg-[#E63946]" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B3E8C] tracking-tight leading-tight mb-5">
                Let's Discuss{" "}
                <em className="not-italic text-[#C8102E]">
                  Your Requirements.
                </em>
              </h2>
              <p className="text-[#5a6b7d]/60 font-bold leading-relaxed max-w-2xl mx-auto">
                Reach out to us for product inquiries, bulk orders or technical
                consultation.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div className="space-y-4">
                {[
                  {
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-full h-full"
                      >
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                      </svg>
                    ),
                    label: "Phone",
                    value: "+91 73137 26773",
                    href: "tel:+917313726773",
                  },
                  {
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-full h-full"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    ),
                    label: "Email",
                    value: "info@shreeganeshsteel.com",
                    href: "mailto:info@shreeganeshsteel.com",
                  },
                  {
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-full h-full"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    ),
                    label: "Address",
                    value:
                      "191, Ground Floor, 2'nd Khumbharwada, Near Gol Deval Temple, Mumbai-400004, Maharashtra, India",
                    href: "https://maps.google.com/?q=Mumbai,India",
                  },
                  {
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-full h-full"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                    ),
                    label: "WhatsApp",
                    value: "+91 73137 26773",
                    href: "https://wa.me/917313726773",
                  },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http") ? "noreferrer" : undefined
                    }
                    className="group flex gap-4 items-start p-4 sm:p-5 bg-white border border-gray-200 rounded-2xl hover:border-[#C8102E] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(200,16,46,0.1)] transition-all duration-400 relative overflow-hidden"
                  >
                    <span className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-[#C8102E] to-transparent scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" />
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 mt-0.5">
                      <div className="absolute inset-0 rounded-xl bg-[#f7f8fa] border border-gray-200 group-hover:bg-gradient-to-br group-hover:from-[#C8102E] group-hover:to-[#1E6FD9] group-hover:border-[#C8102E] transition-all duration-500" />
                      <div className="relative w-full h-full p-3 flex items-center justify-center text-[#C8102E] group-hover:text-white group-hover:rotate-6 transition-all duration-500">
                        {item.icon}
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <b className="block text-[0.7rem] font-bold tracking-widest uppercase text-[#8896a6] mb-1.5 group-hover:text-[#C8102E] transition-colors">
                        {item.label}
                      </b>
                      <p className="text-sm sm:text-base font-semibold text-[#0B3E8C] m-0 break-words leading-relaxed">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="relative p-7 sm:p-10 bg-gradient-to-br from-[#0B3E8C] to-[#092a54] rounded-2xl shadow-[0_25px_60px_rgba(11,62,140,0.2)] overflow-hidden">
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#1E6FD9]/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#C8102E]/20 rounded-full blur-3xl pointer-events-none" />

                <div className="relative">
                  <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-white mb-4">
                    <span className="w-4 h-px bg-[#E63946]" />
                    Quick Enquiry
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                    Send us a message
                  </h3>
                  <p className="text-sm text-white/70 mb-7">
                    We respond within 24 hours.
                  </p>

                  <form
                    action="https://formspree.io/f/xyzabcde"
                    method="POST"
                    className="space-y-3.5"
                  >
                    <div className="grid sm:grid-cols-2 gap-3.5">
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your Name *"
                        className="w-full px-4 py-3.5 bg-white/[0.06] border border-white/15 rounded-lg text-sm text-white placeholder:text-white/50 focus:border-[#E63946] focus:bg-white/[0.08] focus:ring-2 focus:ring-[#E63946]/20 outline-none transition-all"
                      />
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Your Email *"
                        className="w-full px-4 py-3.5 bg-white/[0.06] border border-white/15 rounded-lg text-sm text-white placeholder:text-white/50 focus:border-[#E63946] focus:bg-white/[0.08] focus:ring-2 focus:ring-[#E63946]/20 outline-none transition-all"
                      />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3.5 bg-white/[0.06] border border-white/15 rounded-lg text-sm text-white placeholder:text-white/50 focus:border-[#E63946] focus:bg-white/[0.08] focus:ring-2 focus:ring-[#E63946]/20 outline-none transition-all"
                    />
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className="w-full px-4 py-3.5 bg-white/[0.06] border border-white/15 rounded-lg text-sm text-white placeholder:text-white/50 focus:border-[#E63946] focus:bg-white/[0.08] focus:ring-2 focus:ring-[#E63946]/20 outline-none transition-all"
                    />
                    <textarea
                      name="message"
                      rows="4"
                      required
                      placeholder="Your Message *"
                      className="w-full px-4 py-3.5 bg-white/[0.06] border border-white/15 rounded-lg text-sm text-white placeholder:text-white/50 focus:border-[#E63946] focus:bg-white/[0.08] focus:ring-2 focus:ring-[#E63946]/20 outline-none transition-all resize-y min-h-[120px]"
                    />
                    <button
                      type="submit"
                      className="group w-full inline-flex items-center justify-center gap-2 bg-[#C8102E] hover:bg-[#1E6FD9] text-white font-bold text-sm px-7 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    >
                      Send Message
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        →
                      </span>
                    </button>
                    <p className="text-[1rem] text-center text-white  pt-2">
                      Or email us directly at{" "}
                      <a
                        href="mailto:info@shreeganeshsteel.com"
                        className="text-[#E63946] font-bold hover:underline"
                      >
                        info@shreeganeshsteel.com
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
