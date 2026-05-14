import legacyImage from "../assets/legacy/Legacy-bg.jpg";
import clientStrip from "../assets/products/Client-Homepage.jpg";

export default function Legacy() {
  return (
    <section
      style={{
        width: "100%",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        padding: "80px 0",
      }}
    >
      {/* Background Image */}
      <img
        src={legacyImage}
        alt="Legacy Background"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.15) 0%, rgba(255,255,255,0.08) 50%, rgba(0,0,0,0.4) 100%)",
        }}
      />

      {/* Content Box */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "620px",
          background: "#f5f5f5",
          marginLeft: "12%",
          padding: "38px",
          boxShadow: "0 25px 60px rgba(0,0,0,0.18)",
        }}
      >
        {/* Top Client Strip */}
        <img
          src={clientStrip}
          alt="Clients"
          style={{
            width: "100%",
            marginBottom: "34px",
            objectFit: "contain",
          }}
        />

        {/* Heading */}
        <h2
          style={{
            fontSize: "68px",
            lineHeight: "1.05",
            fontWeight: "800",
            color: "#000",
            marginBottom: "28px",
            letterSpacing: "-2px",
          }}
        >
          The Rich
          <br />
          Legacy Behind
          <br />
          Rockman’s
          <br />
          Emergence
        </h2>

        {/* Blue Line */}
        <div
          style={{
            width: "78px",
            height: "3px",
            background: "#1246A0",
            marginBottom: "34px",
          }}
        />

        {/* Text */}
        <p
          style={{
            fontSize: "20px",
            lineHeight: "1.9",
            color: "#222",
            marginBottom: "42px",
            fontWeight: "400",
          }}
        >
          A household name since 1956 in India,
          synonymous with the words Reliability and
          Dependability, Hero Group ranks amongst one of
          the most respected business houses. The group
          delivers outstanding products and services with
          well-founded commitment to serve the community
          and foster customer satisfaction.
        </p>

        {/* Button */}
        <button
          style={{
            background: "#ff7900",
            border: "none",
            color: "#fff",
            padding: "20px 34px",
            borderRadius: "50px",
            fontWeight: "700",
            fontSize: "14px",
            letterSpacing: "1px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "16px",
            boxShadow: "0 12px 30px rgba(255,121,0,0.35)",
          }}
        >
          THE WORLD OF HERO

          <span
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.22)",
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