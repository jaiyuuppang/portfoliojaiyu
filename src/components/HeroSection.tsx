import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Code, Coffee } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

interface HeroSectionProps {
  onRevealClick: () => void;
}

export const HeroSection = ({ onRevealClick }: HeroSectionProps) => {
  const [showBirthdayHint, setShowBirthdayHint] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBirthdayHint(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 hero-gradient" />
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Code className="w-8 h-8 text-primary" />
            <Coffee className="w-6 h-6 text-accent" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Technical Solutions
            <br />
            <span className="text-4xl md:text-6xl">& Backend Development</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Specialized in technical support, backend systems, and creating robust solutions that actually work.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary-hover text-white">
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={onRevealClick}
              className={`transition-all duration-500 ${
                showBirthdayHint 
                  ? 'border-accent text-accent hover:bg-accent hover:text-white animate-bounce-gentle' 
                  : ''
              }`}
            >
              {showBirthdayHint ? '🎉 Something Special' : 'Get In Touch'}
            </Button>
          </div>
          
          {showBirthdayHint && (
            <p className="text-sm text-accent animate-fade-in-up">
              Psst... there's a surprise waiting for someone special! 👀
            </p>
          )}
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};