import React, { useState } from 'react';
import Image from 'next/image';

const ItemCard = ({ image, title, score }: { image: string, title: string, score: string }) => {
  return (
    <div className='w-full'>
    <div className="relative w-full h-48 transform transition-transform duration-300 hover:scale-105 max-w-xs rounded overflow-hidden shadow-lg hover:shadow-2xl bg-primary-color">

        </div>
      <div className="font-bold text-xl mb-2 text-secondary-color">{title} {score}</div>
    </div>
  )
}

export default ItemCard