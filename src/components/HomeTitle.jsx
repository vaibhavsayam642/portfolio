import { useEffect, useState } from "react";
import ModelCanvas from "../three/Model"; // adjust path

export default function HomeTitle() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.max(1 - scrollY / 250, 0);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center relative">

      {/* 🔥 LEFT 3D MODEL */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 w-[400px] h-[400px]">
        <ModelCanvas />
        </div>

      {/* 🔥 CENTER TEXT */}
      <h1
        style={{
          opacity,
          transform: `scale(${opacity})`
        }}
        className="text-5xl md:text-7xl font-bold text-cyan-400 
                   drop-shadow-[0_0_30px_#00ffff] 
                   transition-all duration-300 text-center"
      >
        WELCOME TO MY SITE
      </h1>
    </div>
  );
}