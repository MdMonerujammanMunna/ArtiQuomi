
import { UserReviewsTable } from "@/components/Dashboard/UserReviews/ReviewsTable";
import { getUserReviews } from "@/lib/api/User";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const ReviewPage = async () => {
    const userSession = await auth.api.getSession({
        headers: await headers(),
    });
    const UserData = userSession.user.id;
    const userReviews = await getUserReviews(UserData);
    return (
        <>
            <h1 className="text-2xl font-bold text-white text-left mb-8">
                My Reviews
            </h1>
            <div className="w-full  rounded-2xl bg-[#0b1220] shadow-sm px-5 py-10 text-center ">
                {
                    userReviews.length !== 0 ?
                        <UserReviewsTable userPrompts={userReviews} />
                        :
                        <div className="flex flex-col items-center px-4 py-10 ">
                            <div className="">
                                <span className="text-5xl p-4 bg-linear-to-r from-cyan-500 to-emerald-500 rounded-full">📦</span>
                            </div>
                            <div className="mt-10">
                                <h2 className="text-lg font-semibold text-white">
                                    No Reviews Yet
                                </h2>

                                <p className=" mt-2 text-sm">
                                    You have not created any reviews yet. Start by creating a review and get started with ArtiQuomi.
                                </p>
                            </div>

                        </div>
                }
            </div>
        </>
    );
};

export default ReviewPage;

