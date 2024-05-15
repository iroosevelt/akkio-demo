import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={`w-full max-w-6xl px-4 sm:px-6 lg:px-16 mx-auto ${className}`}
    >
      {children}
    </div>
  );
}
