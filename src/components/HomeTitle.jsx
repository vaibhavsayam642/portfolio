import { motion } from "framer-motion";

export default function HomeTitle() {
  return (
    <div className="relative flex min-h-screen w-full items-center overflow-hidden px-6 md:px-12 lg:px-20">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="relative z-10"
        >
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.34em] text-cyan-300 light:text-sky-700">
            Developer Portfolio
          </p>
          <h1 className="max-w-4xl text-5xl font-bold leading-tight text-white light:text-slate-950 md:text-7xl">
            Turning ideas into interactive products with code, motion, and detail.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 light:text-slate-700">
            Scroll to explore featured projects, skills, and the systems thinking behind my work.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 via-sky-500/10 to-transparent blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-4 shadow-[0_24px_70px_rgba(15,23,42,0.4)] backdrop-blur-xl light:border-slate-300 light:bg-white/80">
            <img
              src="/p3.jpg"
              alt="Vaibhav portfolio showcase"
              className="h-[420px] w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
