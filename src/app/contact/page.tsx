"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col items-center pt-8 sm:pt-16 pb-12 sm:pb-24">
      <main className="w-full max-w-5xl px-4 sm:px-6 md:px-8">
        <div className="mb-8 sm:mb-12 space-y-4">
          <div>
            <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-light text-[color-brand] tracking-wide">
              Contact Great Leather Repair Solution
            </h1>
          </div>
          <p className="text-center text-small text-[color-brand]/80 leading-relaxed font-light tracking-wide">
            We are a family owned company located in Virginia.
          </p>
          <div className="text-center">
            <p className="text-sm sm:text-base text-[color-brand]/70 font-light">
              Text us at{" "}
              <a
                href="tel:540-255-8494"
                className="hover:text-second transition-colors"
              >
                540-255-8494
              </a>{" "}
              or email{" "}
              <a
                href="mailto:info@glrsolution.com"
                className="hover:text-second transition-colors"
              >
                info@glrsolution.com
              </a>
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
          <div className="flex items-center gap-4">
            <div className="grow h-px bg-black"></div>
            <h2 className="text-2xl sm:text-3xl font-light text-[color-brand] tracking-wide whitespace-nowrap">
              Request a Free Estimate
            </h2>
            <div className="grow h-px bg-black"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm sm:text-base font-light text-[color-brand] mb-2 tracking-wide"
                >
                  Name <span className="text-second">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 sm:py-3 border border-[color-brand]/30 bg-white text-[color-brand] font-light tracking-wide focus:outline-none focus:border-second transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm sm:text-base font-light text-[color-brand] mb-2 tracking-wide"
                >
                  Email <span className="text-second">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 sm:py-3 border border-[color-brand]/30 bg-white text-[color-brand] font-light tracking-wide focus:outline-none focus:border-second transition-colors"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm sm:text-base font-light text-[color-brand] mb-2 tracking-wide"
              >
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 sm:py-3 border border-[color-brand]/30 bg-white text-[color-brand] font-light tracking-wide focus:outline-none focus:border-second transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm sm:text-base font-light text-[color-brand] mb-2 tracking-wide"
              >
                Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 sm:py-3 border border-[color-brand]/30 bg-white text-[color-brand] font-light tracking-wide focus:outline-none focus:border-second transition-colors resize-vertical"
              />
            </div>

            <div>
              <label
                htmlFor="photos"
                className="block text-sm sm:text-base font-light text-[color-brand] mb-2 tracking-wide"
              >
                Attach Photos (Optional)
              </label>
              <input
                type="file"
                id="photos"
                name="photos"
                multiple
                accept="image/*"
                className="w-full px-4 py-2 sm:py-3 border border-[color-brand]/30 bg-white text-[color-brand] font-light tracking-wide focus:outline-none focus:border-second transition-colors file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-light file:bg-second/10 file:text-second hover:file:bg-second/20 file:cursor-pointer"
              />
            </div>

            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="px-8 py-3 sm:px-12 sm:py-4 bg-second text-white font-light tracking-wider text-base sm:text-lg hover:bg-second/90 transition-colors active:scale-95"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
