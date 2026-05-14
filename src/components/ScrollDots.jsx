export default function ScrollDots() {
  return (
    <div
      style={{
        position: "fixed",
        right: "25px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 999,
        display: "flex",
        flexDirection: "column",
        gap: "18px",
      }}
    >
      {[1,2,3,4,5,6,7].map((dot) => (
        <div
          key={dot}
          style={{
            width: "7px",
            height: "7px",
            borderRadius: "50%",
            background: "#999",
            cursor: "pointer",
          }}
        />
      ))}
    </div>
  );
}