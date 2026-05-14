// src/components/Section.jsx

import peopleImage from "../assets/products/people-img.jpg";
import leaderImage from "../assets/products/leader-img.jpg";

export default function Section({
  title,
  text,
  isProductionSystem,
  isPeopleLeadership,
}) {

  /* =========================
     PRODUCTION SYSTEM
  ========================= */

  if (isProductionSystem) {
    return (
      <section
        style={{
          width: "100%",
          minHeight: "100vh",
          background: "#f3f3f3",
          position: "relative",
          padding: "120px 80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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

        {/* main container */}
        <div
          style={{
            width: "100%",
            maxWidth: "1350px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "center",
            gap: "140px",
          }}
        >
          {/* LEFT CONTENT */}
          <div>
            <h2
              style={{
                fontSize: "64px",
                lineHeight: "1.2",
                fontWeight: "700",
                color: "#000",
                marginBottom: "34px",
                maxWidth: "720px",
              }}
            >
              {title}
            </h2>

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
                fontSize: "19px",
                lineHeight: "1.9",
                color: "#222",
                maxWidth: "720px",
              }}
            >
              {text}
            </p>
          </div>

          {/* RIGHT FLOATING BOXES */}
          <div
            style={{
              position: "relative",
              height: "520px",
            }}
          >
            {/* top box */}
            <div
              style={{
                position: "absolute",
                top: "0",
                left: "20px",
                width: "350px",
                background: "#f7f7fb",
                padding: "48px 38px",
                textAlign: "center",
                boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
              }}
            >
              <p
                style={{
                  fontSize: "19px",
                  lineHeight: "1.8",
                  color: "#222",
                }}
              >
                Facilities following global best practices – TPM,
                Quality Circle, GreenCo, etc.
              </p>
            </div>

            {/* bottom box */}
            <div
              style={{
                position: "absolute",
                bottom: "0",
                left: "20px",
                width: "350px",
                background: "#f7f7fb",
                padding: "48px 38px",
                textAlign: "center",
                boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
              }}
            >
              <p
                style={{
                  fontSize: "19px",
                  lineHeight: "1.8",
                  color: "#222",
                }}
              >
                ACMA manufacturing accreditation on robust QA
                system and manufacturing excellence.
              </p>
            </div>

            {/* right floating box */}
            <div
              style={{
                position: "absolute",
                top: "120px",
                right: "-40px",
                width: "320px",
                background: "#f7f7fb",
                padding: "48px 38px",
                textAlign: "center",
                boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
              }}
            >
              <p
                style={{
                  fontSize: "19px",
                  lineHeight: "1.8",
                  color: "#222",
                }}
              >
                Focus on environmental safety and quality control
                system.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* =========================
     PEOPLE + LEADERSHIP
  ========================= */

  if (isPeopleLeadership) {
    return (
      <section
        style={{
          width: "100%",
          minHeight: "100vh",
          background: "#f5f5f5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "120px 0",
        }}
      >
        <div
          style={{
            width: "88%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            alignItems: "center",
            gap: "40px",
          }}
        >
          {/* LEFT BOX */}
          <div
            style={{
              background: "#efefef",
              padding: "80px 60px",
              minHeight: "700px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h2
              style={{
                fontSize: "64px",
                lineHeight: "1.15",
                color: "#000",
                fontWeight: "800",
                marginBottom: "30px",
              }}
            >
              People – Our Pillars Of
              <br />
              Strength
            </h2>

            <div
              style={{
                width: "70px",
                height: "3px",
                background: "#1246A0",
                marginBottom: "36px",
              }}
            />

            <p
              style={{
                fontSize: "22px",
                lineHeight: "1.9",
                color: "#222",
                marginBottom: "50px",
              }}
            >
              We are always on the lookout for people who are
              passionate and believe in ethics and collaboration.
              Our team a mix of qualified professional engineers,
              design experts and visionary leaders guide the
              production journey to a new paradigm.
            </p>

            <button
              style={{
                background: "#ff7900",
                border: "none",
                color: "#fff",
                padding: "18px 32px",
                borderRadius: "50px",
                fontWeight: "700",
                fontSize: "14px",
                letterSpacing: "1px",
                width: "fit-content",
                display: "flex",
                alignItems: "center",
                gap: "14px",
                cursor: "pointer",
              }}
            >
              JOIN THE TEAM →
            </button>
          </div>

          {/* CENTER IMAGES */}
          <div
            style={{
              display: "flex",
              gap: "35px",
              justifyContent: "center",
              alignItems: "center",
              height: "700px",
            }}
          >
            <img
              src={peopleImage}
              alt="People"
              style={{
                width: "48%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            <img
              src={leaderImage}
              alt="Leader"
              style={{
                width: "48%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* RIGHT BOX */}
          <div
            style={{
              background: "#efefef",
              padding: "80px 60px",
              minHeight: "700px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h2
              style={{
                fontSize: "58px",
                lineHeight: "1.2",
                color: "#000",
                fontWeight: "800",
                marginBottom: "30px",
              }}
            >
              Rockman Leadership
            </h2>

            <div
              style={{
                width: "70px",
                height: "3px",
                background: "#1246A0",
                marginBottom: "36px",
              }}
            />

            <p
              style={{
                fontSize: "21px",
                lineHeight: "2",
                color: "#222",
                fontStyle: "italic",
                marginBottom: "40px",
              }}
            >
              “Trust and relating to people are the cornerstone
              of our business philosophy. In whatever we do, we
              keep our promises, and with whoever we partner,
              we focus on the long term.”
            </p>

            <h4
              style={{
                fontSize: "26px",
                lineHeight: "1.7",
                color: "#111",
                fontWeight: "700",
                marginBottom: "50px",
              }}
            >
              Late Dr. Brijmohan Lall Munjal,
              <br />
              Founder Chairman,
              <br />
              The Hero Group
            </h4>

            <button
              style={{
                background: "#ff7900",
                border: "none",
                color: "#fff",
                padding: "18px 32px",
                borderRadius: "50px",
                fontWeight: "700",
                fontSize: "14px",
                letterSpacing: "1px",
                width: "fit-content",
                cursor: "pointer",
              }}
            >
              MEET THE LEADERS →
            </button>
          </div>
        </div>
      </section>
    );
  }

  return null;
}