
const baseUrl = process.env.NEXT_PUBLIC_API_URL;

// get data:-  done
export const getAllUsers = async () => {
    const response = await fetch(`${baseUrl}/Admin/getAllUsers`, {
        cache: "no-store",
    });
    const data = await response.json();
    // console.log(data);
    if (!response.ok) {
        throw new Error(data.message);
    }

    return data;
};

export const AdmindeleteUser = async (id) => {
    // console.log(id);
    // const token = await authClient.token()
    const response = await fetch(`${baseUrl}/Admin/DeleteUser`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            // authorization: `Bearer ${token?.data?.token}`
        },
        body: JSON.stringify({ id }),
    });
    return response.json();
};
// update user role -done
export const AdminUpdateUser = async (id, role) => {
    const response = await fetch(`${baseUrl}/Admin/UpdateUser`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, role }),
    });
    return response.json();
};