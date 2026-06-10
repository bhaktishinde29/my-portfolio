import { useEffect, useRef } from "react";

export default function StarsBackground() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // 🔴 DRAW BIG RED DOT (must be visible)
    ctx.fillStyle = "red";
    ctx.fillRect(100, 100, 200, 200);

  }, []);

  return (
    <canvas
      ref={ref}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
      }}
    />
  );
}