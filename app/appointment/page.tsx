"use client";

import { Section, SectionTitle } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { departments } from "@/data/services";
import { useState } from "react";

export default function AppointmentPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      <Section className="bg-medical-gray dark:bg-slate-900 min-h-[calc(100vh-80px)]">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              title="Book an Appointment"
              subtitle="Schedule your visit with our expert doctors in just a few clicks. We&apos;ll confirm your timing shortly."
              centered={false}
            />
            
            <div className="mt-12 space-y-8">
              <div className="flex gap-6">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-soft h-fit text-primary">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Select Your Date</h4>
                  <p className="text-sm text-slate-500 italic max-w-sm">Choose a convenient date for your consultation. We operate 24/7 for emergencies.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-soft h-fit text-secondary">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Choose Timing</h4>
                  <p className="text-sm text-slate-500 italic max-w-sm">Pick a time slot that works for you. Morning and afternoon slots are available daily.</p>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-primary/5 border border-primary/20 mt-12">
                <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Quick Information
                </h4>
                <ul className="space-y-3">
                  {["Bring your previous medical records", "Arrive 15 mins before your slot", "Valid ID proof required", "Consultation fee applies"].map(item => (
                    <li key={item} className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-[3rem] shadow-premium border border-slate-50 dark:border-slate-700"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Request Sent Successfully!</h3>
                <p className="text-slate-500 mb-8 max-w-sm mx-auto">Thank you for choosing Buddha&apos;s Hospital. Our team will contact you shortly to confirm your appointment.</p>
                <Button onClick={() => setSubmitted(false)} variant="outline">Book Another</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1 flex items-center gap-2">
                      <User className="w-4 h-4" /> Full Name
                    </label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-5 py-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary outline-none transition-shadow"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1 flex items-center gap-2">
                      <Phone className="w-4 h-4" /> Phone Number
                    </label>
                    <input 
                      required
                      type="tel" 
                      placeholder="+1 (234) 567-890"
                      className="w-full px-5 py-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary outline-none transition-shadow"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1 flex items-center gap-2">
                    <Mail className="w-4 h-4" /> Email Address
                  </label>
                  <input 
                    required
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-5 py-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary outline-none transition-shadow"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1 flex items-center gap-2">
                      <FileText className="w-4 h-4" /> Department
                    </label>
                    <select className="w-full px-5 py-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary outline-none transition-shadow appearance-none">
                      <option value="">Select Department</option>
                      {departments.map(dept => (
                        <option key={dept.id} value={dept.id}>{dept.title}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1 flex items-center gap-2">
                      <Calendar className="w-4 h-4" /> Preferred Date
                    </label>
                    <input 
                      required
                      type="date" 
                      className="w-full px-5 py-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary outline-none transition-shadow"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Additional Notes (Optional)</label>
                  <textarea 
                    rows={3}
                    placeholder="Briefly describe your concern..."
                    className="w-full px-5 py-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary outline-none transition-shadow resize-none"
                  ></textarea>
                </div>

                <Button type="submit" className="w-full py-4 rounded-2xl shadow-lg mt-4" size="lg">
                  Submit Appointment Request
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
