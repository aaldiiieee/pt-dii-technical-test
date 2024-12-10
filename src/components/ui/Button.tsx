import React, { useState } from "react";
import clsx from "clsx";

type ButtonSize = "small" | "medium" | "large";
type TooltipPosition = "top" | "bottom" | "left" | "right";
type IconPosition = "left" | "right";

interface ButtonProps {
  label: string;
  background?: "primary" | "secondary" | "accent";
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: IconPosition;
  tooltip?: string;
  tooltipPosition?: TooltipPosition;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  background = "primary",
  size = "medium",
  icon,
  iconPosition = "left",
  tooltip,
  tooltipPosition = "top",
  onClick,
  disabled = false,
  className,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonClasses = clsx(
    "relative flex items-center justify-center rounded transition-all shadow-buttonShadow border-black border-2",
    {
      "hover:shadow-none hover:translate-x-1 hover:translate-y-1": !tooltip,
      "shadow-none border-none hover:translate-x-0 hover:translate-y-0 hover:bg-blue-600": tooltip,
      "bg-blue-500 text-white": background === "primary",
      "bg-green-500 text-white": background === "secondary",
      "bg-gray-500 text-white": background === "accent",
      "px-2 py-1 text-sm": size === "small",
      "px-4 py-2 text-base": size === "medium",
      "px-6 py-3 text-lg": size === "large",
      "opacity-50 cursor-not-allowed": disabled,
    },
    className
  );

  const tooltipClasses = clsx(
    "absolute z-10 px-2 py-1 text-sm bg-black text-white rounded shadow-md whitespace-nowrap transition-all duration-200 ease-in-out opacity-0 scale-95",
    {
      "opacity-100 scale-100 visible": isHovered,
      "invisible": !isHovered,
      "top-[-74%] left-1/2 transform -translate-x-1/2": tooltipPosition === "top",
      "bottom-[-74%] left-1/2 transform -translate-x-1/2": tooltipPosition === "bottom",
      "left-[-170%] top-1/2 transform -translate-y-1/2": tooltipPosition === "left",
      "right-[-170%] top-1/2 transform -translate-y-1/2": tooltipPosition === "right",
    }
  );

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {tooltip && <div className={tooltipClasses}>{tooltip}</div>}
      <button
        className={buttonClasses}
        onClick={onClick}
        disabled={disabled}
      >
        {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
        {label}
        {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
      </button>
    </div>
  );
};


export default Button;
