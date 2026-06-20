const baseUrl = process.env.NEXT_PUBLIC_API_URL;

// user prompts api

export const getUserPrompts = async () => {
    const response = await fetch(`${baseUrl}/user/heroPrompts`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    return data;
};