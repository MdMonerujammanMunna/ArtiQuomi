import { FiSearch } from "react-icons/fi";

const TitleForPrompts = ({ s }) => {
    return (
        <div className="bg-[#070a13] text-white py-12 px-6 md:px-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-slate-800 relative overflow-hidden">

            {/* Glow Background Effect */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-20 -left-20 w-72 h-72 bg-emerald-500/10 blur-3xl rounded-full"></div>
                <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>
            </div>

            {/* LEFT */}
            <div className="flex flex-col gap-2 relative z-10">
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                    Discover & Generate AI Ideas
                </h1>
                <p> Browse curated AI prompt library</p>
                <div className="flex items-center gap-3 flex-wrap">

                    <p className="text-sm text-gray-400 font-medium">
                        Showing
                    </p>

                    <span className="px-2 py-1 text-xs rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {100} Verified Prompts
                    </span>

                    <span className="px-2 py-1 text-xs rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        AI Powered
                    </span>

                </div>

            </div>

            {/* SEARCH */}
            <div className="w-full  md:max-w-xl relative group z-10">

                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <FiSearch className="text-gray-500 text-lg group-focus-within:text-emerald-400 transition-colors duration-200" />
                </div>

                <input
                    type="text"
                    placeholder="Search prompt, tag, tool..."
                    className="w-full bg-[#0b1220] text-sm rounded-full text-gray-300 placeholder-gray-600 pl-11 pr-4 py-3.5 border border-slate-800 outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-all duration-200 shadow-inner"
                />
            </div>

        </div>

    );
};

export default TitleForPrompts;