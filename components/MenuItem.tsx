// components/MenuItem.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface MenuItemProps {
  title: string;
  priceRange: string;
  shortDescription: string; // Accurately represent the short description
  images: string[]; // Take an array of images
  status: string; // New field for status
  detailedDescription: string[]; // New field for detailed description
  id: string; // Add the id prop to navigate to the product detail page
}

const MenuItem: React.FC<MenuItemProps> = ({ title, priceRange, shortDescription, images, status, id }) => {
  const firstImage = images[0];

  return (
    <div className="relative flex flex-col overflow-hidden rounded-lg bg-gray-50 shadow-md h-full">
      <Link href={`/for-sale/${id}`} className="relative flex h-60 overflow-hidden rounded-t-lg">
        <Image
          className="object-cover"
          src={firstImage}
          alt={title}
          width={500}
          height={300}
        />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">{status}</span>
      </Link>
      <div className="flex flex-col justify-between flex-grow p-4">
        <h5 className="text-xl tracking-tight text-slate-900">{title}</h5>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">{priceRange}</span>
          </p>
        </div>
        <p className="text-gray-600">{shortDescription}</p>
        <div className="flex flex-col mt-4">
          <Link href={`/for-sale/${id}`}>
            <button className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-600 transition w-full mb-2">View Item</button>
          </Link>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition w-full mb-2">Add to Cart</button>
          <button className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition w-full">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;