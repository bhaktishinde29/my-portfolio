import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  const educationData = [
    {
      degree: "Bachelor of Engineering in Computer Engineering",
      college: "Sanjivani college of Engineering, Kopargoan",
      duration: "2024 - 2028",
      score: "CGPA: 8.9/10",
    },
    {
      degree: "Higher Secondary Education (12th)",
      college: "RKMM Junior College",
      duration: "2022 - 2024",
      score: "Percentage: 82.83%",
    },
    {
      degree: "Secondary Education (10th)",
      college: "Gurukul English Medium School",
      duration: "2021 - 2022",
      score: "Percentage: 90.60%",
    },
  ];

  const dots = Array.from({ length: 180 });

  return (
    <section
      id="education"
      className="relative max-w-6xl mx-auto px-6 py-20 overflow-hidden"
    >

      {/* 🌌 FLOATING PARTICLES */}
      <div className="absolute inset-0 pointer-events-none">
        {dots.map((_, i) => (
          <span
            key={i}
            className="dot"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${6 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* CONTENT */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
          Education
        </h2>

        <div className="relative border-l-2 border-fuchsia-500 ml-6">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              className="mb-12 ml-10 relative"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="absolute -left-5 w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-[0_0_20px_rgba(217,70,239,0.8)]">
                <FaGraduationCap className="text-white text-lg" />
              </div>

              <div className="bg-zinc-900 border border-fuchsia-500/20 rounded-2xl p-6 hover:border-fuchsia-500 hover:shadow-[0_0_25px_rgba(217,70,239,0.4)] transition-all duration-300">
                <h3 className="text-2xl font-semibold text-white">
                  {item.degree}
                </h3>
                <p className="text-fuchsia-400 mt-2">{item.college}</p>
                <p className="text-zinc-400 mt-2">{item.duration}</p>
                <p className="text-zinc-300 mt-2">{item.score}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 🌌 CSS FOR FLOATING DOTS */}
      <style>{`
        .dot {
          position: absolute;
          width: 4px;
          height: 2px;
          background: white;
          border-radius: 50%;
          opacity: 0.6;
          animation: floatUp linear infinite;
        }

        @keyframes floatUp {
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