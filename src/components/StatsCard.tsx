import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface StatsCardProps {
  value: string;
  label: string;
  delay?: number;
}

export function StatsCard({ value, label, delay = 0 }: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative flex flex-col justify-between w-[185px] h-[115px] p-5 rounded-2xl bg-[#0F0200]/20 border border-white/[0.06] backdrop-blur-md overflow-hidden cursor-pointer transition-colors duration-300 hover:bg-[#1A0502]/40 hover:border-orange-500/25 shadow-2xl"
    >
      {/* Subtle interior lighting glow on card hover */}
      <div className="absolute -inset-px bg-gradient-to-br from-orange-500/0 via-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-rose-600/5 rounded-2xl transition-all duration-300 -z-10" />

      {/* Top section: Large Number Value & Accent Diagonal Arrow */}
      <div className="flex items-start justify-between">
        <span className="text-3xl md:text-4xl font-sans font-medium text-white tracking-tight leading-none">
          {value}
        </span>
        <motion.div 
          className="text-white/45 group-hover:text-orange-400 transition-colors duration-200"
          whileHover={{ rotate: 12, scale: 1.1 }}
        >
          <ArrowUpRight className="w-[18px] h-[18px] stroke-[1.5]" />
        </motion.div>
      </div>

      {/* Bottom section: Human friendly descriptive label */}
      <div className="mt-auto">
        <span className="text-[12.5px] font-sans font-normal text-white/55 tracking-wide leading-tight group-hover:text-white/75 transition-colors duration-200">
          {label}
        </span>
      </div>
    </motion.div>
  );
}
