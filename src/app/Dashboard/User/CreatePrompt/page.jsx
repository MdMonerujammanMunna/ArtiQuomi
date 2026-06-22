"use client";

import React, { useEffect, useState } from "react";
import {
    FiFileText,
    FiFolder,
    FiCpu,
    FiTag,
    FiTrendingUp,
    FiImage,
    FiEye,
    FiAlignJustify
} from "react-icons/fi";
import { Button } from "@heroui/react"; // Hero UI v3.2.1
import { uploadImage } from "@/lib/ImageUpload";
import Image from "next/image";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";
import { createPrompt } from "@/lib/api/Prompts";
import { getUserPrompts } from "@/lib/api/User";

export default function AddPromptForm() {
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
    const aiTools = [
        "ChatGPT",
        "DeepSeek",
        "Grok",
        "Claude",
        "Gemini",
        "Perplexity AI",
        "LLaMA",
        "Mistral"
    ];
    const Session = authClient.useSession();
    const UserId = Session?.data?.user?.id;
    const UserPlan = Session?.data?.user?.plan;
    console.log(UserPlan);
    const [thumbnail, setThumbnail] = useState(null);
    const [previewUrl, setPreviewUrl] = useState("");
    const [userPrompts, setUserPrompts] = useState([]);
    useEffect(() => {
        const fetchPrompts = async () => {
            const data = await getUserPrompts(UserId);
            setUserPrompts(data);
        };

        if (UserId) {
            fetchPrompts();
        }
    }, [UserId]);

    // console.log(userPrompts);
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        setThumbnail(file);
        setPreviewUrl(URL.createObjectURL(file));
    };

    // Submit handler capturing form data via the native form element
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        try {
            const imageUrl = thumbnail
                ? await uploadImage(thumbnail)
                : "";

            const formValues = {
                UserId: Session.data.user.id,
                UserName: Session.data.user.name,
                title: userData.title,
                description: userData.description,
                content: userData.content,
                category: userData.category,
                aiTool: userData.aiTool,
                tags: userData.tags
                    ? userData.tags.split(",").map((t) => t.trim())
                    : [],
                difficultyLevel: userData.difficultyLevel,
                visibility: userData.visibility,
                thumbnailImage: imageUrl,
                copyCount: 0,
                bookmarkCount: 0,
                status: "pending",
                createdAt: new Date(),
            };
            const result = await createPrompt(formValues);
            toast.success("Prompt created successfully!");

        } catch (error) {
            toast.error(error.message);
        }
    };

    const customInputClass = "text-xs border-emerald-500 w-full bg-transparent border text-white p-2.5 rounded-md outline-none transition-all duration-200 focus:border-cyan-500";


    return (
        <> {
            userPrompts.length > 2 && UserPlan === "free" ?
                <>
                    <div className="grid gap-6 lg:grid-cols-2">

                        {/* Prompt Limit */}
                        <div className="rounded-3xl border border-emerald-500/20 bg-[#111827] p-6 shadow-lg">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-semibold text-white">
                                    Prompt Limit
                                </h3>

                                <div className="rounded-xl bg-emerald-500/15 p-3">
                                    ✨
                                </div>
                            </div>

                            <h2 className="mt-6 text-4xl font-bold text-emerald-400">
                                Limit Reached !
                            </h2>

                            <p className="mt-2 text-sm text-gray-400">
                                Maximum prompts you can publish with your current plan.
                            </p>
                        </div>

                        {/* Usage */}
                        <div className="rounded-3xl border border-emerald-500 bg-linear-to-br from-emerald-500/15 to-transparent p-6 shadow-lg">

                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-semibold text-white">
                                    Current Usage
                                </h3>
                                <span className="rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
                                    Closed
                                </span>

                            </div>

                            <h2 className="mt-6 text-4xl font-bold text-white">
                                {userPrompts.length}
                            </h2>

                            <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                                {userPrompts.length === 1 ?
                                    <div className="h-full w-1/3 rounded-full bg-emerald-400"></div>
                                    : userPrompts.length === 2 ?
                                        <div className="h-full w-2/3 rounded-full bg-emerald-400"></div>
                                        : <div className="h-full w-3/3 rounded-full bg-red-500"></div>

                                }
                                <div className="h-full w-2/3 rounded-full bg-emerald-400"></div>
                            </div>

                            <p className="mt-3 text-sm text-gray-300">
                                One prompt remaining before reaching your limit.
                            </p>
                        </div>
                    </div>
                </>
                :
                <div className="max-w-2xl mx-auto my-10 p-8 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-xl">
                    <div className="mb-6 border-b border-zinc-800 pb-4">
                        <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                            <FiFileText className="text-emerald-500" /> Add New Prompt
                        </h2>
                        <p className="text-xs text-zinc-400 mt-1">
                            Submitted prompts are initialized as <span className="text-amber-500 font-semibold">pending</span> and hidden until admin verification.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">

                        {/* Prompt Title */}
                        <div>
                            <label className=" text-xs font-medium text-zinc-300 mb-1.5 flex items-center gap-1.5">
                                <FiAlignJustify /> Prompt Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                required
                                placeholder="e.g., Ultra-Realistic Cinematic Lighting Prompt"
                                className={customInputClass}
                            />
                        </div>

                        {/* Prompt Description */}
                        <div>
                            <label className=" text-xs font-medium text-zinc-300 mb-1.5 flex items-center gap-1.5">
                                <FiFileText /> Prompt Description
                            </label>
                            <textarea
                                name="description"
                                rows={2}
                                required
                                placeholder="Describe what this prompt achieves and how to use it..."
                                className={customInputClass}
                            />
                        </div>

                        {/* Prompt Content */}
                        <div>
                            <label className=" text-xs font-medium text-zinc-300 mb-1.5 flex items-center gap-1.5">
                                <FiCpu /> Prompt Content
                            </label>
                            <textarea
                                name="content"
                                rows={4}
                                required
                                placeholder="Paste the exact prompt content here. Use brackets [ ] for user variables..."
                                className={`${customInputClass} font-mono`}
                            />
                        </div>

                        {/* Category & AI Tool Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className=" text-xs font-medium text-zinc-300 mb-1.5 flex items-center gap-1.5">
                                    <FiFolder /> Category
                                </label>
                                <select name="category" required className={`${customInputClass} [&>option]:bg-zinc-900`}>
                                    {categories.map((category, index) => (
                                        <option key={index} value={category}>{category}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className=" text-xs font-medium text-zinc-300 mb-1.5 flex items-center gap-1.5">
                                    <FiCpu /> AI Tool
                                </label>
                                <select name="aiTool" required className={`${customInputClass} [&>option]:bg-zinc-900`}>
                                    {aiTools.map((category, index) => (
                                        <option key={index} value={category}>{category}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Tags & Difficulty Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className=" text-xs font-medium text-zinc-300 mb-1.5 flex items-center gap-1.5">
                                    <FiTag /> Tags
                                </label>
                                <input
                                    type="text"
                                    name="tags"
                                    placeholder="cinematic, 8k, photorealistic (comma separated)"
                                    className={customInputClass}
                                />
                            </div>

                            <div>
                                <label className=" text-xs font-medium text-zinc-300 mb-1.5 flex items-center gap-1.5">
                                    <FiTrendingUp /> Difficulty Level
                                </label>
                                <select name="difficultyLevel" required className={`${customInputClass} [&>option]:bg-zinc-900`}>
                                    <option value="Beginner">Beginner</option>
                                    <option value="Intermediate">Intermediate</option>
                                    <option value="Pro">Pro</option>
                                </select>
                            </div>
                        </div>

                        {/* Visibility Choice */}
                        <div>
                            <label className=" text-xs font-medium text-zinc-300 mb-1.5 flex items-center gap-1.5">
                                <FiEye /> Visibility
                            </label>
                            <select name="visibility" required className={`${customInputClass} [&>option]:bg-zinc-900`}>
                                <option value="Public">Public (Visible to marketplace once approved)</option>
                                <option value="Private">Private (Visible only to Pro User)</option>
                            </select>
                        </div>

                        {/* Thumbnail Image Upload  */}
                        <div>
                            <label className=" text-xs font-medium text-zinc-300 mb-1.5 flex items-center gap-1.5">
                                <FiImage /> Thumbnail Image
                            </label>
                            <div className="relative border border-dashed border-zinc-700 hover:border-emerald-500 rounded-lg p-6 transition-all duration-150 flex flex-col items-center justify-center bg-zinc-900/50 cursor-pointer group">
                                <input
                                    type="file"
                                    name="thumbnailImage"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                />
                                {previewUrl ? (
                                    <div className="text-center space-y-2 pointer-events-none">
                                        <Image width={100} height={100} src={previewUrl} alt="Preview" className="max-h-24 mx-auto rounded object-cover" />
                                        <p className="text-[11px] text-emerald-400 font-medium">{thumbnail?.name}</p>
                                    </div>
                                ) : (
                                    <div className="text-center space-y-1 pointer-events-none">
                                        <FiImage className="mx-auto text-xl text-zinc-500 group-hover:text-emerald-400" />
                                        <p className="text-xs text-zinc-400">Click to upload or drag & drop</p>
                                        <p className="text-[10px] text-zinc-600">PNG, JPG or WEBP formats up to 5MB</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Submission Button Wrapper */}
                        <div className="pt-3 border-t border-zinc-800 flex justify-end">
                            <Button
                                type="submit"
                                className="bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold px-6 py-2 rounded-xl text-xs transition-colors shadow-lg shadow-emerald-500/10"
                            >
                                Submit Prompt
                            </Button>
                        </div>

                    </form>
                </div>
        }
        </>
    );
}