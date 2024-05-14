import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return <div className={`${className} w-[80%] mx-auto`}>{children}</div>;
}
