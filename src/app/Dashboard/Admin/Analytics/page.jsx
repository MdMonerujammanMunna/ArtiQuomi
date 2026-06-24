import AdminTotalChart from '@/components/Admin/ChartTotal/AdminChart';
import { getAdminAnalisy } from '@/lib/api/Admin/Analisy';
import { getAllUsers } from '@/lib/api/Admin/Users';
import { Card } from '@heroui/react';
import { FaMessage, FaUser } from 'react-icons/fa6';
import { IoCopy, IoDocumentTextOutline } from 'react-icons/io5';

const AdmintAnalytics = async () => {
    const userPrompts = await getAllUsers();
    const analisyData = await getAdminAnalisy();

    // Count Data
    const TotalUser = userPrompts.length
    const TotalCopy = analisyData.copyCount
    const TotalReviews = analisyData.totalReviews
    const TotalPrompts = analisyData.totalPrompts
    return (
        <>
            <Card className='bg-black'>
                <div>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-full gap-6 items-start my-8 px-10">
                        <div className="bg-[#111827] border border-slate-800 rounded-xl p-5 flex flex-col justify-between min-h-28">
                            <div className="flex flex-col gap-1">
                                <IoDocumentTextOutline className="text-emerald-400 text-2xl" />
                                <span className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mt-2">
                                    Prompts Published
                                </span>
                            </div>
                            <span className="text-3xl font-bold mt-2">{TotalPrompts}</span>
                        </div>
                        <div className="bg-[#111827] border border-slate-800 rounded-xl p-5 flex flex-col justify-between min-h-28">
                            <div className="flex flex-col gap-1">
                                <IoCopy className="text-emerald-400 text-2xl" />
                                <span className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mt-2">
                                    Copy Prompts
                                </span>
                            </div>
                            <span className="text-3xl font-bold mt-2">{TotalCopy}</span>
                        </div>
                        <div className="bg-[#111827] border border-slate-800 rounded-xl p-5 flex flex-col justify-between min-h-28">
                            <div className="flex flex-col gap-1">
                                <FaUser className="text-emerald-400 text-2xl" />
                                <span className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mt-2">
                                    Total Users
                                </span>
                            </div>
                            <span className="text-3xl font-bold mt-2">{userPrompts.length}</span>
                        </div>
                        <div className="bg-[#111827] border border-slate-800 rounded-xl p-5 flex flex-col justify-between min-h-28">
                            <div className="flex flex-col gap-1">
                                <FaMessage className="text-emerald-400 text-2xl" />
                                <span className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mt-2">
                                    Total Reviews
                                </span>
                            </div>
                            <span className="text-3xl font-bold mt-2">{TotalReviews}</span>
                        </div>
                    </div>
                </div>
            </Card>

            <Card className='bg-black mt-10'>
                <AdminTotalChart TotalUser={TotalUser} TotalCopy={TotalCopy} TotalPrompts={TotalPrompts} TotalReviews={TotalReviews} />
            </Card>
        </>
    );
};

export default AdmintAnalytics;