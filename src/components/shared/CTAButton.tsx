import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface CTAButtonProps {
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
}

export default function CTAButton({
  href,
  variant = "primary",
  children,
  className = "",
  onClick,
  type = "button",
  disabled,
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-sm uppercase tracking-wide rounded transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  const variants = {
    primary:
      "bg-cobersteel-gold text-dark-steel hover:bg-amber-400 focus-visible:ring-cobersteel-gold",
    secondary:
      "bg-cobersteel-blue text-white hover:bg-blue-500 focus-visible:ring-cobersteel-blue",
    outline:
      "border-2 border-white text-white hover:bg-white hover:text-dark-steel focus-visible:ring-white",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
