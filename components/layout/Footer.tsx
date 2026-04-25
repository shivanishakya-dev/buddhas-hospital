"use client";

import { HeartPulse, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";
import NextLink from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {/* Brand */}
        <div className="space-y-6">
          <NextLink href="/" className="flex items-center gap-2 group">
            <div className="bg-primary p-2 rounded-xl text-white transition-transform group-hover:rotate-12 shadow-lg shadow-primary/20">
              <HeartPulse className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Buddha&apos;s<span className="text-secondary italic ml-1">Hospital</span>
            </span>
          </NextLink>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
            Compassionate Care, Advanced Medicine. We are committed to providing world-class healthcare with a human touch.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h3 className="text-white font-bold text-lg">Quick Links</h3>
          <ul className="space-y-4">
            {["Home", "About Us", "Services", "Doctors", "FAQ", "Contact"].map((link) => (
              <li key={link}>
                <NextLink 
                  href={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "-")}`}
                  className="text-sm hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-colors" />
                  {link}
                </NextLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h3 className="text-white font-bold text-lg">Contact Info</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <div className="bg-slate-800 p-2 rounded-lg text-primary">
                <MapPin className="w-5 h-5" />
              </div>
              <p className="text-sm text-slate-400">
                123 Healthcare Way, Medical District,<br />
                San Francisco, CA 94103
              </p>
            </li>
            <li className="flex items-center gap-4">
              <div className="bg-slate-800 p-2 rounded-lg text-primary">
                <Phone className="w-5 h-5" />
              </div>
              <p className="text-sm text-slate-400">+1 (234) 567-890</p>
            </li>
            <li className="flex items-center gap-4">
              <div className="bg-slate-800 p-2 rounded-lg text-primary">
                <Mail className="w-5 h-5" />
              </div>
              <p className="text-sm text-slate-400">info@buddhashospital.com</p>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-6">
          <h3 className="text-white font-bold text-lg">Newsletter</h3>
          <p className="text-sm text-slate-400">
            Subscribe to our newsletter for the latest health tips and hospital updates.
          </p>
          <div className="flex items-center gap-2">
            <input 
              type="email" 
              placeholder="Your email"
              className="bg-slate-800 border-none rounded-full px-5 py-3 text-sm w-full focus:ring-2 focus:ring-primary outline-none transition-all"
            />
            <button className="bg-primary hover:bg-primary-dark text-white p-3 rounded-full transition-all flex-shrink-0 shadow-lg shadow-primary/20 active:scale-95">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto px-6 lg:px-12 mt-16 pt-8 border-t border-slate-800">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-slate-500">
            © {currentYear} Buddha&apos;s Hospital. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <NextLink href="/privacy" className="text-xs text-slate-500 hover:text-white transition-colors">Privacy Policy</NextLink>
            <NextLink href="/terms" className="text-xs text-slate-500 hover:text-white transition-colors">Terms of Service</NextLink>
          </div>
        </div>
      </div>
    </footer>
  );
};
