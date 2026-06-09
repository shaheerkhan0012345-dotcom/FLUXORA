import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, Mail, User, Sparkles, Building2, Terminal } from "lucide-react";

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CustomModal({ isOpen, onClose }: CustomModalProps) {
  const [formData, setFormData] = useState({ name: "", email: "", org: "" });
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", org: "" });
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          {/* Backdrop Blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetForm}
            className="absolute inset-0 bg-[#050100]/80 backdrop-blur-md"
          />

          {/* Modal Card frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-md bg-[#0D0302] border border-white/[0.08] rounded-3xl p-6 md:p-8 shadow-[0_30px_70px_rgba(0,0,0,0.85)] overflow-hidden z-10"
          >
            {/* Decorative hot ambient dot in header */}
            <div className="absolute top-0 right-1/4 w-[160px] h-[160px] bg-red-600/10 rounded-full blur-[40px] pointer-events-none" />

            {/* Close Button top-right corner */}
            <button
              onClick={resetForm}
              className="absolute top-5 right-5 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/20 transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 rounded-lg bg-orange-600/20 text-orange-400 border border-orange-500/10">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-orange-400">
                    Deploy Fluxora Workspace
                  </span>
                </div>

                <h3 className="text-2xl font-sans font-bold text-white tracking-tight leading-tight">
                  Technology Crafted For You
                </h3>
                <p className="text-sm font-sans text-white/50 mt-2 mb-6 leading-relaxed">
                  Unlock access to automated client interfaces, adaptive layouts, and premium workflow engines.
                </p>

                <div className="space-y-4">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="text-[12px] font-semibold text-white/70 block px-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[15px] h-[15px] text-white/35" />
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full h-11 pl-10 pr-4 bg-white/[0.02] border border-white/[0.08] rounded-xl text-white text-sm focus:outline-none focus:border-orange-500/30 focus:bg-white/[0.04] transition-all"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label className="text-[12px] font-semibold text-white/70 block px-1">
                      Business Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[15px] h-[15px] text-white/35" />
                      <input
                        type="email"
                        required
                        placeholder="john@fluxora.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full h-11 pl-10 pr-4 bg-white/[0.02] border border-white/[0.08] rounded-xl text-white text-sm focus:outline-none focus:border-orange-500/30 focus:bg-white/[0.04] transition-all"
                      />
                    </div>
                  </div>

                  {/* Company / Org Input */}
                  <div className="space-y-1.5">
                    <label className="text-[12px] font-semibold text-white/70 block px-1">
                      Organization <span className="text-white/35 text-[10px]">(Optional)</span>
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[15px] h-[15px] text-white/35" />
                      <input
                        type="text"
                        placeholder="Initech Corp"
                        value={formData.org}
                        onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                        className="w-full h-11 pl-10 pr-4 bg-white/[0.02] border border-white/[0.08] rounded-xl text-white text-sm focus:outline-none focus:border-orange-500/30 focus:bg-white/[0.04] transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit button with orange/red glow and progress block */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full h-12 mt-6 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-sans font-semibold text-sm rounded-xl transition-all shadow-lg shadow-orange-600/20 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {submitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4.5 w-4.5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Provisioning Node...
                    </span>
                  ) : (
                    <>
                      Initialize Workspace
                      <Check className="w-4 h-4 ml-0.5" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 relative z-10"
              >
                <div className="w-[66px] h-[66px] bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                  <Check className="w-8 h-8 stroke-[2.5]" />
                </div>

                <h3 className="text-xl font-sans font-bold text-white tracking-tight">
                  Node Provisioned Successfully!
                </h3>
                <p className="text-sm font-sans text-white/55 mt-2.5 mb-6 max-w-xs mx-auto leading-relaxed">
                  Welcome to Fluxora, <strong className="text-white">{formData.name}</strong>. Your customized neural workspace environment key has been created.
                </p>

                {/* Dynamic Command Code Simulator Block */}
                <div className="bg-[#050100] border border-white/5 rounded-xl p-4.5 text-left font-mono text-xs text-orange-400 mb-6 flex items-start gap-2 max-w-[340px] mx-auto overflow-hidden">
                  <Terminal className="w-4 h-4 shrink-0 text-white/45 mt-0.5" />
                  <div className="space-y-1.5 select-all">
                    <p className="text-white/45 leading-none"># initializing secure tunnel...</p>
                    <p className="text-emerald-400 leading-none">✔ Connection linked strictly to cloud node</p>
                    <p className="text-white/80 leading-snug break-all truncate">
                      node_init_key = "FLUX-9{Math.floor(100000 + Math.random() * 900000)}"
                    </p>
                    <p className="text-white/45 leading-none"># workspace active and monitoring.</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={resetForm}
                  className="w-full bg-white/10 hover:bg-white/15 text-white font-sans font-semibold text-sm py-3 rounded-xl transition-all cursor-pointer"
                >
                  Close Workspace
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
