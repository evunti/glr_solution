"use client";

import Image from "next/image";

export default function FurnitureGallery() {
  const images = [
    "03. 20250306_175420.jpg",
    "3.jpg",
    "4_2.jpg",
    "33.jpg",
    "123.jpg",
    "20250306_175424 insta.jpg",
    "20250306_1754201 insta.jpg",
    "5352530335134508738.jpg",
    "5370721780785880803.jpg",
    "frestore-04.jpg",
    "photo_2024-04-03_16- (2).jpg",
    "servrep-03.jpg",
    "servrep-20.jpg",
  ];

  return (
    <div className="flex flex-col items-center pt-4 sm:pt-16 pb-12 sm:pb-24">
      <main className="w-full max-w-5xl px-4 sm:px-6 md:px-8">
        <div className="mb-6 sm:mb-10">
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-[color-brand] text-center">
            Furniture Gallery
          </h1>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-base sm:text-lg text-[color-brand]/70 font-light tracking-wide mb-8 text-center">
            Professional furniture repair and restoration - before and after
            results
          </p>

          <div className="columns-1 md:columns-2 gap-6 sm:gap-8">
            {images.map((image, index) => (
              <Image
                key={index}
                src={`/Furniture/${encodeURIComponent(image)}`}
                alt={`Furniture restoration ${index + 1}`}
                width={1200}
                height={800}
                className="w-full h-auto object-contain  shadow-sm hover:shadow-md transition-shadow mb-6 sm:mb-8 break-inside-avoid"
                loading={index < 2 ? "eager" : "lazy"}
                priority={index === 0}
              />
            ))}
          </div>

          <div className="mt-12 sm:mt-16 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-light text-[color-brand] mb-4 tracking-wide">
              Love What You See?
            </h2>
            <p className="text-base sm:text-lg text-[color-brand]/70 font-light mb-6 leading-relaxed">
              Your furniture deserves the same expert care and restoration. Get
              started with a free estimate today.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#2d5016] text-white px-8 py-3 text-base sm:text-lg font-light tracking-wide hover:bg-[#2d5016]/90 transition-colors duration-300 shadow-sm hover:shadow-md"
            >
              Request Your Free Estimate
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
