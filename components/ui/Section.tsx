export default function Section({
  id,
  children,
  className = "",
  align = "center",
  maxWidth = "max-w-2xl",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center" | "right";
  maxWidth?: string;
}) {
  const justify =
    align === "left"
      ? "justify-start text-left"
      : align === "right"
        ? "justify-end text-right"
        : "justify-center text-left";

  return (
    <section
      id={id}
      className={`section-shell min-h-screen w-full flex items-center ${justify} px-6 md:px-16 py-24 ${className}`}
    >
      <div className={`relative w-full ${maxWidth}`}>
        {/* Halo — a blurred dark ellipse sitting behind the text, sized to
            the content box rather than the viewport, so it works whether
            the section is left, right, or center aligned. */}
        <div
          className="absolute -inset-x-6 -inset-y-8 -z-10 rounded-[3rem] bg-abyss/55 blur-3xl"
          aria-hidden
        />
        {children}
      </div>
    </section>
  );
}
