"use client";

import { Phone, Clock, ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";
import { motion } from "framer-motion";

export const EmergencyBanner = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary py-16 px-6 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left text-white">
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 15 }}
            className="p-5 bg-white/10 rounded-[2rem] backdrop-blur-xl border border-white/20 shadow-premium"
          >
            <Phone className="w-10 h-10" />
          </motion.div>
          
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Emergency? Don&apos;t hesitate.
            </h2>
            <div className="flex flex-wrap items-center gap-6 text-primary-50">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span className="font-medium">Available 24/7</span>
              </div>
              <div className="hidden md:block w-1 h-1 rounded-full bg-primary-200" />
              <div className="text-xl md:text-2xl font-bold">
                +1 (234) 567-890
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            href="/contact" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-primary"
            icon={ArrowRight}
          >
            Contact Department
          </Button>
          <Button 
            href="tel:+1234567890"
            className="bg-white text-primary hover:bg-slate-100"
          >
            Call Now
          </Button>
        </div>
      </div>
    </section>
  );
};
