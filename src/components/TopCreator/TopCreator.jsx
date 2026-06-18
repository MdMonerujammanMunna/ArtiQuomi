"use client";

import { Card, Link } from "@heroui/react";
// import { CircleDollar } from "@gravity-ui/icons";
import { FaCircleDollarToSlot, FaCrown, FaFire } from "react-icons/fa6";
import Image from "next/image";

const creators = [
    {
        id: 1,
        name: "Munna AI",
        username: "@munnaai",
        avatar: "https://images.unsplash.com/photo-1780656094819-b90e8d27fa15?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        prompts: 120,
        earnings: 540,
        rank: 1,
    },
    {
        id: 2,
        name: "Prompt King",
        username: "@promptking",
        avatar: "https://images.unsplash.com/photo-1777033481153-12ada196dacf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
        prompts: 98,
        earnings: 420,
        rank: 2,
    },
    {
        id: 3,
        name: "AI Wizard",
        username: "@aiwizard",
        avatar: "https://images.unsplash.com/photo-1777502371973-433e6746bb51?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
        prompts: 87,
        earnings: 390,
        rank: 3,
    },
];

export default function TopCreatorsPage() {
    return (
        <section className=" bg-[#0b1220] px-6 md:px-10 py-10">

            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-white flex items-center gap-2">
                        <FaCrown className="text-yellow-400" />
                        Top Creators
                    </h1>
                    <p className="text-zinc-400 text-sm mt-1">
                        Most earning & active prompt creators
                    </p>
                </div>

                <FaFire className="text-orange-400 text-xl animate-pulse" />
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {creators.map((user) => (
                    <Card
                        key={user.id}
                        className="w-full p-5 bg-[#0f172a]/70 border border-white/10 hover:border-emerald-400/40 transition-all"
                    >
                        {/* Top Badge */}
                        <div className="flex justify-between items-center mb-3">
                            <FaCircleDollarToSlot className="text-emerald-400 size-5" />

                            <span className="text-yellow-400 text-xs font-semibold flex items-center gap-1">
                                <FaCrown />
                                #{user.rank}
                            </span>
                        </div>

                        {/* Avatar */}
                        <div className="flex flex-col items-center text-center">
                            <div className="relative w-16 h-16">
                                <Image
                                    src={user.avatar}
                                    alt={user.name}
                                    fill
                                    className="rounded-full object-cover border-2 border-emerald-500"
                                />
                            </div>

                            <h2 className="text-white font-semibold mt-3">
                                {user.name}
                            </h2>
                            <p className="text-zinc-400 text-sm">{user.username}</p>
                        </div>

                        {/* Stats */}
                        <div className="flex justify-between mt-5 text-sm">
                            <div className="text-center">
                                <p className="text-white font-bold">{user.prompts}</p>
                                <p className="text-zinc-400 text-xs">Prompts</p>
                            </div>

                            <div className="text-center">
                                <p className="text-white font-bold">${user.earnings}</p>
                                <p className="text-zinc-400 text-xs">Earnings</p>
                            </div>
                        </div>

                        {/* Button */}
                        <div className="mt-5">
                            <Link
                                href="#"
                                className="w-full flex justify-center py-2 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition"
                            >
                                View Profile
                            </Link>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
}