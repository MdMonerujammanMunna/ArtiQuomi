import { HiMiniMagnifyingGlassCircle } from "react-icons/hi2";

const TitleForPrompts = () => {
    return (
        <div>
            <div className=" w-full flex items-center justify-center  antialiased">
                <div className="w-full  flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="space-y-2">
                        <h1 className="text-3xl md:text-4xl font-black tracking-tight bg-linear-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                            All Prompts and Tools
                        </h1>

                        <div className="flex items-center gap-2 text-xs">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <p className="font-medium text-zinc-400/80">
                                Showing {120} verified AI prompts
                            </p>
                        </div>
                    </div>


                    <div className="relative w-full md:w-96 group">
                        <div className="relative w-full md:w-96 group">
                            <input
                                type="text"
                                placeholder="Search prompt, tag, tool..."
                                className="w-full pl-12 pr-4 rounded-full py-3.5 bg-[#161421]/60 border border-zinc-800 focus:outline-none focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/30 focus:shadow-[0_0_25px_rgba(99,102,241,0.15)] transition-all duration-300 text-sm text-zinc-200 placeholder-zinc-600 backdrop-blur-md"
                            />

                            <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-zinc-500 group-focus-within:text-emerald-400 transition-colors duration-300">
                                <HiMiniMagnifyingGlassCircle className="w-5 h-5" />
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TitleForPrompts;