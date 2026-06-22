const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const Countdata = async (userId) => {
    // const token = await authClient.token()
    const response = await fetch(`${baseUrl}/stats`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // "authorization": `Bearer ${token?.data?.token}`
        },
        body: JSON.stringify({ userId }),
    });
    const data = await response.json();
    // console.log(data)
    if (!response.ok) {
        throw new Error(data.message);
    }

    return data;
};