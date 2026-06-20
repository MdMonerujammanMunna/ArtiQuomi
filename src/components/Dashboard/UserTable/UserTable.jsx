import { MdDelete } from "react-icons/md";
import { MdOutlineEditNote } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";

import { Button, Table } from "@heroui/react";

export function TableUser({ userPrompts }) {
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
                                    <div className="flex items-center gap-1">
                                        <Button
                                            size="sm"
                                            className="min-w-0 h-6 px-2 text-xs bg-blue-600 text-white"
                                        >
                                            <IoEyeSharp />
                                        </Button>

                                        <Button
                                            size="sm"
                                            className="min-w-0 h-6 px-2 text-xs bg-emerald-600 text-white"
                                        >
                                            <MdOutlineEditNote />
                                        </Button>

                                        <Button
                                            size="sm"
                                            className="min-w-0 h-6 px-2 text-xs bg-red-600 text-white"
                                        >
                                            <MdDelete />
                                        </Button>
                                    </div>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Content>
            </Table.ScrollContainer>
        </Table>
    );
}