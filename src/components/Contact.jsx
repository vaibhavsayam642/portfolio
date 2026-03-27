import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_meddq7n",     // your service id
      "template_seb0giz",      // your template id
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message
      },
      "2quK1HQCjiFDbPBX-"      // from EmailJS
    )
    .then(() => {
      alert("Message Sent Successfully 🚀");
    })
    .catch((error) => {
      console.log(error);
      alert("Failed ❌");
    });

    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-black pt-32 px-6 md:px-20 text-white overflow-hidden"
    >

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.08),transparent_70%)]"></div>

      {/* 🔥 Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-center mb-20 relative z-10"
      >
        Contact Me
      </motion.h2>

      <div className="relative z-10 grid md:grid-cols-2 gap-12">

        {/* 🔥 LEFT SIDE INFO */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <p className="text-lg text-gray-300 leading-relaxed">
            I’m open to internships, collaborations, and exciting projects. 
            Feel free to reach out.
          </p>

          {/* INFO BOX */}
          <div className="space-y-4 text-gray-400">

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur">
              📧 vaibhavsayam642@gmail.com
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur">
              📱 +91 8668569753
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur">
              📍 Yavatmal, Maharashtra, India
            </div>

          </div>

          {/* SOCIAL */}
          <div className="flex gap-6 mt-6 text-2xl">

            <a
              href="https://github.com/vaibhavsayam642"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 hover:scale-125 transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/vaibhav-sayam-264566284"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 hover:scale-125 transition duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/vaibhav__101_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 hover:scale-125 transition duration-300"
            >
              <FaInstagram />
            </a>

          </div>
                  </motion.div>

        {/* 🔥 RIGHT SIDE FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="relative p-8 rounded-2xl 
                     bg-white/5 backdrop-blur-xl 
                     border border-white/10 
                     shadow-[0_0_30px_rgba(0,255,255,0.1)]"
        >

          {/* INPUT */}
          {["name", "email"].map((field, i) => (
            <motion.input
              key={i}
              type={field === "email" ? "email" : "text"}
              name={field}
              placeholder={field === "name" ? "Your Name" : "Your Email"}
              value={form[field]}
              onChange={handleChange}
              required

              whileFocus={{ scale: 1.03 }}

              className="w-full p-3 mb-4 bg-black/60 border border-white/10 
                         rounded-lg focus:outline-none focus:border-cyan-400 
                         transition"
            />
          ))}

          {/* TEXTAREA */}
          <motion.textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows="5"

            whileFocus={{ scale: 1.03 }}

            className="w-full p-3 mb-4 bg-black/60 border border-white/10 
                       rounded-lg focus:outline-none focus:border-cyan-400 
                       transition"
          />

          {/* BUTTON */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}

            className="w-full py-3 rounded-xl font-semibold 
                       bg-gradient-to-r from-cyan-500 to-blue-500 
                       shadow-[0_0_20px_rgba(0,255,255,0.4)] 
                       hover:shadow-[0_0_40px_rgba(0,255,255,0.7)] 
                       transition"
          >
            Send Message 🚀
          </motion.button>

        </motion.form>

      </div>

    </section>
  );
}