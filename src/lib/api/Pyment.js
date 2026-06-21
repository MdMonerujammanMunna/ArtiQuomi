const baseUrl = process.env.NEXT_PUBLIC_API_URL;


export const UserPaymentsData = async (payment) => {
    const response = await fetch(`${baseUrl}/user/getPayments`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payment),
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message);
    }

    return data;
};