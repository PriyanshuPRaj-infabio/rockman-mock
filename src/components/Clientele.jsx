// src/components/Clientele.jsx

import heroLogo from "../assets/logos/hero-logo0.png";
import hondaLogo from "../assets/logos/honda-v2.png";
import hyundaiLogo from "../assets/logos/Hyundai-Logo.png";
import tataLogo from "../assets/logos/tata-v2.png";
import mahindraLogo from "../assets/logos/mahindra-v2.png";
import tvsLogo from "../assets/logos/TVS-logo.png";
import boschLogo from "../assets/logos/bosch-v2.png";
import densoLogo from "../assets/logos/Denso-v2.png";
import fordLogo from "../assets/logos/Ford-v2.png";
import kiaLogo from "../assets/logos/kia-logo-2.png";
import magnaLogo from "../assets/logos/magna-v2.png";
import getragLogo from "../assets/logos/getrag-v2.png";

import atherLogo from "../assets/logos/ather-logo.png";
import revolveLogo from "../assets/logos/revolt-logo-01.png";
import royalLogo from "../assets/logos/royal-infielld-ve.png";
import nemakLogo from "../assets/logos/nemak-v2.png";
import continentalLogo from "../assets/logos/Continen-v2.png";
import hanonLogo from "../assets/logos/hanon-logo-01.png";
import stnadLogo from "../assets/logos/Stanad-v2.png";
import mandoLogo from "../assets/logos/mando-v2.png";

const clientLogos = [
  heroLogo,
  tvsLogo,
  revolveLogo,
  atherLogo,
  royalLogo,

  hyundaiLogo,
  kiaLogo,
  tataLogo,
  stnadLogo,
  nemakLogo,

  mandoLogo,
  mahindraLogo,
  magnaLogo,
  hanonLogo,
  hondaLogo,

  getragLogo,
  fordLogo,
  densoLogo,
  continentalLogo,
  boschLogo,
];

export default function Clientele() {
  return (
    <section
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#f3f3f3",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 80px",
      }}
    >
      {/* right dots */}
      <div
        style={{
          position: "absolute",
          right: "22px",
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        <span
          style={{
            width: "7px",
            height: "7px",
            borderRadius: "50%",
            background: "#888",
          }}
        ></span>

        <span
          style={{
            width: "7px",
            height: "7px",
            borderRadius: "50%",
            background: "#888",
          }}
        ></span>

        <span
          style={{
            width: "14px",
            height: "14px",
            borderRadius: "50%",
            border: "2px solid #111",
            background: "transparent",
          }}
        ></span>
      </div>

      <div
        style={{
          width: "100%",
          maxWidth: "1250px",
          textAlign: "center",
        }}
      >
        {/* heading */}
        <h2
          style={{
            fontSize: "64px",
            color: "#000",
            fontWeight: "700",
            marginBottom: "18px",
          }}
        >
          Our Clientele
        </h2>

        <h3
          style={{
            fontSize: "34px",
            color: "#333",
            fontWeight: "400",
            marginBottom: "34px",
          }}
        >
          Major Names In Automotive OEMs and Manufacturing
        </h3>

        <div
          style={{
            width: "82px",
            height: "3px",
            background: "#1e56b3",
            margin: "0 auto 70px",
          }}
        ></div>

        {/* logos grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "45px 70px",
            alignItems: "center",
            justifyItems: "center",
            marginBottom: "80px",
          }}
        >
          {clientLogos.map((logo, index) => (
            <div
              key={index}
              style={{
                width: "170px",
                height: "70px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0px)";
              }}
            >
              <img
                src={logo}
                alt="client-logo"
                style={{
                  maxWidth: "100%",
                  maxHeight: "60px",
                  objectFit: "contain",
                  filter: "grayscale(0%)",
                }}
              />
            </div>
          ))}
        </div>

        {/* button */}
        <button
          style={{
            border: "none",
            background: "#ff7a00",
            color: "white",
            padding: "22px 38px",
            borderRadius: "60px",
            fontSize: "15px",
            fontWeight: "700",
            letterSpacing: "2px",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "18px",
            boxShadow: "0 15px 35px rgba(255,122,0,.25)",
          }}
        >
          VIEW ALL CLIENTS

          <span
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              background: "rgba(255,255,255,.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
            }}
          >
            →
          </span>
        </button>
      </div>
    </section>
  );
}