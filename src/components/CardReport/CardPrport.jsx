"use client";
import { MdOutlineReport, MdEmail } from "react-icons/md";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";
import { AdmindeleteReport } from "@/lib/api/Admin/Report";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const CardReport = ({ ReportData }) => {
    const router = useRouter();
    const HandeleDeleted = async (id) => {
        const data = await AdmindeleteReport(id);
        toast.error("Report Deleted Successfully");
        router.refresh()
    }
    const HandeleDismiss = async () => {
        toast.success("Report Dismissed Successfully");
        router.refresh()
    }

    return (
        <>{ReportData.map((data, index) =>

            <div key={index} className="bg-slate-900 border border-slate-700 rounded-2xl p-5 max-w-lg">
                <div className="flex items-center gap-2 mb-4">
                    <MdOutlineReport className="text-red-500 text-xl" />
                    <h2 className="text-white font-semibold">Report Details</h2>
                </div>

                <div className="space-y-3">
                    <p className="text-slate-300">
                        <span >Creator Name:-</span> {data.CreatorName}
                        <br />
                        <span>Creator Id:-</span> {data.CreatorId}
                    </p>

                    <div className="">
                        <p className="flex items-center gap-2 text-slate-300 break-all">
                            Reported Email:- {data.reportEmail}
                        </p>
                    </div>

                    <div className="bg-slate-800 rounded-xl p-3 text-slate-200">
                        {data.reprotmsg}
                    </div>
                </div>

                <div className="flex gap-3 mt-5">
                    <button onClick={HandeleDismiss} className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-slate-600 py-3 text-slate-300 hover:bg-slate-700 transition">
                        <IoCheckmarkDoneOutline />
                        Dismiss
                    </button>

                    <button onClick={() => HandeleDeleted(data._id)} className="flex-1 py-2 rounded-xl bg-red-600 text-white hover:bg-red-700 transition flex items-center justify-center gap-2">
                        <RiDeleteBinLine />
                        Remove
                    </button>
                </div>
            </div>



        )}

        </>
    );
};

export default CardReport;