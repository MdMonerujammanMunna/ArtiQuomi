"use client";
import React, { useState } from "react";
import { Chip, Button, Avatar } from "@heroui/react";
import {
    FiArrowLeft, FiCopy, FiCheck, FiStar, FiLayers, FiCpu,
    FiSliders, FiBookOpen, FiMessageSquare, FiEye, FiUser
} from "react-icons/fi";
import { usePathname } from "next/navigation";
import { getPromptById } from "@/lib/api/Prompts";

export default function UniquePromptDetails({ prompt }) {
    const pathName = usePathname()
    const id = pathName.split("/")[3]
    const singledata = getPromptById(id)

    const [copied, setCopied] = useState(false);
    const data = prompt || {
        title: "Claude 3.5 Sonnet Fullstack Architect",
        description: "Creates optimal database schemas and corresponding backend route templates with strict enterprise security validations, automated error handling, and robust JWT setups.",
        content: "Act as a Principal Software Architect. Define a backend database schema for [domain_concept] using Mongoose validation models. Then, supply corresponding modular Express controller routes executing full CRUD routines alongside secure JWT protection token checks.",
        aiTool: "Claude 3.5",
        category: "Coding",
        tags: ["Mongoose", "Express", "Node.js", "Security"],
        difficultyLevel: "Pro",
        visibility: "Public",
        usageInstructions: "For best results, configure your parameters on Claude with low temperature (0.3 - 0.5) to avoid hallucinations. Replace bracketed tags in the template with your target topic details.",
        copyCount: 211,
        views: 1420,
        rating: 4.9,
        reviewsCount: 12,
        creator: {
            name: "Munshaib Shah",
            email: "creator@aiverse.com",
            avatar: ""
        }
    };

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(data.content);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    };

    return (
        <div className="min-h-screen my-20 bg-[#070a13] text-gray-300 font-sans selection:bg-[#10b981]/30 pb-12">
            <div className="border-b border-gray-900 bg-[#0a0f1d]/60 backdrop-blur-md sticky top-0 z-50 px-3 md:px-10 py-4">
                <div className="flex items-center justify-between gap-5">
                    <Button
                        className="flex items-center gap-2 text-xs bg-cyan-500/10 text-cyan-400 font-medium uppercase tracking-wider hover:bg-cyan-500/20 "
                    >
                        <FiArrowLeft className="group-hover:-translate-x-1 transition-transform text-sm" />
                        Back to Library
                    </Button>

                    <div className="flex items-center gap-4 text-xs ">
                        <span className="flex items-center gap-1 flex-nowrap"><FiEye /> {data.views} Views</span>
                        <span className="flex items-center gap-1 flex-nowrap"><FiCopy /> {data.copyCount} Copies</span>
                    </div>
                </div>
            </div>

            <div className="mt-10 px-10 py-8">
                <div className="bg-linear-to-r from-[#0d1527] to-[#0a0f1d] border border-gray-800/40 p-6 md:p-8 rounded-3xl mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-lg shadow-black/40">
                    <div>
                        <h1 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3">
                            {data.title}
                        </h1>
                        <p className="text-gray-400 text-sm  leading-relaxed">
                            {data.description}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

                    <div className="col-span-2 space-y-8">
                        <div className="bg-[#0a0f1d] border border-gray-800/80 rounded-2xl overflow-hidden shadow-2xl relative">
                            <div className="absolute top-0 left-0 w-1 h-full bg-linear-to-b from-[#10b981] to-purple-600"></div>

                            <div className="bg-[#0d1426] px-6 py-4 border-b border-gray-900/60 flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/40"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/40"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/40"></div>
                                    <span className="text-xs font-mono text-gray-500 ml-2 select-none">prompt_template.md</span>
                                </div>

                                <Button
                                    size="sm"
                                    color={copied ? "success" : "default"}
                                    variant="flat"
                                    onClick={handleCopy}
                                    startContent={copied ? <FiCheck size={14} /> : <FiCopy size={14} />}
                                    className={`font-bold text-xs rounded-xl px-4 h-8 transition-all ${copied ? "bg-[#10b981]/20 text-[#10b981]" : "bg-[#10b981]/10 text-[#10b981] hover:bg-[#10b981]/20"
                                        }`}
                                >
                                    {copied ? "Copied!" : "Copy Prompt"}
                                </Button>
                            </div>

                            <div className="p-6 md:p-8 font-mono text-sm md:text-base leading-relaxed text-purple-300/90 bg-linear-to-b from-[#0a0f1d] to-[#060912] select-all whitespace-pre-wrap">
                                {data.content}
                            </div>
                        </div>

                        <div className="bg-[#0d1527]/30 border border-gray-800/40 rounded-2xl p-6 shadow-sm my-10 ">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-2">
                                <FiBookOpen className="text-[#10b981]" /> Usage Instructions
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed bg-[#070a13]/50 p-4 rounded-xl border border-gray-900/60">
                                {data.usageInstructions}
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6 lg:sticky lg:top-24">
                        <div className="bg-[#0d1527]/40 border  rounded-2xl p-6 space-y-5 shadow-md mb-5">
                            <h3 className="text-xs font-extrabold uppercase tracking-widest text-gray-400 pb-3">Prompt Matrix</h3>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-500 flex items-center gap-2"><FiCpu /> AI Engine</span>
                                <span className="text-white font-semibold bg-gray-900 px-3 py-1 rounded-lg border border-gray-800/80 text-xs">{data.aiTool}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-500 flex items-center gap-2"><FiLayers /> Category</span>
                                <span className="text-[#38bdf8] font-semibold bg-[#0ea5e9]/5 px-3 py-1 rounded-lg border border-[#0ea5e9]/10 text-xs">{data.category}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-500 flex items-center gap-2"><FiSliders /> Difficulty</span>
                                <Chip
                                    size="sm"
                                    variant="bordered"
                                    className={`font-bold text-[10px] tracking-wider uppercase px-2.5 h-6 rounded-md ${data.difficultyLevel?.toLowerCase() === 'beginner' ? 'border-sky-500/20 bg-sky-500/10 text-sky-400' :
                                        data.difficultyLevel?.toLowerCase() === 'pro' ? 'border-purple-500/20 bg-purple-500/10 text-purple-400' :
                                            'border-amber-500/20 bg-amber-500/10 text-amber-400'
                                        }`}
                                >
                                    {data.difficultyLevel}
                                </Chip>
                            </div>
                        </div>
                        <div className="bg-[#0d1527]/40 border  p-5 rounded-2xl shadow-md mb-10">
                            <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-5">Curated By</h4>
                            <div className="flex items-center gap-3">
                                <Avatar src={data.creator.avatar} name={data.creator.name} fallback={<FiUser className="text-gray-400" />} className="w-10 h-10 border border-gray-700 bg-gray-800 text-white" />
                                <div className="overflow-hidden">
                                    <h4 className="text-sm font-bold text-white truncate">{data.creator.name}</h4>
                                    <p className="text-xs text-gray-500 truncate">{data.creator.email}</p>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}