// components/GeneralList.tsx

import React from 'react';
import Link from 'next/link';

interface GeneralListProps {
  items: string[];
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  searchQuery?: string; // Add searchQuery as an optional prop
}

const GeneralList: React.FC<GeneralListProps> = ({
  items,
  description,
  buttonText,
  buttonLink,
  searchQuery,
}) => {
  // Function to highlight keywords in the service name
  const highlightService = (service: string) => {
    if (!searchQuery) return service;
    const parts = service.split(new RegExp(`(${searchQuery})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === searchQuery.toLowerCase() ? (
        <span key={index} className="bg-sky-300">{part}</span>
      ) : part
    );
  };

  return (
    <div className="space-y-6 border-l-2 border-dashed">
      {description && <p className="mt-4 text-sm text-gray-600 text-center">{description}</p>}
      
      {items.map((item, index) => (
        <div key={index} className="relative w-full flex items-center" tabIndex={0} role="button" aria-pressed="false">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6 text-blue-500 absolute -left-4 top-1/2 transform -translate-y-1/2"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clipRule="evenodd"
            />
          </svg>
          <div className="ml-8 flex justify-between items-center w-full">
            <h4 className="font-bold text-black">{highlightService(item)}</h4>
            {buttonText && buttonLink && (
              <Link href={buttonLink} passHref>
                <div className="mt-2 inline-block px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 cursor-pointer">
                  {buttonText}
                </div>
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GeneralList;
