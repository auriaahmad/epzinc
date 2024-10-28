import React from 'react';

const Blog3: React.FC = () => {
  return (
    <div className="py-12 grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
      {/* Card 1 */}
      <a href="#" className="group flex flex-col focus:outline-none">
        <div className="relative overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800 h-60 w-full">
          <img
            src="https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="eYoga"
            className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out object-cover h-full w-full rounded-2xl"
          />
        </div>
        <div className="pt-4">
          <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
            eYoga
          </h3>
          <p className="mt-1 text-gray-600 dark:text-neutral-400">
            A revamped and dynamic approach to yoga analytics
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
              Discovery
            </span>
            <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
              Brand Guidelines
            </span>
            <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
              Yoga
            </span>
          </div>
        </div>
      </a>
      {/* End Card 1 */}

      {/* Card 2 */}
      <a href="#" className="group flex flex-col focus:outline-none">
        <div className="relative overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800 h-60 w-full">
          <img
            src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Nike React"
            className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out object-cover h-full w-full rounded-2xl"
          />
        </div>
        <div className="pt-4">
          <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
            Nike React
          </h3>
          <p className="mt-1 text-gray-600 dark:text-neutral-400">
            Rewriting sport's playbook for billions of athletes
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
              Brand Strategy
            </span>
            <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
              Visual Identity
            </span>
          </div>
        </div>
      </a>
      {/* End Card 2 */}

      {/* Card 3 */}
      <a href="#" className="group flex flex-col focus:outline-none">
        <div className="relative overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800 h-60 w-full">
          <img
            src="https://images.unsplash.com/photo-1649999920973-ab6bfd0c0017?q=80&w=560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Day Spa"
            className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out object-cover h-full w-full rounded-2xl"
          />
        </div>
        <div className="pt-4">
          <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
            Day Spa
          </h3>
          <p className="mt-1 text-gray-600 dark:text-neutral-400">
            Designing a new cocktail can
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
              Brand Strategy
            </span>
            <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
              Visual Identity
            </span>
          </div>
        </div>
      </a>
      {/* End Card 3 */}

      {/* Card 4 */}
      <a href="#" className="group flex flex-col focus:outline-none">
        <div className="relative overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800 h-60 w-full">
          <img
            src="https://images.unsplash.com/photo-1528291954423-c0c71c12baeb?q=80&w=560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Diamond Dynamics"
            className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out object-cover h-full w-full rounded-2xl"
          />
        </div>
        <div className="pt-4">
          <h3 className="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
            Diamond Dynamics
          </h3>
          <p className="mt-1 text-gray-600 dark:text-neutral-400">
            From cutting-edge equipment to stylish apparel
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
              Sports Gear
            </span>
            <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
              Equipment
            </span>
            <span className="py-1.5 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
              Discovery
            </span>
          </div>
        </div>
      </a>
      {/* End Card 4 */}
    </div>
  );
};

export default Blog3;