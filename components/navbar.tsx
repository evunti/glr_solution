"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export function NavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <nav className="w-full flex justify-center mb-2 relative px-0 z-20">
      <div className="w-full flex items-center justify-center relative min-h-[26px] py-2 md:py-3 bg-[#2a2b2b]/95 md:border-b-2 md:shadow-sm">
        <div className="hidden md:flex justify-around gap-6 ">
          <Link
            href="/"
            className="text-[#FFF5EE] no-underline text-xs sm:text-sm font-semibold tracking-wide rounded hover:bg-[#cda632]/20 transition"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-[#FFF5EE] no-underline text-xs sm:text-sm font-semibold tracking-wide rounded hover:bg-[#cda632]/20 transition"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="text-[#FFF5EE] no-underline text-xs sm:text-sm font-semibold tracking-wide rounded hover:bg-[#cda632]/20 transition"
          >
            About Us
          </Link>

          <Link
            href="/gallery"
            className="text-[#FFF5EE] no-underline text-xs sm:text-sm font-semibold tracking-wide rounded hover:bg-[#cda632]/20 transition"
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className="text-[#FFF5EE] no-underline text-xs sm:text-sm font-semibold tracking-wide rounded hover:bg-[#cda632]/20 transition"
          >
            Contact Us
          </Link>
        </div>

        <div className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 items-center h-full">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="bg-none border-none cursor-pointer p-0 flex flex-col justify-center items-center w-7 h-7"
            aria-label="Open menu"
          >
            <span
              className="w-5 h-[1.2px] bg-white mb-[4px]"
              style={{ borderRadius: 0 }}
            ></span>
            <span
              className="w-5 h-[1.2px] bg-white mb-[4px]"
              style={{ borderRadius: 0 }}
            ></span>
            <span
              className="w-5 h-[1.2px] bg-white"
              style={{ borderRadius: 0 }}
            ></span>
          </button>
        </div>
        {/* Mobile dropdown */}
        {/* Mobile dropdown (simplified) */}
        {dropdownOpen && isMobile && (
          <div className="absolute top-full left-0 right-0 w-full bg-[#2a2b2b]/95 border-t border-[#444] shadow-lg z-30 flex flex-col items-stretch overflow-hidden animate-fade-in">
            <Link
              href="/"
              className="block w-full px-4 py-3 text-[#FFF5EE] text-sm text-left border-b border-[#444] font-semibold"
              onClick={() => setDropdownOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block w-full px-4 py-3 text-[#FFF5EE] text-sm text-left border-b border-[#444] font-semibold"
              onClick={() => setDropdownOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="block w-full px-4 py-3 text-[#FFF5EE] text-sm text-left font-semibold"
              onClick={() => setDropdownOpen(false)}
            >
              About
            </Link>
            <div className="w-full border-t border-[#444]" />
            <Link
              href="/contact"
              className="block w-full px-4 py-3 text-[#FFF5EE] text-sm text-left font-semibold"
              onClick={() => setDropdownOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
