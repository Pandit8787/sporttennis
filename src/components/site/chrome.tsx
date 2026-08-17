import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ShuttleIcon } from "./brand";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const maxScroll = document.body.scrollHeight - window.innerHeight;
          setProgress(maxScroll > 0 ? Math.min(1, scrollTop / maxScroll) : 0);
          ticking = false;
        });
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[70] h-0.5 origin-left bg-[image:var(--gradient-electric)] pointer-events-none" aria-hidden="true">
      <div className="h-full bg-[image:var(--gradient-electric)] transition-all duration-150" style={{ width: `${progress * 100}%` }} />
    </div>
  );
}

export function ShuttleCursor() {
  return null;
}

export function Loader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(() => {
    if (typeof window !== "undefined") {
      return Boolean(sessionStorage.getItem("sl_visited"));
    }
    return false;
  });

  useEffect(() => {
    if (done) return;

    let raf = 0;
    const start = performance.now();
    const total = 650;
    const tick = (now: number) => {
      const p = Math.min((now - start) / total, 1);
      setProgress(Math.round(100 * (1 - Math.pow(1 - p, 2))));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        sessionStorage.setItem("sl_visited", "true");
        setTimeout(() => setDone(true), 200);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [done]);

  const heroImg = "/loader-preview.jfif";
  const loaderImage = "/loader-preview.jfif";

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-background"
          exit={{ opacity: 0, filter: "blur(12px) scale(1.04)" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url("${heroImg}")`,
              filter: "saturate(1.3) contrast(1.15) brightness(1.05)",
            }}
            aria-hidden
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, color-mix(in oklab, var(--background) 72%, transparent) 0%, color-mix(in oklab, var(--background) 58%, transparent) 35%, color-mix(in oklab, var(--background) 78%, transparent) 70%, var(--background) 100%)",
            }}
            aria-hidden
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(1200px 700px at 50% 40%, color-mix(in oklab, var(--logo-blue) 34%, transparent), transparent 60%), radial-gradient(900px 600px at 20% 80%, color-mix(in oklab, var(--logo-green) 28%, transparent), transparent 60%), radial-gradient(900px 600px at 80% 70%, color-mix(in oklab, #22d3ee 34%, transparent), transparent 60%)",
            }}
            aria-hidden
          />
          <div className="grid-lines absolute inset-0 opacity-40" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              boxShadow:
                "inset 0 0 200px 40px color-mix(in oklab, var(--background) 90%, transparent)",
            }}
            aria-hidden
          />

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 flex items-center gap-3"
          >
            <span className="relative grid size-14 place-items-center overflow-hidden rounded-full border border-white/15 bg-surface-2/80 p-1 shadow-[0_0_35px_color-mix(in_oklab,var(--logo-blue)_35%,transparent)] backdrop-blur">
              <img
                src={loaderImage}
                alt="Sports Life preview"
                className="h-full w-full rounded-full object-cover"
                draggable={false}
              />
            </span>
            <span className="font-display text-2xl font-extrabold tracking-tight uppercase text-foreground">
              Sports <span className="text-gradient">Life</span>
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 mt-10 w-[min(92vw,620px)]"
          >
            <div
              className="relative aspect-video overflow-hidden rounded-2xl ring-1 ring-white/10"
              style={{
                boxShadow:
                  "0 30px 80px -30px color-mix(in oklab, var(--logo-blue) 62%, transparent), 0 0 0 1px color-mix(in oklab, var(--logo-green) 40%, transparent) inset",
              }}
            >
              <img
                src={heroImg}
                alt="Tennis training"
                className="h-full w-full object-cover"
                draggable={false}
              />
              <div className="absolute inset-0 [background:linear-gradient(180deg,color-mix(in_oklab,var(--background)_35%,transparent)_0%,transparent_40%,color-mix(in_oklab,var(--background)_70%,transparent)_100%)]" />
              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-black/50 px-3 py-1.5 ring-1 ring-white/10 backdrop-blur">
                <motion.span
                  className="size-2 rounded-full bg-neon"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.4, repeat: Infinity }}
                />
                <span className="font-display text-[10px] tracking-[0.25em] text-white/90 uppercase font-semibold">
                  Delhi · Player First
                </span>
              </div>
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <div className="font-display text-[10px] tracking-[0.3em] text-white/80 uppercase">
                    Delhi · Est. 2024
                  </div>
                  <div className="mt-1 font-display text-xl font-black uppercase leading-none text-white">
                    Train <span className="text-gradient">With Purpose</span>
                    <br />
                    <span className="text-gradient">Play With Passion</span>
                  </div>
                </div>
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, ease: "linear", repeat: Infinity }}
                  className="grid size-10 place-items-center rounded-full ring-1 ring-white/20 bg-white/10 backdrop-blur"
                >
                  <ShuttleIcon className="size-5 text-white" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="relative z-10 mt-10 w-[min(92vw,460px)]"
          >
            <div className="flex items-center justify-between font-display text-[11px] tracking-[0.28em] text-foreground/70 uppercase font-bold">
              <span>Preparing courts</span>
              <span className="text-neon">{progress}%</span>
            </div>
            <div className="relative mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/5 ring-1 ring-white/10">
              <motion.div
                className="h-full rounded-full bg-[image:var(--gradient-electric)]"
                style={{ width: `${progress}%` }}
              />
              <motion.div
                className="absolute inset-y-0 -left-1/3 w-1/3"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, color-mix(in oklab, var(--neon) 70%, transparent), transparent)",
                }}
                animate={{ x: ["0vw", "500%"] }}
                transition={{ duration: 1.4, ease: "linear", repeat: Infinity }}
              />
            </div>
            <div className="mt-4 grid grid-cols-4 gap-2 text-center">
              {["Centres", "Courts", "Surfaces", "Coaches"].map((label, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.08, duration: 0.5 }}
                  className="rounded-xl bg-surface-2/50 py-2 ring-1 ring-white/5 backdrop-blur-sm border border-border/40"
                >
                  <div className="font-display text-sm font-bold text-foreground">
                    {["03", "27", "Multi", "Certified"][i]}
                  </div>
                  <div className="font-display text-[9px] tracking-[0.2em] text-muted-foreground uppercase">
                    {label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
