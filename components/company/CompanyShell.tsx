export default function CompanyShell({ scene, children }: { scene: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen">
      {scene}
      <div className="relative z-10">{children}</div>
    </div>
  );
}