const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const ReportPrompt = async () => {
    const response = await fetch(`${baseUrl}/user/getReports`)
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message);
    }

    return data;
    // console.log(data);
}

// Delete data on database:-
export const AdmindeleteReport = async (id) => {
    // console.log(id);
    const response = await fetch(`${baseUrl}/Admin/deletedReports`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
    });
    return response.json();
}
