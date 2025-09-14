import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Code2 } from 'lucide-react';

interface HeroSectionProps {
  onRevealClick: () => void;
}

export const HeroSection = ({ onRevealClick }: HeroSectionProps) => {
  const [showBirthdayHint, setShowBirthdayHint] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBirthdayHint(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-muted rounded-lg mb-8">
            <Code2 className="w-8 h-8 text-foreground" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground tracking-tight">
            Hi, I'm Jai 👋
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Web developer & tech support specialist who loves solving problems and building things.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground">
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={onRevealClick}
              className={`transition-all duration-300 ${
                showBirthdayHint 
                  ? 'border-accent text-accent hover:bg-accent hover:text-accent-foreground animate-pulse' 
                  : ''
              }`}
            >
              {showBirthdayHint ? '🎉 Click Me!' : 'Get In Touch'}
            </Button>
          </div>
          
          {showBirthdayHint && (
            <p className="text-sm text-accent animate-fade-in-up">
              I have something special to share... 🎁
            </p>
          )}
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse">
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};