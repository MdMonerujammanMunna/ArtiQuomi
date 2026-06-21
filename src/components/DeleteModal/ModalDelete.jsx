"use client";

import { deletePrompt } from "@/lib/api/Prompts";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { MdDelete } from "react-icons/md";

export function DeleteModal({ prompt }) {
    const router = useRouter();
    const handleDelete = async () => {
        const id = prompt._id;
        // console.log(id);
        const dataDelete = await deletePrompt(id);
        router.refresh();
    };
    return (
        <AlertDialog>
            <Button
                size="sm"
                className="min-w-0 h-6 px-2 text-xs bg-red-600 text-white"
            >
                <MdDelete />
            </Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container >
                    <AlertDialog.Dialog className="sm:max-w-100 bg-black text-white border-white border-2  shadow-xl">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading className="text-white">Delete project permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>{prompt.title}</strong> from your
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="secondary" className="text-black">
                                Cancel
                            </Button>
                            <Button onClick={handleDelete} variant="primary" className="text-black">
                                Delete Project
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog >
    );
}