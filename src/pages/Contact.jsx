import React, { useState } from "react";
import { Link } from "react-router-dom";

// ============================================
// CONTACT DATA — From Visiting Card (SGSI)
// ============================================
const CONTACT_INFO = {
  company: "Shree Ganesh Steel India",
  shortName: "SGSI",
  tagline: "S.S. & M.S. Pipe Fitting & Manufacturers",

  // Head Office (Mumbai)
  headOffice: {
    label: "Head Office",
    lines: [
      "Shop No. 1, Plot No. 191, GRD Floor,",
      "Nawsarwala Building, Sant Sena Maharaj Marg,",
      "2nd Kumbharwada Street, Mumbai,",
      "Maharashtra — 400 004, India",
    ],
  },

  // Branch Office (Hyderabad)
  branchOffice: {
    label: "Branch Office",
    lines: [
      "Plot No. 84/A, Phase-1,",
      "Shubhas Nagar, IDA Jeedimetla,",
      "Hyderabad — 500 055, India",
    ],
  },

  // Factory (Vasai)
  factory: {
    label: "Factory",
    lines: [
      "Sr. No. 02, Bhagat Singh Industrial Estate B,",
      "Bapa Sitaram Ind. Estate - 1,",
      "Dhumal Nagar, Vasai (E),",
      "Maharashtra, India",
    ],
  },

  // Key Personnel
  personnel: [
    { name: "Birbal Vishnoi", role: "Proprietor" },
    { name: "Raju", role: "Marketing Manager", phone: "+91 70453 75529" },
  ],

  // Phones
  phones: [
    { label: "+91 96194 35529", href: "tel:+919619435529", type: "Mobile" },
    { label: "+91 70215 19829", href: "tel:+917021519829", type: "Mobile" },
    { label: "+91 70453 75529", href: "tel:+917045375529", type: "Mobile" },
    { label: "+91 88287 15529", href: "tel:+918828715529", type: "Mobile" },
    { label: "022 6743 7304", href: "tel:+912267437304", type: "Office" },
    { label: "022 6610 9359", href: "tel:+912266109359", type: "Office" },
  ],

  // Emails
  emails: [
    {
      label: "shreeganeshsteel25@gmail.com",
      href: "mailto:shreeganeshsteel25@gmail.com",
    },
    {
      label: "info@shreeganeshsteel.com",
      href: "mailto:info@shreeganeshsteel.com",
    },
    {
      label: "shreeganeshsteel13@rediffmail.com",
      href: "mailto:shreeganeshsteel13@rediffmail.com",
    },
    {
      label: "shreeganeshsteel29@gmail.com",
      href: "mailto:shreeganeshsteel29@gmail.com",
    },
  ],

  // Business Details
  gst: [
    { label: "Head Office (Mumbai)", value: "27AQWPV4546L1ZP" },
    { label: "Branch (Hyderabad)", value: "36AQWPV4546L1ZQ" },
  ],
  msme: "Registered MSME (Udyam)",

  // Web
  website: "www.shreeganeshsteel.com",
  whatsapp:
    "https://wa.me/917021519829?text=Hello%20Shree%20Ganesh%20Steel%2C%20I%20would%20like%20to%20request%20a%20quote.",

  // Products
  products: [
    "Pipes",
    "Rod",
    "Flanges",
    "Stainless Steel Sheet",
    "Plates",
    "Pipes & Fittings",
    "304",
    "304L",
    "316L",
    "316TI",
    "317L",
    "321",
    "310",
  ],
};

// ============================================
// ICONS
// ============================================
const PhoneIcon = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIcon = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
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
);

const MapPinIcon = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
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
);

const WhatsAppIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const UserIcon = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const ShieldIcon = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

const GlobeIcon = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

