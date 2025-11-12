export default function HomePage() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "2rem",
      fontFamily: "ui-sans-serif, system-ui, -apple-system"
    }}>
      <h1 style={{ fontSize: "3rem", fontWeight: 700, marginBottom: "0.75rem" }}>
        Natalie Lord
      </h1>
      <p style={{ fontSize: "1.1rem", maxWidth: 640, color: "#4b5563", marginBottom: "1.25rem" }}>
        WIP.
      </p>
    </main>
  );
}
