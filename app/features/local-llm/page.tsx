import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "On-Device Local LLM — OceanAI", description: "OceanAI runs a full LLM on your phone via MediaPipe — no internet, no cloud, zero data leaves your device." };

export default function LocalLLMPage() {
  return (
    <>
      <section style={{ paddingTop: 140, paddingBottom: 80, background: "linear-gradient(160deg, #0A1628 0%, #1a2a44 100%)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <div style={{ display: "inline-flex", padding: "5px 14px", borderRadius: 100, background: "rgba(139,92,246,0.15)", color: "#A78BFA", fontSize: "0.8125rem", fontWeight: 600, letterSpacing: "0.04em", marginBottom: 20 }}>Edge AI · On-Device LLM</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(2rem, 4.5vw, 3.25rem)", color: "white", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 20 }}>
            The AI that runs<br />
            <span style={{ background: "linear-gradient(135deg, #A78BFA, #0DB87A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>without the internet.</span>
          </h1>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "rgba(255,255,255,0.5)", maxWidth: 560, marginBottom: 32 }}>
            OceanAI&apos;s on-device LLM runs fully offline on your Android or iPhone. No server. No cloud. Your conversations with your health AI never leave your device.
          </p>
          <Link href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="btn-primary">Download OceanAI</Link>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--bg-primary)" }}>
        <div className="container" style={{ maxWidth: 880 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <div>
              <h2 className="display-md" style={{ marginBottom: 20 }}>Why on-device matters</h2>
              {[
                { title: "100% private", desc: "Your health data never touches a server. Conversations, diagnoses, and lab results stay on your phone." },
                { title: "Works anywhere", desc: "No Wi-Fi, no mobile data, no problem. Full AI capability in a hospital, on a mountain, mid-flight." },
                { title: "Zero latency", desc: "Responses come from your own CPU/GPU — no round trip to a server. Instant." },
                { title: "No subscription risk", desc: "On-device AI doesn&apos;t go offline when a cloud provider has an outage." },
              ].map((p) => (
                <div key={p.title} style={{ display: "flex", gap: 14, marginBottom: 20 }}>
                  <div style={{ width: 22, height: 22, borderRadius: "50%", background: "var(--accent-light)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                    <div style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--accent)" }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.9375rem", color: "var(--text-primary)", marginBottom: 4 }}>{p.title}</div>
                    <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ padding: "28px 28px", background: "var(--bg-deep)", borderRadius: 20 }}>
              <div style={{ display: "inline-flex", padding: "4px 12px", background: "rgba(26,107,255,0.12)", border: "1px solid rgba(26,107,255,0.2)", borderRadius: 100, color: "#60A5FA", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 20 }}>Technical stack</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { label: "Inference engine", val: "MediaPipe C++ native bridge" },
                  { label: "Model", val: "Gemma-2B quantized (INT4)" },
                  { label: "Platform", val: "Android 12+ · iOS 16+" },
                  { label: "Memory footprint", val: "~1.2 GB RAM" },
                  { label: "Fallback", val: "Cloud LLM when device limits reached" },
                ].map((r) => (
                  <div key={r.label} style={{ display: "flex", justifyContent: "space-between", paddingBottom: 12, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                    <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)" }}>{r.label}</span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8125rem", color: "#60A5FA", fontWeight: 600 }}>{r.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`@media(max-width:768px){div[style*="grid-template-columns: 1fr 1fr"]{grid-template-columns:1fr!important}}`}</style>
    </>
  );
}
