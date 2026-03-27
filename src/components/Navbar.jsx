import { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  const navItems = ["hero", "about", "projects", "features", "tech", "contact"];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      navItems.forEach((id) => {
        const sec = document.getElementById(id);
        if (!sec) return;

        const top = sec.offsetTop - 150;
        const height = sec.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
          setActive(id);
        }
      });

      // HOME active at top
      if (window.scrollY < 100) {
        setActive("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-6 px-6 py-3 
                      rounded-full 
                      bg-white/5 backdrop-blur-xl 
                      border border-white/10 
                      shadow-[0_0_30px_rgba(0,255,255,0.15)]">

        {/* Tabs */}
        {navItems.map((item, index) => (
          <div
            key={index}
            onClick={() => scrollToSection(item)}
            className={`px-5 py-2 rounded-full cursor-pointer transition-all duration-300
              ${active === item
                ? "bg-cyan-400 text-black shadow-[0_0_20px_#00ffff]"
                : "text-gray-300 hover:text-cyan-400"}`}
          >
            {item}
          </div>
        ))}
      </div>
    </nav>
  );
}