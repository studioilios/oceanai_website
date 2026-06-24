export default function Loading() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--bg-primary)",
      gap: 20,
    }}>
      {/* Animated sonar rings */}
      <div style={{ position: "relative", width: 64, height: 64 }}>
        {/* Pulsing rings */}
        {[0, 1, 2].map((i) => (
          <div key={i} style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: "1.5px solid var(--accent)",
            animation: `sonar-ring 2s ease-out ${i * 0.55}s infinite`,
            opacity: 0,
          }} />
        ))}
        {/* Center dot */}
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <div style={{
            width: 20, height: 20, borderRadius: "50%",
            background: "linear-gradient(135deg, #1A6BFF, #0DB87A)",
            animation: "sonar-pulse 1.8s ease-in-out infinite",
          }} />
        </div>
      </div>

      <div style={{
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        fontSize: "0.9rem",
        color: "var(--text-muted)",
        letterSpacing: "0.04em",
      }}>
        Loading...
      </div>
    </div>
  );
}
