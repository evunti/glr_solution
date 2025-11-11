"use client";

export default function Contact() {
  return (
    <div className="px-2 sm:px-12 pb-8 sm:pb-12 pt-4 sm:pt-10 flex flex-col items-center justify-start">
      <main className="flex flex-col gap-4 w-full max-w-md mx-auto items-center bg-white border border-gray-200 rounded p-4 sm:p-8 shadow-sm">
        <h1 className="text-2xl text-center text-gray-700 font-bold">
          Request a Free Estimate
        </h1>
        <p className="text-lg text-center">
          Ready to restore your furniture or vehicle interior?
        </p>
        <p className="text-center max-w-xs sm:max-w-md">
          Contact <span className="font-semibold">GLR Solution</span> in
          Harrisonburg, VA today for a free quote and see why our customers
          trust us for their leather repair and reupholstery needs.
        </p>
        <a
          href="mailto:info@glrsolution.com"
          className="mt-4 px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base bg-[#2a2b2b] text-white rounded shadow hover:bg-[#444] transition"
        >
          Email Us
        </a>
      </main>
    </div>
  );
}
