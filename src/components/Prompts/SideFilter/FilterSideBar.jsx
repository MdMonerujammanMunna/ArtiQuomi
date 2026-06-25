"use client";

import React, { useState } from "react";
import { LuSlidersHorizontal } from "react-icons/lu";

export default function FilterSidebar() {
    const [activeEngine, setActiveEngine] = useState("All");
    const [activeCategory, setActiveCategory] = useState("All");
    const [activeLavel, setActiveLavel] = useState("All");

    const categories = [
        "AI Prompts & Agents",
        "Creative Writing",
        "Coding & Debugging",
        "Business & Marketing",
        "Social Media Content",
        "Study & Education",
        "Design & Branding",
        "Resume & Career",
    ];
    const aiEngines = [
        "ChatGPT",
        "DeepSeek",
        "Grok",
        "Claude",
        "Gemini",
        "Perplexity AI",
        "LLaMA",
        "Mistral"
    ];
    const Level = ["Beginner", "Intermediate", "Pro"];

    const handleReset = () => {
        setActiveEngine("All");
        setActiveCategory("All");
        setActiveLavel("All");
    };

    return (
        <aside className="w-full max-w-50 bg-[#0b1220] border border-slate-800 rounded-2xl p-5 flex flex-col gap-6 text-gray-400 select-none">

            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">

                <div className="flex items-center gap-2.5 text-white font-bold text-base">
                    <LuSlidersHorizontal className="text-emerald-400 text-lg" />
                    <span>Filters</span>
                </div>

                <button
                    onClick={handleReset}
                    className="text-xs text-gray-500 hover:text-emerald-400 transition-colors font-medium cursor-pointer"
                >
                    Reset
                </button>

            </div>

            {/* AI ENGINE */}
            <div className="flex flex-col gap-2">

                <h3 className="text-[11px] font-bold tracking-wider text-gray-500 uppercase font-mono mb-1">
                    AI Engine
                </h3>

                <div className="flex flex-col gap-1">

                    {aiEngines.map((engine) => {
                        const isActive = activeEngine === engine;

                        return (
                            <button
                                key={engine}
                                onClick={() => setActiveEngine(engine)}
                                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${isActive
                                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.08)]"
                                    : "text-gray-400 hover:bg-slate-800/60 hover:text-gray-200 border border-transparent"
                                    }`}
                            >
                                {engine}
                            </button>
                        );
                    })}

                </div>
            </div>

            {/* CATEGORY */}
            <div className="flex flex-col gap-2">

                <h3 className="text-[11px] font-bold tracking-wider text-gray-500 uppercase font-mono mb-1">
                    Category
                </h3>

                <div className="flex flex-col gap-1">

                    {categories.map((category) => {
                        const isActive = activeCategory === category;

                        return (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${isActive
                                    ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-[0_0_15px_rgba(34,211,238,0.08)]"
                                    : "text-gray-400 hover:bg-slate-800/60 hover:text-gray-200 border border-transparent"
                                    }`}
                            >
                                {category}
                            </button>
                        );
                    })}

                </div>
            </div>
            <div className="flex flex-col gap-2">

                <h3 className="text-[11px] font-bold tracking-wider text-gray-500 uppercase font-mono mb-1">
                    Difficulty Level
                </h3>

                <div className="flex flex-col gap-1">

                    {Level.map((levelo) => {
                        const isActive = activeLavel === levelo;

                        return (
                            <button
                                key={levelo}
                                onClick={() => setActiveLavel(levelo)}
                                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${isActive
                                    ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-[0_0_15px_rgba(34,211,238,0.08)]"
                                    : "text-gray-400 hover:bg-slate-800/60 hover:text-gray-200 border border-transparent"
                                    }`}
                            >
                                {levelo}
                            </button>
                        );
                    })}

                </div>
            </div>
        </aside>
    );
}