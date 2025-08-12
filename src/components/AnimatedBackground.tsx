import React from "react";

const AnimatedBackground: React.FC = () => {
  return (
    <div 
      aria-hidden 
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="gradient-orb orb-pink-purple"></div>
      <div className="gradient-orb orb-purple"></div>
      <div className="gradient-orb orb-blue-cyan"></div>
      
      {/* Soft overlay to maintain readability */}
      <div className="absolute inset-0 background-overlay" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.10),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.28),transparent_60%)]" />
    </div>
  );
};

export default AnimatedBackground;