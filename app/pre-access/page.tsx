"use client";

import { useEffect, useRef, useState } from "react";
import PreAccessCTA from "@/app/components/PreAccessModal";
import Container from "@/components/ui/Container";

export const dynamic = "force-static";

export default function PreAccessPage() {
    const backRef = useRef<HTMLDivElement | null>(null);
    const frontRef = useRef<HTMLDivElement | null>(null);
    const [variant, setVariant] = useState<"parallax" | "wall" | null>(null);

    useEffect(() => {
        // Slumpa på klienten för att undvika SSR-mismatch
        setVariant(Math.random() < 0.5 ? "parallax" : "wall");
    }, []);

    useEffect(() => {
        let raf = 0;
        let targetX = 0;
        let targetY = 0;
        let currentX = 0;
        let currentY = 0;
        const maxBack = 10; // px
        const maxFront = 20; // px
        const baseScaleBack = 1.04;
        const baseScaleFront = 1.08;
        const overscanBack = 24; // px extra runt om
        const overscanFront = 40; // px extra runt om

        const update = () => {
            currentX += (targetX - currentX) * 0.1;
            currentY += (targetY - currentY) * 0.1;
            if (backRef.current) {
                backRef.current.style.transform = `translate3d(${(-currentX * maxBack).toFixed(2)}px, ${(-currentY * maxBack).toFixed(2)}px, 0) scale(${baseScaleBack})`;
            }
            if (frontRef.current) {
                frontRef.current.style.transform = `translate3d(${(currentX * maxFront).toFixed(2)}px, ${(currentY * maxFront).toFixed(2)}px, 0) scale(${baseScaleFront})`;
            }
            raf = requestAnimationFrame(update);
        };

        // Starta direkt vid mount så att skalan är aktiv även innan musrörelse
        raf = requestAnimationFrame(update);

        const onMove = (e: MouseEvent) => {
            const dx = e.clientX / window.innerWidth - 0.6; // -0.5..0.5
            const dy = e.clientY / window.innerHeight - 0.2;
            targetX = dx * 2; // -1..1
            targetY = dy * 2;
        };

        window.addEventListener("mousemove", onMove, { passive: true });
        return () => {
            window.removeEventListener("mousemove", onMove);
            cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <div
            className="min-h-screen h-screen overflow-hidden relative w-full bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center px-6 text-brand-primary"
        >
            {/* Parallax-lager */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                {variant !== null && (
                    <>
                        <div
                            ref={backRef}
                            className="absolute bg-cover bg-center will-change-transform"
                            style={{
                                backgroundImage: variant === "wall" ? 'url(/images/wall.png)' : 'url(/images/baller2-back.png)',
                                top: -24,
                                right: -24,
                                bottom: -24,
                                left: -24,
                                transformOrigin: 'center',
                                transform: 'scale(1.04)',
                            }}
                        />
                        {variant === "parallax" && (
                            <div
                                ref={frontRef}
                                className="absolute bg-cover bg-center will-change-transform"
                                style={{
                                    backgroundImage: 'url(/images/baller2-front.png)',
                                    top: -40,
                                    right: -40,
                                    bottom: -40,
                                    left: -40,
                                    transformOrigin: 'center',
                                    transform: 'scale(1.08)',
                                }}
                            />
                        )}
                    </>
                )}
            </div>
            <div className="absolute top-0 left-0 right-0 h-full pointer-events-none bg-black/20 backdrop-blur-xs"></div>

            <div className="relative z-10 max-w-xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight font-logo">USE GOLF</h1>
       
                <p className="mt-8 text-base md:text-lg tracking-normal leading-relaxed">
                    USE Golf är Göteborgs nya hem för inomhusgolf. Vi öppnar hösten 2025 i Hovås -
                    välkommen till en ny typ av golfupplevelse.
                </p>
                <PreAccessCTA />
            </div>
            <div className="absolute top-0 left-0 right-0 h-8 "></div>
            <div className="absolute bottom-0 left-0 right-0 h-8 text-sm">
                <Container className="flex items-center justify-between">
                    <p>
                        © USE Golf 2025
                    </p>
                    <div className="flex items-center gap-2">
                        <a href="mailto:hello@usegolf.se">
                            hello@usegolf.se
                        </a>
                    </div>
                </Container>
            </div>
        </div>
    );
}


