import React from 'react';

const Blog7: React.FC = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Title Section */}
      <div className="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
      <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold dark:text-neutral-200">
      Read our latest news</h2>
        <p className="mt-1 text-gray-600 dark:text-neutral-400">
          We've helped some great companies brand, design and get to market.
        </p>
      </div>
      {/* End Title Section */}

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 lg:mb-14">
        {/* Card 1 */}
        <a href="#" className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800">
          <div className="aspect-w-16 aspect-h-9">
            <img
              className="w-full object-cover rounded-t-xl"
              src="https://images.unsplash.com/photo-1668869713519-9bcbb0da7171?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
              alt="Blog Image"
            />
          </div>
          <div className="p-4 md:p-5">
            <p className="mt-2 text-xs uppercase text-gray-600 dark:text-neutral-400">Product</p>
            <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white">
              Better is when everything works together
            </h3>
          </div>
        </a>
        {/* End Card 1 */}

        {/* Card 2 */}
        <a href="#" className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800">
          <div className="aspect-w-16 aspect-h-9">
            <img
              className="w-full object-cover rounded-t-xl"
              src="https://images.unsplash.com/photo-1668584054035-f5ba7d426401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
              alt="Blog Image"
            />
          </div>
          <div className="p-4 md:p-5">
            <p className="mt-2 text-xs uppercase text-gray-600 dark:text-neutral-400">Business</p>
            <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white">
              What CFR really is about
            </h3>
          </div>
        </a>
        {/* End Card 2 */}

        {/* Card 3 */}
        <a href="#" className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800">
          <div className="aspect-w-16 aspect-h-9">
            <img
              className="w-full object-cover rounded-t-xl"
              src="https://images.unsplash.com/photo-1668863699009-1e3b4118675d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
              alt="Blog Image"
            />
          </div>
          <div className="p-4 md:p-5">
            <p className="mt-2 text-xs uppercase text-gray-600 dark:text-neutral-400">Business</p>
            <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white">
              Should Product Owners think like entrepreneurs?
            </h3>
          </div>
        </a>
        {/* End Card 3 */}

        {/* Card 4 */}
        <a href="#" className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800">
          <div className="aspect-w-16 aspect-h-9">
            <img
              className="w-full object-cover rounded-t-xl"
              src="https://images.unsplash.com/photo-1668584054131-d5721c515211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
              alt="Blog Image"
            />
          </div>
          <div className="p-4 md:p-5">
            <p className="mt-2 text-xs uppercase text-gray-600 dark:text-neutral-400">Facilitate</p>
            <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white">
              Announcing Front Strategies: Ready-to-use rules
            </h3>
          </div>
        </a>
        {/* End Card 4 */}
      </div>
      {/* End Grid */}

      {/* Read More Section */}
      <div className="text-center">
        <div className="inline-block bg-white border shadow-sm rounded-full dark:bg-neutral-900 dark:border-neutral-800">
          <div className="py-3 px-4 flex items-center gap-x-2">
            <p className="text-gray-600 dark:text-neutral-400">Want to read more?</p>
            <a
              href="../docs/index.html"
              className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
            >
              Go here
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
      </div>
      {/* End Read More Section */}
    </div>
  );
};

export default Blog7;