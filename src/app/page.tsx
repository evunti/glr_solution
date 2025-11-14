"use client";

export default function Home() {
  const services = [
    {
      title: "Expert Furniture Restoration",
      description:
        "We restore and repair leather and vinyl furniture for homes, offices, and healthcare facilities. With precision and care, we bring back the original look, feel, and comfort of your furniture.",
      image: "/images/couch.jpg",
      alt: "Couch",
    },
    {
      title: "Automotive Interior Repair",
      description:
        "We specialize in the restoration and repair of leather car interiors and steering wheels, providing top-quality craftsmanship and guaranteed results. Our fast and reliable service brings your automotive leather back to life - repairing wear, scratches, cracks, and all types of damage with precision and care.",
      image: "/images/interior.jpg",
      alt: "Interior",
    },
    {
      title: "RV & Motor Home Upholstery",
      description:
        "Transform your RV's interior with custom upholstery. Our experienced craftsmen can revive worn seats or create a fresh new design using premium materials for a refined and comfortable travel experience.",
      image: "/images/rv.jpg",
      alt: "RV",
    },
  ];

  return (
    <div className="flex flex-col items-center pt-8 sm:pt-16 pb-12 sm:pb-24">
      <main className="w-full max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-20">
          <h1 className="text-3xl sm:text-5xl font-light tracking-wide sm:tracking-wider text-[color-brand] mb-3 sm:mb-4 leading-tight">
            Expert Leather Repair & Reupholstery
          </h1>
          <div className="w-16 sm:w-24 h-1 bg-[color-brand] mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-xl text-[color-brand]/70 font-light tracking-wide max-w-3xl mx-auto px-2">
            Premium restoration services for furniture, automotive interiors,
            and RV upholstery
          </p>
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

                <button className="self-start text-sm sm:text-base text-[color-brand] font-light tracking-wide border-b border-[color-brand] pb-1 py-2 hover:border-[color-brand]/70 hover:text-[color-brand]/70 transition-colors duration-300">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
