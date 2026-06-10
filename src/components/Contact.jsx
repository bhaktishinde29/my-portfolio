import "./Contact.css";
import Galaxy from "./Galaxy";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4o911h8",
        "template_35bxov9",
        form.current,
        "JpMVPIQfhp0R9bA-1"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        () => {
          alert("Failed to send message. Try again.");
        }
      );
  };

  return (
    <section className="contact-section" id="contact">

      {/* 🌟 FLOATING WHITE DOTS */}
      <div className="floating-stars">
        {[...Array(70)].map((_, i) => (
          <span
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${3 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* 🌌 BACKGROUND */}
      <div className="galaxy-bg"></div>

      {/* ✨ HEADING */}
      <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
        Contact Me
      </h2>

      <div className="contact-wrapper">

        {/* 🌌 LEFT */}
        <div className="contact-left">
         
          <Galaxy />

        </div>

        {/* 📩 RIGHT */}
        <form ref={form} onSubmit={sendEmail} className="contact-card">

          <h2>Let’s Work Together</h2>
          <p>Have an idea or project? Let’s build it.</p>

          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          />

          <button type="submit">Send Message</button>
        </form>

      </div>
    </section>
  );
}