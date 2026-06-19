"use client";
import TitleForPrompts from "@/components/Prompts/AllPromptsTitles/TitleForPrompts";
import FilterSidebar from "@/components/Prompts/SideFilter/FilterSideBar";
import SortBar from "@/components/Prompts/Sorts/Sorts";
import { usePathname } from "next/navigation";

const PromptsLayout = ({ children }) => {
    const pathname = usePathname();
    const isDetailsPage = pathname.startsWith("/AllPrompts/AllData/") && pathname !== "/AllPrompts/AllData";

    return (
        <div>
            {isDetailsPage ? (
                <div className="flex-1 overflow-hidden px-10 ">
                    <main>{children}</main>
                </div>
            ) : (
                <>
                    <TitleForPrompts />
                    <div className="flex my-10">
                        <FilterSidebar />
                        <div className="flex-1 overflow-hidden px-10 ">
                            <SortBar />
                            <main>{children}</main>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default PromptsLayout;