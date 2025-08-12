import React from "react";
import { CircleDollarSign } from "lucide-react";
import { cn } from "@/lib/utils";

const BrandIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <CircleDollarSign
      className={cn(
        "text-cyan-400 [filter:drop-shadow(0_0_4px_theme(colors.cyan.400/0.7))]",
        className
      )}
    />
  );
};

export default BrandIcon;