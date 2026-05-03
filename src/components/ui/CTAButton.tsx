import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { ReactNode } from 'react';

export const CTAButton = ({ children, primary = true, className = "" }: { children: ReactNode, primary?: boolean, className?: string }) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={`px-8 py-4 rounded-lg font-medium transition-all shadow-sm flex items-center gap-2 ${
      primary 
        ? "bg-accent text-white hover:bg-primary shadow-lg shadow-link/20" 
        : "bg-white text-primary border border-slate-200 hover:border-accent"
    } ${className}`}
  >
    {children}
    <ChevronRight size={18} />
  </motion.button>
);
