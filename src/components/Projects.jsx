import { motion } from "framer-motion";
import { FiArrowRight, FiExternalLink, FiGithub, FiImage } from "react-icons/fi";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import SectionReveal from "./SectionReveal";

export default function Projects() {
  return (
    <section className="px-6 py-24 text-white md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300 light:text-sky-700">Selected Work</p>
              <h2 className="text-3xl font-bold text-white light:text-slate-950 md:text-5xl">
                Projects built to solve practical problems with modern tooling.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-slate-300 light:text-slate-700">
              Each project combines solid architecture with a clean user experience, from collaborative coding flows to data-heavy management systems.
            </p>
          </div>
        </SectionReveal>

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_26px_80px_rgba(8,15,32,0.42)] backdrop-blur-xl light:border-slate-300 light:bg-white/85"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-70 transition duration-500 group-hover:opacity-100`} />
              <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/10 to-transparent opacity-40" />
              <div className="relative z-10 flex h-full flex-col">
                <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900/60 light:border-slate-300 light:bg-slate-100">
                  {project.images.length > 0 ? (
                    <img src={project.images[0]} alt={project.title} className="h-52 w-full object-cover transition duration-500 group-hover:scale-105" />
                  ) : (
                    <div className="flex h-52 w-full flex-col items-center justify-center gap-3 text-center text-slate-300 light:text-slate-600">
                      <FiImage className="text-4xl" />
                      <p className="text-sm font-medium">Project preview coming soon</p>
                    </div>
                  )}
                </div>
                <div className="mt-6 flex-1">
                  <h3 className="text-2xl font-semibold text-white light:text-slate-950">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-200 light:text-slate-700">{project.shortDescription}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-slate-100 light:border-slate-300 light:bg-slate-100 light:text-slate-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 grid gap-3">
                  <Link to={`/project/${project.id}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5">
                    View Details
                    <FiArrowRight />
                  </Link>
                  <div className="flex gap-3">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/50 hover:bg-cyan-400/10 light:border-slate-300 light:bg-white light:text-slate-900">
                      <FiGithub />
                      View Code
                    </a>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/50 hover:bg-cyan-400/10 light:border-slate-300 light:bg-white light:text-slate-900">
                      <FiExternalLink />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
