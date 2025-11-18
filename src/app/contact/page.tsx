"use client";

export default function Contact() {
  return (
    <div className="px-4 sm:px-12 pb-8 sm:pb-12 pt-8 sm:pt-10 flex flex-col items-center justify-start">
      <main className="flex flex-col gap-4 sm:gap-5 w-full max-w-md mx-auto items-center bg-white border border-gray-200 rounded p-6 sm:p-8 shadow-sm">
        <h1 className="text-xl sm:text-2xl text-center text-[color-brand] font-light tracking-wide">
          Request a Free Estimate
        </h1>
        <p className="text-base sm:text-lg text-center text-[color-brand]/80 font-light tracking-wide">
          Ready to restore your furniture or vehicle interior?
        </p>
        <p className="text-sm sm:text-base text-center max-w-xs sm:max-w-md text-[color-brand]/70 font-light tracking-wide leading-relaxed">
          Contact{" "}
          <span className="font-normal text-[color-brand]">GLR Solution</span>{" "}
          in Harrisonburg, VA today for a free quote and see why our customers
          trust us for their leather repair and reupholstery needs.
        </p>
        <a
          href="mailto:info@glrsolution.com"
          className="mt-4 px-6 py-3 text-sm sm:px-8 sm:py-3 sm:text-base bg-[color-brand] text-[color-brand] font-light tracking-wide rounded shadow hover:bg-[color-brand]/0 transition active:scale-95"
        >
          Email Us
        </a>
      </main>
    </div>
  );
}
