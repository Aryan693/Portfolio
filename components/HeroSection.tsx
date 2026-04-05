'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';
import { PERSONAL_INFO, ROLE_FOCUS } from '@/lib/constants';

export default function HeroSection() {
  return (
    <section className="min-h-[80vh] flex flex-col md:flex-row items-center justify-center gap-12 py-20">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-shrink-0"
      >
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full p-1 bg-gradient-to-tr from-accent/50 to-accent/10 shadow-[0_0_30px_rgba(0,229,204,0.3)] group hover:shadow-[0_0_50px_rgba(0,229,204,0.5)] transition-shadow duration-500">
          <div className="w-full h-full rounded-full border-2 border-accent overflow-hidden bg-white/5 relative">
            <Image
              src="/profile.png"
              alt={PERSONAL_INFO.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </motion.div>

      <div className="flex flex-col items-start gap-6 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-foreground/80">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Open to {ROLE_FOCUS.join(' / ')} roles
            </div>
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-foreground/80">
              <MapPin className="w-3 h-3 text-accent" /> {PERSONAL_INFO.location}
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-jetbrains font-bold text-white mb-2 tracking-tight">
            Aryan Nitin <span className="text-accent">Gulhane</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-foreground/80 font-medium mb-4">
            {PERSONAL_INFO.title}
          </h2>
          <p className="text-base md:text-lg text-foreground/60 leading-relaxed max-w-xl">
            {PERSONAL_INFO.tagline}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center gap-4 mt-2"
        >
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-black font-semibold px-6 py-3 rounded-md transition-colors"
          >
            Explore Projects <ArrowRight className="w-4 h-4" />
          </Link>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-medium px-6 py-3 rounded-md border border-white/10 transition-colors"
          >
            Contact Me
          </Link>
          <Link
            href="/resume"
            className="inline-flex items-center gap-2 text-foreground/80 hover:text-accent font-medium px-4 py-3 transition-colors ml-2"
          >
            <Download className="w-4 h-4" /> Resume
          </Link>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center gap-5 mt-4"
        >
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-foreground/50 hover:text-accent transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="text-foreground/50 hover:text-accent transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
