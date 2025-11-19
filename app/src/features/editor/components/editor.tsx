"use client";

import { useEditor } from "../hooks/use-editor";
import { useEffect, useRef } from "react";
import { fabric } from "fabric";
import { Toolbar } from "../components/toolbar";
import { Footer } from "../components/footer";
import { Sidebar } from "../components/sidebar";
import { Navbar } from "../components/navbar";

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

        return () => {
            canvas.dispose();
        };
    }, [init])

    return (
        <div className="h-full flex flex-col">
            <Navbar />
            <div className="absolute h-[calc(100%-68px)] w-full top-[68px] flex">
                <Sidebar />
                <main className="bg-[#f7f7f7] flex-1 overflow-auto relative flex flex-col">
                    <Toolbar />
                    <div className="flex-1 h-full bg-[#f7f7f7]" ref={containerRef}>
                        <canvas ref={canvasRef} />
                    </div>
                    <Footer />
                </main>
            </div>
        </div>
    );
}