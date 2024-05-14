import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={`${className} w-full md:max-w-6xl mx-auto`}>{children}</div>
  );
}
