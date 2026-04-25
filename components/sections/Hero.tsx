"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight, Calendar, Activity, Shield, Star } from "lucide-react";
import Image from "next/image";
import { useRef, useCallback } from "react";

/* ─────────────────────────────────────────
   Static data
───────────────────────────────────────── */
const STATS = [
  { value: "25k", suffix: "+", label: "Lives Healed" },
  { value: "150", suffix: "+", label: "Specialists" },
  { value: "98",  suffix: "%", label: "Satisfaction" },
];

const AVATARS = [
  "https://i.pravatar.cc/40?img=11",
  "https://i.pravatar.cc/40?img=22",
  "https://i.pravatar.cc/40?img=33",
  "https://i.pravatar.cc/40?img=44",
];

/* ─────────────────────────────────────────
   Hero component
───────────────────────────────────────── */
export const Hero = () => {
  const containerRef       = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollY }        = useScroll();

  /* Parallax — zero-out when user prefers reduced motion */
  const y1        = useTransform(scrollY, [0, 500], shouldReduceMotion ? [0, 0] : [0, 40]);
  const y2        = useTransform(scrollY, [0, 500], shouldReduceMotion ? [0, 0] : [0, -55]);
  const bgOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  /* Mouse parallax for the image card */
  const mouseX       = useMotionValue(0);
  const mouseY       = useMotionValue(0);
  const springCfg    = { damping: 28, stiffness: 140 };
  const smoothMouseX = useSpring(mouseX, springCfg);
  const smoothMouseY = useSpring(mouseY, springCfg);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (shouldReduceMotion) return;
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set(((e.clientX - rect.left) / rect.width  - 0.5) * 16);
      mouseY.set(((e.clientY - rect.top)  / rect.height - 0.5) * 16);
    },
    [mouseX, mouseY, shouldReduceMotion],
  );

  /* Reusable staggered-entrance variant factory */
  const fadeUp = (delay = 0) => ({
    initial:    { opacity: 0, y: 20 },
    animate:    { opacity: 1, y: 0  },
    transition: { delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  });

  /* ── Render ── */
  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      aria-label="Hero section"
      className="
        relative min-h-screen flex items-center
        pt-20 sm:pt-24 pb-16
        overflow-hidden
        bg-white dark:bg-slate-950
        px-4 sm:px-6 lg:px-12
      "
    >

      {/* ══════════════ Background decoration ══════════════ */}
      <motion.div
        style={{ opacity: bgOpacity }}
        aria-hidden="true"
        className="absolute inset-0 z-0 pointer-events-none select-none"
      >
        {/* Animated wave */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.08] dark:opacity-[0.05]"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%"   stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
          <motion.path
            fill="url(#waveGrad)"
            d="M0,500 C200,400 300,600 500,500 S800,400 1000,500 L1000,1000 L0,1000 Z"
            animate={shouldReduceMotion ? {} : {
              d: [
                "M0,500 C200,400 300,600 500,500 S800,400 1000,500 L1000,1000 L0,1000 Z",
                "M0,500 C200,600 300,400 500,500 S800,600 1000,500 L1000,1000 L0,1000 Z",
                "M0,500 C200,400 300,600 500,500 S800,400 1000,500 L1000,1000 L0,1000 Z",
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>

        {/* Dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(14,165,233,0.13) 1px, transparent 1px)",
            backgroundSize: "34px 34px",
          }}
        />
      </motion.div>

      {/* ══════════════ Main grid ══════════════ */}
      <div className="container mx-auto w-full grid lg:grid-cols-2 gap-10 xl:gap-20 items-center relative z-10">

        {/* ─── LEFT: Copy column ─── */}
        <motion.div style={{ y: y1 }} className="flex flex-col">

          {/* Live trust badge */}
          <motion.div {...fadeUp(0.05)} className="mb-6">
            <span className="
              inline-flex items-center gap-2
              px-4 py-1.5 rounded-full
              bg-sky-50 dark:bg-sky-950
              border border-sky-200 dark:border-sky-800
              text-sky-600 dark:text-sky-400
              text-[11px] sm:text-xs font-bold tracking-[0.14em] uppercase
              shadow-sm whitespace-nowrap
            ">
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-500 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-500" />
              </span>
              <Activity className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
              Trusted Medical Excellence
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.15)}
            className="
              text-[2.5rem] sm:text-6xl md:text-7xl
              font-black tracking-tighter leading-[0.95]
              text-slate-900 dark:text-white
              mb-5 sm:mb-6
            "
          >
            Superior Care.
            <br />
            <span className="
              bg-gradient-to-r from-sky-500 to-indigo-500
              bg-clip-text text-transparent italic
            ">
              Brighter Future.
            </span>
          </motion.h1>

          {/* Body copy */}
          <motion.p
            {...fadeUp(0.25)}
            className="
              text-base sm:text-lg
              text-slate-600 dark:text-slate-400
              leading-relaxed max-w-md
              mb-8 sm:mb-10
            "
          >
            Pioneering the next generation of healthcare with advanced surgical
            precision and holistic patient wellness — because every life deserves
            the very best.
          </motion.p>

          {/* CTA buttons — stack on mobile, row on sm+ */}
          <motion.div
            {...fadeUp(0.35)}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10"
          >
            <a
              href="/appointment"
              className="
                inline-flex items-center justify-center gap-2
                px-6 py-3.5 rounded-2xl
                bg-sky-500 hover:bg-sky-600 active:scale-[0.98]
                text-white font-bold text-sm sm:text-base
                shadow-lg shadow-sky-500/30
                transition-all duration-200
                focus-visible:outline focus-visible:outline-2
                focus-visible:outline-offset-2 focus-visible:outline-sky-500
              "
            >
              Book Appointment
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href="/contact"
              className="
                inline-flex items-center justify-center gap-2
                px-6 py-3.5 rounded-2xl
                border-2 border-slate-200 dark:border-slate-700
                text-slate-700 dark:text-slate-200 font-bold text-sm sm:text-base
                hover:border-sky-400 hover:text-sky-600
                dark:hover:border-sky-500 dark:hover:text-sky-400
                active:scale-[0.98]
                transition-all duration-200
                focus-visible:outline focus-visible:outline-2
                focus-visible:outline-offset-2 focus-visible:outline-sky-500
              "
            >
              Quick Contact
            </a>
          </motion.div>

          {/* Social proof — avatar stack + stars */}
          <motion.div
            {...fadeUp(0.45)}
            className="flex items-center gap-3 sm:gap-4 mb-10 sm:mb-12"
          >
            <div className="flex -space-x-2.5 flex-shrink-0" aria-hidden="true">
              {AVATARS.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  width={36}
                  height={36}
                  className="
                    w-8 h-8 sm:w-9 sm:h-9
                    rounded-full object-cover
                    border-2 border-white dark:border-slate-900
                  "
                />
              ))}
            </div>
            <div>
              <div
                className="flex items-center gap-0.5 mb-0.5"
                aria-label="Rated 5 stars"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-400"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Trusted by{" "}
                <strong className="font-bold text-slate-700 dark:text-slate-200">
                  25,000+
                </strong>{" "}
                patients
              </p>
            </div>
          </motion.div>

          {/* Stats row — horizontally scrollable on tiny screens */}
          <motion.div
            {...fadeUp(0.55)}
            className="
              flex items-center gap-6 sm:gap-10
              overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none]
              pb-1
            "
          >
            {STATS.map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-6 sm:gap-10 flex-shrink-0"
              >
                <div className="flex flex-col gap-0.5">
                  <p className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white leading-none">
                    {s.value}
                    <span className="text-sky-500">{s.suffix}</span>
                  </p>
                  <p className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] whitespace-nowrap">
                    {s.label}
                  </p>
                </div>
                {i < STATS.length - 1 && (
                  <div className="w-px h-10 bg-gradient-to-b from-transparent via-slate-200 dark:via-slate-700 to-transparent flex-shrink-0" />
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ─── RIGHT: Image + floaters ─── */}
        <motion.div
          style={{ x: smoothMouseX, y: smoothMouseY }}
          className="relative group w-full lg:ml-auto mt-4 lg:mt-0"
        >
          {/*
            Padding buffer so the desktop floating cards never overflow the
            section on any viewport width — floaters sit inside this padded area.
          */}
          <div className="relative px-5 pt-6 pb-10 sm:px-8 sm:pt-8 sm:pb-14 lg:px-10 lg:pt-12 lg:pb-16">

            {/* ── Main image card ── */}
            <div className="
              relative z-10 w-full overflow-hidden
              rounded-3xl sm:rounded-[2.5rem]
              border-[6px] sm:border-[8px] border-white dark:border-slate-900
              shadow-[0_24px_64px_-12px_rgba(0,0,0,0.22)]
              aspect-[16/10] sm:aspect-[4/3] lg:aspect-[4/5]
            ">
              <Image
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=900&h=1100"
                alt="State-of-the-art hospital interior"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              {/* ── Mobile-only: floaters inside the image ── */}
              <div className="absolute inset-x-3 bottom-3 flex gap-2 lg:hidden z-20">
                {/* Booking pill */}
                <div className="
                  flex-1 flex items-center gap-2
                  bg-white/90 dark:bg-slate-900/90
                  backdrop-blur-md
                  rounded-2xl p-2.5
                  border border-white/60 dark:border-slate-700/60
                  shadow-lg
                ">
                  <div className="bg-sky-500 p-2 rounded-xl text-white flex-shrink-0">
                    <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[11px] font-black text-slate-900 dark:text-white leading-none">
                      Easy Booking
                    </p>
                    <p className="text-[9px] text-slate-400 uppercase tracking-wide mt-0.5">
                      Instant Consult
                    </p>
                  </div>
                </div>
                {/* Certified pill */}
                <div className="
                  flex-1 flex items-center gap-2
                  bg-white/90 dark:bg-slate-900/90
                  backdrop-blur-md
                  rounded-2xl p-2.5
                  border border-white/60 dark:border-slate-700/60
                  shadow-lg
                ">
                  <div className="bg-emerald-500/15 p-2 rounded-xl flex-shrink-0">
                    <Shield className="w-3.5 h-3.5 text-emerald-500" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[11px] font-black text-slate-900 dark:text-white leading-none">
                      Certified
                    </p>
                    <p className="text-[9px] text-slate-400 uppercase tracking-wide mt-0.5">
                      JCI Accredited
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Desktop-only: floating cards outside the image ── */}

            {/* Top-right: Advanced Care */}
            <motion.div
              style={{ y: y2 }}
              className="
                hidden lg:block
                absolute top-0 -right-2 xl:-right-4
                bg-white dark:bg-slate-900
                border border-slate-100 dark:border-slate-800
                rounded-3xl shadow-2xl
                p-5 w-[200px] xl:w-[215px]
                z-20
              "
            >
              <div className="flex items-center gap-3 mb-2.5">
                <div className="bg-indigo-500/10 p-2.5 rounded-2xl flex-shrink-0">
                  <Activity className="w-4 h-4 text-indigo-500" aria-hidden="true" />
                </div>
                <p className="text-sm font-black text-slate-900 dark:text-white leading-snug">
                  Advanced Care
                </p>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                AI diagnostics &amp; robotic-assisted surgery, ready for you.
              </p>
            </motion.div>

            {/* Bottom-left: Easy Booking */}
            <motion.div
              animate={shouldReduceMotion ? {} : { y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="
                hidden lg:flex items-center gap-4
                absolute -bottom-2 -left-2 xl:-left-4
                bg-white dark:bg-slate-900
                border border-slate-100 dark:border-slate-800
                rounded-3xl shadow-2xl
                p-4
                z-20
              "
            >
              <div className="bg-sky-500 p-3.5 rounded-2xl text-white shadow-md flex-shrink-0">
                <Calendar className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-black text-slate-900 dark:text-white leading-none mb-1">
                  Easy Booking
                </p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Instant Consult
                </p>
              </div>
            </motion.div>

            {/* Mid-left: Certified */}
            <motion.div
              animate={shouldReduceMotion ? {} : { y: [0, -7, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              className="
                hidden lg:flex items-center gap-3
                absolute top-1/2 -translate-y-1/2
                -left-2 xl:-left-4
                bg-white dark:bg-slate-900
                border border-slate-100 dark:border-slate-800
                rounded-2xl shadow-xl
                p-3.5
                z-20
              "
            >
              <div className="bg-emerald-500/10 p-2 rounded-xl flex-shrink-0">
                <Shield className="w-4 h-4 text-emerald-500" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-black text-slate-900 dark:text-white leading-none">
                  Certified
                </p>
                <p className="text-[10px] text-slate-400 mt-0.5">JCI Accredited</p>
              </div>
            </motion.div>
          </div>

          {/* Ambient glow blobs */}
          <div
            aria-hidden="true"
            className="
              absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              w-[80%] h-[80%]
              bg-sky-400/20 rounded-full blur-[90px]
              -z-10 pointer-events-none
            "
          />
          <div
            aria-hidden="true"
            className="
              absolute top-8 right-4
              w-44 h-44
              bg-indigo-400/20 rounded-full blur-[70px]
              -z-10 pointer-events-none
            "
          />
        </motion.div>

      </div>
    </section>
  );
};