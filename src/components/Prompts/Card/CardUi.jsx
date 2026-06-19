"use client";

import { Card, Button, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import {
    FiCpu,
    FiCopy,
    FiUser,
    FiArrowRight,
    FiLock,
    FiUnlock,
} from "react-icons/fi";

export default function PromptCard({ prompt }) {
    return (
        <Card className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden  hover:border-emerald-500 transition-all duration-300">

            {/* Image */}
            <div className="relative h-52 overflow-hidden">
                <Image fill
                    src={prompt.thumbnailImage}
                    alt={prompt.title}
                    className="rounded-2xl"
                />

                {/* Category Badge */}
                <Chip
                    color="success"
                    size="sm"
                    className="absolute top-3 right-3 bg-emerald-500 text-white"
                >
                    {prompt.category}
                </Chip>
            </div>

            <Card.Content className="space-y-4">
                <div className="flex flex-wrap w-full gap-2 text-sm">
                    <Chip
                        variant="bordered"
                        className={`font-medium text-[11px] tracking-wide uppercase px-2.5 h-6 rounded-full ${prompt.difficultyLevel?.toLowerCase() === 'beginner'
                            ? 'border-sky-500/20 bg-sky-500/10 text-sky-400'
                            : prompt.difficultyLevel?.toLowerCase() === 'pro'
                                ? 'border-purple-500/20 bg-purple-500/10 text-purple-400'
                                : 'border-amber-500/20 bg-amber-500/10 text-amber-400'
                            }`}
                    >
                        {prompt.difficultyLevel}
                    </Chip>

                    {/* Premium Badge with Lock Icon */}
                    <Chip
                        variant="bordered"
                        className={`font-medium text-[11px] tracking-wide uppercase px-2.5 h-6 rounded-full gap-1 ${prompt.visibility?.toLowerCase() === 'private'
                            ? 'border-[#e11d48]/20 bg-[#e11d48]/10 text-[#f43f5e]' : 'border-[#10b981]/20 bg-[#10b981]/10 text-[#10b981]'
                            }`}
                    >
                        {prompt.visibility} {prompt.visibility?.toLowerCase() === 'private'
                            ? <FiLock className="text-[10px] text-[#e11d48]" />
                            : prompt.visibility?.toLowerCase() === 'public'
                                ? <FiUser className="text-[10px] text-[#10b981]" />
                                : <FiUnlock className="text-[10px] text-[#10b981]" />}
                    </Chip>

                </div>
                <div className="space-y-1">
                    <h2 className="text-lg font-bold text-white line-clamp-2">
                        {prompt.title}
                    </h2>
                    <p>{prompt.description}</p>
                </div>
                {/* AI Tool */}
                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-zinc-300">
                        <FiCpu className="text-cyan-400" />
                        <span>{prompt.aiTool}</span>
                    </div>

                    <div className="flex items-center gap-2 text-zinc-300">
                        <FiCopy className="text-yellow-400" />
                        <span>{prompt.copyCount}</span>
                    </div>
                </div>

            </Card.Content>

            <Card.Footer className="flex justify-between items-center">

                <div className="flex items-center gap-2 text-sm text-zinc-400">
                    <FiUser />
                    {prompt.UserName}
                </div>
                <Link href={`/AllPrompts/AllData/${prompt._id}`}>
                    <Button
                        className={"bg-linear-to-l from-cyan-500 to-emerald-500"}
                        endContent={<FiArrowRight />}
                    >
                        View Details
                    </Button>
                </Link>

            </Card.Footer>

        </Card>
    );
}