import React from 'react';

const Blog5: React.FC = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Grid */}
      <div className="grid sm:grid-cols-2 sm:items-center gap-8">
        {/* Image Column */}
        <div className="sm:order-2">
          <div className="relative pt-[50%] sm:pt-[100%] rounded-lg">
            <img
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
              src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
              alt="Blog Image"
            />
          </div>
        </div>
        {/* End Image Column */}

        {/* Content Column */}
        <div className="sm:order-1">
          <p className="mb-5 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-neutral-800 dark:text-neutral-200">
            Business insight
          </p>

          <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight text-gray-800 dark:text-neutral-200">
            <a
              className="hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-300 dark:hover:text-white dark:focus:text-white"
              href="#"
            >
              How to get buy-in and budget for direct hiring
            </a>
          </h2>

          {/* Avatar Section */}
          <div className="mt-6 sm:mt-10 flex items-center">
            <div className="shrink-0">
              <img
                className="h-10 w-10 sm:h-14 sm:w-14 rounded-full"
                src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                alt="Louise Donadieu"
              />
            </div>

            <div className="ml-3 sm:ml-4">
              <p className="sm:mb-1 font-semibold text-gray-800 dark:text-neutral-200">
                Louise Donadieu
              </p>
              <p className="text-xs text-gray-500 dark:text-neutral-500">
                Strategic Marketing Consultant
              </p>
            </div>
          </div>
          {/* End Avatar Section */}

          <div className="mt-5">
            <a
              className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
              href="#"
            >
              Read more
              <svg
                className="shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </a>
          </div>
        </div>
        {/* End Content Column */}
      </div>
      {/* End Grid */}
    </div>
  );
};

export default Blog5;