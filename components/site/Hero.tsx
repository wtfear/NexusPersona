"use client";

import { Button } from "@/components/ui/button";
import ShinyText from "@/components/ShinyText";
import { MessageSquare, Sparkles } from "lucide-react";

export default function Hero({ loaded }: { loaded: boolean }) {
  return (
    <div className="space-y-6">
      <div className="inline-flex items-center gap-2 border border-purple-500/30 bg-purple-500/10 backdrop-blur rounded-full px-4 py-1.5 text-purple-300 text-sm">
        <Sparkles className="w-4 h-4 text-purple-400" />
        Nexus Autonomous Persona Suite
      </div>

      <div className="text-cyan-400 text-sm font-medium tracking-wider uppercase">
        <ShinyText text="Expert Mentorship. Tone-Cloned AI. Zero Hallucination." speed={3} className="text-cyan-400" />
      </div>

      <div className="space-y-3">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
          <div
            className={`bg-gradient-to-r from-yellow-400 via-purple-400 to-blue-400 bg-clip-text text-transparent transition-all duration-1000 ${
              loaded ? "blur-0" : "blur-sm opacity-0"
            }`}
          >
            NexusPersona AI
          </div>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-white/90 leading-relaxed">
          Clone Knowledge, Tone, and Mental Models into Autonomous Agents.
        </h2>
      </div>

      <p className="text-white/70 text-lg leading-relaxed max-w-xl">
        Converse with interactive AI personas calibrated on the pedagogical style, real-world experience, and decision-making logic of industry leaders and domain experts.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 pt-2">
        <a href="#mentors">
          <Button className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-xl hover:shadow-[0_10px_30px_-12px_rgba(168,85,247,.6)] transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2">
            <MessageSquare className="w-5 h-5" />
            Explore Personas Below
          </Button>
        </a>
      </div>
    </div>
  );
}
