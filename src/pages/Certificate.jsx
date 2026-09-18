import React, { useState } from "react";
import { Link } from "react-router-dom";

// ============================================
// CERTIFICATES DATA
// ============================================
const certificates = [
  {
    id: 1,
    name: "ISO 9001:2015 Quality Management System",
    shortName: "ISO 9001:2015",
    issuer: "International Organization for Standardization",
    year: "2015",
    desc: "Certified Quality Management System demonstrating our commitment to consistent quality, customer satisfaction and continuous improvement across all operations.",
    file: "/certificates/iso-9001-2015.pdf",
    icon: "award",
    highlights: [
      "Quality Management System",
      "Customer Focus",
      "Continuous Improvement",
      "Process Approach",
    ],
  },
  {
    id: 2,
    name: "Udyam Registration Certificate (MSME)",
    shortName: "Udyam Registration",
    issuer: "Ministry of Micro, Small & Medium Enterprises, Govt. of India",
    year: "Registered",
    desc: "Official MSME registration under the Udyam portal — recognizing Shree Ganesh Steel Corporation as a registered micro, small or medium enterprise in India.",
    file: "/certificates/udyam-msme.pdf",
    icon: "shield",
    highlights: [
      "Government Registered",
      "MSME Recognition",
      "Formal Business Entity",
      "Priority Sector Benefits",
    ],
  },
  {
    id: 3,
    name: "MASSMA Certificate of Membership",
    shortName: "MASSMA Membership",
    issuer: "MASSMA — Metal & Steel Small Scale Manufacturers Association",
    year: "Active Member",
    desc: "Active membership with MASSMA — a recognized industry association representing metal and steel manufacturers across India.",
    file: "/certificates/massma-membership.pdf",
    icon: "file",
    highlights: [
      "Industry Association",
      "Verified Membership",
      "Networking Access",
      "Industry Recognition",
    ],
  },
];

