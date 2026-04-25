"use client";

import { Section, SectionTitle } from "@/components/ui/Section";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Award, Users, Globe } from "lucide-react";

const stats = [
  { icon: Award, label: "Medical Awards", value: "12+" },
  { icon: Users, label: "Specialist Doctors", value: "150+" },
  { icon: Globe, label: "Global Partners", value: "25+" },
  { icon: CheckCircle2, label: "Success Stories", value: "10k+" },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Intro Section */}
      <Section className="bg-medical-gray dark:bg-slate-900">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              title="About Buddha&apos;s Hospital"
              subtitle="Providing excellence in healthcare since 1995. We combine cutting-edge technology with compassionate care."
              centered={false}
            />
            <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                Founded on the principles of compassion and excellence, Buddha&apos;s Hospital has grown from a local clinic to one of the region&apos;s leading multi-speciality medical centers. Our mission is to provide accessible, high-quality healthcare to all members of our community.
              </p>
              <p>
                We believe that healing is not just about treating the body, but also about caring for the soul. That&apos;s why we focus on patient-centered care, ensuring that every individual feels heard, respected, and supported throughout their medical journey.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  "24/7 Emergency Services",
                  "Expert Specialist Team",
                  "Modern Diagnostic Lab",
                  "Patient-First Approach",
                  "Advanced ICU Facilities",
                  "Holistic Wellness Programs",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-900 dark:text-slate-200 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-premium"
          >
            <Image
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800&h=1000"
              alt="Hospital Facility"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </Section>

      {/* Stats Counter */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center text-white"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-4 opacity-80" />
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-primary-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <Section className="bg-white dark:bg-slate-950">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            whileHover={{ y: -5 }}
            className="p-10 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-xl">01</span>
              Our Mission
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              To deliver world-class medical services with transparency, integrity, and deep human compassion. We strive to be the healthcare provider of choice by creating an environment where patients receive the highest standard of care.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="p-10 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary text-xl">02</span>
              Our Vision
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              To be a global leader in healthcare innovation and empathetic medical delivery. We envision a future where advanced technology and human kindness work in perfect harmony to heal and transform lives.
            </p>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
