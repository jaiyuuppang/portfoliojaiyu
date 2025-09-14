import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Gift, Heart, Cake, Sparkles, Star } from 'lucide-react';

interface BirthdayRevealProps {
  isVisible: boolean;
}

export const BirthdayReveal = ({ isVisible }: BirthdayRevealProps) => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setShowMessage(true), 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className={`birthday-reveal ${isVisible ? 'active' : ''}`}>
          <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-8">
            <Cake className="w-10 h-10 text-accent" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-foreground">
            SURPRISE!
          </h1>

          <div className={`transition-all duration-500 ${showMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-accent">
              Happy Birthday Pau! 🎉
            </h2>

            <div className="portfolio-card max-w-2xl mx-auto mb-8">
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                This isn't actually my portfolio... it's your special birthday surprise! 
                <br /><br />
                I hope this little technical trick made you smile. 
                You deserve all the happiness in the world! 
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-8">
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Amazing adventures ahead</span>
                </div>
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Dreams that come true</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Joy in every moment</span>
                </div>
                <div className="flex items-center gap-3">
                  <Gift className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Wonderful surprises</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-8">
                Hope your special day is absolutely perfect! ✨
              </p>
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent-hover text-accent-foreground"
              >
                <Heart className="w-5 h-5 mr-2" />
                You're Awesome, Pau!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};