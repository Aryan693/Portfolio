import type { Metadata } from 'next'
import { JetBrains_Mono, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'], 
  variable: '--font-jetbrains',
})

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  variable: '--font-dmsans',
})

export const metadata: Metadata = {
  title: 'Aryan Nitin Gulhane | AI & Data Engineer',
  description: 'AI & Data Engineer building intelligent systems from LLM pipelines to enterprise-scale data architectures.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${jetbrainsMono.variable} ${dmSans.variable} font-sans bg-background text-foreground antialiased min-h-screen flex flex-col relative`}>
        {/* Dot Matrix Background */}
        <div className="fixed inset-0 z-[-1] bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:24px_24px] opacity-20"></div>
        
        <Navbar />
        <main className="flex-grow pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
