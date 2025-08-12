import { useEffect, useState } from "react";

export default function ParticleBackground() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Delay particle initialization slightly for smoother appearance
    const timer = setTimeout(() => {
      const particleScript = document.createElement("script");
      particleScript.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
      particleScript.onload = () => {
        (window as any).particlesJS("particles-js", {
          particles: {
            number: { value: 60, density: { enable: true, value_area: 800 } },
            color: { value: "#22d3ee" }, // Cyan-400
            shape: { type: "circle" },
            opacity: { value: 0.4, random: true },
            size: { value: 2, random: true },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#0ea5e9", // Sky-500
              opacity: 0.1,
              width: 1,
            },
            move: {
              enable: true,
              speed: 3,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "grab" },
              onclick: { enable: false },
              resize: true,
            },
            modes: {
              grab: { distance: 140, line_linked: { opacity: 0.2 } },
            },
          },
          retina_detect: true,
        });
        setIsLoaded(true);
      };
      document.head.appendChild(particleScript);

      return () => {
        if (document.head.contains(particleScript)) {
          document.head.removeChild(particleScript);
        }
      };
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      id="particles-js" 
      className={`absolute inset-0 z-0 pointer-events-none transition-opacity duration-1000 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
    />
  );
}