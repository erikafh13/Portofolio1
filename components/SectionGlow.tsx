type GlowProps = {
  variant?: "top-right" | "bottom-left";
  tint?: "accent" | "navy";
};

export default function SectionGlow({ variant = "top-right", tint = "accent" }: GlowProps) {
  const position =
    variant === "top-right" ? "-top-24 -right-16 sm:-right-24" : "-bottom-24 -left-16 sm:-left-24";
  const color =
    tint === "accent"
      ? "bg-accent/10 dark:bg-accent-dark/10"
      : "bg-navy/10 dark:bg-accent-dark/[0.08]";

  return (
    <div
      className={`pointer-events-none absolute ${position} -z-10 h-72 w-72 rounded-full ${color} blur-[90px]`}
      aria-hidden="true"
    />
  );
}
