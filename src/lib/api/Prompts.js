import { authClient } from "../auth-client";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

// get data:-  done
export const getPrompts = async () => {
    const response = await fetch(`${baseUrl}/user/getPrompts`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message);
    }

    return data;
};
// get data by id:-done
export const getPromptById = async (id) => {
    const response = await fetch(`${baseUrl}/user/getPromptsByUserId/${id}`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message);
    }

    return data;
};
// Post data on database:- done
export const createPrompt = async (prompt) => {
    const token = await authClient.token()
    const response = await fetch(`${baseUrl}/user/addPrompts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${token?.data?.token}`
        },
        body: JSON.stringify(prompt),
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message);
    }

    return data;
};

// Update data on database:- done
export const updatePrompt = async (prompt) => {
    const response = await fetch(`${baseUrl}/api/prompts`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(prompt),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Update failed");
    }

    return data;
};
// Delete data on database:- done
export const deletePrompt = async (id) => {
    const token = await authClient.token()
    const response = await fetch(`${baseUrl}/prompts/Delect`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token?.data?.token}`
        },
        body: JSON.stringify({ id }),
    });
    return response.json();
};