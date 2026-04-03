'use client';

import { motion } from 'framer-motion';
import { EXPERIENCES } from '@/lib/constants';

export default function ExperiencePage() {
  return (
    <div className="max-w-3xl mx-auto py-12 md:py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-jetbrains font-bold text-white mb-6">
          <span className="text-accent">&gt;</span> Experience
        </h1>
        <p className="text-lg text-foreground/60 leading-relaxed">
          My professional journey across software engineering, AI research, and applied machine learning.
        </p>
      </motion.div>

      <div className="relative border-l border-white/20 ml-3 md:ml-6 space-y-12">
        {EXPERIENCES.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative pl-8 md:pl-12 group"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full bg-accent ring-4 ring-black group-hover:scale-150 group-hover:shadow-[0_0_10px_rgba(0,229,204,0.8)] transition-all duration-300"></div>
            
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2 gap-2">
              <h2 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                {exp.role}
              </h2>
              <span className="text-accent font-jetbrains text-sm">{exp.date}</span>
            </div>
            
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-lg font-medium text-foreground/70">
                {exp.company}
              </h3>
              <span className="text-foreground/50 text-sm">| {exp.location}</span>
            </div>
            
            <ul className="space-y-2 mt-4 text-foreground/80 text-sm md:text-base leading-relaxed">
              {exp.description.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-accent/50 mt-1.5 text-xs">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
