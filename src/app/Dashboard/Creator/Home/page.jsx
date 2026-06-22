import CreatorGrowth from '@/components/Chart/Creator/CreatorGrowth';
import CreatorTotal from '@/components/Chart/Creator/CreatorTotal';
import { Countdata } from '@/lib/api/Creator/Home';
import { getUserPrompts } from '@/lib/api/User';
import { auth } from '@/lib/auth';
import { Card } from '@heroui/react';
import { headers } from 'next/headers';
import { IoCopy, IoDocumentTextOutline } from 'react-icons/io5';
import { PiBookmarkSimpleFill } from 'react-icons/pi';

const HomeDashboard = async () => {
    const userSession = await auth.api.getSession({
        headers: await headers(),
    });
    const UserData = userSession.user.id;
    const userPrompts = await getUserPrompts(UserData);
    const PromptsLenght = userPrompts.length;
    const TotalCount = await Countdata(UserData)
    const copycount = TotalCount.copyCount
    const bookmarkcount = TotalCount.bookmarkCount

    // console.log(CreatorData)
    return (
        <div>
            <Card className='bg-black'>
                <div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-6 items-start my-8 px-10">
                        <div className="bg-[#111827] border border-slate-800 rounded-xl p-5 flex flex-col justify-between min-h-28">
                            <div className="flex flex-col gap-1">
                                <IoDocumentTextOutline className="text-emerald-400 text-2xl" />
                                <span className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mt-2">
                                    Prompts Published
                                </span>
                            </div>
                            <span className="text-3xl font-bold mt-2">{PromptsLenght}</span>
                        </div>
                        <div className="bg-[#111827] border border-slate-800 rounded-xl p-5 flex flex-col justify-between min-h-28">
                            <div className="flex flex-col gap-1">
                                <IoCopy className="text-emerald-400 text-2xl" />
                                <span className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mt-2">
                                    Copy Prompts
                                </span>
                            </div>
                            <span className="text-3xl font-bold mt-2">{copycount}</span>
                        </div>
                        <div className="bg-[#111827] border border-slate-800 rounded-xl p-5 flex flex-col justify-between min-h-28">
                            <div className="flex flex-col gap-1">
                                <PiBookmarkSimpleFill className="text-emerald-400 text-2xl" />
                                <span className="text-[11px] font-bold text-gray-400 tracking-wider uppercase mt-2">
                                    Saved Prompts
                                </span>
                            </div>
                            <span className="text-3xl font-bold mt-2">{bookmarkcount}</span>
                        </div>
                    </div>
                </div>
            </Card>

            <Card className='bg-black mt-10'>
                <CreatorTotal bookmarkcount={bookmarkcount} copycount={copycount} PromptsLenght={PromptsLenght} />
            </Card>

            <Card className='bg-black mt-10'>
                <CreatorGrowth bookmarkcount={bookmarkcount} copycount={copycount} PromptsLenght={PromptsLenght} />
            </Card>
        </div>
    );
};

export default HomeDashboard;