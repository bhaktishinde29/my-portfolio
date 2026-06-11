import ProjectCard from "./ProjectCard";
import "./Projects.css";

import med from "../assets/med.jpg";
import portfolio from "../assets/portfolio.png";
import food from "../assets/food.png";

const projects = [
  {
    title: "Medfind: Medicine Management Website",
    description: "Full-stack medicine ordering platform with auth & cart.",
    tech: ["Java", "Spring Boot", "MySQL", "Maven"],
    image: med,
    live:
      "https://drive.google.com/file/d/19rkDB0WQEdLG1fr-wYNE9LHtmi2IdUkK/view?usp=drivesdk",
    github: "https://github.com/bhaktishinde29/medifind",
  },
  {
    title: "Portfolio Website",
    description: "Modern animated portfolio with smooth UI.",
    tech: ["React", "Framer Motion"],
    image: portfolio,
    live: "#",
    github: "#",
  },
  {
    title: "Food Website",
    description: "Clean shopping UI with modern design.",
    tech: ["HTML", "React", "CSS"],
    image: food,
    live: "https://bhaktishinde29.github.io/Food-website/",
    github: "https://github.com/bhaktishinde29/Food-website",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative max-w-6xl mx-auto px-6 py-5 overflow-hidden"
    >
      {/* Floating White Dots */}
      <div className="floating-dots">
        {[...Array(80)].map((_, i) => (
          <span
            key={i}
            className="dot"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
        Projects
      </h2>

      <p className="section-subtitle">
        A selection of things I’ve built and experimented with
      </p>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </section>
  );
}