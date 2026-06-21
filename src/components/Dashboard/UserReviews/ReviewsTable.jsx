import { MdDelete } from "react-icons/md";
import { MdOutlineEditNote } from "react-icons/md";


import { Button, Table } from "@heroui/react";
import ReviewDelete from "@/components/ReviewDelete/ReviewDelete";

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
                                    <ReviewDelete prompt={prompt} />
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Content>
            </Table.ScrollContainer>
        </Table>
    );
}