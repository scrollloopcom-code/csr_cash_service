import React, { useState, useEffect } from "react";
import ContactCard from "@/components/ContactCard";
import { MadeWithDyad } from "@/components/made-with-dyad";
import AnimatedBackground from "@/components/AnimatedBackground";
import ParticleBackground from "@/components/ParticleBackground";

const Index: React.FC = () => {
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    // Show particles after contact card animation completes (200ms delay + 1200ms animation)
    const timer = setTimeout(() => {
      setShowParticles(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen">
      {/* Parallax background with multiple animated layers */}
      <AnimatedBackground />
      
      {/* Subtle particle effect on top of background - only shown after animation */}
      {showParticles && <ParticleBackground />}

      {/* Full-height centering wrapper */}
      <div className="relative min-h-screen flex items-center justify-center">
        {/* Responsive container */}
        <div
          className="
            w-full
            px-4 sm:px-6 md:px-8
            py-6 sm:py-8
            max-w-md sm:max-w-lg md:max-w-xl lg:max-w-xl
          "
        >
          {/* Service providers banner with custom color styling */}
          <section
            aria-labelledby="services-intro"
            className="animate-fade-in-scale-up mb-2 sm:mb-3"
            style={{ animationDelay: '100ms', animationFillMode: 'backwards' }}
          >
            <h2 id="services-intro" className="sr-only">Supported Services</h2>
            <div className="text-center">
              <span className="inline-flex flex-wrap justify-center gap-1 sm:gap-2 text-base sm:text-lg font-medium [text-shadow:0_0_8px_rgba(255,255,255,0.4)]">
                <span>
                  <span className="text-white font-bold">1x</span>
                  <span className="text-[#4DA6FF]">Bet</span>
                </span>
                <span className="text-white/50">|</span>
                <span>
                  <span className="text-white">Mel</span>
                  <span className="text-[#FFD700]">bet</span>
                </span>
                <span className="text-white/50">|</span>
                <span>
                  <span className="text-[#FF0000]">888</span>
                  <span className="text-white">Starz</span>
                </span>
              </span>
            </div>
          </section>

          <section
            aria-labelledby="contact-card"
            className="animate-fade-in-scale-up"
            style={{ animationDelay: '200ms', animationFillMode: 'backwards' }}
          >
            <h1 id="contact-card" className="sr-only">Contact</h1>
            <ContactCard />
          </section>

          <footer
            className="pt-6 sm:pt-8 text-center animate-fade-in-scale-up"
            style={{ animationDelay: '400ms', animationFillMode: 'backwards' }}
          >
            <MadeWithDyad />
          </footer>
        </div>
      </div>
    </main>
  );
};

export default Index;