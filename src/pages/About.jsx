import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// ============================================
// ICONS
// ============================================
const WhatsAppIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const Icon = ({ path, className = "w-6 h-6" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {path}
  </svg>
);

// ============================================
// REVEAL ON SCROLL — clean, no jitter
// ============================================
const Reveal = ({ children, delay = 0, className = "", as: Tag = "div" }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;

    if (inView) {
      const t = setTimeout(() => setVisible(true), 20);
      return () => clearTimeout(t);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -30px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-[opacity,transform] duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      } ${className}`}
    >
      {children}
    </Tag>
  );
};

// ============================================
// STAT ITEM — responsive, no mobile misalignment
// ============================================
const StatItem = ({ value, suffix = "", label, delay = 0 }) => {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);

  const numeric = parseInt(value, 10) || 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!start) return;
    let raf;
    const duration = 1500;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numeric));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, numeric]);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-opacity duration-700 ${
        start ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-none tabular-nums text-white">
        {count}
        {suffix}
      </div>
      <div className="text-[0.62rem] sm:text-[0.68rem] font-medium tracking-widest uppercase text-[#4A9EFF] mt-1.5 leading-snug">
        {label}
      </div>
    </div>
  );
};

export default function About() {
  return (
    <div className="w-full bg-white overflow-x-hidden">
      {/* ==================== ABOUT HERO ==================== */}
      <section id="about-hero" className="relative w-full">
        <div className="relative w-full h-[calc(100vh-105px)] sm:h-[calc(100vh-100px)] lg:h-[calc(100vh-90px)] min-h-[550px] sm:min-h-[650px] lg:min-h-[650px] overflow-hidden">
          {/* ✅ Background image — no overlay, no gradient */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("/images/about-hero.jpg")' }}
          />

          {/* Decorative blurs */}
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#1E6FD9]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#C8102E]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Text content — centered */}
          <div className="relative z-20 h-full flex items-center justify-center">
            <div className="max-w-[1320px] w-full mx-auto px-5 sm:px-8 flex items-center justify-center">
              {/* ✅ GLASS MORPHISM CONTAINER — reduced height */}
              <div className="max-w-2xl w-full mx-auto backdrop-blur-s bg-[#0B3E8C]/30 border border-white/90 rounded-2xl sm:rounded-3xl px-5 sm:px-8 lg:px-10 py-7 sm:py-9 lg:py-10 shadow-[0_25px_60px_rgba(0,0,0,0.25)] text-center">
                {/* Eyebrow */}
                <div
                  className="inline-flex items-center gap-3 text-[0.7rem] sm:text-xs font-bold tracking-[0.25em] uppercase text-[#4A9EFF] mb-4"
                  style={{ animation: "heroFadeUp 0.8s ease-out 0.1s both" }}
                >
                  <span className="w-6 sm:w-8 h-px bg-[#E63946]" />
                  About Us
                  <span className="w-6 sm:w-8 h-px bg-[#E63946]" />
                </div>

                {/* Heading */}
                <h1 className="text-[1.7rem] leading-[1.1] sm:text-[2.3rem] lg:text-[2.9rem] xl:text-[3.2rem] font-medium sm:font-extrabold tracking-tight text-white mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
                  <span
                    className="block"
                    style={{ animation: "heroFadeUp 0.9s ease-out 0.25s both" }}
                  >
                    Engineering Trust in
                  </span>
                  <em
                    className="not-italic text-[#E63946] block"
                    style={{ animation: "heroFadeUp 0.9s ease-out 0.45s both" }}
                  >
                    Industrial Steel.
                  </em>
                </h1>

                {/* Description */}
                <p
                  className="text-[0.9rem] sm:text-base text-white/95 leading-relaxed max-w-xl mx-auto mb-6"
                  style={{ animation: "heroFadeUp 0.9s ease-out 0.65s both" }}
                >
                  Since 2013, Shree Ganesh Steel Corporation has been a trusted
                  manufacturer and supplier of premium stainless steel, duplex,
                  alloy and HDPE products.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
                  <Link
                    to="/products"
                    className="inline-flex items-center justify-center gap-2 bg-[#E63946] hover:bg-[#C8102E] text-white font-bold text-sm px-6 py-3 rounded-md shadow-md hover:shadow-xl transition-all duration-300"
                    style={{ animation: "heroFadeUp 0.9s ease-out 0.85s both" }}
                  >
                    Explore Products
                    <span>→</span>
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold text-sm px-6 py-3 rounded-md hover:bg-white/10 transition-all duration-300"
                    style={{ animation: "heroFadeUp 0.9s ease-out 0.95s both" }}
                  >
                    Request a Quote
                  </Link>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap justify-center gap-3 sm:gap-5 pt-5 border-t border-white/20 max-w-xl mx-auto">
                  {["Quality Assured", "Industrial Grade", "Global Supply"].map(
                    (pill, i) => (
                      <div
                        key={i}
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white"
                        style={{
                          animation: `heroFadeUp 0.8s ease-out ${1.1 + i * 0.12}s both`,
                        }}
                      >
                        <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#1E6FD9]/40 text-[#4A9EFF] text-[0.6rem] sm:text-xs font-bold inline-flex items-center justify-center">
                          ✓
                        </span>
                        {pill}
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          STATS STRIP
         ========================================== */}
      <section className="bg-[#0B3E8C] border-y border-white/10">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 py-8 sm:py-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-6 sm:gap-x-10">
            <StatItem value="2013" label="Established" delay={100} />
            <StatItem value="15" suffix="+" label="Team Members" delay={200} />
            <StatItem
              value="40"
              suffix="+"
              label="Countries Served"
              delay={300}
            />
            <StatItem
              value="100"
              suffix="%"
              label="Quality Assured"
              delay={400}
            />
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 2: WHO WE ARE
         ========================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <Reveal>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(11,62,140,0.15)] border border-gray-200 group">
                  <img
                    src="/images/hero/slide-1.jpg"
                    alt="Shree Ganesh Steel Corporation"
                    className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#0B3E8C] text-white p-5 sm:p-6 rounded-2xl shadow-[0_15px_40px_rgba(11,62,140,0.25)] max-w-[200px]">
                  <div className="text-3xl font-extrabold text-[#4A9EFF] leading-none">
                    12+
                  </div>
                  <div className="text-[0.7rem] font-medium tracking-widest uppercase text-white/70 mt-2">
                    Years of Trust
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div>
                <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase text-[#1E6FD9] mb-4">
                  <span className="w-6 h-px bg-[#E63946]" />
                  Who We Are
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3E8C] tracking-tight leading-tight mb-6">
                  A Legacy of Precision &
                  <span className="text-[#C8102E]">
                    {" "}
                    Industrial Excellence.
                  </span>
                </h2>
                <div className="space-y-4 text-[#5a6b7d] leading-relaxed">
                  <p>
                    At Shree Ganesh Steel Corporation, we have an in-depth
                    understanding of evolving market trends and customer
                    requirements. Since our inception, we have been committed to
                    offering a diverse range of premium-quality products,
                    including HDPE Pipe & Fittings, Stainless Steel Flange, Head
                    Plug, Stainless Steel Cross Tee and more.
                  </p>
                  <p>
                    These products are available in various sizes and
                    specifications to cater to different industrial
                    applications. Our dedication to delivering consistently
                    high-quality products has earned us recognition as a leading
                    manufacturer and supplier in the industry.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="p-4 bg-[#f7f8fa] rounded-xl border border-gray-200 hover:border-[#1E6FD9]/50 hover:shadow-[0_10px_30px_rgba(30,111,217,0.1)] transition-all">
                    <Icon
                      className="w-6 h-6 text-[#1E6FD9] mb-2"
                      path={
                        <>
                          <path d="M12 2L2 7l10 5 10-5-10-5z" />
                          <path d="M2 17l10 5 10-5" />
                          <path d="M2 12l10 5 10-5" />
                        </>
                      }
                    />
                    <div className="text-sm font-bold text-[#0B3E8C]">
                      Premium Quality
                    </div>
                    <div className="text-xs text-[#8896a6] mt-1">
                      Guaranteed materials
                    </div>
                  </div>
                  <div className="p-4 bg-[#f7f8fa] rounded-xl border border-gray-200 hover:border-[#C8102E]/50 hover:shadow-[0_10px_30px_rgba(200,16,46,0.1)] transition-all">
                    <Icon
                      className="w-6 h-6 text-[#C8102E] mb-2"
                      path={
                        <>
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 6v6l4 2" />
                        </>
                      }
                    />
                    <div className="text-sm font-bold text-[#0B3E8C]">
                      On-Time Delivery
                    </div>
                    <div className="text-xs text-[#8896a6] mt-1">
                      Committed timelines
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 3: OUR JOURNEY
         ========================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#f7f8fa]">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase text-[#1E6FD9] mb-4">
                <span className="w-6 h-px bg-[#E63946]" />
                Our Journey
                <span className="w-6 h-px bg-[#E63946]" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3E8C] tracking-tight mb-4">
                Milestones That Define Us
              </h2>
              <p className="text-[#5a6b7d] max-w-2xl mx-auto">
                From a modest beginning in Mumbai to serving clients across 40+
                countries — our journey reflects consistency, quality and trust.
              </p>
            </div>
          </Reveal>

          <div className="relative max-w-5xl mx-auto">
            <div
              className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#1E6FD9]/40 to-transparent -translate-x-1/2"
              aria-hidden="true"
            />

            <div className="space-y-8 lg:space-y-0">
              {[
                {
                  year: "2013",
                  title: "Foundation",
                  desc: "Shree Ganesh Steel Corporation established in Mumbai as a manufacturer of stainless steel flanges and pipe fittings.",
                },
                {
                  year: "2016",
                  title: "Expansion",
                  desc: "Expanded product range to include duplex steel, alloy steel and HDPE pipe fittings for industrial applications.",
                },
                {
                  year: "2019",
                  title: "Global Reach",
                  desc: "Started exporting to international markets across Middle East, Europe and Southeast Asia.",
                },
                {
                  year: "2023",
                  title: "Modern Infrastructure",
                  desc: "Upgraded manufacturing facility with advanced machinery, quality control lab and expanded warehouse capacity.",
                },
              ].map((item, i) => {
                const isLeft = i % 2 === 0;

                return (
                  <div
                    key={i}
                    className="relative lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center"
                  >
                    <Reveal
                      delay={60}
                      className={
                        isLeft
                          ? "lg:col-start-1 lg:pr-12 lg:text-right"
                          : "lg:col-start-2 lg:pl-12"
                      }
                    >
                      <div className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200 hover:border-[#1E6FD9]/40 hover:shadow-[0_15px_40px_rgba(11,62,140,0.08)] transition-all duration-300 relative">
                        <span
                          className={`hidden lg:block absolute top-8 w-3 h-3 bg-white border-t border-r border-gray-200 rotate-45 ${
                            isLeft
                              ? "-right-1.5 border-t-gray-200 border-r-gray-200"
                              : "-left-1.5 border-b border-l border-t-0 border-r-0"
                          }`}
                          aria-hidden="true"
                        />

                        <div className="text-3xl font-extrabold text-[#C8102E] tracking-tight mb-2">
                          {item.year}
                        </div>
                        <h3 className="text-lg font-bold text-[#0B3E8C] mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-[#5a6b7d] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </Reveal>

                    <div
                      className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 z-10"
                      aria-hidden="true"
                    >
                      <span className="w-4 h-4 rounded-full bg-[#1E6FD9] ring-4 ring-[#f7f8fa] shadow-md" />
                    </div>

                    <div
                      className="lg:hidden absolute left-0 top-8 flex flex-col items-center"
                      aria-hidden="true"
                    >
                      <span className="w-3 h-3 rounded-full bg-[#1E6FD9] ring-4 ring-[#f7f8fa] shadow-sm" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 4: WHAT WE DO
         ========================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase text-[#1E6FD9] mb-4">
                <span className="w-6 h-px bg-[#E63946]" />
                What We Do
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3E8C] tracking-tight leading-tight mb-4">
                Comprehensive Steel Solutions for
                <span className="text-[#C8102E]"> Critical Industries.</span>
              </h2>
              <p className="text-[#5a6b7d] leading-relaxed">
                We manufacture, supply and export a wide spectrum of industrial
                steel products — each engineered to meet stringent international
                standards and deliver performance in the most demanding
                environments.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Stainless Steel Products",
                desc: "Flanges, fittings, fasteners, pipes and tubes in SS 304, 316, 316L, 321, 904L and duplex grades.",
                icon: (
                  <>
                    <circle cx="12" cy="12" r="8" />
                    <circle cx="12" cy="12" r="3" />
                  </>
                ),
              },
              {
                title: "Duplex & Super Duplex",
                desc: "Duplex 2205 and Super Duplex 2507 range offering superior corrosion resistance and strength.",
                icon: (
                  <>
                    <rect x="3" y="7" width="18" height="10" rx="1" />
                    <path d="M7 7v10M17 7v10" />
                  </>
                ),
              },
              {
                title: "Alloy & Carbon Steel",
                desc: "ASTM A105, A182 F22, A350 LF2 and other alloy grades for high-pressure and high-temperature service.",
                icon: (
                  <>
                    <path d="M12 2v6" />
                    <circle cx="12" cy="14" r="6" />
                    <path d="M12 20v2" />
                  </>
                ),
              },
              {
                title: "HDPE Pipe & Fittings",
                desc: "High-density polyethylene pipes, elbows, tees and couplers for water, gas and chemical transfer.",
                icon: (
                  <>
                    <path d="M2 12h20" />
                    <path d="M5 8v8M19 8v8" />
                  </>
                ),
              },
              {
                title: "Forged Fittings",
                desc: "High-pressure socket weld and threaded fittings in 3000#, 6000# and 9000# classes.",
                icon: (
                  <>
                    <rect x="2" y="9" width="8" height="6" rx="1" />
                    <rect x="14" y="9" width="8" height="6" rx="1" />
                    <path d="M10 12h4" />
                  </>
                ),
              },
              {
                title: "Custom Manufacturing",
                desc: "Bespoke fabrication as per client drawings, specifications and non-standard requirements.",
                icon: (
                  <>
                    <path d="M14 2l8 8-11 11H3v-8L14 2z" />
                    <path d="M11 5l8 8" />
                  </>
                ),
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#1E6FD9]/50 hover:shadow-[0_15px_40px_rgba(11,62,140,0.08)] transition-all duration-300 h-full">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 ${
                      i % 2 === 0
                        ? "bg-gradient-to-br from-[#0B3E8C] to-[#092a54] text-[#4A9EFF] group-hover:from-[#C8102E] group-hover:to-[#E63946] group-hover:text-white"
                        : "bg-gradient-to-br from-[#C8102E] to-[#092a54] text-white group-hover:from-[#1E6FD9] group-hover:to-[#0B3E8C] group-hover:text-white"
                    }`}
                  >
                    <Icon path={item.icon} />
                  </div>
                  <h3 className="text-base font-bold text-[#0B3E8C] mb-2 group-hover:text-[#C8102E] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#5a6b7d] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 5: WHY SHREE GANESH STEEL
         ========================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#0B3E8C] text-white relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#1E6FD9]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#C8102E]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <Reveal>
              <div>
                <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase text-[#4A9EFF] mb-4">
                  <span className="w-6 h-px bg-[#E63946]" />
                  Why Choose Us
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-6">
                  Why Shree Ganesh
                  <span className="text-[#E63946]"> Steel Stands Apart.</span>
                </h2>
                <p className="text-white/70 leading-relaxed mb-8">
                  Our core values — honest business practices and ethical
                  operations — set us apart in a competitive market. Every
                  commitment made to our customers is fulfilled with integrity
                  and excellence.
                </p>

                <div className="space-y-4">
                  {[
                    {
                      title: "Skilled & Experienced Team",
                      desc: "Backed by 15+ dedicated professionals across procurement, QC, packaging and delivery.",
                    },
                    {
                      title: "Consistent Quality",
                      desc: "Strict quality control at every stage — from raw material sourcing to final dispatch.",
                    },
                    {
                      title: "Timely Delivery",
                      desc: "Streamlined production and logistics ensure your order reaches you on schedule.",
                    },
                    {
                      title: "Custom Solutions",
                      desc: "Capability to manufacture non-standard products as per your drawings and specs.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-[#4A9EFF]/40 transition-colors duration-300"
                    >
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
                          i % 2 === 0
                            ? "bg-[#1E6FD9]/20 text-[#4A9EFF]"
                            : "bg-[#C8102E]/20 text-[#E63946]"
                        }`}
                      >
                        <svg
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm mb-1">
                          {item.title}
                        </div>
                        <div className="text-xs text-white/60 leading-relaxed">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 sm:p-8">
                <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#4A9EFF] mb-15">
                  Business Information
                </div>

                <div className="space-y-4">
                  {[
                    { label: "Nature of Business", value: "Manufacturer" },
                    { label: "Year of Establishment", value: "2013" },
                    { label: "No. of Staff", value: "15 Members" },
                    { label: "Production Lines", value: "1 Unit" },
                    { label: "OEM Service", value: "Not Provided" },
                    {
                      label: "Key Personnel",
                      value: "Birbal Bishnoi (Proprietor)",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between gap-4 py-3 border-b border-white/10 last:border-0"
                    >
                      <span className="text-xs text-white/50 font-medium tracking-wider uppercase">
                        {item.label}
                      </span>
                      <span className="text-sm font-bold text-white text-right">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="text-xs font-bold tracking-[0.2em] uppercase text-[#4A9EFF] mb-3">
                    Product Range
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Duplex Steel Fittings",
                      "Alloy Steel Fittings",
                      "Steel Pipe Fittings",
                      "Carbon Steel Fittings",
                      "Copper Pipe Fittings",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="text-[0.65rem] font-mono tracking-wider uppercase bg-white/5 text-white/70 px-2.5 py-1 rounded border border-white/10 hover:border-[#4A9EFF]/40 hover:text-[#4A9EFF] transition-colors cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ==========================================
    SECTION 6: INDUSTRIES WE SERVE
   ========================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase text-[#1E6FD9] mb-4">
                <span className="w-6 h-px bg-[#E63946]" />
                Industries We Serve
                <span className="w-6 h-px bg-[#E63946]" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3E8C] tracking-tight mb-4">
                Powering Critical Sectors
              </h2>
              <p className="text-[#5a6b7d] max-w-2xl mx-auto">
                Our products are trusted across diverse industries where
                precision, durability and reliability are non-negotiable.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Oil & Gas",
                desc: "High-pressure fittings and flanges for upstream, midstream and downstream operations.",
                image: "/images/industries/oil-gas.jpg",
              },
              {
                name: "Petrochemical",
                desc: "Corrosion-resistant steel products for refineries and chemical processing plants.",
                image: "/images/industries/petrochemical.jpg",
              },
              {
                name: "Pharmaceutical",
                desc: "Hygienic stainless steel fittings meeting stringent pharma industry standards.",
                image: "/images/industries/pharmaceutical.jpg",
              },
              {
                name: "Marine",
                desc: "Duplex and super duplex products for shipbuilding and offshore platforms.",
                image: "/images/industries/marine.jpg",
              },
              {
                name: "Energy & Power",
                desc: "Reliable steel components for thermal, nuclear and renewable power plants.",
                image: "/images/industries/energy.jpg",
              },
              {
                name: "Water Treatment",
                desc: "HDPE pipes and fittings for municipal and industrial water systems.",
                image: "/images/industries/water-infrastructure.jpg",
              },
            ].map((industry, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="group relative rounded-2xl overflow-hidden border border-gray-200 hover:border-[#C8102E]/50 hover:shadow-[0_20px_50px_rgba(200,16,46,0.15)] transition-all duration-500 h-full">
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-px bg-[#E63946]" />
                      <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase text-[#E63946]">
                        Industry
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#4A9EFF] transition-colors">
                      {industry.name}
                    </h3>
                    <p className="text-xs text-white font-bold leading-relaxed max-h-0 group-hover:max-h-20 overflow-hidden transition-all duration-500">
                      {industry.desc}
                    </p>
                  </div>

                  <span className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#C8102E]/0 group-hover:bg-[#C8102E] flex items-center justify-center transition-all duration-500">
                    <svg
                      className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 7: QUALITY & COMPLIANCE
         ========================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#f7f8fa]">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <Reveal>
              <div>
                <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase text-[#1E6FD9] mb-4">
                  <span className="w-6 h-px bg-[#E63946]" />
                  Quality & Compliance
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3E8C] tracking-tight leading-tight mb-6">
                  Uncompromising Quality at
                  <span className="text-[#C8102E]"> Every Stage.</span>
                </h2>
                <p className="text-[#5a6b7d] leading-relaxed mb-8">
                  At Shree Ganesh Steel Corporation, quality is not just a
                  promise — it is a process. From raw material sourcing to final
                  dispatch, every product passes through rigorous quality checks
                  to ensure it meets international standards and customer
                  expectations.
                </p>

                <div className="space-y-4">
                  {[
                    {
                      title: "Material Verification",
                      desc: "Every batch traced back to its mill certificate with grade and heat number.",
                    },
                    {
                      title: "Dimensional Inspection",
                      desc: "Precision measurement against ASTM, ASME, DIN, JIS and EN standards.",
                    },
                    {
                      title: "Test Certification",
                      desc: "Mill Test Certificates (MTC) provided as per EN 10204 3.1 / 3.2.",
                    },
                    {
                      title: "Third-Party Inspection",
                      desc: "Support for TPI agencies like TUV, SGS, BV, LRIS on request.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-[#1E6FD9]/40 transition-colors duration-300"
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
                      <div>
                        <div className="font-bold text-[#0B3E8C] text-sm mb-1">
                          {item.title}
                        </div>
                        <div className="text-xs text-[#5a6b7d] leading-relaxed">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(11,62,140,0.15)] border border-gray-200 group">
                  <img
                    src="/images/hero/slide-2.jpg"
                    alt="Quality Control"
                    className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="absolute -bottom-5 -left-5 bg-[#C8102E] text-white p-5 rounded-2xl shadow-xl">
                  <div className="text-2xl font-extrabold leading-none">
                    EN 10204
                  </div>
                  <div className="text-[0.65rem] font-bold tracking-widest uppercase mt-1">
                    3.1 / 3.2 Certified
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 8: INFRASTRUCTURE
         ========================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase text-[#1E6FD9] mb-4">
                <span className="w-6 h-px bg-[#E63946]" />
                Infrastructure & Warehouse
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3E8C] tracking-tight leading-tight mb-4">
                Built for Scale,
                <span className="text-[#C8102E]"> Precision & Speed.</span>
              </h2>
              <p className="text-[#5a6b7d] leading-relaxed">
                Located in a well-connected industrial area of Mumbai, our
                facility is equipped with advanced machinery and cutting-edge
                technology that enable us to produce a wide range of stainless
                steel and alloy products with precision and efficiency.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Advanced Machinery",
                desc: "State-of-the-art production equipment for precision manufacturing.",
              },
              {
                title: "Spacious Warehouse",
                desc: "Well-organized storage with proper shelving systems.",
              },
              {
                title: "Climate Control",
                desc: "Preserves integrity of stored inventory.",
              },
              {
                title: "Labeled Sections",
                desc: "Quick retrieval and organized inventory management.",
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="group bg-[#f7f8fa] border border-gray-200 rounded-2xl p-6 hover:bg-white hover:border-[#1E6FD9]/40 hover:shadow-[0_15px_40px_rgba(11,62,140,0.08)] transition-all duration-300 h-full">
                  <div
                    className={`text-3xl font-extrabold mb-3 font-mono ${
                      i % 2 === 0 ? "text-[#C8102E]" : "text-[#1E6FD9]"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-sm font-bold text-[#0B3E8C] mb-2 uppercase tracking-wide group-hover:text-[#C8102E] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#5a6b7d] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 9: GLOBAL PRESENCE
         ========================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#0B3E8C] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,#1E6FD9_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,#C8102E_0%,transparent_50%)]" />
        </div>

        <div className="relative max-w-[1320px] mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase text-[#4A9EFF] mb-4">
                <span className="w-6 h-px bg-[#E63946]" />
                Global Presence
                <span className="w-6 h-px bg-[#E63946]" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                Delivering Across
                <span className="text-[#E63946]"> Continents.</span>
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Our products are trusted by clients across 40+ countries,
                powering critical industrial operations worldwide.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { region: "Middle East", count: "12+" },
              { region: "Europe", count: "8+" },
              { region: "Southeast Asia", count: "10+" },
              { region: "Africa", count: "6+" },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 60}>
                <div
                  className={`text-center p-6 rounded-2xl bg-white/5 border border-white/10 transition-colors duration-300 hover:bg-white/[0.08] ${
                    i % 2 === 0
                      ? "hover:border-[#4A9EFF]/40"
                      : "hover:border-[#E63946]/40"
                  }`}
                >
                  <div
                    className={`text-3xl font-extrabold tracking-tight mb-2 ${
                      i % 2 === 0 ? "text-[#4A9EFF]" : "text-[#E63946]"
                    }`}
                  >
                    {item.count}
                  </div>
                  <div className="text-xs font-bold tracking-widest uppercase text-white/70">
                    {item.region}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300}>
            <div className="text-center mt-10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#4A9EFF] hover:text-white transition-colors group"
              >
                Become a Partner
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ==========================================
          SECTION 10: CORE VALUES
         ========================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase text-[#1E6FD9] mb-4">
                <span className="w-6 h-px bg-[#E63946]" />
                Our Core Values
                <span className="w-6 h-px bg-[#E63946]" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3E8C] tracking-tight mb-4">
                Principles That Guide Us
              </h2>
              <p className="text-[#5a6b7d] max-w-2xl mx-auto">
                Our motto is to maximize customer satisfaction by delivering
                high-quality products as per agreed specifications, within the
                committed time frame and at the designated location.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Integrity",
                desc: "Honest business practices and ethical operations in every transaction.",
                icon: (
                  <>
                    <path d="M12 2l3 6h6l-5 4 2 7-6-4-6 4 2-7-5-4h6z" />
                  </>
                ),
              },
              {
                title: "Reliability",
                desc: "Consistent quality and on-time delivery — order after order.",
                icon: (
                  <>
                    <circle cx="12" cy="12" r="9" />
                    <polyline points="12 7 12 12 15 14" />
                  </>
                ),
              },
              {
                title: "Excellence",
                desc: "Continuous improvement in products, processes and service.",
                icon: (
                  <>
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </>
                ),
              },
              {
                title: "Customer First",
                desc: "Your satisfaction drives every decision we make.",
                icon: (
                  <>
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </>
                ),
              },
            ].map((value, i) => (
              <Reveal key={i} delay={i * 60}>
                <div
                  className={`group text-center bg-white border border-gray-200 rounded-2xl p-8 transition-all duration-300 h-full ${
                    i % 2 === 0
                      ? "hover:border-[#1E6FD9]/50 hover:shadow-[0_15px_40px_rgba(30,111,217,0.08)]"
                      : "hover:border-[#C8102E]/50 hover:shadow-[0_15px_40px_rgba(200,16,46,0.08)]"
                  }`}
                >
                  <div
                    className={`w-14 h-14 mx-auto mb-5 rounded-2xl flex items-center justify-center transition-colors duration-300 ${
                      i % 2 === 0
                        ? "bg-gradient-to-br from-[#0B3E8C] to-[#092a54] text-[#4A9EFF] group-hover:from-[#1E6FD9] group-hover:to-[#0B3E8C] group-hover:text-white"
                        : "bg-gradient-to-br from-[#C8102E] to-[#092a54] text-white group-hover:from-[#E63946] group-hover:to-[#C8102E]"
                    }`}
                  >
                    <Icon className="w-7 h-7" path={value.icon} />
                  </div>
                  <h3
                    className={`text-base font-bold text-[#0B3E8C] mb-2 transition-colors ${
                      i % 2 === 0
                        ? "group-hover:text-[#1E6FD9]"
                        : "group-hover:text-[#C8102E]"
                    }`}
                  >
                    {value.title}
                  </h3>
                  <p className="text-sm text-[#5a6b7d] leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 11: REQUEST A QUOTE (CTA)
         ========================================== */}
      <section className="py-16 sm:py-20 bg-[#f7f8fa] border-t border-gray-200">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="relative rounded-3xl bg-gradient-to-br from-[#0B3E8C] via-[#0B3E8C] to-[#092a54] p-8 sm:p-12 lg:p-16 text-white overflow-hidden">
              <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#1E6FD9]/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#C8102E]/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative grid lg:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.25em] uppercase text-[#E63946] mb-4">
                    <span className="w-8 h-px bg-[#E63946]" />
                    Get In Touch
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
                    Ready to Source
                    <br />
                    <span className="text-[#E63946]">
                      Premium Steel Products?
                    </span>
                  </h2>
                  <p className="text-white/75 leading-relaxed mb-8 text-base sm:text-lg">
                    Share your specifications with our team and receive a
                    competitive quote within 24 hours. We handle custom orders,
                    bulk requirements and export inquiries.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://wa.me/917313726773?text=Hello%20Shree%20Ganesh%20Steel%2C%20I%20would%20like%20to%20request%20a%20quote."
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-[#C8102E] hover:bg-[#1E6FD9] text-white font-bold text-sm px-7 py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-colors duration-300"
                    >
                      <WhatsAppIcon />
                      Request a Quote
                    </a>
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-[#E63946] hover:text-[#E63946] text-white font-semibold text-sm px-7 py-3.5 rounded-lg transition-colors duration-300"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#1E6FD9]/20 text-[#4A9EFF] flex items-center justify-center">
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[0.7rem] font-bold tracking-widest uppercase text-[#4A9EFF] mb-1">
                        Phone
                      </div>
                      <a
                        href="tel:+917313726773"
                        className="text-white hover:text-[#4A9EFF] transition-colors text-sm font-semibold"
                      >
                        +91 73137 26773
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pt-4 border-t border-white/10">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#C8102E]/20 text-[#E63946] flex items-center justify-center">
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="M22 6l-10 7L2 6" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[0.7rem] font-bold tracking-widest uppercase text-[#E63946] mb-1">
                        Email
                      </div>
                      <a
                        href="mailto:info@shreeganeshsteel.com"
                        className="text-white hover:text-[#E63946] transition-colors text-sm font-semibold break-all"
                      >
                        info@shreeganeshsteel.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pt-4 border-t border-white/10">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#1E6FD9]/20 text-[#4A9EFF] flex items-center justify-center">
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[0.7rem] font-bold tracking-widest uppercase text-[#4A9EFF] mb-1">
                        Address
                      </div>
                      <p className="text-white/75 text-xs leading-relaxed">
                        191, Ground Floor, 2nd Khumbharwada,
                        <br />
                        Near Gol Deval Temple, Mumbai,
                        <br />
                        Maharashtra, India — 400004
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
