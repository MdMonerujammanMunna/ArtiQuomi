const baseUrl = process.env.NEXT_PUBLIC_API_URL;
// Post review on database:- done
export const postReview = async (review) => {
    const response = await fetch(`${baseUrl}/user/addReview`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(review),
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message);
    }

    return data;
};


// Get reviews by path id:-
export const getReviewsByPathId = async (id) => {
    const response = await fetch(`${baseUrl}/user/getReviewsByPathId/${id}`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message);
    }

    return data;
};
