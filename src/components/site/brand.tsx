export function AcademyLogo({ className }: { className?: string }) {
  return (
    <img src="/assets/logo-whatsapp.png" className={className} alt="Sports Life logo" style={{ objectFit: 'contain' }} />
  );
}

export function ShuttleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      <path
        d="M32 4 14 30h36L32 4Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
        opacity="0.85"
      />
      <path d="M32 4v26M22 16h20M18 24h28" stroke="currentColor" strokeWidth="1.6" opacity="0.5" />
      <path
        d="M14 30h36l-4 12a14 14 0 0 1-28 0l-4-12Z"
        fill="currentColor"
        fillOpacity="0.18"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({ className, textClassName }: { className?: string; textClassName?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className ?? ""}`}>
      <span className="relative grid size-12 place-items-center overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-border/40">
        <AcademyLogo className="size-10" />
      </span>
      <span className="flex flex-col leading-[0.95]">
        <span className={`font-display text-2xl font-black uppercase tracking-tight ${textClassName ?? (className?.includes("text-white") ? "text-white" : "text-foreground")}`}>
          SPORTS
        </span>
        <span
          className="font-display text-2xl font-black uppercase tracking-tight"
          style={{
            backgroundImage:
              "linear-gradient(135deg, var(--logo-green) 0%, var(--logo-green) 55%, var(--logo-amber) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          LIFE
        </span>
      </span>
    </span>
  );
}
