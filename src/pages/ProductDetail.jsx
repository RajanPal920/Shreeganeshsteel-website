import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Same data from Home — ideally extract this to a shared file later
const allProducts = {
  // Categories
  "ss-flanges": {
    id: 1,
    slug: "ss-flanges",
    name: "Stainless Steel Flanges",
    desc: "ANSI, DIN, JIS & custom forged flanges in SS 304/316/321.",
    image: "/images/categories/ss-flanges.jpg",
    category: "Category",
  },
  "butt-weld-fittings": {
    id: 2,
    slug: "butt-weld-fittings",
    name: "Butt Weld Fittings",
    desc: "Elbows, tees, reducers, caps per ASME B16.9 standards.",
    image: "/images/categories/butt-weld-fittings.jpg",
    category: "Category",
  },
  "forged-fittings": {
    id: 3,
    slug: "forged-fittings",
    name: "Forged Fittings",
    desc: "High-pressure socket weld & threaded fittings.",
    image: "/images/categories/forged-fittings.jpg",
    category: "Category",
  },
  "ss-pipes-tubes": {
    id: 4,
    slug: "ss-pipes-tubes",
    name: "SS Pipes & Tubes",
    desc: "Seamless & welded pipes and precision tubing.",
    image: "/images/categories/ss-pipes-tubes.jpg",
    category: "Category",
  },
  "steel-bars": {
    id: 5,
    slug: "steel-bars",
    name: "Steel Bars",
    desc: "Round, hex, square bars in SS, duplex & alloys.",
    image: "/images/categories/steel-bars.jpg",
    category: "Category",
  },
  "nipples-unions": {
    id: 6,
    slug: "nipples-unions",
    name: "Nipples & Unions",
    desc: "Barrel nipples, hex nipples, unions in all sizes.",
    image: "/images/categories/nipples-unions.jpg",
    category: "Category",
  },
  "industrial-valves": {
    id: 7,
    slug: "industrial-valves",
    name: "Industrial Valves",
    desc: "Ball, gate, globe & check valves for critical service.",
    image: "/images/categories/industrial-valves.jpg",
    category: "Category",
  },
  "duplex-steel": {
    id: 8,
    slug: "duplex-steel",
    name: "Duplex Steel Products",
    desc: "Duplex 2205 & Super Duplex 2507 range.",
    image: "/images/categories/duplex-steel.jpg",
    category: "Category",
  },
  // Featured
  "ss-316l-pipe": {
    id: 101,
    slug: "ss-316l-pipe",
    name: "SS 316L Seamless Pipe",
    material: "ASTM A312 TP316L",
    spec: '1/2" – 24" NB',
    image: "/images/featured/ss-316l-pipe.jpg",
    category: "Featured",
  },
  "ss-304-flange": {
    id: 102,
    slug: "ss-304-flange",
    name: "SS 304 WN Flange",
    material: "ASTM A182 F304",
    spec: '1/2" – 40" · Class 150 – 2500#',
    image: "/images/featured/ss-304-flange.jpg",
    category: "Featured",
  },
  "duplex-2205-elbow": {
    id: 103,
    slug: "duplex-2205-elbow",
    name: "Duplex 2205 Elbow 90°",
    material: "ASTM A815 UNS S31803",
    spec: '1/2" – 24" · LR / SR',
    image: "/images/featured/duplex-elbow.jpg",
    category: "Featured",
  },
  "alloy-forged-fitting": {
    id: 104,
    slug: "alloy-forged-fitting",
    name: "Alloy Steel Forged Fitting",
    material: "ASTM A182 F22",
    spec: '1/2" – 4" · 3000# / 6000#',
    image: "/images/featured/alloy-forged-fitting.jpg",
    category: "Featured",
  },
  "barrel-nipple": {
    id: 105,
    slug: "barrel-nipple",
    name: "SS Barrel Nipple",
    material: "SS 304 / 316",
    spec: '1/8" – 4" · NPT / BSP',
    image: "/images/featured/barrel-nipple.jpg",
    category: "Featured",
  },
  "carbon-steel-pipe": {
    id: 106,
    slug: "carbon-steel-pipe",
    name: "Carbon Steel Pipe",
    material: "ASTM A106 Gr.B",
    spec: '1/2" – 36" · Seamless',
    image: "/images/featured/carbon-steel-pipe.jpg",
    category: "Featured",
  },
};

export default function ProductDetail() {
  const { slug } = useParams();
  const product = allProducts[slug];

  if (!product) {
    return (
      <div className="w-full">
        <Header />
        <div className="min-h-[60vh] flex items-center justify-center px-5">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#0a1628] mb-4">
              Product Not Found
            </h1>
            <p className="text-[#5a6b7d] mb-8">
              The product you're looking for doesn't exist.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-[#0a1628] hover:bg-[#c9a961] hover:text-[#0a1628] text-white font-bold text-sm px-7 py-3.5 rounded-lg transition-all"
            >
              ← Back to Products
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="w-full bg-white">
      <Header />

      {/* Breadcrumb */}
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 pt-8">
        <nav className="flex items-center gap-2 text-xs text-[#8896a6] font-mono tracking-wider uppercase">
          <Link to="/" className="hover:text-[#c9a961] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            to="/products"
            className="hover:text-[#c9a961] transition-colors"
          >
            Products
          </Link>
          <span>/</span>
          <span className="text-[#0a1628] font-bold">{product.name}</span>
        </nav>
      </div>

      {/* Product Content */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(10,22,40,0.15)] border border-gray-200">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-cover"
              />
              <span className="absolute top-4 left-4 bg-[#0a1628] text-[#c9a961] text-xs font-bold font-mono tracking-widest uppercase px-3 py-1.5 rounded">
                {product.category}
              </span>
            </div>

            {/* Details */}
            <div>
              <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase text-[#c9a961] mb-4">
                <span className="w-6 h-px bg-[#c9a961]" />
                {product.category}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1628] tracking-tight leading-tight mb-6">
                {product.name}
              </h1>

              <p className="text-[#5a6b7d] leading-relaxed mb-8 text-base sm:text-lg">
                {product.desc ||
                  `${product.name} — engineered for critical industrial applications.`}
              </p>

              {product.material && (
                <div className="space-y-3 mb-8 p-5 bg-[#f7f8fa] rounded-xl border border-gray-200">
                  <div className="flex justify-between gap-4 text-sm">
                    <span className="text-[#8896a6] font-medium">Material</span>
                    <span className="font-bold text-[#0a1628] text-right">
                      {product.material}
                    </span>
                  </div>
                  {product.spec && (
                    <div className="flex justify-between gap-4 text-sm">
                      <span className="text-[#8896a6] font-medium">
                        Specification
                      </span>
                      <span className="font-bold text-[#0a1628] text-right">
                        {product.spec}
                      </span>
                    </div>
                  )}
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#0a1628] hover:bg-[#c9a961] hover:text-[#0a1628] text-white font-bold text-sm px-7 py-3.5 rounded-lg transition-all duration-300"
                >
                  Send Inquiry
                </a>
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#0a1628]/15 hover:border-[#c9a961] hover:text-[#c9a961] text-[#0a1628] font-semibold text-sm px-7 py-3.5 rounded-lg transition-all duration-300"
                >
                  ← Back to Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
