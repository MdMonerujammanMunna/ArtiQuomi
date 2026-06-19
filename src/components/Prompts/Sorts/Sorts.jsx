"use client";

import React, { useState } from "react";

export default function SortBar() {
    const [sortBy, setSortBy] = useState("Latest");
    const sortOptions = ["Latest", "Most Popular", "Most Copied"];

    return (
        <div className="hidden w-full bg-[#0b1220] border border-slate-800 rounded-2xl px-5 py-4 md:flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            {/* Left Text */}
            <span className="text-sm text-gray-400 font-medium">
                Sort By
            </span>

            {/* Buttons */}
            <div className="flex flex-wrap gap-2 p-1 bg-[#070a13] rounded-xl border border-slate-800">

                {sortOptions.map((option) => {
                    const isActive = sortBy === option;

                    return (
                        <button
                            key={option}
                            onClick={() => setSortBy(option)}
                            className={`px-5 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${isActive
                                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.08)]"
                                : "text-gray-400 hover:text-gray-200 hover:bg-slate-800/50"
                                }`}
                        >
                            {option}
                        </button>
                    );
                })}

            </div>
        </div>
    );
}