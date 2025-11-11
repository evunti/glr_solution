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
    <nav className="w-full flex justify-center mb-8 relative z-20">
      <div className="w-full flex items-center justify-center relative py-4 md:py-5 text-[#FFF5EE] bg-[#2a2b2b]/95 backdrop-blur-sm border-b border-gray-200">
        <div className="hidden md:flex gap-10">
          <Link
            href="/"
            className="text-[#FFF5EE] no-underline text-sm font-light tracking-wider uppercase hover:text-gray-600 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-[#FFF5EE] no-underline text-sm font-light tracking-wider uppercase hover:text-gray-600 transition-colors duration-200"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="text-[#FFF5EE] no-underline text-sm font-light tracking-wider uppercase hover:text-gray-600 transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="/gallery"
            className="text-[#FFF5EE] no-underline text-sm font-light tracking-wider uppercase hover:text-gray-600 transition-colors duration-200"
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className="text-[#FFF5EE] no-underline text-sm font-light tracking-wider uppercase hover:text-gray-600 transition-colors duration-200"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden absolute right-4 top-1/2 -translate-y-1/2">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="p-2 flex flex-col justify-center items-center gap-1"
            aria-label="Toggle menu"
          >
            <span className="w-6 h-px bg-[#2a2b2b] transition-all"></span>
            <span className="w-6 h-px bg-[#2a2b2b] transition-all"></span>
            <span className="w-6 h-px bg-[#2a2b2b] transition-all"></span>
          </button>
        </div>

        {dropdownOpen && isMobile && (
          <div className="absolute top-full left-0 right-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-lg z-30 flex flex-col">
            <Link
              href="/"
              className="block px-6 py-4 text-[#2a2b2b] text-sm font-light tracking-wider uppercase border-b border-gray-100 hover:bg-gray-50 transition-colors"
              onClick={() => setDropdownOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block px-6 py-4 text-[#2a2b2b] text-sm font-light tracking-wider uppercase border-b border-gray-100 hover:bg-gray-50 transition-colors"
              onClick={() => setDropdownOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="block px-6 py-4 text-[#2a2b2b] text-sm font-light tracking-wider uppercase border-b border-gray-100 hover:bg-gray-50 transition-colors"
              onClick={() => setDropdownOpen(false)}
            >
              About
            </Link>
            <Link
              href="/gallery"
              className="block px-6 py-4 text-[#2a2b2b] text-sm font-light tracking-wider uppercase border-b border-gray-100 hover:bg-gray-50 transition-colors"
              onClick={() => setDropdownOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="block px-6 py-4 text-[#2a2b2b] text-sm font-light tracking-wider uppercase hover:bg-gray-50 transition-colors"
              onClick={() => setDropdownOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
