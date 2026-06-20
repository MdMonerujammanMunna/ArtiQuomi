
import { TableUser } from "@/components/Dashboard/UserTable/UserTable";
import { getUserPrompts } from "@/lib/api/User";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";


const MyPrompts = async () => {
    const userSession = await auth.api.getSession({
        headers: await headers(),
    });
    const UserData = userSession.user.id;
    const userPrompts = await getUserPrompts(UserData);
    console.log(userPrompts);
    return (
        <>
            <h1 className="text-2xl font-bold text-white text-left mb-8">
                My Prompts
            </h1>
            <div className="w-full  rounded-2xl bg-[#0b1220] shadow-sm px-5 py-10 text-center ">
                {
                    userPrompts.length !== 0 ?
                        <TableUser userPrompts={userPrompts} />
                        :
                        <div className="flex flex-col items-center px-4 py-10 ">
                            <div className="">
                                <span className="text-5xl p-4 bg-linear-to-r from-cyan-500 to-emerald-500 rounded-full">📦</span>
                            </div>
                            <div className="mt-10">
                                <h2 className="text-lg font-semibold text-white">
                                    No Prompts Yet
                                </h2>

                                <p className=" mt-2 text-sm">
                                    You have not created any prompts yet. Start by creating a prompt and get started with ArtiQuomi.
                                </p>
                            </div>

                        </div>
                }
            </div>
        </>
    );
};

export default MyPrompts;