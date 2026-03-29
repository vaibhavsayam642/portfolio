import { motion } from "framer-motion";
import { FiArrowRight, FiDownload, FiGithub } from "react-icons/fi";

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut", delay },
  }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-24 text-white md:px-12 lg:px-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.16),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.16),transparent_30%)]" />
      <div className="mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative z-10">
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} custom={0.05} variants={item} className="mb-5 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.32em] text-cyan-200 light:text-sky-700">
            Full Stack Developer
          </motion.p>
          <motion.h1 initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} custom={0.1} variants={item} className="max-w-4xl text-4xl font-bold leading-tight text-white light:text-slate-950 md:text-6xl">
            Building immersive developer experiences with real-time systems and polished interfaces.
          </motion.h1>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} custom={0.18} variants={item} className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 light:text-slate-700">
            I am Vaibhav Gulab Sayam, a developer focused on scalable web apps, collaborative tools, and modern frontends that feel as good as they perform.
          </motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} custom={0.26} variants={item} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="/#projects" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_35px_rgba(56,189,248,0.35)] transition hover:-translate-y-1">
              Explore Projects
              <FiArrowRight />
            </a>
            <a href="/Vaibhav%20Resume%20New.pdf" download className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/10 light:border-slate-300 light:bg-white light:text-slate-900">
              Download Resume
              <FiDownload />
            </a>
            <a href="https://github.com/vaibhavsayam642" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:text-white light:border-slate-300 light:text-slate-800">
              GitHub
              <FiGithub />
            </a>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.7, ease: "easeOut" }} className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-400/30 via-sky-500/20 to-transparent blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-4 shadow-[0_28px_90px_rgba(15,23,42,0.45)] backdrop-blur-2xl light:border-slate-300 light:bg-white/85">
            <img src="/Profile1.jpeg" alt="Vaibhav Sayam" className="h-[440px] w-full rounded-[1.5rem] object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
