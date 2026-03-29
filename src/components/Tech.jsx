import { motion } from "framer-motion";
import { skills } from "../data/skills";
import SectionReveal from "./SectionReveal";

export default function Tech() {
  return (
    <section className="px-6 py-24 text-white md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300 light:text-sky-700">Skills</p>
              <h2 className="text-3xl font-bold text-white light:text-slate-950 md:text-5xl">
                Tools I use to ship modern web experiences.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-slate-300 light:text-slate-700">
              A practical stack for interactive frontends, efficient backend services, and scalable full-stack applications.
            </p>
          </div>
        </SectionReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ scale: 1.03, y: -6 }}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_20px_50px_rgba(8,15,32,0.38)] backdrop-blur-xl transition light:border-slate-200 light:bg-white/95 light:shadow-[0_18px_45px_rgba(148,163,184,0.22)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-cyan-400/0 to-blue-500/0 transition duration-500 group-hover:from-cyan-400/10 group-hover:via-sky-500/5 group-hover:to-blue-500/10" />
                <div className="relative z-10 flex items-center gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 light:border-slate-200 light:bg-slate-50">
                    <Icon className={`text-3xl ${skill.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white light:text-slate-950">{skill.name}</h3>
                    <p className="mt-1 text-sm text-slate-400 light:text-slate-600">
                      Production-focused implementation and component-driven delivery.
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
