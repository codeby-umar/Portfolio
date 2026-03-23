import { useState, useEffect, useRef } from "react";

function useVisible(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible];
}

function SectionEyebrow({ index, children }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        marginBottom: "10px",
      }}
    >
      <span
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "0.5rem",
          color: "#e8ff00",
          letterSpacing: "0.2em",
        }}
      >
        {index}
      </span>
      <span style={{ height: "1px", width: "24px", background: "#1e1e1e" }} />
      <span
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "0.5rem",
          color: "#222",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
        }}
      >
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
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "Telegram",
    value: "@byumardev",
    href: "https://t.me/byumardev",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0h-.056zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+998 50 712 12 08",
    href: "tel:+998507121208",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
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
        gap: "14px",
        padding: "18px 20px",
        border: `1px solid ${
          contact.primary
            ? hovered
              ? "#f0ff40"
              : "#e8ff00"
            : hovered
            ? "#e8ff00"
            : "#161616"
        }`,
        background: contact.primary
          ? hovered
            ? "rgba(232,255,0,0.07)"
            : "rgba(232,255,0,0.03)"
          : hovered
          ? "rgba(232,255,0,0.03)"
          : "#0a0a0a",
        borderRadius: "10px",
        textDecoration: "none",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.55s ease ${delay}s, transform 0.55s ease ${delay}s, border-color 0.25s, background 0.25s`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "3px",
          background: "#e8ff00",
          opacity: hovered || contact.primary ? 1 : 0,
          transition: "opacity 0.25s",
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          minWidth: 0,
          flex: 1,
        }}
      >
        <div
          style={{
            width: "42px",
            height: "42px",
            flexShrink: 0,
            border: `1px solid ${
              hovered || contact.primary ? "rgba(232,255,0,0.25)" : "#1a1a1a"
            }`,
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: contact.primary || hovered ? "#e8ff00" : "#3a3a3a",
            transition: "border-color 0.25s, color 0.25s",
            background: "rgba(255,255,255,0.01)",
          }}
        >
          {contact.icon}
        </div>

        <div style={{ minWidth: 0 }}>
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.5rem",
              color: hovered ? "#666" : "#2b2b2b",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              marginBottom: "6px",
              transition: "color 0.2s",
            }}
          >
            {contact.label}
          </div>

          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.78rem",
              color: contact.primary ? "#e8ff00" : hovered ? "#e8ff00" : "#8a8a8a",
              wordBreak: "break-all",
              transition: "color 0.2s",
            }}
          >
            {contact.value}
          </div>
        </div>
      </div>

      <span
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "1rem",
          color: hovered ? "#e8ff00" : "#222",
          flexShrink: 0,
          transform: hovered ? "translate(2px, -2px)" : "none",
          transition: "color 0.2s, transform 0.2s",
        }}
      >
        ↗
      </span>
    </a>
  );
}

function Contact() {
  const [titleRef, titleVisible] = useVisible(0.2);

  return (
    <section
      id="contact"
      style={{
        padding: "96px 20px",
        borderTop: "1px solid #141414",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@700;800;900&display=swap');

        @keyframes pulse-dot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.6); opacity: 0.4; }
        }

        .avail-dot { animation: pulse-dot 2s ease infinite; }

        @media (max-width: 768px) {
          .contact-grid {
            gap: 36px !important;
          }

          .contact-title {
            font-size: clamp(1.8rem, 10vw, 3rem) !important;
          }
        }
      `}</style>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "64px",
            alignItems: "center",
          }}
        >
          <div
            ref={titleRef}
            style={{
              opacity: titleVisible ? 1 : 0,
              transform: titleVisible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.65s ease, transform 0.65s ease",
            }}
          >
            <SectionEyebrow index="05">contact</SectionEyebrow>

            <div style={{ marginTop: "8px", marginBottom: "28px" }}>
              <h2
                className="contact-title"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(2.2rem, 6vw, 4.7rem)",
                  color: "#dcdcdc",
                  lineHeight: 0.95,
                }}
              >
                Let’s build
              </h2>
              <h2
                className="contact-title"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(2.2rem, 6vw, 4.7rem)",
                  lineHeight: 0.95,
                  color: "transparent",
                  WebkitTextStroke: "1px #222",
                }}
              >
                something
              </h2>
              <h2
                className="contact-title"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(2.2rem, 6vw, 4.7rem)",
                  color: "#e8ff00",
                  lineHeight: 0.95,
                }}
              >
                great.
              </h2>
            </div>

            <p
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.74rem",
                color: "#5c5c5c",
                lineHeight: "2.1",
                maxWidth: "420px",
                marginBottom: "28px",
              }}
            >
              Have a project in mind or need a modern website? I’m open to
              freelance work, collaborations and new opportunities.
            </p>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                border: "1px solid #1a1a1a",
                padding: "9px 14px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.01)",
              }}
            >
              <span
                className="avail-dot"
                style={{
                  width: "6px",
                  height: "6px",
                  background: "#e8ff00",
                  borderRadius: "50%",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.55rem",
                  color: "#555",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                Available for freelance
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "12px",
            }}
          >
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