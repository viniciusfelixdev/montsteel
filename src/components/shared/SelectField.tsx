import { ChevronDown } from "lucide-react";
import { forwardRef } from "react";

type SelectVariant = "default" | "gold" | "blue";

interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  required?: boolean;
  variant?: SelectVariant;
  children: React.ReactNode;
}

const variantStyles: Record<SelectVariant, { select: string; chevron: string; label: string }> = {
  default: {
    select: "focus:border-cobersteel-blue",
    chevron: "text-[#94A3B8]",
    label: "text-[#94A3B8]",
  },
  gold: {
    select: "focus:border-cobersteel-gold focus:ring-1 focus:ring-cobersteel-gold/20 bg-[#111111] border-[#3A3A3A] hover:border-cobersteel-gold/40",
    chevron: "text-cobersteel-gold",
    label: "text-cobersteel-gold/80",
  },
  blue: {
    select: "focus:border-cobersteel-blue focus:ring-1 focus:ring-cobersteel-blue/20 bg-dark-steel border-dark-border hover:border-cobersteel-blue/40",
    chevron: "text-cobersteel-blue",
    label: "text-[#94A3B8]",
  },
};

const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  ({ label, error, required, variant = "default", children, className, ...props }, ref) => {
    const styles = variantStyles[variant];

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label className={`text-xs font-semibold uppercase tracking-wide ${styles.label}`}>
            {label}{" "}
            {required && <span className="text-cobersteel-gold">*</span>}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            className={`
              w-full appearance-none bg-dark-steel border border-dark-border rounded-lg
              px-4 py-3 pr-10 text-sm text-white
              focus:outline-none transition-all cursor-pointer
              ${styles.select}
              ${error ? "border-red-500/60" : ""}
              ${className ?? ""}
            `}
            {...props}
          >
            {children}
          </select>
          <ChevronDown
            className={`pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 ${styles.chevron}`}
            aria-hidden="true"
          />
        </div>
        {error && (
          <p className="text-xs text-red-400">{error}</p>
        )}
      </div>
    );
  }
);

SelectField.displayName = "SelectField";
export default SelectField;
