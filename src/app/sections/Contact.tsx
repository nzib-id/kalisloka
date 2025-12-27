"use client";

import React from "react";
import Link from "next/link";

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="
        w-full
        bg-[#004035]
        rounded-t-[50px]
        pt-20 md:pt-28
        pb-24
        text-center
        text-[#E6FFCF]
        flex flex-col
        gap-12
      "
    >
      {/* TITLE */}
      <h2
        className="
          text-[40px] md:text-[56px] lg:text-[72px] xl:text-[96px]
          font-heading font-semibold
        "
      >
        Contact Us
      </h2>
      <p className="text-sm md:text-base">
        Tell us what you need. We’ll respond with details.
      </p>

      {/* CTA BUTTONS */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        {/* Email Button */}
        <Link
          href="mailto:hello@kalisloka.com"
          target="_blank"
          className="
            flex items-center gap-3
            bg-[#E6FFCF]
            text-[#004035]
            rounded-full
            px-8 py-3
            text-sm font-medium
            shadow-sm
            hover:bg-white
            transition
          "
        >
          <img src="/icons/mail.svg" className="w-5 h-5 opacity-90" />
          Email Us
        </Link>

        {/* WhatsApp Button */}
        <Link
        href="https://wa.me/6285121383435"
          target="_blank"
          className="
            flex items-center gap-3
            border-[4px] border-[#E8FAD9]
            text-[#E8FAD9]
            rounded-full
            px-8 py-3
            text-sm font-medium
            hover:bg-[#014F3B]
            transition
          "
        >
          <img src="/icons/wa.svg" className="w-5 h-5 opacity-90" />
          Send Whatsapp
        </Link>
      </div>

      <div className="w-full flex justify-center">
        <div className="flex items-center gap-4">
          {/* LABEL */}
          <h2 className="text-3xl md:text-4xl font-semibold whitespace-nowrap">
            Social Media:
          </h2>

          {/* ICONS */}
          <div className="flex items-center gap-4">
            <Link href="https://www.instagram.com/kalisloka/">
              <img
                src="/icons/instagram.svg"
                className="w-5 h-5 opacity-90 hover:opacity-100 transition"
              />
            </Link>

            <Link href="https://x.com">
              <img
                src="/icons/x.svg"
                className="w-5 h-5 opacity-90 hover:opacity-100 transition"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
