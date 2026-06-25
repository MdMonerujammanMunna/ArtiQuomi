"use client";

import Link from "next/link";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import { IoPersonCircleSharp, IoBookmarks } from "react-icons/io5";
import { RiAddCircleFill, RiMoneyEuroCircleFill } from "react-icons/ri";
import { BiSolidMessage } from "react-icons/bi";
import { FaBookOpen } from "react-icons/fa";

import { Avatar, Button, Drawer } from "@heroui/react";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { GoHomeFill } from "react-icons/go";
import { FaSquarePollVertical } from "react-icons/fa6";
import { MdReport } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";

export function DashBoardsideBar() {
    const router = useRouter();
    const { data: session, isPending } = authClient.useSession();
    const [mounted, setMounted] = useState(false);

    const SignOutClick = async () => {
        await authClient.signOut();
        router.push("/");
    };

    useEffect(() => {
        setMounted(true);
    }, []);

    const path = usePathname();
    const activeTab = path;

    const DashboardSideBar = {
        "User": [
            { icon: IoPersonCircleSharp, label: "My Profile", url: "/Dashboard/User/MyProfile" },
            { icon: RiAddCircleFill, label: "Create Prompt", url: "/Dashboard/User/CreatePrompt" },
            { icon: FaBookOpen, label: "My Prompts", url: "/Dashboard/User/MyPrompts" },
            { icon: IoBookmarks, label: "Saved Prompts", url: "/Dashboard/User/SavePrompts" },
            { icon: BiSolidMessage, label: "My Reviews", url: "/Dashboard/User/ReviewsPrompts" },
        ],
        "Creator": [
            { icon: IoPersonCircleSharp, label: "My Profile", url: "/Dashboard/Creator/MyProfile" },
            { icon: GoHomeFill, label: "Home", url: "/Dashboard/Creator/Home" },
            { icon: RiAddCircleFill, label: "Create Prompt", url: "/Dashboard/Creator/CreatePrompt" },
            { icon: FaBookOpen, label: "My Prompts", url: "/Dashboard/Creator/MyPrompts" },
        ],
        "Admin": [
            { icon: IoPersonCircleSharp, label: "My Profile", url: "/Dashboard/Admin/MyProfile" },
            { icon: FaBookOpen, label: "All Prompts", url: "/Dashboard/Admin/AllPrompts" },
            { icon: RiMoneyEuroCircleFill, label: "All Payments", url: "/Dashboard/Admin/AllPayments" },
            { icon: HiUserGroup, label: "All Users", url: "/Dashboard/Admin/AllUsers" },
            { icon: FaSquarePollVertical, label: "Analytics", url: "/Dashboard/Admin/Analytics" },
            { icon: MdReport, label: "Reported Prompts", url: "/Dashboard/Admin/ReportedPrompts" },
        ]
    };

    // Safely get role after mounting, defaults to "User" during SSR
    const role = mounted && session?.user?.role ? session.user.role : "User";
    const navItems = DashboardSideBar[role] || DashboardSideBar["User"];

    const AllSide = (
        <>
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
                                className={`flex items-center gap-4 rounded-l-sm rounded-none px-5 py-4 font-semibold w-full border-r-4 border-emerald-500 ${activeTab === item.url
                                        ? "font-semibold bg-linear-to-r from-cyan-500 to-emerald-500"
                                        : "border-l-transparent hover:bg-emerald-500"
                                    }`}
                            >
                                <ItemIcon className="w-5 h-5" />
                                <span>{item.label}</span>
                            </Link>
                        );
                    })}

                    {/* Hydration Guard: Only render session info once component is mounted on client */}
                    {mounted && session?.user ? (
                        <div className="mt-auto pt-6 border-t border-white/10 space-y-3">
                            <Link href={`/Dashboard/${role}/MyProfile`} className="flex items-center gap-2">
                                <Avatar>
                                    <Avatar.Image
                                        alt={session.user.name || "User"}
                                        src={session.user.image || ""}
                                    />
                                </Avatar>
                                <div>
                                    <h1 className="text-xl font-bold">{session.user.name}</h1>
                                    <p className="text-sm text-slate-400 uppercase">{session.user.role}</p>
                                </div>
                            </Link>
                            <button
                                className="flex items-center gap-4 px-5 py-4 font-semibold w-full text-red-400 hover:bg-red-500/10 rounded-md"
                                onClick={SignOutClick}
                            >
                                Log Out
                            </button>
                        </div>
                    ) : (
                        // Optional: Render a simple placeholder skeleton during SSR/Loading
                        <div className="mt-auto pt-6 border-t border-white/10 text-slate-500 text-sm animate-pulse">
                            Loading profile...
                        </div>
                    )}
                </nav>
            </div>
        </>
    );

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