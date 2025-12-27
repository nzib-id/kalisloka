/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Link from "next/link";

const products = [
  {
    title: "Banana Leaf",
    image: "/images/banana.png",
    desc: "Food-grade banana leaf for packaging, culinary, and horeca.",
    points: [
      "Sheets / rolls",
      "Clean & graded",
      "Adjustable cutting by request",
      "Food wrapping use",
      "Fresh handling",
    ],
    Link: "https://banana.kalisloka.com",
  },
  {
    title: "Fresh Ginger",
    image: "/images/ginger.png",
    desc: "Cleaned and graded fresh ginger supplied as raw material for processing, extraction, and blending.",
    points: [
      "Clean & graded",
      "Suitable for food & beverages",
      "Herbal processing ready",
      "Traceable sourcing",
      "Fresh handling",
    ],
    Link: "https://ginger.kalisloka.com",
  },
];

const ProductSection: React.FC = () => {
  return (
    <section
      id="products"
      className="w-full container mx-auto bg-[#E6FFCF] pt-40 md:pt-24 pb-20 md:pb-28"
    >
      {/* TITLE */}
      <div className="container mx-auto px-6 md:px-10 text-center max-w-4xl">
        <h2 className="text-[40px] md:text-[56px] lg:text-[72px] xl:text-[96px] font-heading font-semibold text-[#004035] mb-4 tracking-tight">
          Our Products
        </h2>
        <p className=" text-[15px] md:text-[16px] mb-12">
          Explore agricultural raw materials in our growing portfolio.
        </p>
      </div>

      {/* GRID PRODUCT */}
      <div className="container mx-auto px-6 md:px-10">
        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-10
          place-items-start
          items-stretch
          max-w-[850px]
          mx-auto
                  "
        >
          {products.map((item, idx) => (
            <Link
              href={item.Link}
              key={idx}
              target="_blank"
              className="
                group
                w-full
                max-w-[460px]
                rounded-3xl
                border-[4px] border-[#004035]

                px-6 py-10
                transition-all duration-300 ease-in-out

                hover:bg-[#004035]
                hover:text-[#E6FFCF]
                hover:border-[#004035]
                hover:shadow-xl
              "
            >
              <div className="flex flex-col items-center gap-4 md:gap-7">
                {/* IMAGE WRAPPER */}
                <div
                  className="
                    rounded-3xl
                    shadow-md overflow-hidden
                    border-4 border-[#004035]
                    transition-all duration-200
                    group-hover:border-[#E6FFCF]
                  "
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      w-32 md:w-44 h-32 md:h-44 object-cover
                      transition-all duration-300
                      group-hover:brightness-110
                    "
                  />
                </div>

                {/* TITLE */}
                <h3
                  className="
                    text-3xl font-heading font-bold text-[#004035]
                    text-center
                    transition-all duration-300

                    group-hover:text-[#E6FFCF]
                  "
                >
                  {item.title}
                </h3>

                {/* DESC */}
                <p
                  className="
                     text-[12px] md:text-[14px]
                    leading-relaxed text-center
                    transition-all duration-300

                    group-hover:text-[#E6FFCF]
                  "
                >
                  {item.desc}
                </p>

                <div className="w-full mb-12 px-3 text-xs md:text-base">
                  <p
                    className="

                      font-semibold
                      text-[#004035]
                      mb-2 md:mb-3
                      transition-all duration-300
                      group-hover:text-[#E6FFCF]
                    "
                  >
                    Key Points:
                  </p>

                  {/* LIST */}
                  <ul
                    className="
                      font-semibold
                      list-disc ml-5
                      space-y-2 md:space-y-3

                      transition-all duration-300
                      group-hover:text-[#E6FFCF]
                    "
                  >
                    {item.points.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <p
                  className="
                    inline-flex items-baseline gap-1
                    text-md md:text-xl font-bold font-heading
                    text-[#004035]
                    tracking-wide
                    transition-all duration-300
                    group-hover:text-[#E6FFCF]
                  "
                >
                  <span>View Full Product Details</span>

                  <img
                    src="/icons/arrow.svg"
                    alt=""
                    className="
                      w-[0.85em] h-[0.85em]
                      translate-y-[0.08em]
                    "
                  />
                </p>

              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
