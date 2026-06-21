const baseUrl = process.env.NEXT_PUBLIC_API_URL;
// Save data on database:-
export const PostSavePrompts = async (SaveData) => {
    const response = await fetch(`${baseUrl}/user/saveBookMark`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(SaveData),
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message);
    }

    return data;
};

// Save data delete on database:-
export const DeleteSavePrompts = async (id) => {
    const response = await fetch(`${baseUrl}/user/deleteSaveBookMark`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
    });
    return response.json();
};