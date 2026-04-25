import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="relative py-24 px-6 border-t border-border mt-12 overflow-hidden cta-warm-fade">
      {/* Strong CTA glow */}
      <div className="cta-glow" style={{ top: '35%' }} />
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full border border-border bg-muted/40 text-xs text-neutral-300 mb-8">
            Contact Us
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-white" style={{ fontFamily: "var(--font-heading)" }}>
            Let&apos;s Turn Your
            <br />
            Dream Into <span className="text-accent">Reality</span>
          </h2>
          <p className="mt-6 text-neutral-400 max-w-md mx-auto">
            We bring your vision to life with creativity and precision. Let&apos;s make it happen.
          </p>
          <a href="mailto:hello@foremark.dev" className="lets-talk-btn mt-10 inline-flex items-center gap-2 text-white font-medium px-8 py-3.5 transition-all duration-300">
            Book A Call <span className="lets-talk-arrow">→</span>
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 mb-12 text-sm text-neutral-400">
          <a href="#why-us" className="hover:text-white transition">Why Us</a>
          <a href="#mission" className="hover:text-white transition">Mission</a>
          <a href="#works" className="hover:text-white transition">Works</a>
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        <div className="flex flex-col items-center gap-4 pt-10 border-t border-border text-sm text-neutral-500">
          <Image src="/assets/logo-foremark.png" alt="Foremark Technologies" width={180} height={50} className="h-10 w-auto" />
          <p className="text-xs">Copyright © Foremark Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
