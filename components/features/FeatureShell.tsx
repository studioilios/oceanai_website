"use client";

import FeatureScene, { FeatureVariant } from "@/components/canvas/FeatureScene";

export default function FeatureShell({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant: FeatureVariant;
}) {
  return (
    <div className="relative min-h-screen">
      <FeatureScene variant={variant} />
      <div className="relative z-10">{children}</div>
    </div>
  );
}