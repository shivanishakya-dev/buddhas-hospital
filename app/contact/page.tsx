"use client";

import { Section, SectionTitle } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";

const contactInfo = [
  { icon: Phone, title: "Emergency", value: "+1 (234) 567-890", sub: "Available 24/7" },
  { icon: Mail, title: "Email Support", value: "info@buddhas.com", sub: "Response within 24h" },
  { icon: MapPin, title: "Location", value: "123 Medical Way", sub: "San Francisco, CA" },
  { icon: Clock, title: "Working Hours", value: "Mon - Sat: 9am - 9pm", sub: "Sun: Emergencies Only" },
];

export default function ContactPage() {
  return (
    <div className="pt-20">
      <Section className="bg-medical-gray dark:bg-slate-900">
        <SectionTitle
          title="Get In Touch"
          subtitle="Have questions? We&apos;re here to help. Contact us via any of the channels below or visit us directly."
        />

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info) => (
                <div key={info.title} className="p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-soft border border-slate-50 dark:border-slate-700 group hover:border-primary/30 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                    <info.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">{info.title}</h4>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{info.value}</p>
                  <p className="text-xs text-slate-400">{info.sub}</p>
                </div>
              ))}
            </div>

            <div className="relative h-[300px] rounded-3xl overflow-hidden shadow-premium border-4 border-white dark:border-slate-800">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15251.48839958021!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjYiTiAxMjLCsDI1JzA5LjgiVw!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                className="filter grayscale contrast-125"
              />
              <div className="absolute inset-0 pointer-events-none border-[12px] border-white dark:border-slate-800 rounded-[2.5rem]" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-[3.5rem] shadow-premium border border-slate-50 dark:border-slate-700 h-fit"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">First Name</label>
                  <input type="text" placeholder="John" className="w-full px-5 py-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary outline-none transition-shadow" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Last Name</label>
                  <input type="text" placeholder="Doe" className="w-full px-5 py-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary outline-none transition-shadow" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full px-5 py-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary outline-none transition-shadow" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Subject</label>
                <select className="w-full px-5 py-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary outline-none transition-shadow appearance-none">
                  <option>General Inquiry</option>
                  <option>Medical Records</option>
                  <option>Insurance Question</option>
                  <option>Feedback</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Message</label>
                <textarea rows={5} placeholder="How can we help you?" className="w-full px-5 py-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary outline-none transition-shadow resize-none"></textarea>
              </div>
              <Button className="w-full py-4 rounded-2xl shadow-lg" icon={Send}>
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
