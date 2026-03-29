import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import SectionReveal from "./SectionReveal";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setForm((currentForm) => ({
      ...currentForm,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .send(
        "service_meddq7n",
        "template_seb0giz",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "2quK1HQCjiFDbPBX-",
      )
      .then(() => {
        window.alert("Message sent successfully.");
      })
      .catch((error) => {
        console.error(error);
        window.alert("Failed to send the message.");
      });

    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="px-6 py-24 text-white md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <div className="mb-14 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300 light:text-sky-700">Contact</p>
            <h2 className="text-3xl font-bold text-white light:text-slate-950 md:text-5xl">
              Let us build something meaningful together.
            </h2>
          </div>
        </SectionReveal>

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionReveal>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl light:border-slate-200 light:bg-white/92 light:shadow-[0_18px_45px_rgba(148,163,184,0.22)]">
              <p className="text-lg leading-8 text-slate-300 light:text-slate-700">
                I am open to internships, freelance work, collaborations, and product-focused engineering opportunities. If you have an idea or an open role, I would love to hear about it.
              </p>
              <div className="mt-8 grid gap-4 text-sm">
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-4 light:border-slate-200 light:bg-slate-100">
                  <FiMail className="text-cyan-300 light:text-sky-700" />
                  <span>vaibhavsayam642@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-4 light:border-slate-200 light:bg-slate-100">
                  <FiPhone className="text-cyan-300 light:text-sky-700" />
                  <span>+91 8668569753</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-4 light:border-slate-200 light:bg-slate-100">
                  <FiMapPin className="text-cyan-300 light:text-sky-700" />
                  <span>Yavatmal, Maharashtra, India</span>
                </div>
              </div>
              <div className="mt-8 flex gap-4 text-xl">
                <a href="https://github.com/vaibhavsayam642" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:text-cyan-300 light:border-slate-200 light:bg-white light:text-slate-800">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/vaibhav-sayam-264566284" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:text-cyan-300 light:border-slate-200 light:bg-white light:text-slate-800">
                  <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/vaibhav__101_" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:text-cyan-300 light:border-slate-200 light:bg-white light:text-slate-800">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.08}>
            <motion.form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-[0_20px_60px_rgba(8,15,32,0.38)] backdrop-blur-xl light:border-slate-200 light:bg-white/95 light:shadow-[0_18px_45px_rgba(148,163,184,0.22)]">
              <div className="grid gap-4 md:grid-cols-2">
                <input type="text" name="name" placeholder="Your name" value={form.name} onChange={handleChange} required className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-400 light:border-slate-200 light:bg-slate-50 light:text-slate-900" />
                <input type="email" name="email" placeholder="Your email" value={form.email} onChange={handleChange} required className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-400 light:border-slate-200 light:bg-slate-50 light:text-slate-900" />
              </div>
              <textarea name="message" placeholder="Tell me about your project" value={form.message} onChange={handleChange} required rows="7" className="mt-4 w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-400 light:border-slate-200 light:bg-slate-50 light:text-slate-900" />
              <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_35px_rgba(56,189,248,0.35)]">
                Send Message
              </motion.button>
            </motion.form>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
