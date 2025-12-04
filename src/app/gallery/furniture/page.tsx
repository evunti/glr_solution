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
    <div className="flex flex-col items-center pt-8 sm:pt-16 pb-12 sm:pb-24">
      <main className="w-full max-w-5xl px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-center gap-4 mb-6 sm:mb-10">
          <h1 className="text-center text-xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-wide  text-[color-brand]">
            Furniture Gallery
          </h1>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-base sm:text-lg text-[color-brand]/70 font-light tracking-wide mb-8 text-center">
            Professional furniture repair and restoration - before and after
            results
          </p>

          <div className="flex flex-col gap-6 sm:gap-8">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded shadow-sm hover:shadow-md transition-shadow bg-gray-100"
              >
                <Image
                  src={`/Furniture/${encodeURIComponent(image)}`}
                  alt={`Furniture restoration ${index + 1}`}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain "
                  loading={index < 2 ? "eager" : "lazy"}
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
