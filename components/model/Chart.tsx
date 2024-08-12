import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface timestamp {
    time: string;
    score: number;
}

interface timestamps { 
    data: timestamp[];
}

const TimeSeriesChart: React.FC<timestamps> = ({ data }) => {
    const maxTicks = 10;
    const interval = Math.ceil(10 / maxTicks);

    return (
        <LineChart width={500} height={300} data={data}>
            <XAxis dataKey="time" interval={interval - 1} tick={false} axisLine={true} />
            <YAxis domain={[0, 100]} tickCount={11} interval="preserveStartEnd" />
            <Tooltip 
                contentStyle={{ backgroundColor: '#000000', borderColor: '#333' }} 
                itemStyle={{ color: '#ffffff' }} 
            />
            <Line dataKey="value" stroke="#ffffff" dot={true} />
        </LineChart>
    );
};

export default TimeSeriesChart;