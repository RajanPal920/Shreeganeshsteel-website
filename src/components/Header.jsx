import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

// ============================================
// WHATSAPP CONFIG
// ============================================
const WHATSAPP_NUMBER = "917021519829";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello Shree Ganesh Steel, I would like to request a quote.",
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

// ============================================
// MATERIALS DATA — with icons
// ============================================
const materials = [
  {
    slug: "stainless-steel",
    name: "Stainless Steel",
    number: "01",
    icon: "shield",
    desc: "304, 316L, 321, 310S, 347, 904L",
    accent: "#C8102E",
  },
  {
    slug: "nickel",
    name: "Nickel",
    number: "02",
    icon: "flame",
    desc: "Nickel 200/201, Inconel 600/625, 800",
    accent: "#1E6FD9",
  },
  {
    slug: "high-alloys",
    name: "High Alloys",
    number: "03",
    icon: "atom",
    desc: "Hastelloy C22, Alloy 20, SMO 254",
    accent: "#C8102E",
  },
  {
    slug: "duplex",
    name: "Duplex",
    number: "04",
    icon: "layers",
    desc: "UNS S31803 (2205), UNS S32205",
    accent: "#1E6FD9",
  },
  {
    slug: "super-duplex",
    name: "Super Duplex",
    number: "05",
    icon: "anchor",
    desc: "UNS S32750 (2507), UNS S32760",
    accent: "#C8102E",
  },
  {
    slug: "titanium",
    name: "Titanium",
    number: "06",
    icon: "rocket",
    desc: "Grade 1, Grade 2, Grade 5 (Ti-6Al-4V)",
    accent: "#1E6FD9",
  },
  {
    slug: "alloys",
    name: "Alloys",
    number: "07",
    icon: "gem",
    desc: "Zirconium 702, Tantalum, Cu-Ni 70/30",
    accent: "#C8102E",
  },
  {
    slug: "carbon",
    name: "Carbon",
    number: "08",
    icon: "cube",
    desc: "ASTM A106 Gr B, A105, A333 Gr 6",
    accent: "#1E6FD9",
  },
  {
    slug: "alloy-steel",
    name: "Alloy Steel",
    number: "09",
    icon: "wrench",
    desc: "ASTM A335 P5, P9, P11, P22, P91, F11",
    accent: "#C8102E",
  },
];

// ============================================
// CERTIFICATES DATA
// ============================================
const certificates = [
  {
    id: 1,
    name: "ISO 9001:2015 Quality Management System",
    shortName: "ISO 9001:2015",
    file: "/certificates/iso-9001-2015.pdf",
    icon: "award",
  },
  {
    id: 2,
    name: "Udyam Registration Certificate (MSME)",
    shortName: "Udyam Registration (MSME)",
    file: "/certificates/udyam-msme.pdf",
    icon: "shield",
  },
  {
    id: 3,
    name: "MASSMA Certificate of Membership",
    shortName: "MASSMA Membership",
    file: "/certificates/massma-membership.pdf",
    icon: "file",
  },
];

