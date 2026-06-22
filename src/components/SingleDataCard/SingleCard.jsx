"use client";
import React, { useState } from "react";
import { Chip, Button, Avatar } from "@heroui/react";
import {
    FiArrowLeft, FiCopy, FiCheck, FiLayers, FiCpu,
    FiSliders, FiBookOpen, FiEye, FiUser
} from "react-icons/fi";
import { IoBookmark } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { BiSolidCopy } from "react-icons/bi";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "react-toastify";
import { copyPrompt, SavePrompts } from "@/lib/api/Copy";
import { PostSavePrompts } from "@/lib/api/Save";
import { FaLayerGroup } from "react-icons/fa6";
import { ReportUserModal } from "../ReportUserModal/ReportUserModal";

const SingleCard = ({ result, id }) => {
    const pathid = id;
    const router = useRouter();
    const userData = authClient.useSession();
    const user = userData?.data?.user;
    // console.log(user);
    const data = result
    // console.log(data);
    const [copied, setCopied] = useState(false);
    const [booked, setBooked] = useState(false)
    const handleBookmark = async () => {
        setBooked(true);
        setTimeout(() => {
            setBooked(false);
        }, 2000);

        const SaveData = {
            ...data,
            saveBy: user?.id,
            saveDate: new Date().toISOString(),
        };
        const dataresponse = await PostSavePrompts(SaveData);
        const response = await SavePrompts(pathid);
        toast.success("Prompt copied to clipboard");
        router.refresh()
    };
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(data.content);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
            toast.success("Prompt copied to clipboard");
            const response = await copyPrompt(pathid);
            router.refresh()
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    };

    const isBlocked = user?.plan === "free" && data.visibility === "Private";
    return (
        <div className="min-h-screen my-20 bg-[#070a13] text-gray-300 font-sans selection:bg-[#10b981]/30 pb-12">
            <div className="border-b border-gray-900 bg-[#0a0f1d]/60 backdrop-blur-md sticky top-0 z-50 px-3 md:px-10 py-4">
                <div className="flex items-center justify-between gap-5">
                    <Link href="/AllPrompts/AllData">
                        <Button
                            className="flex items-center gap-2 text-xs bg-cyan-500/10 text-cyan-400 font-medium uppercase tracking-wider hover:bg-cyan-500/20 "
                        >
                            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform text-sm" />
                            Back to Library
                        </Button>
                    </Link>

                    <div className="flex items-center gap-4 text-xs ">
                        <span className="flex items-center gap-1 flex-nowrap"><FiEye /> {data.bookmarkCount} Saved</span>
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
                    <div className="">
                        <div className=" space-y-8">
                            <div className="bg-[#0a0f1d] border border-gray-800/80 rounded-2xl overflow-hidden shadow-2xl relative">
                                <div className="bg-[#0d1426] px-6 py-4 border-b border-gray-900/60 ">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs font-mono text-gray-500 ml-2 select-none">prompt_template.md</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            {isBlocked ?
                                                "Subscribe"
                                                :
                                                <>
                                                    <Button
                                                        size="sm"
                                                        color={booked ? "success" : "default"}
                                                        variant="flat"
                                                        onClick={handleBookmark}
                                                        className={`rounded-full  transition-all ${booked
                                                            ? "bg-[#10b981]/20 text-[#10b981]"
                                                            : "bg-[#10b981]/10 text-[#10b981] hover:bg-[#10b981]/20"
                                                            }`}
                                                    >
                                                        {booked ? <FaCheck size={16} /> : <IoBookmark size={16} />}
                                                    </Button>
                                                    <Button
                                                        size="sm"
                                                        color={copied ? "success" : "default"}
                                                        variant="flat"
                                                        onClick={handleCopy}
                                                        startContent={copied ? <FiCheck size={14} /> : <FiCopy size={14} />}
                                                        className={`font-bold text-xs rounded-full transition-all ${copied ? "bg-[#10b981]/20 text-[#10b981]" : "bg-[#10b981]/10 text-[#10b981] hover:bg-[#10b981]/20"
                                                            }`}
                                                    >
                                                        {!copied ? <BiSolidCopy /> : <FaCheck />}
                                                    </Button>
                                                    <ReportUserModal data={data} />
                                                </>
                                            }

                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 md:p-8 font-mono text-sm md:text-base leading-relaxed text-purple-300/90 bg-linear-to-b from-[#0a0f1d] to-[#060912] select-all whitespace-pre-wrap">{isBlocked
                                    ?
                                    <div className="flex justify-center items-center   flex-col p-10 rounded-2xl">
                                        <h1 className="text-white font-black text-xl mb-2">This prompt is private</h1>
                                        <p className="text-white text-sm">You need to be a paid user to access this prompt</p>
                                        <Link href="/Payment">
                                            <Button
                                                className="mt-5 px-6 py-2 rounded-xl font-semibold text-white bg-linear-to-r from-emerald-500 to-cyan-500  transition-all duration-300 hover:scale-105 active:scale-95"
                                            >
                                                Subscribe Now
                                            </Button>
                                        </Link>
                                    </div>
                                    :
                                    <div>
                                        {data.content}
                                    </div>}
                                </div>

                            </div>
                        </div>

                        <div className="bg-[#0d1527]/30 rounded-2xl p-6 shadow-sm my-10 ">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-2">
                                <FiBookOpen className="text-[#10b981]" /> Usage Instructions
                            </h3>
                            {isBlocked ?
                                <p className="text-gray-400 text-sm leading-relaxed bg-[#070a13]/50 p-4 rounded-xl border border-gray-900/60">You need to be a subscriber to access this information</p>
                                :
                                <p className="text-gray-400 text-sm leading-relaxed bg-[#070a13]/50 p-4 rounded-xl border border-gray-900/60">
                                    Choose a prompt that matches your goal, then copy it with one click and paste it into your favorite AI tool. Replace the placeholder text with your own details to get personalized results. You can save your favorite prompts for quick access later, and upgrade to Premium to unlock exclusive high-quality prompts. Experiment with different prompts and small changes to get the best possible output.
                                </p>
                            }
                        </div>
                    </div>
                    <div className="space-y-6 lg:sticky lg:top-24">
                        <div className="bg-[#0d1527]/40  rounded-2xl p-6 space-y-5 shadow-md mb-5">
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
                        <div className="bg-[#0d1527]/40   p-5 rounded-2xl shadow-md mb-10">
                            <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-5">Curated By</h4>
                            <div className="flex items-center gap-3">
                                <Avatar className="w-10 h-10 border border-gray-700 bg-gray-800 text-white" >
                                    <Avatar.Image alt={user?.name || "User"} src={user?.image} />
                                </Avatar>
                                <div className="overflow-hidden">
                                    <h4 className="text-sm font-bold text-white truncate">{user?.name}</h4>
                                    <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>



            </div>
        </div>

    );
};

export default SingleCard;