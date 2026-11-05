import { useEffect, useState } from "react";

export default function PageLoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999]">
      <h1 className="text-cyan-400 text-3xl tracking-widest animate-pulse">
        Loading Portfolio...
      </h1>
    </div>
  );
}