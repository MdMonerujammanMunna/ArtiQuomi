const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const copyPrompt = async (id) => {
    const response = await fetch(`${baseUrl}/user/copyCount/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message);
    }
    return data;
};

export { copyPrompt };
// 

export const SavePrompts = async (id) => {
    const response = await fetch(`${baseUrl}/user/saveCount/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message);
    }
    return data;
};
