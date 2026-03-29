import { motion } from "framer-motion";
import { FiArrowLeft, FiExternalLink, FiGithub, FiImage } from "react-icons/fi";
import { Link, Navigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import SectionReveal from "../components/SectionReveal";
import { getProjectById } from "../data/projects";

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const project = getProjectById(id);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <motion.main
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="min-h-screen bg-transparent px-6 pb-16 pt-32 text-slate-100 md:px-12 lg:px-20"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <SectionReveal>
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_30px_80px_rgba(8,15,32,0.5)] backdrop-blur-2xl dark:bg-slate-950/70 light:border-slate-300 light:bg-white/80">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <Link
                to="/#projects"
                className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-white light:text-sky-700"
              >
                <FiArrowLeft />
                Back to projects
              </Link>

              <div className="flex flex-wrap gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan-400/60 hover:bg-cyan-400/10 light:border-slate-300 light:bg-white light:text-slate-900"
                >
                  <FiGithub />
                  View Code
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_12px_30px_rgba(56,189,248,0.35)] transition hover:-translate-y-0.5"
                >
                  <FiExternalLink />
                  Live Demo
                </a>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <div
                  className={`mb-6 inline-flex rounded-full border border-white/10 bg-gradient-to-r px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-100 ${project.accent}`}
                >
                  Project Spotlight
                </div>
                <h1 className="mb-4 text-4xl font-bold tracking-tight text-white light:text-slate-950 md:text-5xl">
                  {project.title}
                </h1>
                <p className="mb-6 max-w-3xl text-lg leading-8 text-slate-300 light:text-slate-700">
                  {project.longDescription}
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5 light:border-slate-300 light:bg-slate-50">
                    <p className="mb-2 text-sm uppercase tracking-[0.24em] text-cyan-300 light:text-sky-700">
                      Challenge
                    </p>
                    <p className="text-sm leading-7 text-slate-300 light:text-slate-700">
                      {project.challenge}
                    </p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5 light:border-slate-300 light:bg-slate-50">
                    <p className="mb-2 text-sm uppercase tracking-[0.24em] text-cyan-300 light:text-sky-700">
                      Outcome
                    </p>
                    <p className="text-sm leading-7 text-slate-300 light:text-slate-700">
                      {project.outcome}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4">
                {project.images.length > 0 ? (
                  project.images.map((image, index) => (
                    <motion.div
                      key={image}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * (index + 1), duration: 0.45 }}
                      className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/70 shadow-[0_18px_40px_rgba(8,15,32,0.35)] light:border-slate-300 light:bg-white"
                    >
                      <img
                        src={image}
                        alt={`${project.title} preview ${index + 1}`}
                        className="h-64 w-full object-cover transition duration-500 hover:scale-105"
                      />
                    </motion.div>
                  ))
                ) : (
                  <div className="flex min-h-[33rem] flex-col items-center justify-center rounded-[1.75rem] border border-dashed border-white/15 bg-slate-900/60 px-6 text-center text-slate-300 light:border-slate-300 light:bg-slate-50 light:text-slate-600">
                    <FiImage className="mb-4 text-5xl" />
                    <p className="text-lg font-semibold">No project images added yet</p>
                    <p className="mt-2 text-sm">You can add grocery screenshots later and they will appear here automatically.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </SectionReveal>

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionReveal delay={0.1}>
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6 backdrop-blur-xl light:border-slate-300 light:bg-white/80">
              <p className="mb-4 text-sm uppercase tracking-[0.24em] text-cyan-300 light:text-sky-700">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100 light:border-sky-200 light:bg-sky-50 light:text-sky-800"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6 backdrop-blur-xl light:border-slate-300 light:bg-white/80">
              <p className="mb-4 text-sm uppercase tracking-[0.24em] text-cyan-300 light:text-sky-700">
                Key Highlights
              </p>
              <div className="grid gap-3">
                {project.features.map((feature) => (
                  <div
                    key={feature}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-slate-200 light:border-slate-200 light:bg-slate-50 light:text-slate-700"
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>

      <Footer />
    </motion.main>
  );
}
