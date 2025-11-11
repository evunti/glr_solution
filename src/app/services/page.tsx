"use client";

export default function Services() {
  return (
    <div className="flex flex-col items-center justify-center">
      <main className="w-full max-w-6xl flex flex-col items-center ">
        <div className="grid grid-cols-3 gap-10 ">
          <div className="flex-start flex-col space-y-4">
            <img
              src="/images/couch.jpg"
              alt="Couch"
              className="w-full h-64 object-cover "
            />
            <h2 className="">Expert Furniture Restoration</h2>
            <p className="">
              We restore and repair leather and vinyl furniture for homes,
              offices, and healthcare facilities.With precision and care, we
              bring back the original look, feel, and comfort of your furniture.
            </p>
            <button>Learn More </button>
          </div>
          <div className="flex-start flex-col space-y-4">
            <img
              src="/images/interior.jpg"
              alt="Interior"
              className="w-full h-64 object-cover "
            />
            <h2>Automotive Interior Repair</h2>
            <p>
              We specialize in the restoration and repair of leather car
              interiors and steering wheels, providing top-quality craftsmanship
              and guaranteed results.Our fast and reliable service brings your
              automotive leather back to life - repairing wear, scratches,
              cracks, and all types of damage with precision and care.
            </p>
            <button className="">Learn More </button>
          </div>
          <div className="flex-start flex-col space-y-4">
            <img
              src="/images/rv.jpg"
              alt="RV"
              className="w-full h-64 object-cover "
            />
            <h2>RV & Motor Home Upholstery</h2>
            <p>
              Transform your RV's interior with custom upholstery.Our
              experienced craftsmen can revive worn seats or create a fresh new
              design using premium materials for a refined and comfortable
              travel experience.
            </p>
            <button>Learn More </button>
          </div>
        </div>
      </main>
    </div>
  );
}
