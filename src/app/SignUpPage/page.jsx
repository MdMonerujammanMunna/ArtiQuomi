"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Label, RadioGroup, Radio } from "@heroui/react";
import { FaMagnifyingGlassPlus } from "react-icons/fa6";
import { LuSquareChartGantt } from "react-icons/lu";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

export default function SignUpPage() {
    const router = useRouter();
    const [role, setRole] = useState("user");
    const [showPassword, setShowPassword] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());
        console.log(userData)
        const { data, error } = await authClient.signUp.email({
            name: userData.name,
            email: userData.email,
            password: userData.password,
            role: userData.role,
            image: userData.image,
            plan: 'free'
        })
        if (data) {
            toast.success("Account created successfully")
            router.push("/LogIn")
        }
        else {
            toast.error("Account creation failed")
        }
    }
    const signIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }
    return (
        <div className="flex items-center justify-center px-4 py-20">
            <form
                onSubmit={handleSubmit}
                className="w-full rounded-2xl border-2 border-emerald-400 hover:shadow-xl hover:shadow-emerald-400/20 max-w-lg "
            >
                <div className="py-5 text-center ">
                    <div className="flex items-center justify-center mb-2 gap-4">
                        <Image src="/logo.png" alt="Arti Quomi Logo" width={70} height={70} style={{ width: "auto", height: "auto" }} />
                        <span className="text-5xl font-bold text-white">
                            Arti{" "}
                            <span className="bg-linear-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                                Quomi
                            </span>
                        </span>
                    </div>
                    <h1 className="text-3xl font-bold">Create an <span className="text-emerald-400">Account</span></h1>
                    <p >Start your journey today</p>
                </div>

                <div className="px-8 space-y-4">
                    <div className="space-y-1.5">
                        <label htmlFor="name" className="font-semibold">
                            Full Name
                        </label>
                        <div className="relative">
                            <span className="absolute inset-y-5 left-3 flex items-center ">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                    <circle cx="12" cy="7" r="4" />
                                </svg>
                            </span>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Enter your full name"
                                required
                                className="mt-1 w-full pl-9 pr-4 py-2.5 text-sm rounded-lg border focus:border-2 placeholder:text-gray-200 focus:outline-none focus:border-emerald-400 transition"
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label htmlFor="email" className="font-semibold">
                            Email Address
                        </label>
                        <div className="relative">
                            <span className="absolute inset-y-6 left-3 flex items-center ">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <rect width="20" height="16" x="2" y="4" rx="2" />
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                </svg>
                            </span>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                required
                                className="mt-1 w-full pl-9 pr-4 py-2.5 text-sm rounded-lg border focus:border-2 placeholder:text-gray-200 focus:outline-none focus:border-emerald-400 transition"
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5 ">
                        <label htmlFor="password" className="font-semibold">
                            Password
                        </label>
                        <div className="relative">
                            <span className="absolute inset-y-4 left-3 flex items-center ">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                </svg>
                            </span>
                            <input
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                required
                                className="mt-1 w-full pl-9 pr-4 py-2.5 text-sm rounded-lg border focus:border-2 placeholder:text-gray-200 focus:outline-none focus:border-emerald-400 transition"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword((v) => !v)}
                                className="absolute inset-y-0 right-3 flex items-center hover:text-neutral-300 transition"
                                aria-label={showPassword ? "Show password" : "Hide password"}
                            >
                                {showPassword ? (
                                    <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                                        <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                                        <line x1="1" y1="1" x2="23" y2="23" />
                                    </svg>
                                ) : (
                                    <svg className="w-4 h-4 " fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                        <circle cx="12" cy="12" r="3" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                    <div className="space-y-1.5">
                        <label htmlFor="image" className="font-semibold">
                            PhotoURL
                        </label>
                        <div className="relative">
                            <span className="absolute inset-y-6 left-3 flex items-center ">
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <rect x="3" y="4" width="18" height="14" rx="2" />
                                    <circle cx="8.5" cy="9.5" r="1.5" />
                                    <path d="M21 16l-5-5L5 21" />
                                </svg>
                            </span>
                            <input
                                id="image"
                                name="image"
                                type="url"
                                placeholder="Enter your image URL"
                                required
                                className="mt-1 w-full pl-9 pr-4 py-2.5 text-sm rounded-lg border focus:border-2 placeholder:text-gray-200 focus:outline-none focus:border-emerald-400 transition"
                            />
                        </div>
                    </div>

                    <div className="">
                        <Label className="text-white font-semibold">Select Your Role</Label>

                        <RadioGroup
                            value={role}
                            onValueChange={setRole}
                            orientation="horizontal"
                            className="flex gap-4 mt-2"
                        >
                            <Radio className="flex-1" value="user" onClick={() => setRole("user")}>
                                <Radio.Content
                                    onClick={() => setRole("user")}
                                    role="button"
                                    tabIndex={0}
                                    className={`flex cursor-pointer items-center gap-2 rounded-xl border px-4 py-3 transition-all duration-200 ${role === "user"
                                        ? "border-emerald-500 "
                                        : "border-[#26293B]  hover:border-white"
                                        }`}
                                >
                                    <Radio.Control>
                                        <Radio.Indicator />
                                    </Radio.Control>
                                    <span className="text-white">User</span>
                                </Radio.Content>
                            </Radio>

                            <Radio className="flex-1" value="creator" onClick={() => setRole("creator")}>
                                <Radio.Content
                                    onClick={() => setRole("creator")}
                                    role="button"
                                    tabIndex={0}
                                    className={`flex cursor-pointer items-center gap-2 rounded-xl border px-4 py-3 transition-all duration-200 ${role === "creator"
                                        ? "border-emerald-500"
                                        : "border-[#26293B] hover:border-white"
                                        }`}
                                >
                                    <Radio.Control>
                                        <Radio.Indicator />
                                    </Radio.Control>
                                    <span className="text-white">Creator</span>
                                </Radio.Content>
                            </Radio>
                        </RadioGroup>

                        <input type="hidden" name="role" value={role} />
                    </div>

                    <button
                        type="submit"
                        className="mt-10 border cursor-pointer bg-emerald-400 w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-black hover:opacity-90 active:scale-[0.98] transition-all"
                    >
                        Create account
                        <svg className=" w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </button>

                    <div className="flex items-center gap-3 py-1">
                        <div className="flex-1 h-px bg-neutral-600" />
                        <span className=" text-emerald-400 font-medium">OR</span>
                        <div className="flex-1 h-px bg-neutral-600" />
                    </div>

                    <button onClick={signIn}
                        type="button"
                        className="border cursor-pointer border-emerald-400 w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-white active:scale-[0.98] transition-all mb-10"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        Continue with Google
                    </button>
                </div >

                <div className="px-8 py-4 text-center border-t ">
                    <p >
                        Already have an account?{" "}
                        <Link href="/LogIn" className="text-sm font-medium text-emerald-400">
                            Sign in
                        </Link>
                    </p>
                </div>
            </form >
        </div >
    );
}