"use client";

import Image from "next/image";

export default function UpholsteryGallery() {
  const images = [
    "20250323_141036.jpg",
    "20250407_190652.jpg",
    "20250509_165407.jpg",
    "20250519_133702.jpg",
    "20250519_134115.jpg",
    "20250519_135611.jpg",
    "20250530_171617.jpg",
    "20250530_171647.jpg",
    "20250530_171647web..jpg",
    "20250530_183538 fase.jpg",
    "20250530_1835380 fase.jpg",
    "20250530_183614a.jpg",
    "20250530_183958 fase.jpg",
    "20250710_175301.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "7R302325.jpg",
    "7R302336.jpg",
  ];

  return (
    <div className="flex flex-col items-center pt-8 sm:pt-16 pb-12 sm:pb-24">
      <main className="w-full max-w-5xl px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-center tracking-wide gap-4 mb-6 sm:mb-10">
          <h1 className="text-center tracking-wide  text-xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[color-brand]">
            RV & Upholstery Gallery
          </h1>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-base sm:text-lg text-[color-brand]/70 font-light tracking-wide mb-8 text-center">
            Professional RV & upholstery repair and restoration - before and
            after results
          </p>

          <div className="columns-1 md:columns-2 gap-6 sm:gap-8">
            {images.map((image, index) => (
              <Image
                key={index}
                src={`/RV/${encodeURIComponent(image)}`}
                alt={`RV & upholstery restoration ${index + 1}`}
                width={1200}
                height={800}
                className="w-full h-auto object-contain  shadow-sm hover:shadow-md transition-shadow mb-6 sm:mb-8 break-inside-avoid"
                loading={index < 2 ? "eager" : "lazy"}
                priority={index === 0}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
