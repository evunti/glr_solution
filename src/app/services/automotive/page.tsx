"use client";

export default function Automotive() {
  return (
    <div className="flex flex-col items-center pt-8 sm:pt-16 pb-12 sm:pb-24">
      <main className="w-full max-w-5xl px-4 sm:px-6 md:px-8">
        <div className="text-center mb-10 sm:mb-15">
          <h1 className="text-3xl sm:text-5xl font-light tracking-wide sm:tracking-wider text-[color-brand] mb-2 sm:mb-3">
            Automotive Interior Repair
          </h1>
          <div className="w-16 sm:w-24 h-1 bg-[color-brand] mx-auto mb-4 sm:mb-6"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
          <section className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-xl text-[color-brand]/70 font-light tracking-wide">
              We specialize in the restoration and repair of leather car
              interiors and steering wheels, providing top-quality craftsmanship
              and guaranteed results.
            </p>

            <p className="text-sm sm:text-base text-[color-brand]/70 leading-relaxed font-light">
              Our fast and reliable service brings your automotive leather back
              to life - repairing wear, scratches, cracks, and all types of
              damage with precision and care. We use premium materials to ensure
              lasting results.
            </p>
          </section>

          <div className="w-full h-px bg-gray-300"></div>

          <h2 className="text-xl sm:text-2xl font-light text-[color-brand] tracking-wide text-center">
            Our Automotive Services Include:
          </h2>

          <ul className="list-disc list-inside text-sm sm:text-base text-[color-brand]/70 font-light space-y-1.5 sm:columns-2 sm:gap-8 px-4 sm:px-0">
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
