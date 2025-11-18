import React, { useRef, useEffect } from "react";
import "./FloatingLines.css";

export default function FloatingLines({
    linesGradient = ["#ff00ff", "#00e0ff", "#00ff85"],
    lineCount = [6, 8, 10],
    lineDistance = [4, 5, 6],
    enabledWaves = [true, true, true],
    animationSpeed = 1,
    interactive = true,
    parallax = true,
    parallaxStrength = 20,
    bendStrength = 0.5,
}) {
    const canvasRef = useRef(null);
    const mouse = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        let w = canvas.width = canvas.offsetWidth;
        let h = canvas.height = canvas.offsetHeight;
        let frame = 0;

        const waves = enabledWaves.map((enabled, i) => {
            if (!enabled) return null;
            return {
                points: [...Array(lineCount[i])].map((_, j) => ({
                    x: (w / lineCount[i]) * j,
                    y: h / 2,
                })),
                distance: lineDistance[i],
                gradient: linesGradient[i % linesGradient.length],
            };
        });

        const handleResize = () => {
            w = canvas.width = canvas.offsetWidth;
            h = canvas.height = canvas.offsetHeight;
        };

        const handleMouse = (e) => {
            if (!interactive) return;
            const rect = canvas.getBoundingClientRect();
            mouse.current.x = e.clientX - rect.left;
            mouse.current.y = e.clientY - rect.top;
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouse);

        const draw = () => {
            ctx.clearRect(0, 0, w, h);

            waves.forEach((wave) => {
                if (!wave) return;

                ctx.beginPath();
                ctx.lineWidth = 2;

                const gradient = ctx.createLinearGradient(0, 0, w, 0);
                gradient.addColorStop(0, wave.gradient);
                gradient.addColorStop(1, "#ffffff");
                ctx.strokeStyle = gradient;

                wave.points.forEach((p, i) => {
                    const dx = mouse.current.x - p.x;
                    const dy = mouse.current.y - p.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    const waveOffset =
                        Math.sin(frame * 0.02 * animationSpeed + i * 0.5) *
                        wave.distance *
                        10;

                    const interactiveOffset =
                        interactive && dist < 150 ? (150 - dist) * 0.08 : 0;

                    const parallaxOffset = parallax
                        ? Math.sin(i * 0.4 + frame * 0.005) * parallaxStrength
                        : 0;

                    const bendOffset =
                        Math.sin((i / wave.points.length) * Math.PI) *
                        bendStrength *
                        20;

                    p.y =
                        h / 2 + waveOffset + interactiveOffset + parallaxOffset + bendOffset;

                    if (i === 0) ctx.moveTo(p.x, p.y);
                    else ctx.lineTo(p.x, p.y);
                });
                ctx.stroke();
            });

            frame++;
            requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouse);
        };
    }, [animationSpeed, interactive, parallax]);

    return <canvas ref={canvasRef} className="floating-lines-canvas"></canvas>;
}