// ============================================
// MANUFACTURER PRODUCTS
// ============================================
const manufacturerProducts = [
  {
    id: 1,
    name: "Butt Weld Fittings",
    desc: "Seamless & welded elbows, tees, reducers & caps",
    slug: "buttweld-fittings",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2z" />
        <path d="M9 16v4M15 16v4" />
      </svg>
    ),
  },
  {
    id: 2,
    name: "Forged Fittings",
    desc: "Socketweld & threaded fittings (2000# to 9000#)",
    slug: "forged-fittings",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="8" cy="12" r="3" />
        <circle cx="16" cy="12" r="3" />
        <path d="M11 12h2" />
      </svg>
    ),
  },
  {
    id: 3,
    name: "Flanges",
    desc: "ANSI, DIN & BS forged industrial flanges",
    slug: "flanges",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    id: 4,
    name: "Fasteners",
    desc: "High-tensile stud bolts, nuts & heavy bolting",
    slug: "fasteners",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2l3 6h-6l3-6z" />
        <rect x="10" y="8" width="4" height="14" />
      </svg>
    ),
  },
  {
    id: 5,
    name: "Dairy & Pharma Fittings",
    desc: "Hygienic electro-polished TC ferrules & sanitary bends",
    slug: "dairy-fittings",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 4h12l-1 16H7L6 4z" />
        <path d="M9 4V2h6v2" />
      </svg>
    ),
  },
  {
    id: 6,
    name: "Hose Pipes",
    desc: "SS corrugated flexible & wire braided hoses",
    slug: "hose-pipe",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 8c4 0 4 8 8 8s4-8 8-8" />
      </svg>
    ),
  },
  {
    id: 7,
    name: "Wire Mesh",
    desc: "Woven, welded & crimped filtration screens",
    slug: "wire-mesh",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 3h18v18H3z" />
        <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
      </svg>
    ),
  },
  {
    id: 8,
    name: "Perforated Sheets",
    desc: "Custom punched round, square & slotted sheets",
    slug: "perforated-sheet",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="1" />
        <circle cx="8" cy="8" r="1" fill="currentColor" />
        <circle cx="16" cy="8" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 9,
    name: "Ferrule Fittings",
    desc: "Double ferrule tube fittings, instrumentation & hydraulic lines",
    slug: "ferrule-fittings",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="8" cy="12" r="2" />
        <circle cx="16" cy="12" r="2" />
        <rect x="2" y="10" width="4" height="4" rx="1" />
        <rect x="18" y="10" width="4" height="4" rx="1" />
        <line x1="10" y1="12" x2="14" y2="12" />
      </svg>
    ),
  },
];

// ============================================
// SUPPLIER PRODUCTS
// ============================================
const supplierProducts = [
  {
    id: 1,
    name: "Pipes & Tubes",
    desc: "High-pressure seamless & welded pipes & tubes",
    slug: "pipes-tubes",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 12h20" />
        <path d="M5 8v8" />
        <path d="M19 8v8" />
      </svg>
    ),
  },
  {
    id: 2,
    name: "Sheets & Plates",
    desc: "Heavy engineering plates & cold rolled sheets",
    slug: "sheets-plates",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="7" width="18" height="10" rx="1" />
      </svg>
    ),
  },
  {
    id: 3,
    name: "Rods & Bars",
    desc: "Precision ground round, hex & square bars",
    slug: "round-bars",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="9" width="20" height="6" rx="3" />
      </svg>
    ),
  },
  {
    id: 4,
    name: "Wires",
    desc: "High-tensile industrial, spring & welding wires",
    slug: "wires",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 6c4 0 4 12 8 12s4-12 8-12" />
      </svg>
    ),
  },
  {
    id: 5,
    name: "Circles",
    desc: "Rolled plate circles & forged heavy discs",
    slug: "circles",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 6,
    name: "Patta Patti",
    desc: "Slit strips & narrow coiled strip stock",
    slug: "patta-patti",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="6" width="20" height="3" />
        <rect x="2" y="12" width="20" height="3" />
      </svg>
    ),
  },
  {
    id: 7,
    name: "Coils",
    desc: "2B, BA & Mirror finish precision slit coils",
    slug: "coils",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    id: 8,
    name: "Rings",
    desc: "Forged flange rings & lap-joint backing rings",
    slug: "rings",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="7" />
      </svg>
    ),
  },
];

