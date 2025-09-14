import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Cake } from 'lucide-react';

interface BirthdayRevealProps {
  isVisible: boolean;
}

export const BirthdayReveal = ({ isVisible }: BirthdayRevealProps) => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setShowMessage(true), 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <section className="py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className={`birthday-reveal ${isVisible ? 'active' : ''}`}>
          {/* Simple cake icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-12">
            <Cake className="w-8 h-8 text-accent" />
          </div>

          {/* Clean surprise heading */}
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-12 text-foreground">
            SURPRISE!
          </h1>

          <div className={`transition-all duration-700 ${showMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {/* Elegant birthday message */}
            <h2 className="font-great-vibes text-4xl md:text-6xl mb-16 text-accent">
              Happy Birthday Pau! 🎉
            </h2>

            {/* Simple message */}
            <div className="max-w-xl mx-auto mb-16">
              <p className="font-caveat text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
                This isn't actually my portfolio... it's your special birthday surprise!
              </p>
              
              <p className="font-caveat text-lg md:text-xl text-muted-foreground">
                I hope this little technical trick made you smile. You deserve all the happiness in the world! ✨
              </p>
            </div>

            {/* Clean button */}
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent-hover text-accent-foreground font-caveat text-lg px-8"
            >
              <Heart className="w-5 h-5 mr-2" />
              You're Awesome, Pau!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};