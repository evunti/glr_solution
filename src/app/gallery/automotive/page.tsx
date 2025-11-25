"use client";

export default function AutomotiveGallery() {
  return (
    <div className="flex flex-col items-center pt-8 sm:pt-16 pb-12 sm:pb-24">
      <main className="w-full max-w-5xl px-4 sm:px-6 md:px-8">
        <div className="flex items-center gap-4 mb-6 sm:mb-10">
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[color-brand]">
            Automotive Gallery
          </h1>
          <div className="grow h-px bg-black"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
          {/* Gallery content will go here */}
        </div>
      </main>
    </div>
  );
}
