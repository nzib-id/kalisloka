"use client";

import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [green, setGreen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      const hero = document.getElementById("hero");
      const about = document.getElementById("about");
      const contact = document.getElementById("contact");

      if (!hero || !about || !contact) return;

      const scrollY = window.scrollY;

      const aboutTop = about.offsetTop - 120;
      const contactTop = contact.offsetTop - 150;

      if (scrollY >= contactTop) {
        setGreen(false);
        return;
      }

      if (scrollY >= aboutTop && scrollY < contactTop) {
        setGreen(true);
        return;
      }

      setGreen(false);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  if (!mounted) return null;

  return (
    <>
      {/* NAV — removed pointer-events-none so mobile overlay can receive clicks reliably */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm">
        <div className=" container mx-auto">
          {/* NAVBAR SHELL */}
          <div
            className={`
              pointer-events-auto
              w-full
              transition-all duration-500
              flex flex-col
              ${green
                ? "bg-[#d0e9bd]/80 px-6 border border-[#A3D6A1]/30 rounded-full backdrop-blur-md mt-3 shadow-sm"
                : "bg-transparent border-transparent mt-5"
              }
            `}
          >
            {/* NAV CONTENT */}
            <div className="flex items-center justify-between w-full py-4 md:py-5">
              {/* LOGO */}
              <a href="#hero" className="transition-opacity duration-300">
                <img
                  src={green ? "/logo.svg" : "/logo.svg"}
                  alt="Kalisloka Logo"
                  className="h-8 md:h-10 w-auto transition-all duration-300"
                />
              </a>

              {/* DESKTOP MENU */}
              <div
                className={`
                  hidden md:flex items-center space-x-20 text-sm font-medium
                  transition-colors duration-300
                  ${green ? "text-[#004035]" : "text-white"}
                `}
              >
                <a href="#about" className="hover:opacity-70 transition">About us</a>
                <a href="#products" className="hover:opacity-70 transition">Products</a>
                <a href="#contact" className="hover:opacity-70 transition">Contact</a>
              </div>

              {/* MOBILE BURGER */}
              <button
                type="button"
                aria-label={open ? "Close menu" : "Open menu"}
                className={`
                  md:hidden text-3xl transition-colors duration-300
                  ${green ? "text-[#004035]" : "text-white"}
                `}
                onClick={() => setOpen((v) => !v)}
              >
                {open ? "✕" : "☰"}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY — placed outside <nav> so it's not blocked by parent pointer settings */}
      {open && (
        <div
          // overlay covers full screen and always receives pointer events
          className={`
            md:hidden fixed inset-0 z-50 flex items-center justify-center
            ${green ? "bg-[#d0e9bd] text-[#004035]" : "bg-black/80 text-white backdrop-blur-md"}
          `}
          // clicking on the overlay background (outside menu column) closes the menu
          onClick={() => setOpen(false)}
        >
          {/* menu panel — stopPropagation so clicks inside don't close */}
          <div
            className="w-full h-full flex flex-col items-center justify-center p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button top-right inside panel (redundant with overlay click) */}
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

            <a
              href="#about"
              onClick={() => setOpen(false)}
              className="text-2xl font-medium mb-6 hover:opacity-80 transition"
            >
              About us
            </a>

            <a
              href="#products"
              onClick={() => setOpen(false)}
              className="text-2xl font-medium mb-6 hover:opacity-80 transition"
            >
              Products
            </a>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="text-2xl font-medium mb-6 hover:opacity-80 transition"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
