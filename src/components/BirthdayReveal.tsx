import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Gift, Heart, Cake, Sparkles, PartyPopper, Star } from 'lucide-react';

interface BirthdayRevealProps {
  isVisible: boolean;
}

export const BirthdayReveal = ({ isVisible }: BirthdayRevealProps) => {
  const [showMessage, setShowMessage] = useState(false);
  const [showBalloons, setShowBalloons] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer1 = setTimeout(() => setShowMessage(true), 500);
      const timer2 = setTimeout(() => setShowBalloons(true), 1000);
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-accent/10 to-primary/10 relative overflow-hidden">
      {/* Floating Balloons Animation */}
      {showBalloons && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute animate-bounce-gentle text-4xl`}
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 2) * 30}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${2 + i * 0.2}s`
              }}
            >
              🎈
            </div>
          ))}
        </div>
      )}

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className={`birthday-reveal ${isVisible ? 'active' : ''}`}>
          <div className="flex justify-center items-center gap-4 mb-8">
            <PartyPopper className="w-12 h-12 text-accent animate-bounce" />
            <Cake className="w-16 h-16 text-primary animate-bounce-gentle" />
            <Gift className="w-12 h-12 text-accent animate-bounce" />
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            SURPRISE!
          </h1>

          <div className={`transition-all duration-1000 delay-500 ${showMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-primary">
              Happy Birthday Pau! 🎉
            </h2>

            <div className="portfolio-card max-w-2xl mx-auto mb-8 bg-gradient-to-br from-white to-accent/5">
              <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-6">
                This isn't actually my portfolio... it's your special birthday surprise! 
                <br /><br />
                I hope this little technical trick made you smile. 
                You deserve all the happiness in the world! 
              </p>

              <div className="flex flex-wrap justify-center gap-4 text-2xl mb-6">
                <span className="animate-bounce" style={{ animationDelay: '0s' }}>🎂</span>
                <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>🎈</span>
                <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🎁</span>
                <span className="animate-bounce" style={{ animationDelay: '0.3s' }}>🎊</span>
                <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>🥳</span>
                <span className="animate-bounce" style={{ animationDelay: '0.5s' }}>✨</span>
              </div>

              <div className="text-lg text-muted-foreground">
                <p className="mb-4">Wishing you:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>Amazing adventures ahead</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Dreams that come true</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>Joy in every moment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Gift className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Wonderful surprises</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-6">
                Hope your special day is absolutely perfect! 🌟
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-accent to-accent-hover text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300"
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