import React from "react";
import BrandIcon from "@/components/BrandIcon";

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 bg-slate-950">
      {/* Background from AnimatedBackground.tsx */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="gradient-orb orb-pink-purple"></div>
        <div className="gradient-orb orb-purple"></div>
        <div className="gradient-orb orb-blue-cyan"></div>
        <div className="absolute inset-0 background-overlay" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.10),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.28),transparent_60%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center space-y-6">
        <div
          className="text-center animate-fade-in"
          style={{ animationDelay: "200ms" }}
        >
          <div className="flex flex-col items-center justify-center gap-3">
            <BrandIcon className="h-40 w-40 sm:h-48 sm:w-48" />
            <div className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
              <span className="text-glow">CSR Cash Service</span>
            </div>
          </div>
          <p className="mt-2 text-xs text-white/60">By Madusha Lakshani</p>
        </div>
        <div
          className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden mt-4 animate-fade-in"
          style={{ animationDelay: "400ms" }}
        >
          <div className="h-full bg-cyan-400 rounded-full animate-loading-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;