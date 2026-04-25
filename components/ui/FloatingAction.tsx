"use client";

import { Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export const FloatingAction = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <a
            href="tel:+1234567890"
            className="group flex items-center gap-3 bg-red-500 text-white p-4 rounded-full shadow-premium hover:bg-red-600 transition-colors"
          >
            <div className="flex items-center justify-center bg-white/20 p-2 rounded-full group-hover:animate-pulse">
              <Phone className="w-6 h-6" />
            </div>
            <span className="hidden md:inline pr-2 font-bold tracking-wider">
              EMERGENCY
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
