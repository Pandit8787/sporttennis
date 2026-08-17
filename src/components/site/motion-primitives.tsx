import { useEffect, useRef, useState, type ReactNode } from "react";

function useInView(
  ref: React.RefObject<HTMLElement | null>,
  options: { once?: boolean; margin?: string } = {}
) {
  const [inView, setInView] = useState(false);
  const margin = options.margin ?? "0px";
  const once = options.once ?? false;

  useEffect(() => {
    const element = ref.current;
    if (!element || inView) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        }
      },
      { rootMargin: margin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, inView, margin, once]);

  return inView;
}

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export function TextReveal({ text, className }: { text: string; className?: string }) {
  return <span className={className}>{text}</span>;
}

export function Typewriter({
  text,
  className,
  delay = 0,
  speed = 45,
  cursor = true,
  startOnMount = false,
}: {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  cursor?: boolean;
  startOnMount?: boolean;
}) {
  const [shown, setShown] = useState("");
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (startOnMount) {
      const d = window.setTimeout(() => setStarted(true), delay);
      return () => window.clearTimeout(d);
    }
    if (!inView) return;
    const d = window.setTimeout(() => setStarted(true), delay);
    return () => window.clearTimeout(d);
  }, [inView, delay, startOnMount]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setShown(text.slice(0, i));
      if (i >= text.length) window.clearInterval(id);
    }, speed);
    return () => window.clearInterval(id);
  }, [started, text, speed]);

  return (
    <span ref={ref} className={className}>
      {shown}
      {cursor && started && shown.length < text.length && <span className="ml-0.5 inline-block w-0.5 bg-current align-middle animate-pulse" style={{ height: "0.9em" }} />}
    </span>
  );
}

export function Counter({
  value,
  suffix = "",
  duration = 1600,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 640;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(max-width: 639px)");
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  if (isMobile) {
    return (
      <span ref={ref}>
        {value.toLocaleString()}
        {suffix}
      </span>
    );
  }

  return (
    <span ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}
