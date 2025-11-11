"use client";

export default function Services() {
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
    <div className="flex flex-col items-center pt-16 pb-24">
      <main className="w-full max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-10">
          <h1 className="text-5xl sm:text-6xl font-light text-[#2a2b2b] ">
            Our Services
          </h1>
          <div className="w-20 h-1 bg-[#2a2b2b] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col group">
              <div className="relative overflow-hidden mb-6">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="flex flex-col grow space-y-4">
                <h2 className="text-2xl font-light text-[#2a2b2b] tracking-tight">
                  {service.title}
                </h2>
                <p className="text-gray-700 leading-relaxed font-light grow">
                  {service.description}
                </p>

                <button className="self-start text-[#2a2b2b] font-light border-b border-[#2a2b2b] pb-1 hover:border-[#444] hover:text-[#8f8c8c] transition-colors duration-300">
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
