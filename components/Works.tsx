"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    name: "Regius Care",
    desc: "A complete website for a premium salon and hair care brand. Built to attract walk-ins, showcase services, and let customers book appointments online.",
    preview: "/assets/regius-preview.png",
  },
  {
    name: "CenterSpread",
    desc: "A lifestyle magazine platform empowering people and businesses — editorial CMS, fast delivery, and a rich reading experience.",
    preview: "/assets/centerspread-preview.png",
  },
  {
    name: "Sharma & Associates",
    desc: "A polished digital presence for a leading law firm with 25+ years of experience — professional, authoritative, lead-ready.",
    preview: "/assets/sharma-preview.png",
  },
];

const stats = [
  { k: "15+", v: "Projects Delivered" },
  { k: "100%", v: "Client Retention" },
  { k: "5+", v: "Industries Served" },
  { k: "3x", v: "Avg. Client Growth" },
];

export default function Works() {
  const [active, setActive] = useState(0);
  const p = projects[active];

  return (
    <section id="works" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-block px-4 py-1.5 rounded-full border border-border bg-muted/40 text-xs text-neutral-300 mb-6">
            Work That Makes Us Proud
          </div>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Recent Works, <span className="text-neutral-500">Notable Impact</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          <div className="flex flex-col gap-3">
            {projects.map((proj, i) => (
              <button
                key={proj.name}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`text-left p-6 rounded-2xl border transition ${
                  active === i ? "border-accent/40 bg-accent/5" : "border-border bg-muted/20 hover:bg-muted/40"
                }`}
              >
                <h3 className={`text-2xl font-medium mb-2 ${active === i ? "text-accent" : ""}`}>
                  {proj.name}
                </h3>
                <AnimatePresence>
                  {active === i && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-neutral-400 text-sm leading-relaxed overflow-hidden"
                    >
                      {proj.desc}
                    </motion.p>
                  )}
                </AnimatePresence>
              </button>
            ))}
          </div>

          <div className="rounded-2xl border border-border bg-muted/30 p-3 overflow-hidden">
            <div className="flex items-center gap-1.5 px-2 py-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="aspect-[4/3] rounded-xl overflow-hidden relative bg-black"
              >
                <Image
                  src={p.preview}
                  alt={p.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 600px, 100vw"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <motion.div
              key={s.v}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-3xl border border-border p-8 bg-muted/20 text-center"
            >
              <div className="text-4xl md:text-5xl font-semibold text-accent">{s.k}</div>
              <p className="text-neutral-400 text-sm mt-2">{s.v}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
