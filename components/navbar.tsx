"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export function NavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
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
    <nav className="w-full flex justify-center mb-2 mt-2 relative z-50 px-2 sm:px-6 md:px-10">
      <div className="w-full flex items-center justify-between relative py-2 md:py-3 text-[color-brand] backdrop-blur-sm border-b border-[color-brand]/20 max-w-8xl px-4 md:px-8">
        <Link href="/" className="flex items-center">
          <img
            src="/images/label.png"
            alt="GLR Solution Logo"
            className="h-8 md:h-12 w-auto cursor-pointer"
          />
        </Link>

        <div className="hidden md:flex gap-10 absolute left-1/2 -translate-x-1/2 items-center">
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

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              className={`text-sm font-light tracking-wider uppercase transition-all duration-200 cursor-pointer  ${
                pathname.startsWith("/services")
                  ? "text-[color-brand] border-b-2 border-[color-brand] pb-1"
                  : "text-[color-brand]/70 hover:text-[color-brand]"
              }`}
            >
              Services
            </button>

            {servicesDropdownOpen && (
              <div className="absolute top-full left-0 mt-3 bg-white/90 backdrop-blur-md border-t-2 border-[color-brand]/20 shadow-sm z-50 min-w-[220px]">
                <Link
                  href="/services/furniture"
                  onClick={() => setServicesDropdownOpen(false)}
                  className="block px-6 py-4 text-sm font-light tracking-wide text-[color-brand]/70 hover:text-[color-brand] transition-colors duration-200"
                >
                  Furniture Restoration
                </Link>
                <Link
                  href="/services/automotive"
                  onClick={() => setServicesDropdownOpen(false)}
                  className="block px-6 py-4 text-sm font-light tracking-wide text-[color-brand]/70 hover:text-[color-brand] transition-colors duration-200"
                >
                  Automotive Interior
                </Link>
                <Link
                  href="/services/upholstery"
                  onClick={() => setServicesDropdownOpen(false)}
                  className="block px-6 py-4 text-sm font-light tracking-wide text-[color-brand]/70 hover:text-[color-brand] transition-colors duration-200"
                >
                  RV & Upholstery
                </Link>
              </div>
            )}
          </div>

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
            className="text-xl font-light tracking-wider text-second"
          >
            540-255-8494
          </a>
        </div>

        <div className="md:hidden absolute right-4 top-1/2 -translate-y-1/2">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className=" flex flex-col justify-center items-center gap-1 "
            aria-label="Toggle menu"
          >
            <span className="w-6 h-px bg-brand transition-all"></span>
            <span className="w-6 h-px bg-brand transition-all"></span>
            <span className="w-6 h-px bg-brand transition-all"></span>
          </button>
        </div>

        {dropdownOpen && isMobile && (
          <div className="absolute top-full left-0 right-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-lg z-50 flex flex-col">
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

            {/* Mobile Services Dropdown */}
            <div className="border-b border-gray-100">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className={`w-full text-left px-6 py-4 text-sm font-light tracking-wider uppercase transition-colors ${
                  pathname.startsWith("/services")
                    ? "text-[color-brand] bg-gray-100 font-normal"
                    : "text-[color-brand]/70 hover:bg-gray-50 hover:text-[color-brand]"
                }`}
              >
                Services
              </button>
              {mobileServicesOpen && (
                <div className="bg-gray-50">
                  <Link
                    href="/services/furniture"
                    className="block px-10 py-3 text-sm font-light text-[color-brand]/70 hover:text-[color-brand] transition-colors"
                    onClick={() => {
                      setDropdownOpen(false);
                      setMobileServicesOpen(false);
                    }}
                  >
                    Furniture Restoration
                  </Link>
                  <Link
                    href="/services/automotive"
                    className="block px-10 py-3 text-sm font-light text-[color-brand]/70 hover:text-[color-brand] transition-colors"
                    onClick={() => {
                      setDropdownOpen(false);
                      setMobileServicesOpen(false);
                    }}
                  >
                    Automotive Interior
                  </Link>
                  <Link
                    href="/services/upholstery"
                    className="block px-10 py-3 text-sm font-light text-[color-brand]/70 hover:text-[color-brand] transition-colors"
                    onClick={() => {
                      setDropdownOpen(false);
                      setMobileServicesOpen(false);
                    }}
                  >
                    RV & Upholstery
                  </Link>
                </div>
              )}
            </div>

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
