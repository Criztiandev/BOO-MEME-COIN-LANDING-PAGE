import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const kawaiiButtonVariants = cva(
  "btn-kawaii inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "btn-primary",
        secondary: "btn-secondary",
        accent: "btn-accent",
        outline:
          "border-2 border-black bg-background hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-14 px-8 py-4 text-lg",
        sm: "h-10 px-6 py-2 text-base",
        lg: "h-16 px-12 py-6 text-xl",
        icon: "h-14 w-14",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface KawaiiButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof kawaiiButtonVariants> {
  asChild?: boolean;
}

const KawaiiButton = React.forwardRef<HTMLButtonElement, KawaiiButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(kawaiiButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
KawaiiButton.displayName = "KawaiiButton";

export { KawaiiButton, kawaiiButtonVariants };
