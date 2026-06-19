export const uploadImage = async (image) => {
    if (!image) {
        throw new Error("No image selected");
    }

    const formData = new FormData();
    formData.append("image", image);

    const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_KEY}`,
        {
            method: "POST",
            body: formData,
        }
    );

    const data = await response.json();

    if (!response.ok || !data.success) {
        console.error(data);
        throw new Error(data.error?.message || "Image upload failed");
    }

    return data.data.url;
};