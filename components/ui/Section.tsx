"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
  animate?: boolean;
}

export const Section = ({
  children,
  className,
  id,
  containerClassName,
  animate = true,
}: SectionProps) => {
  return (
    <section 
      id={id} 
      className={cn("py-20 md:py-28 overflow-hidden", className)}
    >
      <div 
        className={cn("container mx-auto px-6 lg:px-12", containerClassName)}
      >
        {animate ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        ) : (
          children
        )}
      </div>
    </section>
  );
};

export const SectionTitle = ({ 
  title, 
  subtitle, 
  centered = true 
}: { 
  title: string; 
  subtitle?: string; 
  centered?: boolean 
}) => {
  return (
    <div className={cn("max-w-3xl mb-12 md:mb-16", centered && "mx-auto text-center")}>
      <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight mb-6">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">
          {subtitle}
        </p>
      )}
      <div className={cn("mt-8 h-1.5 w-24 bg-gradient-to-r from-primary to-secondary rounded-full", centered && "mx-auto")} />
    </div>
  );
};
