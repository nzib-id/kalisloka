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
        min-h-[110vh] sm:min-h-[110vh] md:min-h-[120vh] lg:min-h-[125vh]
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
      <div className="absolute inset-0 bg-black/20 md:bg-black/20"></div>

      {/* CONTENT */}
      <div className="relative z-10 container mx-auto ">
        <div
          className="max-w-[650px]
          text-left h-screen flex flex-col justify-center pb-[200px] lg:pb-[300px]
          "
        >
          {/* HEADLINE */}
          <h1
            className="
              text-white
              text-3xl lg:text-6xl
              font-heading
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
              max-w-xl
            "
          >
            We supply selected agricultural raw materials with clear
            specifications, reliable handlings, and structured cooperation for
            commercial buyers.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a href="#products" className="rounded-full">
              <Button variant="primary" className="px-6 py-3 text-sm">
                Discover Products
              </Button>
            </a>
            <a href="#about" className="rounded-full">
              <Button variant="secondary" className="px-6 py-3 text-sm">
                Learn More
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
