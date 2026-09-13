export function BrandLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className} shrink-0`}>
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_12px_rgba(0,210,255,0.4)]">
        {/* Outer tech badge */}
        <rect x="2" y="2" width="44" height="44" rx="10" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="1.5" className="text-secondary" />
        
        {/* Corner alignment crosshairs */}
        <path d="M7 11V7H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-secondary/70" />
        <path d="M37 7H41V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-secondary/70" />
        <path d="M7 37V41H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-secondary/70" />
        <path d="M41 37V41H37" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-secondary/70" />

        {/* Sovereign Geometric 'M' core structure */}
        <path 
          d="M13 34V16L24 26L35 16V34" 
          stroke="currentColor" 
          strokeWidth="3.2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-on-surface"
        />
        
        {/* Core Neon Energy Overlay */}
        <path 
          d="M13 34V16L24 26L35 16V34" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-secondary"
        />

        {/* Central Quantum Node */}
        <circle cx="24" cy="26" r="2.2" className="fill-secondary animate-ping opacity-75" />
        <circle cx="24" cy="26" r="2" className="fill-secondary" />
        
        {/* Dual Hub Satellites (UK & Pakistan) */}
        <circle cx="13" cy="16" r="2" className="fill-secondary" />
        <circle cx="35" cy="16" r="2" className="fill-primary" />
      </svg>
    </div>
  );
}
