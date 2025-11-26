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
    <div className="flex flex-col items-center pt-8 sm:pt-16 pb-12 sm:pb-24">
      <main className="w-full max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="flex items-center gap-4 mb-6 sm:mb-10">
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[color-brand]">
            Automotive Gallery
          </h1>
          <div className="grow h-px bg-black"></div>
        </div>

        <div className="w-full">
          <p className="text-base sm:text-lg text-[color-brand]/70 font-light tracking-wide mb-8 text-center">
            Professional automotive leather repair and restoration - before and
            after results
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded shadow-sm hover:shadow-md transition-shadow bg-gray-100"
                style={{ aspectRatio: "4/3", minHeight: "400px" }}
              >
                <Image
                  src={`/auto/${encodeURIComponent(image)}`}
                  alt={`Automotive restoration ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  loading={index < 4 ? "eager" : "lazy"}
                  priority={index < 2}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
