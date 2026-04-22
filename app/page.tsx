import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import WhyUs from "@/components/WhyUs";
import Mission from "@/components/Mission";
import Works from "@/components/Works";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Nav />
      <Hero />
      <Marquee />
      <WhyUs />
      <Mission />
      <Works />
      <Services />
      <Pricing />
      <Faq />
      <Footer />
    </main>
  );
}
