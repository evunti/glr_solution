"use client";

export default function About() {
  return (
    <div className="px-2 sm:px-12 pb-8 sm:pb-12 pt-4 sm:pt-10 flex flex-col items-center justify-start">
      <main className="w-full max-w-3xl flex flex-col items-center">
        <h1 className="text-xl sm:text-4xl font-extrabold text-[#2a2b2b] mb-2 text-center tracking-tight uppercase">
          Why Choose GLR Solution
        </h1>
        <div className="h-0.5 w-8 sm:w-20 bg-[#cda632] mx-auto mb-4 sm:mb-8"></div>
        <div className="bg-white border border-gray-200 rounded p-2 sm:p-8 shadow-sm w-full">
          <p className="text-sm sm:text-lg text-gray-800 text-center font-semibold mb-2 sm:mb-4">
            Based in{" "}
            <span className="text-[#cda632] font-bold">
              Harrisonburg, Virginia
            </span>
            , GRL Solution is trusted for our attention to detail, quality
            materials, and professional service.
          </p>
          <p className="text-xs sm:text-base text-gray-700 text-center mb-1 sm:mb-2">
            We combine <span className="font-bold">craftsmanship</span> with
            modern repair technology to ensure every job meets the highest
            standards.
          </p>
          <p className="text-xs sm:text-base text-gray-700 text-center">
            Our team treats each project—large or small—with care and precision,
            earning us a reputation for{" "}
            <span className="font-bold">reliable, long-lasting repairs</span>.
          </p>
        </div>
      </main>
      {/* Contact info now in layout */}
      <footer className="mt-8 sm:mt-12 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
