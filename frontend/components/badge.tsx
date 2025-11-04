import type React from "react";

interface IBadgeProps {
  color: "primary" | "secondary" | "background"
  children: React.ReactNode;
}

const Badge = ({ color, children }: IBadgeProps) => {
  if (!color || !children) {
    return null;
  }
  const baseClasses = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";
  const colorClasses = `bg-${color} text-white dark:text-black ring-1 ring-inset ring-${color}-700/10`;
  console.log(colorClasses)
  return (
    <span className={`${baseClasses} ${colorClasses}`}>
      {children}
    </span>
  );
};

export default Badge;