"use client";

export default function Contact() {
  return (
    <div className="px-2 sm:px-12 pb-8 sm:pb-12 pt-4 sm:pt-10 flex flex-col items-center justify-start">
      <main className="flex flex-col gap-4 w-full max-w-md mx-auto items-center bg-white border border-gray-200 rounded p-4 sm:p-8 shadow-sm">
        <h1 className="text-2xl text-center text-[color-brand] font-light tracking-wide">
          Request a Free Estimate
        </h1>
        <p className="text-lg text-center text-[color-brand]/80 font-light tracking-wide">
          Ready to restore your furniture or vehicle interior?
        </p>
        <p className="text-center max-w-xs sm:max-w-md text-[color-brand]/70 font-light tracking-wide">
          Contact{" "}
          <span className="font-normal text-[color-brand]">GLR Solution</span>{" "}
          in Harrisonburg, VA today for a free quote and see why our customers
          trust us for their leather repair and reupholstery needs.
        </p>
        <a
          href="mailto:info@glrsolution.com"
          className="mt-4 px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base bg-[color-brand] text-white font-light tracking-wide rounded shadow hover:bg-[color-brand]/80 transition"
        >
          Email Us
        </a>
      </main>
    </div>
  );
}
