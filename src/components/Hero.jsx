import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative h-screen flex text-white overflow-hidden">

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10"></div>

      {/* MAIN */}
      <div className="relative z-20 flex w-full h-full">

        {/* 🔥 LEFT SIDE */}
        <div className="w-1/2 flex flex-col items-start justify-center pl-20 gap-3">

          <motion.p
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[20px] font-serif text-white"
          >
            Vaibhav Gulab Sayam
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[20px] font-serif text-white"
          >
            Full Stack Developer | Collaborative Code Editor Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[20px] font-serif text-white"
          >
            Building web applications
          </motion.p>

        </div>

        {/* 🔥 RIGHT SIDE IMAGE */}
        <div className="w-1/2 flex items-center justify-center">

          <motion.img
            src="/Profile1.jpeg"
            alt="profile"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className="w-[300px] h-[380px] object-cover rounded-xl"
          />

        </div>

      </div>
    </div>
  );
}