"use client";

import { doctors } from "@/data/doctors";
import { Section, SectionTitle } from "@/components/ui/Section";
import { motion } from "framer-motion";
import Image from "next/image";
import { Search, Star, MessageSquare, Calendar, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

export default function DoctorsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDoctors = doctors.filter(doctor => 
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-20">
      <Section className="bg-medical-gray dark:bg-slate-900">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <SectionTitle
              title="Our Specialist Doctors"
              subtitle="Connect with our team of highly qualified and experienced medical professionals."
              centered={false}
            />
          </div>
          
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search by name or specialty..."
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary outline-none transition-shadow"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDoctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group bg-white dark:bg-slate-800 rounded-[2.5rem] overflow-hidden shadow-soft hover:shadow-premium border border-slate-50 dark:border-slate-700 transition-all duration-500"
            >
              <div className="p-8">
                <div className="flex items-start gap-6">
                  <div className="relative w-24 h-24 rounded-2xl overflow-hidden shadow-md flex-shrink-0">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-bold text-slate-900 dark:text-white">4.9</span>
                      <span className="text-xs text-slate-400 ml-1">(120 Reviews)</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                      {doctor.name}
                    </h3>
                    <p className="text-sm font-medium text-primary uppercase tracking-wider mt-1">
                      {doctor.specialty}
                    </p>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {doctor.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
                      <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">Experience</p>
                      <p className="text-sm font-bold text-slate-700 dark:text-slate-200">{doctor.experience}</p>
                    </div>
                    <div className="p-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
                      <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">Patients</p>
                      <p className="text-sm font-bold text-slate-700 dark:text-slate-200">1,200+</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                      <Twitter className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-3 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-xl hover:bg-primary hover:text-white transition-all">
                      <MessageSquare className="w-5 h-5" />
                    </button>
                    <Button href="/appointment" size="sm" className="rounded-xl" icon={Calendar}>
                      Book
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {filteredDoctors.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-slate-500 text-lg italic">No doctors found matching your search.</p>
          </div>
        )}
      </Section>
    </div>
  );
}
