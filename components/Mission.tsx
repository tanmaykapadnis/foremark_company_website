"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const words = [
  { t: "We", c: "white" },
  { t: "Drive", c: "white" },
  { t: "Businesses", c: "accent" },
  { t: "To", c: "white" },
  { t: "The", c: "white" },
  { t: "Forefront", c: "accent" },
  { t: "Of", c: "fade" },
  { t: "The", c: "fade" },
  { t: "Industries", c: "fade" },
  { t: "Through", c: "fade" },
  { t: "Comprehensive", c: "fade" },
  { t: "Development", c: "fade" },
  { t: "&", c: "fade" },
  { t: "Automation.", c: "fade" },
] as const;

function WordReveal({ word, index, total, scrollYProgress }: {
  word: typeof words[number];
  index: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(scrollYProgress, [start * 0.5 + 0.1, end * 0.5 + 0.2], [0.1, 1]);
  const blur = useTransform(scrollYProgress, [start * 0.5 + 0.1, end * 0.5 + 0.2], [6, 0]);
  const blurFilter = useTransform(blur, (v) => `blur(${v}px)`);
  const color =
    word.c === "accent" ? "text-accent" :
    word.c === "fade" ? "text-neutral-500" : "text-white";
  return (
    <motion.span style={{ opacity, filter: blurFilter }} className={color}>
      {word.t}
    </motion.span>
  );
}

export default function Mission() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  return (
    <section id="mission" ref={ref} className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-block px-4 py-1.5 rounded-full border border-border bg-muted/40 text-xs text-neutral-300 mb-10">
          Our Mission
        </div>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] flex flex-wrap justify-center gap-x-4 gap-y-2">
          {words.map((w, i) => (
            <WordReveal
              key={i}
              word={w}
              index={i}
              total={words.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </h2>
        <p className="mt-10 text-neutral-400 max-w-xl mx-auto">
          We solve complex technical problems through thoughtful engineering, modern software architecture, and intelligent automation. Building technology that scales.
        </p>
        <a href="#contact" className="mt-8 inline-flex items-center gap-1.5 text-accent hover:brightness-125 transition text-lg">
          Book A Call <ArrowUpRight size={18} />
        </a>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="mt-20 flex justify-center"
        >
          <Image src="/assets/arrow-down.svg" alt="" width={60} height={80} className="opacity-80" />
        </motion.div>
      </div>
    </section>
  );
}
