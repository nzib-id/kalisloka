
import React from "react";

const points = [
  {
    label: "Volume",
    text: "flexible based on availability & planning",
  },
  {
    label: "Shipment",
    text: "aligned with destination-based logistics",
  },
  {
    label: "Documentation",
    text: "standard export documentation",
  },
  {
    label: "Planning",
    text: "available for long-term cooperation",
  },
];

const SupplyCooperationSection: React.FC = () => {
  return (
    <section
      id="cooperation"
      className="w-full bg-[#E6FFCF] pt-20 md:pt-28 pb-20 md:pb-28 container mx-auto"
    >
      {/* TITLE */}
      <div className="text-center mb-10 md:mb-14">
        <h2 className="text-[40px] md:text-[56px] lg:text-[72px] xl:text-[96px] font-heading font-semibold text-[#004035] mb-4 tracking-tight">
          Supply & Cooperation
        </h2>
      </div>

      {/* CARD BOX */}
      <div
        className="
          mx-auto
          max-w-[850px]
          bg-[#E6FFCF]
          border-[3px] border-[#004035]
          rounded-3xl
          px-6 md:px-10
          py-10 md:py-12
          shadow-sm
        "
      >
        {/* ROW LIST */}
        <div className="flex flex-col space-y-3">
          {points.map((item, idx) => (
            <div
              key={idx}
              className="
                text-sm md:text-base
                flex items-start
                border-b border-[#A4BE8B]/60
                pb-4
              "
            >
              {/* LABEL — responsive width strategy */}
              <span
                className="
                  font-bold font-heading text-[#004035]
                  whitespace-nowrap pr-3
                  min-w-[95px]
                  max-w-[130px]
                  md:min-w-0
                  md:max-w-none

                  text-[15px] md:text-[20px] lg:text-[26px] xl:text-[28px]
                "
              >
                {item.label}:
              </span>

              {/* TEXT */}
              <span
                className="
                  text-[#004035]
                  flex-1 leading-relaxed
                  text-[12px] sm:text-[15px] md:text-[18px]
                "
              >
                {item.text}
              </span>
            </div>
          ))}
        </div>




        {/* FOOTNOTE */}
        <p className="text-center text-gray-600 text-[12px] mt-6 italic">
          Your shipments may be available depending on requirements.
        </p>
      </div>
    </section>
  );
};

export default SupplyCooperationSection;
