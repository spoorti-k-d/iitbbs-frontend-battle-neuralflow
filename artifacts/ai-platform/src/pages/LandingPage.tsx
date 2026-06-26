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
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Partners />
        <Features />
        <BentoFeatures />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
