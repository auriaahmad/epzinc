import React from 'react';

const Blog8: React.FC = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Card 1 */}
        <a href="#" className="group sm:flex rounded-xl focus:outline-none">
          <div className="shrink-0 relative rounded-xl overflow-hidden h-[200px] sm:w-[250px] sm:h-[350px] w-full">
            <img
              className="absolute top-0 left-0 w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1664574654529-b60630f33fdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
              alt="Blog Image"
            />
          </div>

          <div className="flex-grow p-4 sm:p-6 flex flex-col h-full">
            <div className="mb-3">
              <p className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-neutral-800 dark:text-neutral-200">
                Business
              </p>
            </div>
            <h3 className="text-lg sm:text-2xl font-semibold text-gray-800 group-hover:text-blue-600 group-focus:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white dark:group-focus:text-white">
              Preline becomes an official Instagram Marketing Partner
            </h3>
            <p className="mt-2 text-gray-600 dark:text-neutral-400">
              Great news we&apos;re eager to share.
            </p>

            <div className="mt-5 sm:mt-auto flex items-center">
              <div className="shrink-0">
                <img
                  className="w-[46px] h-[46px] rounded-full"
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                  alt="Avatar"
                />
              </div>
              <div className="ml-2.5 sm:ml-4">
                <h4 className="font-semibold text-gray-800 dark:text-neutral-200">Aaron Larsson</h4>
                <p className="text-xs text-gray-500 dark:text-neutral-500">Feb 15, 2021</p>
              </div>
            </div>
          </div>
        </a>
        {/* End Card 1 */}

        {/* Card 2 */}
        <a href="#" className="group sm:flex rounded-xl focus:outline-none">
          <div className="shrink-0 relative rounded-xl overflow-hidden h-[200px] sm:w-[250px] sm:h-[350px] w-full">
            <img
              className="absolute top-0 left-0 w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1669824774762-65ddf29bee56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
              alt="Blog Image"
            />
          </div>

          <div className="flex-grow p-4 sm:p-6 flex flex-col h-full">
            <div className="mb-3">
              <p className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-neutral-800 dark:text-neutral-200">
                Announcements
              </p>
            </div>
            <h3 className="text-lg sm:text-2xl font-semibold text-gray-800 group-hover:text-blue-600 group-focus:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white dark:group-focus:text-white">
              Announcing a free plan for small teams
            </h3>
            <p className="mt-2 text-gray-600 dark:text-neutral-400">
              At Wake, our mission has always been focused on bringing openness.
            </p>

            <div className="mt-5 sm:mt-auto flex items-center">
              <div className="shrink-0">
                <img
                  className="w-[46px] h-[46px] rounded-full"
                  src="https://images.unsplash.com/photo-1669720229052-89cda125fc3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                  alt="Avatar"
                />
              </div>
              <div className="ml-2.5 sm:ml-4">
                <h4 className="font-semibold text-gray-800 dark:text-neutral-200">Hanna Wolfe</h4>
                <p className="text-xs text-gray-500 dark:text-neutral-500">Feb 4, 2021</p>
              </div>
            </div>
          </div>
        </a>
        {/* End Card 2 */}
      </div>
      {/* End Grid */}
    </div>
  );
};

export default Blog8;
