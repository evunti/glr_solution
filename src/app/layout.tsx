import type { Metadata } from "next";

import "./globals.css";
import { NavBar } from "../../components/navbar";

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
      <body className="bg-[#ededed] min-h-screen w-full flex justify-center">
        <div className="w-full max-w-[1400px]">
          <NavBar />
          <div className="px-2 sm:px-6 md:px-10">
            <div className="w-full flex flex-col items-center mx-auto">
              <div className="md:hidden w-full flex flex-col flex-end items-end mr-4 ">
                <p className="text-xs font-light tracking-wide text-[color-brand]">
                  The Best American Materials & Great Prices
                </p>
                <a
                  href="tel:540-255-8494"
                  className=" text-lg font-light tracking-wider text-second"
                >
                  540-255-8494
                </a>
              </div>

              <div className="relative w-full hidden md:block mt-4">
                <img
                  src="/images/cover.jpg"
                  alt="Cover"
                  className="w-full object-cover object-center h-auto max-h-[80vh] sm:max-h-screen"
                />
              </div>

              <div className="flex flex-col items-center justify-center mx-auto w-full">
                <div>{children}</div>
              </div>
            </div>

            <footer className="flex justify-center items-center py-6 text-center gap-1.5 mx-auto w-full max-w-[820px] text-sm sm:text-sm font-light text-[color-brand]">
              &copy; {new Date().getFullYear()} GLR Solution <p>|</p>
              <a
                href="https://www.instagram.com/glr_solution/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 underline"
              >
                Instagram
              </a>{" "}
              <p>|</p>
              <a
                href="https://www.instagram.com/glr_solution/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 underline"
              >
                Facebook
              </a>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
