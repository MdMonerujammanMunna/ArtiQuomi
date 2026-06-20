"use client";

import { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Button, Link } from "@heroui/react";
import { FiLock } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { authClient } from "@/lib/auth-client";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { data, isPending } = authClient.useSession();
    const user = data?.user;
    const SignOutClick = async () => {
        await authClient.signOut();
    };
    const navItems = [
        { name: "Home", href: "/" },
        { name: "All Prompts", href: "/AllPrompts/AllData", dropdown: true },
        ...(data?.user ? [{ name: "Dashboard", href: `/Dashboard/User/MyProfile` }] : []),
    ];
    if (pathname.includes("/Dashboard")) {
        return
    }
    return (
        <nav className="sticky top-0 z-50 w-full bg-[#030712] backdrop-blur-xl">
            {/* Top Gradient */}
            <div className="h-0.5 w-full bg-linear-to-r from-cyan-500 to-emerald-500" />

            <header className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <NextLink href="/" className="flex items-center gap-2 underline-none">
                    <Image src="/logo.png" alt="Logo" width={40} height={40} />

                    <span className="text-xl font-bold text-white">
                        Arti{" "}
                        <span className="bg-linear-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                            Quomi
                        </span>
                    </span>
                </NextLink>

                {/* Desktop Menu */}
                <ul className="hidden items-center gap-8 md:flex">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                color="foreground"
                                className="group flex items-center gap-1 text-slate-300 hover:text-white no-underline"
                            >
                                {item.name}

                                {item.dropdown && (
                                    <FaChevronDown className="text-xs transition-transform duration-200 group-hover:rotate-180" />
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Right Side */}
                <div className="flex items-center gap-4">
                    {/* Desktop Buttons */}
                    <div className="hidden items-center gap-5 md:flex">
                        {!user ?
                            <>
                                <Link
                                    href="/LogIn"
                                    className="flex items-center gap-2 text-emerald-400 no-underline"
                                >
                                    <FiLock />
                                    Secure Login
                                </Link>
                                <Link href="/SignUpPage" className="no-underline">
                                    <Button
                                        as={NextLink}
                                        href="/SignUpPage"
                                        className="cursor-pointer bg-linear-to-r from-cyan-500 to-emerald-500 px-6 py-2 rounded-full font-semibold text-black"
                                    >
                                        Get Started
                                    </Button>
                                </Link>
                            </>
                            :
                            <>
                                <Button
                                    onClick={SignOutClick}
                                    className="cursor-pointer flex items-center gap-1 bg-linear-to-r from-cyan-500 to-emerald-500 px-6 py-2 rounded-full font-semibold text-black"
                                >
                                    Sign Out <FaArrowRightFromBracket className="w-4 h-4 ml-1" />
                                </Button>
                            </>
                        }
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="text-slate-300 md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="border-t border-[#1E293B] bg-[#0F172A] md:hidden">
                    <ul className="space-y-2 p-4">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className="flex items-center justify-between py-2 text-slate-300"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}

                                    {item.dropdown && <FaChevronDown size={12} />}
                                </Link>
                            </li>
                        ))}
                        {!user ?
                            <>
                                <li className="pt-3">
                                    <Link
                                        href="/LogIn"
                                        className="flex items-center gap-2 text-emerald-400 no-underline"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <FiLock />
                                        Secure Login
                                    </Link>
                                </li>

                                <li className="pt-2">
                                    <Link href="/SignUpPage" className="no-underline">
                                        <Button
                                            as={NextLink}
                                            href="/SignUpPage"
                                            className="cursor-pointer bg-linear-to-r w-full from-cyan-500 to-emerald-500 px-6 py-2 rounded-full font-semibold text-black"
                                        >
                                            Get Started
                                        </Button>
                                    </Link>
                                </li>
                            </>
                            :
                            <>
                                <Button
                                    onClick={SignOutClick}
                                    className="cursor-pointer w-full flex justify-center items-center gap-1 bg-linear-to-r from-cyan-500 to-emerald-500 px-6 py-2 rounded-full font-semibold text-black"
                                >
                                    Sign Out <FaArrowRightFromBracket className="w-4 h-4 ml-1" />
                                </Button>
                            </>
                        }

                    </ul>
                </div>
            )}
        </nav>
    );
}