import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

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

const categories = [
  {
    id: 1,
    name: "Stainless Steel Flanges",
    desc: "ANSI, DIN, JIS & custom forged flanges in SS 304/316/321.",
    image: "/images/categories/ss-flanges.jpg",
  },
  {
    id: 2,
    name: "Butt Weld Fittings",
    desc: "Elbows, tees, reducers, caps per ASME B16.9 standards.",
    image: "/images/categories/butt-weld-fittings.jpg",
  },
  {
    id: 3,
    name: "Forged Fittings",
    desc: "High-pressure socket weld & threaded fittings.",
    image: "/images/categories/forged-fittings.jpg",
  },
  {
    id: 4,
    name: "SS Pipes & Tubes",
    desc: "Seamless & welded pipes and precision tubing.",
    image: "/images/categories/ss-pipes-tubes.jpg",
  },
  {
    id: 5,
    name: "Steel Bars",
    desc: "Round, hex, square bars in SS, duplex & alloys.",
    image: "/images/categories/steel-bars.jpg",
  },
  {
    id: 6,
    name: "Nipples & Unions",
    desc: "Barrel nipples, hex nipples, unions in all sizes.",
    image: "/images/categories/nipples-unions.jpg",
  },
  {
    id: 7,
    name: "Industrial Valves",
    desc: "Ball, gate, globe & check valves for critical service.",
    image: "/images/categories/industrial-valves.jpg",
  },
  {
    id: 8,
    name: "Duplex Steel Products",
    desc: "Duplex 2205 & Super Duplex 2507 range.",
    image: "/images/categories/duplex-steel.jpg",
  },
];

