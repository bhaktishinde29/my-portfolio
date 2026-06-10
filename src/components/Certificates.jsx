import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Certificates.css";

import Cert1 from "../assets/certificates/GenerativeAI.jpeg";
import Cert2 from "../assets/certificates/image.png";
import Cert3 from "../assets/certificates/image2.png";
import Cert4 from "../assets/certificates/nat.jpeg";
import Cert5 from "../assets/certificates/dc.png";

const certificates = [
  { id: 1, name: "Generative AI", org: "AICTE", date: "August 2025", credentialId: "GAI-001", image: Cert1 },
  { id: 2, name: "Workshop on AI", org: "NXT WEAB", date: "January 2025", credentialId: "RD-002", image: Cert2 },
  { id: 3, name: "Soft skills", org: "TCS ion", date: "March 2025", credentialId: "DC-003", image: Cert3 },
  { id: 4, name: "NAT-Japanese (Q5)", org: "", date: "Feburary 2026", credentialId: "NE-004", image: Cert4 },
  { id: 5, name:  "Digital Circuits", org: "NPTEL", date: "March 2025", credentialId: "DC-003", image: Cert5 },
];

export default function Certificates() {
  const [active, setActive] = useState(0);
  const [selected, setSelected] = useState(null);
  const [paused, setPaused] = useState(false);

  const spacing = 200;
  const stars = Array.from({ length: 90 });

  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % certificates.length);
    }, 1800);

    return () => clearInterval(timer);
  }, [paused]);

  const getOffset = (index) => {
    let offset = index - active;

    if (offset > certificates.length / 2) offset -= certificates.length;
    if (offset < -certificates.length / 2) offset += certificates.length;

    return offset;
  };

  return (
     <section
      id="certificates"
      className="relative max-w-6xl mx-auto px-6 py-20 overflow-hidden"
    >
      {/* 🌌 BACKGROUND PARTICLES */}
      <div className="particles">
        {stars.map((_, i) => (
          <span
            key={i}
            className="star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${6 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* TITLE */}
      <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
        Certificates
      </h2>

      {/* COVERFLOW */}
      <div
        className="coverflow"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {certificates.map((cert, index) => {
          const offset = getOffset(index);

          return (
            <motion.div
              key={cert.id}
              className="certificate-card"
              animate={{
                x: offset * spacing,
                scale: offset === 0 ? 1 : 0.82,
                rotateY: offset * -18,
                y: offset === 0 ? 0 : 20,
                opacity: Math.abs(offset) > 2 ? 0 : 1,
                zIndex: 100 - Math.abs(offset),
              }}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 20,
              }}
              whileHover={{
                scale: offset === 0 ? 1.1 : 0.9,
                y: -15,
                boxShadow:
                  "0 0 35px rgba(139,92,246,0.8), 0 0 70px rgba(139,92,246,0.5)",
              }}
              onClick={() => setActive(index)}
            >
              <div className="card-content">
                <h3>{cert.name}</h3>
                <p><strong>Issued by:</strong> {cert.org}</p>
                <p><strong>Date:</strong> {cert.date}</p>
                <p><strong>ID:</strong> {cert.credentialId}</p>

                <button
                  className="view-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelected(cert.image);
                  }}
                >
                  View Certificate
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* DOTS (FIXED POSITION) */}
      <div className="dots">
        {certificates.map((_, index) => (
          <span
            key={index}
            className={active === index ? "dot active" : "dot"}
            onClick={() => setActive(index)}
          />
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button className="close-btn" onClick={() => setSelected(null)}>
              ✕
            </button>

            <motion.img
              src={selected}
              className="modal-image"
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}