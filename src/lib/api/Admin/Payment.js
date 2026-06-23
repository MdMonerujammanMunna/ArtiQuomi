const baseUrl = process.env.NEXT_PUBLIC_API_URL;
// get data:-  done
export const GetPayment = async () => {
    const response = await fetch(`${baseUrl}/user/getPayments`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message);
    }

    return data;
};
// Delete data on database:- 
export const AdmindeletePayment = async (id) => {
    console.log(id);
    // const token = await authClient.token()
    const response = await fetch(`${baseUrl}/Admin/DelectePaymet`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            // authorization: `Bearer ${token?.data?.token}`
        },
        body: JSON.stringify({ id }),
    });
    return response.json();
};