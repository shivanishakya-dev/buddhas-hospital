"use client";

import { useState, useEffect } from "react";
import { Menu, X, HeartPulse } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home",     href: "/"        },
  { name: "About Us", href: "/about"   },
  { name: "Services", href: "/services"},
  { name: "Doctors",  href: "/doctors" },
  { name: "Contact",  href: "/contact" },
];

export const Navbar = () => {
  const [isOpen,   setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll(); // run once on mount in case page is pre-scrolled
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setIsOpen(false); }, [pathname]);

  return (
    <header
      className={cn(
        // ── Base: always fixed, full width ──
        "fixed top-0 left-0 right-0 z-50",
        "transition-all duration-300 ease-in-out",
        "px-4 sm:px-6 lg:px-12",

        // ── Scrolled: solid white/dark card with shadow ──
        scrolled
          ? [
              "py-2 sm:py-3",
              "bg-white/95 dark:bg-slate-900/95",
              "backdrop-blur-xl",
              "border-b border-slate-200/80 dark:border-slate-800/80",
              "shadow-[0_2px_20px_-4px_rgba(0,0,0,0.12)]",
            ]
          // ── Hero: transparent, no background ──
          : [
              "py-3 sm:py-4",
              "bg-transparent",
            ]
      )}
    >
      <nav
        className="container mx-auto flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* ── Logo ── */}
        <NextLink
          href="/"
          className="flex items-center gap-2 group flex-shrink-0"
          aria-label="Buddha's Hospital – home"
        >
          <div className={cn(
            "p-1.5 sm:p-2 rounded-xl text-white transition-all duration-200",
            "group-hover:rotate-12 group-hover:scale-110",
            "bg-sky-500",
          )}>
            <HeartPulse className="w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          <span className={cn(
            "text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-300",
            scrolled
              ? "text-slate-900 dark:text-white"
              : "text-white drop-shadow-md",
          )}>
            Buddha&apos;s
            <span className="text-sky-400 italic ml-1">Hospital</span>
          </span>
        </NextLink>

        {/* ── Desktop nav links ── */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8" role="list">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.name}>
                <NextLink
                  href={link.href}
                  className={cn(
                    "relative text-sm font-semibold transition-colors duration-200",
                    "group pb-0.5",
                    // Active state
                    active
                      ? "text-sky-500"
                      : scrolled
                        ? "text-slate-700 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400"
                        : "text-white/90 hover:text-white drop-shadow",
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {link.name}
                  {/* Underline indicator */}
                  <span className={cn(
                    "absolute -bottom-0.5 left-0 h-0.5 bg-sky-500 rounded-full",
                    "transition-all duration-300 ease-out",
                    active ? "w-full" : "w-0 group-hover:w-full",
                  )} />
                </NextLink>
              </li>
            );
          })}
        </ul>

        {/* ── Desktop CTA ── */}
        <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
          <a
            href="/appointment"
            className={cn(
              "inline-flex items-center justify-center gap-2",
              "px-5 py-2.5 rounded-xl",
              "bg-sky-500 hover:bg-sky-600 active:bg-sky-700",
              "text-white font-bold text-sm",
              "shadow-md shadow-sky-500/25",
              "transition-all duration-200 active:scale-[0.97]",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500",
            )}
          >
            Book Appointment
          </a>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          className={cn(
            "lg:hidden p-2 rounded-xl transition-colors duration-200",
            "focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-500",
            scrolled
              ? "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              : "text-white hover:bg-white/10",
          )}
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isOpen ? "close" : "open"}
              initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0,   scale: 1   }}
              exit={{    opacity: 0, rotate:  90,  scale: 0.8 }}
              transition={{ duration: 0.15 }}
              className="block"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>

      {/* ── Mobile menu drawer ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{    opacity: 0, height: 0      }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "lg:hidden overflow-hidden",
              "bg-white dark:bg-slate-900",
              "border-t border-slate-100 dark:border-slate-800",
              "shadow-xl",
            )}
          >
            <ul
              className="flex flex-col px-5 py-4 gap-1"
              role="list"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link, i) => {
                const active = pathname === link.href;
                return (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0    }}
                    transition={{ delay: i * 0.05, duration: 0.2 }}
                  >
                    <NextLink
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-xl",
                        "text-base font-semibold transition-colors duration-150",
                        active
                          ? "bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400"
                          : "text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800",
                      )}
                    >
                      {/* Active dot */}
                      {active && (
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-500 flex-shrink-0" />
                      )}
                      {link.name}
                    </NextLink>
                  </motion.li>
                );
              })}

              {/* Mobile CTA */}
              <motion.li
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0  }}
                transition={{ delay: navLinks.length * 0.05 + 0.05, duration: 0.2 }}
                className="pt-3 mt-1 border-t border-slate-100 dark:border-slate-800"
              >
                <a
                  href="/appointment"
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center justify-center w-full gap-2",
                    "px-5 py-3.5 rounded-xl",
                    "bg-sky-500 hover:bg-sky-600 active:bg-sky-700",
                    "text-white font-bold text-base",
                    "shadow-md shadow-sky-500/25",
                    "transition-all duration-200",
                  )}
                >
                  Book Appointment
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};