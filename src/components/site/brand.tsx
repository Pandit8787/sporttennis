export function AcademyLogo({ className }: { className?: string }) {
  return (
    <img
      src="/assets/logo-whatsapp.png"
      className={className}
      alt="Sports Life Tennis Academy"
      style={{ objectFit: "contain" }}
      loading="eager"
      decoding="async"
    />
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

export function NavbarBrand({ className }: { className?: string }) {
  return (
    <div className={`group flex items-center gap-2.5 sm:gap-3 ${className ?? ""}`}>
      {/* Sleek Logo Tile Badge */}
      <div className="relative flex size-10 sm:size-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-1 shadow-[0_2px_12px_rgba(0,0,0,0.08)] ring-1 ring-border/60 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_18px_rgba(34,197,94,0.35)]">
        <AcademyLogo className="h-full w-full object-contain" />
      </div>

      {/* Brand Text Lockup */}
      <div className="flex flex-col justify-center text-left leading-tight">
        <div className="flex items-center gap-1">
          <span className="font-display text-base sm:text-lg font-black tracking-tight text-foreground group-hover:text-neon transition-colors">
            SPORTS
          </span>
          <span
            className="font-display text-base sm:text-lg font-black tracking-tight"
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
        </div>
        <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase">
          Tennis Academy
        </span>
      </div>
    </div>
  );
}

export function Logo({ className, textClassName }: { className?: string; textClassName?: string }) {
  return (
    <span className={`group flex items-center gap-3 ${className ?? ""}`}>
      <span className="relative grid size-12 place-items-center overflow-hidden rounded-2xl bg-white p-1.5 shadow-md ring-1 ring-border/50 transition-transform duration-300 group-hover:scale-105">
        <AcademyLogo className="size-full" />
      </span>
      <span className="flex flex-col leading-tight">
        <div className="flex items-center gap-1.5">
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
        </div>
        <span className="text-[10px] font-bold tracking-[0.24em] text-muted-foreground uppercase mt-0.5">
          Tennis Academy
        </span>
      </span>
    </span>
  );
}

