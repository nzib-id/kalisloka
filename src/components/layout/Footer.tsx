import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      className="
        w-full
        bg-[#004035]
        text-[#E8FAD9]
        pt-10 pb-14
      "
    >
      {/* DIVIDER LINE */}
      <div className="container mx-auto px-6 md:px-10">
        <div className="w-full h-[1px] bg-[#E8FAD9]/40 mb-10"></div>
      </div>

      <div className="container mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2">

        {/* LEFT SIDE */}
        <div>
          <img src="/images/logo-bottom.svg" className="w-40 mb-4" />

          <p className="text-sm opacity-90 mb-4">
            Agricultural Raw Material Supply & Trade Partner.
          </p>

          <p className="text-sm opacity-90">Email: hello@kalisloka.com</p>
          <p className="text-sm opacity-90">
            Phone / WhatsApp: +62-812-3456-7890
          </p>
        </div>

        {/* RIGHT SIDE (OFFICE LOCATION) */}
        <div className="flex md:justify-end mt-8 md:mt-0">
          <div className="text-right">
            <p className="text-sm opacity-80">Office Location</p>
            <p className="text-sm opacity-90">Cianjur, West Java</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
