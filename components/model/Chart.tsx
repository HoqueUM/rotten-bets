import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

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
        <div className="fixed w-full h-64 sm:h-96 lg:w-[500px] lg:h-[300px] mx-auto">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <XAxis dataKey="time" interval={interval - 1} />
                    <YAxis domain={[0, 100]} tickCount={11} interval="preserveStartEnd" />
                    <Tooltip 
                        contentStyle={{ backgroundColor: '#000000', borderColor: '#333' }} 
                        itemStyle={{ color: '#ffffff' }} 
                    />
                    <Line dataKey="score" stroke="#ffffff" dot={true} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default TimeSeriesChart;