import Link from "next/link";

export default function CTA() {
    return (
        <section className="bg-[#030712] px-5 py-20">
            <div className="max-w-7xl mx-auto">

                <div className="relative overflow-hidden rounded-[32px] border border-emerald-500/20 bg-gradient-to-r from-[#0F766E] via-[#0D8A6F] to-[#064E3B]">

                    {/* Blur */}
                    <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-emerald-400/20 blur-[120px]" />
                    <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-[120px]" />

                    <div className="relative grid gap-10 lg:grid-cols-2 items-center px-8 py-12 md:px-14 md:py-16">

                        {/* Left */}
                        <div>
                            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-emerald-100">
                                🚀 Join Our AI Prompt Community
                            </span>

                            <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight text-white">
                                Discover The Best
                                AI Prompts
                                For Every Task
                            </h2>
                        </div>

                        {/* Right */}
                        <div>
                            <p className="text-gray-200 leading-8">
                                Browse thousands of premium and free AI prompts
                                created by talented creators. Save time,
                                increase productivity and unlock the full power
                                of AI with one platform.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4">

                                <Link
                                    href="/prompts"
                                    className="rounded-xl bg-black px-8 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-zinc-900"
                                >
                                    Explore Prompts
                                </Link>

                                <Link
                                    href="/create-prompt"
                                    className="rounded-xl border border-white/20 bg-white/20 px-8 py-3 font-semibold text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-black"
                                >
                                    Create Prompt
                                </Link>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}