"use client"
import { authClient } from "@/lib/auth-client";
import { Button, TextArea } from "@heroui/react";
import { useState } from "react";
import ReviewCard from "./ReviewCard/ReviewCard";
import { toast } from "react-toastify";
import { postReview } from "@/lib/api/Reviews";

export default function ReviewSection({ id, reviews, ProUser }) {
    const proUserOnly = ProUser;
    const getReviews = reviews;
    const [text, setText] = useState("");

    const userData = authClient.useSession();
    const user = userData?.data?.user;
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!text.trim()) return;

        const newReview = {
            ...user,
            PathId: id,
            message: text,
        };
        const PostReview = await postReview(newReview);
        toast.success("Review Submitted!");
        // setReviews([newReview, ...reviews]);
        setText("");
    };
    const isBlocked = user?.plan === "free" && proUserOnly === "Private";

    return (
        <div className="my-10 p-6 rounded-2xl bg-[#0a0f1d] border border-white/10">
            {isBlocked ?
                <div className="text-center p-5">
                    <h1 className="text-2xl mb-3 bg-linear-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent uppercase font-semibold">This prompt is private. You do not review this prompt</h1>
                    <p>Please subscribe to unlock this prompt and review it</p>
                </div>
                :
                <div className="">
                    <h2 className="text-xl font-bold text-white mb-4">
                        ⭐ Give us a review
                    </h2>

                    {/* FORM */}
                    <form onSubmit={handleSubmit} className="space-y-3">

                        <TextArea
                            placeholder="Write your review..."
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            className="text-white bg-black border border-white w-full p-4"
                        />

                        <Button
                            type="submit"
                            className="bg-linear-to-r from-cyan-500 to-emerald-500 text-white font-semibold"
                        >
                            Submit Review
                        </Button>

                    </form>

                    {/* Review List */}
                    <div className="mt-6 space-y-3 py-10">
                        {getReviews.length === 0 ? (
                            <p className="text-gray-400 font-semibold flex items-center justify-center">
                                No reviews yet. Be the first one!
                            </p>
                        ) :
                            <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-3 ">
                                {
                                    getReviews.map((r, index) => (
                                        <div key={index} className="">
                                            <ReviewCard review={r} />
                                        </div>
                                    ))
                                }
                            </div>
                        }
                    </div>
                </div>
            }

        </div>
    );
}
