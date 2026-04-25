"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
  href?: string;
  className?: string;
}

export const Button = ({
  variant = "primary",
  size = "md",
  icon: Icon,
  href,
  className,
  children,
  ...props
}: ButtonProps) => {
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark shadow-soft hover:shadow-lg",
    secondary: "bg-secondary text-white hover:bg-secondary-dark shadow-soft hover:shadow-lg",
    outline: "border-2 border-primary text-primary hover:bg-primary/5",
    ghost: "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg font-semibold",
  };

  const baseStyles = "inline-flex items-center justify-center rounded-full transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const content = (
    <>
      {children}
      {Icon && <Icon className={cn("ml-2 w-5 h-5 transition-transform group-hover:translate-x-1")} />}
    </>
  );

  if (href) {
    return (
      <Link 
        href={href} 
        className={cn(baseStyles, variants[variant], sizes[size], "group", className)}
      >
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], "group", className)}
      {...props}
    >
      {content}
    </motion.button>
  );
};
