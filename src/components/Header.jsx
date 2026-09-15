import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// ============================================
// PRODUCT CATEGORIES (for mega menu)
// ============================================
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

// ============================================
// WHATSAPP CONFIG
// ============================================
const WHATSAPP_NUMBER = "919876543210";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello Shree Ganesh Steel, I would like to request a quote.",
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const Header = () => {
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setProductsOpen(false);
  };

  return (
    <>
{/* ============ TOP BAR — Hidden on mobile ============ */}
<div className="hidden sm:block bg-[#0a1628] text-white/60 text-[0.72rem] border-b border-white/10">
  <div className="max-w-[1320px] mx-auto px-5 sm:px-8 py-1.5 flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-4">
    <div className="font-medium tracking-wide text-white/75 text-center sm:text-left">
      Trusted Steel Solutions for Global Industries
    </div>
    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
      <a
        href="tel:+919876543210"
        className="inline-flex items-center gap-1.5 text-white/65 hover:text-[#c9a961] transition-colors font-medium"
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        +91 98765 43210
      </a>
      <a
        href="mailto:info@shreeganeshsteel.com"
        className="inline-flex items-center gap-1.5 text-white/65 hover:text-[#c9a961] transition-colors font-medium"
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M22 6l-10 7L2 6" />
        </svg>
        info@shreeganeshsteel.com
      </a>

      <div className="flex items-center gap-1.5 pl-3 sm:pl-4 border-l border-white/10">
        <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="w-6 h-6 rounded flex items-center justify-center text-[#25d366] hover:bg-[#25d366]/15 transition-all">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </a>
        <a href="https://instagram.com/shreeganeshsteel" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-6 h-6 rounded flex items-center justify-center text-[#e4405f] hover:bg-[#e4405f]/15 transition-all">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </a>
        <a href="https://facebook.com/shreeganeshsteel" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-6 h-6 rounded flex items-center justify-center text-[#1877f2] hover:bg-[#1877f2]/15 transition-all">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.91h-2.34V22c4.78-.76 8.43-4.92 8.43-9.94z" />
          </svg>
        </a>
        <a href="https://linkedin.com/company/shreeganeshsteel" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-6 h-6 rounded flex items-center justify-center text-[#0a66c2] hover:bg-[#0a66c2]/15 transition-all">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</div>
      {/* ============ NAVBAR — COMPACT ============ */}
      <nav
        className={`sticky top-0 z-[1000] bg-white/98 backdrop-blur-lg border-b transition-all duration-300 ${
          navScrolled
            ? "shadow-[0_4px_20px_rgba(10,22,40,0.08)] border-transparent"
            : "border-gray-200"
        }`}
      >
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 py-2 sm:py-3 flex items-center justify-between gap-4 sm:gap-6">
          {/* Logo — smaller */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-md bg-gradient-to-br from-[#0a1628] to-[#142b4d] text-[#c9a961] flex items-center justify-center font-black text-xs sm:text-sm tracking-wider shadow-[0_4px_14px_rgba(10,22,40,0.25)] overflow-hidden">
              <span className="relative z-10 font-mono">SG</span>
              <span className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-transparent to-[#c9a961]/30 rotate-45" />
            </div>
            <div className="font-extrabold text-[0.82rem] sm:text-[0.95rem] text-[#0a1628] leading-tight tracking-tight">
              SHREE GANESH STEEL
              <small className="block text-[0.5rem] sm:text-[0.55rem] font-semibold tracking-[0.18em] text-[#5a6b7d] uppercase mt-0 font-mono">
                Corporation
              </small>
            </div>
          </Link>

          {/* Desktop Nav Links — tighter spacing */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-7">
            <li>
              <Link
                to="/"
                className="text-[0.84rem] font-semibold text-[#0a1628] hover:text-[#c9a961] transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-[0.84rem] font-semibold text-[#0a1628] hover:text-[#c9a961] transition-colors"
              >
                About Us
              </Link>
            </li>
            <li className="group relative">
              <Link
                to="/products"
                className="inline-flex items-center gap-1.5 text-[0.84rem] font-semibold text-[#0a1628] hover:text-[#c9a961] transition-colors py-2"
              >
                Products
                <span className="text-[0.65rem] text-[#8896a6] group-hover:rotate-180 group-hover:text-[#c9a961] transition-all">
                  ▾
                </span>
              </Link>

              <div className="absolute top-full left-1/2 -translate-x-1/2 translate-y-3 w-[720px] bg-white border border-gray-200 rounded-xl shadow-[0_20px_50px_rgba(10,22,40,0.12)] p-8 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 transition-all duration-250 z-50">
                <div className="grid grid-cols-2 gap-2">
                  {categories.slice(0, 8).map((c) => (
                    <Link
                      key={c.id}
                      to="/products"
                      state={{ category: c.name }}
                      className="flex items-center gap-3.5 p-3 rounded-lg hover:bg-[#f7f8fa] transition-colors"
                    >
                      <img
                        src={c.image}
                        alt={c.name}
                        className="w-12 h-12 rounded-md object-cover flex-shrink-0"
                      />
                      <div>
                        <b className="block text-[0.85rem] font-bold text-[#0a1628] mb-0.5">
                          {c.name}
                        </b>
                        <span className="text-[0.72rem] text-[#5a6b7d] leading-snug">
                          {c.desc.slice(0, 40)}...
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </li>
            <li>
              <Link
                to="/industries"
                className="text-[0.84rem] font-semibold text-[#0a1628] hover:text-[#c9a961] transition-colors"
              >
                Industries
              </Link>
            </li>
            <li>
              <Link
                to="/quality"
                className="text-[0.84rem] font-semibold text-[#0a1628] hover:text-[#c9a961] transition-colors"
              >
                Quality
              </Link>
            </li>
            <li>
              <Link
                to="/infra"
                className="text-[0.84rem] font-semibold text-[#0a1628] hover:text-[#c9a961] transition-colors"
              >
                Infrastructure
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-[0.84rem] font-semibold text-[#0a1628] hover:text-[#c9a961] transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* CTA — smaller */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center justify-center bg-gradient-to-br from-[#0a1628] to-[#142b4d] hover:from-[#c9a961] hover:to-[#b89851] text-white hover:text-[#0a1628] font-bold text-[0.68rem] sm:text-[0.76rem] tracking-wide px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-md shadow-[0_4px_14px_rgba(10,22,40,0.15)] transition-all duration-300 flex-shrink-0"
          >
            Request a Quote
          </a>

          {/* Hamburger */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 relative z-[1100]"
          >
            <span
              className={`w-5 h-0.5 bg-[#0a1628] rounded-full transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`w-5 h-0.5 bg-[#0a1628] rounded-full transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`w-5 h-0.5 bg-[#0a1628] rounded-full transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* ============ MOBILE MENU DRAWER ============ */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 bg-[#0a1628]/60 backdrop-blur-sm z-[1050] lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      <aside
        className={`fixed top-0 right-0 h-full w-[85%] max-w-[380px] bg-white z-[1100] lg:hidden shadow-[0_0_60px_rgba(10,22,40,0.3)] transition-transform duration-400 ease-out overflow-y-auto ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200 sticky top-0 bg-white z-10">
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-md bg-gradient-to-br from-[#0a1628] to-[#142b4d] text-[#c9a961] flex items-center justify-center font-black text-xs tracking-wider overflow-hidden">
              <span className="relative z-10 font-mono">SG</span>
              <span className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-transparent to-[#c9a961]/30 rotate-45" />
            </div>
            <div className="font-extrabold text-xs text-[#0a1628] leading-tight">
              SHREE GANESH STEEL
              <small className="block text-[0.5rem] font-semibold tracking-[0.18em] text-[#5a6b7d] uppercase font-mono">
                Corporation
              </small>
            </div>
          </div>
          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
            className="w-8 h-8 rounded-md bg-[#f7f8fa] hover:bg-[#0a1628] hover:text-white text-[#0a1628] flex items-center justify-center transition-all"
          >
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
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <ul className="flex flex-col p-3 gap-1">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About Us" },
          ].map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                onClick={closeMenu}
                className={`block px-4 py-3 rounded-lg font-semibold text-[0.9rem] transition-all ${
                  location.pathname === item.to
                    ? "bg-[#c9a961]/10 text-[#c9a961]"
                    : "text-[#0a1628] hover:bg-[#f7f8fa] hover:text-[#c9a961]"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}

          <li>
            <button
              type="button"
              onClick={() => setProductsOpen(!productsOpen)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-lg font-semibold text-[0.9rem] transition-all ${
                productsOpen
                  ? "bg-[#c9a961]/10 text-[#c9a961]"
                  : "text-[#0a1628] hover:bg-[#f7f8fa] hover:text-[#c9a961]"
              }`}
            >
              Products
              <span
                className={`text-xs transition-transform duration-300 ${productsOpen ? "rotate-180" : ""}`}
              >
                ▾
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-400 ease-out ${
                productsOpen
                  ? "max-h-[600px] opacity-100 mt-2"
                  : "max-h-0 opacity-0"
              }`}
            >
              <ul className="flex flex-col gap-1 pl-3 border-l-2 border-[#c9a961]/30 ml-3">
                {categories.map((c) => (
                  <li key={c.id}>
                    <Link
                      to="/products"
                      state={{ category: c.name }}
                      onClick={closeMenu}
                      className="block px-3 py-2 rounded-md text-[0.82rem] text-[#5a6b7d] hover:text-[#c9a961] hover:bg-[#f7f8fa] transition-all"
                    >
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          {[
            { to: "/industries", label: "Industries" },
            { to: "/quality", label: "Quality" },
            { to: "/infra", label: "Infrastructure" },
            { to: "/contact", label: "Contact" },
          ].map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                onClick={closeMenu}
                className={`block px-4 py-3 rounded-lg font-semibold text-[0.9rem] transition-all ${
                  location.pathname === item.to
                    ? "bg-[#c9a961]/10 text-[#c9a961]"
                    : "text-[#0a1628] hover:bg-[#f7f8fa] hover:text-[#c9a961]"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="p-4 pt-2 border-t border-gray-200 sticky bottom-0 bg-white">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
            className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-br from-[#c9a961] to-[#b89851] hover:from-[#0a1628] hover:to-[#142b4d] text-[#0a1628] hover:text-white font-bold text-sm px-6 py-3.5 rounded-lg transition-all duration-300 shadow-md"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Request a Quote
          </a>

          <div className="mt-3 pt-3 border-t border-gray-200 space-y-2">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 text-[0.7rem] text-[#5a6b7d] hover:text-[#c9a961] transition-colors font-medium"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +91 98765 43210
            </a>
            <a
              href="mailto:info@shreeganeshsteel.com"
              className="flex items-center gap-2 text-[0.7rem] text-[#5a6b7d] hover:text-[#c9a961] transition-colors font-medium break-all"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 6l-10 7L2 6" />
              </svg>
              info@shreeganeshsteel.com
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Header;
