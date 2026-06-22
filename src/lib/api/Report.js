const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const ReportPrompt = async (prompt) => {
    // const token = await authClient.token()
    const response = await fetch(`${baseUrl}/user/reportPrompts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // "authorization": `Bearer ${token?.data?.token}`
        },
        body: JSON.stringify(prompt),
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message);
    }

    return data;
};