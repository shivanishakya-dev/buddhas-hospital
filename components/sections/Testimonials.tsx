"use client";

import { testimonials } from "@/data/testimonials";
import { Section, SectionTitle } from "../ui/Section";
import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, Star } from "lucide-react";

export const Testimonials = () => {
  return (
    <Section id="testimonials" className="bg-white dark:bg-slate-950">
      <SectionTitle
        title="What Our Patients Say"
        subtitle="We take pride in providing exceptional care and building long-lasting relationships with our patients."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-premium transition-all duration-300"
          >
            <Quote className="absolute top-6 right-8 w-12 h-12 text-primary/5 transition-colors group-hover:text-primary/10" />
            
            <div className="flex items-center gap-1.5 mb-6">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-emerald-500 fill-emerald-500" />
              ))}
            </div>

            <p className="text-slate-600 dark:text-slate-400 mb-8 italic leading-relaxed">
              &quot;{testimonial.content}&quot;
            </p>

            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">
                  {testimonial.name}
                </h4>
                <p className="text-xs text-slate-500 uppercase tracking-widest">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