// ============================================
// CERTIFICATE ICONS
// ============================================
const CertificateIcon = ({ type }) => {
  const common = {
    width: 16,
    height: 16,
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
// MATERIAL ICONS
// ============================================
const MaterialIcon = ({ type, className = "w-6 h-6" }) => {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  switch (type) {
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      );
    case "flame":
      return (
        <svg {...common}>
          <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z" />
        </svg>
      );
    case "atom":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="1" />
          <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5z" />
          <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5z" />
        </svg>
      );
    case "layers":
      return (
        <svg {...common}>
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
    case "anchor":
      return (
        <svg {...common}>
          <circle cx="12" cy="5" r="3" />
          <line x1="12" y1="22" x2="12" y2="8" />
          <path d="M5 12H2a10 10 0 0020 0h-3" />
        </svg>
      );
    case "rocket":
      return (
        <svg {...common}>
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
          <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
      );
    case "gem":
      return (
        <svg {...common}>
          <path d="M6 3h12l4 6-10 12L2 9z" />
          <path d="M11 3L8 9l4 12 4-12-3-6" />
          <path d="M2 9h20" />
        </svg>
      );
    case "cube":
      return (
        <svg {...common}>
          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      );
    case "wrench":
      return (
        <svg {...common}>
          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
        </svg>
      );
  }
};

const Header = () => {
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [certificatesOpen, setCertificatesOpen] = useState(false);
  const [materialsOpen, setMaterialsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsOpen(false);
    setCertificatesOpen(false);
    setMaterialsOpen(false);
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
    setCertificatesOpen(false);
    setMaterialsOpen(false);
  };

  // ✅ FIXED: Handle material navigation
  const handleMaterialClick = (slug) => {
    closeMenu();
    navigate(`/materials/${slug}`);
  };

  // ✅ FIXED: Handle products navigation
  const handleProductClick = (slug) => {
    closeMenu();
    navigate(`/categories/${slug}`);
  };

  return (
    <>
      {/* TOP BAR */}
      <div className="hidden sm:block bg-[#0B3E8C] text-white/70 text-[0.72rem] border-b border-white/10">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8 py-2 flex items-center justify-between gap-4">
          <div className="font-medium tracking-wide text-white/85">
            Trusted Steel Solutions for Global Industries
          </div>
          <div className="flex items-center gap-5">
            <a
              href="tel:+919619435529"
              className="inline-flex items-center gap-1.5 text-white/70 hover:text-[#4A9EFF] transition-colors font-medium"
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
              +91 96194 35529
            </a>
            <a
              href="mailto:info@shreeganeshsteel.com"
              className="inline-flex items-center gap-1.5 text-white/70 hover:text-[#4A9EFF] transition-colors font-medium"
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
            <div className="flex items-center gap-1.5 pl-4 border-l border-white/10">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-6 h-6 rounded flex items-center justify-center text-[#25d366] hover:bg-[#25d366]/15 transition-all"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/shreeganeshsteel"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-6 h-6 rounded flex items-center justify-center text-[#e4405f] hover:bg-[#e4405f]/15 transition-all"
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
                className="w-6 h-6 rounded flex items-center justify-center text-[#1877f2] hover:bg-[#1877f2]/15 transition-all"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.91h-2.34V22c4.78-.76 8.43-4.92 8.43-9.94z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/shreeganeshsteel"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-6 h-6 rounded flex items-center justify-center text-[#0a66c2] hover:bg-[#0a66c2]/15 transition-all"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav
        className={`sticky top-0 z-[1000] bg-white/98 backdrop-blur-lg border-b transition-all duration-300 ${navScrolled ? "shadow-[0_4px_20px_rgba(11,62,140,0.08)] border-transparent" : "border-gray-200"}`}
      >
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-6 py-2 sm:py-2.5 lg:py-3 flex items-center gap-3 sm:gap-4 lg:gap-6">
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center flex-shrink-0"
          >
            <img
              src="/images/logo.png"
              alt="Shree Ganesh Steel Corporation"
              className="h-14 sm:h-16 lg:h-22 w-auto object-contain"
            />
          </Link>

          <ul className="hidden lg:flex flex-1 items-center justify-center gap-5 xl:gap-7 whitespace-nowrap">
            <li>
              <Link
                to="/"
                className="block text-[0.84rem] font-bold text-[#0B3E8C] hover:text-[#C8102E] transition-colors py-1.5"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block text-[0.84rem] font-bold text-[#0B3E8C] hover:text-[#C8102E] transition-colors py-1.5"
              >
                About Us
              </Link>
            </li>

            {/* PRODUCTS MEGA MENU */}
            <li className="group relative">
              <Link
                to="/products"
                className="inline-flex items-center gap-1.5 text-[0.84rem] font-bold text-[#0B3E8C] hover:text-[#C8102E] transition-colors py-2"
              >
                Products
                <span className="text-[0.65rem] text-[#68758A] group-hover:rotate-180 group-hover:text-[#C8102E] transition-all">
                  ▾
                </span>
              </Link>

              <div className="absolute top-full left-1/2 -translate-x-1/2 translate-y-3 w-[960px] bg-white border border-gray-200 rounded-xl shadow-[0_20px_60px_rgba(11,62,140,0.15)] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 transition-all duration-300 z-50 overflow-hidden">
                <div className="h-[3px] bg-gradient-to-r from-[#E63946] via-[#1E6FD9] to-[#C8102E]" />
                <div className="px-5 py-3 flex items-center justify-between border-b border-gray-100 bg-[#f7f8fa]">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E63946]" />
                    <span className="text-[0.68rem] font-bold tracking-[0.18em] uppercase text-[#0B3E8C]">
                      Product Catalogue
                    </span>
                    <span className="text-[0.62rem] text-[#68758A] font-medium">
                      • {manufacturerProducts.length + supplierProducts.length}{" "}
                      Categories
                    </span>
                  </div>
                  <Link
                    to="/products"
                    onClick={closeMenu}
                    className="text-[0.65rem] font-bold tracking-widest uppercase text-[#E63946] hover:text-[#C8102E] transition-colors inline-flex items-center gap-1"
                  >
                    View All
                    <svg
                      width="10"
                      height="10"
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
                  </Link>
                </div>

                <div className="grid grid-cols-2 divide-x divide-gray-100">
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#E63946]/20">
                      <span className="w-6 h-6 rounded-md bg-[#E63946]/10 flex items-center justify-center flex-shrink-0">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#C8102E"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="3" y="3" width="7" height="7" />
                          <rect x="14" y="3" width="7" height="7" />
                          <rect x="3" y="14" width="7" height="7" />
                          <rect x="14" y="14" width="7" height="7" />
                        </svg>
                      </span>
                      <div className="flex-1">
                        <div className="text-[0.68rem] font-bold tracking-[0.15em] uppercase text-[#C8102E] leading-tight">
                          Manufacturer
                        </div>
                        <div className="text-[0.6rem] text-[#68758A] font-medium leading-tight">
                          {manufacturerProducts.length} Categories
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-2 gap-y-0.5">
                      {manufacturerProducts.map((p) => (
                        <Link
                          key={p.id}
                          to={`/categories/${p.slug}`}
                          onClick={closeMenu}
                          className="group/item flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-[#E63946]/[0.06] transition-colors"
                        >
                          <span className="flex-shrink-0 w-6 h-6 rounded-md bg-[#f7f8fa] border border-gray-200 text-[#C8102E] flex items-center justify-center group-hover/item:bg-[#E63946] group-hover/item:border-[#E63946] group-hover/item:text-white transition-all">
                            <span className="w-3.5 h-3.5">{p.icon}</span>
                          </span>
                          <div className="text-[0.72rem] font-semibold text-[#0B3E8C] group-hover/item:text-[#C8102E] transition-colors leading-tight truncate">
                            {p.name}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#1E6FD9]/20">
                      <span className="w-6 h-6 rounded-md bg-[#1E6FD9]/10 flex items-center justify-center flex-shrink-0">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#1E6FD9"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="9" />
                          <path d="M3 12h18M12 3v18" />
                        </svg>
                      </span>
                      <div className="flex-1">
                        <div className="text-[0.68rem] font-bold tracking-[0.15em] uppercase text-[#1E6FD9] leading-tight">
                          Supplier
                        </div>
                        <div className="text-[0.6rem] text-[#68758A] font-medium leading-tight">
                          {supplierProducts.length} Categories
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-2 gap-y-0.5">
                      {supplierProducts.map((p) => (
                        <Link
                          key={p.id}
                          to={`/categories/${p.slug}`}
                          onClick={closeMenu}
                          className="group/item flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-[#1E6FD9]/[0.06] transition-colors"
                        >
                          <span className="flex-shrink-0 w-6 h-6 rounded-md bg-[#f7f8fa] border border-gray-200 text-[#1E6FD9] flex items-center justify-center group-hover/item:bg-[#1E6FD9] group-hover/item:border-[#1E6FD9] group-hover/item:text-white transition-all">
                            <span className="w-3.5 h-3.5">{p.icon}</span>
                          </span>
                          <div className="text-[0.72rem] font-semibold text-[#0B3E8C] group-hover/item:text-[#1E6FD9] transition-colors leading-tight truncate">
                            {p.name}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-5 py-2 bg-[#f7f8fa] border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-[0.62rem] font-bold tracking-widest uppercase text-[#68758A]">
                      Popular:
                    </span>
                    {["Stainless", "Duplex", "Alloy"].map((tag) => (
                      <Link
                        key={tag}
                        to={`/products?category=${encodeURIComponent(tag)}`}
                        onClick={closeMenu}
                        className="text-[0.65rem] font-semibold text-[#0B3E8C] hover:text-[#C8102E] transition-colors underline decoration-[#C8102E]/40 underline-offset-2"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                  <Link
                    to="/products"
                    onClick={closeMenu}
                    className="inline-flex items-center gap-1.5 bg-[#0B3E8C] hover:bg-[#C8102E] text-white text-[0.62rem] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded transition-colors"
                  >
                    All Products
                    <svg
                      width="9"
                      height="9"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </div>
            </li>

            {/* ✅ MATERIALS DROPDOWN — FIXED CLICKABLE */}
            <li className="group relative">
              <button
                type="button"
                className="inline-flex items-center gap-1.5 text-[0.84rem] font-bold text-[#0B3E8C] hover:text-[#C8102E] transition-colors py-2 cursor-pointer"
              >
                Materials
                <span className="text-[0.65rem] text-[#68758A] group-hover:rotate-180 group-hover:text-[#C8102E] transition-all">
                  ▴
                </span>
              </button>

              <div className="absolute top-full left-1/2 -translate-x-1/2 translate-y-3 w-[720px] bg-white border border-gray-200 rounded-xl shadow-[0_20px_60px_rgba(11,62,140,0.18)] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 transition-all duration-300 z-50 overflow-hidden">
                <div className="h-[3px] bg-gradient-to-r from-[#1E6FD9] via-[#0B3E8C] to-[#C8102E]" />

                <div className="px-5 py-3 flex items-center justify-between border-b border-gray-100 bg-[#f7f8fa]">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E63946]" />
                    <span className="text-[0.68rem] font-bold tracking-[0.18em] uppercase text-[#0B3E8C]">
                      Metallurgical Grades
                    </span>
                    <span className="text-[0.62rem] text-[#68758A] font-medium">
                      • {materials.length} Primary Material Groups
                    </span>
                  </div>
                  <span className="text-[0.62rem] text-[#68758A] font-medium">
                    EN 10204 3.1 & 3.2 Certified
                  </span>
                </div>

                {/* ✅ Materials grid — FIXED with proper Link and onClick */}
                <div className="grid grid-cols-3 gap-2 p-4">
                  {materials.map((m) => (
                    <Link
                      key={m.slug}
                      to={`/materials/${m.slug}`}
                      onClick={closeMenu}
                      className="group/item flex items-start gap-3 p-3 rounded-lg hover:bg-[#f7f8fa] border border-transparent hover:border-[#1E6FD9]/20 transition-all cursor-pointer"
                    >
                      <span
                        className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-white shadow-sm group-hover/item:scale-110 transition-transform duration-300 pointer-events-none"
                        style={{ backgroundColor: m.accent }}
                      >
                        <MaterialIcon type={m.icon} className="w-5 h-5" />
                      </span>
                      <div className="min-w-0 flex-1 pointer-events-none">
                        <div className="text-sm font-bold text-[#0B3E8C] group-hover/item:text-[#C8102E] transition-colors leading-tight">
                          {m.name}
                        </div>
                        <div className="text-[0.68rem] text-[#68758A] mt-1 leading-snug line-clamp-2">
                          {m.desc}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="px-5 py-3 bg-[#f7f8fa] border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[0.68rem] text-[#68758A] font-medium">
                      EN 10204 3.1 & 3.2 Certified Mill Test Certificates
                    </span>
                  </div>
                  <Link
                    to="/materials"
                    onClick={closeMenu}
                    className="text-[0.68rem] font-bold tracking-widest uppercase text-[#C8102E] hover:text-[#0B3E8C] transition-colors inline-flex items-center gap-1 cursor-pointer"
                  >
                    View Complete Materials Showcase
                    <svg
                      width="12"
                      height="12"
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
                  </Link>
                </div>
              </div>
            </li>

            <li>
              <Link
                to="/industries"
                className="block text-[0.84rem] font-bold text-[#0B3E8C] hover:text-[#C8102E] transition-colors py-1.5"
              >
                Industries
              </Link>
            </li>

            {/* CERTIFICATES DROPDOWN */}
            <li className="group relative">
              <button
                type="button"
                className="inline-flex items-center gap-1.5 text-[0.84rem] font-bold text-[#0B3E8C] hover:text-[#C8102E] transition-colors py-2 cursor-pointer"
              >
                Certificates
                <span className="text-[0.65rem] text-[#68758A] group-hover:rotate-180 group-hover:text-[#C8102E] transition-all">
                  ▴
                </span>
              </button>

              <div className="absolute top-full left-1/2 -translate-x-1/2 translate-y-3 w-[420px] bg-white rounded-xl shadow-[0_20px_60px_rgba(11,62,140,0.18)] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 transition-all duration-300 z-50 overflow-hidden border border-gray-200">
                <div className="h-[3px] bg-gradient-to-r from-[#1E6FD9] via-[#0B3E8C] to-[#C8102E]" />
                <ul className="p-2">
                  {certificates.map((cert) => (
                    <li key={cert.id}>
                      <a
                        href={cert.file}
                        target="_blank"
                        rel="noreferrer"
                        className="group/cert flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-[#f7f8fa] transition-colors cursor-pointer"
                      >
                        <span className="flex-shrink-0 w-8 h-8 rounded-md bg-[#0B3E8C]/10 text-[#0B3E8C] flex items-center justify-center group-hover/cert:bg-[#0B3E8C] group-hover/cert:text-white transition-all">
                          <CertificateIcon type={cert.icon} />
                        </span>
                        <span className="flex-1 text-[0.82rem] font-semibold text-[#0B3E8C] group-hover/cert:text-[#C8102E] transition-colors leading-tight">
                          {cert.name}
                        </span>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="flex-shrink-0 text-[#68758A] opacity-60 group-hover/cert:text-[#C8102E] group-hover/cert:opacity-100 group-hover/cert:translate-x-0.5 transition-all"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            <li>
              <Link
                to="/contact"
                className="block text-[0.84rem] font-bold text-[#0B3E8C] hover:text-[#C8102E] transition-colors py-1.5"
              >
                Contact
              </Link>
            </li>
          </ul>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="hidden lg:inline-flex items-center justify-center bg-gradient-to-br from-[#0B3E8C] to-[#1E6FD9] hover:from-[#C8102E] hover:to-[#E63946] text-white font-bold text-[0.76rem] tracking-wide px-5 py-2.5 rounded-md transition-all duration-300 flex-shrink-0 whitespace-nowrap"
          >
            Request a Quote
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden ml-auto flex flex-col gap-1.5 p-2 relative z-[1100]"
          >
            <span
              className={`w-6 h-[2.5px] bg-[#0B3E8C] rounded-full transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`w-6 h-[2.5px] bg-[#0B3E8C] rounded-full transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`w-6 h-[2.5px] bg-[#0B3E8C] rounded-full transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 bg-[#0B3E8C]/60 backdrop-blur-sm z-[1050] lg:hidden transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* MOBILE DRAWER */}
      <aside
        className={`fixed top-0 right-0 h-full w-[85%] max-w-[380px] bg-white z-[1100] lg:hidden shadow-[0_0_60px_rgba(11,62,140,0.3)] transition-transform duration-300 ease-out overflow-y-auto ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200 sticky top-0 bg-white z-10">
          <img
            src="/images/logo.png"
            alt="Shree Ganesh Steel Corporation"
            className="h-10 w-auto object-contain"
          />
          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
            className="w-8 h-8 rounded-md bg-[#f7f8fa] hover:bg-[#0B3E8C] hover:text-white text-[#0B3E8C] flex items-center justify-center transition-all"
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
                className={`block px-4 py-3 rounded-lg font-semibold text-[0.9rem] transition-all ${location.pathname === item.to ? "bg-[#1E6FD9]/10 text-[#1E6FD9]" : "text-[#0B3E8C] hover:bg-[#f7f8fa] hover:text-[#C8102E]"}`}
              >
                {item.label}
              </Link>
            </li>
          ))}

          {/* PRODUCTS — MOBILE */}
          <li>
            <button
              type="button"
              onClick={() => setProductsOpen(!productsOpen)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-lg font-semibold text-[0.9rem] transition-all ${productsOpen ? "bg-[#1E6FD9]/10 text-[#1E6FD9]" : "text-[#0B3E8C] hover:bg-[#f7f8fa] hover:text-[#C8102E]"}`}
            >
              Products
              <span
                className={`text-xs transition-transform duration-300 ${productsOpen ? "rotate-180" : ""}`}
              >
                ▾
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${productsOpen ? "max-h-[3000px] opacity-100 mt-2" : "max-h-0 opacity-0"}`}
            >
              <div className="mb-3">
                <div className="px-4 py-2 text-[0.65rem] font-bold tracking-[0.15em] uppercase text-[#C8102E] border-b border-[#E63946]/20">
                  Manufacturer Division
                </div>
                <ul className="flex flex-col gap-0.5 mt-1">
                  {manufacturerProducts.map((p) => (
                    <li key={p.id}>
                      <Link
                        to={`/categories/${p.slug}`}
                        onClick={closeMenu}
                        className="flex items-start gap-3 px-3 py-2 rounded-md hover:bg-[#E63946]/[0.04] transition-all"
                      >
                        <span className="flex-shrink-0 w-7 h-7 rounded-md bg-[#E63946]/10 text-[#C8102E] flex items-center justify-center">
                          <span className="w-4 h-4">{p.icon}</span>
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="text-[0.78rem] font-bold text-[#0B3E8C] leading-tight">
                            {p.name}
                          </div>
                          <div className="text-[0.65rem] text-[#68758A] leading-snug mt-0.5 line-clamp-1">
                            {p.desc}
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="px-4 py-2 text-[0.65rem] font-bold tracking-[0.15em] uppercase text-[#1E6FD9] border-b border-[#1E6FD9]/20">
                  Supplier Division
                </div>
                <ul className="flex flex-col gap-0.5 mt-1">
                  {supplierProducts.map((p) => (
                    <li key={p.id}>
                      <Link
                        to={`/categories/${p.slug}`}
                        onClick={closeMenu}
                        className="flex items-start gap-3 px-3 py-2 rounded-md hover:bg-[#1E6FD9]/[0.04] transition-all"
                      >
                        <span className="flex-shrink-0 w-7 h-7 rounded-md bg-[#1E6FD9]/10 text-[#1E6FD9] flex items-center justify-center">
                          <span className="w-4 h-4">{p.icon}</span>
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="text-[0.78rem] font-bold text-[#0B3E8C] leading-tight">
                            {p.name}
                          </div>
                          <div className="text-[0.65rem] text-[#68758A] leading-snug mt-0.5 line-clamp-1">
                            {p.desc}
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>

          {/* ✅ MATERIALS — MOBILE FIXED */}
          <li>
            <button
              type="button"
              onClick={() => setMaterialsOpen(!materialsOpen)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-lg font-semibold text-[0.9rem] transition-all ${materialsOpen ? "bg-[#1E6FD9]/10 text-[#1E6FD9]" : "text-[#0B3E8C] hover:bg-[#f7f8fa] hover:text-[#C8102E]"}`}
            >
              Materials
              <span
                className={`text-xs transition-transform duration-300 ${materialsOpen ? "rotate-180" : ""}`}
              >
                ▾
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${materialsOpen ? "max-h-[2000px] opacity-100 mt-2" : "max-h-0 opacity-0"}`}
            >
              <ul className="flex flex-col gap-1 pl-3 border-l-2 border-[#C8102E]/30 ml-3">
                {materials.map((m) => (
                  <li key={m.slug}>
                    <Link
                      to={`/materials/${m.slug}`}
                      onClick={closeMenu}
                      className="flex items-start gap-3 px-3 py-2.5 rounded-md hover:bg-[#f7f8fa] transition-all group/mobmat cursor-pointer"
                    >
                      <span
                        className="flex-shrink-0 w-8 h-8 rounded-md flex items-center justify-center text-white group-hover/mobmat:scale-110 transition-transform duration-300 pointer-events-none"
                        style={{ backgroundColor: m.accent }}
                      >
                        <MaterialIcon type={m.icon} className="w-4 h-4" />
                      </span>
                      <div className="min-w-0 flex-1 pointer-events-none">
                        <div className="text-[0.82rem] font-semibold text-[#0B3E8C] leading-tight">
                          {m.name}
                        </div>
                        <div className="text-[0.65rem] text-[#68758A] leading-snug mt-0.5 line-clamp-1">
                          {m.desc}
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          <li>
            <Link
              to="/industries"
              onClick={closeMenu}
              className={`block px-4 py-3 rounded-lg font-semibold text-[0.9rem] transition-all ${location.pathname === "/industries" ? "bg-[#1E6FD9]/10 text-[#1E6FD9]" : "text-[#0B3E8C] hover:bg-[#f7f8fa] hover:text-[#C8102E]"}`}
            >
              Industries
            </Link>
          </li>

          {/* CERTIFICATES — MOBILE */}
          <li>
            <button
              type="button"
              onClick={() => setCertificatesOpen(!certificatesOpen)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-lg font-semibold text-[0.9rem] transition-all ${certificatesOpen ? "bg-[#1E6FD9]/10 text-[#1E6FD9]" : "text-[#0B3E8C] hover:bg-[#f7f8fa] hover:text-[#C8102E]"}`}
            >
              Certificates
              <span
                className={`text-xs transition-transform duration-300 ${certificatesOpen ? "rotate-180" : ""}`}
              >
                ▾
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${certificatesOpen ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0"}`}
            >
              <ul className="flex flex-col gap-1 pl-3 border-l-2 border-[#C8102E]/30 ml-3">
                {certificates.map((cert) => (
                  <li key={cert.id}>
                    <a
                      href={cert.file}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                      className="flex items-start gap-3 px-3 py-2.5 rounded-md hover:bg-[#f7f8fa] transition-all group/cert cursor-pointer"
                    >
                      <span className="flex-shrink-0 w-7 h-7 rounded-md bg-[#0B3E8C]/10 text-[#0B3E8C] flex items-center justify-center">
                        <CertificateIcon type={cert.icon} />
                      </span>
                      <span className="text-[0.82rem] font-semibold text-[#0B3E8C] group-hover/cert:text-[#C8102E] transition-colors leading-tight">
                        {cert.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          <li>
            <Link
              to="/contact"
              onClick={closeMenu}
              className={`block px-4 py-3 rounded-lg font-semibold text-[0.9rem] transition-all ${location.pathname === "/contact" ? "bg-[#1E6FD9]/10 text-[#1E6FD9]" : "text-[#0B3E8C] hover:bg-[#f7f8fa] hover:text-[#C8102E]"}`}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* CONTACT INFO */}
        <div className="p-4 pt-2 border-t border-gray-200">
          <div className="text-[0.62rem] font-bold tracking-[0.18em] uppercase text-[#68758A] mb-3">
            Contact Numbers
          </div>
          <div className="space-y-2">
            {[
              { number: "+91 96194 35529", href: "tel:+919619435529" },
              { number: "+91 70215 19829", href: "tel:+917021519829" },
              { number: "022 6743 7304", href: "tel:+912267437304" },
              { number: "022 6610 9359", href: "tel:+912266109359" },
            ].map((item) => (
              <a
                key={item.number}
                href={item.href}
                className="flex items-center gap-2 text-[0.78rem] text-[#0B3E8C] hover:text-[#C8102E] transition-colors font-semibold"
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
                {item.number}
              </a>
            ))}
          </div>
        </div>

        <div className="p-4 pt-2 border-t border-gray-200 sticky bottom-0 bg-white">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
            className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-br from-[#C8102E] to-[#E63946] hover:from-[#0B3E8C] hover:to-[#1E6FD9] text-white font-bold text-sm px-6 py-3.5 rounded-lg transition-all duration-300 shadow-md"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Request a Quote
          </a>
        </div>
      </aside>
    </>
  );
};

export default Header;
