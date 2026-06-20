"use client";

import { Button } from "@heroui/react";
import { FiHome, FiArrowLeft } from "react-icons/fi";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-[#070a13] text-white relative overflow-hidden">

            {/* Background Glow SVG */}
            <div className="absolute inset-0 opacity-20">
                <svg width="100%" height="100%" className="absolute">
                    <defs>
                        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#070a13" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                    <circle cx="50%" cy="40%" r="300" fill="url(#glow)" />
                </svg>
            </div>

            {/* Main Content */}
            <div className="relative z-10 text-center px-6">

                {/* 404 Big Text */}
                <h1 className="text-[120px] md:text-[180px] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                    404
                </h1>

                {/* Subtitle */}
                <p className="text-xl md:text-2xl text-gray-300 mt-[-20px]">
                    Oops! Page not found
                </p>

                <p className="text-sm text-gray-500 mt-3 max-w-md mx-auto">
                    The page you are looking for might have been removed, renamed, or does not exist.
                </p>

                {/* Buttons */}
                <div className="flex gap-4 justify-center mt-8">

                    <Link href="/">
                        <Button
                            className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold"
                            startContent={<FiHome />}
                        >
                            Go Home
                        </Button>
                    </Link>

                    <Button
                        variant="bordered"
                        className="border-gray-600 text-gray-300"
                        startContent={<FiArrowLeft />}
                        onPress={() => window.history.back()}
                    >
                        Go Back
                    </Button>
                </div>

                {/* Small Help Text */}
                <p className="text-xs text-gray-600 mt-6">
                    Need help? Contact support anytime
                </p>
            </div>

            {/* Floating SVG Decoration */}
            <div className="absolute bottom-10 left-10 opacity-10 animate-pulse">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M12 2L15 8H9L12 2Z"
                        fill="#22d3ee"
                    />
                    <path
                        d="M12 22L9 16H15L12 22Z"
                        fill="#3b82f6"
                    />
                </svg>
            </div>
        </div>
    );
}