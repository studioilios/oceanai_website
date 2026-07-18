export default function StatCard({
  value,
  label,
  source,
  tone = "alarm",
}: {
  value: string;
  label: string;
  source?: string;
  tone?: "alarm" | "current" | "pulse";
}) {
  const toneClass = tone === "alarm" ? "text-alarm" : tone === "pulse" ? "text-pulse" : "text-current";
  return (
    <div className="panel rounded-2xl p-5 md:p-6">
      <div className={`font-display font-bold text-3xl md:text-4xl tracking-tightest ${toneClass}`}>{value}</div>
      <p className="text-foam/85 text-sm mt-2 leading-snug">{label}</p>
      {source && <p className="text-mist text-[0.7rem] mt-2 font-mono">{source}</p>}
    </div>
  );
}