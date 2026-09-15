import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0a1628] text-white">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 pt-14 sm:pt-20 lg:pt-24">
        {/* ============ TOP GRID ============ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-12 pb-12 sm:pb-16 border-b border-white/10">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <div className="relative w-[46px] h-[46px] rounded-md bg-gradient-to-br from-[#0a1628] to-[#142b4d] text-[#c9a961] flex items-center justify-center font-black text-base tracking-wider shadow-[0_4px_14px_rgba(10,22,40,0.25)] overflow-hidden mb-5">
              <span className="relative z-10 font-mono">SG</span>
              <span className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-transparent to-[#c9a961]/30 rotate-45" />
            </div>

            <h4 className="text-white font-bold text-lg sm:text-xl mb-4 tracking-tight">
              Shree Ganesh Steel Corporation
            </h4>
            <p className="text-[0.9rem] text-white/80 leading-relaxed mb-6 max-w-md">
              Trusted manufacturer, supplier and exporter of premium stainless
              steel, carbon steel and alloy steel products for global
              industries.
            </p>

            {/* Social icons — brand SVGs */}
            <div className="flex gap-2.5">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp"
                className="w-10 h-10 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-[#25d366] hover:bg-[#25d366] hover:text-white hover:border-[#25d366] hover:-translate-y-1 transition-all duration-300"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/shreeganeshsteel"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="w-10 h-10 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-[#e4405f] hover:bg-[#e4405f] hover:text-white hover:border-[#e4405f] hover:-translate-y-1 transition-all duration-300"
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
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://facebook.com/shreeganeshsteel"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                title="Facebook"
                className="w-10 h-10 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-[#1877f2] hover:bg-[#1877f2] hover:text-white hover:border-[#1877f2] hover:-translate-y-1 transition-all duration-300"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.91h-2.34V22c4.78-.76 8.43-4.92 8.43-9.94z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/shreeganeshsteel"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="w-10 h-10 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-[#0a66c2] hover:bg-[#0a66c2] hover:text-white hover:border-[#0a66c2] hover:-translate-y-1 transition-all duration-300"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="text-[#c9a961] text-[0.75rem] font-bold tracking-[0.2em] uppercase mb-6 font-mono">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { to: "/about", label: "About Us" },
                { to: "/infra", label: "Infrastructure" },
                { to: "/quality", label: "Quality" },
                { to: "/industries", label: "Industries" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.to}
                    className="text-[0.92rem] text-white/85 hover:text-[#c9a961] hover:pl-1 transition-all duration-300 font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="lg:col-span-2">
            <h4 className="text-[#c9a961] text-[0.75rem] font-bold tracking-[0.2em] uppercase mb-6 font-mono">
              Products
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                "Stainless Steel",
                "Flanges",
                "Butt Weld Fittings",
                "Forged Fittings",
                "Valves",
                "Pipes & Tubes",
              ].map((label, i) => (
                <li key={i}>
                  <Link
                    to="/products"
                    className="text-[0.92rem] text-white/85 hover:text-[#c9a961] hover:pl-1 transition-all duration-300 font-medium"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[#c9a961] text-[0.75rem] font-bold tracking-[0.2em] uppercase mb-6 font-mono">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  to="/"
                  className="text-[0.92rem] text-white/85 hover:text-[#c9a961] hover:pl-1 transition-all duration-300 font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-[0.92rem] text-white/85 hover:text-[#c9a961] hover:pl-1 transition-all duration-300 font-medium"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[0.92rem] text-white/85 hover:text-[#c9a961] hover:pl-1 transition-all duration-300 font-medium"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/919876543210?text=Hello%20Shree%20Ganesh%20Steel%2C%20I%20would%20like%20to%20request%20a%20quote."
                  target="_blank"
                  rel="noreferrer"
                  className="text-[0.92rem] text-white/85 hover:text-[#c9a961] hover:pl-1 transition-all duration-300 font-medium"
                >
                  Request a Quote
                </a>
              </li>
            </ul>
          </div>

          {/* ✅ Contact — actual SVG icons + proper alignment */}
          <div className="lg:col-span-2">
            <h4 className="text-[#c9a961] text-[0.75rem] font-bold tracking-[0.2em] uppercase mb-6 font-mono">
              Contact
            </h4>
            <ul className="flex flex-col gap-4">
              {/* Phone */}
              <li>
                <a
                  href="tel:+919876543210"
                  className="group flex items-start gap-3 text-[0.9rem] text-white/85 leading-relaxed hover:text-[#c9a961] transition-colors"
                >
                  <span className="w-8 h-8 rounded-md bg-[#c9a961]/10 border border-[#c9a961]/20 flex items-center justify-center text-[#c9a961] flex-shrink-0 group-hover:bg-[#c9a961] group-hover:text-[#0a1628] transition-all duration-300">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <span className="font-medium pt-1">+91 98765 43210</span>
                </a>
              </li>

              {/* Email */}
              <li>
                <a
                  href="mailto:info@shreeganeshsteel.com"
                  className="group flex items-start gap-3 text-[0.9rem] text-white/85 leading-relaxed hover:text-[#c9a961] transition-colors"
                >
                  <span className="w-8 h-8 rounded-md bg-[#c9a961]/10 border border-[#c9a961]/20 flex items-center justify-center text-[#c9a961] flex-shrink-0 group-hover:bg-[#c9a961] group-hover:text-[#0a1628] transition-all duration-300">
                    <svg
                      width="14"
                      height="14"
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
                  </span>
                  <span className="font-medium pt-1 break-all">
                    info@shreeganeshsteel.com
                  </span>
                </a>
              </li>

              {/* Address */}
              <li>
                <div className="flex items-start gap-3 text-[0.9rem] text-white/85 leading-relaxed">
                  <span className="w-9 h-9 rounded-md bg-[#c9a961]/10 border border-[#c9a961]/20 flex items-center justify-center text-[#c9a961] flex-shrink-0 mt-0.5">
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
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <span className="font-medium pt-1.5 flex-1 min-w-0 break-words">
                    191, Ground Floor, 2'nd Khumbharwada, Near Gol Deval Temple,
                    Mumbai-400004, Maharashtra, India
                  </span>
                </div>
              </li>

              {/* WhatsApp */}
              <li>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-3 text-[0.9rem] text-white/85 leading-relaxed hover:text-[#25d366] transition-colors"
                >
                  <span className="w-8 h-8 rounded-md bg-[#25d366]/10 border border-[#25d366]/20 flex items-center justify-center text-[#25d366] flex-shrink-0 group-hover:bg-[#25d366] group-hover:text-white transition-all duration-300">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </span>
                  <span className="font-medium pt-1">WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ============ BOTTOM BAR ============ */}
        <div className="py-7 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <span className="text-xs sm:text-sm text-white/70 font-mono tracking-wider">
            © SHREE GANESH STEEL CORPORATION. All Rights Reserved.
          </span>
          <span className="text-xs sm:text-sm text-white/70 font-mono tracking-wider">
            Designed with precision · Built for industry
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
