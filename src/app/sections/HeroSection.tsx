/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "@/components/ui/Button";

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="
        relative
        w-full
        min-h-[110vh] sm:min-h-[110vh] md:min-h-[120vh] lg:min-h-[135vh]
        flex
        items-center
        overflow-hidden
      "
    >
      {/* HERO IMAGE — absolute full width */}
      <img
        src="/images/hero.png"
        alt="Hero Background"
        className="
          absolute inset-0
          w-full h-full
          object-cover
          object-[center_10%]

          sm:object-[center_5%]

          md:object-[center_10%]
          lg:object-[center_15%]
        "
      />

      {/* OVERLAY agar teks lebih jelas (mirip screenshot) */}
      <div className="absolute inset-0 bg-black/20 md:bg-black/5"></div>

      {/* CONTENT */}
      <div className="relative z-10 container mx-auto ">
        <div className="max-w-[650px]
          text-left
          pt-0
          lg:-mt-10
          xl:-mt-16">

          {/* HEADLINE */}
          <h1
            className="
              text-white
              text-[32px] sm:text-[40px] md:text-[52px] lg:text-[60px]
              font-heading
              leading-tight
              mb-6
            "
          >
            Agricultural Raw Material <br />
            Supply & Trade Partner
          </h1>

          {/* SUBHEADLINE */}
          <p
            className="
              text-[14px] sm:text-[15px] md:text-[16px]
              text-white
              leading-relaxed
              mb-10
              max-w-[520px]
            "
          >
            We supply selected agricultural raw materials with clear specifications, reliable handlings, and structured cooperation for commercial buyers.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Button variant="primary" className="px-6 py-3 text-sm">
              Request Specifications & Pricing
            </Button>

            <Button variant="outline-light" className="px-6 py-3 text-sm">
              Ask About Trial Shipment
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
