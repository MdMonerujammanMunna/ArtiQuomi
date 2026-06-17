"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
    FiSearch,
    FiTrendingUp,
    FiCommand,
    FiArrowRight,
} from "react-icons/fi";

const Hero = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeTool, setActiveTool] = useState("All Tools");

    const trendingTags = [
        { name: "Midjourney v6", color: "border-[#06B6D4] text-[#06B6D4]" },
        { name: "ChatGPT Copywriting", color: "border-[#10B981] text-[#10B981]" },
        { name: "Gemini Automation", color: "border-purple-500 text-purple-400" },
        { name: "Claude UI/UX", color: "border-amber-500 text-amber-400" },
        { name: "Stable Diffusion XL", color: "border-pink-500 text-pink-400" },
    ];

    const aiTools = [
        "All Tools",
        "ChatGPT",
        "Midjourney",
        "Gemini",
        "Claude",
        "Stable Diffusion",
    ];

    return (
        <section className="relative w-full bg-[#030712] pt-24 pb-20 overflow-hidden font-sans">

            {/* Background grid */}
            <div className="absolute inset-0 bg-[linear-linear(to_right,#1f293710_1px,transparent_1px),linear-linear(to_bottom,#1f293710_1px,transparent_1px)] bg-size-[4rem_4rem] [mask:radial-linear(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            {/* Glow */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#06B6D4]/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#10B981]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#151723] border border-[#26293B] mb-8">
                    
                    <span className="w-2 h-2 rounded-full bg-linear-to-r from-[#06B6D4] to-[#10B981] animate-ping"></span>
                    <span className="text-xs font-semibold text-[#34D399] uppercase tracking-wide">
                        New: Ai Creators & Prompts Hub
                    </span>
                </div>

                {/* Title */}
                <h1 className="text-4xl sm:text-6xl font-bold text-[#F8FAFC] leading-tight mb-6">
                    The Ultimate Hub <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-[#06B6D4] to-[#10B981]">
                        AI Creators & Prompts
                    </span>
                </h1>

                {/* Description */}
                <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#94A3B8] mb-10">
                    Unlock AI full potential with thousands of verified prompts for
                    stunning art, copywriting, and business automation
                </p>

                {/* Search */}
                <div className="max-w-3xl mx-auto bg-[#151723]/80 backdrop-blur-md p-2 rounded-2xl border border-[#26293B] mb-6">
                    <div className="flex flex-col md:flex-row gap-2">

                        <div className="relative flex-1 flex items-center">
                            <FiSearch className="absolute left-4 text-[#94A3B8] w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search prompts for automation, marketing, art..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-transparent pl-12 pr-4 py-3 text-sm text-[#F8FAFC] placeholder-[#64748B] focus:outline-none"
                            />
                        </div>

                        <button className="px-6 py-3 bg-linear-to-r from-[#06B6D4] to-[#10B981] text-[#030712] font-semibold text-sm rounded-xl flex items-center justify-center gap-2 cursor-pointer">
                            <FiCommand className="w-4 h-4" />
                            Explore Prompts
                        </button>

                    </div>
                </div>

                {/* Tool Buttons */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {aiTools.map((tool, i) => {
                        const isActive = activeTool === tool;

                        return (
                            <button
                                key={i}
                                onClick={() => setActiveTool(tool)}
                                className={`px-3.5 py-1 rounded-lg text-xs font-medium border transition-all duration-200 cursor-pointer ${isActive
                                    ? "bg-linear-to-r from-[#06B6D4]/20 to-[#10B981]/20 border-[#10B981] text-[#34D399] scale-105"
                                    : "border-[#26293B] text-[#94A3B8] hover:border-[#94A3B8] hover:text-[#F8FAFC]"
                                    }`}
                            >
                                {tool}
                            </button>
                        );
                    })}
                </div>

                {/* Trending Tags */}
                <div className="flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-[#1E293B]/50">
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-[#64748B] uppercase">
                        <FiTrendingUp className="text-[#06B6D4]" />
                        Trending:
                    </span>

                    {trendingTags.map((tag, index) => (
                        <a
                            key={index}
                            href="#"
                            className={`px-3 py-1 rounded-full text-xs font-medium border bg-[#151723]/40 hover:bg-[#151723] transition ${tag.color}`}
                        >
                            #{tag.name}
                        </a>
                    ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-20">
                    <Link href={"/AllP"}>
                        <button className="group inline-flex items-center gap-2 px-8 py-3.5 bg-linear-to-r from-[#06B6D4] to-[#10B981] text-[#030712] font-semibold text-sm rounded-full  hover:shadow-xl hover:shadow-emerald-500/10">
                            Explore All Prompts
                            <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                        </button>
                    </Link>
                    <Link href={"/"}>
                        <button className="px-8 py-3.5 bg-[#151723]/60 text-[#F8FAFC] border-2 hover:border-[#34D399]/50 hover:text-[#34D399] font-semibold text-sm border-[#26293B] transition-all duration-300 rounded-full">
                            Become a Creator
                        </button>
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default Hero;