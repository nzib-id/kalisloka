/* eslint-disable @next/next/no-img-element */
import React from "react";

const services = [
  {
    title: "Product\nSourcing &\nCollection",
    icon: "/icons/sourcing.svg",
  },
  {
    title: "Cleaning &\nSorting",
    icon: "/icons/cleaning.svg",
  },
  {
    title: "Pre-\nShipment\nCheck",
    icon: "/icons/shipment.svg",
  },
  {
    title: "Packing &\nLabelling",
    icon: "/icons/packing.svg",
  },
];

const ServiceSection: React.FC = () => {
  return (
    <section
      id="services"
      className="container mx-auto w-full  bg-[#E6FFCF] pt-20 md:pt-24 pb-20 md:pb-28"
    >
      {/* TITLE */}
      <div className="mx-auto px-6 md:px-10 text-center max-w-4xl">
        <h2 className="text-[40px] md:text-[56px] lg:text-[72px] xl:text-[96px] font-heading font-semibold text-[#004035] mb-4 tracking-tight">
          Quality & Handling
        </h2>

        {/* SUBTEXT */}
        <p className="text-[15px] md:text-[16px] mb-12 leading-relaxed text-left md:w-2/3 mx-auto">
          Our supply flow is structured for clarity and reliability, with focus
          on handling and specification rather than volume scaling alone.
        </p>
      </div>

      {/* GRID WRAPPER */}
      <div className="container mx-auto px-6 md:px-10 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">

        {services.map((item, index) => (
          <div
            key={index}
            className="
              flex flex-col items-center justify-center
              rounded-3xl
              border-[4px] border-[#004035]
              h-[160px] md:h-[200px]
              text-center
              p-4
              whitespace-pre-line
              shadow-sm
              transition-all
              hover:shadow-md hover:-translate-y-1
            "
          >
            {/* ICON */}
            {/* Komentar: Icon bisa SVG atau PNG. Ubah ukuran di bawah bila perlu */}
            <img
              src={item.icon}
              alt={item.title}
              className="w-10 h-10 object-contain mb-3 opacity-80"
            />

            {/* TITLE */}
            {/* Komentar: whitespace-pre-line untuk support text multi-baris */}
            <p className="text-[#0E4D2A] text-sm font-semibold leading-tight">
              {item.title}
            </p>
          </div>
        ))}

      </div>

      {/* FOOTNOTE */}
      <p className="text-center text-gray-600 text-[13px] mt-6">
        *Handling requirements can be aligned based on partner needs.
      </p>
    </section>
  );
};

export default ServiceSection;
