import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0d2b4e] text-white">
      {/* ==========================================
          MAIN FOOTER
         ========================================== */}
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 pt-14 sm:pt-16 lg:pt-20 pb-10 sm:pb-12">
        {/* 4-COLUMN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* ============ COLUMN 1: BRAND ============ */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo card */}
            <Link
              to="/"
              className="inline-block bg-white rounded-lg px-4 py-3 mb-5 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src="/images/logo.png"
                alt="Shree Ganesh Steel Corporation"
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </Link>

            {/* Certification badge */}
            <div className="inline-flex items-center gap-2 bg-[#1a4a7a] border border-[#3B8FE8]/30 rounded-md px-3 py-1.5 mb-5">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#3B8FE8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-white">
                ISO 9001:2015 Certified Company
              </span>
            </div>

            {/* Description */}
            <p className="text-[0.85rem] text-white/75 leading-relaxed mb-5">
              Shree Ganesh Steel Corporation is a premier stockist & supplier of
              high-grade industrial raw materials, stainless steel pipes, tubes,
              fittings, flanges, sheets, plates, coils, and fasteners.
            </p>

            {/* GSTIN */}
            <div className="text-[0.75rem] font-mono tracking-wider text-white/60">
              <span className="text-[#3B8FE8] font-bold">GSTIN:</span>{" "}
              <span className="text-white/85">27AQWPV4546L1ZP</span>
            </div>
          </div>

          {/* ============ COLUMN 2: QUICK LINKS ============ */}
          <div>
            <h4 className="text-white text-[0.8rem] font-bold tracking-[0.2em] uppercase mb-6 pb-3 border-b border-white/10">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/products", label: "Products" },
                { to: "/industries", label: "Industries" },
                { to: "/certificate", label: "Certificates" },
                { to: "/contact", label: "Contact Us" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.to}
                    className="group flex items-center gap-2 text-[0.88rem] text-white/80 hover:text-[#E63946] transition-colors font-medium"
                  >
                    <span className="text-[#E63946] font-bold text-[0.9rem] leading-none group-hover:translate-x-0.5 transition-transform">
                      ›
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ============ COLUMN 3: PRODUCT RANGE ============ */}
          <div>
            <h4 className="text-white text-[0.8rem] font-bold tracking-[0.2em] uppercase mb-6 pb-3 border-b border-white/10">
              Product Range
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Pipes & Tubes", slug: "pipes-tubes" },
                { label: "Buttweld Fittings", slug: "buttweld-fittings" },
                {
                  label: "Forged Socketweld & Screwed Fittings",
                  slug: "forged-fittings",
                },
                { label: "Flanges", slug: "flanges" },
                { label: "Ferrule Fittings", slug: "ferrule-fittings" },
                { label: "Sheet, Plate & Coil", slug: "sheets-plates" },
                { label: "Round, Square & Hex Bars", slug: "round-bars" },
                { label: "Fasteners & Nut Bolts", slug: "fasteners" },
                { label: "Dairy Fittings & Valves", slug: "dairy-fittings" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    to={`/categories/${item.slug}`}
                    className="group flex items-start gap-2 text-[0.85rem] text-white/80 hover:text-[#E63946] transition-colors font-medium leading-snug"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#E63946] flex-shrink-0 mt-2 group-hover:scale-150 transition-transform" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ============ COLUMN 4: CONTACT DETAILS ============ */}
          <div>
            <h4 className="text-white text-[0.8rem] font-bold tracking-[0.2em] uppercase mb-6 pb-3 border-b border-white/10">
              Contact Details
            </h4>

            <ul className="flex flex-col gap-4">
              {/* Address */}
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 mt-0.5 text-[#E63946]">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                  </svg>
                </span>
                <span className="text-[0.82rem] text-white/80 leading-relaxed">
                  Shop No. 1, Plot No. 191, GRD Floor, Nawsarwala Building, Sant
                  Sena Maharaj Marg, 2nd Kumbhwarwada Street, Mumbai — 400004,
                  Maharashtra, India
                </span>
              </li>

              {/* Telephone */}
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 mt-0.5 text-[#E63946]">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </span>
                <div className="text-[0.82rem] text-white/80 leading-relaxed">
                  <div className="text-[0.72rem] text-white/55 font-medium tracking-wider uppercase mb-1">
                    Telephone:
                  </div>
                  <a
                    href="tel:+912267437304"
                    className="block hover:text-[#E63946] transition-colors font-semibold"
                  >
                    022-6743 7304
                  </a>
                  <a
                    href="tel:+912266109359"
                    className="block hover:text-[#E63946] transition-colors font-semibold"
                  >
                    022-6610 9359
                  </a>
                </div>
              </li>

              {/* Mobile */}
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 mt-0.5 text-[#E63946]">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17 1H7a3 3 0 00-3 3v16a3 3 0 003 3h10a3 3 0 003-3V4a3 3 0 00-3-3zm-5 20a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm6-4H6V5h12v12z" />
                  </svg>
                </span>
                <div className="text-[0.82rem] text-white/80 leading-relaxed">
                  <div className="text-[0.72rem] text-white/55 font-medium tracking-wider uppercase mb-1">
                    Mobile:
                  </div>
                  <a
                    href="tel:+919619435529"
                    className="block hover:text-[#E63946] transition-colors font-semibold"
                  >
                    +91 96194 35529
                  </a>
                  <a
                    href="tel:+917021519829"
                    className="block hover:text-[#E63946] transition-colors font-semibold"
                  >
                    +91 70215 19829
                  </a>
                </div>
              </li>

              {/* WhatsApp */}
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 mt-0.5 text-[#25d366]">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </span>
                <a
                  href="https://wa.me/917021519829"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[0.82rem] text-white/80 hover:text-[#25d366] transition-colors font-semibold"
                >
                  +91 96194 35529 (WhatsApp)
                </a>
              </li>

              {/* Email */}
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 mt-0.5 text-[#E63946]">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </span>
                <a
                  href="mailto:info@shreeganeshsteel.com"
                  className="text-[0.82rem] text-white/80 hover:text-[#E63946] transition-colors font-semibold break-all"
                >
                  info@shreeganeshsteel.com
                </a>
              </li>

              {/* Website */}
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 mt-0.5 text-[#E63946]">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm6.93 6h-2.95a15.65 15.65 0 00-1.38-3.56A8.03 8.03 0 0118.93 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14A8.1 8.1 0 014 12c0-.69.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A8.03 8.03 0 015.08 16zm2.95-8H5.08a8.03 8.03 0 014.33-3.56A15.65 15.65 0 008.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 01-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2 0 .69-.1 1.36-.26 2h-3.38z" />
                  </svg>
                </span>
                <a
                  href="https://shreeganeshsteel.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[0.82rem] text-white/80 hover:text-[#E63946] transition-colors font-semibold"
                >
                  www.shreeganeshsteel.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ==========================================
          BOTTOM BAR
         ========================================== */}
      <div className="border-t border-white/10 bg-[#0a2340]">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          {/* Copyright */}
          <span className="text-xs sm:text-[0.8rem] text-white/60 font-mono tracking-wider">
            © 2026{" "}
            <span className="text-white/85 font-bold">SHREE GANESH STEEL</span>.
            All rights reserved. | ISO 9001:2015 Certified Company
          </span>

          {/* Bottom links */}
          <div className="flex items-center gap-6">
            <Link
              to="/about"
              className="text-xs sm:text-[0.8rem] text-white/70 hover:text-[#E63946] transition-colors font-medium"
            >
              About
            </Link>
            <Link
              to="/products"
              className="text-xs sm:text-[0.8rem] text-white/70 hover:text-[#E63946] transition-colors font-medium"
            >
              Products
            </Link>
            <Link
              to="/contact"
              className="text-xs sm:text-[0.8rem] text-white/70 hover:text-[#E63946] transition-colors font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
