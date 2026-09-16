import React from "react";
import { useParams, Link } from "react-router-dom";

import { products } from "../data/products";

export default function ProductDetail() {
  const { slug } = useParams();

  // Find product by slug (fallback to id)
  const product = products.find(
    (p) => p.slug === slug || String(p.id) === String(slug),
  );

  // If not found
  if (!product) {
    return (
      <div className="w-full">
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
      </div>
    );
  }

  // Related products — same category, exclude current
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="w-full bg-white">
      {/* Breadcrumb */}
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 pt-8">
        <nav className="flex items-center gap-2 text-xs text-[#8896a6] font-mono tracking-wider uppercase flex-wrap">
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
          {product.category && (
            <>
              <span>/</span>
              <Link
                to={`/products?category=${encodeURIComponent(product.category)}`}
                className="hover:text-[#c9a961] transition-colors"
              >
                {product.category}
              </Link>
            </>
          )}
          <span>/</span>
          <span className="text-[#0a1628] font-bold truncate max-w-[200px]">
            {product.name}
          </span>
        </nav>
      </div>

      {/* Product Content */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(10,22,40,0.15)] border border-gray-200 bg-[#f7f8fa]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
              {product.category && (
                <span className="absolute top-4 left-4 bg-[#0a1628] text-[#c9a961] text-xs font-bold font-mono tracking-widest uppercase px-3 py-1.5 rounded">
                  {product.category}
                </span>
              )}
            </div>

            {/* Details */}
            <div>
              {product.category && (
                <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase text-[#c9a961] mb-4">
                  <span className="w-6 h-px bg-[#c9a961]" />
                  {product.category}
                </div>
              )}

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a1628] tracking-tight leading-tight mb-6">
                {product.name}
              </h1>

              <p className="text-[#5a6b7d] leading-relaxed mb-8 text-base sm:text-lg">
                {product.desc ||
                  `${product.name} — engineered for critical industrial applications.`}
              </p>

              {/* Specs Box */}
              {(product.material || product.spec || product.standards) && (
                <div className="space-y-3 mb-8 p-5 bg-[#f7f8fa] rounded-xl border border-gray-200">
                  {product.material && (
                    <div className="flex justify-between gap-4 text-sm">
                      <span className="text-[#8896a6] font-medium">
                        Material
                      </span>
                      <span className="font-bold text-[#0a1628] text-right">
                        {product.material}
                      </span>
                    </div>
                  )}
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
                  {product.standards && (
                    <div className="flex justify-between gap-4 text-sm">
                      <span className="text-[#8896a6] font-medium">
                        Standards
                      </span>
                      <span className="font-bold text-[#0a1628] text-right">
                        {product.standards}
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/917313726773?text=${encodeURIComponent(
                    `Hello Shree Ganesh Steel, I would like to inquire about: ${product.name}`,
                  )}`}
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

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-14 sm:py-16 bg-[#f7f8fa] border-t border-gray-200">
          <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase text-[#c9a961] mb-3">
                <span className="w-6 h-px bg-[#c9a961]" />
                Related Products
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1628] tracking-tight">
                More from {product.category}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {relatedProducts.map((p) => (
                <Link
                  key={p.id ?? p.slug}
                  to={`/products/${p.slug ?? p.id}`}
                  className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(10,22,40,0.12)] hover:border-[#c9a961]/50 transition-all duration-300"
                >
                  <div className="aspect-[5/4] bg-[#f7f8fa] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-bold text-[#0a1628] group-hover:text-[#c9a961] transition-colors leading-snug line-clamp-2">
                      {p.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <style>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
