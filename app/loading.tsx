"use client";

import { motion } from "framer-motion";
import { HeartPulse } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white dark:bg-slate-950">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: [0.8, 1.1, 1],
          opacity: 1,
          rotate: [0, 10, -10, 0]
        }}
        transition={{ 
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="bg-primary p-6 rounded-[2rem] text-white shadow-premium mb-8"
      >
        <HeartPulse className="w-16 h-16" />
      </motion.div>
      
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
          Buddha&apos;s Hospital
        </h2>
        <div className="flex items-center gap-2">
          <motion.div 
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0 }}
            className="w-2 h-2 rounded-full bg-primary" 
          />
          <motion.div 
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
            className="w-2 h-2 rounded-full bg-primary" 
          />
          <motion.div 
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
            className="w-2 h-2 rounded-full bg-primary" 
          />
        </div>
      </div>
    </div>
  );
}
