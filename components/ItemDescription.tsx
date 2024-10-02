// components/ItemDescription.tsx

import React, { useState } from 'react';
import Link from 'next/link';

interface ItemDescriptionProps {
  imageBig: string;
  images: string[];
  title: string;
  priceRange: string;
  description: string[]; // Array for bullet points
  status: string; // Status field
  quantity: number; // Quantity field
  onClose: () => void; // Function to handle closing the modal
}

const ItemDescription: React.FC<ItemDescriptionProps> = ({
  imageBig,
  images,
  title,
  priceRange,
  description,
  status,
  quantity,
  onClose
}) => {
  const [currentImage, setCurrentImage] = useState(imageBig); // State for the currently displayed image

  return (
    <div className="bg-gray-100 py-10 relative h-screen">
      <div className="container mx-auto px-4 h-full">
        <div className="flex flex-wrap -mx-4 h-full">
          {/* Product Images */}
          <div className="w-full md:w-1/2 px-4 mb-8 flex flex-col">
            <img src={currentImage} alt={title} className="w-full h-[60vh] object-cover rounded-lg shadow-md mb-4" id="mainImage" />
            <div className="flex gap-4 py-4 justify-center overflow-x-auto">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-24 h-24 object-cover rounded-md cursor-pointer opacity-70 hover:opacity-100 transition duration-300"
                  onClick={() => setCurrentImage(img)} // Change main image on click
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 px-4 flex flex-col justify-center z-20 relative bg-white p-6 rounded-lg shadow-lg">
            {/* Close Button */}
            <button className="absolute top-4 right-4 text-gray-800 hover:text-gray-900" onClick={onClose}>
              ✖️
            </button>

            <h2 className="text-3xl font-bold mb-2 text-gray-900">{title}</h2>
            <p className="text-gray-700 mb-4">Status: <span className="font-semibold">{status}</span></p>
            <div className="mb-4">
              <span className="text-2xl font-bold mr-2 text-gray-900">{priceRange}</span>
            </div>
            <div className="flex items-center mb-4">
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">Quantity:</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                value={quantity}
                className="w-12 text-center rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>

            <div className="flex space-x-4 mb-6">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">Add to Cart</button>
              <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition">Buy Now</button>
              <Link href="/contact"><button className="bg-yellow-600 text-white px-6 py-2 rounded-md hover:bg-yellow-700 transition">Contact Us</button></Link>
            </div>

            <h3 className="text-lg font-semibold mb-2 text-gray-900">Key Features:</h3>
            <ul className="list-disc list-inside text-gray-700">
              {description.map((item, index) => (
                <li key={index}>{item}</li> // Render bullet points from description
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDescription;