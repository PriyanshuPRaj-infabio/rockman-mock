import { useState } from "react";
import logo from "../assets/logos/logo.png";

export default function Header() {
  const [aboutDropdown, setAboutDropdown] = useState(false);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 999,
        padding: "24px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "transparent",
      }}
    >
      <img
        src={logo}
        alt="logo"
        style={{
          width: "120px",
        }}
      />

      <nav
        style={{
          display: "flex",
          gap: "28px",
          fontSize: "18px",
          fontWeight: 500,
        }}
      >
        <div
          style={{ position: "relative" }}
          onMouseEnter={() => setAboutDropdown(true)}
          onMouseLeave={() => setAboutDropdown(false)}
        >
          <a
            href="#"
            style={{
              color: "#333",
              textDecoration: "none",
            }}
          >
            About Us
          </a>
          {aboutDropdown && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                background: "white",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                borderRadius: "8px",
                padding: "10px 0",
                minWidth: "200px",
              }}
            >
              <a
                href="#"
                style={{
                  display: "block",
                  padding: "10px 20px",
                  color: "#333",
                  textDecoration: "none",
                  fontSize: "16px",
                }}
              >
                The Hero Group
              </a>
              <a
                href="#"
                style={{
                  display: "block",
                  padding: "10px 20px",
                  color: "#333",
                  textDecoration: "none",
                  fontSize: "16px",
                }}
              >
                Rockman Industries
              </a>
              <a
                href="#"
                style={{
                  display: "block",
                  padding: "10px 20px",
                  color: "#333",
                  textDecoration: "none",
                  fontSize: "16px",
                }}
              >
                Media
              </a>
            </div>
          )}
        </div>
        <a
          href="#"
          style={{
            color: "#333",
            textDecoration: "none",
          }}
        >
          Clients
        </a>
        <a
          href="#"
          style={{
            color: "#333",
            textDecoration: "none",
          }}
        >
          People
        </a>
        <a
          href="#"
          style={{
            color: "#333",
            textDecoration: "none",
          }}
        >
          Career
        </a>
        <a
          href="#"
          style={{
            color: "#333",
            textDecoration: "none",
          }}
        >
          CSR
        </a>
        <a
          href="#"
          style={{
            color: "#333",
            textDecoration: "none",
          }}
        >
          Blog
        </a>
        <a
          href="#"
          style={{
            color: "#333",
            textDecoration: "none",
          }}
        >
          Contact Us
        </a>
      </nav>
    </header>
  );
}