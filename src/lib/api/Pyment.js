import { authClient } from "../auth-client";


const baseUrl = process.env.NEXT_PUBLIC_API_URL;


export const UserPaymentsData = async (payment) => {
    // const token = await authClient.token()
    console.log(token);
    const response = await fetch(`${baseUrl}/user/getPayments`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // "authorization": `Bearer ${token?.data?.token}`
        },
        body: JSON.stringify(payment),
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message);
    }

    return data;
};