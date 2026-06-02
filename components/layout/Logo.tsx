import { cn } from "@/lib/utils"

interface LogoProps {
  variant?: "full" | "icon"
  tagline?: string
  className?: string
}

export function LogoIcon({ className }: { className?: string }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Chat bubble body */}
      <rect x="1" y="0" width="22" height="17" rx="4" fill="currentColor" />
      {/* Speech tail — bottom left */}
      <polygon points="2,17 0,24 8,17" fill="currentColor" />
      {/* Three dots — universal messaging indicator */}
      <circle cx="7.5" cy="8.5" r="1.5" fill="white" />
      <circle cx="12" cy="8.5" r="1.5" fill="white" />
      <circle cx="16.5" cy="8.5" r="1.5" fill="white" />
    </svg>
  )
}

export default function Logo({ variant = "full", tagline, className }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <LogoIcon className="text-primary shrink-0" />
      {variant === "full" && (
        <div className="flex flex-col">
          <span className="font-bold text-[17px] leading-tight tracking-tight text-foreground">
            Inmate Text App
          </span>
          {tagline && (
            <span className="text-xs text-muted-foreground leading-tight">{tagline}</span>
          )}
        </div>
      )}
    </div>
  )
}
