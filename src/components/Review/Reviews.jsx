"use client"
import { authClient } from "@/lib/auth-client";
import { Button, TextArea } from "@heroui/react";
import { useState } from "react";
import ReviewCard from "./ReviewCard/ReviewCard";
import { toast } from "react-toastify";
import { postReview } from "@/lib/api/Reviews";

export default function ReviewSection({ id, reviews }) {
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


    return (
        <div className="my-10 p-6 rounded-2xl bg-[#0a0f1d] border border-white/10">

            {/* Title */}
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
    );
}