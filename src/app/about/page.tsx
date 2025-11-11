"use client";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center pt-16 pb-24">
      <main className="w-full max-w-5xl px-6 sm:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-light tracking-tight text-[#2a2b2b] mb-4">
            About Us
          </h1>
          <div className="w-20 h-1 bg-[#2a2b2b] mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <section className="space-y-6">
            <p className="text-lg sm:text-xl text-gray-800 leading-relaxed font-light">
              At{" "}
              <span className="font-semibold text-[#2a2b2b]">GLR Solution</span>
              , we specialize in the restoration, repair, and cleaning of
              leather and vinyl furniture, car and RV interiors, and much more.
              With years of experience and a true passion for our craft, we
              bring worn or damaged furniture back to life — restoring its
              original beauty, comfort, and value.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed font-light">
              We use only high-quality, American-made materials and premium
              Italian leather. Our advanced restoration techniques and attention
              to detail ensure that every project meets the highest standards of
              quality, durability, and sustainability.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed font-light">
              From minor repairs to complete reupholstery, we treat every piece
              with the same care and dedication.
            </p>
          </section>
          <div className="w-full h-px bg-gray-300"></div>
          <h2 className="text-3xl font-light text-[#2a2b2b] text-center">
            {" "}
            Our Services Include:
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-700 font-light space-y-2 sm:columns-2 sm:gap-8">
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
          <section className="bg-linear-to-r from-[#2a2b2b] to-[#3d3e3e] p-8 sm:p-12 ">
            <p className="text-lg sm:text-xl text-white leading-relaxed font-light text-center">
              We take pride in our ability to handle even the most complex
              restoration projects — helping you enjoy your favorite furniture
              and interiors for years to come, with results that look beautiful
              and last.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
