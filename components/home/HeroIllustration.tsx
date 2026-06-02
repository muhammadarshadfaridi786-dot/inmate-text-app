export default function HeroIllustration() {
  return (
    <div
      className="relative w-full max-w-lg mx-auto select-none"
      aria-hidden="true"
      role="presentation"
    >
      <svg
        viewBox="0 0 520 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* Outer panel background */}
        <rect width="520" height="420" rx="16" className="fill-primary/5" />

        {/* ── SEARCH BAR ── */}
        <rect x="20" y="20" width="480" height="52" rx="10" className="fill-card" stroke="currentColor" strokeOpacity="0.12" strokeWidth="1" />
        {/* Magnifying glass body */}
        <circle cx="46" cy="46" r="9" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.5" />
        <line x1="52" y1="52" x2="60" y2="60" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.5" strokeLinecap="round" />
        {/* Placeholder text bar */}
        <rect x="72" y="40" width="210" height="12" rx="4" className="fill-slate-200 dark:fill-slate-700" />
        {/* Search button */}
        <rect x="408" y="32" width="80" height="28" rx="7" className="fill-blue-600" />
        <rect x="418" y="42" width="60" height="8" rx="2" fill="white" fillOpacity="0.85" />

        {/* ── FACILITY RESULT CARD (main, left-center) ── */}
        <rect x="20" y="90" width="296" height="182" rx="12" className="fill-card" stroke="currentColor" strokeOpacity="0.12" strokeWidth="1" />
        {/* Facility name bar */}
        <rect x="40" y="112" width="204" height="14" rx="4" className="fill-slate-700 dark:fill-slate-200" />
        {/* Location bar */}
        <rect x="40" y="134" width="136" height="10" rx="3" className="fill-slate-400 dark:fill-slate-500" />
        {/* Type badge */}
        <rect x="40" y="154" width="96" height="22" rx="6" className="fill-blue-500/10" />
        <rect x="50" y="162" width="76" height="6" rx="2" className="fill-blue-500/60" />
        {/* Divider */}
        <line x1="40" y1="190" x2="296" y2="190" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
        {/* "Providers:" label bar */}
        <rect x="40" y="202" width="54" height="8" rx="2" className="fill-slate-400 dark:fill-slate-500" />
        {/* JPay chip */}
        <rect x="40" y="218" width="60" height="22" rx="11" className="fill-blue-500/10" stroke="currentColor" strokeOpacity="0.12" strokeWidth="1" />
        <rect x="50" y="226" width="40" height="6" rx="2" className="fill-blue-500/70" />
        {/* CorrLinks chip */}
        <rect x="108" y="218" width="78" height="22" rx="11" className="fill-emerald-600/10" stroke="currentColor" strokeOpacity="0.12" strokeWidth="1" />
        <rect x="118" y="226" width="58" height="6" rx="2" className="fill-emerald-600/70" />
        {/* View Details button */}
        <rect x="40" y="252" width="104" height="22" rx="6" className="fill-blue-600/10" />
        <rect x="50" y="260" width="84" height="6" rx="2" className="fill-blue-600/60" />

        {/* ── STATS CARD (top-right floating) ── */}
        <rect x="332" y="90" width="168" height="88" rx="12" className="fill-card" stroke="currentColor" strokeOpacity="0.12" strokeWidth="1" />
        {/* Icon circle */}
        <rect x="350" y="108" width="30" height="30" rx="8" className="fill-blue-500/10" />
        {/* Building icon — 3 vertical bars */}
        <rect x="356" y="120" width="4" height="10" rx="1" className="fill-blue-600/60" />
        <rect x="362" y="117" width="6" height="13" rx="1" className="fill-blue-600/80" />
        <rect x="370" y="122" width="4" height="8" rx="1" className="fill-blue-600/50" />
        {/* Stat value bar */}
        <rect x="390" y="111" width="92" height="14" rx="4" className="fill-slate-700 dark:fill-slate-200" />
        {/* Stat label bar */}
        <rect x="390" y="131" width="72" height="9" rx="3" className="fill-slate-400 dark:fill-slate-500" />
        {/* Divider */}
        <line x1="350" y1="162" x2="480" y2="162" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
        {/* Sub-label bar */}
        <rect x="350" y="170" width="120" height="7" rx="2" className="fill-slate-300 dark:fill-slate-600" />

        {/* ── FREE TO SEARCH BADGE ── */}
        <rect x="332" y="196" width="168" height="28" rx="14" className="fill-emerald-500/10" stroke="currentColor" strokeOpacity="0.12" strokeWidth="1" />
        <circle cx="350" cy="210" r="5" className="fill-emerald-500" />
        <rect x="362" y="206" width="120" height="8" rx="2" className="fill-emerald-500/70" />

        {/* ── NO ACCOUNT BADGE ── */}
        <rect x="332" y="234" width="168" height="28" rx="14" className="fill-blue-500/8" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" />
        <circle cx="350" cy="248" r="5" className="fill-blue-500/80" />
        <rect x="362" y="244" width="100" height="8" rx="2" className="fill-blue-500/60" />

        {/* ── FEATURE MINI-CARDS (bottom row, 3 cards) ── */}

        {/* Messaging */}
        <rect x="20" y="292" width="155" height="108" rx="12" className="fill-card" stroke="currentColor" strokeOpacity="0.12" strokeWidth="1" />
        <rect x="36" y="308" width="32" height="32" rx="8" className="fill-blue-500/10" />
        {/* Message bubble */}
        <rect x="42" y="318" width="20" height="13" rx="4" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.5" />
        <path d="M45 331 L41 337 L51 331" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.5" strokeLinejoin="round" />
        <rect x="36" y="352" width="80" height="9" rx="3" className="fill-slate-600 dark:fill-slate-300" />
        <rect x="36" y="366" width="110" height="7" rx="2" className="fill-slate-300 dark:fill-slate-600" />
        <rect x="36" y="377" width="90" height="7" rx="2" className="fill-slate-200 dark:fill-slate-700" />

        {/* Video Calls */}
        <rect x="185" y="292" width="155" height="108" rx="12" className="fill-card" stroke="currentColor" strokeOpacity="0.12" strokeWidth="1" />
        <rect x="201" y="308" width="32" height="32" rx="8" className="fill-blue-500/10" />
        {/* Video camera */}
        <rect x="205" y="318" width="15" height="12" rx="2" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.5" />
        <path d="M222 318 L232 322 L232 330 L222 334" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.5" strokeLinejoin="round" />
        <rect x="201" y="352" width="80" height="9" rx="3" className="fill-slate-600 dark:fill-slate-300" />
        <rect x="201" y="366" width="110" height="7" rx="2" className="fill-slate-300 dark:fill-slate-600" />
        <rect x="201" y="377" width="90" height="7" rx="2" className="fill-slate-200 dark:fill-slate-700" />

        {/* Photo Sharing */}
        <rect x="350" y="292" width="150" height="108" rx="12" className="fill-card" stroke="currentColor" strokeOpacity="0.12" strokeWidth="1" />
        <rect x="366" y="308" width="32" height="32" rx="8" className="fill-blue-500/10" />
        {/* Camera frame */}
        <rect x="370" y="317" width="24" height="17" rx="3" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.5" />
        {/* Lens circle */}
        <circle cx="382" cy="325" r="5" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.5" />
        <rect x="366" y="352" width="80" height="9" rx="3" className="fill-slate-600 dark:fill-slate-300" />
        <rect x="366" y="366" width="110" height="7" rx="2" className="fill-slate-300 dark:fill-slate-600" />
        <rect x="366" y="377" width="90" height="7" rx="2" className="fill-slate-200 dark:fill-slate-700" />
      </svg>
    </div>
  )
}
