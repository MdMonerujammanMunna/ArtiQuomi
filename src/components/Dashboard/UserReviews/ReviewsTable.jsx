import { MdDelete } from "react-icons/md";
import { MdOutlineEditNote } from "react-icons/md";


import { Button, Table } from "@heroui/react";

export function UserReviewsTable({ userPrompts }) {
    const use = userPrompts;
    // console.log(use);
    return (
        <Table className="rounded-lg">
            <Table.ScrollContainer>
                <Table.Content aria-label="Team members" className="min-w-150 ">
                    <Table.Header className="">
                        <Table.Column isRowHeader>Name</Table.Column>
                        <Table.Column>Email</Table.Column>
                        <Table.Column>Message</Table.Column>
                        <Table.Column>last 3 digit</Table.Column>
                        <Table.Column>Action</Table.Column>
                    </Table.Header>
                    <Table.Body>
                        {userPrompts.map((prompt, index) => (
                            <Table.Row key={index}>
                                <Table.Cell className={"p-3 text-left"}>{prompt.name}</Table.Cell>
                                <Table.Cell className={"p-3 text-left"}>{prompt.email}</Table.Cell>
                                <Table.Cell className={"p-3 text-left"}>{prompt.message}</Table.Cell>
                                <Table.Cell className={"p-3 text-left"}>{prompt.PathId.slice(-3)}</Table.Cell>
                                <Table.Cell className={"p-3 text-left"}>
                                    <div className="flex items-center gap-1">
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