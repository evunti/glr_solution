"use client";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-4 sm:pt-10 px-2 sm:px-4 font-sans">
      <main className="flex flex-col gap-3 sm:gap-4 w-full max-w-2xl mx-auto items-center">
        <h2 className="text-xl sm:text-2xl text-center text-gray-800 font-bold mb-2">
          Expert Leather Repair & Reupholstery
        </h2>
        <p className="text-base sm:text-lg text-center text-gray-700 font-medium">
          Bring Your Leather and Upholstery Back to Life
        </p>
        <p className="text-sm sm:text-base text-center max-w-2xl text-gray-700">
          At GLR Solution, we specialize in restoring the comfort, beauty, and
          value of your leather and upholstered furniture or vehicle interiors.
          From faded car seats to torn sofas, we provide meticulous repair,
          restoration, and reupholstery services tailored to your needs. Our
          goal is simple — to make your furniture and interiors look and feel
          like new again.
        </p>
        <a
          href="/contact"
          className="mt-3 px-3 py-2 text-sm sm:px-6 sm:py-3 sm:text-base md:px-8 md:py-4 md:text-lg bg-[#2a2b2b] text-white rounded shadow hover:bg-[#444] transition"
        >
          Request a Free Estimate
        </a>
      </main>
      <div className="mt-8 w-full flex flex-col items-center">
        <div className="w-full max-w-md text-center">
          {/* Contact info now in layout */}
        </div>
      </div>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
