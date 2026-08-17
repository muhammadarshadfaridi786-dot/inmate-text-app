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
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="0" y="0" width="28" height="28" rx="7" fill="#1A1A2E" />

      <path
        d="M7 8.5C7 7.11929 8.11929 6 9.5 6H18.5C19.8807 6 21 7.11929 21 8.5V14.5C21 15.8807 19.8807 17 18.5 17H12.8L9.4 20.3C9.06596 20.6314 8.5 20.3907 8.5 19.9V17H9.5C8.11929 17 7 15.8807 7 14.5V8.5Z"
        fill="#B8962E"
      />

      <path d="M8.5 10.5H19.5" stroke="#1A1A2E" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M8.5 13.2H17.2" stroke="#1A1A2E" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M8.5 15.9H15.2" stroke="#1A1A2E" strokeWidth="1.2" strokeLinecap="round" />

      <path d="M8.5 18.2L6.4 20.5L8.6 20.3L8.5 18.2Z" fill="#B8962E" />

      <circle cx="8.1" cy="22.6" r="1.5" fill="#D4A843" />
      <circle cx="13.5" cy="22.6" r="1.5" fill="#D4A843" opacity="0.65" />
      <circle cx="18.9" cy="22.6" r="1.5" fill="#D4A843" opacity="0.35" />
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