// ============================================
// CERTIFICATE ICONS
// ============================================
const CertificateIcon = ({ type, className = "w-6 h-6" }) => {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  if (type === "award") {
    return (
      <svg {...common}>
        <circle cx="12" cy="8" r="6" />
        <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.11" />
      </svg>
    );
  }

  if (type === "shield") {
    return (
      <svg {...common}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
};

// ============================================
// CERTIFICATE PAGE
// ============================================
const Certificate = () => {
  const [activeId, setActiveId] = useState(null);

  return (
    <div className="w-full bg-white overflow-x-hidden">
      {/* ==========================================
          HERO
         ========================================== */}
      <section className="relative bg-gradient-to-br from-[#0B3E8C] via-[#0d47a1] to-[#C8102E] text-white overflow-hidden">
        {/* Decorative blurs */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-[1320px] mx-auto px-5 sm:px-8 py-16 sm:py-20 lg:py-24">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-white/70 font-mono tracking-wider uppercase mb-6">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white font-bold">Certificates</span>
          </nav>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 text-[0.7rem] sm:text-xs font-bold tracking-[0.25em] uppercase text-white mb-5">
            <span className="w-8 h-px bg-white" />
            Certified & Trusted
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold tracking-tight leading-[1.08] mb-6 max-w-3xl">
            Our Certifications
            <br />
            <em className="not-italic text-white/80">& Registrations.</em>
          </h1>

          {/* Description */}
          <p className="text-white/85 leading-relaxed max-w-2xl text-base sm:text-lg mb-8">
            Recognized, registered and certified — our credentials reflect our
            commitment to quality, compliance and industry best practices.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-x-12 gap-y-5 pt-6 border-t border-white/20">
            <div>
              <div className="text-3xl font-extrabold tracking-tight leading-none tabular-nums">
                {certificates.length}
              </div>
              <div className="text-[0.68rem] font-medium tracking-widest uppercase text-white/80 mt-2">
                Certifications
              </div>
            </div>
            <div>
              <div className="text-3xl font-extrabold tracking-tight leading-none tabular-nums">
                100%
              </div>
              <div className="text-[0.68rem] font-medium tracking-widest uppercase text-white/80 mt-2">
                Compliant
              </div>
            </div>
            <div>
              <div className="text-3xl font-extrabold tracking-tight leading-none tabular-nums">
                2013
              </div>
              <div className="text-[0.68rem] font-medium tracking-widest uppercase text-white/80 mt-2">
                Since
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          CERTIFICATES GRID
         ========================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#f7f8fa]">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          {/* Section header */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase text-[#C8102E] mb-4">
              <span className="w-6 h-px bg-[#C8102E]" />
              Our Credentials
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3E8C] tracking-tight leading-tight mb-4">
              Verified Certifications
              <span className="text-[#C8102E]"> & Registrations.</span>
            </h2>
            <p className="text-[#68758A] leading-relaxed">
              Every certificate below is authentic and verifiable. Click on any
              certificate to view or download the official document.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#0B3E8C]/30 hover:shadow-[0_20px_50px_rgba(11,62,140,0.12)]"
              >
                {/* Top accent */}
                <div className="h-[3px] bg-gradient-to-r from-[#1E6FD9] via-[#0B3E8C] to-[#C8102E]" />

                {/* Content */}
                <div className="p-6 sm:p-7">
                  {/* Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0B3E8C] to-[#1E6FD9] text-white flex items-center justify-center group-hover:from-[#C8102E] group-hover:to-[#E63946] transition-all duration-500">
                      <CertificateIcon type={cert.icon} className="w-7 h-7" />
                    </div>
                    <span className="text-[0.62rem] font-bold tracking-[0.18em] uppercase text-[#68758A] bg-[#f7f8fa] px-2.5 py-1 rounded border border-gray-200">
                      {cert.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#0B3E8C] mb-2 leading-tight group-hover:text-[#C8102E] transition-colors">
                    {cert.shortName}
                  </h3>

                  {/* Issuer */}
                  <div className="text-[0.7rem] font-medium text-[#68758A] mb-3 leading-snug">
                    {cert.issuer}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#68758A] leading-relaxed mb-5">
                    {cert.desc}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1.5 mb-6 pt-4 border-t border-gray-100">
                    {cert.highlights.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-[0.78rem] text-[#0B3E8C] font-medium"
                      >
                        <span className="flex-shrink-0 w-1 h-1 rounded-full bg-[#C8102E]" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full bg-[#0B3E8C] hover:bg-[#C8102E] text-white font-bold text-[0.72rem] tracking-widest uppercase px-4 py-3 rounded-lg transition-all duration-300 group/btn"
                  >
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
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    View Certificate
                    <span className="group-hover/btn:translate-x-1 transition-transform">
                      →
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          TRUST SECTION
         ========================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase text-[#C8102E] mb-4">
                <span className="w-6 h-px bg-[#C8102E]" />
                Why It Matters
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3E8C] tracking-tight leading-tight mb-6">
                Compliance You Can
                <br />
                <span className="text-[#C8102E]">Trust.</span>
              </h2>
              <p className="text-[#68758A] leading-relaxed mb-6">
                Our certifications and registrations are not just documents —
                they represent our commitment to consistent quality, ethical
                business practices and compliance with recognized industry
                standards.
              </p>
              <p className="text-[#68758A] leading-relaxed">
                Whether you're a domestic client or an international buyer,
                these credentials give you the confidence that you're working
                with a verified, trustworthy supplier.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Quality Assured",
                  desc: "ISO 9001:2015 certified quality management system.",
                  icon: "award",
                },
                {
                  title: "Government Registered",
                  desc: "Official Udyam MSME registration with Govt. of India.",
                  icon: "shield",
                },
                {
                  title: "Industry Recognized",
                  desc: "Active MASSMA membership for metal & steel manufacturers.",
                  icon: "file",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-5 bg-[#f7f8fa] border border-gray-200 rounded-xl hover:border-[#0B3E8C]/30 hover:bg-white transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#0B3E8C]/10 text-[#0B3E8C] flex items-center justify-center">
                    <CertificateIcon type={item.icon} className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#0B3E8C] mb-1">
                      {item.title}
                    </div>
                    <div className="text-xs text-[#68758A] leading-relaxed">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          CTA
         ========================================== */}
      <section className="py-16 sm:py-20 bg-[#f7f8fa] border-t border-gray-200">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-[#0B3E8C] via-[#0d47a1] to-[#C8102E] p-8 sm:p-12 lg:p-16 text-white overflow-hidden">
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.25em] uppercase text-white/80 mb-4">
                <span className="w-6 h-px bg-white/60" />
                Get In Touch
                <span className="w-6 h-px bg-white/60" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
                Need a Copy of Any
                <br />
                <span className="text-white/80">Certificate?</span>
              </h2>
              <p className="text-white/85 leading-relaxed mb-8 text-base sm:text-lg max-w-2xl mx-auto">
                Reach out to our team and we'll share the relevant certificates,
                test reports or compliance documents you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-white/90 text-[#0B3E8C] font-bold text-sm px-7 py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Contact Us
                  <span>→</span>
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold text-sm px-7 py-3.5 rounded-lg hover:bg-white/10 transition-all duration-300"
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

export default Certificate;
