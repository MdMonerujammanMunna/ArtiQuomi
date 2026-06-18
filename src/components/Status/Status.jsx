import { HiOutlineDocumentText } from "react-icons/hi2";
import { FiUsers } from "react-icons/fi";
import { LuDownload } from "react-icons/lu";
import { IoStarOutline } from "react-icons/io5";

const stats = [
    {
        icon: <HiOutlineDocumentText size={32} />,
        number: "25K+",
        title: "Prompts Shared",
        color: "text-emerald-400",
    },
    {
        icon: <FiUsers size={32} />,
        number: "12K+",
        title: "Active Creators",
        color: "text-cyan-400",
    },
    {
        icon: <LuDownload size={32} />,
        number: "180K+",
        title: "Downloads",
        color: "text-yellow-400",
    },
    {
        icon: <IoStarOutline size={32} />,
        number: "4.9★",
        title: "Average Rating",
        color: "text-pink-400",
    },
];

export default function Stats() {
    return (
        <>
            <div className="h-0.5 w-full bg-linear-to-r from-cyan-500 to-emerald-500" />
            <section className="bg-[#030712] py-20 px-5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <span className="px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold">
                            Trusted by Thousands
                        </span>

                        <h2 className="mt-5 text-4xl font-bold text-white">
                            Our Community in Numbers
                        </h2>

                        <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
                            Thousands of creators and AI enthusiasts trust our marketplace
                            every day to discover, share and manage high-quality prompts.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                        {stats.map((item, index) => (
                            <div
                                key={index}
                                className="group rounded-3xl border border-[#26293B] bg-[#151723] p-8 transition duration-300 hover:-translate-y-2 hover:border-emerald-500"
                            >
                                <div
                                    className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center ${item.color}`}
                                >
                                    {item.icon}
                                </div>

                                <h3 className="mt-6 text-4xl font-bold text-white">
                                    {item.number}
                                </h3>

                                <p className="mt-2 text-zinc-400">
                                    {item.title}
                                </p>
                            </div>
                        ))}

                    </div>

                </div>
            </section>
        </>
    );
}