"use client";

import Link from "next/link";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import { IoPersonCircleSharp, IoBookmarks } from "react-icons/io5";
import { RiAddCircleFill } from "react-icons/ri";
import { BiSolidMessage } from "react-icons/bi";
import { FaBookOpen } from "react-icons/fa";


import { Avatar, Button, Drawer } from "@heroui/react";
import Image from "next/image";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { redirect, usePathname } from "next/navigation";
export function DashBoardsideBar() {
    const usesession = authClient.useSession()
    const SignOutClick = async () => {
        await authClient.signOut()
        redirect("/")
    };
    const path = usePathname();
    const activeTab = path;
    const DashboardSideBar = {
        "user": [
            { icon: IoPersonCircleSharp, label: "My Profile", url: "/Dashboard/User/MyProfile" },
            { icon: RiAddCircleFill, label: "Create Prompt", url: "/Dashboard/User/CreatePrompt" },
            { icon: FaBookOpen, label: "My Prompts", url: "/Dashboard/User/MyPrompts" },
            { icon: IoBookmarks, label: "Saved Prompts", url: "/Dashboard/User/SavePrompts" },
            { icon: BiSolidMessage, label: "My Reviews", url: "/Dashboard/User/ReviewsPrompts" },
        ],
        "creator": [
            { icon: IoPersonCircleSharp, label: "My Profile", url: "/Dashboard/Creator/MyProfile" },
            { icon: RiAddCircleFill, label: "Create Prompt", url: "/Dashboard/Creator/CreatePrompt" },
            { icon: FaBookOpen, label: "My Prompts", url: "/Dashboard/Creator/MyPrompts" },
        ],
        "admin": [
            { icon: IoPersonCircleSharp, label: "All Users", url: "/Dashboard/Admin/MyProfile" },
            { icon: RiAddCircleFill, label: "All Prompts", url: "/Dashboard/Admin/MyPrompts" },
            { icon: FaBookOpen, label: "Reported Prompts", url: "/Dashboard/Admin/ReviewsPrompts" },
            { icon: IoBookmarks, label: "Analytics", url: "/Dashboard/Admin/SavePrompts" },
        ]
    }

    const role = usesession.data?.user?.role;

    const navItems = DashboardSideBar[role] || DashboardSideBar["user"];
    const AllSide = <>
        <div className="px-6 py-10 text-white flex flex-col h-full">
            <Link href="/" className="flex items-center gap-2 mb-10">
                <Image src="/logo.png" alt="Logo" width={40} height={40} />

                <span className="text-xl font-bold text-white">
                    Arti{" "}
                    <span className="bg-linear-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                        Quomi
                    </span>
                </span>
            </Link>
            <nav className="flex flex-col gap-5 flex-1">
                {navItems.map((item) => {
                    const ItemIcon = item.icon;
                    return (
                        <Link
                            key={item.label}
                            href={item.url}
                            // onClick={() => setActiveTab(item.label)}
                            className={`flex items-center gap-4 rounded-l-sm rounded-none px-5 py-4 font-semibold w-full border-r-4 border-emerald-500 ${activeTab === item.url
                                ? "font-semibold bg-linear-to-r from-cyan-500 to-emerald-500"
                                : "border-l-transparent hover:bg-emerald-500"
                                }`}
                        >
                            <ItemIcon className="w-5 h-5" />
                            <span>{item.label}</span>
                        </Link>
                    )

                })}
                <div className="mt-auto pt-6 border-t border-white/10 space-y-3">
                    <Link href={`/Dashboard/${usesession.data?.user?.role}/MyProfile`} className="flex items-center gap-2">
                        <Avatar>
                            <Avatar.Image alt={usesession.data?.user?.name || "User"} src={usesession.data?.user?.image} />
                            {/* <Avatar.Fallback>{usesession.data?.user?.name[0] || "U"}</Avatar.Fallback> */}
                        </Avatar>
                        <div className="">
                            <h1 className="text-xl font-bold">{usesession.data?.user?.name}</h1>
                            <p className="text-sm text-slate-400 uppercase">{usesession.data?.user?.role}</p>
                        </div>
                    </Link>
                    <button
                        className="flex items-center gap-4 px-5 py-4 font-semibold w-full text-red-400 hover:bg-red-500/10 rounded-md"
                        onClick={SignOutClick}
                    >
                        Log Out
                    </button>
                </div>
            </nav>
        </div>
    </>
    return (
        <>
            <aside className="hidden md:block bg-[#0b1220] border-r-4 shrink-0">
                {AllSide}
            </aside>
            <Drawer>
                <Button className="md:hidden mt-10 mx-5 bg-linear-to-r from-cyan-500 to-emerald-500">
                    <TbLayoutSidebarLeftCollapseFilled />
                    Side Bar
                </Button>

                <Drawer.Backdrop className="bg-black/60 " />

                <Drawer.Content
                    placement="left"
                    className="bg-[#0b1220] text-white "
                >
                    <Drawer.Dialog className="bg-[#0b1220] text-white">
                        <Drawer.CloseTrigger />

                        <Drawer.Body>
                            {AllSide}
                        </Drawer.Body>
                    </Drawer.Dialog>
                </Drawer.Content>
            </Drawer>
        </>
    );
}