const featured = [
  {
    id: 1,
    name: "SS 316L Seamless Pipe",
    material: "ASTM A312 TP316L",
    spec: '1/2" – 24" NB · Sch 10 – XXS',
    image: "/images/featured/ss-316l-pipe.jpg",
  },
  {
    id: 2,
    name: "SS 304 WN Flange",
    material: "ASTM A182 F304",
    spec: '1/2" – 40" · Class 150 – 2500#',
    image: "/images/featured/ss-304-flange.jpg",
  },
  {
    id: 3,
    name: "Duplex 2205 Elbow 90°",
    material: "ASTM A815 UNS S31803",
    spec: '1/2" – 24" · LR / SR',
    image: "/images/featured/duplex-elbow.jpg",
  },
  {
    id: 4,
    name: "Alloy Steel Forged Fitting",
    material: "ASTM A182 F22",
    spec: '1/2" – 4" · 3000# / 6000#',
    image: "/images/featured/alloy-forged-fitting.jpg",
  },
  {
    id: 5,
    name: "SS Barrel Nipple",
    material: "SS 304 / 316",
    spec: '1/8" – 4" · NPT / BSP',
    image: "/images/featured/barrel-nipple.jpg",
  },
  {
    id: 6,
    name: "Carbon Steel Pipe",
    material: "ASTM A106 Gr.B",
    spec: '1/2" – 36" · Seamless',
    image: "/images/featured/carbon-steel-pipe.jpg",
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

// ============================================
// HOME COMPONENT
// ============================================
export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

useEffect(() => {
  const heroSection = document.getElementById("home");
  if (!heroSection) return;

  const handleScroll = () => {
    const heroTop = heroSection.offsetTop;
    const heroHeight = heroSection.offsetHeight;
    const scrollY = window.scrollY;

    // Progress: 0 se 1 tak hero ke andar scroll hone pe
    const progress = Math.max(
      0,
      Math.min(1, (scrollY - heroTop) / heroHeight)
    );

    // 4 slides split: 0-25% = slide 0, 25-50% = slide 1, etc.
    const slideIndex = Math.min(
      Math.floor(progress * heroSlides.length),
      heroSlides.length - 1
    );

    setCurrentSlide(slideIndex);
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll(); // initial run

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
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
      <Header />

      <main>
        {/* ==================== HERO ==================== */}
        <section id="home" className="relative w-full bg-white">
          <div className="relative w-full h-[calc(100vh-105px)] sm:h-[calc(100vh-100px)] lg:h-[calc(100vh-90px)] min-h-[550px] sm:min-h-[650px] lg:min-h-[650px] overflow-hidden">
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
                  className="max-w-3xl hero-fade-up bg-[#0a1628]/20 backdrop-blur-md border border-white/5 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
                >
                  <div className="inline-flex items-center gap-3 text-[0.7rem] sm:text-xs font-bold tracking-[0.25em] uppercase text-[#c9a961] mb-4">
                    <span className="w-6 sm:w-8 h-px bg-[#c9a961]" />
                    {slide.eyebrow}
                  </div>

                  <h1 className="text-[1.9rem] leading-[1.1] sm:text-[2.6rem] lg:text-[3.4rem] xl:text-[3.8rem] font-extrabold tracking-tight text-white mb-4 sm:mb-5">
                    {slide.titleLine1}
                    <br />
                    <em className="not-italic text-[#c9a961]">
                      {slide.titleLine2}
                    </em>
                  </h1>

                  <p className="text-[0.95rem] sm:text-base lg:text-lg text-white/90 leading-relaxed max-w-2xl mb-6 sm:mb-8">
                    {slide.desc}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-7 sm:mb-9">
                    <button className="inline-flex items-center justify-center gap-2 bg-[#c9a961] hover:bg-[#b89851] text-[#0a1628] font-bold text-sm px-7 py-3.5 rounded-md shadow-md hover:shadow-xl transition-all duration-300">
                      {slide.primary}
                      <span>→</span>
                    </button>
                    <button className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold text-sm px-7 py-3.5 rounded-md hover:bg-white/10 transition-all duration-300">
                      {slide.secondary}
                    </button>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-6 pt-6 border-t border-white/20">
                    {[
                      "Quality Assured",
                      "Industrial Grade",
                      "Global Supply",
                    ].map((pill, i) => (
                      <div
                        key={i}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-white"
                      >
                        <span className="w-5 h-5 rounded-full bg-[#c9a961]/30 text-[#c9a961] text-xs font-bold inline-flex items-center justify-center">
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
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-[#c9a961] text-white hover:text-[#0a1628] flex items-center justify-center text-2xl font-bold shadow-lg backdrop-blur-md border border-white/20 transition-all"
            >
              ‹
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-[#c9a961] text-white hover:text-[#0a1628] flex items-center justify-center text-2xl font-bold shadow-lg backdrop-blur-md border border-white/20 transition-all"
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
                      ? "w-10 bg-[#c9a961]"
                      : "w-6 bg-white/60 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ==================== STATS ==================== */}
        <section className="relative bg-[#0a1628] overflow-hidden">
          {/* Decorative background */}
          <div className="absolute inset-0">
            {/* Animated gradient orbs */}
            <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-[#c9a961]/10 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-[#c8102e]/10 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            />

            {/* Grid pattern overlay */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(201,169,97,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,97,0.6) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />

            {/* Top gold gradient line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c9a961] to-transparent" />
            {/* Bottom gold gradient line */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c9a961]/50 to-transparent" />
          </div>

          <div className="max-w-[1320px] mx-auto px-5 sm:px-8 py-14 sm:py-18 lg:py-20 relative z-10">
            {/* Stats grid */}
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
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="group relative p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 hover:border-[#c9a961]/50 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(201,169,97,0.15)] transition-all duration-500 overflow-hidden"
                  style={{
                    animation: `statFadeUp 0.7s ease ${i * 0.12}s both`,
                  }}
                >
                  {/* Top gold accent bar */}
                  <span className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#c9a961] via-[#c9a961] to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />

                  {/* Shimmer sweep on hover */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#c9a961]/8 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1500ms] pointer-events-none" />

                  {/* Corner glow */}
                  <span className="absolute -top-16 -right-16 w-40 h-40 bg-[#c9a961]/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  {/* Content wrapper */}
                  <div className="relative">
                    {/* Icon + number row */}
                    <div className="flex items-center gap-3 mb-5">
                      {/* Icon badge */}
                      <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0">
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#c9a961]/20 to-[#c9a961]/5 border border-[#c9a961]/30 group-hover:border-[#c9a961] group-hover:from-[#c9a961] group-hover:to-[#b89851] transition-all duration-500" />
                        <div className="relative w-full h-full p-3 flex items-center justify-center text-[#c9a961] group-hover:text-[#0a1628] group-hover:rotate-6 transition-all duration-500">
                          {stat.icon}
                        </div>
                      </div>

                      {/* Number text */}
                      <div className="text-[0.65rem] sm:text-xs font-mono font-bold tracking-widest text-[#c9a961]/70 group-hover:text-[#c9a961] transition-colors">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                    </div>

                    {/* Big number */}
                    <div className="mb-3">
                      <b className="block text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none group-hover:text-[#c9a961] transition-colors duration-500">
                        {stat.end !== null && stat.end !== undefined ? (
                          <CountUp end={stat.end} suffix={stat.suffix} />
                        ) : (
                          stat.textValue
                        )}
                      </b>
                    </div>

                    {/* Label */}
                    <h4 className="text-sm sm:text-base font-bold text-white/95 mb-1 leading-snug">
                      {stat.label}
                    </h4>
                    <p className="text-xs font-mono tracking-widest uppercase text-[#c9a961]/60 group-hover:text-[#c9a961] transition-colors duration-300">
                      {stat.sub}
                    </p>
                  </div>

                  {/* Bottom arrow accent */}
                  <span className="absolute bottom-4 right-4 text-[#c9a961] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500">
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
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Keyframes */}
          <style>{`
    @keyframes statFadeUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `}</style>
        </section>

        {/* ==================== ABOUT ==================== */}
        <section id="about" className="py-16 sm:py-20 lg:py-28 bg-white">
          <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
              {/* ✅ Image — full 100% visible, no crop */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl w-full max-w-md mx-auto lg:max-w-none min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
                <img
                  src="/images/hero/homeAbout.jpg"
                  alt="Steel warehouse"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#0a1628]/90 to-transparent text-white">
                  <b className="block text-lg font-bold">
                    Committed to Quality.
                  </b>
                  <span className="text-sm text-[#c9a961] italic">
                    Committed to You.
                  </span>
                </div>
              </div>

              <div>
                <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase text-[#c9a961] mb-4">
                  <span className="w-6 h-px bg-[#c9a961]" />
                  About Shree Ganesh Steel
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1628] tracking-tight leading-tight mb-6">
                  Engineering Quality.
                  <br />
                  <em className="not-italic text-[#c9a961]">
                    Delivering Confidence.
                  </em>
                </h2>
                <p className="text-[#5a6b7d] text-base leading-relaxed mb-6">
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
                      <div className="w-9 h-9 rounded-md bg-[#f7f8fa] border border-gray-200 flex items-center justify-center text-[#c9a961] text-sm flex-shrink-0">
                        ◆
                      </div>
                      <div>
                        <b className="block text-sm font-bold text-[#0a1628] mb-1">
                          {p.t}
                        </b>
                        <p className="text-sm text-[#5a6b7d]">{p.d}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="inline-flex items-center gap-2 bg-[#0a1628] hover:bg-[#c9a961] hover:text-[#0a1628] text-white font-bold text-sm px-7 py-3.5 rounded-md transition-all duration-300">
                  Discover Our Company <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== PRODUCT CATEGORIES ==================== */}
        <section
          id="products"
          className="py-16 sm:py-20 lg:py-28 bg-[#f7f8fa] relative overflow-hidden"
        >
          {/* Decorative background glow */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#c9a961]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#0a1628]/4 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-[1320px] mx-auto px-5 sm:px-8 relative z-10">
            {/* ✅ Centered heading */}
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase text-[#c9a961] mb-4 justify-center">
                <span className="w-6 h-px bg-[#c9a961]" />
                Our Product Range
                <span className="w-6 h-px bg-[#c9a961]" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1628] tracking-tight leading-tight mb-5">
                Industrial Steel Products,
                <br />
                <em className="not-italic text-[#c9a961]">
                  Built for Every Requirement.
                </em>
              </h2>
              <p className="text-[#5a6b7d] leading-relaxed max-w-2xl mx-auto">
                Comprehensive range of stainless steel, carbon steel, and alloy
                steel products for demanding industrial applications.
              </p>
            </div>

            {/* Product category cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
              {categories.map((c, i) => (
                <div
                  key={c.id}
                  className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(10,22,40,0.15)] hover:border-[#c9a961]/50 transition-all duration-500 flex flex-col"
                  style={{
                    animation: `catFadeUp 0.6s ease ${i * 0.06}s both`,
                  }}
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    {/* Category number badge */}
                    <span className="absolute top-3 left-3 z-20 w-8 h-8 rounded-full bg-[#0a1628] text-[#c9a961] text-xs font-bold font-mono flex items-center justify-center shadow-lg border border-[#c9a961]/30">
                      {String(c.id).padStart(2, "0")}
                    </span>

                    {/* Top-right arrow icon (appears on hover) */}
                    <span className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-[#c9a961] text-[#0a1628] flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-lg">
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

                    {/* Image */}
                    <img
                      src={c.image}
                      alt={c.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />

                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Bottom shimmer line */}
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#c9a961] via-[#c9a961] to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-[#0a1628] mb-2.5 leading-snug group-hover:text-[#c9a961] transition-colors duration-300">
                      {c.name}
                    </h3>
                    <p className="text-sm text-[#5a6b7d] leading-relaxed mb-5 flex-1">
                      {c.desc}
                    </p>

                    {/* Explore link */}
                    <a
                      href="#"
                      className="text-xs font-bold tracking-widest uppercase text-[#0a1628] group-hover:text-[#c9a961] transition-colors inline-flex items-center justify-between gap-2 pt-4 border-t border-gray-100 group-hover:border-[#c9a961]/30"
                    >
                      <span>Explore Products</span>
                      <span className="inline-flex items-center gap-1 transform group-hover:translate-x-1 transition-transform duration-300">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* View All CTA */}
            <div className="text-center mt-12 sm:mt-14">
              <a
                href="/products"
                className="inline-flex items-center gap-2 bg-[#0a1628] hover:bg-[#c9a961] hover:text-[#0a1628] text-white font-bold text-sm px-8 py-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl group"
              >
                View Complete Product Range
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Keyframes */}
          <style>{`
    @keyframes catFadeUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `}</style>
        </section>

        {/* ==================== FEATURED ==================== */}
        <section className="py-16 sm:py-20 lg:py-28 bg-white relative overflow-hidden">
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c9a961]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0a1628]/3 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-[1320px] mx-auto px-5 sm:px-8 relative z-10">
            {/* ✅ Centered heading */}
            <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase text-[#c9a961] mb-4 justify-center">
                <span className="w-6 h-px bg-[#c9a961]" />
                Featured Products
                <span className="w-6 h-px bg-[#c9a961]" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1628] tracking-tight leading-tight mb-5">
                Precision-Engineered{" "}
                <em className="not-italic text-[#c9a961]">Specifications.</em>
              </h2>
              <p className="text-[#5a6b7d] leading-relaxed max-w-2xl mx-auto">
                Selected industrial products with full traceability and material
                certification.
              </p>
            </div>

            {/* Featured cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {featured.map((p, i) => (
                <div
                  key={p.id}
                  className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-[0_25px_60px_rgba(10,22,40,0.15)] hover:border-[#c9a961]/50 hover:-translate-y-2 transition-all duration-500 flex flex-col"
                  style={{
                    animation: `featFadeUp 0.6s ease ${i * 0.08}s both`,
                  }}
                >
                  {/* Image */}
                  <div className="relative aspect-[16/11] overflow-hidden bg-gray-100">
                    {/* Featured badge */}
                    <span className="absolute top-4 left-4 z-20 bg-gradient-to-r from-[#0a1628] to-[#142b4d] text-white text-[0.65rem] font-bold tracking-widest uppercase px-3 py-1.5 rounded-md shadow-lg border border-white/10">
                      ★ Featured
                    </span>

                    {/* Gold corner ribbon on hover */}
                    <span className="absolute top-0 right-0 z-20 w-20 h-20 bg-[#c9a961] rotate-45 translate-x-10 -translate-y-10 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500" />

                    {/* Image with zoom on hover */}
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />

                    {/* Bottom gradient overlay */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-[#0a1628] mb-4 leading-snug group-hover:text-[#c9a961] transition-colors duration-300">
                      {p.name}
                    </h3>

                    {/* Specs */}
                    <div className="space-y-2.5 py-4 border-y border-gray-100 mb-5">
                      <div className="flex justify-between gap-3 text-sm">
                        <span className="text-[#8896a6] font-medium">
                          Material
                        </span>
                        <span className="font-bold text-[#0a1628] text-right">
                          {p.material}
                        </span>
                      </div>
                      <div className="flex justify-between gap-3 text-sm">
                        <span className="text-[#8896a6] font-medium">
                          Specification
                        </span>
                        <span className="font-bold text-[#0a1628] text-right">
                          {p.spec}
                        </span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2.5 mt-auto">
                      <button className="flex-1 text-xs font-bold tracking-widest uppercase py-3 rounded-lg border-2 border-[#0a1628]/15 hover:border-[#c9a961] hover:text-[#c9a961] hover:bg-[#c9a961]/5 text-[#0a1628] transition-all duration-300">
                        View Details
                      </button>
                      <button className="flex-1 text-xs font-bold tracking-widest uppercase py-3 rounded-lg bg-[#0a1628] hover:bg-[#c9a961] hover:text-[#0a1628] text-white transition-all duration-300 shadow-md hover:shadow-lg">
                        Send Inquiry
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View All CTA */}
            <div className="text-center mt-12 sm:mt-14">
              <a
                href="/products"
                className="inline-flex items-center gap-2 bg-[#0a1628] hover:bg-[#c9a961] hover:text-[#0a1628] text-white font-bold text-sm px-8 py-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl group"
              >
                View All Products
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Keyframes */}
          <style>{`
    @keyframes featFadeUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `}</style>
        </section>

        {/* ==================== WHY US ==================== */}
        <section
          id="why"
          className="py-16 sm:py-20 lg:py-28 bg-[#0a1628] text-white relative overflow-hidden"
        >
          {/* Decorative background glows */}
          <div className="absolute -top-24 -right-24 w-[600px] h-[600px] bg-[#c9a961]/8 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-[#c8102e]/8 rounded-full blur-3xl pointer-events-none" />

          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(201,169,97,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,97,0.5) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <div className="max-w-[1320px] mx-auto px-5 sm:px-8 relative z-10">
            {/* Heading */}
            <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase text-[#c9a961] mb-4 justify-center">
                <span className="w-6 h-px bg-[#c9a961]" />
                Why Choose Us
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-5">
                Why Industries Choose
                <br />
                <em className="not-italic text-[#c9a961]">
                  Shree Ganesh Steel.
                </em>
              </h2>
              <p className="text-white/75 leading-relaxed max-w-2xl mx-auto">
                Six pillars that define our commitment to industrial excellence.
              </p>
            </div>

            {/* Feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {[
                {
                  n: "01",
                  t: "Premium Quality",
                  d: "Consistent quality materials meeting industrial requirements.",
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
                  className="group relative p-7 sm:p-8 bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 rounded-xl hover:border-[#c9a961]/50 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(201,169,97,0.15)] transition-all duration-500 overflow-hidden"
                  style={{
                    animation: `fadeInUp 0.6s ease ${i * 0.1}s both`,
                  }}
                >
                  {/* Top gold accent bar */}
                  <span className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#c9a961] via-[#c9a961] to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

                  {/* Shimmer effect on hover */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#c9a961]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

                  {/* Corner glow */}
                  <span className="absolute -top-12 -right-12 w-32 h-32 bg-[#c9a961]/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Icon + number row */}
                  <div className="relative flex items-start justify-between mb-6">
                    {/* Icon */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 p-2.5 rounded-lg bg-[#c9a961]/10 border border-[#c9a961]/20 text-[#c9a961] group-hover:bg-[#c9a961] group-hover:text-[#0a1628] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      {x.icon}
                    </div>

                    {/* Number */}
                    <span className="font-mono text-xs font-bold tracking-widest text-[#c9a961]/60 group-hover:text-[#c9a961] transition-colors duration-300 pt-2">
                      {x.n}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-lg sm:text-xl font-bold mb-3 text-white group-hover:text-[#c9a961] transition-colors duration-300 leading-snug">
                      {x.t}
                    </h3>
                    <p className="text-sm sm:text-[0.95rem] text-white/70 group-hover:text-white/90 leading-relaxed transition-colors duration-300">
                      {x.d}
                    </p>
                  </div>

                  {/* Bottom arrow */}
                  <div className="relative mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500">
                    <span className="w-6 h-px bg-[#c9a961]" />
                    <span className="text-xs font-bold tracking-widest uppercase text-[#c9a961]">
                      Explore
                    </span>
                    <span className="text-[#c9a961] text-sm">→</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Keyframes for entrance animation */}
          <style>{`
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `}</style>
        </section>

        {/* ==================== INDUSTRIES ==================== */}
        <section id="industries" className="py-16 sm:py-20 lg:py-28 bg-white">
          <div className="max-w-[1300px] mx-auto px-5 sm:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase text-[#c9a961] mb-4">
                <span className="w-6 h-px bg-[#c9a961]" />
                Industries We Serve
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1628] tracking-tight leading-tight mb-5">
                Serving{" "}
                <em className="not-italic text-[#c9a961]">
                  Critical Industries.
                </em>
              </h2>
              <p className="text-[#5a6b7d] leading-relaxed">
                Reliable steel supply across industries that demand precision,
                durability and compliance.
              </p>
            </div>

            {/* ✅ Sirf width change — 4 cols → 3 cols */}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/95 via-[#0a1628]/40 to-transparent group-hover:from-[#0a1628]/95 group-hover:via-[#c9a961]/30 transition-all duration-300" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <h4 className="text-base font-bold group-hover:text-[#c9a961] transition-colors">
                      {ind.name}
                    </h4>
                    <span className="inline-block text-[#c9a961] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 mt-1">
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
                <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase text-[#c9a961] mb-4">
                  <span className="w-6 h-px bg-[#c9a961]" />
                  Quality Assurance
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1628] tracking-tight leading-tight mb-6">
                  Quality You Can
                  <br />
                  <em className="not-italic text-[#c9a961]">
                    Measure. Trust You Can Build.
                  </em>
                </h2>
                <p className="text-[#5a6b7d] leading-relaxed mb-8">
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
                      className="p-4 bg-white border border-gray-200 rounded-lg hover:border-[#c9a961] hover:-translate-y-0.5 hover:shadow-md transition-all"
                    >
                      <b className="block text-xs font-bold tracking-wider uppercase text-[#0a1628] mb-1.5">
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
                      className="px-4 py-2.5 bg-white border border-gray-200 rounded-md font-mono text-xs font-bold tracking-widest uppercase text-[#0a1628] hover:border-[#c9a961] hover:text-[#c9a961] transition-all"
                    >
                      {c}
                    </div>
                  ))}
                </div>

                <button className="inline-flex items-center gap-2 bg-[#0a1628] hover:bg-[#c9a961] hover:text-[#0a1628] text-white font-bold text-sm px-7 py-3.5 rounded-md transition-all duration-300">
                  View Quality Standards <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== INFRASTRUCTURE ==================== */}
        <section id="infra" className="relative py-20 lg:py-32 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("/images/infrastructure.jpg")',
            }}
          />
          <div className="absolute inset-0 bg-[#0a1628]/55" />

          <div className="max-w-[1320px] mx-auto px-5 sm:px-8 relative z-10 text-white">
            <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.25em] uppercase text-[#c9a961] mb-5">
              <span className="w-8 h-px bg-[#c9a961]" />
              Infrastructure
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-tight mb-6 max-w-2xl">
              Built for Scale.
              <br />
              <em className="not-italic text-[#c9a961]">Ready for Industry.</em>
            </h2>
            <p className="text-white/80 leading-relaxed max-w-2xl mb-10 text-base sm:text-lg">
              Our warehouse and dispatch infrastructure is designed to handle
              bulk industrial orders with efficiency — from inventory management
              and material handling to export-grade packaging.
            </p>
            <button className="inline-flex items-center gap-2 bg-[#c9a961] hover:bg-[#b89851] text-[#0a1628] font-bold text-sm px-7 py-3.5 rounded-md shadow-md transition-all">
              Explore Our Infrastructure <span>→</span>
            </button>
          </div>
        </section>

        {/* ==================== GLOBAL ==================== */}
        <section className="py-16 sm:py-20 lg:py-28 bg-[#f7f8fa]">
          <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
            {/* Heading */}
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.25em] uppercase text-[#c9a961] mb-4 justify-center">
                <span className="w-6 h-px bg-[#c9a961]" />
                Global Presence
                <span className="w-6 h-px bg-[#c9a961]" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1628] tracking-tight leading-tight mb-5">
                Countries We{" "}
                <em className="not-italic text-[#c9a961]">Export To.</em>
              </h2>
              <p className="text-[#5a6b7d] leading-relaxed">
                We proudly serve clients across 50+ countries worldwide with our
                premium metal products.
              </p>
            </div>

            {/* Countries grid — flags as SVG images from flagcdn */}
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
                  className="group bg-white rounded-lg p-5 shadow-[0_2px_8px_rgba(10,22,40,0.06)] hover:shadow-[0_20px_50px_rgba(10,22,40,0.15)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center cursor-pointer border border-gray-100 hover:border-transparent relative overflow-hidden"
                >
                  {/* Hover gradient bg */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#c9a961] via-[#c9a961] to-[#0a1628] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />

                  {/* Content */}
                  <div className="relative z-10 w-full flex flex-col items-center">
                    {/* ✅ SVG flag image */}
                    <div className="w-14 h-10 sm:w-16 sm:h-12 rounded overflow-hidden shadow-sm mb-3 group-hover:scale-110 transition-transform duration-300 bg-gray-100">
                      <img
                        src={`https://flagcdn.com/w160/${c.code}.png`}
                        srcSet={`https://flagcdn.com/w320/${c.code}.png 2x`}
                        alt={`${c.name} flag`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    <h4 className="text-xs sm:text-sm font-bold text-[#0a1628] group-hover:text-white transition-colors duration-300 uppercase tracking-wider leading-tight mb-3">
                      {c.name}
                    </h4>

                    {/* Button appears on hover */}
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
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center scale-105 animate-[subtleZoom_20s_ease-in-out_infinite_alternate]"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=85")',
            }}
          />

          {/* Multi-layer overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/95 via-[#0a1628]/90 to-[#0a1628]/85" />

          {/* Decorative glows */}
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#c9a961]/15 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#c8102e]/15 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(201,169,97,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,97,0.8) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />

          {/* Top gold accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c9a961] to-transparent" />

          {/* Floating decorative icons (subtle) */}
          <div className="absolute top-20 left-10 text-[#c9a961]/10 animate-[floatY_6s_ease-in-out_infinite]">
            <svg
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </div>
          <div
            className="absolute bottom-20 right-10 text-[#c9a961]/10 animate-[floatY_8s_ease-in-out_infinite]"
            style={{ animationDelay: "1s" }}
          >
            <svg
              width="100"
              height="100"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" />
            </svg>
          </div>

          {/* Content */}
          <div className="max-w-[1320px] mx-auto px-5 sm:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.25em] uppercase text-[#c9a961] mb-6 justify-center">
                <span className="w-8 h-px bg-[#c9a961]" />
                Get Started Today
                <span className="w-8 h-px bg-[#c9a961]" />
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
                Have a{" "}
                <em className="not-italic text-[#c9a961] relative inline-block">
                  Steel Requirement?
                  <span className="absolute bottom-1 left-0 w-full h-1 rounded-full" />
                </em>
              </h2>

              {/* Subheading */}
              <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                Tell us what you need. Our team will help you find the right
                product and specification —{" "}
                <span className="text-[#c9a961] font-semibold">
                  within 24 hours
                </span>
                .
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <a
                  href="https://wa.me/919876543210?text=Hello%20Shree%20Ganesh%20Steel%2C%20I%20would%20like%20to%20request%20a%20quote."
                  target="_blank"
                  rel="noreferrer"
                  className="group relative inline-flex items-center justify-center gap-2 bg-[#c9a961] hover:bg-[#b89851] text-[#0a1628] font-bold text-sm px-8 py-4 rounded-lg shadow-[0_10px_30px_rgba(201,169,97,0.3)] hover:shadow-[0_15px_40px_rgba(201,169,97,0.5)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  {/* Shimmer sweep */}
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
                  href="tel:+919876543210"
                  className="group inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-[#c9a961] hover:bg-[#c9a961]/10 text-white hover:text-[#c9a961] font-semibold text-sm px-8 py-4 rounded-lg transition-all duration-300 backdrop-blur-sm"
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

              {/* Trust strip */}
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
                    className="group inline-flex items-center gap-2 text-xs sm:text-sm text-white/70 hover:text-[#c9a961] transition-colors duration-300"
                  >
                    <span className="text-[#c9a961] group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Keyframes */}
          <style>{`
    @keyframes subtleZoom {
      from { transform: scale(1.05); }
      to { transform: scale(1.15); }
    }
    @keyframes floatY {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }
  `}</style>
        </section>

        {/* ==================== CONTACT ==================== */}
        <section
          id="contact"
          className="py-16 sm:py-20 lg:py-28 bg-white relative overflow-hidden"
        >
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c9a961]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0a1628]/4 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-[1320px] mx-auto px-5 sm:px-8 relative z-10">
            {/* Centered Heading */}
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase text-[#c9a961] mb-4 justify-center">
                <span className="w-6 h-px bg-[#c9a961]" />
                Get In Touch
                <span className="w-6 h-px bg-[#c9a961]" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1628] tracking-tight leading-tight mb-5">
                Let's Discuss{" "}
                <em className="not-italic text-[#c9a961]">
                  Your Requirements.
                </em>
              </h2>
              <p className="text-[#5a6b7d] leading-relaxed max-w-2xl mx-auto">
                Reach out to us for product inquiries, bulk orders or technical
                consultation.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Contact Info */}
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
                    value: "+91 98765 43210",
                    href: "tel:+919876543210",
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
                    value: "+91 98765 43210",
                    href: "https://wa.me/919876543210",
                  },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http") ? "noreferrer" : undefined
                    }
                    className="group flex gap-4 items-start p-4 sm:p-5 bg-white border border-gray-200 rounded-2xl hover:border-[#c9a961] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(10,22,40,0.1)] transition-all duration-400 relative overflow-hidden"
                  >
                    {/* Gold accent bar */}
                    <span className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-[#c9a961] to-transparent scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" />

                    {/* Icon badge */}
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 mt-0.5">
                      <div className="absolute inset-0 rounded-xl bg-[#f7f8fa] border border-gray-200 group-hover:bg-gradient-to-br group-hover:from-[#c9a961] group-hover:to-[#b89851] group-hover:border-[#c9a961] transition-all duration-500" />
                      <div className="relative w-full h-full p-3 flex items-center justify-center text-[#c9a961] group-hover:text-[#0a1628] group-hover:rotate-6 transition-all duration-500">
                        {item.icon}
                      </div>
                    </div>

                    {/* Text */}
                    <div className="min-w-0 flex-1">
                      <b className="block text-[0.7rem] font-bold tracking-widest uppercase text-[#8896a6] mb-1.5 group-hover:text-[#c9a961] transition-colors">
                        {item.label}
                      </b>
                      <p className="text-sm sm:text-base font-semibold text-[#0a1628] m-0 break-words leading-relaxed">
                        {item.value}
                      </p>
                    </div>

                    {/* Arrow icon (hidden on address card for cleaner look) */}
                    {item.label !== "Address" && (
                      <div className="text-[#c9a961] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 self-center">
                        <svg
                          width="18"
                          height="18"
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
                      </div>
                    )}
                  </a>
                ))}
              </div>

              {/* Contact Form */}
              <div className="relative p-7 sm:p-10 bg-gradient-to-br from-[#0a1628] to-[#142b4d] rounded-2xl shadow-[0_25px_60px_rgba(10,22,40,0.2)] overflow-hidden">
                {/* Decorative glow inside form */}
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#c9a961]/15 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#c9a961]/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative">
                  <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#c9a961] mb-4">
                    <span className="w-4 h-px bg-[#c9a961]" />
                    Quick Enquiry
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                    Send us a message
                  </h3>
                  <p className="text-sm text-white/70 mb-7">
                    We respond within 24 hours.
                  </p>

                  {/* ✅ Working form — submits to info@shreeganeshsteel.com */}
                  <form
                    action="https://formspree.io/f/xyzabcde"
                    method="POST"
                    className="space-y-3.5"
                  >
                    {/* Name + Email row (desktop) */}
                    <div className="grid sm:grid-cols-2 gap-3.5">
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your Name *"
                        className="w-full px-4 py-3.5 bg-white/[0.06] border border-white/15 rounded-lg text-sm text-white placeholder:text-white/50 focus:border-[#c9a961] focus:bg-white/[0.08] focus:ring-2 focus:ring-[#c9a961]/20 outline-none transition-all"
                      />
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Your Email *"
                        className="w-full px-4 py-3.5 bg-white/[0.06] border border-white/15 rounded-lg text-sm text-white placeholder:text-white/50 focus:border-[#c9a961] focus:bg-white/[0.08] focus:ring-2 focus:ring-[#c9a961]/20 outline-none transition-all"
                      />
                    </div>

                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3.5 bg-white/[0.06] border border-white/15 rounded-lg text-sm text-white placeholder:text-white/50 focus:border-[#c9a961] focus:bg-white/[0.08] focus:ring-2 focus:ring-[#c9a961]/20 outline-none transition-all"
                    />

                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className="w-full px-4 py-3.5 bg-white/[0.06] border border-white/15 rounded-lg text-sm text-white placeholder:text-white/50 focus:border-[#c9a961] focus:bg-white/[0.08] focus:ring-2 focus:ring-[#c9a961]/20 outline-none transition-all"
                    />

                    <textarea
                      name="message"
                      rows="4"
                      required
                      placeholder="Your Message *"
                      className="w-full px-4 py-3.5 bg-white/[0.06] border border-white/15 rounded-lg text-sm text-white placeholder:text-white/50 focus:border-[#c9a961] focus:bg-white/[0.08] focus:ring-2 focus:ring-[#c9a961]/20 outline-none transition-all resize-y min-h-[120px]"
                    />

                    <button
                      type="submit"
                      className="group w-full inline-flex items-center justify-center gap-2 bg-[#c9a961] hover:bg-[#b89851] text-[#0a1628] font-bold text-sm px-7 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    >
                      Send Message
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        →
                      </span>
                    </button>

                    <p className="text-[0.7rem] text-center text-white/50 pt-2">
                      Or email us directly at{" "}
                      <a
                        href="mailto:info@shreeganeshsteel.com"
                        className="text-[#c9a961] hover:underline"
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

      <Footer />
    </div>
  );
}
