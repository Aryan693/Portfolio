'use client';

import { motion } from 'framer-motion';
import { SERVICES } from '@/lib/constants';

export default function WhatIDoSection() {
  return (
    <section className="py-20 border-t border-white/10" id="services">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-jetbrains font-bold mb-12">
          <span className="text-accent">&gt;</span> What I Do
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 hover:border-accent/50 rounded-xl p-8 group transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,229,204,0.1)] hover:-translate-y-1"
            >
              <div className="mb-6 p-4 bg-black/40 rounded-lg inline-block text-accent">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
