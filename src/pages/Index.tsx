import { useState, useRef } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { BirthdayReveal } from '@/components/BirthdayReveal';

const Index = () => {
  const [showBirthdayReveal, setShowBirthdayReveal] = useState(false);
  const birthdayRef = useRef<HTMLDivElement>(null);

  const handleRevealClick = () => {
    setShowBirthdayReveal(true);
    setTimeout(() => {
      birthdayRef.current?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };

  const handleProjectClick = (projectId: number) => {
    // Any project click reveals the birthday surprise
    handleRevealClick();
  };

  return (
    <div className="min-h-screen">
      <HeroSection onRevealClick={handleRevealClick} />
      <SkillsSection />
      <ProjectsSection onProjectClick={handleProjectClick} />
      
      <div ref={birthdayRef}>
        <BirthdayReveal isVisible={showBirthdayReveal} />
      </div>
      
      {/* Footer */}
      <footer className="py-16 px-6 border-t">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">
            {showBirthdayReveal ? (
              <>
                Hope you loved your special surprise, Pau! 🎂✨
                <br />
                <span className="text-sm">Made with ❤️ by Jai</span>
              </>
            ) : (
              <>
                © 2024 Jai - Web Developer & Tech Support
                <br />
                <span className="text-sm">Always ready to help solve your tech problems!</span>
              </>
            )}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;