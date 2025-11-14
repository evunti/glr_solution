"use client";

export default function Upholstery() {
  return (
    <div className="flex flex-col items-center pt-8 sm:pt-16 pb-12 sm:pb-24">
      <main className="w-full max-w-5xl px-4 sm:px-6 md:px-8">
        <div className="text-center mb-10 sm:mb-15">
          <h1 className="text-3xl sm:text-5xl font-light tracking-wide sm:tracking-wider text-[color-brand] mb-2 sm:mb-3">
            RV & Motor Home Upholstery
          </h1>
          <div className="w-16 sm:w-24 h-1 bg-[color-brand] mx-auto mb-4 sm:mb-6"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
          <section className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-xl text-[color-brand]/70 font-light tracking-wide">
              Transform your RV's interior with custom upholstery. Our
              experienced craftsmen can revive worn seats or create a fresh new
              design using premium materials for a refined and comfortable
              travel experience.
            </p>

            <p className="text-sm sm:text-base text-[color-brand]/70 leading-relaxed font-light">
              Whether you need repairs to existing upholstery or a complete
              redesign, we specialize in creating comfortable, durable, and
              beautiful interiors for RVs, motor homes, and boats.
            </p>
          </section>

          <div className="w-full h-px bg-gray-300"></div>

          <h2 className="text-xl sm:text-2xl font-light text-[color-brand] tracking-wide text-center">
            Our RV & Upholstery Services Include:
          </h2>

          <ul className="list-disc list-inside text-sm sm:text-base text-[color-brand]/70 font-light space-y-1.5 sm:columns-2 sm:gap-8 px-4 sm:px-0">
            <li>Custom RV seat upholstery</li>
            <li>Dinette and booth restoration</li>
            <li>Cushion replacement and refilling</li>
            <li>Headliner repair and replacement</li>
            <li>Boat interior upholstery</li>
            <li>Marine vinyl repair</li>
            <li>Custom design and fabric selection</li>
            <li>Complete interior renovation</li>
          </ul>

          <div className="w-full h-px bg-gray-300"></div>

          <div className="bg-brand/90 opacity-30 p-6 sm:p-8 md:p-10 rounded">
            <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed font-light tracking-wide text-center">
              Make your RV or boat feel like home with custom upholstery from
              GLR Solution. Contact us for a free consultation and estimate.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
