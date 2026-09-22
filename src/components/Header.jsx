import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

/* ============================================
   WHATSAPP CONFIG
   ============================================ */
const WHATSAPP_NUMBER = "917021519829";
const WHATSAPP_MESSAGE = encodeURIComponent(
  " Hello Shree Ganesh Steel, I am interested in your steel products. Please share your best quotation and product details.",
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

/* ============================================
   BRAND TOKENS
   ============================================ */
const BRAND = {
  navy: "#0B4DA2",
  navyDeep: "#083A7A",
  gold: "#D62828",
  goldSoft: "#E63946",
  ink: "#1A1A1A",
  muted: "#5A6472",
  lineLight: "rgba(11,77,162,0.10)",
  lineSoft: "rgba(11,77,162,0.06)",
  crimson: "#D62828",
};

const TOP_CONTACTS = [
  {
    type: "phone",
    label: "+91 96194 35529",
    href: "tel:+919619435529",
  },
  {
    type: "phone",
    label: "+91 70215 19829",
    href: "tel:+917021519829",
  },
  {
    type: "email",
    label: "info@shreeganeshsteel.com",
    href: "mailto:info@shreeganeshsteel.com",
  },
  {
    type: "email",
    label: "shreeganeshsteel13@rediffmail.com",
    href: "mailto:shreeganeshsteel13@rediffmail.com",
  },
];

const SOCIALS = [
  {
    name: "Facebook",
    href: "https://facebook.com/shreeganeshsteel",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.91h-2.34V22c4.78-.76 8.43-4.92 8.43-9.94z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/shreeganeshsteel",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com/shreeganeshsteel",
    icon: (
      <svg
        width="15"
        height="15"
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
    ),
  },
];

/* ============================================
   MATERIALS DATA
   ============================================ */
const materials = [
  {
    slug: "stainless-steel",
    name: "Stainless Steel",
    icon: "shield",
    desc: "304, 316L, 321, 310S, 347, 904L",
    accent: "#C8102E",
  },
  {
    slug: "nickel",
    name: "Nickel",
    icon: "flame",
    desc: "Nickel 200/201, Inconel 600/625, 800",
    accent: "#1E6FD9",
  },
  {
    slug: "high-alloys",
    name: "High Alloys",
    icon: "atom",
    desc: "Hastelloy C22, Alloy 20, SMO 254",
    accent: "#C8102E",
  },
  {
    slug: "duplex",
    name: "Duplex",
    icon: "layers",
    desc: "UNS S31803 (2205), UNS S32205",
    accent: "#1E6FD9",
  },
  {
    slug: "super-duplex",
    name: "Super Duplex",
    icon: "anchor",
    desc: "UNS S32750 (2507), UNS S32760",
    accent: "#C8102E",
  },
  {
    slug: "titanium",
    name: "Titanium",
    icon: "rocket",
    desc: "Grade 1, Grade 2, Grade 5 (Ti-6Al-4V)",
    accent: "#1E6FD9",
  },
  {
    slug: "alloys",
    name: "Alloys",
    icon: "gem",
    desc: "Zirconium 702, Tantalum, Cu-Ni 70/30",
    accent: "#C8102E",
  },
  {
    slug: "carbon",
    name: "Carbon",
    icon: "cube",
    desc: "ASTM A106 Gr B, A105, A333 Gr 6",
    accent: "#1E6FD9",
  },
  {
    slug: "alloy-steel",
    name: "Alloy Steel",
    icon: "wrench",
    desc: "ASTM A335 P5, P9, P11, P22, P91, F11",
    accent: "#C8102E",
  },
];

/* ============================================
   CERTIFICATES DATA
   ============================================ */
const certificates = [
  {
    id: 1,
    name: "ISO 9001:2015 Quality Management System",
    file: "/certificates/iso-9001-2015.pdf",
    icon: "award",
  },
  {
    id: 2,
    name: "Udyam Registration Certificate (MSME)",
    file: "/certificates/udyam-msme.pdf",
    icon: "shield",
  },
  {
    id: 3,
    name: "MASSMA Certificate of Membership",
    file: "/certificates/massma-membership.pdf",
    icon: "file",
  },
];

/* ============================================
   MANUFACTURER PRODUCTS
   ============================================ */
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

/* ============================================
   SUPPLIER PRODUCTS
   ============================================ */
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

/* ============================================
   DIMENSIONS DATA
   ============================================ */
const dimensions = [
  {
    slug: "flange-dimensions",
    name: "Flange Dimensions",
    desc: "ANSI B16.5, B16.47, DIN, BS tables",
  },
  {
    slug: "pipe-dimensions",
    name: "Pipe Dimensions",
    desc: "ASME B36.10, B36.19 schedules",
  },
  {
    slug: "fitting-dimensions",
    name: "Fitting Dimensions",
    desc: "ASME B16.9, B16.28, B16.11",
  },
  {
    slug: "fastener-dimensions",
    name: "Fastener Dimensions",
    desc: "ASME B18.2.1, B18.2.2, stud bolts",
  },
  {
    slug: "weight-charts",
    name: "Weight Charts",
    desc: "Theoretical & actual weight tables",
  },
  {
    slug: "pressure-ratings",
    name: "Pressure Ratings",
    desc: "Class 150 to 2500, PN ratings",
  },
];

/* ============================================
   ICONS
   ============================================ */
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
  if (type === "award")
    return (
      <svg {...common}>
        <circle cx="12" cy="8" r="6" />
        <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.11" />
      </svg>
    );
  if (type === "shield")
    return (
      <svg {...common}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    );
  return (
    <svg {...common}>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
};

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

/* ============================================
   HEADER
   ============================================ */
const Header = () => {
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [certificatesOpen, setCertificatesOpen] = useState(false);
  const [materialsOpen, setMaterialsOpen] = useState(false);
  const [dimensionsOpen, setDimensionsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsOpen(false);
    setCertificatesOpen(false);
    setMaterialsOpen(false);
    setDimensionsOpen(false);
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
    setDimensionsOpen(false);
  };

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <style>{`
        /* ============================================================
           GLOBAL RESET
           ============================================================ */
        html, body { margin: 0; padding: 0; }
        body { overflow-x: hidden; }
        #root { overflow-x: clip; }

        /* ============================================================
           TOP BAR — Navy
           ============================================================ */
        .sgs-topbar {
          background: ${BRAND.navy};
          color: rgba(255,255,255,0.92);
          font-size: 12.5px;
          letter-spacing: 0.01em;
          position: relative;
          z-index: 40;
        }
        .sgs-topbar-inner {
          max-width: 1360px;
          margin: 0 auto;
          padding: 9px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }
        @media (min-width: 640px) {
          .sgs-topbar-inner { padding: 9px 32px; }
        }
        .sgs-topbar-left {
          display: flex;
          align-items: center;
          gap: 22px;
          flex-wrap: wrap;
        }
        .sgs-topbar-item {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: rgba(255,255,255,0.92);
          text-decoration: none;
          font-weight: 500;
          font-size: 12.5px;
          transition: color 0.2s ease;
        }
        .sgs-topbar-item:hover { color: ${BRAND.gold}; }
        .sgs-topbar-item svg { flex-shrink: 0; opacity: 0.95; }
        .sgs-topbar-right {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .sgs-topbar-social {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 26px; height: 26px;
          color: rgba(255,255,255,0.92);
          text-decoration: none;
          transition: color 0.2s ease, transform 0.2s ease;
        }
        .sgs-topbar-social:hover {
          color: ${BRAND.gold};
          transform: translateY(-1px);
        }
        @media (max-width: 767px) {
          .sgs-topbar { display: none; }
        }

        /* ============================================================
           MAIN NAVBAR
           ============================================================ */
        .sgs-nav {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: #ffffff;
          border-bottom: 1px solid ${BRAND.lineLight};
          transition: box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .sgs-nav.is-scrolled {
          border-bottom-color: ${BRAND.lineSoft};
          box-shadow: 0 8px 28px -18px rgba(11,37,69,0.22);
        }
        .sgs-nav-inner {
          max-width: 1360px;
          margin: 0 auto;
          padding: 0 24px;
          height: 84px;
          display: flex;
          align-items: center;
          gap: 20px;
        }
        @media (min-width: 640px) {
          .sgs-nav-inner { padding: 0 32px; gap: 24px; }
        }
        @media (max-width: 1023px) {
          .sgs-nav-inner { height: 70px; padding: 0 18px; }
        }

        /* --- LOGO BLOCK --- */
        .sgs-nav-logo-wrap {
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          min-width: 0;
        }
        .sgs-logo {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-shrink: 0;
          text-decoration: none;
        }
        .sgs-logo img {
          height: 100px;
          width: auto;
          object-fit: contain;
          display: block;
        }
        .sgs-logo-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
          line-height: 1.15;
        }
        .sgs-logo-title {
          font-family: 'Manrope', 'Sora', system-ui, sans-serif;
          font-size: 15px;
          font-weight: 800;
          letter-spacing: -0.01em;
          color: ${BRAND.navy};
          white-space: nowrap;
        }
        .sgs-logo-sub {
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: ${BRAND.navy};
          opacity: 0.72;
        }
        @media (max-width: 1279px) {
          .sgs-logo-text { display: none; }
        }
        @media (max-width: 1023px) {
          .sgs-logo img { height: 48px; }
        }
        @media (max-width: 480px) {
          .sgs-logo img { height: 42px; }
        }

        /* --- NAV LINKS BLOCK --- */
        .sgs-nav-links-wrap {
          flex: 1 1 auto;
          display: none;
          align-items: center;
          justify-content: center;
          min-width: 0;
        }
        @media (min-width: 1024px) {
          .sgs-nav-links-wrap { display: flex; }
        }
        .sgs-nav-links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .sgs-nav-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 12px 16px;
          font-size: 18px;
          font-weight: 500;
          letter-spacing: 0.005em;
          color: ${BRAND.navy};
          text-decoration: none;
          border-radius: 3px;
          transition: color 0.22s ease, background 0.22s ease;
          white-space: nowrap;
          background: transparent;
          border: none;
          cursor: pointer;
          font-family: inherit;
        }
        .sgs-nav-link:hover {
          color: ${BRAND.gold};
        }
        .sgs-nav-link.is-active { color: ${BRAND.gold}; }
        .sgs-nav-link.is-active::after {
          content: "";
          position: absolute;
          left: 16px;
          right: 16px;
          bottom: 4px;
          height: 2px;
          background: ${BRAND.gold};
          border-radius: 2px;
        }
        .sgs-nav-link .caret {
          font-size: 9px;
          color: ${BRAND.muted};
          transition: transform 0.3s ease, color 0.25s ease;
          line-height: 1;
        }
        .sgs-nav-group:hover .caret {
          transform: rotate(180deg);
          color: ${BRAND.gold};
        }

        /* --- CTA BUTTON (right side) --- */
        .sgs-nav-cta-wrap {
          flex: 0 0 auto;
          display: none;
          align-items: center;
          justify-content: flex-end;
          min-width: 0;
        }
        @media (min-width: 1024px) {
          .sgs-nav-cta-wrap { display: flex; }
        }
        .sgs-nav-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 13px 22px;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.10em;
          text-transform: uppercase;
          color: #fff;
          background: ${BRAND.crimson};
          border: 1px solid ${BRAND.crimson};
          border-radius: 50px;
          text-decoration: none;
          white-space: nowrap;
          transition: all 0.3s cubic-bezier(0.22,1,0.36,1);
        }
        .sgs-nav-cta:hover {
          background: ${BRAND.navy};
          border-color: ${BRAND.navy};
          transform: translateY(-1px);
          box-shadow: 0 12px 28px -14px rgba(11,37,69,0.5);
        }

        /* ============================================================
           MEGA MENU
           ============================================================ */
        .sgs-mega {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translate(-50%, 8px);
          background: #ffffff;
          border: 1px solid ${BRAND.lineLight};
          border-radius: 4px;
          box-shadow: 0 1px 0 rgba(15,20,25,0.02), 0 30px 80px -30px rgba(11,37,69,0.35);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.28s cubic-bezier(0.22,1,0.36,1),
                      transform 0.28s cubic-bezier(0.22,1,0.36,1);
          z-index: 50;
          overflow: hidden;
        }
        .sgs-nav-group:hover .sgs-mega {
          opacity: 1;
          pointer-events: auto;
          transform: translate(-50%, 0);
        }

        /* Invisible hover bridge — cursor link se dropdown pe jaate waqt flicker na ho */
        .sgs-nav-group:hover .sgs-mega::before {
          content: "";
          position: absolute;
          top: -12px;
          left: 0;
          right: 0;
          height: 12px;
          background: transparent;
        }

        .sgs-mega-topline {
          height: 2px;
          background: linear-gradient(90deg, ${BRAND.navy} 0%, ${BRAND.gold} 100%);
        }
        .sgs-mega-header {
          padding: 14px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          background: #F6F7F8;
          border-bottom: 1px solid ${BRAND.lineSoft};
        }
        .sgs-mega-header .dot {
          width: 6px; height: 6px; border-radius: 999px;
          background: ${BRAND.gold};
        }
        .sgs-mega-header .label {
          font-size: 10.5px;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: ${BRAND.navy};
        }
        .sgs-mega-header .count {
          font-size: 10.5px;
          color: ${BRAND.muted};
          font-weight: 500;
          margin-left: 8px;
        }
        .sgs-mega-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 10px;
          border-radius: 3px;
          text-decoration: none;
          transition: background 0.22s ease;
          border: 1px solid transparent;
        }
        .sgs-mega-link:hover {
          background: rgba(11,37,69,0.04);
          border-color: rgba(11,37,69,0.10);
        }
        .sgs-mega-link .mi {
          flex-shrink: 0;
          width: 26px; height: 26px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 3px;
          background: #F6F7F8;
          border: 1px solid ${BRAND.lineSoft};
          color: ${BRAND.navy};
          transition: all 0.25s ease;
        }
        .sgs-mega-link:hover .mi {
          background: ${BRAND.navy};
          color: #fff;
          border-color: ${BRAND.navy};
        }
        .sgs-mega-link .mt {
          font-size: 12.5px;
          font-weight: 600;
          color: #2A2F33;
          line-height: 1.25;
          transition: color 0.25s ease;
        }
        .sgs-mega-link:hover .mt { color: ${BRAND.navy}; }
        .sgs-mega-footer {
          padding: 12px 20px;
          background: #F6F7F8;
          border-top: 1px solid ${BRAND.lineSoft};
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          font-size: 11px;
          color: ${BRAND.muted};
        }

        /* ============================================================
           MOBILE HAMBURGER
           ============================================================ */
        .sgs-hamburger {
          margin-left: auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          width: 40px; height: 40px;
          border: 1px solid ${BRAND.lineLight};
          border-radius: 3px;
          background: transparent;
          cursor: pointer;
          padding: 0;
          transition: all 0.25s ease;
        }
        @media (min-width: 1024px) {
          .sgs-hamburger { display: none; }
        }
        .sgs-hamburger:hover { border-color: ${BRAND.navy}; }
        .sgs-hamburger span {
          display: block;
          width: 16px;
          height: 1.5px;
          background: ${BRAND.navy};
          border-radius: 2px;
          transition: all 0.3s cubic-bezier(0.22,1,0.36,1);
        }
        .sgs-hamburger.is-open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
        .sgs-hamburger.is-open span:nth-child(2) { opacity: 0; }
        .sgs-hamburger.is-open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

        /* ============================================================
           MOBILE DRAWER
           ============================================================ */
        .sgs-drawer-overlay {
          position: fixed;
          inset: 0;
          background: rgba(11,37,69,0.55);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          z-index: 1050;
          transition: opacity 0.3s ease;
        }
        @media (min-width: 1024px) {
          .sgs-drawer-overlay { display: none; }
        }
        .sgs-drawer {
          position: fixed;
          top: 0; right: 0;
          height: 100%;
          width: 88%;
          max-width: 400px;
          background: #ffffff;
          z-index: 1100;
          box-shadow: -30px 0 80px -20px rgba(11,37,69,0.35);
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1);
          overflow-y: auto;
          display: flex;
          flex-direction: column;
        }
        @media (min-width: 1024px) {
          .sgs-drawer { display: none; }
        }
        .sgs-drawer-head {
          position: sticky;
          top: 0;
          z-index: 10;
          background: #ffffff;
          padding: 14px 16px;
          border-bottom: 1px solid ${BRAND.lineSoft};
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }
        .sgs-drawer-head img { height: 42px; width: auto; object-fit: contain; }
        .sgs-drawer-close {
          width: 36px; height: 36px;
          border: 1px solid ${BRAND.lineLight};
          background: #F6F7F8;
          border-radius: 3px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: ${BRAND.navy};
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .sgs-drawer-close:hover {
          background: ${BRAND.navy};
          color: #fff;
          border-color: ${BRAND.navy};
        }
        .sgs-drawer-body {
          flex: 1;
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .sgs-drawer-link {
          display: block;
          padding: 14px 14px;
          font-size: 14.5px;
          font-weight: 600;
          color: #2A2F33;
          text-decoration: none;
          border-radius: 3px;
          border-left: 2px solid transparent;
          transition: all 0.22s ease;
        }
        .sgs-drawer-link:hover {
          background: #F6F7F8;
          color: ${BRAND.gold};
          border-left-color: ${BRAND.gold};
        }
        .sgs-drawer-link.is-active {
          background: rgba(244,180,0,0.08);
          color: ${BRAND.navy};
          border-left-color: ${BRAND.gold};
        }
        .sgs-drawer-toggle {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: space-between;
          padding: 14px 14px;
          font-size: 14.5px;
          font-weight: 600;
          color: #2A2F33;
          background: transparent;
          border: none;
          border-left: 2px solid transparent;
          border-radius: 3px;
          cursor: pointer;
          font-family: inherit;
          transition: all 0.22s ease;
        }
        .sgs-drawer-toggle:hover {
          background: #F6F7F8;
          color: ${BRAND.gold};
        }
        .sgs-drawer-toggle.is-open {
          color: ${BRAND.navy};
          border-left-color: ${BRAND.gold};
          background: rgba(244,180,0,0.08);
        }
        .sgs-drawer-sub {
          padding: 4px 0 8px 14px;
          margin-left: 14px;
          border-left: 1px solid ${BRAND.lineLight};
          display: flex;
          flex-direction: column;
          gap: 1px;
        }
        .sgs-drawer-sub a {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 9px 10px;
          font-size: 13px;
          font-weight: 500;
          color: #4A5158;
          text-decoration: none;
          border-radius: 3px;
          transition: all 0.2s ease;
        }
        .sgs-drawer-sub a:hover {
          background: #F6F7F8;
          color: ${BRAND.navy};
        }
        .sgs-drawer-sub-icon {
          flex-shrink: 0;
          width: 24px; height: 24px;
          border-radius: 3px;
          background: #F6F7F8;
          border: 1px solid ${BRAND.lineSoft};
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: ${BRAND.navy};
        }
        .sgs-drawer-sub a:hover .sgs-drawer-sub-icon {
          background: ${BRAND.navy};
          color: #fff;
          border-color: ${BRAND.navy};
        }
        .sgs-drawer-sub-name {
          font-weight: 600;
          color: ${BRAND.ink};
          line-height: 1.3;
          transition: color 0.2s ease;
        }
        .sgs-drawer-sub a:hover .sgs-drawer-sub-name { color: ${BRAND.navy}; }
        .sgs-drawer-sub-desc {
          font-size: 11.5px;
          color: ${BRAND.muted};
          line-height: 1.35;
          margin-top: 2px;
        }
        .sgs-drawer-section-label {
          padding: 6px 10px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: ${BRAND.muted};
        }
        .sgs-drawer-foot {
          position: sticky;
          bottom: 0;
          background: #ffffff;
          border-top: 1px solid ${BRAND.lineSoft};
          padding: 14px 16px;
        }
        .sgs-drawer-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 14px;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #fff;
          background: ${BRAND.crimson};
          border: 1px solid ${BRAND.crimson};
          border-radius: 3px;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .sgs-drawer-cta:hover {
          background: ${BRAND.navy};
          border-color: ${BRAND.navy};
        }
        .sgs-drawer-contact {
          margin-top: 12px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .sgs-drawer-contact a {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12.5px;
          font-weight: 600;
          color: #4A5158;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .sgs-drawer-contact a:hover { color: ${BRAND.gold}; }
      `}</style>

      {/* ============================================
          TOP BAR
          ============================================ */}
      <div className="sgs-topbar">
        <div className="sgs-topbar-inner">
          <div className="sgs-topbar-left">
            {TOP_CONTACTS.slice(0, 4).map((c, i) => (
              <a key={i} href={c.href} className="sgs-topbar-item">
                {c.type === "phone" ? (
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                ) : (
                  <svg
                    width="13"
                    height="13"
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
                )}
                {c.label}
              </a>
            ))}
          </div>
          <div className="sgs-topbar-right">
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.name}
                className="sgs-topbar-social"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ============================================
          MAIN NAVBAR
          ============================================ */}
      <nav className={`sgs-nav ${navScrolled ? "is-scrolled" : ""}`}>
        <div className="sgs-nav-inner">
          {/* --- LOGO BLOCK --- */}
          <div className="sgs-nav-logo-wrap">
            <Link
              to="/"
              onClick={closeMenu}
              className="sgs-logo"
              aria-label="Shree Ganesh Steel Corporation — Home"
            >
              <img
                src="/images/logo.png"
                alt="Shree Ganesh Steel Corporation"
              />
            </Link>
          </div>

          {/* --- NAV LINKS BLOCK --- */}
          <div className="sgs-nav-links-wrap">
            <ul className="sgs-nav-links">
              {/* Home */}
              <li>
                <Link
                  to="/"
                  className={`sgs-nav-link ${location.pathname === "/" ? "is-active" : ""}`}
                >
                  Home
                </Link>
              </li>

              {/* About Us */}
              <li>
                <Link
                  to="/about"
                  className={`sgs-nav-link ${isActive("/about") ? "is-active" : ""}`}
                >
                  About Us
                </Link>
              </li>

              {/* Products */}
              <li className="sgs-nav-group relative">
                <Link
                  to="/products"
                  className={`sgs-nav-link ${isActive("/products") || isActive("/categories") ? "is-active" : ""}`}
                >
                  Products
                  <span className="caret">
                    <IoIosArrowDown />
                  </span>
                </Link>
                <div className="sgs-mega" style={{ width: 960 }}>
                  <div className="sgs-mega-topline" />
                  <div className="sgs-mega-header">
                    <div className="flex items-center gap-2">
                      <span className="dot" />
                      <span className="label">Product Catalogue</span>
                      <span className="count">
                        •{" "}
                        {manufacturerProducts.length + supplierProducts.length}{" "}
                        Categories
                      </span>
                    </div>
                    <Link
                      to="/products"
                      onClick={closeMenu}
                      className="text-[10.5px] font-bold tracking-widest uppercase"
                      style={{ color: BRAND.navy }}
                    >
                      View All →
                    </Link>
                  </div>
                  <div
                    className="grid grid-cols-2 divide-x"
                    style={{ borderColor: BRAND.lineSoft }}
                  >
                    <div className="p-5">
                      <div
                        className="flex items-center gap-2.5 mb-4 pb-3"
                        style={{
                          borderBottom: `1px solid rgba(214,40,40,0.18)`,
                        }}
                      >
                        <span
                          className="text-[10.5px] font-bold tracking-[0.16em] uppercase"
                          style={{ color: BRAND.crimson }}
                        >
                          Manufacturer
                        </span>
                        <span
                          className="text-[10px]"
                          style={{ color: BRAND.muted }}
                        >
                          • {manufacturerProducts.length} Categories
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-x-1 gap-y-0.5">
                        {manufacturerProducts.map((p) => (
                          <Link
                            key={p.id}
                            to={`/categories/${p.slug}`}
                            onClick={closeMenu}
                            className="sgs-mega-link"
                          >
                            <span className="mi">
                              <span className="w-3.5 h-3.5">{p.icon}</span>
                            </span>
                            <div className="mt truncate">{p.name}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="p-5">
                      <div
                        className="flex items-center gap-2.5 mb-4 pb-3"
                        style={{
                          borderBottom: `1px solid rgba(11,77,162,0.18)`,
                        }}
                      >
                        <span
                          className="text-[10.5px] font-bold tracking-[0.16em] uppercase"
                          style={{ color: BRAND.navy }}
                        >
                          Supplier
                        </span>
                        <span
                          className="text-[10px]"
                          style={{ color: BRAND.muted }}
                        >
                          • {supplierProducts.length} Categories
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-x-1 gap-y-0.5">
                        {supplierProducts.map((p) => (
                          <Link
                            key={p.id}
                            to={`/categories/${p.slug}`}
                            onClick={closeMenu}
                            className="sgs-mega-link"
                          >
                            <span className="mi">
                              <span className="w-3.5 h-3.5">{p.icon}</span>
                            </span>
                            <div className="mt truncate">{p.name}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="sgs-mega-footer">
                    <div className="flex items-center gap-3">
                      <span
                        className="text-[10px] font-bold tracking-[0.18em] uppercase"
                        style={{ color: BRAND.muted }}
                      >
                        Popular:
                      </span>
                      {["Stainless", "Duplex", "Alloy"].map((tag) => (
                        <Link
                          key={tag}
                          to={`/products?category=${encodeURIComponent(tag)}`}
                          onClick={closeMenu}
                          className="text-[11px] font-semibold"
                          style={{ color: BRAND.navy }}
                        >
                          {tag}
                        </Link>
                      ))}
                    </div>
                    <Link
                      to="/products"
                      onClick={closeMenu}
                      className="inline-flex items-center gap-1.5 text-white text-[10.5px] font-bold tracking-widest uppercase px-3.5 py-2 rounded-[3px]"
                      style={{ background: BRAND.navy }}
                    >
                      All Products →
                    </Link>
                  </div>
                </div>
              </li>

              {/* Materials */}
              <li className="sgs-nav-group relative">
                <button
                  type="button"
                  className={`sgs-nav-link ${isActive("/materials") ? "is-active" : ""}`}
                >
                  Materials
                  <span className="caret">
                    {" "}
                    <IoIosArrowDown />
                  </span>
                </button>
                <div className="sgs-mega" style={{ width: 720 }}>
                  <div className="sgs-mega-topline" />
                  <div className="sgs-mega-header">
                    <div className="flex items-center gap-2">
                      <span className="dot" />
                      <span className="label">Metallurgical Grades</span>
                      <span className="count">
                        • {materials.length} Primary Groups
                      </span>
                    </div>
                    <span
                      className="text-[10.5px] font-medium"
                      style={{ color: BRAND.muted }}
                    >
                      EN 10204 3.1 & 3.2 Certified
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 p-4">
                    {materials.map((m) => (
                      <Link
                        key={m.slug}
                        to={`/materials/${m.slug}`}
                        onClick={closeMenu}
                        className="flex items-start gap-3 p-3 rounded-[3px]"
                        style={{ border: "1px solid transparent" }}
                      >
                        <span
                          className="flex-shrink-0 w-10 h-10 rounded-[3px] flex items-center justify-center text-white"
                          style={{ backgroundColor: m.accent }}
                        >
                          <MaterialIcon type={m.icon} className="w-5 h-5" />
                        </span>
                        <div className="min-w-0 flex-1">
                          <div
                            className="text-[13px] font-bold leading-tight"
                            style={{ color: BRAND.ink }}
                          >
                            {m.name}
                          </div>
                          <div
                            className="text-[10.5px] mt-1 leading-snug line-clamp-2"
                            style={{ color: BRAND.muted }}
                          >
                            {m.desc}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="sgs-mega-footer">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span className="text-[10.5px] font-medium">
                        EN 10204 3.1 & 3.2 Mill Test Certificates
                      </span>
                    </div>
                    <Link
                      to="/materials"
                      onClick={closeMenu}
                      className="text-[10.5px] font-bold tracking-widest uppercase"
                      style={{ color: BRAND.navy }}
                    >
                      View All Materials →
                    </Link>
                  </div>
                </div>
              </li>

              {/* Certificates */}
              <li className="sgs-nav-group relative">
                <button
                  type="button"
                  className={`sgs-nav-link ${isActive("/certificates") ? "is-active" : ""}`}
                >
                  Certificates
                  <span className="caret">
                    {" "}
                    <IoIosArrowDown />
                  </span>
                </button>
                <div className="sgs-mega" style={{ width: 440 }}>
                  <div className="sgs-mega-topline" />
                  <div className="sgs-mega-header">
                    <div className="flex items-center gap-2">
                      <span className="dot" />
                      <span className="label">Certifications</span>
                      <span className="count">
                        • {certificates.length} Documents
                      </span>
                    </div>
                  </div>
                  <ul className="p-2 m-0 list-none">
                    {certificates.map((cert) => (
                      <li key={cert.id}>
                        <a
                          href={cert.file}
                          target="_blank"
                          rel="noreferrer"
                          className="sgs-mega-link"
                          style={{ padding: "12px" }}
                        >
                          <span
                            className="mi"
                            style={{ width: 32, height: 32 }}
                          >
                            <CertificateIcon type={cert.icon} />
                          </span>
                          <span className="mt flex-1" style={{ fontSize: 13 }}>
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
                            className="flex-shrink-0"
                            style={{ color: BRAND.muted }}
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

              {/* Industries */}
              <li>
                <Link
                  to="/industries"
                  className={`sgs-nav-link ${isActive("/industries") ? "is-active" : ""}`}
                >
                  Industries
                </Link>
              </li>

              {/* Contact */}
              <li>
                <Link
                  to="/contact"
                  className={`sgs-nav-link ${isActive("/contact") ? "is-active" : ""}`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* --- CTA BUTTON (RIGHT) --- */}
          <div className="sgs-nav-cta-wrap">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="sgs-nav-cta"
            >
              Get Quote
            </a>
          </div>

          {/* --- MOBILE HAMBURGER --- */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`sgs-hamburger ${mobileMenuOpen ? "is-open" : ""}`}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* ============================================
          MOBILE OVERLAY
          ============================================ */}
      <div
        onClick={closeMenu}
        aria-hidden="true"
        className={`sgs-drawer-overlay ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* ============================================
          MOBILE DRAWER
          ============================================ */}
      <aside
        className="sgs-drawer"
        style={{
          transform: mobileMenuOpen ? "translateX(0)" : "translateX(100%)",
        }}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="sgs-drawer-head">
          <img src="/images/logo.png" alt="Shree Ganesh Steel Corporation" />
          <button
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
            className="sgs-drawer-close"
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

        <div className="sgs-drawer-body">
          <Link
            to="/"
            onClick={closeMenu}
            className={`sgs-drawer-link ${location.pathname === "/" ? "is-active" : ""}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={closeMenu}
            className={`sgs-drawer-link ${location.pathname === "/about" ? "is-active" : ""}`}
          >
            About Us
          </Link>

          {/* Products */}
          <button
            type="button"
            onClick={() => setProductsOpen(!productsOpen)}
            className={`sgs-drawer-toggle ${productsOpen ? "is-open" : ""}`}
          >
            Products
            <span
              className="text-xs transition-transform duration-300"
              style={{
                transform: productsOpen ? "rotate(180deg)" : "rotate(0)",
              }}
            >
              ▾
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${productsOpen ? "max-h-[3000px] opacity-100 mb-2" : "max-h-0 opacity-0"}`}
          >
            <div className="sgs-drawer-sub">
              <div
                className="sgs-drawer-section-label"
                style={{ color: BRAND.crimson }}
              >
                Manufacturer Division
              </div>
              {manufacturerProducts.map((p) => (
                <Link
                  key={p.id}
                  to={`/categories/${p.slug}`}
                  onClick={closeMenu}
                >
                  <span className="sgs-drawer-sub-icon">
                    <span className="w-3.5 h-3.5">{p.icon}</span>
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="sgs-drawer-sub-name block">{p.name}</span>
                    <span className="sgs-drawer-sub-desc line-clamp-1">
                      {p.desc}
                    </span>
                  </span>
                </Link>
              ))}
              <div
                className="sgs-drawer-section-label mt-2"
                style={{ color: BRAND.navy }}
              >
                Supplier Division
              </div>
              {supplierProducts.map((p) => (
                <Link
                  key={p.id}
                  to={`/categories/${p.slug}`}
                  onClick={closeMenu}
                >
                  <span className="sgs-drawer-sub-icon">
                    <span className="w-3.5 h-3.5">{p.icon}</span>
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="sgs-drawer-sub-name block">{p.name}</span>
                    <span className="sgs-drawer-sub-desc line-clamp-1">
                      {p.desc}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Materials */}
          <button
            type="button"
            onClick={() => setMaterialsOpen(!materialsOpen)}
            className={`sgs-drawer-toggle ${materialsOpen ? "is-open" : ""}`}
          >
            Materials
            <span
              className="text-xs transition-transform duration-300"
              style={{
                transform: materialsOpen ? "rotate(180deg)" : "rotate(0)",
              }}
            >
              ▾
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${materialsOpen ? "max-h-[2000px] opacity-100 mb-2" : "max-h-0 opacity-0"}`}
          >
            <div className="sgs-drawer-sub">
              {materials.map((m) => (
                <Link
                  key={m.slug}
                  to={`/materials/${m.slug}`}
                  onClick={closeMenu}
                >
                  <span
                    className="sgs-drawer-sub-icon"
                    style={{
                      backgroundColor: m.accent,
                      color: "#fff",
                      borderColor: m.accent,
                    }}
                  >
                    <MaterialIcon type={m.icon} className="w-3.5 h-3.5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="sgs-drawer-sub-name block">{m.name}</span>
                    <span className="sgs-drawer-sub-desc line-clamp-1">
                      {m.desc}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Certificates */}
          <button
            type="button"
            onClick={() => setCertificatesOpen(!certificatesOpen)}
            className={`sgs-drawer-toggle ${certificatesOpen ? "is-open" : ""}`}
          >
            Certificates
            <span
              className="text-xs transition-transform duration-300"
              style={{
                transform: certificatesOpen ? "rotate(180deg)" : "rotate(0)",
              }}
            >
              ▾
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${certificatesOpen ? "max-h-[600px] opacity-100 mb-2" : "max-h-0 opacity-0"}`}
          >
            <div className="sgs-drawer-sub">
              {certificates.map((cert) => (
                <a
                  key={cert.id}
                  href={cert.file}
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeMenu}
                >
                  <span className="sgs-drawer-sub-icon">
                    <CertificateIcon type={cert.icon} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="sgs-drawer-sub-name block">
                      {cert.name}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <Link
            to="/industries"
            onClick={closeMenu}
            className={`sgs-drawer-link ${location.pathname === "/industries" ? "is-active" : ""}`}
          >
            Industries
          </Link>
          <Link
            to="/contact"
            onClick={closeMenu}
            className={`sgs-drawer-link ${location.pathname === "/contact" ? "is-active" : ""}`}
          >
            Contact
          </Link>
        </div>

        <div className="sgs-drawer-foot">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
            className="sgs-drawer-cta"
          >
            Get Quote
          </a>
          <div className="sgs-drawer-contact">
            <a href="tel:+919619435529">
              +91 96194 35529{" "}
              <span style={{ color: BRAND.muted, fontSize: 10 }}>• MOBILE</span>
            </a>
            <a href="tel:+917021519829">
              +91 70215 19829{" "}
              <span style={{ color: BRAND.muted, fontSize: 10 }}>• MOBILE</span>
            </a>
            <a href="tel:+912267437304">
              022 6743 7304{" "}
              <span style={{ color: BRAND.muted, fontSize: 10 }}>• OFFICE</span>
            </a>
            <a href="tel:+912266109359">
              022 6610 9359{" "}
              <span style={{ color: BRAND.muted, fontSize: 10 }}>• OFFICE</span>
            </a>
          </div>
          <div className="sgs-drawer-contact" style={{ marginTop: 10 }}>
            <a href="mailto:info@shreeganeshsteel.com">
              info@shreeganeshsteel.com
            </a>
            <a href="mailto:shreeganeshsteel13@rediffmail.com">
              shreeganeshsteel13@rediffmail.com
            </a>
            <a href="mailto:shreeganeshsteel29@gmail.com">
              shreeganeshsteel29@gmail.com
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Header;
