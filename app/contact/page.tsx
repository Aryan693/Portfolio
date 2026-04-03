'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '@/lib/constants';

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto py-12 md:py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-jetbrains font-bold text-white mb-6">
          <span className="text-accent">&gt;</span> Contact
        </h1>
        <p className="text-lg text-foreground/60 leading-relaxed">
          I'm currently open to new opportunities in AI, Data Engineering, and Software Development.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden"
      >
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/20 rounded-full blur-3xl z-[-1]"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl z-[-1]"></div>
        
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Let's build something together!</h2>
        
        <div className="flex flex-col gap-6">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex items-center justify-between p-4 bg-black/40 hover:bg-black/60 border border-white/10 hover:border-accent/40 rounded-xl transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/5 rounded-lg text-accent group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-foreground/50">Email</p>
                <p className="text-white font-medium group-hover:text-accent transition-colors">{PERSONAL_INFO.email}</p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-foreground/30 group-hover:text-accent transition-colors" />
          </a>

          <a
            href={`tel:${PERSONAL_INFO.phone.replace(/[^0-9+]/g, '')}`}
            className="flex items-center justify-between p-4 bg-black/40 hover:bg-black/60 border border-white/10 hover:border-accent/40 rounded-xl transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/5 rounded-lg text-accent group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-foreground/50">Phone</p>
                <p className="text-white font-medium group-hover:text-accent transition-colors">{PERSONAL_INFO.phone}</p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-foreground/30 group-hover:text-accent transition-colors" />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-black/40 hover:bg-black/60 border border-white/10 hover:border-accent/40 rounded-xl transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/5 rounded-lg text-accent group-hover:scale-110 transition-transform">
                <Linkedin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-foreground/50">LinkedIn</p>
                <p className="text-white font-medium group-hover:text-accent transition-colors">{PERSONAL_INFO.name}</p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-foreground/30 group-hover:text-accent transition-colors" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
