"use client";

import { useInView, fadeUpStyle } from "@/hooks/useInView";

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  as?: keyof JSX.IntrinsicElements;
}

export default function AnimatedSection({
  children,
  delay = 0,
  className,
  style,
  as: Tag = "div",
}: AnimatedSectionProps) {
  const { ref, inView } = useInView({ threshold: 0.1, once: true });

  return (
    // @ts-expect-error — dynamic tag
    <Tag
      ref={ref}
      className={className}
      style={{ ...fadeUpStyle(inView, delay), ...style }}
    >
      {children}
    </Tag>
  );
}
