"use client";

import { createElement } from "react";
import { useInView, fadeUpStyle } from "@/hooks/useInView";

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  as?: React.ElementType;
}

export default function AnimatedSection({
  children,
  delay = 0,
  className,
  style,
  as: Tag = "div",
}: AnimatedSectionProps) {
  const { ref, inView } = useInView({ threshold: 0.1, once: true });

  return createElement(
    Tag,
    {
      ref: ref as React.Ref<HTMLElement>,
      className,
      style: { ...fadeUpStyle(inView, delay), ...style },
    },
    children
  );
}