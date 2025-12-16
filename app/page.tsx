'use client';

import { useState } from 'react';
import Image from 'next/image'; 
import Scene3D from '../components/Scene3D'; 
import TerminalView from '../components/TerminalView';
import { AnimatePresence, motion } from 'framer-motion';
import { Terminal, ChevronDown, X } from 'lucide-react';

export default function Home() {
  const [isTerminal, setIsTerminal] = useState(false);
  const [showQR, setShowQR] = useState(false);

  // 平滑滚动函数
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="relative w-full min-h-screen bg-[#050505] text-white selection:bg-[#00f0ff] selection:text-black">
      
      {/* === 1. 顶部导航栏 === */}
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 transition-all duration-300 ${isTerminal ? 'opacity-0 pointer-events-none' : 'opacity-100 bg-black/10 backdrop-blur-md border-b border-white/5'}`}>
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
        >
          <div className="w-2 h-2 bg-[#00f0ff] rounded-full group-hover:animate-pulse" />
          <div className="text-white font-bold tracking-wider text-sm md:text-lg font-sans">
            NEXUS STRATEGY <span className="text-[#00f0ff] font-normal ml-1">元核智策</span>
          </div>
        </div>

        <div className="flex gap-6 md:gap-10 text-xs md:text-sm font-mono text-gray-400">
          <button onClick={() => scrollToSection('about')} className="hover:text-[#00f0ff] transition-colors uppercase tracking-widest hover:underline decoration-[#00f0ff] underline-offset-4">
            关于我们
          </button>
          <button onClick={() => scrollToSection('services')} className="hover:text-[#00f0ff] transition-colors uppercase tracking-widest hover:underline decoration-[#00f0ff] underline-offset-4">
            业务模块
          </button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-[#00f0ff] transition-colors uppercase tracking-widest hover:underline decoration-[#00f0ff] underline-offset-4">
            联系我们
          </button>
        </div>
      </nav>


      {/* === 2. 3D 背景 === */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Scene3D />
      </div>


      {/* === 3. 页面主要内容 === */}
      <div className={`relative z-10 flex flex-col transition-opacity duration-500 ${isTerminal ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        
        {/* --- Hero Section --- */}
        <section className="h-screen flex flex-col items-center justify-center relative snap-start">
          <div className="text-center z-20 mix-blend-difference px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-[#00f0ff] tracking-[0.5em] text-xs md:text-sm font-mono mb-6">EST. 2025 SHANGHAI</h2>
              <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 font-sans">
                元核智策
              </h1>
              <p className="text-lg md:text-2xl text-gray-300 font-light tracking-wide mb-2">
                智策原生<span className="mx-3"></span>重塑商业
              </p>
              <p className="text-xs md:text-sm text-[#00f0ff]/80 font-mono tracking-wider">
                Redefining Business through AI Agents
              </p>
            </motion.div>
          </div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 cursor-pointer"
            onClick={() => scrollToSection('about')}
          >
            <ChevronDown className="w-6 h-6 text-gray-500 hover:text-[#00f0ff] transition-colors" />
          </motion.div>
        </section>


        {/* --- 关于我们 --- */}
        <section 
          id="about" 
          className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-b from-transparent via-[#050505]/90 to-[#050505] px-6 py-20 snap-start"
        >
          <div className="max-w-4xl text-center">
             <h3 className="text-[#00f0ff] font-mono text-xl mb-8 tracking-widest">// ABOUT US</h3>
             <h2 className="text-3xl md:text-5xl font-bold mb-8">连接商业智慧，驱动核心增长</h2>
             
             <div className="text-gray-400 leading-relaxed text-lg space-y-6 max-w-3xl mx-auto">
               <p>
                 元核智策（Nexus Strategy）是全球首批智能体化组织战略咨询公司
               </p>
               <p>
                 我们将经典管理艺术与智能体小组技术有机融合，赋能企业智能体化转型与智能体化组织战略
               </p>
               <p>
                 元核智策拥有国内首个战略咨询和管理咨询智能体集群
               </p>
               <p className="text-white/90 font-medium">
                 确保企业在数字化浪潮中时刻拥有不可复制的核心竞争力
               </p>
             </div>
          </div>
        </section>


        {/* --- 业务模块 --- */}
        <section id="services" className="min-h-screen flex flex-col items-center justify-center relative border-t border-white/5 bg-black/70 backdrop-blur-md px-6 py-20 snap-start">
          <h3 className="text-[#00f0ff] font-mono text-xl mb-16 tracking-widest">// CORE MODULES</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
            {[
              { 
                title: "AI NATIVE", 
                desc: "人工智能原生 | 底层基座构建", 
                code: "01",
                icon: "/icons/ai-native.png"
              },
              { 
                title: "BUSINESS AI AGENT", 
                desc: "商业分析智能体集群 | 敏捷洞察与决策", 
                code: "02",
                icon: "/icons/business-agent.png"
              },
              { 
                title: "AGENTIC STRATEGY", 
                desc: "智能体化组织战略 | 组织结构再设计", 
                code: "03",
                icon: "/icons/agent-strategy.png"
              },
              { 
                title: "AIGC MEDIA INVEST", 
                desc: "AIGC媒体投资业务 | 算法驱动增长", 
                code: "04",
                icon: "/icons/media-invest.png"
              }
            ].map((item, idx) => (
              <div key={idx} className="border border-white/10 bg-white/5 p-8 hover:bg-[#00f0ff]/10 hover:border-[#00f0ff]/50 transition-all cursor-crosshair group relative overflow-hidden">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-xs font-mono text-gray-500 group-hover:text-[#00f0ff] transition-colors">
                    {item.code}
                  </div>
                  <div className="relative w-12 h-12 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                    <Image 
                      src={item.icon} 
                      alt={item.title} 
                      fill 
                      className="object-contain" 
                    />
                  </div>
                </div>

                <h4 className="text-2xl font-bold mb-2 text-white group-hover:text-[#00f0ff] transition-colors">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#00f0ff]/10 rounded-full blur-3xl group-hover:bg-[#00f0ff]/20 transition-all pointer-events-none" />
              </div>
            ))}
          </div>
        </section>


        {/* --- 第四屏：联系我们 & 页脚 (Contact & Footer) --- */}
        <section id="contact" className="min-h-screen flex flex-col justify-between relative border-t border-white/5 bg-black/90 snap-start">
           
           {/* 上半部分：联系召唤行动 */}
           <div className="flex-grow flex flex-col items-center justify-center px-6 py-20">
              <h3 className="text-[#00f0ff] font-mono text-xl mb-8 tracking-widest">// CONNECT</h3>
              <div className="border border-white/20 p-12 text-center bg-white/5 rounded-lg max-w-2xl w-full hover:border-[#00f0ff]/50 transition-colors duration-500">
                  <h2 className="text-3xl font-bold mb-6">准备好重塑您的商业了吗？</h2>
                  <p className="text-gray-400 mb-8">@Nexus Strategy · Shanghai</p>
                  
                  <button 
                    onClick={() => setShowQR(true)}
                    className="bg-[#00f0ff] text-black font-bold py-4 px-10 hover:bg-white transition-colors tracking-wider hover:scale-105 active:scale-95 duration-200"
                  >
                    联系我们_CONTACT
                  </button>
              </div>
           </div>
           
           {/* 下半部分：页脚 (Footer) */}
           <footer className="w-full border-t border-white/10 bg-black pt-16 pb-8 px-6 md:px-12">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                  
                  {/* 第一列：品牌信息 */}
                  <div className="col-span-1 md:col-span-2 space-y-6">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#00f0ff] rounded-full" />
                      <h3 className="text-xl font-bold tracking-wider text-white">
                        NEXUS STRATEGY <span className="text-gray-500 font-normal">元核智策</span>
                      </h3>
                    </div>
                    <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
                      Redefining Business through AI Agents. <br/>
                      Connecting Intelligence, Driving Core Growth.
                    </p>
                    
                    {/* 运行状态指标 */}
                    <div className="flex items-center gap-2 text-xs font-mono text-green-500 mt-4">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      All Systems Operational
                    </div>
                  </div>

                  {/* 第二列：核心业务 */}
                  <div className="space-y-4">
                    <h4 className="text-white font-bold mb-4">核心业务</h4>
                    <ul className="space-y-2 text-sm text-gray-500">
                      <li className="hover:text-[#00f0ff] cursor-pointer transition-colors">人工智能原生基座</li>
                      <li className="hover:text-[#00f0ff] cursor-pointer transition-colors">商业分析智能体集群</li>
                      <li className="hover:text-[#00f0ff] cursor-pointer transition-colors">智能体化组织战略</li>
                      <li className="hover:text-[#00f0ff] cursor-pointer transition-colors">AIGC 媒体投资业务</li>
                    </ul>
                  </div>

                  {/* 第三列：关于公司 */}
                  <div className="space-y-4">
                    <h4 className="text-white font-bold mb-4">关于公司</h4>
                    <ul className="space-y-2 text-sm text-gray-500">
                      <li onClick={() => scrollToSection('about')} className="hover:text-[#00f0ff] cursor-pointer transition-colors">关于我们</li>
                      <li className="hover:text-[#00f0ff] cursor-pointer transition-colors">行业洞察</li>
                      <li className="hover:text-[#00f0ff] cursor-pointer transition-colors">加入我们</li>
                      <li onClick={() => setShowQR(true)} className="hover:text-[#00f0ff] cursor-pointer transition-colors">联系我们</li>
                    </ul>
                  </div>

                </div>

                {/* 底部备案行 (修改部分) */}
                <div className="border-t border-white/10 pt-8 flex justify-center items-center text-xs text-gray-500 font-mono">
                  <p className="text-center opacity-60 hover:opacity-100 transition-opacity cursor-default">
                    ©2025 元核智策（上海）企业管理有限公司 <span className="mx-2">|</span> 沪ICP备2025149898号-2
                  </p>
                </div>

              </div>
           </footer>
        </section>

      </div>

      {/* === 6. 二维码弹窗 === */}
      <AnimatePresence>
        {showQR && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowQR(false)} 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()} 
              className="relative bg-[#050505] border border-[#00f0ff]/30 p-2 md:p-4 rounded-xl shadow-[0_0_50px_rgba(0,240,255,0.2)] cursor-default"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 bg-white rounded-lg overflow-hidden">
                 <Image 
                   src="/contact-qr.png" 
                   alt="Contact QR Code" 
                   fill 
                   className="object-contain p-2" 
                 />
              </div>
              
              <p className="text-center text-[#00f0ff] mt-4 font-mono text-sm tracking-widest animate-pulse">
                SCAN TO CONNECT
              </p>

              <button 
                onClick={() => setShowQR(false)}
                className="absolute -top-12 right-0 md:-right-12 text-gray-400 hover:text-[#00f0ff] transition-colors p-2"
              >
                <X className="w-8 h-8" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* === 5. 终端视图 === */}
      <AnimatePresence>
        {isTerminal && <TerminalView onClose={() => setIsTerminal(false)} />}
      </AnimatePresence>

      {/* === 6. 开发者模式开关 === */}
      <button 
        onClick={() => setIsTerminal(!isTerminal)}
        className="fixed bottom-8 right-8 z-50 p-3 bg-white/5 hover:bg-[#00f0ff]/20 rounded-full border border-white/10 hover:border-[#00f0ff] transition-all group backdrop-blur-sm cursor-pointer"
        title="Developer Mode"
      >
        <Terminal className="w-5 h-5 text-gray-400 group-hover:text-[#00f0ff]" />
      </button>
      
    </main>
  );
}