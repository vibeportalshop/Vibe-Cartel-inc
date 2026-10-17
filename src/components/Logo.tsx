interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export default function Logo({ className = '', size = 'md', showSubtitle = true }: LogoProps) {
  const iconDimensions = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  }[size];

  const textSize = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-xl',
  }[size];

  return (
    <div className={`flex items-center gap-2.5 font-display select-none ${className}`}>
      {/* Precision Geometric SVG Monogram */}
      <div className={`relative ${iconDimensions} shrink-0 flex items-center justify-center`}>
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_12px_rgba(56,189,248,0.25)]"
        >
          {/* Outer hexagonal prism frame */}
          <path
            d="M20 2L35.5885 11V29L20 38L4.41154 29V11L20 2Z"
            stroke="rgba(255, 255, 255, 0.15)"
            strokeWidth="1.2"
          />
          {/* Inner futuristic dynamic V & C chevron strokes */}
          <path
            d="M12 14L20 26L28 14"
            stroke="url(#vc-gradient-1)"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M27 19L20 29.5L13 19"
            stroke="url(#vc-gradient-2)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.8"
          />
          {/* Center precision node */}
          <circle cx="20" cy="17" r="2" fill="#38BDF8" />

          <defs>
            <linearGradient id="vc-gradient-1" x1="12" y1="14" x2="28" y2="26" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38BDF8" />
              <stop offset="1" stopColor="#818CF8" />
            </linearGradient>
            <linearGradient id="vc-gradient-2" x1="13" y1="19" x2="27" y2="29.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="#06B6D4" />
              <stop offset="1" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Clean Typographic Lockup */}
      <div className="flex flex-col justify-center leading-none">
        <div className={`font-semibold tracking-tight text-white whitespace-nowrap flex items-center gap-1.5 ${textSize}`}>
          <span>Vibe Cartel</span>
          <span className="text-cyan-400 font-light">Web</span>
        </div>
        {showSubtitle && (
          <span className="text-[9px] tracking-[0.16em] uppercase text-slate-400 font-mono mt-0.5">
            Engineering Studio
          </span>
        )}
      </div>
    </div>
  );
}
