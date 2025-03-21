
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "full";
  className?: string;
  as?: React.ElementType;
}

export const Container = ({
  children,
  maxWidth = "7xl",
  className,
  as: Component = "div",
  ...props
}: ContainerProps) => {
  const maxWidthClass = {
    xs: "max-w-xs",
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "3xl": "max-w-3xl",
    "4xl": "max-w-4xl",
    "5xl": "max-w-5xl",
    "6xl": "max-w-6xl",
    "7xl": "max-w-7xl",
    full: "max-w-full",
  }[maxWidth];
  
  return (
    <Component 
      className={cn("px-4 md:px-6 mx-auto w-full", maxWidthClass, className)}
      {...props}
    >
      {children}
    </Component>
  );
};
