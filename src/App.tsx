/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Server, Cpu, MonitorPlay } from "lucide-react";
import React from "react";

const TelegramIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const DiscordIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
  </svg>
);

const DataStream = ({ delay, left, duration, color }: { delay: number, left: string, duration: number, color: 'teal' | 'purple' }) => {
  const gradient = color === 'teal'
    ? 'from-transparent via-teal-500 to-transparent'
    : 'from-transparent via-purple-500 to-transparent';

  return (
    <motion.div
      initial={{ top: "-20%", opacity: 0 }}
      animate={{ top: "120%", opacity: [0, 1, 1, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
      className={`absolute w-[1px] h-40 bg-gradient-to-b ${gradient}`}
      style={{ left }}
    />
  );
};

const Background = () => (
  <div className="fixed inset-0 z-0 overflow-hidden bg-[#03050a]">
    {/* Glow 1 - Teal */}
    <motion.div
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.15, 0.25, 0.15],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-teal-600/20 blur-[120px]"
    />
    {/* Glow 2 - Purple */}
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.15, 0.25, 0.15],
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="absolute top-[30%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-purple-600/20 blur-[120px]"
    />
    {/* Abstract lines grid */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

    {/* Data Streams */}
    <DataStream delay={0} left="15%" duration={4} color="teal" />
    <DataStream delay={2.5} left="35%" duration={5} color="purple" />
    <DataStream delay={1} left="65%" duration={3.5} color="teal" />
    <DataStream delay={3} left="85%" duration={6} color="purple" />
    <DataStream delay={1.5} left="50%" duration={4.5} color="teal" />
  </div>
);

const FeatureCard = ({ icon, title }: { icon: React.ReactNode, title: string }) => (
  <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-md hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] group">
    <div className="mb-6 p-4 rounded-full bg-white/[0.03] border border-white/[0.05] group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-lg font-medium text-gray-200 leading-snug">{title}</h3>
  </div>
);

const SocialButton = ({ icon, color, label, href }: { icon: React.ReactNode, color: 'teal' | 'purple', label: string, href: string }) => {
  const glowColor = color === 'teal'
    ? 'shadow-[0_0_20px_rgba(45,212,191,0.2)] hover:shadow-[0_0_30px_rgba(45,212,191,0.5)] border-teal-500/30'
    : 'shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] border-purple-500/30';
  const textColor = color === 'teal' ? 'text-teal-400' : 'text-purple-400';
  const bgHover = color === 'teal' ? 'hover:bg-teal-500/10' : 'hover:bg-purple-500/10';

  return (
    <motion.a
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      href={href}
      className={`flex items-center space-x-3 px-8 py-4 rounded-xl bg-[#0a0f1c]/80 backdrop-blur-md border ${glowColor} ${bgHover} transition-all duration-300 w-full sm:w-auto justify-center`}
      aria-label={label}
    >
      <span className={`${textColor}`}>{icon}</span>
      <span className={`font-display font-bold tracking-wide ${textColor}`}>{label}</span>
    </motion.a>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#03050a] text-white font-sans relative flex flex-col overflow-hidden selection:bg-teal-500/30">
      <Background />

      <header className="absolute top-0 left-0 right-0 p-8 flex justify-center z-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-2xl font-black tracking-widest text-white flex items-center space-x-1"
        >
          <span className="text-teal-400">Aze</span>
          <span>Cloud</span>
        </motion.div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center relative z-10 px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-100 to-gray-500 drop-shadow-sm">
            High-Performance<br />Cloud Gaming<br />for Azerbaijan
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
            Play AAA titles on any device, low latency, Baku-based servers. <span className="text-teal-400 font-medium">Starting soon!</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto w-full"
        >
          <FeatureCard
            icon={<Server className="w-8 h-8 text-teal-400" />}
            title="Baku-based, low-latency infrastructure"
          />
          <FeatureCard
            icon={<Cpu className="w-8 h-8 text-purple-400" />}
            title="NVIDIA GPU-optimized performance"
          />
          <FeatureCard
            icon={<MonitorPlay className="w-8 h-8 text-teal-400" />}
            title="Play directly on browser"
          />
        </motion.div>
      </main>

      <footer className="relative z-10 bg-[#020308]/90 backdrop-blur-xl border-t border-white/5 py-16 mt-auto">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-10 w-full sm:w-auto">
            <SocialButton
              href="#"
              icon={<TelegramIcon className="w-7 h-7" />}
              color="teal"
              label="Telegram"
            />
            <SocialButton
              href="#"
              icon={<DiscordIcon className="w-7 h-7" />}
              color="purple"
              label="Discord"
            />
          </div>
          <p className="text-gray-400 text-sm tracking-[0.2em] uppercase font-medium">
            Join our early adopters community!
          </p>
        </div>
      </footer>
    </div>
  );
}
