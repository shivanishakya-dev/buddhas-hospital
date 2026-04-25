"use client";

import { Section, SectionTitle } from "../ui/Section";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What are your emergency hours?",
    answer: "Our emergency department is open 24/7, 365 days a year. We have a dedicated team of trauma specialists and emergency physicians available at all times."
  },
  {
    question: "How do I book an appointment with a specialist?",
    answer: "You can book an appointment through our website&apos;s &apos;Book Appointment&apos; page, or by calling our central reception at +1 (234) 567-890."
  },
  {
    question: "Do you accept international insurance?",
    answer: "Yes, we partner with most major international insurance providers. Please contact our billing department for a full list of accepted insurance plans."
  },
  {
    question: "Is there a pharmacy available on-site?",
    answer: "Yes, Buddha&apos;s Hospital has a fully stocked 24/7 pharmacy located on the ground floor near the main entrance."
  },
  {
    question: "Do you offer telemedicine consultations?",
    answer: "Currently, we offer telemedicine for follow-up consultations in specific departments. Please check with your doctor during your initial visit."
  }
];

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <Section id="faq" className="bg-medical-gray dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <SectionTitle
        title="Frequently Asked Questions"
        subtitle="Find quick answers to common questions about our services, facilities, and procedures."
      />

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-white dark:bg-slate-800 transition-all hover:shadow-soft"
          >
            <button
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left"
            >
              <span className="font-bold text-slate-800 dark:text-white lg:text-lg">
                {faq.question}
              </span>
              <div className={`p-2 rounded-xl transition-all ${activeIndex === index ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-500'}`}>
                {activeIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              </div>
            </button>
            
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="p-6 pt-0 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-50 dark:border-slate-700">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </Section>
  );
};
