'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';

import { NAV_LINKS, PERSONAL_INFO } from '@/lib/constants';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-jetbrains font-bold text-lg tracking-tight hover:text-accent transition-colors">
          {PERSONAL_INFO.name}
        </Link>

        <div className="hidden md:flex gap-6 items-center">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "font-medium text-sm transition-colors hover:text-accent relative",
                  isActive ? "text-accent" : "text-foreground/80"
                )}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-accent rounded-full" />
                )}
              </Link>
            );
          })}
          <Link
            href="/resume"
            className={cn(
              "flex items-center gap-1 font-medium text-sm transition-colors hover:text-accent relative ml-2",
              pathname?.startsWith('/resume') ? "text-accent" : "text-foreground/80"
            )}
          >
            Resume <ExternalLink className="w-3 h-3" />
            {pathname?.startsWith('/resume') && (
              <span className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-accent rounded-full" />
            )}
          </Link>
        </div>
        
        {/* Mobile menu toggle could be added here later */}
      </div>
    </nav>
  );
}
