import {
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuContent,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Hint } from "@/components/ui/hint";
import { Button } from "@/components/ui/button";
import { Undo2 } from "lucide-react";
import { Redo2 } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { MousePointerClick } from "lucide-react";
import { Download } from "lucide-react";
import { CiFileOn } from "react-icons/ci";
import { FaFilePdf } from "react-icons/fa6";
import { BsCloudCheck } from "react-icons/bs";
import { ActiveTool } from "../types";
import { cn } from "@/lib/utils";

interface NavbarProps {
    activeTool: ActiveTool;
    onChangeActiveTool: (tool: ActiveTool) => void;
}

export const Navbar = ({
    activeTool,
    onChangeActiveTool
} : NavbarProps) => {
    return (
        <nav className="w-full flex items-center p-4 h-[68px] gap-x-8 border-b lg:pl-[34px]">
            Logo
            <div className="w-full flex items-center gap-x-1 h-full">
                <DropdownMenu modal={false}>
                    <DropdownMenuTrigger asChild>
                        <Button size="sm" variant="ghost">
                            File
                            <ChevronDown className="size-4 ml-2" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="min-w-60">
                        <DropdownMenuItem className="flex items-center gap-x-2">
                            <CiFileOn className="size-8" />
                            <div>
                                <p>Open</p>
                                <p className="text-xs text-gray-500">Open a JSON file</p>
                            </div>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <Hint label="Select" side="bottom" sideOffset={10} >
                    <Button
                        variant={"ghost"}
                        size={"icon"}
                        onClick={() => {onChangeActiveTool("select")}}
                        className={cn(activeTool === "select" && "bg-gray-200")}
                    >
                        <MousePointerClick className="size-4" />
                    </Button>
                </Hint>
                <Separator orientation="vertical" className="mx-2" />
                <Hint label="Undo" side="bottom" sideOffset={10} >
                    <Button
                        variant={"ghost"}
                        size={"icon"}
                        onClick={() => { }}
                        className=""
                    >
                        <Undo2 className="size-4" />
                    </Button>
                </Hint>
                <Hint label="Redo" side="bottom" sideOffset={10} >
                    <Button
                        variant={"ghost"}
                        size={"icon"}
                        onClick={() => { }}
                        className=""
                    >
                        <Redo2 className="size-4" />
                    </Button>
                </Hint>
                <Separator orientation="vertical" className="mx-2" />
                <div className="flex items-center gap-x-2">
                    <BsCloudCheck className="size-[20px] text-muted-foreground" />
                    <div className="text-xs text-gray-500">
                        Saved
                    </div>
                </div>
                <div className="ml-auto flex flex-center gap-x-4">
                    <DropdownMenu modal={false}>
                        <DropdownMenuTrigger asChild>
                            <Button size="sm" variant={"ghost"}>
                                Export
                                <Download className="size-4 ml-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="min-w-60">
                            <DropdownMenuItem>
                                <CiFileOn className="size-8" />
                                <div>
                                    <p>JSON</p>
                                    <p className="text-xs text-gray-500">Save for later editing</p>
                                </div>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <FaFilePdf className="size-8" />
                                <div>
                                    <p>PDF</p>
                                    <p className="text-xs text-gray-500">Best for Printing</p>
                                </div>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    );
}