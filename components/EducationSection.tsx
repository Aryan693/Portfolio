'use client';

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { EDUCATION } from '@/lib/constants';

export default function EducationSection() {
  return (
    <section className="py-20 border-t border-white/10" id="education">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-jetbrains font-bold mb-12">
          <span className="text-accent">&gt;</span> Education
        </h2>

        <div className="space-y-6">
          {EDUCATION.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 hover:border-accent/40 rounded-xl p-6 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4 group"
            >
              <div className="flex items-start md:items-center gap-4">
                <div className="p-3 bg-black/50 rounded-lg group-hover:text-accent transition-colors">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{edu.institution}</h3>
                  <p className="text-foreground/60 text-sm">{edu.degree}</p>
                </div>
              </div>
              <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center w-full md:w-auto gap-2">
                <span className="text-sm font-medium text-foreground/80">{edu.year}</span>
                <span className="text-xs font-bold px-2.5 py-1 bg-accent/10 border border-accent/20 text-accent rounded-md">
                  {edu.score}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
