"use client";

import { updatePrompt } from "@/lib/api/Prompts";
import { uploadImage } from "@/lib/ImageUpload";
import { Button, Modal, Surface, TextField } from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiEnvelope } from "react-icons/bi";
import { FiAlignJustify, FiCpu, FiEye, FiFileText, FiFolder, FiImage, FiTag, FiTrendingUp } from "react-icons/fi";
import { MdOutlineEditNote } from "react-icons/md";
import { toast } from "react-toastify";

export function UpdateModal({ prompt }) {
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
    const router = useRouter();
    const id = prompt?._id
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());
        const WithidData = { ...user, id }
        const data = await updatePrompt(WithidData);
        toast.success("Data updated successfully");
        router.refresh();
    }
    const customInputClass = "text-xs border-emerald-500 w-full bg-transparent border text-white p-2.5 rounded-md outline-none transition-all duration-200 focus:border-cyan-500";
    return (
        <Modal>
            <Button
                size="sm"
                className="min-w-0 h-6 px-2 text-xs bg-emerald-600 text-white"
            >
                <MdOutlineEditNote />
            </Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md bg-black">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Heading className="text-emerald-500 text-center font-black">Update Prompt</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <form onSubmit={handleSubmit} className="space-y-5">

                                {/* Prompt Title */}
                                <div>
                                    <label className=" text-xs font-medium text-zinc-300 mb-1.5 flex items-center gap-1.5">
                                        <FiAlignJustify /> Prompt Title
                                    </label>
                                    <input
                                        type="text"
                                        name="title"
                                        defaultValue={prompt.title}
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
                                        defaultValue={prompt.description}
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
                                        defaultValue={prompt.content}
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
                                        <select name="category" defaultValue={prompt.category} className={`${customInputClass} [&>option]:bg-zinc-900`}>
                                            {categories.map((category, index) => (
                                                <option key={index} value={category}>{category}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className=" text-xs font-medium text-zinc-300 mb-1.5 flex items-center gap-1.5">
                                            <FiCpu /> AI Tool
                                        </label>
                                        <select name="aiTool" defaultValue={prompt.aiTool} className={`${customInputClass} [&>option]:bg-zinc-900`}>
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
                                            defaultValue={prompt.tags}
                                            placeholder="cinematic, 8k, photorealistic (comma separated)"
                                            className={customInputClass}
                                        />
                                    </div>

                                    <div>
                                        <label className=" text-xs font-medium text-zinc-300 mb-1.5 flex items-center gap-1.5">
                                            <FiTrendingUp /> Difficulty Level
                                        </label>
                                        <select name="difficultyLevel" defaultValue={prompt.difficultyLevel} className={`${customInputClass} [&>option]:bg-zinc-900`}>
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
                                    <select name="visibility" defaultValue={prompt.visibility} className={`${customInputClass} [&>option]:bg-zinc-900`}>
                                        <option value="Public">Public (Visible to marketplace once approved)</option>
                                        <option value="Private">Private (Visible only to Pro User)</option>
                                    </select>
                                </div>

                                {/* Submission Button Wrapper */}
                                <div className="pt-3 border-t border-zinc-800 flex justify-end">
                                    <Button
                                        slot="close"
                                        type="submit"
                                        className="bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold px-6 py-2 rounded-xl text-xs transition-colors shadow-lg shadow-emerald-500/10"
                                    >
                                        Submit Prompt
                                    </Button>
                                </div>

                            </form>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
} 