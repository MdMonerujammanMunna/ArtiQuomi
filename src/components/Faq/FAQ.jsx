"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

const faqs = [
    {
        question: "What is an AI Prompt Marketplace?",
        answer:
            "An AI Prompt Marketplace is a platform where creators can publish, share, and discover high-quality AI prompts for ChatGPT, Midjourney, Gemini, Claude, and more.",
    },
    {
        question: "Can I publish my own prompts?",
        answer:
            "Yes. After creating an account, you can publish, edit, and manage your prompts from your dashboard.",
    },
    {
        question: "Are all prompts free?",
        answer:
            "Some prompts are free while others are premium depending on the creator's pricing.",
    },
    {
        question: "How do I search prompts?",
        answer:
            "Use the search bar or browse categories, tags, and trending prompts to quickly find what you need.",
    },
    {
        question: "Can I bookmark prompts?",
        answer:
            "Yes. Save your favorite prompts and access them anytime from your profile.",
    },
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="bg-[#030712] py-24 px-5">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
                {/* Left Content */}
                <div>
                    <span className="inline-block px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-sm font-semibold">
                        Frequently Asked Questions
                    </span>

                    <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight text-white">
                        Heres Our Common <br />
                        Question We Had <br />
                        <span className="text-emerald-400">So Far</span>
                    </h2>

                    <p className="mt-6 text-zinc-400 leading-8">
                        Find answers to the most common questions about our AI Prompt
                        Marketplace. Learn how to discover, share, and manage prompts with
                        ease.
                    </p>
                </div>

                {/* FAQ */}
                <div className="space-y-4">
                    {faqs.map((item, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl overflow-hidden border transition-all duration-300 ${activeIndex === index
                                ? "border-emerald-500 bg-[#151723]"
                                : "border-[#26293B] bg-[#111827]"
                                }`}
                        >
                            <button
                                onClick={() => handleToggle(index)}
                                className="w-full flex items-center justify-between p-5"
                            >
                                <h3
                                    className={`text-left font-semibold transition ${activeIndex === index
                                        ? "text-emerald-400"
                                        : "text-white"
                                        }`}
                                >
                                    {item.question}
                                </h3>

                                <FaChevronDown
                                    className={`transition-transform duration-300 ${activeIndex === index
                                        ? "rotate-180 text-emerald-400"
                                        : "text-gray-400"
                                        }`}
                                />
                            </button>

                            <div
                                className={`grid transition-all duration-300 ${activeIndex === index
                                    ? "grid-rows-[1fr]"
                                    : "grid-rows-[0fr]"
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <div className="border-t border-[#26293B] px-5 py-4 text-zinc-400 leading-7">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}