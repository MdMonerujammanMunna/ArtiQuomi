
import { Button, Table } from "@heroui/react";
import { IoMdCloseCircle } from "react-icons/io";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { AdminDeleteModal } from "./DeleteModal/ModalDelete";
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
                                        {prompt.status === "approved"
                                            ?
                                            <div className="flex items-center gap-2">
                                                <Button
                                                    size="sm"
                                                    className="min-w-0 h-6 px-2 text-xs bg-rose-700 text-white"
                                                >
                                                    <IoMdCloseCircle />
                                                </Button>
                                                <AdminDeleteModal prompt={prompt} />
                                            </div>
                                            :
                                            prompt.status === "Rejected"
                                                ?
                                                <div className="flex items-center gap-2">
                                                    <Button
                                                        size="sm"
                                                        className="min-w-0 h-6 px-2 text-xs bg-success text-white"
                                                    >
                                                        <IoCheckmarkDoneCircle />
                                                    </Button>
                                                    <AdminDeleteModal prompt={prompt} />
                                                </div>
                                                :
                                                <div className="flex items-center gap-2">
                                                    <Button
                                                        size="sm"
                                                        className="min-w-0 h-6 px-2 text-xs bg-rose-700 text-white"
                                                    >
                                                        <IoMdCloseCircle />
                                                    </Button>
                                                    <Button
                                                        size="sm"
                                                        className="min-w-0 h-6 px-2 text-xs bg-success text-white"
                                                    >
                                                        <IoCheckmarkDoneCircle />
                                                    </Button>
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
        </Table>
    );
};

export default PromptsTableAdmin;