"use client";

import { useEffect, useState } from "react";

const bootSequence = [
  "[BOOT] Nexus Strategy // AI Native Orchestration",
  "[INIT] Secure channel established :: cipher=aes-512-quant",
  "[SYNC] Loading agent stack ...",
  "[SYNC] ok :: vector-db mounted",
  "[CHECK] GPU grid online :: latency 0.4ms",
  "[CHECK] signal stable :: entropy 0.998",
  "[LOAD] business-intent parser :: ready",
  "[LOAD] media allocator :: ready",
  "[LOAD] simulation lab :: ready",
  "[AUTH] root access granted",
  "[OK] system status :: GREEN",
];

const modules = [
  {
    title: "AI Native",
    detail: "让业务决策以 Agent 为原生单元，重构流程与产品。",
  },
  {
    title: "Business Analysis Agent",
    detail: "海量数据自动洞察，生成高置信度的行动建议。",
  },
  {
    title: "Agentic Strategy",
    detail: "以模拟与对抗为核心的智能策略体，持续自优化。",
  },
  {
    title: "Media Investment",
    detail: "跨媒体投放的智能分发引擎，ROI 实时闭环。",
  },
];

export default function TerminalView() {
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    let idx = 0;
    const id = setInterval(() => {
      setLines((prev) => {
        if (idx >= bootSequence.length) return prev;
        return [...prev, bootSequence[idx]];
      });
      idx += 1;
      if (idx > bootSequence.length) {
        clearInterval(id);
      }
    }, 90);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl border border-green-500/20 bg-black/90 p-6 font-mono text-sm text-[#5dfc8d] shadow-[0_0_60px_rgba(0,255,140,0.25)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,255,140,0.12),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(0,255,200,0.1),transparent_30%)]" />
      <div className="terminal-scan" />
      <div className="relative z-10 space-y-4">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#7bfdc0]">
          <span className="h-2 w-2 rounded-full bg-[#45ff9a]" />
          Nexus Strategy // Terminal Mode
        </div>
        <div className="space-y-1 leading-relaxed">
          {lines.map((line, i) => (
            <div key={line + i} className="whitespace-pre">
              {line}
            </div>
          ))}
          <div className="blink">_</div>
        </div>
        <div className="pt-3 text-xs uppercase tracking-[0.2em] text-[#7bfdc0]">
          Modules
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {modules.map((mod) => (
            <div
              key={mod.title}
              className="rounded-lg border border-[#45ff9a]/25 bg-[#04140a]/60 p-4 shadow-[0_0_24px_rgba(0,255,140,0.08)]"
            >
              <div className="flex items-center justify-between text-[#95ffd2]">
                <span>{mod.title}</span>
                <span className="text-[10px] uppercase tracking-[0.16em] text-[#5dfc8d]/70">
                  online
                </span>
              </div>
              <div className="mt-1 text-[#c7ffe4]">{mod.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

