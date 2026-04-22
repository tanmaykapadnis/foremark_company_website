"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const items = [
  {
    lottie: "/assets/lottie-brain.json",
    title: "Engineering First",
    desc: "We architect solutions correctly before development begins. Strong technical foundation is non-negotiable.",
  },
  {
    lottie: "/assets/lottie-thumbsup.json",
    title: "Scalable Systems",
    desc: "All systems are built with long-term scalability in mind — from infrastructure to application architecture.",
  },
  {
    lottie: "/assets/lottie-staff.json",
    title: "Product Thinking",
    desc: "Every system we build is treated as a product, not just a project. Ownership mindset in everything we do.",
  },
];

function LottieIcon({ src }: { src: string }) {
  const [data, setData] = useState<object | null>(null);
  useEffect(() => {
    fetch(src).then((r) => r.json()).then(setData);
  }, [src]);
  if (!data) return <div className="w-10 h-10" />;
  return <Lottie animationData={data} loop className="w-10 h-10" />;
}

export default function WhyUs() {
  return (
    <section id="why-us" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-block px-4 py-1.5 rounded-full border border-border bg-muted/40 text-xs text-neutral-300 mb-6">
            Why Us
          </div>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl mx-auto leading-[1.1]">
            Experience the Benefits of Our Expertise
          </h2>
          <p className="mt-5 text-neutral-400 text-sm">That drives impactful gain powerful results</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {items.map(({ lottie, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden p-8 rounded-[28px] border border-white/[0.08] bg-[#0a0a0a] shadow-[inset_0_1px_rgba(255,255,255,0.1)] transition text-center"
            >
              {/* Top Panel Layer (Dot Grid + Glow) */}
              <div className="absolute top-0 left-0 w-full h-[120px] border-b border-white/[0.04]">
                <div className="absolute inset-0 dot-grid opacity-60" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[80%] bg-accent/20 blur-[50px] rounded-full pointer-events-none" />
              </div>

              {/* Icon Circle */}
              <div 
                className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform group-hover:scale-105"
                style={{ 
                  background: 'radial-gradient(circle at 30% 30%, #e87811, #a94f00)', 
                  boxShadow: '0 0 32px rgba(232,120,17,0.25)', 
                  border: '1px solid rgba(255,255,255,0.15)' 
                }}
              >
                <LottieIcon src={lottie} />
              </div>

              {/* Content block */}
              <h3 
                className="relative z-10 text-xl font-medium mb-3 text-[#e5e5e5] tracking-tight" 
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {title}
              </h3>
              <p className="relative z-10 text-neutral-400 text-sm leading-[1.6] max-w-[90%] mx-auto">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
