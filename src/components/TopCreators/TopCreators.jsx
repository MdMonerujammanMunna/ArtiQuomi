"use client";
import { Chip, Input, Button } from '@heroui/react';
import { FiSearch, FiTrendingUp, FiCommand, FiArrowRight } from 'react-icons/fi';
import { GiFastArrow } from "react-icons/gi";

const TopCreators = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const trendingTags = [
        { name: 'Midjourney v6', color: 'cyan' },
        { name: 'ChatGPT Copywriting', color: 'success' },
        { name: 'Gemini Automation', color: 'secondary' },
        { name: 'Claude UI/UX', color: 'warning' },
        { name: 'Stable Diffusion XL', color: 'danger' }
    ];

    const aiTools = ['All Tools', 'ChatGPT', 'Midjourney', 'Gemini', 'Claude', 'Stable Diffusion'];

    return (
        <section className="relative w-full bg-[#030712] pt-24 pb-20 overflow-hidden font-sans">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#06B6D4]/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#10B981]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <Chip
                    variant="dot"
                    color="success"
                    startContent={<GiFastArrow className="w-3 h-3 -rotate-90 text-[#34D399]" />}
                    className="mb-8 border-[#26293B] bg-[#151723] text-[#34D399] h-8 text-xs font-semibold uppercase tracking-wide px-4 animate-fade-in"
                >
                    New: Midjourney v6 & Claude 3.5 Prompts Live
                </Chip>

                <h1 className="text-4xl sm:text-6xl font-bold font-display tracking-tight text-[#F8FAFC] leading-none mb-6">
                    The Ultimate Hub<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#10B981]">
                        for AI Creators & Prompts
                    </span>
                </h1>

                <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#94A3B8] font-normal leading-relaxed mb-10">
                    Unlock AI's full potential with thousands of verified prompts for stunning art, copywriting, and business automation.
                </p>

                <div className="max-w-3xl mx-auto mb-6">
                    <Input
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        isClearable
                        radius="xl"
                        classNames={{
                            base: "max-w-full shadow-2xl shadow-cyan-950/20",
                            mainWrapper: "h-14",
                            input: "text-sm text-[#F8FAFC] placeholder:text-[#64748B] ml-2",
                            inputWrapper: "h-14 bg-[#151723]/80 backdrop-blur-md border border-[#26293B] data-[hover=true]:bg-[#151723] data-[hover=true]:border-[#06B6D4]/50 group-data-[focus=true]:bg-[#151723] group-data-[focus=true]:border-[#10B981] px-4",
                        }}
                        placeholder="Search prompts for automation, marketing, art..."
                        startContent={
                            <FiSearch className="text-[#94A3B8] w-5 h-5 flex-shrink-0" />
                        }
                        endContent={
                            <Button
                                radius="lg"
                                size="sm"
                                className="bg-gradient-to-r from-[#06B6D4] to-[#10B981] text-[#030712] font-bold shadow-lg shadow-emerald-500/20 active:scale-95 transition-all"
                                startContent={<FiCommand className="w-3.5 h-3.5" />}
                            >
                                Search
                            </Button>
                        }
                    />
                </div>

                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {aiTools.map((tool, i) => (
                        <Chip
                            key={i}
                            variant={i === 0 ? "solid" : "bordered"}
                            className={`cursor-pointer border-[#26293B] transition-all h-7 ${i === 0
                                ? "bg-gradient-to-r from-[#06B6D4]/20 to-[#10B981]/20 text-[#34D399] border-[#10B981]/30 font-semibold"
                                : "text-[#94A3B8] bg-transparent hover:text-[#F8FAFC] hover:border-[#64748B]"
                                }`}
                        >
                            {tool}
                        </Chip>
                    ))}
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-6 border-t border-[#1E293B]/50 mb-12">
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-[#64748B] uppercase tracking-wider">
                        <FiTrendingUp className="text-[#06B6D4]" /> Trending:
                    </span>
                    {trendingTags.map((tag, index) => (
                        <Chip
                            key={index}
                            color={tag.color}
                            variant="flat"
                            className="cursor-pointer font-medium bg-[#151723]/60 hover:bg-[#151723] transition-colors border border-transparent hover:border-[#26293B]"
                            onClick={() => window.location.hash = `tag-${tag.name.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                            #{tag.name}
                        </Chip>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 border-t border-[#26293B]">
                    <Button
                        radius="full"
                        size="lg"
                        className="px-8 py-6 bg-gradient-to-r from-[#06B6D4] to-[#10B981] text-[#030712] font-semibold text-sm shadow-xl shadow-cyan-500/10 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all duration-300 w-full sm:w-auto group"
                        endContent={<FiArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />}
                    >
                        Explore All Prompts
                    </Button>

                    <Button
                        radius="full"
                        size="lg"
                        variant="bordered"
                        className="px-8 py-6 bg-[#151723]/60 hover:bg-[#151723] text-[#F8FAFC] hover:text-[#34D399] font-semibold text-sm border-[#26293B] hover:border-[#34D399]/50 transition-all duration-300 w-full sm:w-auto"
                    >
                        Become a Creator
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default TopCreators;