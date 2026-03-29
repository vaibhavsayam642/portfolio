import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

export default function About() {
  return (
    <section className="px-6 py-24 text-white md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <SectionReveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-4 shadow-[0_24px_70px_rgba(15,23,42,0.4)] backdrop-blur-xl light:border-slate-300 light:bg-white/80">
            <img src="/p2.jpg" alt="About Vaibhav" className="h-[420px] w-full rounded-[1.5rem] object-cover" />
          </div>
        </SectionReveal>
        <SectionReveal delay={0.08}>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl light:border-slate-300 light:bg-white/80">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300 light:text-sky-700">About Me</p>
            <motion.h2 initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6 }} className="text-3xl font-bold text-white light:text-slate-950 md:text-5xl">
              Developer focused on reliable systems and thoughtful interfaces.
            </motion.h2>
            <p className="mt-6 text-lg leading-8 text-slate-300 light:text-slate-700">
              I am a final year Computer Engineering student from Jagadambha College of Engineering and Technology, Yavatmal. I enjoy turning ambitious ideas into practical full-stack products, especially where real-time interaction, developer tooling, and strong frontend craft meet.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-300 light:text-slate-700">
              My work leans toward collaborative applications, scalable backend architecture, and modern React experiences that stay fast, intuitive, and ready for production.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
