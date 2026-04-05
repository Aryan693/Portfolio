'use client';

import { motion } from 'framer-motion';
import { Award, Code, BookOpen, Trophy } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-20 border-t border-white/10" id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-jetbrains font-bold mb-8">
          <span className="text-accent">&gt;</span> About Me
        </h2>
        
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10 group-hover:bg-accent/10 transition-colors duration-500"></div>
          
          <p className="text-lg text-foreground/80 leading-relaxed mb-8">
            I'm a Computer Science graduate from IIT Dharwad, currently working as a Software Engineer at MAQ Software. 
            I build AI-powered automation systems, LLM pipelines, and scalable data engineering solutions on 
            Microsoft Fabric. When I’m not building systems, you’ll likely find me on the football field — 
            I served as the Football Club Secretary and twice captained the IIT Dharwad team in the All India Inter-IIT sports meets.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 bg-black/40 border border-white/10 rounded-lg p-4 group/chip hover:border-accent/50 transition-colors h-full">
              <Award className="w-5 h-5 text-accent flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white uppercase tracking-wider">JEE AIR 2408</span>
                <span className="text-xs text-foreground/60">Across India (Top 0.21%)</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3 bg-black/40 border border-white/10 rounded-lg p-4 group/chip hover:border-accent/50 transition-colors h-full">
              <Code className="w-5 h-5 text-accent flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white uppercase tracking-wider">Microsoft Certified</span>
                <span className="text-xs text-foreground/60">DP-600 & DP-700 (Fabric)</span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-black/40 border border-white/10 rounded-lg p-4 group/chip hover:border-accent/50 transition-colors h-full">
              <BookOpen className="w-5 h-5 text-accent flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white uppercase tracking-wider">IIT Dharwad</span>
                <span className="text-xs text-foreground/60">B.Tech CS (CGPA: 8.66)</span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-black/40 border border-white/10 rounded-lg p-4 group/chip hover:border-accent/50 transition-colors h-full">
              <Trophy className="w-5 h-5 text-accent flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white uppercase tracking-wider">Football Captain</span>
                <span className="text-xs text-foreground/60">Secretary (2022 – 23)</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
