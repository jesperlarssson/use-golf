import { ReactNode } from "react";
import Container from "./Container";

interface Props {
  id?: string;
  className?: string;
  children: ReactNode;
}

export default function Section({ id, className = "", children }: Props) {
  return (
    <section id={id} className={`py-10 sm:py-12 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}


