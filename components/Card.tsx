import React from 'react';

interface CardProps {
  image?: string; // Image is optional
  heading: string;
  description: string;
  buttonText?: string; // Button text is optional
  buttonLink?: string; // Button link is optional
}

const Card: React.FC<CardProps> = ({
  image,
  heading,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="max-w-sm bg-gray-200 dark:bg-gray-800 rounded-lg shadow transform transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col">
      {/* Optional image */}
      {image && (
        <a href={buttonLink || '#'}>
          <img
            className="rounded-t-lg w-full h-48 object-cover"
            src={image}
            alt={heading}
          />
        </a>
      )}

      {/* Card content */}
      <div className="p-5 flex flex-col flex-grow">
        <div>
          <a href={buttonLink || '#'}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {heading}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>

      {/* Optional button */}
      {buttonText && buttonLink && (
        <div className="flex justify-center mb-5">
          <a
            href={buttonLink}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {buttonText}
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
};

export default Card;