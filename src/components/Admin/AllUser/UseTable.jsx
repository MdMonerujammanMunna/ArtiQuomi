
import { Button, Table } from "@heroui/react";
import DeleteUser from "./UserDelect/DelectUser";
import RoleChange from "./Role/RoleChange";
const AllUserTable = ({ userPrompts }) => {
    return (
        <Table className="rounded-lg">
            <Table.ScrollContainer>
                <Table.Content aria-label="Team members" className="min-w-150 ">
                    <Table.Header className="">
                        <Table.Column isRowHeader>Name</Table.Column>
                        <Table.Column>Email</Table.Column>
                        <Table.Column>Role</Table.Column>
                        <Table.Column>Plan</Table.Column>
                        <Table.Column>Delete</Table.Column>
                    </Table.Header>
                    <Table.Body>
                        {userPrompts.map((prompt, index) => (
                            <Table.Row key={index}>
                                <Table.Cell className={"p-3 text-left"}>{prompt.name}</Table.Cell>
                                <Table.Cell className={"p-3 text-left"}>{prompt.email}</Table.Cell>
                                <Table.Cell className={"p-3 text-left"}><RoleChange prompt={prompt} /></Table.Cell>
                                <Table.Cell className={"p-3 text-left"}>{prompt.plan}</Table.Cell>
                                <Table.Cell className={"p-3"}>
                                    <div className="flex items-center gap-2">
                                        <DeleteUser prompt={prompt} />
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

export default AllUserTable;