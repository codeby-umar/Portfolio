import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const FEATURED_PROJECTS = [
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
];

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
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 50% at 30% 0%, rgba(232,255,0,0.04) 0%, transparent 70%)", opacity: hovered ? 1 : 0, transition: "opacity 0.4s", pointerEvents: "none" }} />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "24px" }}>
        <div>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", color: "#e8ff00", letterSpacing: "0.2em", marginBottom: "4px" }}>{project.num}</div>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.48rem", color: "#1e1e1e", letterSpacing: "0.15em" }}>{project.year}</div>
        </div>
        <a href={project.href} style={{ color: hovered ? "#e8ff00" : "#222", transition: "color 0.2s, transform 0.2s", transform: hovered ? "translate(2px,-2px)" : "none", display: "block" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </a>
      </div>

      <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.1rem", color: hovered ? "#e8ff00" : "#c8c8c8", marginBottom: "12px", transition: "color 0.2s", lineHeight: 1.2 }}>
        {project.title}
      </h3>
      <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", color: "#333", lineHeight: "1.9", marginBottom: "20px" }}>
        {project.desc}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {project.tags.map(t => <Tag key={t}>{t}</Tag>)}
      </div>
    </div>
  );
}

export default function Home() {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 120);
    return () => clearTimeout(t);
  }, []);

  const fade = (delay = 0) => ({
    opacity: heroVisible ? 1 : 0,
    transform: heroVisible ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
  });

  return (
    <div style={{ background: "#080808", color: "#d8d8d8", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        a { text-decoration: none; color: inherit; }
        body { overflow-x: hidden; }
        @keyframes pulse-dot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
        }
        @keyframes scrollLine {
          0%   { transform: scaleY(0); transform-origin: top; }
          50%  { transform: scaleY(1); transform-origin: top; }
          51%  { transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
        .scroll-line { animation: scrollLine 2s ease-in-out infinite; }
        .pulse-dot   { animation: pulse-dot 2s ease infinite; }
      `}</style>

      {/* Background grid */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", backgroundImage: "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)", backgroundSize: "55px 55px" }} />
      <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", background: "radial-gradient(ellipse 70% 50% at 50% -5%, rgba(232,255,0,0.05) 0%, transparent 65%)" }} />

      <div style={{ position: "relative", zIndex: 10 }}>

        {/* ── HERO ── */}
        <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", overflow: "hidden", padding: "100px 32px 80px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%", position: "relative", zIndex: 10 }}>

            {/* Badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "1px solid #1a1a1a", padding: "6px 14px", marginBottom: "48px", borderRadius: "2px", ...fade(0.15) }}>
              <span className="pulse-dot" style={{ width: "6px", height: "6px", background: "#e8ff00", borderRadius: "50%", display: "inline-block" }} />
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.58rem", color: "#383838", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                Available for freelance — 2025
              </span>
            </div>

            {/* Name */}
            <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 900, fontSize: "clamp(2.8rem, 10vw, 8.5rem)", lineHeight: 0.88, color: "#d8d8d8", letterSpacing: "-0.03em", marginBottom: "4px", ...fade(0.3) }}>
              SHAXRIYOR
            </h1>
            <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 900, fontSize: "clamp(2.8rem, 10vw, 8.5rem)", lineHeight: 0.88, letterSpacing: "-0.03em", marginBottom: "52px", color: "transparent", WebkitTextStroke: "1px #222", ...fade(0.45) }}>
              TURG'UNBOYOV
            </h1>

            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "32px" }}>
              <div style={fade(0.6)}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                  <span style={{ height: "1px", width: "28px", background: "#e8ff00" }} />
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "#e8ff00", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                    Front-end Developer
                  </span>
                </div>
                <p style={{ maxWidth: "400px", color: "#383838", fontSize: "0.75rem", fontFamily: "'Space Mono', monospace", lineHeight: "2.1" }}>
                  Freelancer with <span style={{ color: "#c8c8c8" }}>2+ years</span> of experience. I code and create web elements for amazing people around the world. 🇺🇿
                </p>
              </div>

              {/* Buttons */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%", maxWidth: "280px", ...fade(0.75) }}>
                <NavLink
                  to="/projects"
                  style={{ background: "#e8ff00", color: "#080808", fontFamily: "'Space Mono', monospace", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "lowercase", padding: "14px 32px", borderRadius: "2px", textAlign: "center", transition: "background 0.2s, box-shadow 0.2s", display: "block" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#d4eb00"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(232,255,0,0.2)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "#e8ff00"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  view work
                </NavLink>
                <NavLink
                  to="/contact"
                  style={{ border: "1px solid #1e1e1e", color: "#383838", fontFamily: "'Space Mono', monospace", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "lowercase", padding: "14px 32px", borderRadius: "2px", textAlign: "center", transition: "border-color 0.2s, color 0.2s", display: "block" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#e8ff00"; e.currentTarget.style.color = "#e8ff00"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#1e1e1e"; e.currentTarget.style.color = "#383838"; }}
                >
                  get in touch
                </NavLink>
              </div>
            </div>
          </div>

          {/* ST watermark */}
          <div style={{ position: "absolute", right: "-1rem", top: "50%", transform: "translateY(-50%)", fontFamily: "'Syne', sans-serif", fontWeight: 900, fontSize: "clamp(5rem,15vw,15rem)", color: "transparent", WebkitTextStroke: "1px #121212", lineHeight: 0.85, userSelect: "none", pointerEvents: "none", zIndex: 0 }}>
            ST
          </div>

          {/* Scroll indicator */}
          <div style={{ position: "absolute", bottom: "36px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", ...fade(1.1) }}>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", color: "#222", letterSpacing: "0.25em", textTransform: "uppercase" }}>scroll</span>
            <div style={{ width: "1px", height: "44px", background: "#1a1a1a", overflow: "hidden", position: "relative" }}>
              <div className="scroll-line" style={{ position: "absolute", inset: 0, background: "#e8ff00" }} />
            </div>
          </div>
        </section>

        {/* ── FEATURED PROJECTS ── */}
        <section style={{ padding: "80px 32px 96px", borderTop: "1px solid #141414" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "48px", gap: "12px" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", color: "#e8ff00", letterSpacing: "0.2em" }}>02</span>
                  <span style={{ height: "1px", width: "24px", background: "#1e1e1e" }} />
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", color: "#222", letterSpacing: "0.25em", textTransform: "uppercase" }}>featured work</span>
                </div>
                <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 900, fontSize: "clamp(1.8rem, 4.5vw, 3rem)", color: "#d0d0d0" }}>
                  Projects
                </h2>
              </div>
              <NavLink
                to="/projects"
                style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.62rem", color: "#2a2a2a", letterSpacing: "0.15em", transition: "color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.color = "#e8ff00"}
                onMouseLeave={e => e.currentTarget.style.color = "#2a2a2a"}
              >
                all projects →
              </NavLink>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1px", background: "#131313" }}>
              {FEATURED_PROJECTS.map((p, i) => (
                <ProjectCard key={i} project={p} delay={i * 0.1} />
              ))}
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
