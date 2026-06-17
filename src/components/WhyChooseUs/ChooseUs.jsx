"use client";

import { Card } from "@heroui/react";
import {
    FiShield,
    FiTrendingUp,
    FiCheckCircle,
    FiPieChart,
    FiUsers,
    FiLayers,
} from "react-icons/fi";

const WhyChooseUs = () => {
    const features = [
        {
            icon: <FiShield className="w-6 h-6 text-[#06B6D4]" />,
            title: "Advanced Prompt Moderation",
            description:
                "Every prompt undergoes rigorous automated and manual review to ensure 100% functionality and top-tier output quality.",
        },
        {
            icon: <FiTrendingUp className="w-6 h-6 text-[#10B981]" />,
            title: "Smart Analytics Dashboard",
            description:
                "Track your prompt's popularity, views, bookmarks, and revenue growth with detailed real-time performance metrics.",
        },
        {
            icon: <FiCheckCircle className="w-6 h-6 text-[#34D399]" />,
            title: "Multi-AI Tool Support",
            description:
                "A unified marketplace supporting optimized engineering prompts for ChatGPT, Midjourney, Claude, Gemini, and more.",
        },
        {
            icon: <FiLayers className="w-6 h-6 text-[#06B6D4]" />,
            title: "Role-Based Access Control",
            description:
                "Secure environments for buyers, creators, and moderators with custom role dashboards and strict privacy control.",
        },
        {
            icon: <FiUsers className="w-6 h-6 text-[#10B981]" />,
            title: "Thriving Creator Community",
            description:
                "Interact directly with elite prompt engineers, share honest reviews, bookmark favorites, and grow your digital trading network.",
        },
        {
            icon: <FiPieChart className="w-6 h-6 text-[#34D399]" />,
            title: "Seamless Search & Filtering",
            description:
                "Find exactly what you need in seconds using our ultra-fast algorithmic search, categorized by popularity and engagement.",
        },
    ];

    return (
        <section className="w-full bg-[#030712] py-24 border-t border-[#1E293B]/50 font-sans relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#10B981]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <header className="text-center max-w-3xl mx-auto mb-16">
                    <div className="flex items-center justify-center mb-5 gap-4">
                        <div className="w-3 h-1 bg-[#10B981] rounded-full animate-pulse" />
                        <h2 className="text-xs font-semibold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#10B981]">
                            Why Choose Arti Quomi
                        </h2>
                        <div className="w-3 h-1 bg-[#10B981] rounded-full animate-pulse" />
                    </div>

                    <p className="text-3xl sm:text-4xl font-bold text-[#F8FAFC] tracking-tight">
                        The Ultimate AI Prompt Marketplace
                    </p>

                    <p className="mt-4 text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                        Unlock AI full potential with thousands of verified prompts for
                        stunning art, copywriting, and business automation
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            className="bg-[#151723]/40 backdrop-blur-sm rounded-2xl border-2 border-[#26293B] hover:border-[#34D399]/40 transition-all duration-300 shadow-xl overflow-visible"
                        >
                            <div className="p-8 text-left group w-full h-full">
                                <Card.Content>
                                    <div className="w-12 h-12 rounded-xl bg-[#151723] border border-[#26293B] flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                                        {feature.icon}
                                    </div>

                                    <h3 className="text-lg font-bold text-[#F8FAFC] group-hover:text-[#34D399] transition-colors duration-200 mb-3">
                                        {feature.title}
                                    </h3>

                                    <p className="text-sm text-[#94A3B8] leading-relaxed">
                                        {feature.description}
                                    </p>
                                </Card.Content>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;