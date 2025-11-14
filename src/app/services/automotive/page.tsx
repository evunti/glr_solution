"use client";

export default function Automotive() {
  return (
    <div className="flex flex-col items-center pt-8 sm:pt-16 pb-12 sm:pb-24">
      <main className="w-full max-w-5xl px-4 sm:px-6 md:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light text-[color-brand] mb-3 sm:mb-4">
            Automotive Interior Repair
          </h1>
          <div className="w-16 sm:w-20 h-1 bg-[color-brand] mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
          <section className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg md:text-xl text-[color-brand]/80 leading-relaxed font-light tracking-wide">
              We specialize in the restoration and repair of leather car
              interiors and steering wheels, providing top-quality craftsmanship
              and guaranteed results.
            </p>

            <p className="text-base sm:text-lg text-[color-brand]/70 leading-relaxed font-light tracking-wide">
              Our fast and reliable service brings your automotive leather back
              to life - repairing wear, scratches, cracks, and all types of
              damage with precision and care. We use premium materials to ensure
              lasting results.
            </p>
          </section>

          <div className="w-full h-px bg-gray-300"></div>

          <h2 className="text-2xl sm:text-3xl font-light text-[color-brand] tracking-wide text-center">
            Our Automotive Services Include:
          </h2>

          <ul className="list-disc list-inside text-sm sm:text-base md:text-lg text-[color-brand]/70 font-light tracking-wide space-y-2 sm:columns-2 sm:gap-8 px-4 sm:px-0">
            <li>Leather seat repair and restoration</li>
            <li>Steering wheel restoration</li>
            <li>Dashboard and console repair</li>
            <li>Door panel restoration</li>
            <li>Crack and tear repair</li>
            <li>Color matching and refinishing</li>
            <li>Wear and scratch removal</li>
            <li>Complete interior reupholstery</li>
          </ul>

          <div className="w-full h-px bg-gray-300"></div>

          <div className="bg-brand/90 opacity-30 p-6 sm:p-8 md:p-10 rounded">
            <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed font-light tracking-wide text-center">
              Restore your vehicle's interior to showroom condition. Contact GLR
              Solution today for professional automotive leather repair.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
