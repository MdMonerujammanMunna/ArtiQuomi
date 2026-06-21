"use client";
import { DeleteSavePrompts } from '@/lib/api/Save';
import { Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';

const SaveDelete = ({ prompt }) => {
    const router = useRouter();
    const SaveDelete = async () => {
        const id = prompt._id;
        const savedelete = await DeleteSavePrompts(id);
        toast.error("Saved Prompt Deleted");
        router.refresh();
    }
    return (
        <div>
            <Button
                onClick={SaveDelete}
                size="sm"
                className="min-w-0 h-6 px-2 text-xs bg-red-600 text-white"
            >
                <MdDelete />
            </Button>
        </div>
    );
};

export default SaveDelete;