import React from "react";
import * as THREE from "three";
import HALO from "vanta/dist/vanta.halo.min";

interface VantaBackgroundProps {
  start: boolean;
  isScrolling: boolean;
}

const VantaBackground: React.FC<VantaBackgroundProps> = ({
  start,
  isScrolling,
}) => {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const vantaEffectRef = React.useRef<any>(null);

  const originalSpeed = 0.1; // Increased speed

  React.useEffect(() => {
    if (!start) return;

    if (containerRef.current && !vantaEffectRef.current) {
      vantaEffectRef.current = HALO({
        el: containerRef.current,
        THREE,
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        size: 0.3,
        zoom: 0.85,
        baseColor: 0x5aa9e6,
        backgroundAlpha: 0.0,
        speed: originalSpeed,
        waveSpeed: originalSpeed,
        amplitudeFactor: 0.12,
      });
    }

    return () => {
      if (vantaEffectRef.current) {
        vantaEffectRef.current.destroy();
        vantaEffectRef.current = null;
      }
    };
  }, [start]);

  React.useEffect(() => {
    if (vantaEffectRef.current) {
      vantaEffectRef.current.setOptions({
        speed: isScrolling ? 0 : originalSpeed,
        waveSpeed: isScrolling ? 0 : originalSpeed,
      });
    }
  }, [isScrolling]);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 transition-opacity duration-[2000ms]"
      style={{
        background: "linear-gradient(-70deg, #202020, #000000)",
        opacity: start ? 1 : 0,
      }}
    />
  );
};

export default VantaBackground;