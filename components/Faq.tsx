"use client";
import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What makes Foremark different from other web agencies?",
    a: "We're engineering-first. Most agencies start from a template and bolt on features. We architect for the long run — performance, scalability, and maintainability are non-negotiable from day one. Every project gets a dedicated technical lead.",
  },
  {
    q: "How much does a website or web app cost?",
    a: "Our builds start at ₹7,500 and scale by scope. A simple marketing site is at the lower end; full web apps with auth, dashboards, and integrations are priced per project after a discovery call.",
  },
  {
    q: "What is the Foremark Care Plan and do I need it?",
    a: "It's our monthly maintenance plan at ₹1,199/month — hosting, 99.9% uptime monitoring, weekly backups, SSL, and up to 3 change requests per month. If you have a live website, you need someone keeping it secure and online. That's us.",
  },
  {
    q: "How long does it take to build a website?",
    a: "Most marketing sites go live in 2–3 weeks. Custom web apps typically take 6–12 weeks depending on scope. We share a detailed timeline after the kickoff call so there are no surprises.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-block px-4 py-1.5 rounded-full border border-border bg-muted/40 text-xs text-neutral-300 mb-6">
            Need to Know
          </div>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <button
              key={f.q}
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left p-6 rounded-2xl border border-border bg-muted/30 hover:bg-muted/50 transition"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-medium text-neutral-400">{f.q}</span>
                <Plus
                  size={18}
                  className={`shrink-0 transition-transform duration-300 ${open === i ? "rotate-45" : ""} text-accent`}
                />
              </div>
              <div
                className={`grid transition-all duration-300 ${
                  open === i ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden text-neutral-300 text-sm leading-relaxed">
                  {f.a}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
