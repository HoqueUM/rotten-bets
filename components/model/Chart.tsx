import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, TooltipProps } from 'recharts';

interface timestamp {
    time: string;
    score: number;
}

interface timestamps { 
    data: timestamp[];
}

const CustomTooltip: React.FC<TooltipProps<number, string>> = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-black text-white p-2 border border-gray-700">
                <p>{`Score: ${payload[0].value}`}</p>
            </div>
        );
    }

    return null;
};

const TimeSeriesChart: React.FC<timestamps> = ({ data }) => {
    const maxTicks = 10;
    const interval = Math.ceil(10 / maxTicks);

    return (
        <div className="absolute w-full h-64 sm:h-96 lg:w-[500px] lg:h-[300px] mx-auto">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <XAxis dataKey="time" interval={interval - 1} tick={false} />
                    <YAxis domain={[0, 100]} tickCount={11} interval="preserveStartEnd" />
                    <Tooltip content={<CustomTooltip />} />
                    <Line dataKey="score" stroke="#ffffff" dot={true} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default TimeSeriesChart;