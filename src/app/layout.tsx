import type { Metadata } from "next";

import "./globals.css";
import { NavBar } from "../../components/navbar";
import CoverImage from "./CoverImage";

export const metadata: Metadata = {
  title: "GLR Solution - Leather Repair & Reupholstery",
  description:
    "Expert leather repair and reupholstery services for furniture, automotive interiors, and RV upholstery in Harrisonburg, VA",
  icons: {
    icon: [{ url: "/icon.png" }, { url: "/icon.png", sizes: "any" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-offwhite min-h-screen w-full flex justify-center">
        <div className="w-full max-w-[1200px]">
          <NavBar />
          <div className="px-2 sm:px-6 md:px-10">
            <div className="w-full flex flex-col items-center mx-auto">
              <div className="md:hidden w-full flex flex-col items-center text-center mb-2">
                <p className="text-xs font-light tracking-wide text-[color-brand]">
                  The Best American Materials & Great Prices
                </p>
                <a
                  href="tel:540-255-8494"
                  className="text-lg font-light tracking-wider text-second"
                >
                  540-255-8494
                </a>
              </div>

              <CoverImage />

              <div className="flex flex-col items-center justify-center mx-auto w-full">
                <div>{children}</div>
              </div>
            </div>

            <footer className="flex flex-col items-center py-8 sm:py-12 text-center mx-auto w-full max-w-[820px]">
              <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6 text-sm sm:text-base font-light text-[color-brand]">
                <a href="/" className="hover:opacity-70 transition-opacity">
                  Home
                </a>
                <a
                  href="/about"
                  className="hover:opacity-70 transition-opacity"
                >
                  About
                </a>
                <a
                  href="/contact"
                  className="hover:opacity-70 transition-opacity"
                >
                  Contact
                </a>
              </nav>

              <div className="flex gap-4 mb-6">
                <a
                  href="https://www.instagram.com/glr_solution/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-6 h-6 fill-gray-600"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/glrsolution"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-6 h-6 fill-gray-600"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>

              <p className="text-sm font-light text-[color-brand]/70">
                &copy; {new Date().getFullYear()} GLR Solution LLC. All rights
                reserved.
              </p>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
