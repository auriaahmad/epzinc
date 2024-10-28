import React from 'react';

const Blog9: React.FC = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Title */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold dark:text-neutral-200">Customer stories</h2>
        <p className="mt-1 text-gray-600 dark:text-neutral-400">
          See how game-changing companies are making the most of every engagement with Preline.
        </p>
      </div>
      {/* End Title */}

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <a href="#" className="group hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-xl p-5 transition dark:hover:bg-white/10 dark:focus:bg-white/10">
          <div className="w-full h-48 overflow-hidden rounded-xl">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
              alt="Unity Customer Story"
            />
          </div>
          <h3 className="mt-5 text-xl text-gray-800 dark:text-neutral-300 dark:hover:text-white">
            Unity’s inside sales team drives 80% of its revenue with Preline.
          </h3>
          <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-neutral-200">
            Learn more
            <svg
              className="shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </p>
        </a>
        {/* End Card 1 */}

        {/* Card 2 */}
        <a href="#" className="group hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-xl p-5 transition dark:hover:bg-white/10 dark:focus:bg-white/10">
          <div className="w-full h-48 overflow-hidden rounded-xl">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1669739432571-aee1f057c41f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
              alt="Living Spaces Customer Story"
            />
          </div>
          <h3 className="mt-5 text-xl text-gray-800 dark:text-neutral-300 dark:hover:text-white">
            Living Spaces creates a unified experience across the customer journey.
          </h3>
          <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-neutral-200">
            Learn more
            <svg
              className="shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </p>
        </a>
        {/* End Card 2 */}

        {/* Card 3 */}
        <a href="#" className="group hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-xl p-5 transition dark:hover:bg-white/10 dark:focus:bg-white/10">
          <div className="w-full h-48 overflow-hidden rounded-xl">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1657299171054-e679f630a776?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
              alt="Atlassian Customer Story"
            />
          </div>
          <h3 className="mt-5 text-xl text-gray-800 dark:text-neutral-300 dark:hover:text-white">
            Atlassian powers sales and support at scale with Preline.
          </h3>
          <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-neutral-200">
            Learn more
            <svg
              className="shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </p>
        </a>
        {/* End Card 3 */}
      </div>
      {/* End Grid */}
    </div>
  );
};

export default Blog9;