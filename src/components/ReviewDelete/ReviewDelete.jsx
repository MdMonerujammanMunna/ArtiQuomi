"use client";

import { DeleteReview } from "@/lib/api/Reviews";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const ReviewDelete = ({ prompt }) => {
    const router = useRouter();
    const ReviewDelete = async () => {
        const id = prompt._id;
        const ReviewDelete = await DeleteReview(id);
        toast.error("Review Deleted");
        router.refresh();
    }
    return (
        <div>
            <div className="flex items-center gap-1">
                <Button
                    onClick={ReviewDelete}
                    size="sm"
                    className="min-w-0 h-6 px-2 text-xs bg-red-600 text-white"
                >
                    <MdDelete />
                </Button>
            </div>
        </div>
    );
};

export default ReviewDelete;