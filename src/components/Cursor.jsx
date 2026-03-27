import { useEffect, useState } from "react";

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed w-3 h-3 bg-cyan-400 rounded-full pointer-events-none z-50"
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`
      }}
    />
  );
}