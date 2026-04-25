"use client";

import { departments } from "@/data/services";
import { Section, SectionTitle } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <Section className="bg-medical-gray dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
        <SectionTitle
          title="Our Departments"
          subtitle="Buddha&apos;s Hospital offers a wide array of specialized medical services, each led by experts in their field."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <motion.div
              key={dept.id}
              id={dept.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 p-10 rounded-[2.5rem] shadow-soft hover:shadow-premium border border-slate-50 dark:border-slate-700 transition-all duration-500 group"
            >
              <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110", dept.bg)}>
                <dept.icon className={cn("w-8 h-8", dept.color)} />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {dept.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                {dept.description} Our department is equipped with the latest diagnostic and treatment technologies to ensure the best outcomes.
              </p>

              <div className="space-y-4 mb-8">
                {["Advanced Technology", "Expert Care", "24/7 Support"].map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    {feature}
                  </div>
                ))}
              </div>

              <Button 
                href="/appointment" 
                variant="outline" 
                className="w-full rounded-2xl group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all"
                icon={ArrowRight}
              >
                Inquire Now
              </Button>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Facilities Section */}
      <Section className="bg-white dark:bg-slate-950">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="relative h-64 rounded-3xl overflow-hidden shadow-soft">
                <Image src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400" fill className="object-cover" alt="Lab" />
              </div>
              <div className="relative h-48 rounded-3xl overflow-hidden shadow-soft">
                <Image src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=400" fill className="object-cover" alt="ICU" />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative h-48 rounded-3xl overflow-hidden shadow-soft">
                <Image src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=400" fill className="object-cover" alt="Clinic" />
              </div>
              <div className="relative h-64 rounded-3xl overflow-hidden shadow-soft">
                <Image src="https://images.unsplash.com/photo-1513224502586-d1e602410265?auto=format&fit=crop&q=80&w=400" fill className="object-cover" alt="Patient Room" />
              </div>
            </div>
          </motion.div>

          <div>
            <SectionTitle
              title="Modern Infrastructure"
              subtitle="We invest in the latest medical technologies to provide our patients with accurate diagnoses and effective treatments."
              centered={false}
            />
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex gap-4">
                <div className="bg-primary/10 p-3 h-fit rounded-xl text-primary">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Advanced Labs</h4>
                  <p className="text-sm text-slate-500">Fully automated pathology and radiology laboratories for precise results.</p>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex gap-4">
                <div className="bg-secondary/10 p-3 h-fit rounded-xl text-secondary">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Smart ICUs</h4>
                  <p className="text-sm text-slate-500">24/7 monitoring systems with remote access for specialist consultations.</p>
                </div>
              </div>
            </div>
            <Button href="/appointment" className="mt-10" icon={ArrowRight}>
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
