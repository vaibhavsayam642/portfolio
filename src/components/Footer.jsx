import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="px-6 pb-10 pt-6 text-white md:px-12 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 rounded-[2rem] border border-white/10 bg-slate-950/60 px-6 py-6 backdrop-blur-xl light:border-slate-200 light:bg-white/95 light:shadow-[0_18px_45px_rgba(148,163,184,0.22)] md:flex-row">
        <div>
          <p className="text-lg font-semibold text-white light:text-slate-950">Vaibhav Sayam</p>
          <p className="text-sm text-slate-400 light:text-slate-600">
            Full Stack Developer building polished, production-ready web experiences.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/vaibhavsayam642" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:text-cyan-300 light:border-slate-200 light:bg-white light:text-slate-800">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/vaibhav-sayam-264566284" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:text-cyan-300 light:border-slate-200 light:bg-white light:text-slate-800">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
