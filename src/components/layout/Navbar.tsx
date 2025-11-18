"use client";
import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [green, setGreen] = useState(false); // warna nav

  useEffect(() => {
  const handleScroll = () => {
    const hero = document.getElementById("hero");
    const contact = document.getElementById("contact");

    if (!hero || !contact) return;

    const scrollY = window.scrollY;
    const heroHeight = hero.offsetHeight;

    // Cek apakah contact masuk viewport
    const contactRect = contact.getBoundingClientRect();

    // Jika contact sudah terlihat > 20px di layar → navbar putih
    if (contactRect.top <= 100) {
      setGreen(false);
      return;
    }

    // Jika melewati hero → navbar hijau
    if (scrollY > heroHeight - 80) {
      setGreen(true);
    } else {
      setGreen(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        bg-transparent
        backdrop-blur-sm
      "
    >
      <div
        className="
          w-full py-5
          flex items-center justify-between container mx-auto
        "
      >
       {/* Logo */}
        <a href="#hero" className="transition-opacity duration-200">
          <img
            src={green ? "/logo.svg" : "/logo.svg"}
            alt="Kalisloka Logo"
            className="h-8 md:h-12 w-auto transition-all duration-300"
          />
        </a>

        {/* DESKTOP MENU */}
        <div
          className={`
            hidden md:flex items-center space-x-20 text-sm font-medium transition-colors duration-200
            ${green ? "text-[#004035]" : "text-white"}
          `}
        >
          <a href="#about" className="hover:opacity-70 transition">About us</a>
          <a href="#products" className="hover:opacity-70 transition">Products</a>
          <a href="#contact" className="hover:opacity-70 transition">Contact</a>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className={`md:hidden text-3xl transition-colors duration-200
            ${green ? "text-[#004035]" : "text-white"}
          `}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div
          className={`
            md:hidden
            backdrop-blur-md
            px-6 py-4
            flex flex-col space-y-4 justify-center items-center
          ${green ? "text-[#004035]" : "text-white"}`}
        >
          <a onClick={() => setOpen(false)} href="#about" className="hover:opacity-70 transition">
            About us
          </a>
          <a onClick={() => setOpen(false)} href="#products" className="hover:opacity-70 transition">
            Products
          </a>
          <a onClick={() => setOpen(false)} href="#contact" className="hover:opacity-70 transition">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
