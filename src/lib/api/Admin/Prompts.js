// import { authClient } from "@/lib/auth-client";
const baseUrl = process.env.NEXT_PUBLIC_API_URL;
export const AdmindeletePrompt = async (id) => {
    console.log(id);
    // const token = await authClient.token()
    const response = await fetch(`${baseUrl}/Admin/DelectDatbase`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            // authorization: `Bearer ${token?.data?.token}`
        },
        body: JSON.stringify({ id }),
    });
    return response.json();
};

export const ApprovedUpdatePrompt = async (id, on) => {
    const data = {
        srcId: id,
        status: on
    };
    const response = await fetch(`${baseUrl}/Admin/UpdatePrompt`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            // authorization: `Bearer ${token?.data?.token}`
        },
        body: JSON.stringify(data)
    });
    return response.json();
}