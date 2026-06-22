"use client";
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, Scatter, Tooltip, XAxis, YAxis } from "recharts";



const CreatorGrowth = ({ bookmarkcount, copycount, PromptsLenght }) => {
    const data = [
        {
            name: 'Bookmarked',
            uv: 15,
            pv: bookmarkcount,
            amt: PromptsLenght,
            fill: "#10B981"
        },
        {
            name: 'Copied',
            uv: 5,
            pv: copycount,
            amt: bookmarkcount,
            fill: "#8B5CF6"
        },
        {
            name: 'Prompts',
            uv: 10,
            pv: PromptsLenght,
            amt: copycount,
            fill: "#3B82F6"
        },
    ];
    return (
        <ComposedChart
            style={{ width: '100%', maxHeight: '200px', aspectRatio: 1.618 }}
            responsive
            data={data}
            margin={{
                top: 20,
                right: 0,
                bottom: 0,
                left: 0,
            }}
        >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" />
            <YAxis width="auto" niceTicks="snap125" />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="uv" fill="#10B981" stroke="#8884d8" />
            <Area type="monotone" dataKey="pv" fill="#8B5CF6" stroke="#8884d8" />
            <Area type="monotone" dataKey="amt" fill="#3B82F6" stroke="#8884d8" />
        </ComposedChart>
    );
};

export default CreatorGrowth;