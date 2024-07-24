"use client";
import React, { useEffect, useState } from 'react';
import ItemCard from '@/components/model/ItemCard';

async function getProps() {
    const url = `https://rotten-bets-backend.onrender.com/scores`;
    console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

export default function FormatOutput() {
    type Movie = {
        id: number;
        title: string;
        image: string;
        percent: string;
    }
    const [data, setData] = useState<Movie[]>([]);
    const [timer, setTimer] = useState(120); 

    useEffect(() => {
        const fetchData = async () => {
            const data = await getProps();
            setData(data);
        };
        fetchData();
        const interval = setInterval(fetchData, 120000); 
        return () => clearInterval(interval); 
    }, []);

    useEffect(() => {
        const countdown = setInterval(() => {
            setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 120));
        }, 1000);
        return () => clearInterval(countdown); 
    }, []);

    return (
        <div>
            <div>Next update in: {timer} seconds</div>
            {data.map((data) => (
                <ItemCard key={data.id} image={data.image} title={data.title} score={data.percent} />
            ))}
        </div>
    );
}