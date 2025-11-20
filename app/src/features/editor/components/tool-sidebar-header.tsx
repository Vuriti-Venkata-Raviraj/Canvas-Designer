interface ToolSidebarHeaderProps {
    title: string;
    description?: string;
}

export const ToolSidebarHeader = ({ title, description }: ToolSidebarHeaderProps) => {
    return (
        <header className="px-4 py-3 border-b space-y-1 h-[68px]">
            <h2 className="text-sm font-medium">{title}</h2>
            {description && <p className="text-xs text-gray-500">{description}</p>}
        </header>
    );
}