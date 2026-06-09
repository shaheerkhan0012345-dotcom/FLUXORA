import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Menu, X, Sparkles, Cpu, Layers, Radio, ArrowRight } from "lucide-react";

interface HeaderProps {
  onOpenCTA: () => void;
}

export function Header({ onOpenCTA }: HeaderProps) {
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Features", hasDropdown: true },
    { label: "How It Works", href: "#how-it-works" },
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Blog", href: "#blog" },
  ];

  const featuresList = [
    {
      title: "Core Cognitive Engine",
      desc: "Autonomously parallelized reasoning models for critical flows.",
      icon: Cpu,
      color: "from-orange-500 to-amber-500",
    },
    {
      title: "Hyper-Personalization",
      desc: "Tailoring digital environments to individual touchpoints instantly.",
      icon: Sparkles,
      color: "from-rose-500 to-orange-500",
    },
    {
      title: "Resilient Multi-Layers",
      desc: "Robust state machine ensuring zero failure under high concurrency.",
      icon: Layers,
      color: "from-red-600 to-rose-500",
    },
    {
      title: "Real-time Telemetry Streams",
      desc: "Sub-millisecond data pipes for live continuous alignment.",
      icon: Radio,
      color: "from-amber-600 to-red-600",
    },
  ];

  return (
    <header className="w-full max-w-7xl mx-auto flex items-center justify-between py-6 px-6 md:px-10 z-50 relative select-none">
      {/* Left: Creative Fluxora Brand Logo and Text */}
      <a href="#" className="flex items-center gap-2.5 group">
        <div className="relative w-8 h-8 flex items-center justify-center">
          {/* Detailed 4-segment Geometric Logo */}
          <svg
            viewBox="0 0 100 100"
            className="w-8 h-8 transform transition-transform duration-500 group-hover:rotate-45"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Top-Left segment: bright fiery orange */}
            <rect
              x="12"
              y="12"
              width="34"
              height="34"
              rx="12"
              fill="url(#logo-grad-1)"
              className="drop-shadow-[0_2px_8px_rgba(249,115,22,0.3)]"
            />
            {/* Bottom-Left segment: intense orange-red */}
            <rect
              x="12"
              y="54"
              width="34"
              height="34"
              rx="12"
              fill="url(#logo-grad-2)"
              className="drop-shadow-[0_2px_8px_rgba(220,38,38,0.3)]"
            />
            {/* Top-Right segment: vivid pinkish-red */}
            <rect
              x="54"
              y="12"
              width="34"
              height="34"
              rx="12"
              fill="url(#logo-grad-3)"
              className="drop-shadow-[0_2px_8px_rgba(239,68,68,0.3)] animate-pulse"
            />
            {/* Bottom-Right segment: dark crimson */}
            <rect
              x="54"
              y="54"
              width="34"
              height="34"
              rx="12"
              fill="url(#logo-grad-4)"
              className="drop-shadow-[0_2px_8px_rgba(159,18,57,0.3)]"
            />

            {/* Gradient Definitions */}
            <defs>
              <linearGradient id="logo-grad-1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FFA447" />
                <stop offset="100%" stopColor="#FB923C" />
              </linearGradient>
              <linearGradient id="logo-grad-2" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#F97316" />
                <stop offset="100%" stopColor="#EA580C" />
              </linearGradient>
              <linearGradient id="logo-grad-3" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#EF4444" />
                <stop offset="100%" stopColor="#DC2626" />
              </linearGradient>
              <linearGradient id="logo-grad-4" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#B91C1C" />
                <stop offset="100%" stopColor="#7F1D1D" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <span className="text-xl md:text-2xl font-sans font-extrabold tracking-tight text-white transition-opacity duration-200 group-hover:opacity-90">
          Fluxora
        </span>
      </a>

      {/* Middle: Floating pill-shaped glass header navbar (hidden on mobile) */}
      <nav className="hidden md:flex items-center gap-1.5 border border-white/[0.07] bg-white/[0.03] backdrop-blur-xl rounded-full p-1.5 px-2 relative">
        {navItems.map((item, index) => {
          if (item.hasDropdown) {
            return (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setActiveDropdown(true)}
                onMouseLeave={() => setActiveDropdown(false)}
              >
                <button
                  type="button"
                  onClick={() => setActiveDropdown(!activeDropdown)}
                  className={`px-4 py-2 rounded-full text-[13.5px] font-sans font-medium transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                    activeDropdown 
                      ? "text-white bg-white/[0.08]" 
                      : "text-white/85 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {item.label}
                  <ChevronDown className={`w-[14px] h-[14px] opacity-70 transition-transform duration-300 ${activeDropdown ? "rotate-180 text-orange-400" : ""}`} />
                </button>

                {/* Dropdown Container */}
                <AnimatePresence>
                  {activeDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute left-1/2 -translate-x-1/2 mt-3 w-[450px] p-4 bg-[#0A0201] border border-white/[0.08] backdrop-blur-2xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-50 grid grid-cols-1 gap-1"
                    >
                      {/* Decorative top tiny notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[6px] border-l-6 border-l-transparent border-r-6 border-r-transparent border-b-6 border-b-white/[0.08] w-0 h-0" />

                      <div className="px-3 py-1.5 mb-2 border-b border-white/[0.05]">
                        <p className="text-[11px] uppercase font-semibold tracking-wider text-orange-400">
                          Fluxora Technologies
                        </p>
                      </div>

                      {featuresList.map((feat, fIdx) => {
                        const IconComponent = feat.icon;
                        return (
                          <div
                            key={fIdx}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.04] transition-all duration-200 cursor-pointer group/item"
                          >
                            <div className={`p-2 rounded-lg bg-gradient-to-br ${feat.color} text-white shadow-md shadow-black/20`}>
                              <IconComponent className="w-[16px] h-[16px]" />
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5">
                                <span className="text-[13px] font-semibold text-white group-hover/item:text-orange-400 transition-colors duration-150">
                                  {feat.title}
                                </span>
                              </div>
                              <p className="text-[11.5px] text-white/50 leading-relaxed mt-0.5">
                                {feat.desc}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          }

          return (
            <a
              key={index}
              href={item.href}
              className="px-4 py-2 rounded-full text-[13.5px] font-sans font-medium text-white/85 hover:text-white hover:bg-white/[0.05] transition-all duration-200"
            >
              {item.label}
            </a>
          );
        })}
      </nav>

      {/* Right: Get Started Action Button */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onOpenCTA}
          className="hidden md:inline-flex bg-white hover:bg-neutral-100 text-black text-[13px] tracking-wide font-sans font-semibold px-5.5 py-2.5 rounded-xl transition-all duration-200 shadow-xl shadow-black/20 active:scale-[0.98] cursor-pointer"
        >
          Get Started
        </button>

        {/* Mobile Hamburger menu trigger icon */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-white cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-orange-400" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-[80px] left-6 right-6 p-6 rounded-3xl bg-[#090201]/95 border border-white/[0.08] backdrop-blur-[35px] shadow-2xl z-50 flex flex-col gap-5 md:hidden"
          >
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-widest text-orange-400 font-bold mb-1">Navigation</span>
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href || "#"}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 px-2 text-base font-medium text-white/90 hover:text-orange-400 hover:bg-white/[0.03] rounded-lg transition-all"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="border-t border-white/[0.06] pt-4 mt-1 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCTA();
                }}
                className="w-full bg-white hover:bg-neutral-100 text-black text-sm font-semibold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
