
import { Button, Table } from "@heroui/react";
import { IoMdCloseCircle } from "react-icons/io";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { AdminDeleteModal } from "./DeleteModal/ModalDelete";
import { getPrompts } from "@/lib/api/Prompts";
import ButtonSucess from "./ApporvedButton/ButtonSucess";
import ButtonRejected from "./RejectedButton/ButtonRejected";
const PromptsTableAdmin = ({ userPrompts }) => {
    return (
        <Table className="rounded-lg">
            <Table.ScrollContainer>
                <Table.Content aria-label="Team members" className="min-w-150 ">
                    <Table.Header className="">
                        <Table.Column isRowHeader>Title</Table.Column>
                        <Table.Column>status</Table.Column>
                        <Table.Column>category</Table.Column>
                        <Table.Column>Level</Table.Column>
                        <Table.Column>Other</Table.Column>
                    </Table.Header>
                    <Table.Body>
                        {userPrompts.map((prompt, index) => (
                            <Table.Row key={index}>
                                <Table.Cell className={"p-3 text-left"}>{prompt.title}</Table.Cell>
                                <Table.Cell className={"p-3 text-left"}>{prompt.status}</Table.Cell>
                                <Table.Cell className={"p-3 text-left"}>{prompt.category}</Table.Cell>
                                <Table.Cell className={"p-3 text-left"}>{prompt.difficultyLevel}</Table.Cell>
                                <Table.Cell className={"p-3"}>
                                    <div className="flex items-center gap-2">
                                        {prompt.status === "Approved"
                                            ?
                                            <div className="flex items-center gap-2">
                                                <ButtonRejected prompt={prompt} />
                                                <AdminDeleteModal prompt={prompt} />
                                            </div>
                                            :
                                            prompt.status !== "pending"
                                                ?
                                                <div className="flex items-center gap-2">
                                                    <ButtonSucess prompt={prompt} />
                                                    <AdminDeleteModal prompt={prompt} />
                                                </div>
                                                :
                                                <div className="flex items-center gap-2">
                                                    <ButtonRejected prompt={prompt} />
                                                    <ButtonSucess prompt={prompt} />
                                                    <AdminDeleteModal prompt={prompt} />
                                                </div>
                                        }
                                    </div>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Content>
            </Table.ScrollContainer>
        </Table >
    );
};

export default PromptsTableAdmin;