"use client";
import { FaFaceGrinStars } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdTipsAndUpdates } from "react-icons/md";
import { BsSave2 } from "react-icons/bs";
import { VscPreview } from "react-icons/vsc";
import { RiCoupon5Line } from "react-icons/ri";
import {
    Avatar,
    Button,
    Card,
    Chip,
} from "@heroui/react";

import {
    FaInstagram,
    FaFacebookF,
    FaTwitter,
    FaOdnoklassniki,
    FaVk,
    FaTelegramPlane,
} from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const MyProfile = () => {
    const userSession = authClient.useSession();
    const user = userSession?.data?.user;
    return (
        <div className="">
            <h1 className="font-bold text-3xl mb-2">Hi! Welcome to Profile </h1>
            <p className="text-sm text-slate-400 mb-10">
                Manage your profile, view your dashboard, details and more.
            </p>
            <div className="min-h-screen bg-[#070a13] text-white py-10 px-5 rounded-xl flex flex-col items-center justify-start font-sans gap-8">

                {/* TOP SECTION */}
                <div className="w-full  gap-6 items-start">

                    {/* PROFILE CARD */}
                    <Card className="bg-[#0b1220] border border-slate-800 rounded-xl p-6 shadow-2xl h-full">
                        <Card.Content className="flex justify-center items-center gap-6">

                            {/* AVATAR */}
                            <div className="relative p-1 rounded-full bg-linear-to-tr from-emerald-500 via-cyan-500 to-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.25)] shrink-0">
                                <Avatar className="w-32 h-32 rounded-full object-cover">
                                    <Avatar.Image alt={user?.name || "User"} src={user?.image} />
                                </Avatar>
                            </div>

                            {/* INFO */}
                            <div className="flex flex-col flex-1 gap-4 items-center w-full">

                                <div className="flex flex-col justify-center gap-1 text-center ">
                                    <h2 className="md:text-2xl text-xl font-bold tracking-wide text-white">
                                        {user?.name}
                                    </h2>

                                    <div className="flex md:flex-row flex-col items-center justify-center gap-2 text-gray-400 text-sm mt-1">
                                        <HiOutlineMail className="text-base text-cyan-400" />
                                        <span className="text-xs md:text-base">{user?.email}</span>
                                    </div>
                                </div>

                                {/* CHIPS */}
                                <div className="flex flex-wrap justify-center gap-2">

                                    <Chip
                                        size="sm"
                                        variant="flat"
                                        className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold text-[11px] uppercase tracking-wider"
                                    >
                                        Role: {user?.role}
                                    </Chip>

                                    <Chip
                                        size="sm"
                                        variant="flat"
                                        className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-semibold text-[11px] uppercase tracking-wider"
                                    >
                                        Plan: {user?.plan}
                                    </Chip>

                                </div>

                                {/* SOCIALS */}
                                <div className="flex flex-wrap justify-center  gap-2.5 mt-2">

                                    <div className="w-8 h-8 rounded-full bg-[#111827] hover:bg-emerald-500 transition flex items-center justify-center text-gray-300 hover:text-white cursor-pointer">
                                        <FaInstagram size={15} />
                                    </div>

                                    <div className="w-8 h-8 rounded-full bg-[#111827] hover:bg-emerald-500 transition flex items-center justify-center text-gray-300 hover:text-white cursor-pointer">
                                        <FaFacebookF size={14} />
                                    </div>

                                    <div className="w-8 h-8 rounded-full bg-[#111827] hover:bg-emerald-500 transition flex items-center justify-center text-gray-300 hover:text-white cursor-pointer">
                                        <FaTwitter size={14} />
                                    </div>

                                    <div className="w-8 h-8 rounded-full bg-[#111827] hover:bg-emerald-500 transition flex items-center justify-center text-gray-300 hover:text-white cursor-pointer">
                                        <FaOdnoklassniki size={14} />
                                    </div>

                                    <div className="w-8 h-8 rounded-full bg-[#111827] hover:bg-emerald-500 transition flex items-center justify-center text-gray-300 hover:text-white cursor-pointer">
                                        <FaVk size={15} />
                                    </div>

                                    <div className="w-8 h-8 rounded-full bg-[#111827] hover:bg-emerald-500 transition flex items-center justify-center text-gray-300 hover:text-white cursor-pointer">
                                        <FaTelegramPlane size={14} />
                                    </div>

                                </div>

                                {/* STATS CARD */}
                                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-full gap-6 items-start mt-8">
                                    <div className="bg-[#111827] border border-slate-800 rounded-xl p-5 flex flex-col justify-between min-h-28">
                                        <div className="flex flex-col gap-1">
                                            <IoDocumentTextOutline className="text-emerald-400 text-2xl" />
                                            <span className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mt-2">
                                                Prompts Published
                                            </span>
                                        </div>
                                        <span className="text-3xl font-bold mt-2">0</span>
                                    </div>
                                    <div className="bg-[#111827] border border-slate-800 rounded-xl p-5 flex flex-col justify-between min-h-28">
                                        <div className="flex flex-col gap-1">
                                            <BsSave2 className="text-emerald-400 text-2xl" />
                                            <span className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mt-2">
                                                Saved Prompts
                                            </span>
                                        </div>
                                        <span className="text-3xl font-bold mt-2">0</span>
                                    </div>
                                    <div className="bg-[#111827] border border-slate-800 rounded-xl p-5 flex flex-col justify-between min-h-28">
                                        <div className="flex flex-col gap-1">
                                            <VscPreview className="text-emerald-400 text-2xl" />
                                            <span className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mt-2">
                                                Reviews Prompts
                                            </span>
                                        </div>
                                        <span className="text-3xl font-bold mt-2">0</span>
                                    </div>  <div className="bg-[#111827] border border-slate-800 rounded-xl p-5 flex flex-col justify-between min-h-28">
                                        <div className="flex flex-col gap-1">
                                            <RiCoupon5Line className="text-emerald-400 text-2xl" />
                                            <span className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mt-2">
                                                My Prompts
                                            </span>
                                        </div>
                                        <span className="text-3xl font-bold mt-2">0</span>
                                    </div>
                                </div>
                            </div>
                        </Card.Content>
                    </Card>
                </div>

                {/* UPGRADE CARD */}
                <Card className="w-full bg-[#0b1220] border border-slate-800 rounded-xl p-6 shadow-2xl">
                    <Card.Content className="p-0 ">

                        <div className="bg-linear-to-b from-[#0b1220] to-[#0f172a] border border-slate-800 rounded-xl p-6 flex flex-col justify-between ">


                            {user?.plan === "free" ?
                                <>
                                    <div className="flex flex-col items-center text-center gap-4">

                                        <div className="bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/20 shadow-md">
                                            <MdTipsAndUpdates className="text-emerald-400 text-2xl" />
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <h4 className="text-lg font-bold tracking-wide text-white">
                                                Upgrade to Pro Lifetime
                                            </h4>
                                            <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
                                                Unlock access to all private prompt templates, parameter sets,
                                                and community reviews for a single one-time contribution of $15.
                                            </p>
                                        </div>
                                    </div>

                                    {/* BUTTON */}

                                    <Link href="/Payment" className="mt-6 w-full">
                                        <Button className="w-full bg-linear-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-bold py-4 rounded-full shadow-lg shadow-emerald-500/20 text-xs md:text-sm">
                                            Upgrade Now ($15)
                                        </Button>
                                    </Link>
                                </>
                                :

                                <>
                                    <div className="flex flex-col items-center text-center gap-4">

                                        <div className="bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/20 shadow-md">
                                            <FaFaceGrinStars className="text-emerald-400 text-2xl" />
                                        </div>

                                        <div className="flex flex-col gap-2">
                                            <h4 className="text-lg font-bold tracking-wide text-white">
                                                You are already a Pro User
                                            </h4>
                                            <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
                                                Thank you for being a Pro User. You can now enjoy all the features of Artiquomi.
                                            </p>
                                        </div>
                                    </div>
                                </>
                            }



                        </div>

                    </Card.Content>
                </Card>

            </div>
        </div>
    );
};

export default MyProfile;