import React from "react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const BrandIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <img
      src={logo}
      alt="CSR Cash Service Logo"
      className={cn("object-contain", className)}
    />
  );
};

export default BrandIcon;