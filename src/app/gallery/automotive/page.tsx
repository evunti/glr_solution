"use client";

import Image from "next/image";

export default function AutomotiveGallery() {
  const images = [
    "01. 20250308_1517410.jpg",
    "01. 20250308_1517410z.jpg",
    "02. 20250308_151744.jpg",
    "04. 20250310_182534.jpg",
    "20190116_142008 2.jpg",
    "20190322_221206.jpg",
    "20190322_2212062.jpg",
    "20190322_221256.jpg",
    "20190322_221337.jpg",
    "2025-03-09_221034.jpg",
    "2025-03-09_221053.jpg",
    "2025-03-09_221135.jpg",
    "2025-03-09_221242.jpg",
    "2025-03-09_221552.jpg",
    "20250412_121558.jpg",
    "20250412_121614.jpg",
    "20250412_121617 3.jpg",
    "20250412_121617.jpg",
    "8opqttt5mwlrsnv51sqfgoeeuec4etyc.jpg",
    "IMG_20190124_130218.jpg",
    "Nahkiste_varvimine (2).jpg",
    "auto6.jpg",
    "mycollages-6.jpg",
    "mycollages-7.jpg",
    "remont_kozhanyx_sidenij_avtomobilya_21 (1).jpg",
    "restavraciya-salona-avtomobilya-06.jpg",
  ];

  return (
    <div className="flex flex-col items-center pt-4 sm:pt-16 pb-12 sm:pb-24">
      <main className="w-full max-w-full sm:max-w-5xl md:max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="mb-6 sm:mb-10">
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-[color-brand] text-center">
            Automotive Gallery
          </h1>
        </div>

        <div className="w-full">
          <p className="text-base sm:text-lg text-[color-brand]/70 font-light tracking-wide mb-6 sm:mb-8 text-center">
            Professional automotive leather repair and restoration - before and
            after results
          </p>

          <div className="columns-1 md:columns-2 gap-4 md:gap-8">
            {images.map((image, index) => (
              <Image
                key={index}
                src={`/auto/${encodeURIComponent(image)}`}
                alt={`Automotive restoration ${index + 1}`}
                width={500}
                height={500}
                className="w-full h-auto object-contain  shadow-sm hover:shadow-md transition-shadow mb-4 md:mb-8 break-inside-avoid"
                loading={index < 4 ? "eager" : "lazy"}
                priority={index < 2}
              />
            ))}
          </div>

          <div className="mt-12 sm:mt-16 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-light text-[color-brand] mb-4 tracking-wide">
              Impressed by Our Work?
            </h2>
            <p className="text-base sm:text-lg text-[color-brand]/70 font-light mb-6 leading-relaxed">
              Let us restore your vehicle's interior to showroom condition with
              the same expert craftsmanship.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#2d5016] text-white px-8 py-3 text-base sm:text-lg font-light tracking-wide hover:bg-[#2d5016]/90 transition-colors duration-300 shadow-sm hover:shadow-md"
            >
              Get Your Free Estimate
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
