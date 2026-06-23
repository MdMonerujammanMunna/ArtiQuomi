"use client"
import { ApprovedUpdatePrompt } from '@/lib/api/Admin/Prompts';
import { Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { IoMdCloseCircle } from 'react-icons/io';
import { toast } from 'react-toastify';

const ButtonRejected = ({ prompt }) => {
    const router = useRouter();
    // console.log(prompt);
    const UpdateOneClick = async (id, on) => {
        const Upadedata = ApprovedUpdatePrompt(id, on)
        toast.warning("Prompt Rejected successfully");
        router.refresh();
    }
    return (
        <div>
            <Button
                size="sm"
                onClick={() => { UpdateOneClick((prompt._id), "Rejected") }}
                className="min-w-0 h-6 px-2 text-xs bg-rose-700 text-white"
            >
                <IoMdCloseCircle />
            </Button>
        </div>
    );
};

export default ButtonRejected;