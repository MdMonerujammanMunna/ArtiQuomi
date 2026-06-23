
import PromptsTableAdmin from "@/components/Admin/AdminPrompts/PromptsTable";
import { getPrompts } from "@/lib/api/Prompts";



const MyPrompts = async () => {
    const userPrompts = await getPrompts();
    // console.log(userPrompts);
    return (
        <>
            <div className="mb-8 flex flex-col  items-start md:flex-row md:items-center justify-between gap-2">
                <h1 className="text-2xl font-bold text-white text-left ">
                    All Prompts
                </h1>
                <p>Total Prompts:-  {userPrompts.length}</p>
            </div>
            <div className="w-full  rounded-2xl bg-[#0b1220] shadow-sm px-5 py-10 text-center ">
                {
                    userPrompts.length !== 0 ?
                        <PromptsTableAdmin userPrompts={userPrompts} />
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