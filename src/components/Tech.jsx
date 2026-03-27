import { motion } from "framer-motion";

export default function Tech() {
  const techStack = [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Socket.IO",
    "Docker",
    "JavaScript",
    "Git"
  ];

  return (
    <section
      id="tech"
      className="relative min-h-screen bg-black pt-32 px-6 md:px-20 text-white overflow-hidden"
    >

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.08),transparent_70%)]"></div>

      {/* 🔥 Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-center mb-24 relative z-10"
      >
        Tech Stack
      </motion.h2>

      {/* 🔥 GRID */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12">

        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}

            whileHover={{
              scale: 1.1,
              rotateX: 10,
              rotateY: -10
            }}

            className="group relative h-[140px] flex items-center justify-center 
                       rounded-2xl 
                       bg-white/5 backdrop-blur-xl 
                       border border-white/10 
                       shadow-[0_0_20px_rgba(0,255,255,0.08)]
                       transition duration-300"
          >

            {/* 🔥 GLOW BORDER */}
            <div className="absolute inset-0 rounded-2xl border border-cyan-400 opacity-0 group-hover:opacity-100 transition"></div>

            {/* 🔥 MOVING LIGHT */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-30 
                            bg-gradient-to-r from-transparent via-cyan-400 to-transparent 
                            blur-xl animate-pulse"></div>

            {/* TEXT */}
            <span className="text-xl font-semibold tracking-wider 
                             text-gray-300 group-hover:text-white transition">
              {tech}
            </span>

          </motion.div>
        ))}

      </div>

    </section>
  );
}