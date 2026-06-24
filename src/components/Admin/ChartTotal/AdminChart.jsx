"use client";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";


const AdminTotalChart = ({ TotalUser, TotalCopy, TotalReviews, TotalPrompts }) => {
    // console.log(bookmarkcount, copycount, PromptsLenght)
    const data = [
        {
            name: 'Total Users',
            uv: TotalUser,
            pv: TotalUser,
            fill: "#10B981"
        },
        {
            name: 'Total Reviews',
            uv: TotalReviews,
            pv: TotalReviews,
            fill: "#10B981"
        },
        {
            name: 'Total Copy',
            uv: TotalCopy,
            pv: TotalCopy,
            fill: "#8B5CF6"
        },
        {
            name: 'Approved Prompts',
            uv: TotalPrompts,
            pv: TotalPrompts,
            fill: "#3B82F6"
        },
    ];
    return (
        <BarChart
            style={{ width: '100%', maxHeight: '200px', aspectRatio: 1.618 }}
            responsive
            data={data}
            margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" style={{ fontSize: "10px", fontweight: "bold" }} />
            <YAxis width="auto" />
            <Bar dataKey="pv" fill="fill" radius={[10, 10, 0, 0]} />
        </BarChart>
    );
};

export default AdminTotalChart;