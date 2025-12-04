"use client";

export default function Furniture() {
  return (
    <div className="flex flex-col items-center pt-4 sm:pt-16 pb-12 sm:pb-24">
      <main className="w-full max-w-5xl px-4 sm:px-6 md:px-8">
        <div className="flex items-center gap-4 mb-6 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[color-brand] text-center sm:text-left w-full sm:w-auto tracking-wide">
            Furniture Restoration
          </h1>
          <div className="grow h-px bg-black hidden sm:block"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
          <section className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1 space-y-4">
              <p className="text-base sm:text-lg md:text-xl text-[color-brand]/80 leading-relaxed font-light tracking-wide">
                We restore and repair leather and vinyl furniture for homes,
                offices, and healthcare facilities. With precision and care, we
                bring back the original look, feel, and comfort of your
                furniture.
              </p>

              <p className="text-sm sm:text-base text-[color-brand]/70 leading-relaxed font-light tracking-wide">
                Our expert craftsmen specialize in restoring worn or damaged
                furniture to its original beauty. Whether it's a beloved family
                heirloom or office furniture, we treat every piece with
                meticulous attention to detail.
              </p>
            </div>
            <div className="w-full md:w-64 lg:w-72 shrink-0">
              <img
                src="/images/couch.jpg"
                alt="Restored leather furniture"
                className="w-full h-auto object-cover shadow-sm"
              />
            </div>
          </section>

          <div className="flex items-center gap-4">
            <div className="grow h-px bg-black"></div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-[color-brand] tracking-wide text-center">
              Our Furniture Services Include
            </h2>
            <div className="grow h-px bg-black"></div>
          </div>

          <ul className="list-disc list-inside text-sm sm:text-base md:text-lg text-[color-brand]/70 font-light tracking-wide space-y-2 sm:columns-2 sm:gap-8 px-4 sm:px-0">
            <li>Color restoration and repainting</li>
            <li>Scratch, scuff, and tear repair</li>

            <li>Cushion filler replacement and refilling</li>
            <li>Spring repair and replacement</li>
            <li>
              Burns and pet damage restoration (scratches, chewing, stains)
            </li>
          </ul>

          <div className="bg-[#2d5016]/10 border-l-4 border-[#2d5016] p-6 sm:p-8 md:p-10">
            <p className="text-base sm:text-lg md:text-xl text-[color-brand] leading-relaxed font-light tracking-wide text-center italic">
              Trust GLR Solution to restore your furniture with expert
              craftsmanship and premium American materials. Contact us today for
              a free estimate.
            </p>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-light text-[color-brand] mb-4 tracking-wide">
              Ready to Restore Your Furniture?
            </h2>
            <p className="text-base sm:text-lg text-[color-brand]/70 font-light mb-6 leading-relaxed">
              Schedule a consultation and see how we can bring your furniture
              back to its original beauty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="bg-[#2d5016] text-white px-8 py-3 text-base sm:text-lg font-light tracking-wide hover:bg-[#2d5016]/90 transition-colors duration-300 shadow-sm hover:shadow-md"
              >
                Request Free Estimate
              </a>
              <a
                href="tel:540-255-8494"
                className="border-2 border-[#2d5016] text-[#2d5016] px-8 py-3 text-base sm:text-lg font-light tracking-wide hover:bg-[#2d5016]/5 transition-colors duration-300"
              >
                Call: 540-255-8494
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
