"use client";

import { ReportPrompt } from "@/lib/api/Report";
import { authClient } from "@/lib/auth-client";
// import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { FaLayerGroup } from "react-icons/fa6";
import { toast } from "react-toastify";

export function ReportUserModal({ data }) {
    const userData = authClient.useSession();
    const userLoginId = userData?.data?.user.id;
    const userLoginemail = userData?.data?.user.email;
    // console.log(userLoginemail);

    const ReportModalClick = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const FromuserData = Object.fromEntries(formData.entries());

        const ReportDataForMongoDb = {
            CreatorId: data?.UserId,
            CreatorName: data?.UserName,
            reporterId: userLoginId,
            reportEmail: FromuserData?.email,
            reprotmsg: FromuserData?.message
        }
        // console.log(ReportDataForMongoDb);
        const ReportData = await ReportPrompt(ReportDataForMongoDb);
        toast.success("Report Submitted! Thank you for your feedback!");

    };

    const customInputClass = "text-xs border-emerald-500 w-full bg-transparent border text-white p-2.5 rounded-md outline-none transition-all duration-200 focus:border-cyan-500";
    return (
        <Modal>
            <Button
                size="sm"
                variant="flat"
                className={`font-bold text-xs rounded-full transition-all bg-[#10b981]/20 text-emerald-500" "
                                                            }`}
            >
                <FaLayerGroup className="text-emerald-500" />
            </Button>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md bg-black border border-emerald-500">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Heading className="text-emerald-500 text-center font-black">Report Prompt</Modal.Heading>
                        </Modal.Header>
                        <form className="" onSubmit={ReportModalClick}>
                            <Modal.Body className="p-6 space-y-5">

                                <div className="">
                                    <label className="text-xs font-medium text-zinc-300 mb-1.5 flex items-center gap-1.5">
                                        Email
                                    </label>
                                    <input defaultValue={userLoginemail} type="email" name="email" placeholder="Enter your email" className={`${customInputClass} font-mono`} />
                                </div>
                                <div className="">
                                    <label className=" text-xs font-medium text-zinc-300 mb-1.5 flex items-center gap-1.5">
                                        Message
                                    </label>
                                    <textarea required name="message" placeholder="Enter your message" className={`${customInputClass} font-mono`} />
                                </div>
                                <Modal.Footer>
                                    <Button slot="close" className="bg-emerald-500">
                                        Cancel
                                    </Button>
                                    <Button type="submit" slot="close" variant="danger">Report</Button>
                                </Modal.Footer>
                            </Modal.Body>
                        </form>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}