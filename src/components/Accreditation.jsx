// src/components/Accreditation.jsx

import awardsImage from "../assets/products/awards-graphics-homepage-1.png";

export default function Accreditation() {
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

      {/* main container */}
      <div
        style={{
          width: "100%",
          maxWidth: "1350px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "120px",
          alignItems: "center",
        }}
      >
        {/* LEFT SIDE */}
        <div>
          {/* vertical icons */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              marginBottom: "40px",
            }}
          >
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                style={{
                  width: "96px",
                  height: "96px",
                  borderRadius: "50%",
                  background: "#173f8a",
                  border: "4px solid #f29a4a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "38px",
                }}
              >
                ⚙
              </div>
            ))}
          </div>

          <h2
            style={{
              fontSize: "66px",
              lineHeight: "1.1",
              color: "#000",
              fontWeight: "700",
              marginBottom: "12px",
            }}
          >
            Accrediations
          </h2>

          <h3
            style={{
              fontSize: "34px",
              fontWeight: "400",
              color: "#333",
              marginBottom: "40px",
            }}
          >
            By Globally Recognised Institutions
          </h3>

          <div
            style={{
              width: "82px",
              height: "3px",
              background: "#1e56b3",
              marginBottom: "40px",
            }}
          ></div>

          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.9",
              color: "#222",
              maxWidth: "720px",
              marginBottom: "55px",
            }}
          >
            Our proven manufacturing from die-casting to carbon composites
            have been recognised with multiple certifications, with quality
            products enriching the global market.
          </p>

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
            OUR CASTING EXPERTISE

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

        {/* RIGHT SIDE */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={awardsImage}
            alt="Accreditations"
            style={{
              width: "100%",
              maxWidth: "720px",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </section>
  );
}