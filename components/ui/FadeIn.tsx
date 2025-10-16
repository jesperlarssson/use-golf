"use client";
import { motion, Variants } from "framer-motion";
import { PropsWithChildren } from "react";
import type { JSX as ReactJSX } from "react";

type FadeInProps = PropsWithChildren<{
  delay?: number;
  className?: string;
  as?: keyof ReactJSX.IntrinsicElements;
}>;

const variants: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 },
};

export default function FadeIn({ children, delay = 0, className, as = "div" }: FadeInProps) {
  const motionComponents = motion as unknown as Record<string, any>;
  const Component: any = motionComponents[as] ?? motion.div;
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      variants={variants}
    >
      {children}
    </Component>
  );
}


