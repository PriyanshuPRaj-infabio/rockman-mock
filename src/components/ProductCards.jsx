// src/components/ProductCards.jsx

import aluminiumCasting from "../assets/products/Aluminium-Casting-Graphics_Homepage.png";
import alloyWheel from "../assets/products/alloywheel.png";
import autoChain from "../assets/products/Auto-chain-V7.png";
import carbonComposite from "../assets/products/rockman2.png";
import industrialChain from "../assets/products/Group-77-1.png";

const products = [
  {
    image: aluminiumCasting,
    title: "Aluminium Castings",
    desc: "Advanced-grade complex die-cast components and finished parts for automotives.",
    dark: true,
  },
  {
    image: alloyWheel,
    title: "Alloy Wheels",
    desc: "Completely automated production of alloy wheels for two and four wheelers.",
    dark: false,
  },
  {
    image: autoChain,
    title: "Auto Chains",
    desc: "Two & three wheeler auto chains of superior quality and durability.",
    dark: true,
  },
  {
    image: carbonComposite,
    title: "Carbon Composites",
    desc: "Complex carbon parts and assemblies simplified with a certified production process.",
    dark: false,
  },
  {
    image: industrialChain,
    title: "Industrial Chains",
    desc: "Heavy-duty chains built for superior tensile strength and durability.",
    dark: true,
  },
];

export default function ProductCards() {
  return (
    <section
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#f3f3f3",
        padding: "140px 80px",
        position: "relative",
      }}
    >
      {/* right side dots */}
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
            width: "14px",
            height: "14px",
            borderRadius: "50%",
            border: "2px solid #111",
            background: "transparent",
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
            width: "7px",
            height: "7px",
            borderRadius: "50%",
            background: "#888",
          }}
        ></span>
      </div>

      {/* heading */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "80px",
        }}
      >
        <h2
          style={{
            fontSize: "64px",
            fontWeight: "700",
            color: "#000",
            marginBottom: "22px",
          }}
        >
          Product Portfolio
        </h2>

        <p
          style={{
            fontSize: "32px",
            color: "#222",
            fontWeight: "400",
          }}
        >
          Castings To Carbon Components – Quality Is A Constant
        </p>
      </div>

      {/* cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "16px",
          maxWidth: "1320px",
          margin: "0 auto",
        }}
      >
        {products.map((item, index) => (
          <div
            key={index}
            style={{
              background: item.dark ? "#0f4aa3" : "#d8e5f7",
              padding: "40px 26px",
              minHeight: "620px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              transition: "0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0px)";
            }}
          >
            {/* image circle */}
            <div
              style={{
                width: "230px",
                height: "230px",
                borderRadius: "50%",
                border: `2px dashed ${
                  item.dark ? "rgba(255,255,255,0.5)" : "#8aa9db"
                }`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "30px",
              }}
            >
              <div
                style={{
                  width: "190px",
                  height: "190px",
                  borderRadius: "50%",
                  background: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "75%",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>

            {/* title */}
            <h3
              style={{
                fontSize: "24px",
                fontWeight: "700",
                color: item.dark ? "#fff" : "#111",
                textAlign: "center",
                marginBottom: "18px",
                lineHeight: "1.3",
              }}
            >
              {item.title}
            </h3>

            {/* desc */}
            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.8",
                textAlign: "center",
                color: item.dark ? "#fff" : "#111",
                flex: 1,
              }}
            >
              {item.desc}
            </p>

            {/* arrow */}
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                border: `1px solid ${
                  item.dark ? "rgba(255,255,255,0.6)" : "#0f4aa3"
                }`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: item.dark ? "#fff" : "#0f4aa3",
                marginTop: "30px",
                fontSize: "22px",
              }}
            >
              →
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}