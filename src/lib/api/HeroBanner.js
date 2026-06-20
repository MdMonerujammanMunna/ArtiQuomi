const baseUrl = process.env.NEXT_PUBLIC_API_URL;

// get data:-  done
export const HerogetPrompts = async () => {
    const response = await fetch(`${baseUrl}/user/heroPrompts`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message);
    }

    return data;
};