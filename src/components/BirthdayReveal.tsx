import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Heart, Cake, X } from 'lucide-react';

interface BirthdayRevealProps {
  isVisible: boolean;
}

export const BirthdayReveal = ({ isVisible }: BirthdayRevealProps) => {
  const [showMessage, setShowMessage] = useState(false);
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setShowMessage(true), 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className={`birthday-reveal ${isVisible ? 'active' : ''}`}>
          {/* Birthday Cake */}
          <div className="mb-12">
            <div className="text-8xl mb-4 animate-birthday-bounce">🎂</div>
            <div className="text-4xl mb-6">🕯️🕯️🕯️</div>
          </div>

          {/* Surprise heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-foreground">
            SURPRISE!
          </h1>

          <div className={`transition-all duration-700 ${showMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {/* Birthday message */}
            <h2 className="text-4xl md:text-6xl mb-12 text-accent font-bold">
              Happy Birthday Pau! 🎉
            </h2>

            {/* Content with photo beside text */}
            <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
              {/* Text content */}
              <div className="flex-1 max-w-2xl">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                  Di ko talaga to portfolio HAHAHAH wala naman akong alam don!
                </p>
                
                <p className="text-base md:text-lg text-muted-foreground mb-8">
                  Thank you for being an amazing ferson. Stay what you are, sana magbago ka na! ✨
                </p>
              </div>

              {/* Pau's Photo */}
              <div className="flex-shrink-0">
                <div className="w-64 h-80 rounded-2xl overflow-hidden border-4 border-pink-200 shadow-lg">
                  <img 
                    src="/pau.jpg" 
                    alt="Pau" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Simple card button */}
            <div className="mb-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white text-lg px-8 py-6"
                onClick={() => setShowCard(true)}
              >
                <Heart className="w-5 h-5 mr-2" />
                Open Birthday Card
              </Button>
            </div>

            {/* Pop-out Birthday Card */}
            <Dialog open={showCard} onOpenChange={setShowCard}>
              <DialogContent className="max-w-md mx-auto bg-gradient-to-br from-pink-50 to-purple-50 border-2 border-pink-200 rounded-2xl shadow-2xl">
                <DialogHeader>
                  <DialogTitle className="text-center text-2xl font-bold text-foreground">
                    Birthday Card 💌
                  </DialogTitle>
                </DialogHeader>
                <div className="text-center space-y-6 py-4">
                  <div className="text-6xl mb-4">🎂</div>
                  <h3 className="text-2xl font-bold text-foreground">Hi Pau! Kidding aside,</h3>
                  <div className="text-muted-foreground space-y-3 text-lg">
                    <p>Wishing you the happiest of birthdays! 🎉</p>
                    <p>Wow! Congrats on making it through another year. I really want to thank you for being there for me last year—it helped me get through some tough times. Please never doubt yourself, and I hope you achieve the things you want this time! </p>
                    <p>Wishing you all the happiness errday! ML NAMAN MINSAN OH YAW MO NA BA Q BUHATIN? 😓 CHZ HAHA</p>
                     <p className="text-sm italic text-muted-foreground">Sensya na scuffy website 🤣Kaninang umaga lang ako nag-aral ng React HAHAHA</p>
                  </div>
                   <div className="pt-6 border-t border-pink-200">
                   
                    <p className="font-semibold text-foreground text-lg">-Jai </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};