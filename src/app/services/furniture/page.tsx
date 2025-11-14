"use client";

export default function Furniture() {
  return (
    <div className="flex flex-col items-center pt-8 sm:pt-16 pb-12 sm:pb-24">
      <main className="w-full max-w-5xl px-4 sm:px-6 md:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light text-[color-brand] mb-3 sm:mb-4">
            Furniture Restoration
          </h1>
          <div className="w-16 sm:w-20 h-1 bg-[color-brand] mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
          <section className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg md:text-xl text-[color-brand]/80 leading-relaxed font-light tracking-wide">
              We restore and repair leather and vinyl furniture for homes,
              offices, and healthcare facilities. With precision and care, we
              bring back the original look, feel, and comfort of your furniture.
            </p>

            <p className="text-base sm:text-lg text-[color-brand]/70 leading-relaxed font-light tracking-wide">
              Our expert craftsmen specialize in restoring worn or damaged
              furniture to its original beauty. Whether it's a beloved family
              heirloom or office furniture, we treat every piece with meticulous
              attention to detail.
            </p>
          </section>

          <div className="w-full h-px bg-gray-300"></div>

          <h2 className="text-2xl sm:text-3xl font-light text-[color-brand] tracking-wide text-center">
            Our Furniture Services Include:
          </h2>

          <ul className="list-disc list-inside text-sm sm:text-base md:text-lg text-[color-brand]/70 font-light tracking-wide space-y-2 sm:columns-2 sm:gap-8 px-4 sm:px-0">
            <li>Leather and vinyl cleaning and conditioning</li>
            <li>Color restoration and repainting</li>
            <li>Scratch, scuff, and tear repair</li>
            <li>Burns and pet damage restoration</li>
            <li>Cushion refilling and replacement</li>
            <li>Spring repair and replacement</li>
            <li>Complete reupholstery</li>
            <li>Antique furniture restoration</li>
          </ul>

          <div className="w-full h-px bg-gray-300"></div>

          <div className="bg-brand/90 opacity-30 p-6 sm:p-8 md:p-10 rounded">
            <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed font-light tracking-wide text-center">
              Trust GLR Solution to restore your furniture with expert
              craftsmanship and premium American materials. Contact us today for
              a free estimate.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
