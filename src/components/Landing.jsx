import { motion } from "framer-motion";

export default function Landing() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-white">

      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-bold"
      >
        MY PORTFOLIO
      </motion.h1>

      <p className="mt-4 text-gray-400">
        Scroll Down to Know About Me
      </p>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity }}
        className="mt-6 text-cyan-400 text-2xl"
      >
        ↓
      </motion.div>

    </div>
  );
}