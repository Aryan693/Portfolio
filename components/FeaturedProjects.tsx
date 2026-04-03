'use client';

import { motion } from 'framer-motion';
import { Sparkles, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { HIGHLIGHTS } from '@/lib/constants';

export default function FeaturedProjects() {
  return (
    <section className="py-20 border-t border-white/10" id="featured">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-jetbrains font-bold">
            <span className="text-accent">&gt;</span> Featured Work
          </h2>
          <Link href="/projects" className="hidden md:flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors">
            View all projects <ExternalLink className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {HIGHLIGHTS.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="group block relative"
            >
              <Link href={project.link}>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 blur-sm"></div>
                <div className="relative bg-[#111] border border-white/10 group-hover:border-transparent rounded-xl p-8 h-full flex flex-col justify-between transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold border border-accent/20">
                        <Sparkles className="w-3 h-3" /> Featured
                      </div>
                      <span className="text-sm text-foreground/50 font-medium">{project.company}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-foreground/70 mb-6 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-foreground/80">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
            <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors">
                View all projects <ExternalLink className="w-4 h-4" />
            </Link>
        </div>
      </motion.div>
    </section>
  );
}
