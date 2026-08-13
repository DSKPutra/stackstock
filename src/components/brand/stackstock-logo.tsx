import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const ASSETS = {
  full: "/graphics/stackstock-logo-v5.png",
  icon: "/graphics/stackstock-icon-v5.png",
  wordmark: "/graphics/stackstock-wordmark-v5.png",
} as const;

type LogoVariant = keyof typeof ASSETS;

const sizeMap: Record<LogoVariant, { width: number; height: number; className?: string }> = {
  full: { width: 847, height: 150, className: "h-auto w-[min(100%,280px)]" },
  icon: { width: 512, height: 512, className: "h-8 w-8 sm:h-9 sm:w-9" },
  wordmark: { width: 849, height: 120, className: "h-5 w-auto" },
};

interface StackstockLogoProps {
  variant?: LogoVariant;
  className?: string;
  href?: string;
  priority?: boolean;
}

export function StackstockLogo({
  variant = "full",
  className,
  href,
  priority = false,
}: StackstockLogoProps) {
  const s = sizeMap[variant];
  const img = (
    <Image
      src={ASSETS[variant]}
      alt="Stackstock"
      width={s.width}
      height={s.height}
      priority={priority}
      className={cn("object-contain", s.className, className)}
    />
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex shrink-0 items-center">
        {img}
      </Link>
    );
  }

  return img;
}

export { ASSETS as STACKSTOCK_LOGO_ASSETS };
