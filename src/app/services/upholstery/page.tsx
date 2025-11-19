"use client";

export default function Upholstery() {
  return (
    <div className="flex flex-col items-center pt-8 sm:pt-16 pb-12 sm:pb-24">
      <main className="w-full max-w-5xl px-4 sm:px-6 md:px-8">
        <div className="flex items-center gap-4 mb-6 sm:mb-10">
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[color-brand]">
            RV & Motor Home Upholstery
          </h1>
          <div className="grow h-px bg-black"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
          <section className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1 space-y-4">
              <p className="text-base sm:text-lg md:text-xl text-[color-brand]/80 leading-relaxed font-light tracking-wide">
                Transform your RV's interior with custom upholstery. Our
                experienced craftsmen can revive worn seats or create a fresh
                new design using premium materials for a refined and comfortable
                travel experience.
              </p>

              <p className="text-sm sm:text-base text-[color-brand]/70 leading-relaxed font-light tracking-wide">
                Whether you need repairs to existing upholstery or a complete
                redesign, we specialize in creating comfortable, durable, and
                beautiful interiors for RVs, motor homes, and boats.
              </p>
            </div>{" "}
            <div className="w-full md:w-64 lg:w-72 shrink-0">
              <img
                src="/images/rv.jpg"
                alt="RV interior upholstery"
                className="w-full h-auto object-cover  shadow-sm"
              />
            </div>
          </section>

          <div className="flex items-center gap-4">
            <div className="grow h-px bg-black"></div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-[color-brand] tracking-wide text-center">
              Our RV & Upholstery Services Include
            </h2>
            <div className="grow h-px bg-black"></div>
          </div>

          <ul className="list-disc list-inside text-sm sm:text-base md:text-lg text-[color-brand]/70 font-light tracking-wide space-y-2 sm:columns-2 sm:gap-8 px-4 sm:px-0">
            <li>Origianl and Custom RV seat upholstery</li>
            <li>Dinette and booth restoration</li>
            <li>Cushion filler replacement and refilling</li>

            <li>Boat interior repair and upholstery (using Marine vinyl)</li>

            <li>Origianl and Custom design and material selection</li>
          </ul>

          <div className="bg-[#2d5016]/10 border-l-4 border-[#2d5016] p-6 sm:p-8 md:p-10">
            <p className="text-base sm:text-lg md:text-xl text-[color-brand] leading-relaxed font-light tracking-wide text-center italic">
              Make your RV or boat feel like home with custom upholstery from
              GLR Solution. Contact us for a free consultation and estimate.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
