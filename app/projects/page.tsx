'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Folder } from 'lucide-react';
import { PROJECTS } from '@/lib/constants';

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-jetbrains font-bold text-white mb-6">
          <span className="text-accent">&gt;</span> Projects
        </h1>
        <p className="text-lg text-foreground/60 leading-relaxed max-w-2xl">
          A showcase of my technical work across AI engineering, data pipelines, and full-stack development.
        </p>
      </motion.div>

      <div className="space-y-8">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`bg-[#111] border group relative overflow-hidden rounded-xl p-6 md:p-8 transition-all duration-300 ${
              project.featured ? 'border-accent/30 hover:border-accent' : 'border-white/10 hover:border-white/30'
            }`}
          >
            {project.featured && (
              <div className="absolute top-0 right-0 py-1 px-3 bg-accent text-black text-[10px] font-bold uppercase tracking-wider rounded-bl-lg">
                Featured
              </div>
            )}
            
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <Folder className={`w-6 h-6 ${project.featured ? 'text-accent' : 'text-foreground/40'}`} />
                  <h2 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                    {project.title}
                  </h2>
                </div>
                
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-xs font-medium text-foreground/80">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-4 md:mt-1">

                {project.link && (
                  <a href={project.link} className="text-foreground/50 hover:text-white transition-colors" aria-label="External Link">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
