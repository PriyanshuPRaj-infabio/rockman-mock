import { useState, useEffect } from "react";

import hero1 from "../assets/hero/rockman-Slider-alloy-wheel-v2-1024x508.jpg";
import hero2 from "../assets/hero/rockman-Slider-New-1-1024x508.jpg";
import hero3 from "../assets/hero/rockman-Slider-Chain-v2-1024x508.jpg";

const slides = [
  {
    image: hero1,
    subtitle: "Two Wheeler & Four Wheeler Alloy Wheels",
    text: "Leading India's two-wheeler alloy wheel manufacturing and expanding into four-wheeler alloy wheels with 12.5 million and 1 million yearly productions.",
    scale: "135%",
    right: "-12%",
    bottom: "-8%",
  },

  {
    image: hero2,
    subtitle: "Aluminium Die-Casting",
    text: "Based in India, branching out to the rest of the world, Rockman's 240,000+ tonnes of Aluminium processing empowers the assembly and production of automotives.",
    scale: "125%",
    right: "-10%",
    bottom: "-6%",
  },

  {
    image: hero3,
    subtitle: "Auto Chain Division",
    text: "Complete and competent in-house auto chains manufacturing capability drives the country's two-wheeler production and assembly.",
    scale: "170%",
    right: "-30%",
    bottom: "-12%",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const handleWheel = (e) => {
      if (e.deltaY > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    };

    window.addEventListener("wheel", handleWheel, {
      passive: true,
    });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        background: "#dff3f6",
        position: "relative",
      }}
    >
      {/* TRIANGLE PATTERN */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.05,
          backgroundImage:
            "linear-gradient(30deg, rgba(255,255,255,.9) 12%, transparent 12.5%, transparent 87%, rgba(255,255,255,.9) 87.5%, rgba(255,255,255,.9)), linear-gradient(150deg, rgba(255,255,255,.9) 12%, transparent 12.5%, transparent 87%, rgba(255,255,255,.9) 87.5%, rgba(255,255,255,.9)), linear-gradient(30deg, rgba(255,255,255,.9) 12%, transparent 12.5%, transparent 87%, rgba(255,255,255,.9) 87.5%, rgba(255,255,255,.9)), linear-gradient(150deg, rgba(255,255,255,.9) 12%, transparent 12.5%, transparent 87%, rgba(255,255,255,.9) 87.5%, rgba(255,255,255,.9))",
          backgroundSize: "80px 140px",
          backgroundPosition:
            "0 0, 0 0, 40px 70px, 40px 70px",
          zIndex: 1,
        }}
      />

      {/* SLIDER */}
      <div
        style={{
          display: "flex",
          width: `${slides.length * 100}vw`,
          height: "100vh",
          transform: `translateX(-${current * 100}vw)`,
          transition:
            "transform 1s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              width: "100vw",
              height: "100vh",
              flexShrink: 0,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* CONTENT */}
            <div
              style={{
                position: "absolute",
                left: "13%",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10,
                width: "42%",
              }}
            >
              {/* TOP TITLE */}
              <h2
                style={{
                  fontSize: "82px",
                  fontWeight: 200,
                  lineHeight: 1,
                  color: "#1f1f1f",
                  marginBottom: "12px",
                  letterSpacing: "-4px",
                }}
              >
                Shaping The
              </h2>

              {/* MAIN TITLE */}
              <h1
                style={{
                  fontSize: "92px",
                  lineHeight: 0.9,
                  color: "#1548A8",
                  fontWeight: 800,
                  letterSpacing: "-5px",
                  marginBottom: "34px",
                  maxWidth: "760px",
                }}
              >
                Future Of Automotives
              </h1>

              {/* SUBTITLE */}
              <h3
                style={{
                  fontSize: "30px",
                  lineHeight: 1.4,
                  color: "#1f2a5f",
                  fontWeight: 700,
                  marginBottom: "26px",
                  maxWidth: "620px",
                }}
              >
                {slide.subtitle}
              </h3>

              {/* DESCRIPTION */}
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: 1.9,
                  color: "#222",
                  maxWidth: "560px",
                  marginBottom: "42px",
                }}
              >
                {slide.text}
              </p>

              {/* BUTTONS */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "24px",
                }}
              >
                {/* PLAY */}
                <button
                  style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "50%",
                    border: "4px solid rgba(255,255,255,.8)",
                    background: "#1246A0",
                    color: "white",
                    fontSize: "22px",
                    cursor: "pointer",
                    boxShadow:
                      "0 20px 40px rgba(0,0,0,.12)",
                  }}
                >
                  ▶
                </button>

                {/* CTA */}
                <button
                  style={{
                    background: "#ff7a00",
                    color: "white",
                    border: "none",
                    borderRadius: "40px",
                    padding: "18px 36px",
                    fontWeight: 700,
                    letterSpacing: "1px",
                    fontSize: "13px",
                    cursor: "pointer",
                    textTransform: "uppercase",
                    boxShadow:
                      "0 18px 35px rgba(255,122,0,.3)",
                  }}
                >
                  KNOW MORE →
                </button>
              </div>
            </div>

            {/* HERO IMAGE */}
            <div
              style={{
                position: "absolute",
                right: slide.right,
                bottom: slide.bottom,
                width: slide.scale,
                height: "115%",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                zIndex: 3,
                pointerEvents: "none",
              }}
            >
              <img
                src={slide.image}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  filter:
                    "drop-shadow(0 40px 50px rgba(0,0,0,.15))",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* LEFT ARROW */}
      <button
        onClick={prevSlide}
        style={{
          position: "absolute",
          left: "26px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "58px",
          height: "58px",
          borderRadius: "50%",
          border: "none",
          background: "rgba(255,255,255,.5)",
          fontSize: "32px",
          cursor: "pointer",
          zIndex: 30,
          backdropFilter: "blur(10px)",
        }}
      >
        ‹
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={nextSlide}
        style={{
          position: "absolute",
          right: "26px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "58px",
          height: "58px",
          borderRadius: "50%",
          border: "none",
          background: "rgba(255,255,255,.5)",
          fontSize: "32px",
          cursor: "pointer",
          zIndex: 30,
          backdropFilter: "blur(10px)",
        }}
      >
        ›
      </button>

      {/* DOTS */}
      <div
        style={{
          position: "absolute",
          right: "18px",
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          zIndex: 30,
        }}
      >
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            style={{
              width: current === index ? "12px" : "8px",
              height: current === index ? "12px" : "8px",
              borderRadius: "50%",
              border: "2px solid #111",
              background:
                current === index ? "#111" : "transparent",
              cursor: "pointer",
              transition: "all .35s ease",
            }}
          />
        ))}
      </div>
    </section>
  );
}