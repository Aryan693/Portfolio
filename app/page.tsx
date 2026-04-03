import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import WhatIDoSection from '@/components/WhatIDoSection';
import FeaturedProjects from '@/components/FeaturedProjects';
import EducationSection from '@/components/EducationSection';
import ExploreSection from '@/components/ExploreSection';

export default function Home() {
  return (
    <div className="flex flex-col gap-8 md:gap-16">
      <HeroSection />
      <AboutSection />
      <WhatIDoSection />
      <FeaturedProjects />
      <EducationSection />
      <ExploreSection />
    </div>
  );
}
