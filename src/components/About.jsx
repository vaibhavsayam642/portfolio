import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-20 pt-32 pb-16">

      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* 🔥 LEFT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src="/p2.jpg"
            alt="profile"
            className="w-[300px] h-[380px] object-cover rounded-xl"
          />
        </motion.div>

        {/* 🔥 RIGHT SIDE TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4"
        >
          {/* Heading ABOVE TEXT */}
          <h2 className="text-3xl font-bold">
            About Me
          </h2>

          {/* TEXT */}
          <p className="text-[20px] font-serif text-white text-justify leading-relaxed">
            I am a final year Computer Engineering student from Jagadambha College of Engineering And Technology Yavatmal.
            I specialize in building real-time scalable applications using modern web technologies.
          </p>
        </motion.div>

      </div>

    </div>
  );
}