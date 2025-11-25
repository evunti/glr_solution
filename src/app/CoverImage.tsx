"use client";

import { usePathname } from "next/navigation";

export default function CoverImage() {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";
  const isGalleryPage = pathname.startsWith("/gallery");

  if (isContactPage || isGalleryPage) {
    return null;
  }

  return (
    <div className="relative w-full hidden md:block mt-4">
      <img
        src="/images/cover.jpg"
        alt="Cover"
        className="w-full object-cover object-center h-auto max-h-[80vh] sm:max-h-screen"
      />
      <div className="absolute bottom-5 left-145 max-w-xl">
        <p className="text-sm font-light tracking-wide text-offwhite/90 leading-relaxed">
          GLR Solution combines craftsmanship and innovation to restore the
          beauty and elegance of leather and vinyl furniture, car and RV
          interiors, and more. We use only eco-friendly American materials and
          fine Italian leather to ensure quality, durability, and timeless
          appeal.
        </p>
      </div>
    </div>
  );
}
