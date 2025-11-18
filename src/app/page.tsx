import React from "react";

import Layout from "@/components/layout/Layout";

// Sections
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ProductSection from "./sections/ProductSection";
import ServiceSection from "./sections/ServiceSection";
import ContactSection from "./sections/Contact";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ProductSection />
      <ServiceSection />
      <ContactSection />
    </Layout>
  );
};

export default HomePage;
