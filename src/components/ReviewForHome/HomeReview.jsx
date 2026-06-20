"use client";

import { Card, Avatar } from "@heroui/react";
import { FiStar } from "react-icons/fi";

export default function ReviewCard({ reviews }) {

    return (
        <>
            <div className=" text-white text-center mb-5">
                <h1 className=" mb-2 text-2xl font-bold">Community Reviews</h1>
                <p>Discover honest opinions and ratings from the community.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 px-10 py-8 gap-6">
                {reviews?.map((review, index) => (
                    <Card key={index} className="bg-[#0F172A] border border-[#1E293B] hover:border-emerald-500 transition-all duration-300 rounded-2xl">
                        <Card.Content className="p-2 space-y-4">

                            {/* User */}
                            <div className="flex items-center gap-4">
                                <Avatar
                                    src={review?.image}
                                    name={review?.name}
                                    size="lg"
                                />

                                <div>
                                    <h3 className="text-white font-semibold text-lg">
                                        {review?.name}
                                    </h3>

                                    <p className="text-sm text-gray-400">
                                        {review?.role}
                                    </p>
                                </div>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center gap-1">
                                {[...Array(review?.rating || 5)].map((_, i) => (
                                    <FiStar
                                        key={i}
                                        className="text-yellow-400 fill-yellow-400"
                                        size={18}
                                    />
                                ))}
                            </div>

                            {/* Review */}
                            <p className="text-gray-300 leading-7 text-sm">
                                {review?.message}
                            </p>

                            {/* Date */}
                            <p className="text-xs text-gray-500">
                                {review?.date}
                            </p>

                        </Card.Content>
                    </Card>
                ))}

            </div>
        </>
    );
}