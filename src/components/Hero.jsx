import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  const roles = [
    "Full Stack Developer",
    "React Developer",
    "Frontend Developer",
    "UI/UX Designer",
    "Problem Solver",
  ];

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (charIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentRole[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setText("");
      setCharIndex(0);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 1800);

    return () => clearTimeout(timeout);
  }, [charIndex, roleIndex]);

  const stars = Array.from({ length: 80 });

  const githubLink = "https://github.com/bhaktishinde29";
  const linkedinLink = "https://www.linkedin.com/in/bhakti-shinde-121791329";

  // ✅ SAFE BASE PATH (important fix)
  const BASE = import.meta.env.BASE_URL;

  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* 🌌 FLOATING STARS */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((_, i) => (
          <span
            key={i}
            className="absolute bg-white rounded-full opacity-50"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animation: `floatStars ${4 + Math.random() * 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-500/20 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />

      {/* MAIN LAYOUT */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-20">

        {/* LEFT SIDE - VIDEO */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center md:justify-start"
        >
          <div className="w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(217,70,239,0.4)]">

            {/* ✅ FIXED VIDEO PATH */}
            <video
              src={`${BASE}avtar.mp4`}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center"
        >
          <p className="text-fuchsia-400 text-base md:text-lg mb-3 font-medium">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              Bhakti Shinde
            </span>
          </h1>

          <p className="text-zinc-400 text-base md:text-lg mb-6">
            Welcome to my portfolio
          </p>

          <h2 className="text-xl md:text-3xl font-semibold text-zinc-200">
            I am{" "}
            <span className="text-fuchsia-400">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </h2>

          <p className="max-w-xl mx-auto mt-6 text-zinc-400 text-base md:text-lg leading-7">
            Passionate about building modern web applications,
            intuitive user interfaces and scalable digital experiences.
          </p>

          {/* BUTTONS */}
          <div className="flex justify-center gap-4 mt-10 flex-wrap">
            <a
              href="#projects"
              className="px-8 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(217,70,239,0.8)] transition-all duration-300"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-8 py-3 rounded-xl border border-fuchsia-500 text-white hover:bg-fuchsia-500 hover:shadow-[0_0_25px_rgba(217,70,239,0.5)] transition-all duration-300"
            >
              Contact Me
            </a>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex justify-center gap-6 mt-6 text-3xl">
            <a
              href={linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-fuchsia-400 hover:scale-110 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-400 hover:scale-110 transition"
            >
              <FaGithub />
            </a>
          </div>
        </motion.div>
      </div>

      {/* ANIMATION */}
      <style>{`
        @keyframes floatStars {
          0% { transform: translateY(0px); opacity: 0.2; }
          50% { opacity: 0.8; }
          100% { transform: translateY(-40px); opacity: 0.2; }
        }
      `}</style>
    </section>
  );
}