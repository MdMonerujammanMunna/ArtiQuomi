import { Avatar } from "@heroui/react";
import { FaStar } from "react-icons/fa";
import { FiClock } from "react-icons/fi";

export default function ReviewCard({ review }) {
    return (
        <div className="rounded-2xl border border-white/10 bg-[#0a0f1d] p-5 hover:border-cyan-500/30 transition-all duration-300">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Avatar className="border-2 border-emerald-500">
                        <Avatar.Image alt={review?.name} src={review?.image} size="md" />
                    </Avatar>

                    <div>
                        <h3 className="text-white font-semibold">
                            {review?.name}
                        </h3>

                        <div className="flex items-center gap-1 text-xs text-gray-400">
                            <span>{review?.email}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Review */}
            <p className="mt-4 text-gray-300 leading-7">
                {review?.message}
            </p>
        </div>
    );
}