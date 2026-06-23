
import { Button, Table } from "@heroui/react";
import { AdminDeleteModal } from "../AdminPrompts/DeleteModal/ModalDelete";
import PaymentDelete from "./DelectPayment/PaymentDelete";
const PaymentTable = ({ userPrompts }) => {
    return (
        <Table className="rounded-lg">
            <Table.ScrollContainer>
                <Table.Content aria-label="Team members" className="min-w-150 ">
                    <Table.Header className="">
                        <Table.Column isRowHeader>Customer Email</Table.Column>
                        <Table.Column>Customer Id</Table.Column>
                        <Table.Column>Price</Table.Column>
                        <Table.Column>Delete</Table.Column>
                        {/* <Table.Column>Level</Table.Column>
                        <Table.Column>Other</Table.Column> */}
                    </Table.Header>
                    <Table.Body>
                        {userPrompts.map((prompt, index) => (
                            <Table.Row key={index}>
                                <Table.Cell className={"p-3 text-left"}>{prompt.customer_email}</Table.Cell>
                                <Table.Cell className={"p-3 text-left"}>{prompt.customer_id}</Table.Cell>
                                <Table.Cell className={"p-3 text-left"}>$15</Table.Cell>
                                <Table.Cell className={"p-3"}>
                                    <div className="flex items-center gap-2">
                                        <PaymentDelete prompt={prompt} />
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

export default PaymentTable;