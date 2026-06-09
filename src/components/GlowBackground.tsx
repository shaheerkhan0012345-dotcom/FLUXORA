import { motion } from "motion/react";

export function GlowBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden -z-10 select-none bg-black">
      {/* High-fidelity Loop Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-80"
        src="https://res.cloudinary.com/dkpv0eax8/video/upload/v1780995352/convert_into_video_202606090138_cglode.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Premium Dark Glass & Vignette Overlay to preserve exquisite contrast and extreme readability of the white content */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/60 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-[circle_at_center] from-transparent via-black/10 to-black/70 pointer-events-none" />

      {/* Atmospheric digital grain overlay for that cinematic high-end aesthetic */}
      <div 
        className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
}
