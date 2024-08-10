"use client";
import React, { useEffect, useState } from 'react';

async function getProps() {
    const url = `https://rotten-bets-backend.onrender.com/current`;
    console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

export default function FormatOutput() {
    type Movie = {
        actual_count: number;
        actual_score: number;
        num_disliked: number;
        num_liked: number;
        percent_score: number;
        title: string;
        total_ratings: number;
        total_reviews: number;
        liked: number;
        disliked: number;
        high: number;
        low: number;
    }
    const [data, setData] = useState<Movie>({
        actual_count: 0,
        actual_score: 0,
        num_disliked: 0,
        num_liked: 0,
        percent_score: 0,
        title: '',
        total_ratings: 0,
        total_reviews: 0,
        high: 0,
        low: 0,
        liked: 0,
        disliked: 0
    });
    const [loading, setLoading] = useState(true);
    const [timer, setTimer] = useState(120); 

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const data = await getProps();
            setData(data);
            setLoading(false);
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

    if (loading) {
        return (
            <div className='flex justify-center items-center h-screen'>
                <div className='text-4xl'>Loading...</div>
            </div>
        );
    }

    return (
        <div className='relative'>
            <div className='absolute z-50 top-0 left-0 p-4 text-lg'>Next update in: {timer} seconds</div>
            <div className='flex justify-center items-center flex-col p-4 mt-12 overflow-auto' style={{ maxHeight: 'calc(100vh - 5rem)' }}>
                <p className='text-6xl font-bold'>{data.title}</p>
                <div className='flex flex-row gap-16 p-4'>
                    <div className='flex justify-center items-center'>
                        <div className='text-4xl'>{data.percent_score}%</div>
                    </div>
                    <div className='flex flex-col justify-center items-center space-y-2'>
                        <p className='text-2xl'>({data.actual_score})</p>
                        <div className='text-lg'>On {data.actual_count} Reviews</div>
                    </div>
                </div>
                <div className='flex flex-row gap-4'>
                    <p className='text-xl'>{data.num_liked} Fresh {data.num_disliked} Rotten</p>                
                </div>
                <div className='flex flex-col gap-4 justify-center items-center'>
                    <br />
                    <p className='font-bold'>Relevant Kalshi strikes:</p>
                    <p>{data.liked} fresh(es) to get above {data.high}%</p>
                    <p>{data.disliked} rot(s) to get to {data.low}%</p>
                </div>
            </div>
        </div>
    );
}