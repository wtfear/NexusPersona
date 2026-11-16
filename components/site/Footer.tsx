"use client";

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-sm py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/60 text-sm">
          Part of the <span className="text-white font-medium">Nexus Enterprise AI Suite</span>
        </p>
        <p className="text-white/40 text-xs">
          Built with Next.js, Tailwind CSS & Google Gemini
        </p>
      </div>
    </footer>
  );
};

export default Footer;
