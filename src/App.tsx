import { useState } from "react";
import { motion } from "motion/react";
import { Globe, ArrowRight } from "lucide-react";
import { Header } from "./components/Header";
import { GlowBackground } from "./components/GlowBackground";
import { StatsCard } from "./components/StatsCard";
import { CustomModal } from "./components/CustomModal";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Creative professional diverse visual avatars matching the premium dark aesthetic
  const trustAvatars = [
    {
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
      alt: "Sarah Johnson, Product Strategist"
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
      alt: "Alex Chen, Lead Designer"
    },
    {
      src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80",
      alt: "Marcus Vance, Technical Engineer"
    }
  ];

  return (
    <div className="relative min-h-screen text-white font-sans overflow-hidden flex flex-col justify-between">
      {/* 1. Global high-fidelity glowing backdrop & rising wedge gradient */}
      <GlowBackground />

      {/* 2. Responsive glass floating header navigation */}
      <Header onOpenCTA={() => setIsModalOpen(true)} />

      {/* 3. Hero Main Section Canvas */}
      <main className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 flex-grow flex flex-col justify-center py-10 md:py-16 relative z-10">
        
        {/* Subtle decorative glow highlights floating behind the text */}
        <div className="absolute top-[10%] left-[-5%] w-[35%] h-[35%] bg-orange-600/5 rounded-full blur-[80px] pointer-events-none" />

        {/* Info Badge: AI-powered innovation globe trigger (Top of content) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-start gap-3 mb-7"
        >
          <div className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/80 shadow-md">
            <Globe className="w-5 h-5 stroke-[1.25] text-white/90 animate-[spin_10s_linear_infinite]" />
          </div>
          <div className="flex flex-col">
            <span className="text-[12.5px] font-sans font-extrabold tracking-wide text-white/95">
              AI-Powered Innovation
            </span>
            <span className="text-[11.5px] font-sans font-normal text-white/55">
              For Everyone
            </span>
          </div>
        </motion.div>

        {/* Masterpiece Display Title: Capable of scaling from simple screens to majestic look */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[44px] sm:text-[66px] md:text-[84px] font-sans font-extrabold tracking-tight text-white leading-[1.03] select-none"
        >
          Technology <br />
          Crafted for All <br />
          Not <span className="font-serif italic font-light text-[#EAD7C3]">Machines</span>
        </motion.h1>

        {/* Descriptive Body Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-white/65 font-sans text-base md:text-[17px] font-normal max-w-lg mt-6 leading-relaxed select-text"
        >
          We create clear, intuitive, and accessible digital experiences that empower human potential.
        </motion.p>

        {/* Interaction block: Pill Button and Stacked social proof testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-6 mt-9"
        >
          {/* Main "Get started" orange-red pill CTA */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="pl-6.5 pr-1.5 py-1.5 rounded-full bg-[#EA3E15] hover:bg-[#F04D27] flex items-center gap-5 transition-all duration-300 group shadow-[0_12px_45px_rgba(234,62,21,0.22)] active:scale-[0.98] cursor-pointer"
          >
            <span className="text-white text-[15px] font-sans font-bold tracking-wide">
              Get started
            </span>
            {/* Embedded elegant circle right arrow */}
            <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center text-black shadow-md transition-transform duration-300 group-hover:translate-x-1 shrink-0">
              <ArrowRight className="w-[17px] h-[17px] stroke-[2.5]" />
            </div>
          </button>

          {/* Social Proof: Stacked Circular Avatars and Testimonial Link */}
          <div className="flex items-center">
            <div className="flex -space-x-2.5">
              {trustAvatars.map((av, index) => (
                <div
                  key={index}
                  className="w-9.5 h-9.5 rounded-full border-2 border-[#090201] overflow-hidden bg-[#200B06] shadow-lg hover:z-10 transition-transform duration-200 hover:scale-110"
                  title={av.alt}
                >
                  <img
                    src={av.src}
                    alt={av.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            
            <div className="ml-3.5 flex flex-col justify-center bg-white/[0.01] hover:bg-white/[0.04] p-1.5 px-3 rounded-xl border border-white/[0.03] transition-colors cursor-pointer select-none" onClick={() => setIsModalOpen(true)}>
              <span className="text-white/80 font-sans text-[12px] font-bold tracking-wide leading-none">
                Join 10,000+ others
              </span>
              <span className="text-white/45 font-sans text-[11px] font-medium leading-none mt-1">
                who trust Fluxora
              </span>
            </div>
          </div>
        </motion.div>

        {/* Dual bottom stats cards */}
        <div className="flex flex-wrap items-center gap-4 mt-12 md:mt-14">
          <StatsCard value="150+" label="Projects Delivered" delay={0.4} />
          <StatsCard value="98%" label="Client Satisfaction" delay={0.5} />
        </div>

      </main>

      {/* Footer copyright note */}
      <footer className="w-full max-w-7xl mx-auto py-6 px-6 md:px-10 text-center md:text-left text-white/30 text-[11px] font-sans tracking-widest uppercase select-none relative z-10 pointer-events-none">
        © {new Date().getFullYear()} Fluxora Inc. All rights reserved.
      </footer>

      {/* 4. Elegant interactive workspace modal sheet */}
      <CustomModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
