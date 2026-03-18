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

const CONTACTS = [
  {
    label: "Send an email",
    value: "shahkweb2008@gmail.com",
    href: "mailto:shahkweb2008@gmail.com",
    primary: true,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    label: "Telegram",
    value: "@Shahriyor_frontend",
    href: "https://t.me/Shahriyor_frontend",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+998 93 798 12 08",
    href: "tel:+998937981208",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
  },
  {
    label: "Skype",
    value: "Shaxriyor.T",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.069 18.874c-4.023 0-5.82-1.979-5.82-3.464 0-.765.561-1.296 1.333-1.296 1.749 0 1.308 2.459 4.487 2.459 1.648 0 2.474-.9 2.474-1.84 0-.545-.262-1.148-1.269-1.405l-3.478-.866c-2.809-.704-3.316-2.223-3.316-3.636 0-2.955 2.insisting-4.029 5.585-4.029 2.558 0 5.447 1.417 5.447 3.105 0 .788-.688 1.25-1.4 1.25-1.538 0-1.2-2.114-4.252-2.114-1.478 0-2.303.647-2.303 1.582 0 .934 1.132 1.239 2.123 1.478l2.81.688c2.83.692 3.401 2.289 3.401 3.858.001 2.497-1.93 4.23-5.822 4.23zM23.917 14.5c.055-.467.083-.943.083-1.424a11.57 11.57 0 0 0-3.379-8.21A11.57 11.57 0 0 0 12.413 1.5c-.48 0-.957.028-1.424.083A6.375 6.375 0 0 0 6.5.5 6.5 6.5 0 0 0 .5 7a6.375 6.375 0 0 0 1.083 4.489c-.055.467-.083.943-.083 1.424a11.57 11.57 0 0 0 3.379 8.21A11.57 11.57 0 0 0 12.587 24.5c.481 0 .957-.028 1.424-.083A6.375 6.375 0 0 0 17.5 25.5a6.5 6.5 0 0 0 6-6.5 6.375 6.375 0 0 0-1.083-4.5z"/>
      </svg>
    ),
  },
];

function ContactCard({ contact, delay = 0 }) {
  const [ref, visible] = useVisible();
  const [hovered, setHovered] = useState(false);

  return (
    <a
      ref={ref}
      href={contact.href}
      target={contact.href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 24px",
        border: `1px solid ${contact.primary ? (hovered ? "#f0ff40" : "#e8ff00") : (hovered ? "#e8ff00" : "#131313")}`,
        background: contact.primary
          ? hovered ? "rgba(232,255,0,0.07)" : "rgba(232,255,0,0.035)"
          : hovered ? "rgba(232,255,0,0.03)" : "#0a0a0a",
        borderRadius: "2px",
        textDecoration: "none",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.55s ease ${delay}s, transform 0.55s ease ${delay}s, border-color 0.2s, background 0.2s`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* left glow on hover */}
      <div style={{
        position: "absolute", left: 0, top: 0, bottom: 0, width: "2px",
        background: "#e8ff00",
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.2s",
      }} />

      <div style={{ display: "flex", alignItems: "center", gap: "16px", minWidth: 0 }}>
        {/* Icon box */}
        <div style={{
          width: "38px", height: "38px", flexShrink: 0,
          border: `1px solid ${hovered || contact.primary ? "rgba(232,255,0,0.25)" : "#1a1a1a"}`,
          borderRadius: "2px",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: contact.primary || hovered ? "#e8ff00" : "#2a2a2a",
          transition: "border-color 0.2s, color 0.2s",
        }}>
          {contact.icon}
        </div>

        <div style={{ minWidth: 0 }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.48rem", color: hovered ? "#555" : "#222", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "5px", transition: "color 0.2s" }}>
            {contact.label}
          </div>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.72rem", color: contact.primary ? "#e8ff00" : (hovered ? "#e8ff00" : "#484848"), wordBreak: "break-all", transition: "color 0.2s" }}>
            {contact.value}
          </div>
        </div>
      </div>

      {/* Arrow */}
      <span style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: "0.9rem",
        color: hovered ? "#e8ff00" : "#1e1e1e",
        marginLeft: "16px", flexShrink: 0,
        transform: hovered ? "translate(2px, -2px)" : "none",
        transition: "color 0.2s, transform 0.2s",
      }}>→</span>
    </a>
  );
}

function Contact() {
  const [titleRef, titleVisible] = useVisible(0.2);

  return (
    <section id="contact" style={{ padding: "96px 32px", borderTop: "1px solid #141414" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@700;800;900&display=swap');
        @keyframes pulse-dot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.6); opacity: 0.4; }
        }
        .avail-dot { animation: pulse-dot 2s ease infinite; }
      `}</style>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "64px" }}>

          {/* ── Left: heading ── */}
          <div
            ref={titleRef}
            style={{
              opacity: titleVisible ? 1 : 0,
              transform: titleVisible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.65s ease, transform 0.65s ease",
            }}
          >
            <SectionEyebrow index="05">contact</SectionEyebrow>

            <div style={{ marginTop: "8px", marginBottom: "32px" }}>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 6vw, 4.5rem)", color: "#d0d0d0", lineHeight: 1 }}>
                Let's work
              </h2>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 6vw, 4.5rem)", lineHeight: 1, color: "transparent", WebkitTextStroke: "1px #1e1e1e" }}>
                together
              </h2>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 6vw, 4.5rem)", color: "#e8ff00", lineHeight: 1 }}>
                now.
              </h2>
            </div>

            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.72rem", color: "#303030", lineHeight: "2.1", maxWidth: "340px", marginBottom: "32px" }}>
              Have a project in mind? Need a landing page, web app or UI redesign? I'm always open to new opportunities and collaborations.
            </p>

            {/* Available badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "1px solid #1a1a1a", padding: "8px 14px", borderRadius: "2px" }}>
              <span className="avail-dot" style={{ width: "6px", height: "6px", background: "#e8ff00", borderRadius: "50%", flexShrink: 0 }} />
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", color: "#2e2e2e", letterSpacing: "0.18em", textTransform: "uppercase" }}>
                Available for freelance
              </span>
            </div>
          </div>

          {/* ── Right: contact cards ── */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "10px" }}>
            {CONTACTS.map((c, i) => (
              <ContactCard key={i} contact={c} delay={0.1 + i * 0.08} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;