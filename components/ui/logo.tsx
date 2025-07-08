"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export function Logo({ className = "", width = 200, height = 200 }: LogoProps) {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div 
        className={`bg-muted animate-pulse rounded ${className}`}
        style={{ width, height }}
      />
    );
  }

  // Use resolvedTheme to handle system theme preference
  const logoSrc = resolvedTheme === "dark" ? "/dark.png" : "/light.png";

  return (
    <Image
      src={logoSrc}
      alt="Mockly"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
} 