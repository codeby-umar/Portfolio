import { useState, useEffect, useRef } from "react";

function useVisible(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function SectionEyebrow({ index, children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
      <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", color: "#e8ff00", letterSpacing: "0.2em" }}>
        {index}
      </span>
      <span style={{ height: "1px", width: "24px", background: "#1e1e1e" }} />
      <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", color: "#222", letterSpacing: "0.25em", textTransform: "uppercase" }}>
        {children}
      </span>
    </div>
  );
}

function Tag({ children }) {
  return (
    <span
      style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.12em", border: "1px solid #1e1e1e", color: "#383838", padding: "3px 9px", borderRadius: "2px", transition: "border-color 0.2s, color 0.2s", cursor: "default", display: "inline-block" }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = "#e8ff00"; e.currentTarget.style.color = "#e8ff00"; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = "#1e1e1e"; e.currentTarget.style.color = "#383838"; }}
    >
      {children}
    </span>
  );
}

function ProjectCard({ project, delay = 0 }) {
  const [ref, visible] = useVisible();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#0b0b0b",
        border: `1px solid ${hovered ? "#252525" : "#131313"}`,
        padding: "32px",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s, border-color 0.3s`,
      }}
    >
      {/* Hover glow */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 60% 50% at 30% 0%, rgba(232,255,0,0.04) 0%, transparent 70%)",
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.4s",
        pointerEvents: "none",
      }} />

      {/* Top row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "24px" }}>
        <div>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", color: "#e8ff00", letterSpacing: "0.2em", marginBottom: "4px" }}>
            {project.num}
          </div>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.48rem", color: "#1e1e1e", letterSpacing: "0.15em" }}>
            {project.year}
          </div>
        </div>
        <a
          href={project.href || "#"}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: hovered ? "#e8ff00" : "#222", transition: "color 0.2s, transform 0.2s", transform: hovered ? "translate(2px,-2px)" : "none", display: "block" }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </a>
      </div>

      {/* Title */}
      <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.1rem", color: hovered ? "#e8ff00" : "#c8c8c8", marginBottom: "12px", transition: "color 0.2s", lineHeight: 1.2 }}>
        {project.title}
      </h3>

      {/* Desc */}
      <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", color: "#333", lineHeight: "1.9", marginBottom: "20px" }}>
        {project.desc}
      </p>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {project.tags.map(t => <Tag key={t}>{t}</Tag>)}
      </div>
    </div>
  );
}

const PROJECTS = [
  {
    num: "01",
    year: "2024",
    title: "E-Commerce UI",
    desc: "Modern e-commerce frontend with smooth animations, responsive layout and optimized performance across all devices.",
    tags: ["React", "Tailwind", "Framer Motion", "Next.js"],
    href: "#",
  },
  {
    num: "02",
    year: "2024",
    title: "Portfolio Template",
    desc: "Minimalist developer portfolio template used by 50+ developers. Clean design with dark/light mode support.",
    tags: ["HTML", "CSS", "JavaScript", "GSAP"],
    href: "#",
  },
  {
    num: "03",
    year: "2023",
    title: "Dashboard UI Kit",
    desc: "Admin dashboard component library with 40+ reusable components. Fully responsive and accessible.",
    tags: ["React", "TypeScript", "Recharts", "Tailwind"],
    href: "#",
  },
  {
    num: "04",
    year: "2023",
    title: "Landing Page Pack",
    desc: "Collection of high-converting landing pages for startups. Pixel-perfect design to code conversion.",
    tags: ["HTML", "CSS", "JavaScript", "Figma"],
    href: "#",
  },
];

function Projects() {
  return (
    <section id="work" style={{ padding: "96px 32px", borderTop: "1px solid #141414" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@700;800;900&display=swap');
      `}</style>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "56px", gap: "16px" }}>
          <div>
            <SectionEyebrow index="02">selected work</SectionEyebrow>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 900, fontSize: "clamp(1.8rem, 4.5vw, 3rem)", color: "#d0d0d0" }}>
              Projects
            </h2>
          </div>
          <a
            href="#"
            style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.62rem", color: "#2a2a2a", letterSpacing: "0.15em", transition: "color 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.color = "#e8ff00"}
            onMouseLeave={e => e.currentTarget.style.color = "#2a2a2a"}
          >
            all projects →
          </a>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1px", background: "#131313" }}>
          {PROJECTS.map((p, i) => (
            <ProjectCard key={i} project={p} delay={i * 0.08} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;