import { MdOutlineReport, MdEmail } from "react-icons/md";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";

const CardReport = () => {
    return (
        <>
            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5 max-w-lg">
                <div className="flex items-center gap-2 mb-4">
                    <MdOutlineReport className="text-red-500 text-xl" />
                    <h2 className="text-white font-semibold">Report Details</h2>
                </div>

                <div className="space-y-3">
                    <p className="text-slate-300">
                        <span className="text-slate-500">Creator:</span> Md. Monerujamman Munna
                    </p>

                    <p className="flex items-center gap-2 text-slate-300 break-all">
                        <MdEmail className="text-sky-400" />
                        mdmonerujammanmunna@gmail.com
                    </p>

                    <div className="bg-slate-800 rounded-xl p-3 text-slate-200">
                        This prompt is very bad.
                    </div>
                </div>

                <div className="flex gap-3 mt-5">
                    <button className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-slate-600 py-3 text-slate-300 hover:bg-slate-700 transition">
                        <IoCheckmarkDoneOutline />
                        Dismiss
                    </button>

                    <button className="flex-1 py-2 rounded-xl bg-red-600 text-white hover:bg-red-700 transition flex items-center justify-center gap-2">
                        <RiDeleteBinLine />
                        Remove
                    </button>
                </div>
            </div>
        </>
    );
};

export default CardReport;