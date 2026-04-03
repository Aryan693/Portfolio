'use client';

import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '@/lib/constants';

export default function ResumePage() {
  return (
    <div className="max-w-5xl mx-auto py-8 md:py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-3xl md:text-4xl font-jetbrains font-bold text-white">
            <span className="text-accent">&gt;</span> Resume
          </h1>

          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-accent border border-white/10 hover:border-accent/40 px-4 py-2 rounded-lg transition-all"
            >
              <ExternalLink className="w-4 h-4" /> Open in new tab
            </a>
            <a
              href={PERSONAL_INFO.resumePdfUrl}
              download
              className="inline-flex items-center gap-2 text-sm font-semibold bg-accent hover:bg-[#06B6D4] text-black px-5 py-2 rounded-lg transition-colors"
            >
              <Download className="w-4 h-4" /> Download PDF
            </a>
          </div>
        </div>

        <p className="text-foreground/50 text-sm mt-2">
          {PERSONAL_INFO.name} — AI &amp; Data Engineer
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="rounded-xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(0,229,204,0.05)] bg-white/5"
        style={{ height: 'calc(100vh - 220px)', minHeight: '600px' }}
      >
        <iframe
          src={`${PERSONAL_INFO.resumePdfUrl}#toolbar=1&navpanes=0&scrollbar=1&zoom=page-width`}
          className="w-full h-full"
          title={`${PERSONAL_INFO.name} Resume`}
        />
      </motion.div>
    </div>
  );
}
