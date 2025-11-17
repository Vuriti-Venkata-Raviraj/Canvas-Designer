"use client";

import { useEditor } from "../hooks/use-editor";
import { useEffect, useRef } from "react";
import { fabric } from "fabric";

export const Editor = () => {
    const { init } = useEditor();
    const canvasRef = useRef(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = new fabric.Canvas(
            canvasRef.current,
            {
                preserveObjectStacking: true,
                controlsAboveOverlay: true,
            }
        );

        init({
            initialCanvas: canvas,
            initialContainer: containerRef.current!,
        });
    }, [init])

    return (
        <div className="h-full flex flex-col">
            <div className="flex-1 h-full bg-[#f7f7f7]" ref={containerRef}>
                <canvas ref={canvasRef} />
            </div>
        </div>
    )
}