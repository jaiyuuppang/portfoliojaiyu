import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Gift, Heart, Cake, Sparkles, Star, PartyPopper } from 'lucide-react';

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
    <section className="py-24 px-6 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 dark:from-pink-950/20 dark:via-purple-950/20 dark:to-indigo-950/20 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-10 left-10 animate-bounce delay-100">
        <Sparkles className="w-8 h-8 text-pink-400 opacity-60" />
      </div>
      <div className="absolute top-20 right-20 animate-bounce delay-300">
        <Star className="w-6 h-6 text-purple-400 opacity-60" />
      </div>
      <div className="absolute bottom-20 left-20 animate-bounce delay-500">
        <Heart className="w-7 h-7 text-red-400 opacity-60" />
      </div>
      <div className="absolute bottom-10 right-10 animate-bounce delay-700">
        <PartyPopper className="w-8 h-8 text-yellow-400 opacity-60" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className={`birthday-reveal ${isVisible ? 'active' : ''}`}>
          {/* Main icon with glow effect */}
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full mb-8 shadow-2xl shadow-pink-500/30 animate-pulse">
            <Cake className="w-12 h-12 text-white" />
          </div>

          {/* Surprise heading with dramatic font */}
          <h1 className="font-playfair text-6xl md:text-8xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 animate-fade-in transform rotate-1">
            SURPRISE!
          </h1>

          <div className={`transition-all duration-1000 ${showMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Birthday message with handwritten font */}
            <h2 className="font-great-vibes text-4xl md:text-7xl mb-8 text-pink-600 dark:text-pink-400 transform -rotate-1 animate-fade-in">
              Happy Birthday Pau! 🎉
            </h2>

            {/* Card with artistic styling */}
            <div className="portfolio-card max-w-2xl mx-auto mb-8 bg-white/80 dark:bg-black/20 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 dark:border-white/10">
              <p className="font-caveat text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 transform rotate-0.5">
                This isn't actually my portfolio... it's your special birthday surprise! 
                <br /><br />
                <span className="font-dancing text-2xl md:text-3xl text-purple-600 dark:text-purple-400">
                  I hope this little technical trick made you smile. 
                </span>
                <br />
                <span className="font-pacifico text-lg md:text-xl text-pink-600 dark:text-pink-400">
                  You deserve all the happiness in the world! 
                </span>
              </p>

              {/* Wishes grid with better styling */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-8">
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-pink-100/50 dark:bg-pink-900/20 transform hover:scale-105 transition-transform">
                  <Heart className="w-6 h-6 text-pink-500 flex-shrink-0 animate-pulse" />
                  <span className="font-caveat text-lg text-gray-700 dark:text-gray-300">Amazing adventures ahead</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-purple-100/50 dark:bg-purple-900/20 transform hover:scale-105 transition-transform">
                  <Sparkles className="w-6 h-6 text-purple-500 flex-shrink-0 animate-pulse" />
                  <span className="font-caveat text-lg text-gray-700 dark:text-gray-300">Dreams that come true</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-yellow-100/50 dark:bg-yellow-900/20 transform hover:scale-105 transition-transform">
                  <Star className="w-6 h-6 text-yellow-500 flex-shrink-0 animate-pulse" />
                  <span className="font-caveat text-lg text-gray-700 dark:text-gray-300">Joy in every moment</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-indigo-100/50 dark:bg-indigo-900/20 transform hover:scale-105 transition-transform">
                  <Gift className="w-6 h-6 text-indigo-500 flex-shrink-0 animate-pulse" />
                  <span className="font-caveat text-lg text-gray-700 dark:text-gray-300">Wonderful surprises</span>
                </div>
              </div>
            </div>

            {/* Final message and button */}
            <div className="text-center">
              <p className="font-dancing text-2xl md:text-3xl text-purple-600 dark:text-purple-400 mb-8 transform -rotate-1">
                Hope your special day is absolutely perfect! ✨
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-pacifico text-lg px-8 py-4 rounded-full shadow-2xl shadow-pink-500/30 transform hover:scale-110 transition-all duration-300 animate-pulse"
              >
                <Heart className="w-5 h-5 mr-2 animate-pulse" />
                You're Awesome, Pau!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};