'use client';

import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '@/lib/constants';

export default function SkillsPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 md:py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-jetbrains font-bold text-white mb-6">
          <span className="text-accent">&gt;</span> Skills
        </h1>
        <p className="text-lg text-foreground/60 leading-relaxed">
          The technologies, frameworks, and tools I use to build scalable systems.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SKILL_CATEGORIES.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`p-6 md:p-8 rounded-xl bg-white/5 border border-white/10 ${
              category.title === 'Certifications' ? 'md:col-span-2 bg-accent/5 border-accent/20' : ''
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-black/40 text-accent rounded-lg">
                {category.icon}
              </div>
              <h2 className="text-xl font-bold text-white">{category.title}</h2>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-[#111] hover:bg-accent/10 border border-white/10 hover:border-accent/50 text-foreground/80 hover:text-accent rounded-full text-sm font-medium transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,229,204,0.2)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
