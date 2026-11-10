
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import profilePhoto from "../assets/photo.jpeg";
import resume from "../assets/Bhakti_Shinde[ECE].pdf";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0b0616] text-white px-6 py-20"
    >
      {/* Background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 180 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-purple-400/40"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [null, -30, 30],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-fuchsia-500">
            Me
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-6">
              Hello! I'm Bhakti Shinde
            </h3>

            <p className="text-gray-300 leading-8 text-lg mb-6">
              I am an Electronics and Computer Engineering student passionate
              about technology, software development, and creating innovative
              solutions. I enjoy learning new technologies and building
              projects that solve real-world problems.
            </p>

            <p className="text-gray-300 leading-8 text-lg mb-8">
              My interests include frontend development, backend development,
              and UI/UX design. I work with technologies such as React,
              JavaScript, Java, Node.js, MongoDB, and Tailwind CSS. I am always
              eager to improve my skills and explore new opportunities.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              {/* Resume Download */}
              <a
                href={resume}
                download="Bhakti_Shinde_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 hover:scale-105 transition"
              >
                <HiDocumentText size={20} />
                Resume
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/bhakti-shinde-121791329"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border border-purple-400 text-white hover:bg-purple-600/20 hover:scale-105 transition"
              >
                <FaLinkedin size={20} />
                LinkedIn
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/bhaktishinde29"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border border-purple-400 text-white hover:bg-purple-600/20 hover:scale-105 transition"
              >
                <FaGithub size={20} />
                GitHub
              </a>
            </div>
          </motion.div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-fuchsia-500 blur-lg opacity-40" />

              <img
                src={profilePhoto}
                alt="Bhakti Shinde"
                className="relative w-64 h-72 md:w-80 md:h-96 object-cover rounded-2xl border-2 border-purple-400/50 shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
