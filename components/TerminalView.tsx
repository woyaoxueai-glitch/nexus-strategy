'use client';

import { motion } from 'framer-motion';

const lines = [
  "> Initializing Nexus Core...",
  "> Loading AI Neural Networks...",
  "> Accessing Global Market Data...",
  "> STATUS: ONLINE",
  "> WELCOME TO NEXUS STRATEGY (元核智策)",
  "----------------------------------------",
  "> MODULE 1: AI NATIVE (人工智能原生) [ACTIVE]",
  "> MODULE 2: BUSINESS AI AGENT (商业分析智能体集群) [RUNNING]",
  "> MODULE 3: AGENTIC STRATEGY (智能体化组织战略) [DEPLOYED]",
  "> MODULE 4: AIGC MEDIA INVEST (AIGC媒体投资业务) [OPTIMIZING]",
  "----------------------------------------",
  "> SYSTEM READY. AWAITING INPUT..."
];

export default function TerminalView({ onClose }: { onClose: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className="fixed inset-0 z-50 bg-black p-8 font-mono text-green-500 overflow-hidden flex items-center justify-center"
    >
      <div className="w-full max-w-4xl border border-green-500/30 p-6 h-3/4 rounded-lg relative bg-black/90 shadow-[0_0_50px_rgba(0,255,0,0.1)] overflow-y-auto">
        {/* 扫描线背景效果 */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%]" />

        <div className="space-y-2 relative z-20">
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {line}
            </motion.div>
          ))}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-3 h-5 bg-green-500 ml-2 align-middle"
          />
        </div>

        <button 
          onClick={onClose}
          className="absolute bottom-8 right-8 border border-green-500 px-4 py-2 hover:bg-green-500 hover:text-black transition-colors uppercase text-sm tracking-widest cursor-pointer z-30"
        >
          [ Exit Terminal ]
        </button>
      </div>
    </motion.div>
  );
}