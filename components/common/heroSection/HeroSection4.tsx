import React from 'react';

const HeroSection4: React.FC = () => {
  return (
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Grid */}
      <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
        <div className="lg:col-span-3">
          <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
            Build Better Products
          </h1>
          <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">
            Introducing a new way for your brand to reach the creative community.
          </p>

          <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
            <div className="w-full sm:w-auto">
              <label htmlFor="hero-input" className="sr-only">
                Search
              </label>
              <input
                type="text"
                id="hero-input"
                name="hero-input"
                className="py-3 px-4 block w-full min-w-80 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Enter work email"
              />
            </div>
            <a
              className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              href="#"
            >
              Request demo
            </a>
          </div>

          {/* Brands */}
          <div className="mt-6 lg:mt-12">
            <span className="text-xs font-medium text-gray-800 uppercase dark:text-neutral-200">Trusted by:</span>

            <div className="mt-4 flex gap-x-8">
              <svg
                className="w-20 h-auto"
                width="106"
                height="36"
                viewBox="0 0 106 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Add SVG path content */}
                <path
                  d="M55.4732 9.52669C55.4732 10.6846 54.5258 11.6846 53.3153 11.6846C52.1048 11.6846 51.1574 10.7372 51.1574 9.52669C51.1574 8.31616 52.0521 7.36879 53.3153 7.36879C54.5785 7.47406 55.4732 8.42142 55.4732 9.52669Z"
                  fill="currentColor"
                  className="fill-gray-800 dark:fill-neutral-200"
                />
                {/* Add remaining SVG paths */}
              </svg>

              <svg
                className="w-20 h-auto"
                width="140"
                height="47"
                viewBox="0 0 140 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Add SVG path content */}
                <path
                  d="M20.3991 8.15082C20.3991 9.61789 19.1416 10.8754 17.6745 10.8754C16.2075 10.8754 14.95 9.61789 14.95 8.15082C14.95 6.68375 16.2075 5.42627 17.6745 5.42627C19.1416 5.42627 20.3991 6.68375 20.3991 8.15082Z"
                  fill="currentColor"
                  className="fill-gray-800 dark:fill-neutral-200"
                />
                {/* Add remaining SVG paths */}
              </svg>

              <svg
                className="w-20 h-auto"
                width="200"
                height="67"
                viewBox="0 0 200 67"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Add SVG path content */}
                <path
                  d="M44.6108 11.7537C45.9082 11.7537 47.1058 11.3545 48.0041 10.5561C48.9023 9.75767 49.4013 8.65988 49.4013 7.46227C49.4013 6.16487 48.9023 5.16686 48.0041 4.26866C47.1058 3.47026 46.008 3.07104 44.6108 3.07104C43.3134 3.07104 42.2156 3.47026 41.3174 4.36846C40.4192 5.26666 40.02 6.26467 40.02 7.46227C40.02 8.65988 40.4192 9.65787 41.3174 10.5561C42.2156 11.3545 43.3134 11.7537 44.6108 11.7537Z"
                  fill="currentColor"
                  className="fill-gray-800 dark:fill-neutral-200"
                />
                {/* Add remaining SVG paths */}
              </svg>
            </div>
          </div>
          {/* End Brands */}
        </div>
        {/* End Col */}

        <div className="lg:col-span-4 mt-10 lg:mt-0">
          <img
            className="w-full rounded-xl"
            src="https://images.unsplash.com/photo-1665686376173-ada7a0031a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=700&q=80"
            alt="Hero Image"
          />
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}
    </div>
  );
};

export default HeroSection4;
