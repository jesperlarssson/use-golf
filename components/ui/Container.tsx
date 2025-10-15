import { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

export default function Container({ className = "", children }: Props) {
  return (
    <div className={`mx-auto w-full  px-4 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}


