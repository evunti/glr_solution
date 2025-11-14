"use client";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center pt-8 sm:pt-16 pb-12 sm:pb-24">
      <main className="w-full max-w-5xl px-4 sm:px-6 md:px-8">
        <div className="text-center mb-6 sm:mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-[color-brand] ">
            About Us
          </h1>
          <div className="w-16 sm:w-20 h-1 bg-[color-brand] mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
          <section className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg md:text-xl text-[color-brand]/80 leading-relaxed font-light tracking-wide">
              At GLR Solution, we specialize in the restoration, repair, and
              cleaning of leather and vinyl furniture, car and RV interiors, and
              much more. With years of experience and a true passion for our
              craft, we bring worn or damaged furniture back to life — restoring
              its original beauty, comfort, and value.
            </p>

            <p className="text-base sm:text-lg text-[color-brand]/70 leading-relaxed font-light tracking-wide">
              We use only high-quality, American-made materials and premium
              Italian leather. Our advanced restoration techniques and attention
              to detail ensure that every project meets the highest standards of
              quality, durability, and sustainability.
            </p>

            <p className="text-base sm:text-lg text-[color-brand]/70 leading-relaxed font-light tracking-wide">
              From minor repairs to complete reupholstery, we treat every piece
              with the same care and dedication.
            </p>
          </section>
          <div className="w-full h-px bg-gray-300"></div>
          <h2 className="text-2xl sm:text-3xl font-light text-[color-brand] tracking-wide text-center">
            Our Services Include:
          </h2>
          <ul className="list-disc list-inside text-sm sm:text-base md:text-lg text-[color-brand]/70 font-light tracking-wide space-y-2 sm:columns-2 sm:gap-8 px-4 sm:px-0">
            {" "}
            <li>Leather and vinyl cleaning and repair</li>
            <li>Repainting and color restoration</li>
            <li>Conditioning and protection</li>
            <li>Cushion refilling</li>
            <li>Full reupholstery</li>
            <li>Spring repair and replacement</li>
            <li>Antique furniture restoration</li>
            <li>Repair of scratches, scuffs, cuts, burns, and pet damage</li>
            <li>Boat and RV upholstery</li>
          </ul>
          <div className="w-full h-px bg-gray-300"></div>
          <div className="bg-brand/90 opacity-30 p-6 sm:p-8 md:p-10 rounded">
            <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed font-light tracking-wide text-center">
              We take pride in our ability to handle even the most complex
              restoration projects — helping you enjoy your favorite furniture
              and interiors for years to come, with results that look beautiful
              and last.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
