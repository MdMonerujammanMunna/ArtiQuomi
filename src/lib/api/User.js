const baseUrl = process.env.NEXT_PUBLIC_API_URL;

// user prompts api

export const getUserPrompts = async (id) => {
    const response = await fetch(`${baseUrl}/user/getUserPrompts/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    return data;
};

// user reviews api

export const getUserReviews = async (id) => {
    const response = await fetch(`${baseUrl}/user/getUserReviews/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    return data;
};
// user Save api

export const getUserSavePrompts = async (id) => {
    const response = await fetch(`${baseUrl}/user/getUserSavePrompts/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    return data;
};