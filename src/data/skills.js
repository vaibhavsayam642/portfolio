import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

export const skills = [
  { name: "React", icon: SiReact, color: "text-cyan-400" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-emerald-400" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
  {
    name: "Express",
    icon: SiExpress,
    color: "text-slate-200 dark:text-slate-200 light:text-slate-800",
  },
  { name: "JavaScript", icon: SiJavascript, color: "text-amber-300" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
];
