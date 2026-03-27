import { motion } from "framer-motion";
import { useState } from "react";

const features = [
  {
    title: "Real-time Systems",
    desc: "Built scalable real-time apps using WebSockets and Socket.IO.",
    icon: "⚡"
  },
  {
    title: "Backend Architecture",
    desc: "Robust backend using Node.js, Express & microservices.",
    icon: "⚙️"
  },
  {
    title: "Database Design",
    desc: "Optimized MongoDB schema & performance handling.",
    icon: "🗄️"
  },
  {
    title: "Secure Execution",
    desc: "Docker-based isolated secure code execution.",
    icon: "🔒"
  }
];

export default function Features() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="features"
      className="min-h-screen bg-black pt-32 px-6 md:px-20 text-white"
    >

      {/* 🔥 Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-20"
      >
        Features
      </motion.h2>

      {/* 🔥 Cards */}
      <div className="grid md:grid-cols-4 gap-10">

        {features.map((f, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}

            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.15 }}

            className="relative h-[220px] flex flex-col justify-center items-center 
                       rounded-2xl border border-white/10 
                       bg-black overflow-hidden cursor-pointer"
          >

            {/* 🔥 Animated Neon Border */}
            <div className="absolute inset-0 rounded-2xl border border-cyan-400 opacity-20"></div>

            {hovered === index && (
              <motion.div
                layoutId="glow"
                className="absolute inset-0 rounded-2xl bg-cyan-400/10 blur-xl"
              />
            )}

            {/* ICON */}
            <motion.div
              animate={{
                scale: hovered === index ? 1.3 : 1,
                rotate: hovered === index ? 10 : 0
              }}
              className="text-4xl mb-4"
            >
              {f.icon}
            </motion.div>

            {/* TITLE */}
            <h3 className="text-lg font-semibold">
              {f.title}
            </h3>

            {/* DESC (appears on hover) */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: hovered === index ? 1 : 0,
                y: hovered === index ? 0 : 10
              }}
              className="text-sm text-gray-400 text-center mt-3 px-4"
            >
              {f.desc}
            </motion.p>

          </motion.div>
        ))}

      </div>
    </section>
  );
}