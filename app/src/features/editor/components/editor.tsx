"use client";

import { useEditor } from "../hooks/use-editor";
import { useCallback, useEffect, useRef, useState } from "react";
import { fabric } from "fabric";
import { Toolbar } from "../components/toolbar";
import { Footer } from "../components/footer";
import { Sidebar } from "../components/sidebar";
import { Navbar } from "../components/navbar";
import { ActiveTool } from "../types";
import { ShapeSidebar } from "./shape-sidebar";

export const Editor = () => {
    const [activeTool, setActiveTool] = useState<ActiveTool>("select");

    const onChangeActiveTool = useCallback((tool: ActiveTool) => {
        if (tool === activeTool) {
            return setActiveTool("select");
        }

        if (tool === "draw") {};
        if (activeTool === "draw") {};

        setActiveTool(tool);
    }, [activeTool]);

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
            <Navbar 
                activeTool={activeTool}
                onChangeActiveTool={onChangeActiveTool}
            />
            <div className="absolute h-[calc(100%-68px)] w-full top-[68px] flex">
                <Sidebar
                    activeTool={activeTool}
                    onChangeActiveTool={onChangeActiveTool}
                />
                <ShapeSidebar
                    activeTool={activeTool}
                    onChangeActiveTool={onChangeActiveTool}
                />
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