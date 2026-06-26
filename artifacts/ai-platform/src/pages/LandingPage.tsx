import { useScrollReveal } from "../hooks/useScrollReveal";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import Features from "../components/Features";
import BentoFeatures from "../components/BentoFeatures";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function LandingPage() {
  useScrollReveal();

  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Partners />
        <div className="section-connector" aria-hidden="true" />
        <Features />
        <div className="section-connector" aria-hidden="true" />
        <BentoFeatures />
        <div className="section-connector" aria-hidden="true" />
        <Pricing />
        <div className="section-connector" aria-hidden="true" />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
