"use client";

export default function GlassFilter() {
  return (
    <svg style={{ display: "none" }}>
      <filter id="glass-distortion" x="0%" y="0%" width="100%" height="100%">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.01 0.01"
          numOctaves="1"
          seed="7"
          result="turbulence"
        />
        <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
        <feDisplacementMap
          in="SourceGraphic"
          in2="softMap"
          scale="100"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </svg>
  );
}
