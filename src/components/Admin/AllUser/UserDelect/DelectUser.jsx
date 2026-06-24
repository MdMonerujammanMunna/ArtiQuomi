"use client";
import { AdmindeleteUser } from '@/lib/api/Admin/Users';
import { Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';

const DeleteUser = ({ prompt }) => {
    const router = useRouter();
    const handleDelete = async () => {
        // console.log(prompt);
        const id = prompt._id;
        // console.log(id);
        const dataDelete = await AdmindeleteUser(id);
        toast.error("Payment deleted successfully");
        router.refresh();
    };
    return (
        <div>
            <Button
                size="sm"
                onClick={handleDelete}
                className="min-w-0 h-6 px-2 text-xs bg-red-600 text-white"
            >
                <MdDelete />
            </Button>
        </div>
    );
};

export default DeleteUser;