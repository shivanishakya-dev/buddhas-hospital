"use client";

import { doctors } from "@/data/doctors";
import { Section, SectionTitle } from "../ui/Section";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight, Star } from "lucide-react";
import Link from "next/link";

export const DoctorHighlights = () => {
  return (
    <Section id="doctors" className="bg-medical-gray dark:bg-slate-900">
      <SectionTitle
        title="Meet Our Specialists"
        subtitle="Our team of world-renowned doctors and medical professionals are here to provide you with the best care."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {doctors.map((doctor, index) => (
          <motion.div
            key={doctor.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-soft hover:shadow-premium transition-all duration-500"
          >
            <div className="relative h-72 w-full overflow-hidden">
              <Image
                src={doctor.image}
                alt={doctor.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 bg-white/10 dark:bg-slate-900/10 backdrop-blur-xl px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/20 shadow-premium">
                <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                <span className="text-xs font-black text-white">4.9</span>
              </div>
            </div>

            <div className="p-6">
              <p className="text-xs font-bold text-primary tracking-widest uppercase mb-2">
                {doctor.specialty}
              </p>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {doctor.name}
              </h3>
              <p className="text-sm text-slate-500 mb-4 line-clamp-2">
                {doctor.description}
              </p>
              
              <div className="pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400">
                  {doctor.experience} Exp.
                </span>
                <Link 
                  href="/doctors"
                  className="p-2 bg-slate-50 dark:bg-slate-700 rounded-full text-slate-400 group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-[-45deg]"
                >
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link 
          href="/doctors"
          className="text-primary font-bold hover:underline underline-offset-8 decoration-2 flex items-center justify-center gap-2 group"
        >
          View All Specialists
          <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </Section>
  );
};
