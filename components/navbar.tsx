"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export function NavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="w-full flex justify-center mb-8 mt-2 relative z-0">
      <div className="w-full flex items-center justify-between relative py-2 md:py-3 text-[color-brand] backdrop-blur-sm border-b border-[color-brand]/20 max-w-8xl px-4 md:px-8">
        <div className="hidden md:flex items-center">
          <img
            src="/images/label.png"
            alt="GLR Solution Logo"
            className="h-12 w-auto"
          />
        </div>

        <div className="hidden md:flex gap-10 absolute left-1/2 -translate-x-1/2">
          <Link
            href="/"
            className={`no-underline text-sm font-light tracking-wider uppercase transition-all duration-200 ${
              isActive("/")
                ? "text-[color-brand] border-b-2 border-[color-brand] pb-1"
                : "text-[color-brand]/70 hover:text-[color-brand]"
            }`}
          >
            Home
          </Link>
          <Link
            href="/services"
            className={`no-underline text-sm font-light tracking-wider uppercase transition-all duration-200 ${
              isActive("/services")
                ? "text-[color-brand] border-b-2 border-[color-brand] pb-1"
                : "text-[color-brand]/70 hover:text-[color-brand]"
            }`}
          >
            Services
          </Link>
          <Link
            href="/about"
            className={`no-underline text-sm font-light tracking-wider uppercase transition-all duration-200 ${
              isActive("/about")
                ? "text-[color-brand] border-b-2 border-[color-brand] pb-1"
                : "text-[color-brand]/70 hover:text-[color-brand]"
            }`}
          >
            About
          </Link>
          <Link
            href="/gallery"
            className={`no-underline text-sm font-light tracking-wider uppercase transition-all duration-200 ${
              isActive("/gallery")
                ? "text-[color-brand] border-b-2 border-[color-brand] pb-1"
                : "text-[color-brand]/70 hover:text-[color-brand]"
            }`}
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className={`no-underline text-sm font-light tracking-wider uppercase transition-all duration-200 ${
              isActive("/contact")
                ? "text-[color-brand] border-b-2 border-[color-brand] pb-1"
                : "text-[color-brand]/70 hover:text-[color-brand]"
            }`}
          >
            Contact
          </Link>
        </div>

        <div className="hidden md:flex flex-col items-end text-right">
          <p className="text-sm font-light tracking-wide text-[color-brand]">
            The Best American Materials & Great Prices
          </p>
          <a
            href="tel:540-255-8494"
            className="text-xl font-light tracking-wider text-[#004526] "
          >
            540-255-8494
          </a>
        </div>

        <div className="md:hidden absolute right-4 top-1/2 -translate-y-1/2">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="p-2 flex flex-col justify-center items-center gap-1"
            aria-label="Toggle menu"
          >
            <span className="w-6 h-px bg-[color-brand] transition-all"></span>
            <span className="w-6 h-px bg-[color-brand] transition-all"></span>
            <span className="w-6 h-px bg-[color-brand] transition-all"></span>
          </button>
        </div>

        {dropdownOpen && isMobile && (
          <div className="absolute top-full left-0 right-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-lg z-30 flex flex-col">
            <Link
              href="/"
              className={`block px-6 py-4 text-sm font-light tracking-wider uppercase border-b border-gray-100 transition-colors ${
                isActive("/")
                  ? "text-[color-brand] bg-gray-100 font-normal"
                  : "text-[color-brand]/70 hover:bg-gray-50 hover:text-[color-brand]"
              }`}
              onClick={() => setDropdownOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`block px-6 py-4 text-sm font-light tracking-wider uppercase border-b border-gray-100 transition-colors ${
                isActive("/services")
                  ? "text-[color-brand] bg-gray-100 font-normal"
                  : "text-[color-brand]/70 hover:bg-gray-50 hover:text-[color-brand]"
              }`}
              onClick={() => setDropdownOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className={`block px-6 py-4 text-sm font-light tracking-wider uppercase border-b border-gray-100 transition-colors ${
                isActive("/about")
                  ? "text-[color-brand] bg-gray-100 font-normal"
                  : "text-[color-brand]/70 hover:bg-gray-50 hover:text-[color-brand]"
              }`}
              onClick={() => setDropdownOpen(false)}
            >
              About
            </Link>
            <Link
              href="/gallery"
              className={`block px-6 py-4 text-sm font-light tracking-wider uppercase border-b border-gray-100 transition-colors ${
                isActive("/gallery")
                  ? "text-[color-brand] bg-gray-100 font-normal"
                  : "text-[color-brand]/70 hover:bg-gray-50 hover:text-[color-brand]"
              }`}
              onClick={() => setDropdownOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className={`block px-6 py-4 text-sm font-light tracking-wider uppercase transition-colors ${
                isActive("/contact")
                  ? "text-[color-brand] bg-gray-100 font-normal"
                  : "text-[color-brand]/70 hover:bg-gray-50 hover:text-[color-brand]"
              }`}
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
