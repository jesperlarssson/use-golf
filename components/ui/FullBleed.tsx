import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function FullBleed({ children, className = "" }: Props) {
  return (
    <div className={`w-[100svw] max-w-[100svw] overflow-x-hidden relative left-[50%] right-[50%] ml-[-50svw] mr-[-50svw] ${className}`}>
      {children}
    </div>
  );
}


