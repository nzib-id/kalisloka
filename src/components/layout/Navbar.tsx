/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
  cta?: boolean;
};

const NAV_ITEMS: NavItem[] = [
  { label: "About us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Quality & Handling", href: "#services" },
  { label: "Supply & Cooperation", href: "#cooperation" },
  { label: "Send Inquiry", href: "#contact", cta: true },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [green, setGreen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      const about = document.getElementById("about");
      const contact = document.getElementById("contact");

      if (!about || !contact) return;

      const scrollY = window.scrollY;
      const aboutTop = about.offsetTop - 120;
      const contactTop = contact.offsetTop - 150;

      if (scrollY >= contactTop) {
        setGreen(false);
      } else if (scrollY >= aboutTop) {
        setGreen(true);
      } else {
        setGreen(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  if (!mounted) return null;

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
        <div className="container mx-auto">
          <div
            className={`
              w-full transition-all duration-500 flex flex-col
              ${
                green
                  ? "bg-[#d0e9bd]/80 px-6  rounded-full backdrop-blur-md mt-3 shadow-sm"
                  : "bg-transparent mt-5"
              }
            `}
          >
            <div className="flex items-center justify-between w-full py-4 md:py-5">
              {/* LOGO */}
              <Link href="/" onClick={() => setOpen(false)}>
                <img
                  src={green ? "/logo-green.svg" : "/logo-white.svg"}
                  alt="Kalisloka Logo"
                  className="h-5 md:h-6 w-auto transition-all duration-300"
                />
              </Link>

              {/* DESKTOP MENU (incl. CTA) */}
              <div
                className={`
                  hidden lg:flex items-center gap-10 text-sm  font-medium
                  ${green ? "text-[#004035]" : "text-white"}
                `}
              >
                {NAV_ITEMS.map((item) =>
                  item.cta ? (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`${
                        green
                          ? "bg-[#004035] text-[#E6FFCF]"
                          : "bg-[#fff] text-[#092823]"
                      } rounded-full text-sm font-semibold px-3 lg:px-5 py-2 hover:opacity-90 transition-all`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="hover:opacity-70 transition"
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </div>

              {/* MOBILE BURGER */}
              <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                className={`lg:hidden text-3xl ${
                  green ? "text-[#004035]" : "text-white"
                }`}
                onClick={() => setOpen((v) => !v)}
              >
                {open ? "✕" : "☰"}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU (animated) */}
      <div
        className={`
          lg:hidden fixed inset-0 z-50 flex items-center justify-center
          transition-all duration-300 ease-out
          ${
            open
              ? green
                ? "bg-[#d0e9bd]/50 text-[#004035] backdrop-blur-md opacity-100 pointer-events-auto"
                : "bg-black/50 text-white backdrop-blur-md opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
        onClick={() => setOpen(false)}
      >
        <div
          className={`
            relative w-full h-full flex flex-col items-center justify-center
            transition-all duration-300 ease-out
            ${open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
          `}
        >
          {/* CLOSE BUTTON */}
          <button
            type="button"
            onClick={() => setOpen(false)}
            className={`
              absolute top-6 right-6 text-3xl
              ${green ? "text-[#004035]" : "text-white"}
            `}
            aria-label="Close menu"
          >
            ✕
          </button>

          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className={
                item.cta
                  ? `${
                      green
                        ? "bg-[#004035] text-[#E6FFCF]"
                        : "bg-[#E6FFCF] text-[#004035]"
                    } mt-4 rounded-full px-6 py-3 text-xl font-semibold hover:opacity-90 transition`
                  : "text-2xl font-medium mb-6 hover:opacity-80 transition"
              }
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
