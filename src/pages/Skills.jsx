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

function SkillCard({ skill, delay = 0 }) {
  const [ref, visible] = useVisible();
  const [hovered, setHovered] = useState(false);
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#0d0d08" : "#0b0b0b",
        border: `1px solid ${hovered ? "#e8ff00" : "#131313"}`,
        padding: "32px",
        cursor: "default",
        opacity: visible ? 1 : 0,
        transform: visible ? (hovered ? "translateY(-3px)" : "translateY(0)") : "translateY(28px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.3s ease, border-color 0.3s, background 0.3s`,
      }}
    >
      <div style={{
        fontFamily: "'Space Mono', monospace",
        fontWeight: 700,
        fontSize: "0.75rem",
        letterSpacing: "0.1em",
        color: hovered ? "#e8ff00" : "#252525",
        marginBottom: "16px",
        transition: "color 0.3s",
        height: "28px",
        display: "flex",
        alignItems: "center",
      }}>
        {skill.icon}
      </div>
      <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#c0c0c0", marginBottom: "10px" }}>
        {skill.title}
      </h3>
      <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.68rem", color: "#333", lineHeight: "1.9" }}>
        {skill.desc}
      </p>
    </div>
  );
}

const SKILLS = [
  { icon: "< />", title: "HTML & CSS", desc: "Semantic HTML5, modern CSS3, animations, flexbox, grid. Pixel-perfect layouts from any design." },
  { icon: "⚛", title: "React & Next.js", desc: "Component-based UIs, hooks, state management, SSR/SSG with Next.js for production-ready apps." },
  { icon: "JS", title: "JavaScript", desc: "ES6+, async/await, DOM manipulation, REST APIs integration. Clean and maintainable code." },
  { icon: "tw", title: "Tailwind CSS", desc: "Rapid UI development with utility-first CSS. Custom design systems and responsive layouts." },
  { icon: "✦", title: "Figma & Design", desc: "Design to code conversion, UI/UX principles, responsive design, prototyping and wireframing." },
  { icon: "git", title: "Git & Tools", desc: "Git, GitHub, VS Code, npm/yarn. Version control, collaboration and modern dev workflow." },
  { icon: "Python", title: "Python", desc: "Git, GitHub, VS Code, npm/yarn. Version control, collaboration and modern dev workflow." },
  { icon: "Node.js", title: "Node JS", desc: "Git, GitHub, VS Code, npm/yarn. Version control, collaboration and modern dev workflow." },
];


function Skills() {
  return (
    <section id="skills" style={{ padding: "96px 32px", borderTop: "1px solid #141414" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@700;800;900&display=swap');`}</style>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ marginBottom: "56px" }}>
          <SectionEyebrow index="03">capabilities</SectionEyebrow>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 900, fontSize: "clamp(1.8rem, 4.5vw, 3rem)", color: "#d0d0d0" }}>
            Stack
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1px", background: "#131313" }}>
          {SKILLS.map((s, i) => <SkillCard key={i} skill={s} delay={i * 0.07} />)}
        </div>
      </div>
    </section>
  );
}

export default Skills;