'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { EXPLORE_STATS } from '@/lib/constants';

export default function ExploreSection() {
  return (
    <section className="py-20 border-t border-white/10" id="explore">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-jetbrains font-bold mb-12">
          <span className="text-accent">&gt;</span> Explore More
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {EXPLORE_STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link href={stat.href} className="block group">
                <div className="bg-[#111] border border-white/10 group-hover:border-accent flex flex-col items-center justify-center p-8 rounded-xl h-full transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_0_20px_rgba(0,229,204,0.15)] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="text-foreground/50 group-hover:text-accent mb-4 transition-colors z-10">
                    {stat.emoji}
                  </div>
                  <div className={`font-bold text-white mb-1 z-10 ${stat.textOnly ? 'text-lg' : 'text-3xl font-jetbrains'}`}>
                    {stat.count}
                  </div>
                  <div className="text-xs text-foreground/60 font-medium uppercase tracking-wider z-10 group-hover:text-foreground/90 transition-colors">
                    {stat.label}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
