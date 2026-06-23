"use client"
import { ApprovedUpdatePrompt } from '@/lib/api/Admin/Prompts';
import { Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { IoCheckmarkDoneCircle } from 'react-icons/io5';
import { toast } from 'react-toastify';

const ButtonSucess = ({ prompt }) => {
    const router = useRouter();
    // console.log(prompt);
    const UpdateOneClick = async (id, on) => {
        const Upadedata = ApprovedUpdatePrompt(id, on)
        toast.success("Prompt Approved successfully");
        router.refresh();
    }
    return (
        <div>
            <Button
                onClick={() => { UpdateOneClick((prompt._id), "Approved") }}
                size="sm"
                className="min-w-0 h-6 px-2 text-xs bg-success text-white"
            >
                <IoCheckmarkDoneCircle />
            </Button>
        </div>
    );
};

export default ButtonSucess;