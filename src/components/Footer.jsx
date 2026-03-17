import React, { useEffect, useRef } from "react";

const SOCIALS = [
  {
    label: "Telegram",
    href: "https://t.me/Shahriyor_frontend",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "#",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:shahkweb2008@gmail.com",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Footer() {
  const marqRef = useRef(null);

  useEffect(() => {
    const el = marqRef.current;
    if (!el) return;
    let x = 0;
    let raf;
    const step = () => {
      x -= 0.4;
      const w = el.scrollWidth / 2;
      if (Math.abs(x) >= w) x = 0;
      el.style.transform = `translateX(${x}px)`;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <footer
      style={{
        background: "#0a0a0a",
        borderTop: "1px solid #1a1a1a",
        fontFamily: "'Space Mono', 'Courier New', monospace",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Decorative grid lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(232,255,0,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(232,255,0,0.015) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* Accent glow */}
      <div
        style={{
          position: "absolute",
          top: "-80px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "500px",
          height: "160px",
          background: "radial-gradient(ellipse, rgba(232,255,0,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Marquee strip */}
      <div
        style={{
          borderBottom: "1px solid #1a1a1a",
          borderTop: "1px solid #1a1a1a",
          overflow: "hidden",
          padding: "10px 0",
          background: "#0d0d0d",
        }}
      >
        <div ref={marqRef} style={{ display: "flex", whiteSpace: "nowrap", willChange: "transform" }}>
          {Array(8)
            .fill(null)
            .map((_, i) => (
              <span
                key={i}
                style={{
                  fontSize: "0.55rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: i % 2 === 0 ? "#1e1e1e" : "#e8ff00",
                  marginRight: "3rem",
                  userSelect: "none",
                }}
              >
                {i % 2 === 0 ? "FRONT-END DEVELOPER" : "✦"}
              </span>
            ))}
        </div>
      </div>

      {/* Main footer body */}
      <div style={{ padding: "60px 40px 40px", maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "48px",
            marginBottom: "52px",
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontSize: "2.2rem",
                fontWeight: "700",
                color: "#d8d8d8",
                letterSpacing: "-0.02em",
                marginBottom: "16px",
                lineHeight: 1,
              }}
            >
              ST<span style={{ color: "#e8ff00" }}>.</span>
            </div>
            <p
              style={{
                fontSize: "0.62rem",
                color: "#2e2e2e",
                lineHeight: "2",
                maxWidth: "200px",
                letterSpacing: "0.04em",
              }}
            >
              Front-end Developer from Uzbekistan 🇺🇿. Building web experiences for amazing people worldwide.
            </p>

            {/* Status badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                marginTop: "20px",
                padding: "5px 10px",
                border: "1px solid #1e1e1e",
                borderRadius: "2px",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#e8ff00",
                  boxShadow: "0 0 6px #e8ff00",
                  animation: "pulse 2s ease-in-out infinite",
                }}
              />
              <span style={{ fontSize: "0.5rem", letterSpacing: "0.18em", color: "#3a3a3a", textTransform: "uppercase" }}>
                Available for work
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div
              style={{
                fontSize: "0.5rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#252525",
                marginBottom: "22px",
                paddingBottom: "10px",
                borderBottom: "1px solid #141414",
              }}
            >
              Navigation
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {NAV_LINKS.map((l, i) => (
                <a
                  key={l.label}
                  href={l.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "0.62rem",
                    color: "#2a2a2a",
                    textDecoration: "none",
                    letterSpacing: "0.06em",
                    transition: "color 0.2s, gap 0.2s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#e8ff00";
                    e.currentTarget.querySelector(".arrow").style.opacity = "1";
                    e.currentTarget.querySelector(".arrow").style.transform = "translateX(0)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#2a2a2a";
                    e.currentTarget.querySelector(".arrow").style.opacity = "0";
                    e.currentTarget.querySelector(".arrow").style.transform = "translateX(-6px)";
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.45rem",
                      color: "#1a1a1a",
                      letterSpacing: "0.1em",
                    }}
                  >
                    0{i + 1}
                  </span>
                  {l.label}
                  <span
                    className="arrow"
                    style={{
                      marginLeft: "auto",
                      opacity: 0,
                      transform: "translateX(-6px)",
                      transition: "all 0.2s",
                      color: "#e8ff00",
                      fontSize: "0.7rem",
                    }}
                  >
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <div
              style={{
                fontSize: "0.5rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#252525",
                marginBottom: "22px",
                paddingBottom: "10px",
                borderBottom: "1px solid #141414",
              }}
            >
              Connect
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "0.62rem",
                    color: "#2a2a2a",
                    textDecoration: "none",
                    letterSpacing: "0.06em",
                    transition: "color 0.2s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#e8ff00";
                    e.currentTarget.querySelector(".icon-wrap").style.borderColor = "#e8ff00";
                    e.currentTarget.querySelector(".icon-wrap").style.color = "#e8ff00";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#2a2a2a";
                    e.currentTarget.querySelector(".icon-wrap").style.borderColor = "#1e1e1e";
                    e.currentTarget.querySelector(".icon-wrap").style.color = "#2a2a2a";
                  }}
                >
                  <span
                    className="icon-wrap"
                    style={{
                      width: "26px",
                      height: "26px",
                      border: "1px solid #1e1e1e",
                      borderRadius: "2px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#2a2a2a",
                      flexShrink: 0,
                      transition: "border-color 0.2s, color 0.2s",
                    }}
                  >
                    {s.icon}
                  </span>
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid #111",
            paddingTop: "24px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
          }}
        >
          <span style={{ fontSize: "0.52rem", color: "#1e1e1e", letterSpacing: "0.1em" }}>
            © 2025 Turg'unboyov Shaxriyor. All rights reserved.
          </span>

          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "0.52rem", color: "#1e1e1e", letterSpacing: "0.1em" }}>
              Designed & Built by
            </span>
            <span
              style={{
                fontSize: "0.52rem",
                letterSpacing: "0.1em",
                color: "#e8ff00",
                padding: "2px 6px",
                border: "1px solid rgba(232,255,0,0.2)",
              }}
            >
              ST
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </footer>
  );
}

export default Footer;