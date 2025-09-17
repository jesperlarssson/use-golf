import { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

export default function Container({ className = "", children }: Props) {
  return (
    <div className={`mx-auto w-full max-w-screen-2xl px-2 sm:px-4 lg:px-6 ${className}`}>
      {children}
    </div>
  );
}


