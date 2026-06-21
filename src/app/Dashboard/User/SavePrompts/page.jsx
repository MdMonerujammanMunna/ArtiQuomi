import { getUserSavePrompts } from '@/lib/api/User';
import { auth } from '@/lib/auth';
import { Button } from '@heroui/react';
import { headers } from 'next/headers';
import React from 'react';
import { FiCheck } from 'react-icons/fi';
import { IoEyeSharp } from 'react-icons/io5';
import { MdDelete, MdOutlineEditNote } from 'react-icons/md';

const SavePrompts = async () => {

    const userSession = await auth.api.getSession({
        headers: await headers(),
    });
    const UserData = userSession.user.id;
    const userSave = await getUserSavePrompts(UserData);
    return (
        <>
            <h1 className="text-2xl font-bold text-white text-left mb-8">
                My Save Prompts
            </h1>

            {userSave.length !== 0 ? userSave.map((prompt, index) => (
                <div key={index} className="bg-[#111827] rounded-lg p-4 mb-5">
                    <div className="flex items-center justify-between gap-5">
                        <p className="text-white font-semibold">{prompt.title}</p>
                        <div className="flex items-center gap-2">

                            <Button
                                size="sm"
                                className="min-w-0 h-6 px-2 text-xs bg-emerald-600 text-white"
                            >
                                <MdOutlineEditNote />
                            </Button>

                            <Button
                                size="sm"
                                className="min-w-0 h-6 px-2 text-xs bg-red-600 text-white"
                            >
                                <MdDelete />
                            </Button>
                        </div>
                    </div>

                    <code className="block mt-5 text-gray-300 p-4  bg-black rounded-lg">
                        {prompt.content}
                    </code>
                </div>
            )) :

                < div className="flex flex-col items-center px-4 py-10 " >
                    <div className="w-full  rounded-2xl bg-[#0b1220] shadow-sm px-2 py-10 text-center ">
                        <div className="">
                            <span className="text-5xl p-4 bg-linear-to-r from-cyan-500 to-emerald-500 rounded-full">📦</span>
                        </div>
                        <div className="mt-10">
                            <h2 className="text-lg font-semibold text-white">
                                No Saved Prompts Yet
                            </h2>

                            <p className=" mt-2 text-sm">
                                You have not saved any prompts yet. Start by creating a prompt and get started with ArtiQuomi.
                            </p>
                        </div>

                    </div>
                </div >
            }
        </>
    );
};

export default SavePrompts;