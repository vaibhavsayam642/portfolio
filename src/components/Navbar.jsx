import { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  "home",
  "hero",
  "about",
  "projects",
  "features",
  "skills",
  "contact",
];

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState("home");
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (!isHomePage) {
      return undefined;
    }

    const handleScroll = () => {
      const currentSection = navItems.find((id) => {
        const section = document.getElementById(id);
        if (!section) {
          return false;
        }

        const top = section.offsetTop - 180;
        const height = section.offsetHeight;
        return window.scrollY >= top && window.scrollY < top + height;
      });

      setActive(currentSection || (window.scrollY < 120 ? "home" : active));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [active, isHomePage]);

  const handleSectionNavigation = (sectionId) => {
    if (!isHomePage) {
      navigate(`/#${sectionId}`);
      return;
    }

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className="fixed inset-x-0 top-5 z-50 px-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full border border-white/10 bg-slate-950/65 px-4 py-3 shadow-[0_18px_60px_rgba(15,23,42,0.45)] backdrop-blur-2xl">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold tracking-[0.24em] text-cyan-200 transition hover:border-cyan-400/50 hover:text-white"
          >
            VS
          </Link>

          {isHomePage ? (
            <div className="hidden items-center gap-2 lg:flex">
              {navItems.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => handleSectionNavigation(item)}
                  className={`rounded-full px-4 py-2 text-sm font-medium capitalize transition ${
                    active === item
                      ? "bg-cyan-400 text-slate-950 shadow-[0_0_24px_rgba(34,211,238,0.4)]"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          ) : (
            <Link
              to="/#projects"
              className="hidden items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:text-white lg:inline-flex"
            >
              <FiArrowLeft />
              Back to projects
            </Link>
          )}
        </div>

        <div className="flex items-center gap-3">
          {isHomePage && (
            <button
              type="button"
              onClick={() => handleSectionNavigation("contact")}
              className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-cyan-400/10 md:inline-flex"
            >
              Let us talk
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
