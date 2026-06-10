import { motion } from "framer-motion";

import cpp from "../assets/skills/cpp.png";
import python from "../assets/skills/python.jpg";
import javascript from "../assets/skills/javascript.png";

import html from "../assets/skills/html.png";
import css from "../assets/skills/css.jpg";
import react from "../assets/skills/react.png";
import nodejs from "../assets/skills/nodejs.png";
import express from "../assets/skills/express.png";

import mongodb from "../assets/skills/mongodb.png";
import mysql from "../assets/skills/mysql.png";

import github from "../assets/skills/github.png";
import vscode from "../assets/skills/vscode.jpg";

function Hex({ image, name, className }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.08,
        y: -8,
      }}
      transition={{ duration: 0.3 }}
      className={`absolute group ${className}`}
    >
      <div className="relative w-[125px] h-[140px] flex flex-col items-center justify-center cursor-pointer">
        {/* Glow */}
        <div
          className="
            absolute inset-0
            opacity-0
            group-hover:opacity-100
            bg-fuchsia-500/40
            blur-xl
            transition-all duration-300
          "
        />

        {/* Hexagon */}
        <div
          className="
            absolute inset-0
            bg-[#2A1B4D]
            border
            border-fuchsia-400/50
            group-hover:border-pink-400
            group-hover:shadow-[0_0_30px_rgba(217,70,239,0.9)]
            transition-all duration-300
          "
          style={{
            clipPath:
              "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)",
          }}
        />

        <img
          src={image}
          alt={name}
          className="w-16 h-16 object-contain z-10"
        />

        <p className="text-white text-xs mt-2 z-10 text-center font-medium">
          {name}
        </p>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-20 px-6 overflow-hidden"
    >
      {/* Moving White Dots Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
       Skills
      </h2>

      <div className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {/* LEFT SIDE */}
        <div>
          <h3 className="text-white text-xl font-semibold text-center mb-8">
            {"< Programming & Web Technologies />"}
          </h3>

          <div className="relative h-[350px] w-[520px] mx-auto">
            <Hex image={python} name="Python" className="left-[140px] top-0" />
            <Hex image={javascript} name="JavaScript" className="left-[280px] top-0" />

            <Hex image={cpp} name="C++" className="left-[0px] top-[110px]" />
            <Hex image={html} name="HTML5" className="left-[140px] top-[110px]" />
            <Hex image={css} name="CSS3" className="left-[280px] top-[110px]" />
            <Hex image={react} name="React.js" className="left-[420px] top-[110px]" />

            <Hex image={nodejs} name="Node.js" className="left-[140px] top-[220px]" />
            <Hex image={express} name="Express.js" className="left-[280px] top-[220px]" />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <h3 className="text-white text-xl font-semibold text-center mb-8">
            {"< Database & Tools />"}
          </h3>

          <div className="relative h-[250px] w-[420px] mx-auto">
            <Hex image={mongodb} name="MongoDB" className="left-[70px] top-0" />
            <Hex image={mysql} name="MySQL" className="left-[210px] top-0" />

            <Hex image={github} name="GitHub" className="left-[70px] top-[110px]" />
            <Hex image={vscode} name="VS Code" className="left-[210px] top-[110px]" />
          </div>
        </div>
      </div>
    </section>
  );
}