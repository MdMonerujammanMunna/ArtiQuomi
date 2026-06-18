"use client";

import Link from "next/link";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import { IoPersonCircleSharp, IoBookmarks } from "react-icons/io5";
import { BiSolidMessage } from "react-icons/bi";
import { FaBookOpen } from "react-icons/fa";


import { Button, Drawer } from "@heroui/react";
import Image from "next/image";
import { useState } from "react";

export function DashBoardsideBar() {
    const [activeTab, setActiveTab] = useState("My Profile");

    const navItems = [
        { icon: IoPersonCircleSharp, label: "My Profile", url: "/Dashboard/User/MyProfile" },
        { icon: FaBookOpen, label: "My Prompts", url: "/Dashboard/User" },
        { icon: IoBookmarks, label: "Saved Prompts", url: "/Dashboard/User" },
        { icon: BiSolidMessage, label: "My Reviews", url: "/Dashboard/User" },
    ];

    const AllSide = <>
        <div className="px-6 py-10 text-white">
            <Link href="/" className="flex items-center gap-2 mb-10">
                <Image src="/logo.png" alt="Logo" width={40} height={40} />

                <span className="text-xl font-bold text-white">
                    Arti{" "}
                    <span className="bg-linear-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                        Quomi
                    </span>
                </span>
            </Link>
            <nav className="flex flex-col gap-5 min-h-screen">
                {navItems.map((item) => {
                    const ItemIcon = item.icon;
                    return (
                        <Link
                            key={item.label}
                            href={item.url}
                        >
                            <button onClick={() => setActiveTab(item.label)}
                                className={`flex items-center gap-4 rounded-l-sm rounded-none px-5 py-4 font-semibold w-full border-r-4 border-emerald-500 ${activeTab === item.label
                                    ? " font-semibold bg-linear-to-r from-cyan-500 to-emerald-500"
                                    : " border-l-transparent hover:bg-emerald-500"
                                    }`}>
                                <ItemIcon className="w-5 h-5" />
                                <span>{item.label}</span>
                            </button>

                        </Link>
                    )

                })}
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