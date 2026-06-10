import { useRef } from "react";

export default function ProjectCard({ project }) {
  const cardRef = useRef(null);

  // 🛡️ safety check
  if (!project) return null;

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.transform = `
      perspective(1200px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-6px)
      scale(1.02)
    `;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    card.style.transform = `
      perspective(1200px)
      rotateX(0deg)
      rotateY(0deg)
      translateY(0px)
      scale(1)
    `;
  };

  return (
    <div
      ref={cardRef}
      className="project-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-image">
        <img src={project.image || ""} alt={project.title || "Project"} />
      </div>

      <div className="project-content">
        <h3>{project.title || "Untitled Project"}</h3>
        <p>{project.description || ""}</p>

        <div className="tech-stack">
          {(project.tech || []).map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>

        <div className="project-buttons">
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer">
              Live
            </a>
          )}

          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}