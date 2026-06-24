const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const getAdminAnalisy = async () => {
    const response = await fetch(`${baseUrl}/stats/Admin`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message);
    }

    return data;
};