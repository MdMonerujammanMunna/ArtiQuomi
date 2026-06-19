const baseUrl = process.env.NEXT_PUBLIC_API_URL;

// get data:-
export const getPrompts = async () => {
    const response = await fetch(`${baseUrl}/user/getPrompts`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message);
    }

    return data;
};
// get data by id:-
export const getPromptById = async (id) => {
    const response = await fetch(`${baseUrl}/api/prompts/${id}`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message);
    }

    return data;
};
// Post data on database:- done
export const createPrompt = async (prompt) => {
    const response = await fetch(`${baseUrl}/user/addPrompts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(prompt),
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message);
    }

    return data;
};
// Update data on database:-
export const updatePrompt = async (prompt) => {
    const response = await fetch(`${baseUrl}/api/prompts`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(prompt),
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message);
    }

    return data;
};
// Delete data on database:-
export const deletePrompt = async (id) => {
    const response = await fetch(`${baseUrl}/api/prompts/${id}`, {
        method: "DELETE",
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message);
    }

    return data;
};