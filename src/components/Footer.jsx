import rockmanLogo from "../assets/logos/logo-rockman-new.svg";

export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        background: "#edf2f5",
        marginTop: "0",
      }}
    >
      {/* TOP SECTION */}
      <div
        style={{
          padding: "90px 8% 70px",
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr 1fr 1.2fr 1.1fr",
          gap: "50px",
          alignItems: "flex-start",
        }}
      >
        {/* LOGO */}
        <div>
          <img
            src={rockmanLogo}
            alt="Rockman"
            style={{
              width: "220px",
            }}
          />
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "800",
              letterSpacing: "2px",
              marginBottom: "32px",
              color: "#1a1a1a",
            }}
          >
            QUICK LINKS
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            {[
              "The Hero Group",
              "Rockman Industries",
              "Careers",
              "CSR",
            ].map((item, index) => (
              <a
                key={index}
                href="#"
                style={{
                  textDecoration: "none",
                  color: "#6d6d6d",
                  fontSize: "18px",
                  fontWeight: "400",
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* PRODUCTS */}
        <div>
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "800",
              letterSpacing: "2px",
              marginBottom: "32px",
              color: "#1a1a1a",
            }}
          >
            PRODUCTS
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            {[
              "Aluminium Die Casting",
              "Alloy Wheels",
              "Auto Chain Division",
              "Carbon Composites",
              "After Market Division",
              "Industrial Chain Division",
            ].map((item, index) => (
              <a
                key={index}
                href="#"
                style={{
                  textDecoration: "none",
                  color: "#6d6d6d",
                  fontSize: "18px",
                  fontWeight: "400",
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "800",
              letterSpacing: "2px",
              marginBottom: "32px",
              color: "#1a1a1a",
            }}
          >
            CONTACT US
          </h3>

          <div
            style={{
              color: "#111",
              fontSize: "18px",
              lineHeight: "1.8",
            }}
          >
            <p
              style={{
                fontWeight: "800",
                fontSize: "20px",
                marginBottom: "18px",
              }}
            >
              Rockman Industries Ltd.
            </p>

            <p style={{ marginBottom: "18px" }}>
              Rockman Industries Ltd 9th Floor,
              <br />
              Unit 3&4, Emaar Capital Tower – 2
              <br />
              Sec. 26, Sikanderpur Ghosi, M G
              <br />
              Road, Gurugram – 122002
            </p>

            <p>Phone: +91 1244707700</p>

            <p>
              Email:
              <span style={{ color: "#6b6b6b" }}>
                {" "}
                corporate@rockman.in
              </span>
            </p>
          </div>
        </div>

        {/* REGISTERED OFFICE */}
        <div>
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "800",
              letterSpacing: "2px",
              marginBottom: "32px",
              color: "#1a1a1a",
            }}
          >
            REGISTERED OFFICE
          </h3>

          <div
            style={{
              color: "#111",
              fontSize: "18px",
              lineHeight: "1.8",
            }}
          >
            <p
              style={{
                fontWeight: "800",
                fontSize: "20px",
                marginBottom: "18px",
              }}
            >
              Rockman Industries Ltd.
            </p>

            <p>
              A -7, Focal Point, Phase V,
              <br />
              Ludhiana, Punjab-141010.
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div
        style={{
          background: "#1d1d1f",
          padding: "26px 8%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <p
          style={{
            color: "#8a8a8a",
            fontSize: "15px",
            lineHeight: "1.8",
            maxWidth: "1100px",
          }}
        >
          © 2025 Rockman. Policies | Whistle Blower | ESG Policy |
          Sexual Harassment | Nomination and Remuneration Policy |
          Anti Bribery and Anti Corruption Policy | Privacy Policy |
          Investor Relations
        </p>

        <div
          style={{
            display: "flex",
            gap: "24px",
            color: "#8a8a8a",
            fontSize: "24px",
          }}
        >
          <span>🐦</span>
          <span>in</span>
          <span>▶</span>
        </div>
      </div>
    </footer>
  );
}