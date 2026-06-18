"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    FiFacebook,
    FiTwitter,
    FiInstagram,
    FiLinkedin,
    FiGithub,
} from "react-icons/fi";

const Footer = () => {
    const pathname = usePathname();
    const services = [
        "Prompt Marketplace",
        "AI Image Prompts",
        "ChatGPT Prompts",
        "Claude Prompts",
        "Gemini Prompts",
        "Prompt Optimization",
    ];

    const support = [
        "Help Center",
        "FAQ",
        "Contact Us",
        "Privacy Policy",
        "Terms of Service",
        "Report Abuse",
    ];

    const company = [
        "About Us",
        "Careers",
        "Blog",
        "Community",
        "Affiliates",
        "Roadmap",
    ];
    if (pathname.includes("/Dashboard")) {
        return
    }
    return (
        <footer className="relative overflow-hidden border-t border-white/10 bg-[#030712]">

            <div className="h-0.5 w-full bg-linear-to-r from-cyan-500 to-emerald-500" />
            <div className="relative mx-auto  px-10 py-20">

                <div className="grid gap-12 lg:grid-cols-4">

                    {/* Logo */}
                    <div>
                        <div className="flex items-center gap-3">
                            <Image src="/logo.png" alt="Logo" width={100} height={100} />

                            <div>
                                <span className="text-2xl font-bold text-white">
                                    Arti{" "}
                                    <span className="bg-linear-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                                        Quomi
                                    </span>
                                </span>
                            </div>
                        </div>

                        <p className="mt-6  leading-7 text-slate-400">
                            Discover, share and monetize premium AI prompts for ChatGPT,
                            Midjourney, Claude, Gemini and many more AI tools.
                        </p>

                        <div className="mt-8 flex gap-3">
                            {[
                                FiFacebook,
                                FiTwitter,
                                FiInstagram,
                                FiLinkedin,
                                FiGithub,
                            ].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:bg-linear-to-r from-cyan-500 to-emerald-500 hover:text-white"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="mb-6 text-lg font-semibold text-white">
                            Services
                        </h3>

                        <ul className="space-y-2">
                            {services.map((item) => (
                                <li key={item}>
                                    <Link
                                        href="#"
                                        className="text-slate-400 transition hover:text-emerald-400"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="mb-6 text-lg font-semibold text-white">
                            Support
                        </h3>

                        <ul className="space-y-2">
                            {support.map((item) => (
                                <li key={item}>
                                    <Link
                                        href="#"
                                        className="text-slate-400 transition hover:text-emerald-400"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="mb-6 text-lg font-semibold text-white">
                            Company
                        </h3>

                        <ul className="space-y-2">
                            {company.map((item) => (
                                <li key={item}>
                                    <Link
                                        href="#"
                                        className="text-slate-400 transition hover:text-emerald-400"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* Divider */}
                <div className="my-12 h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />

                {/* Bottom */}
                <div className="flex flex-col items-center justify-between gap-6 text-sm text-slate-500 md:flex-row">

                    <p>
                        © {new Date().getFullYear()} Arti Quomi. All rights reserved.
                    </p>

                    <div className="flex flex-wrap gap-6">
                        <Link href="#" className="hover:text-emerald-400">
                            Terms of Use
                        </Link>

                        <Link href="#" className="hover:text-emerald-400">
                            Privacy Policy
                        </Link>

                        <Link href="#" className="hover:text-emerald-400">
                            Cookie Policy
                        </Link>
                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;
