import { Check } from "lucide-react";

const plans = [
  {
    name: "Foremark Care Plan",
    price: "₹ 1,199",
    cadence: "/month",
    subtitle: "We host, monitor and maintain your website every month. You focus on your business, we handle the rest.",
    features: [
      "High-performance servers",
      "99.9% uptime monitoring",
      "3 change requests/month",
      "Weekly automated backups",
      "SSL certificate included",
      "Weekly health report",
      "End-to-End Domain Setup",
    ],
    featured: false,
  },
  {
    name: "Custom Websites & Web Apps",
    price: "₹ 7,500",
    cadence: "Starting at",
    subtitle: "From a simple business website to a full web application. Every project is scoped and priced to your requirement.",
    features: [
      "Custom design & dev",
      "Fast & secure delivery",
      "Premium UI design",
      "Built to scale",
      "Free revisions included",
      "Priced by project scope",
      "Dedicated Project Manager",
    ],
    featured: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-block px-4 py-1.5 rounded-full border border-border bg-muted/40 text-xs text-neutral-300 mb-6">
            Simple Pricing
          </div>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Transparent Pricing Plans
          </h2>
          <p className="mt-5 text-neutral-400 text-sm">
            Fixed-scope pricing for startups and growing businesses. No surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`p-10 rounded-3xl border transition ${
                p.featured ? "border-accent/40 bg-accent/5" : "border-border bg-muted/30"
              }`}
            >
              <h3 className="text-2xl font-medium mb-3">{p.name}</h3>
              <p className="text-neutral-400 text-sm mb-6">{p.subtitle}</p>
              <div className="flex items-baseline gap-2 mb-2">
                {p.cadence === "Starting at" && (
                  <span className="text-neutral-500 text-sm">{p.cadence}</span>
                )}
                <span className="text-5xl font-semibold tracking-tight">{p.price}</span>
                {p.cadence !== "Starting at" && (
                  <span className="text-neutral-500">{p.cadence}</span>
                )}
              </div>
              <a
                href="#contact"
                className={`block text-center py-3 rounded-full font-medium transition mt-6 mb-8 ${
                  p.featured
                    ? "bg-accent text-black hover:brightness-110"
                    : "border border-border hover:bg-muted"
                }`}
              >
                Get Started
              </a>
              <p className="text-xs uppercase tracking-widest text-neutral-500 mb-4">What&apos;s Included:</p>
              <ul className="space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-neutral-300">
                    <Check size={16} className="text-accent mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
