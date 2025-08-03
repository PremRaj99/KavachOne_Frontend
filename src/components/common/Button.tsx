import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

type ButtonProps = {
  children: ReactNode;
  varient?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  children,
  varient = "primary",
  className = "",
}: ButtonProps) {
  switch (varient) {
    case "primary": {
      return (
        <button
          className={cn(
            className,
            "px-8 py-2 rounded-full bg-primary hover:bg-primary-shade text-white cursor-pointer font-semibold"
          )}
        >
          {children}
        </button>
      );
    }
    case "secondary": {
      return (
        <button
          className={cn(
            cn(
              className,
              "px-8 py-2 rounded-full border border-primary hover:bg-gray-50 text-primary cursor-pointer font-semibold"
            )
          )}
        >
          {children}
        </button>
      );
    }
  }
}
