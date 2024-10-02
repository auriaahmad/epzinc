// components/ShoppingItem.tsx

import React, { useState } from 'react';
import Image from 'next/image';

// Define the props interface for ShoppingItem
interface ShoppingItemProps {
  title: string;
  priceRange: string;
  description: string;
  imageBig: string;
  imageSmall: string;
  addOns: string[];
  warranty: string;
  additionalInfo: string[];
}

const ShoppingItem: React.FC<ShoppingItemProps> = ({
  title,
  priceRange,
  description,
  imageBig,
  imageSmall,
  addOns,
  warranty,
  additionalInfo,
}) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <h2 className="text-2xl font-bold text-center p-4">{title} ({priceRange})</h2>

      <div className="flex flex-col items-center">
        {/* Big Image */}
        <Image
          src={imageBig}
          alt={title}
          width={400}
          height={300}
          className="object-contain"
        />

        {/* Thumbnail for zoom */}
        <div className="flex mt-4">
          <Image
            src={imageSmall}
            alt={`${title} Thumbnail`}
            width={100}
            height={100}
            className="object-contain cursor-pointer"
          />
        </div>
      </div>

      <div className="p-4">
        <p className="text-gray-700 mb-2">{description}</p>

        <p className="text-gray-700 mb-2">We offer add-ons options listed below:</p>
        <ul className="list-disc list-inside mb-4">
          {addOns.map((addOn, index) => (
            <li key={index}>{addOn}</li>
          ))}
        </ul>

        <p className="text-gray-700 mb-2">{warranty}</p>
        <p className="text-gray-700 mb-2">Additional Information:</p>
        <ul className="list-disc list-inside mb-4">
          {additionalInfo.map((info, index) => (
            <li key={index}>{info}</li>
          ))}
        </ul>

        <div className="flex items-center mt-4">
          <button onClick={handleDecrement} className="bg-gray-200 text-gray-600 p-2 rounded-l-md">-</button>
          <input
            type="number"
            value={quantity}
            readOnly
            className="w-12 text-center border border-gray-300"
          />
          <button onClick={handleIncrement} className="bg-gray-200 text-gray-600 p-2 rounded-r-md">+</button>
        </div>

        <button className="w-full mt-4 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition">
          Add to Cart
        </button>
        <button className="w-full mt-2 bg-green-600 text-white p-2 rounded-md hover:bg-green-700 transition">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default ShoppingItem;
