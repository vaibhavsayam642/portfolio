import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function RouteLoader() {
  const { pathname } = useLocation();

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-1 bg-transparent">
      <motion.div
        key={pathname}
        initial={{ x: "-100%", opacity: 1 }}
        animate={{ x: "100%", opacity: [1, 1, 0] }}
        transition={{ duration: 0.55, ease: "easeInOut" }}
        className="h-full w-full bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-500 shadow-[0_0_20px_rgba(56,189,248,0.6)]"
      />
    </div>
  );
}
