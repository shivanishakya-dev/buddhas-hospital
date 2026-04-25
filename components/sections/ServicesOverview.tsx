"use client";

import { departments } from "@/data/services";
import { Section, SectionTitle } from "../ui/Section";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const ServicesOverview = () => {
  return (
    <Section id="services" className="bg-white dark:bg-slate-950">
      <SectionTitle
        title="Our Medical Services"
        subtitle="We provide a wide range of medical services with a focus on quality, safety, and patient satisfaction."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {departments.map((dept, index) => (
          <motion.div
            key={dept.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-premium transition-all duration-300"
          >
            <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3", dept.bg)}>
              <dept.icon className={cn("w-7 h-7", dept.color)} />
            </div>
            
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors">
              {dept.title}
            </h3>
            
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              {dept.description}
            </p>
            
            <Link 
              href={`/services#${dept.id}`}
              className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-3 transition-all"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link 
          href="/services"
          className="inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 font-bold hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
        >
          View All Departments
        </Link>
      </div>
    </Section>
  );
};
