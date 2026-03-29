import { motion } from "framer-motion";
import { FiCpu, FiLayers, FiLock, FiZap } from "react-icons/fi";
import SectionReveal from "./SectionReveal";

const features = [
  {
    title: "Real-time Systems",
    description:
      "I build collaborative flows powered by synchronized state, fast updates, and dependable event handling.",
    icon: FiZap,
  },
  {
    title: "Frontend Craft",
    description:
      "Interfaces are designed for clarity, motion, responsiveness, and a polished user journey across devices.",
    icon: FiLayers,
  },
  {
    title: "Backend Architecture",
    description:
      "API design, data modeling, and service structure are shaped for maintainability and production growth.",
    icon: FiCpu,
  },
  {
    title: "Safe Execution",
    description:
      "I care about secure execution patterns, operational awareness, and resilient application behavior.",
    icon: FiLock,
  },
];

export default function Features() {
  return (
    <section className="px-6 py-24 text-white md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <div className="mb-14 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300 light:text-sky-700">Core Strengths</p>
            <h2 className="text-3xl font-bold text-white light:text-slate-950 md:text-5xl">
              Product thinking backed by full-stack engineering.
            </h2>
          </div>
        </SectionReveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl light:border-slate-300 light:bg-white/85"
              >
                <div className="mb-5 inline-flex rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300 light:border-sky-200 light:bg-sky-50 light:text-sky-700">
                  <Icon className="text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-white light:text-slate-950">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300 light:text-slate-700">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
