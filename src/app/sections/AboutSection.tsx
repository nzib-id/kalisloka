/* eslint-disable @next/next/no-img-element */
import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative w-full pb-20">

      {/* FULL-WIDTH BACKGROUND SHAPE */}
      <div
        className="
          absolute left-0 top-0
          w-full
          -mt-10 md:-mt-16   /* overlap halus */

          bg-[#E6FFCF]
          rounded-t-[45px] md:rounded-t-[60px]

          pt-16 md:pt-24 pb-20 md:pb-28
        "
      >
        {/* CONTENT WRAPPER (center + limit width) */}
        <div className="max-w-[830px] mx-auto px-6 md:px-10">

          {/* LOGO */}
          <div className="flex justify-center mb-12 md:mb-16 pt-6">
            <img
              src="/images/logo.svg"
              alt="Kalisloka"
              className="w-[170px] md:w-[390px] h-auto"
            />
          </div>

          {/* PARAGRAPH 1 */}
          <p className="text-[15px] md:text-[17px] leading-[1.75] mb-5 md:mb-7">
            Kalisloka is a B2B agricultural raw material supply and trade partner
            operating with a portfolio-based product approach. We focus on clarity,
            consistency, and practical cooperation for commercial buyers in the food,
            herbal, hospitality, and packaging industries.
          </p>

          {/* PARAGRAPH 2 */}
          <p className="text-[15px] md:text-[17px] leading-[1.75] mb-10 md:mb-12">
            Our operation prioritizes product specification, quality procedure,
            and volume planning based on partner requirements.
          </p>

          {/* CTA */}
          <a
            href="#"
            className="
              font-heading font-black
              text-[15px] md:text-[16px]
              text-[#004035]
              hover:opacity-70 transition
            "
          >
            Download Company Profile ›
          </a>
        </div>
      </div>

      {/* SPACER so next section doesn't overlap */}
      <div className="h-[450px] md:h-[540px]" />
    </section>
  );
};

export default AboutSection;
