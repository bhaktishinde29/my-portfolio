import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";

import profilePhoto from "../assets/photo.jpeg";

export default function About() {
  const dots = Array.from({ length: 180 }); // density control

  return (
    <section
      id="about"
      className="relative max-w-6xl mx-auto px-6 py-20 overflow-hidden"
    >
      {/* 🌌 FLOATING PARTICLES BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        {dots.map((_, i) => (
          <span
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-60"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `floatStars ${6 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        {/* Heading */}
        <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <div>
            <p className="text-zinc-300 text-lg leading-8">
              Hi, I'm{" "}
              <span className="font-semibold text-fuchsia-400">
                Bhakti Shinde
              </span>
              , an Electronics and Computer Engineering student passionate about software development, technology, and innovation.
            </p>

            <p className="text-zinc-300 text-lg leading-8 mt-6">
              🛠 My interests include frontend development, backend systems, UI/UX design and creating digital experiences that solve real-world problems.
            </p>

            <p className="text-zinc-300 text-lg leading-8 mt-6">
              🚀 I work with React, JavaScript, Node.js, MongoDB and Tailwind CSS.
            </p>

            <p className="text-zinc-300 text-lg leading-8 mt-6">
              💡 My goal is to build meaningful products and launch my own startup.
            </p>

            <div className="mt-8">
              <div className="h-1 w-32 rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500"></div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-center">
            {/* Glow Image */}
            <div className="relative group">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 blur-3xl opacity-70 animate-pulse"></div>

              <div className="relative w-80 h-80 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src={profilePhoto}
                  alt="Bhakti Shinde"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <a
                href="/resume.pdf"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 hover:scale-105 transition"
              >
                <HiDocumentText size={20} />
                Resume
              </a>

              <a
                href="https://www.linkedin.com/in/bhakti-shinde-121791329"
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-purple-500 text-white hover:bg-purple-600 transition"
              >
                <FaLinkedin size={20} />
                LinkedIn
              </a>

              <a
                href="https://github.com/bhaktishinde29"
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-pink-500 text-white hover:bg-pink-600 transition"
              >
                <FaGithub size={20} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 🌌 FLOAT ANIMATION */}
      <style>{`
        @keyframes floatStars {
          0% {
            transform: translateY(0px);
            opacity: 0.2;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-120px);
            opacity: 0.2;
          }
        }
      `}</style>
    </section>
  );
}