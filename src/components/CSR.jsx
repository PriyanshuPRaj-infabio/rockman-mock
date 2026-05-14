import skillImg from "../assets/csr/skill.jpg";
import ruralImg from "../assets/csr/rural.jpg";
import educationImg from "../assets/csr/education.jpg";
import environmentImg from "../assets/csr/environment.jpg";

const cards = [
  {
    image: skillImg,
    title: "Skill Development",
  },
  {
    image: ruralImg,
    title: "Rural Infrastructure Improvement",
  },
  {
    image: educationImg,
    title: "Educational Development",
  },
  {
    image: environmentImg,
    title: "Environment - Green initiatives",
  },
];

export default function CSR() {
  return (
    <section
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#f5f5f5",
        padding: "120px 8%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Heading */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "70px",
        }}
      >
        <h2
          style={{
            fontSize: "58px",
            fontWeight: "800",
            color: "#000",
            marginBottom: "16px",
          }}
        >
          Inspiring People Towards Changing Society
        </h2>

        <h3
          style={{
            fontSize: "28px",
            fontWeight: "400",
            color: "#222",
            marginBottom: "28px",
          }}
        >
          We Are More Than Our Manufacturing
        </h3>

        <div
          style={{
            width: "70px",
            height: "3px",
            background: "#1246A0",
            margin: "0 auto",
          }}
        />
      </div>

      {/* Cards */}
      <div
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "22px",
          marginBottom: "50px",
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              height: "230px",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <img
              src={card.image}
              alt={card.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            {/* Dark Overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0.1))",
              }}
            />

            {/* Text */}
            <div
              style={{
                position: "absolute",
                bottom: "18px",
                left: "18px",
                color: "white",
                fontSize: "22px",
                fontWeight: "500",
              }}
            >
              {card.title}
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <button
        style={{
          background: "#ff7a00",
          border: "none",
          color: "white",
          padding: "18px 36px",
          borderRadius: "40px",
          fontWeight: "700",
          fontSize: "14px",
          letterSpacing: "1px",
          cursor: "pointer",
          boxShadow: "0 10px 25px rgba(255,122,0,0.25)",
        }}
      >
        PARIVARTAN WITH ROCKMAN →
      </button>
    </section>
  );
}