// ============================================
// CONTACT PAGE
// ============================================
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hello Shree Ganesh Steel India,%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Company:* ${formData.company}%0A*Subject:* ${formData.subject}%0A%0A*Message:*%0A${formData.message}`;
    window.open(`https://wa.me/917021519829?text=${message}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  // ============================================
  // REUSABLE ADDRESS CARD
  // ============================================
  const AddressCard = ({ office, icon: Icon }) => (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 flex flex-col h-full">
      <div className="flex items-start gap-3 mb-3">
        <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#0B3E8C]/10 text-[#0B3E8C] flex items-center justify-center">
          <Icon className="w-4 h-4" />
        </div>
        <div className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[#C8102E] pt-2">
          {office.label}
        </div>
      </div>
      <div className="text-sm text-[#0B3E8C] leading-relaxed font-medium pl-12">
        {office.lines.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full bg-white overflow-x-hidden">
      {/* ==========================================
          HERO
         ========================================== */}
      <section className="relative text-white overflow-hidden">
        <div className="relative w-full min-h-[500px] sm:min-h-[550px] lg:min-h-[660px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("/images/contact-hero.jpg")' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B3E8C]/10 via-transparent to-[#C8102E]/10 pointer-events-none" />
          <div className="absolute -top-40 -right-40 w-[500px] h-[600px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[600px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <div className="relative z-20 h-full min-h-[500px] sm:min-h-[550px] lg:min-h-[660px] flex items-center justify-center py-16 sm:py-20">
            <div className="max-w-[1320px] w-full mx-auto px-5 sm:px-8 flex items-center justify-center">
              <div className="max-w-2xl w-full mx-auto backdrop-blur-s bg-[#0B3E8C]/40 border border-white/90 rounded-2xl sm:rounded-3xl px-5 sm:px-8 lg:px-10 py-7 sm:py-9 lg:py-10 text-center">
                <nav className="flex items-center justify-center gap-2 text-xs text-white font-bold tracking-wider uppercase mb-5">
                  <Link
                    to="/"
                    className="hover:text-[#E63946] transition-colors"
                  >
                    Home
                  </Link>
                  <span>/</span>
                  <span className="text-white font-bold">Contact</span>
                </nav>
                <div className="inline-flex items-center gap-3 text-[0.7rem] sm:text-xs font-bold tracking-[0.25em] uppercase text-white mb-4">
                  <span className="w-6 sm:w-8 h-px bg-[#E63946]" />
                  Get In Touch
                  <span className="w-6 sm:w-8 h-px bg-[#E63946]" />
                </div>
                <h1 className="text-[1.7rem] leading-[1.1] sm:text-[2.3rem] lg:text-[2.9rem] xl:text-[3.2rem] font-medium sm:font-extrabold tracking-tight text-white mb-4 ">
                  Let's Discuss Your
                  <br />
                  <em className="not-italic text-[#E63946]">
                    Steel Requirements.
                  </em>
                </h1>
                <p className="text-[1rem] sm:text-base text-white leading-relaxed max-w-xl font-bold mx-auto">
                  Whether you need a quote, technical information or custom
                  specifications our team is here to help. Reach out via phone,
                  email or WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
    OFFICES & FACTORY — REFERENCE-STYLE CARDS
   ========================================== */}
      <section className="py-14 sm:py-16 lg:py-20 bg-[#f7f8fa]">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          {/* ===== SECTION HEADER ===== */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase text-[#C8102E] mb-4">
              <span className="w-6 h-px bg-[#C8102E]" />
              Our Presence
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B3E8C] tracking-tight leading-tight mb-4">
              Head Office, Branch &
              <span className="text-[#C8102E]"> Factory.</span>
            </h2>
            <p className="text-[#68758A] leading-relaxed">
              Strategically located across Mumbai, Hyderabad and Vasai to serve
              your steel requirements PAN India.
            </p>
          </div>

          {/* ===== 3 CARDS GRID ===== */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* ---------- CARD 1 — REGISTERED OFFICE (MUMBAI) ---------- */}
            <div className="relative bg-white rounded-2xl border border-gray-200 shadow-[0_10px_40px_-20px_rgba(11,62,140,0.15)] hover:shadow-[0_25px_60px_-25px_rgba(200,16,46,0.2)] hover:-translate-y-1 transition-all duration-500 overflow-hidden flex flex-col">
              {/* Top bar */}
              <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-gray-100">
                <span className="text-[0.68rem] font-medium font-bold tracking-[0.18em] uppercase text-[#C8102E]">
                  [CONTACT-01]
                </span>
                <span className="text-[0.68rem] font-medium font-bold tracking-[0.18em] uppercase text-[#8896a6]">
                  Single Headquarters
                </span>
              </div>

              {/* Icon + Title */}
              <div className="px-6 pt-6 pb-5">
                <div className="flex items-center gap-4 mb-1">
                  <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#FEF3C7] border border-[#F4B400]/40 flex items-center justify-center text-[#C8102E]">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[1.05rem] sm:text-[1.15rem] font-extrabold tracking-tight text-[#0B3E8C] leading-tight uppercase">
                      Registered Office
                    </h3>
                    <p className="text-[0.78rem] text-[#8896a6] mt-1 font-medium">
                      Mumbai Central Hub
                    </p>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="px-6 pb-6 flex-1 flex flex-col gap-4">
                {/* Address panel */}
                <div className="bg-[#f7f8fa] border border-gray-200 rounded-xl p-4">
                  <div className="text-[0.62rem] font-medium font-bold tracking-[0.18em] uppercase text-[#8896a6] mb-2.5">
                    Corporate Location:
                  </div>
                  <p className="text-[0.88rem] text-[#0B3E8C] font-semibold leading-relaxed">
                    Shop No. 1, Plot No. 191, GRD Floor, Nawsarwala Building,
                    Sant Sena Maharaj Marg, 2nd Kumbharwada Street, Mumbai — 400
                    004, Maharashtra, India
                  </p>
                </div>

                {/* Contacts panel */}
                <div className="bg-[#f7f8fa] border border-gray-200 rounded-xl p-4">
                  <div className="text-[0.62rem] font-medium font-bold tracking-[0.18em] uppercase text-[#8896a6] mb-3">
                    Landline / Office:
                  </div>
                  <div className="flex flex-col gap-3">
                    {[
                      "022-6743 7304",
                      "022-6610 9359",
                      "+91 96194 35529",
                      "+91 70215 19829",
                    ].map((num, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between gap-3"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className="flex-shrink-0 w-4 h-4 text-[#C8102E]">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                            </svg>
                          </span>
                          <a
                            href={`tel:${num.replace(/\s/g, "")}`}
                            className="text-[0.85rem] font-bold text-[#0B3E8C] hover:text-[#C8102E] transition-colors truncate"
                          >
                            {num}
                          </a>
                        </div>
                        <span className="flex-shrink-0 w-4 h-4 text-[#8896a6]/60">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect
                              x="9"
                              y="9"
                              width="13"
                              height="13"
                              rx="2"
                              ry="2"
                            />
                            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                          </svg>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* View map */}
                <a
                  href="https://maps.google.com/?q=Mumbai+400004"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[0.78rem] font-bold tracking-wider text-[#C8102E] hover:text-[#0B3E8C] transition-colors group mt-auto pt-1"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:rotate-12 transition-transform"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                  </svg>
                  View Map &amp; Coordinates
                  <span className="group-hover:translate-y-0.5 transition-transform">
                    ↓
                  </span>
                </a>
              </div>

              {/* Bottom verified bar */}
              <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100 bg-white">
                <span className="text-[0.62rem] font-medium font-bold tracking-[0.18em] uppercase text-[#8896a6]">
                  Verified Catalogue Detail
                </span>
                <span className="text-[#C8102E] text-xs font-bold">→</span>
              </div>
            </div>

            {/* ---------- CARD 2 — BRANCH OFFICE (HYDERABAD) ---------- */}
            <div className="relative bg-white rounded-2xl border border-gray-200 shadow-[0_10px_40px_-20px_rgba(11,62,140,0.15)] hover:shadow-[0_25px_60px_-25px_rgba(200,16,46,0.2)] hover:-translate-y-1 transition-all duration-500 overflow-hidden flex flex-col">
              <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-gray-100">
                <span className="text-[0.68rem] font-medium font-bold tracking-[0.18em] uppercase text-[#C8102E]">
                  [CONTACT-02]
                </span>
                <span className="text-[0.68rem] font-medium font-bold tracking-[0.18em] uppercase text-[#8896a6]">
                  Direct Voice Desk
                </span>
              </div>

              <div className="px-6 pt-6 pb-5">
                <div className="flex items-center gap-4 mb-1">
                  <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#FEF3C7] border border-[#F4B400]/40 flex items-center justify-center text-[#C8102E]">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[1.05rem] sm:text-[1.15rem] font-extrabold tracking-tight text-[#0B3E8C] leading-tight uppercase">
                      Branch Office
                    </h3>
                    <p className="text-[0.78rem] text-[#8896a6] mt-1 font-medium">
                      Hyderabad Regional Hub
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 flex-1 flex flex-col gap-4">
                <div className="bg-[#f7f8fa] border border-gray-200 rounded-xl p-4">
                  <div className="text-[0.62rem] font-medium font-bold tracking-[0.18em] uppercase text-[#8896a6] mb-2.5">
                    Branch Location:
                  </div>
                  <p className="text-[0.88rem] text-[#0B3E8C] font-semibold leading-relaxed">
                    Plot No. 84/A, Phase-1, Shubhas Nagar, IDA Jeedimetla,
                    Hyderabad — 500 055, India
                  </p>
                </div>

                <div className="bg-[#f7f8fa] border border-gray-200 rounded-xl p-4">
                  <div className="text-[0.62rem] font-medium font-bold tracking-[0.18em] uppercase text-[#8896a6] mb-1.5">
                    Contact Person:
                  </div>
                  <div className="text-[0.85rem] font-bold text-[#0B3E8C] mb-2.5">
                    Branch Manager
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="flex-shrink-0 w-4 h-4 text-[#C8102E]">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                        </svg>
                      </span>
                      <a
                        href="tel:+918828715529"
                        className="text-[0.85rem] font-bold text-[#0B3E8C] hover:text-[#C8102E] transition-colors truncate"
                      >
                        +91 88287 15529
                      </a>
                    </div>
                    <span className="flex-shrink-0 w-4 h-4 text-[#8896a6]/60">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="9"
                          y="9"
                          width="13"
                          height="13"
                          rx="2"
                          ry="2"
                        />
                        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                      </svg>
                    </span>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=IDA+Jeedimetla+Hyderabad"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[0.78rem] font-bold tracking-wider text-[#C8102E] hover:text-[#0B3E8C] transition-colors group mt-auto pt-1"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:rotate-12 transition-transform"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                  </svg>
                  View Map &amp; Coordinates
                  <span className="group-hover:translate-y-0.5 transition-transform">
                    ↓
                  </span>
                </a>
              </div>

              <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100 bg-white">
                <span className="text-[0.62rem] font-medium font-bold tracking-[0.18em] uppercase text-[#8896a6]">
                  Verified Catalogue Detail
                </span>
                <span className="text-[#C8102E] text-xs font-bold">→</span>
              </div>
            </div>

            {/* ---------- CARD 3 — FACTORY (VASAI E) ---------- */}
            <div className="relative bg-white rounded-2xl border border-gray-200 shadow-[0_10px_40px_-20px_rgba(11,62,140,0.15)] hover:shadow-[0_25px_60px_-25px_rgba(200,16,46,0.2)] hover:-translate-y-1 transition-all duration-500 overflow-hidden flex flex-col">
              <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-gray-100">
                <span className="text-[0.68rem] font-medium font-bold tracking-[0.18em] uppercase text-[#C8102E]">
                  [CONTACT-03]
                </span>
                <span className="text-[0.68rem] font-medium font-bold tracking-[0.18em] uppercase text-[#8896a6]">
                  Production Unit
                </span>
              </div>

              <div className="px-6 pt-6 pb-5">
                <div className="flex items-center gap-4 mb-1">
                  <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#FEF3C7] border border-[#F4B400]/40 flex items-center justify-center text-[#C8102E]">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2 20h20V8l-5 4V8l-5 4V8l-5 4V4H2z" />
                      <path d="M6 20v-6M12 20v-6M18 20v-6" />
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[1.05rem] sm:text-[1.15rem] font-extrabold tracking-tight text-[#0B3E8C] leading-tight uppercase">
                      Factory
                    </h3>
                    <p className="text-[0.78rem] text-[#8896a6] mt-1 font-medium">
                      Vasai (E) — Manufacturing
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 flex-1 flex flex-col gap-4">
                <div className="bg-[#f7f8fa] border border-gray-200 rounded-xl p-4">
                  <div className="text-[0.62rem] font-medium font-bold tracking-[0.18em] uppercase text-[#8896a6] mb-2.5">
                    Factory Location:
                  </div>
                  <p className="text-[0.88rem] text-[#0B3E8C] font-semibold leading-relaxed">
                    Sr. No. 02, Bhagat Singh Industrial Estate B, Bapa Sitaram
                    Ind. Estate - 1, Dhumal Nagar, Vasai (E), Maharashtra, India
                  </p>
                </div>

                <div className="bg-[#f7f8fa] border border-gray-200 rounded-xl p-4">
                  <div className="text-[0.62rem] font-medium font-bold tracking-[0.18em] uppercase text-[#8896a6] mb-3">
                    Factory Contact:
                  </div>
                  <div className="flex flex-col gap-3">
                    {["+91 96194 35529", "+91 70215 19829"].map((num, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between gap-3"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className="flex-shrink-0 w-4 h-4 text-[#C8102E]">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                            </svg>
                          </span>
                          <a
                            href={`tel:${num.replace(/\s/g, "")}`}
                            className="text-[0.85rem] font-bold text-[#0B3E8C] hover:text-[#C8102E] transition-colors truncate"
                          >
                            {num}
                          </a>
                        </div>
                        <span className="flex-shrink-0 w-4 h-4 text-[#8896a6]/60">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect
                              x="9"
                              y="9"
                              width="13"
                              height="13"
                              rx="2"
                              ry="2"
                            />
                            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                          </svg>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=Vasai+East+Maharashtra"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[0.78rem] font-bold tracking-wider text-[#C8102E] hover:text-[#0B3E8C] transition-colors group mt-auto pt-1"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:rotate-12 transition-transform"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                  </svg>
                  View Map &amp; Coordinates
                  <span className="group-hover:translate-y-0.5 transition-transform">
                    ↓
                  </span>
                </a>
              </div>

              <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100 bg-white">
                <span className="text-[0.62rem] font-medium font-bold tracking-[0.18em] uppercase text-[#8896a6]">
                  Verified Catalogue Detail
                </span>
                <span className="text-[#C8102E] text-xs font-bold">→</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          MAIN CONTACT — FORM + INFO
         ========================================== */}
      <section className="py-14 sm:py-16 lg:py-20 bg-[#f7f8fa]">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* LEFT — Info (2 cols) */}
            <div className="lg:col-span-2 space-y-5">
              {/* Key Personnel */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#0B3E8C]/10 text-[#0B3E8C] flex items-center justify-center">
                    <UserIcon />
                  </div>
                  <div className="flex-1">
                    <div className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[#C8102E] mb-3">
                      Key Personnel
                    </div>
                    <div className="space-y-3">
                      {CONTACT_INFO.personnel.map((person, i) => (
                        <div
                          key={i}
                          className="pb-3 border-b border-gray-100 last:border-0 last:pb-0"
                        >
                          <div className="text-base font-bold text-[#0B3E8C]">
                            {person.name}
                          </div>
                          <div className="text-xs text-[#68758A] font-medium">
                            {person.role}
                          </div>
                          {person.phone && (
                            <a
                              href={`tel:${person.phone.replace(/\s/g, "")}`}
                              className="text-xs text-[#0B3E8C] hover:text-[#C8102E] font-semibold mt-1 inline-block"
                            >
                              {person.phone}
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Registration */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#0B3E8C]/10 text-[#0B3E8C] flex items-center justify-center">
                    <ShieldIcon />
                  </div>
                  <div className="flex-1">
                    <div className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[#C8102E] mb-3">
                      Business Details
                    </div>
                    <div className="space-y-3">
                      {CONTACT_INFO.gst.map((g, i) => (
                        <div key={i}>
                          <div className="text-[0.62rem] font-bold tracking-widest uppercase text-[#68758A] mb-0.5">
                            GST — {g.label}
                          </div>
                          <div className="text-sm font-bold text-[#0B3E8C] font-medium">
                            {g.value}
                          </div>
                        </div>
                      ))}
                      <div>
                        <div className="text-[0.62rem] font-bold tracking-widest uppercase text-[#68758A] mb-0.5">
                          Registration
                        </div>
                        <div className="text-sm font-semibold text-[#0B3E8C]">
                          {CONTACT_INFO.msme}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Website */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#0B3E8C]/10 text-[#0B3E8C] flex items-center justify-center">
                    <GlobeIcon />
                  </div>
                  <div>
                    <div className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[#C8102E] mb-2">
                      Website
                    </div>
                    <a
                      href={`https://${CONTACT_INFO.website}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-bold text-[#0B3E8C] hover:text-[#C8102E] transition-colors"
                    >
                      {CONTACT_INFO.website}
                    </a>
                  </div>
                </div>
              </div>

              {/* Product Range */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <div className="text-[0.65rem] font-bold tracking-[0.18em] uppercase text-[#C8102E] mb-3">
                  Product Range
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {CONTACT_INFO.products.map((p) => (
                    <span
                      key={p}
                      className="text-[0.75rem] font-medium tracking-wider uppercase bg-[#f7f8fa] text-[#0B3E8C] px-2.5 py-1 rounded border border-gray-200"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT — Form (3 cols) */}
            <div className="lg:col-span-3">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 lg:p-10">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase text-[#C8102E] mb-3">
                    <span className="w-6 h-px bg-[#C8102E]" />
                    Send Inquiry
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B3E8C] tracking-tight mb-2">
                    Request a Quote
                  </h2>
                  <p className="text-sm text-[#68758A] leading-relaxed">
                    Fill in the form and we'll get back to you within 24 hours
                    via WhatsApp or email.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[0.68rem] font-bold tracking-widest uppercase text-[#68758A] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-4 py-3 bg-[#f7f8fa] border border-gray-200 rounded-lg text-sm text-[#0B3E8C] placeholder:text-[#a0a9b8] focus:border-[#0B3E8C] focus:bg-white focus:ring-2 focus:ring-[#0B3E8C]/10 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[0.68rem] font-bold tracking-widest uppercase text-[#68758A] mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 00000 00000"
                        className="w-full px-4 py-3 bg-[#f7f8fa] border border-gray-200 rounded-lg text-sm text-[#0B3E8C] placeholder:text-[#a0a9b8] focus:border-[#0B3E8C] focus:bg-white focus:ring-2 focus:ring-[#0B3E8C]/10 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[0.68rem] font-bold tracking-widest uppercase text-[#68758A] mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 bg-[#f7f8fa] border border-gray-200 rounded-lg text-sm text-[#0B3E8C] placeholder:text-[#a0a9b8] focus:border-[#0B3E8C] focus:bg-white focus:ring-2 focus:ring-[#0B3E8C]/10 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[0.68rem] font-bold tracking-widest uppercase text-[#68758A] mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company name"
                        className="w-full px-4 py-3 bg-[#f7f8fa] border border-gray-200 rounded-lg text-sm text-[#0B3E8C] placeholder:text-[#a0a9b8] focus:border-[#0B3E8C] focus:bg-white focus:ring-2 focus:ring-[#0B3E8C]/10 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[0.68rem] font-bold tracking-widest uppercase text-[#68758A] mb-2">
                      Subject / Requirement
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. SS 316L Pipe — 100 meters"
                      className="w-full px-4 py-3 bg-[#f7f8fa] border border-gray-200 rounded-lg text-sm text-[#0B3E8C] placeholder:text-[#a0a9b8] focus:border-[#0B3E8C] focus:bg-white focus:ring-2 focus:ring-[#0B3E8C]/10 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[0.68rem] font-bold tracking-widest uppercase text-[#68758A] mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your requirement — material grade, size, quantity, delivery location, etc."
                      className="w-full px-4 py-3 bg-[#f7f8fa] border border-gray-200 rounded-lg text-sm text-[#0B3E8C] placeholder:text-[#a0a9b8] focus:border-[#0B3E8C] focus:bg-white focus:ring-2 focus:ring-[#0B3E8C]/10 outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-br from-[#0B3E8C] to-[#1E6FD9] hover:from-[#C8102E] hover:to-[#E63946] text-white font-bold text-sm tracking-widest uppercase px-6 py-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl"
                  >
                    Send Inquiry via WhatsApp <span>→</span>
                  </button>

                  {submitted && (
                    <div className="p-4 bg-[#25d366]/10 border border-[#25d366]/30 rounded-lg text-sm text-[#0B3E8C] font-medium text-center">
                      ✅ Redirecting to WhatsApp...
                    </div>
                  )}

                  <p className="text-[0.7rem] text-[#68758A] text-center leading-relaxed">
                    By submitting this form, you agree to be contacted via
                    WhatsApp, phone or email.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          MAP / LOCATION SECTION
         ========================================== */}
      <section className="py-14 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase text-[#C8102E] mb-4">
              <span className="w-6 h-px bg-[#C8102E]" />
              Our Location
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B3E8C] tracking-tight leading-tight mb-4">
              Visit Our<span className="text-[#C8102E]"> Head Office.</span>
            </h2>
            <p className="text-[#68758A] leading-relaxed">
              Located in the heart of Mumbai's steel trading hub — Kumbharwada,
              near Gol Deval Temple.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-[0_15px_40px_rgba(11,62,140,0.08)]">
            <iframe
              title="Shree Ganesh Steel India Location"
              src="https://www.google.com/maps?q=Kumbharwada,Mumbai,Maharashtra&output=embed"
              className="w-full h-[400px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ==========================================
          FINAL CTA
         ========================================== */}
      <section className="py-14 sm:py-16 bg-[#f7f8fa] border-t border-gray-200">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-[#0B3E8C] via-[#0d47a1] to-[#C8102E] p-8 sm:p-12 lg:p-16 text-white overflow-hidden">
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.25em] uppercase text-white mb-4">
                <span className="w-6 h-px bg-white/60" />
                Ready When You Are
                <span className="w-6 h-px bg-white/60" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
                Let's Build Something
                <br />
                <span className="text-white/80">Reliable Together.</span>
              </h2>
              <p className="text-white font-bold  leading-relaxed mb-8 text-base sm:text-lg max-w-2xl mx-auto">
                From single-piece orders to bulk industrial supply — we're here
                to support your steel requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={CONTACT_INFO.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-white bg-gradient-to-br from-[#25d366] to-[#1ebd5a] hover:bg-green-300 font-bold text-sm px-7 py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <WhatsAppIcon className="w-4 h-4" /> WhatsApp Us
                </a>
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

export default Contact;
