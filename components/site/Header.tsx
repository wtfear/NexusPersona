"use client";

import { Github, Sparkles } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-gradient-to-r from-black/60 via-black/40 to-black/60 border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-white font-bold tracking-tight text-lg">Nexus<span className="text-purple-400">Persona</span></span>
          </div>
          <div className="hidden sm:block h-6 w-px bg-white/20" />
          <span className="hidden sm:block text-white/60 text-xs font-medium uppercase tracking-wider">AI Persona Engine</span>
        </div>

        <nav className="flex items-center gap-3">
          <a
            href="https://github.com/wtfear/NexusPersona"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-white/80 hover:text-white bg-white/5 hover:bg-white/15 backdrop-blur transition-all duration-300 border border-white/10"
          >
            <Github className="w-4 h-4" />
            <span className="text-sm font-medium">GitHub</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
