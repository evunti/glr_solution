"use client";

import Link from "next/link";

export default function Home() {
  const services = [
    {
      title: "Expert Furniture Restoration",
      description:
        "We restore and repair leather and vinyl furniture for homes, offices, and healthcare facilities. With precision and care, we bring back the original look, feel, and comfort of your furniture.",
      image: "/images/couch.jpg",
      alt: "Couch",
      link: "/services/furniture",
    },
    {
      title: "Automotive Interior Repair",
      description:
        "We specialize in the restoration and repair of leather car interiors and steering wheels, providing top-quality craftsmanship and guaranteed results. Our fast and reliable service brings your automotive leather back to life - repairing wear, scratches, cracks, and all types of damage with precision and care.",
      image: "/images/interior.jpg",
      alt: "Interior",
      link: "/services/automotive",
    },
    {
      title: "RV & Motor Home Upholstery",
      description:
        "Transform your RV's interior with custom upholstery. Our experienced craftsmen can revive worn seats or create a fresh new design using premium materials for a refined and comfortable travel experience.",
      image: "/images/rv.jpg",
      alt: "RV",
      link: "/services/upholstery",
    },
  ];

  return (
    <div className="flex flex-col items-center pt-8 sm:pt-16 pb-12 sm:pb-24">
      <main className="w-full max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-15">
          <h1 className="text-5xl font-light tracking-wide sm:tracking-wider text-[color-brand] mb-2 sm:mb-3 ">
            Expert Leather Repair & Reupholstery
          </h1>
          <div className="w-16 sm:w-24 h-1 bg-[color-brand] mx-auto mb-4 sm:mb-6"></div>
          <div className="flex items-center justify-center gap-4 max-w-3xl mx-auto px-2">
            <div className="grow h-px bg-black/90"></div>
            <p className="text-md text-black/90 font-light tracking-wide whitespace-nowrap">
              Premium Restoration Services
            </p>
            <div className="grow h-px bg-black/90"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 sm:gap-10">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col group">
              <div className="relative overflow-hidden mb-4 sm:mb-6">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="flex flex-col grow space-y-3 sm:space-y-4">
                <h2 className="text-xl sm:text-2xl font-light text-[color-brand] tracking-wide">
                  {service.title}
                </h2>
                <p className="text-sm sm:text-base text-[color-brand]/70 leading-relaxed font-light grow">
                  {service.description}
                </p>

                <Link
                  href={service.link}
                  className="self-start text-sm sm:text-base text-[color-brand] font-light tracking-wide border-b border-[color-brand] pb-1 py-2 hover:border-[color-brand]/70 hover:text-[color-brand]/70 transition-colors duration-300"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
