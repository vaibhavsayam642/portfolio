import { motion } from "framer-motion";

const projects = [
  {
    title: "Collaborative Code Editor",
    desc: "Real-time coding platform with host-controlled architecture",
    features: [
      "Real-time synchronization",
      "Docker-based execution",
      "Integrated chat system"
    ],
    github: "https://github.com/vaibhavsayam642/Collaborative_Code_Editor.git",
    live: "#",
    gradient: "from-cyan-500/20 to-blue-500/20"
  },
  {
    title: "Alumni Management System",
    desc: "System to manage alumni data and communication",
    features: [
      "Data management",
      "Search & filtering",
      "User roles"
    ],
    github: "#",
    live: "#",
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Grocery Management System",
    desc: "Inventory and billing system for stores",
    features: [
      "Stock tracking",
      "Billing system",
      "Reports generation"
    ],
    github: "#",
    live: "#",
    gradient: "from-green-500/20 to-emerald-500/20"
  }
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-black pt-32 px-6 md:px-20 text-white"
    >

      {/* 🔥 Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-16"
      >
        Projects
      </motion.h2>

      {/* 🔥 Cards */}
      <div className="grid md:grid-cols-3 gap-10">

        {projects.map((p, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.06 }}
            className={`p-6 rounded-2xl 
                        bg-gradient-to-br ${p.gradient} 
                        backdrop-blur-xl 
                        border border-white/10 
                        shadow-[0_0_20px_rgba(0,255,255,0.1)]
                        hover:shadow-[0_0_40px_rgba(0,255,255,0.3)]
                        transition duration-300`}
          >

            {/* Title */}
            <h3 className="text-xl font-semibold text-cyan-400">
              {p.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 mt-3">
              {p.desc}
            </p>

            {/* Features */}
            <ul className="mt-4 text-sm text-gray-300 space-y-1">
              {p.features.map((f, i) => (
                <li key={i}>• {f}</li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="mt-6 flex gap-6">
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                GitHub
              </a>

              <a
                href={p.live}
                target="_blank"
                className="text-cyan-400 hover:text-white transition"
              >
                Live Demo
              </a>
            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}