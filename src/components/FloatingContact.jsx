import React, { useEffect, useState } from "react";

// ============================================
// CONTACT CONFIG
// ============================================
const PHONE_NUMBER = "+917313726773";
const WHATSAPP_NUMBER = "917313726773";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello Shree Ganesh Steel, I would like to request a quote.",
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const FloatingContact = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* ============ FLOATING CONTACT BUTTONS ============ */}
      <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-[999] flex flex-col items-end gap-3">
        {/* Scroll to Top — appears after scroll */}
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-gray-200 text-[#0a1628] flex items-center justify-center shadow-[0_8px_25px_-8px_rgba(10,22,40,0.25)] hover:bg-[#0a1628] hover:text-white hover:border-[#0a1628] hover:-translate-y-1 transition-all duration-300 ${
            showScrollTop
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-3 pointer-events-none"
          }`}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>

        {/* Call Button */}
        <a
          href={`tel:${PHONE_NUMBER}`}
          aria-label="Call us"
          className="group relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#1d4c93] to-[#4e7cc1] text-white flex items-center justify-center shadow-[0_10px_30px_-8px_rgba(10,22,40,0.5)] hover:-translate-y-1 hover:shadow-[0_15px_40px_-10px_rgba(10,22,40,0.6)] transition-all duration-300"
          style={{ width: "52px", height: "52px" }}
        >
          {/* Tooltip */}
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#234e8f] text-white text-[0.7rem] font-semibold px-3 py-1.5 rounded-md whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-hover:mr-4 transition-all duration-300 shadow-lg">
            Call Now
            <span className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-y-4 border-y-transparent border-l-4 border-l-[#0a1628]" />
          </span>

          {/* Actual Phone Icon */}
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>

          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full bg-[#174a96] opacity-30 animate-ping" />
        </a>

        {/* WhatsApp Button */}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="group relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#25d366] to-[#1ebd5a] text-white flex items-center justify-center shadow-[0_10px_30px_-8px_rgba(37,211,102,0.5)] hover:-translate-y-1 hover:shadow-[0_15px_40px_-10px_rgba(37,211,102,0.6)] transition-all duration-300"
          style={{ width: "52px", height: "52px" }}
        >
          {/* Tooltip */}
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#298422] text-white text-[0.7rem] font-semibold px-3 py-1.5 rounded-md whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-hover:mr-4 transition-all duration-300 shadow-lg">
            Chat on WhatsApp
            <span className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-y-4 border-y-transparent border-l-4 border-l-[#0a1628]" />
          </span>

          {/* Actual WhatsApp Icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>

          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full bg-[#25d366] opacity-30 animate-ping" />
        </a>
      </div>
    </>
  );
};

export default FloatingContact;
