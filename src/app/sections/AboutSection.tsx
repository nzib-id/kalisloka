/* eslint-disable @next/next/no-img-element */
import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative w-full pb-20 ">

      {/* BACKGROUND SHAPE */}
      <div
        className="
          absolute container left-1/2 -translate-x-1/2
          w-full max-w-[1400px]

          /* overlap halus */
          -top-8 md:-top-16

          bg-[#E6FFCF]
          rounded-t-[45px] md:rounded-t-[60px]

          /* padding vertikal disesuaikan */
          pt-16 md:pt-24 md:pb-28


        "
      >
        <div className=" mx-auto px-6 md:px-10 max-w-[830px] pt-10">

          {/* LOGO */}
          <div className="flex justify-center mb-12 md:mb-16">
            <img
              src="/images/logo.png"
              alt="Kalisloka"
              className="w-[170px] md:w-[240px] h-auto"
            />
          </div>

          {/* Paragraph 1 */}
          <p
            className="
              text-[15px] md:text-[17px]
              leading-[1.75]
              mb-5 md:mb-7
            "
          >
            Kalisloka is a B2B agricultural raw material supply and trade partner
            operating with a portfolio-based product approach. We focus on clarity,
            consistency, and practical cooperation for commercial buyers in
            the food, herbal, hospitality, and packaging industries.
          </p>

          {/* Paragraph 2 */}
          <p
            className="
              text-[15px] md:text-[17px]
              leading-[1.75]
              mb-10 md:mb-12
            "
          >
            Our operation prioritizes product specification, quality procedure,
            and volume planning based on partner requirements.
          </p>

          {/* CTA */}
          <a
            href="#"
            className="
              font-heading
              font-black
              text-[15px] md:text-[16px]
              text-[#004035]
              hover:opacity-70
              transition
            "
          >
            Download Company Profile ›
          </a>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-[430px] md:h-[520px]"></div>
    </section>
  );
};

export default AboutSection;
