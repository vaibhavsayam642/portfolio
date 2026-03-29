import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-950"
    >
      <div className="text-center">
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-4 text-sm font-semibold uppercase tracking-[0.36em] text-cyan-300">
          Loading Portfolio
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="text-4xl font-bold text-white">
          Vaibhav Sayam
        </motion.h1>
        <div className="mt-8 flex justify-center">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }} className="h-12 w-12 rounded-full border-4 border-cyan-400/70 border-t-transparent" />
        </div>
      </div>
    </motion.div>
  );
}
