import React from 'react';

const Blog12: React.FC = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Blog List */}
      <ul className="space-y-10">
        {/* Blog Item 1 */}
        <li>
          <p className="mb-2 text-sm text-gray-500 dark:text-neutral-500">2024</p>
          <h5 className="font-medium text-sm text-gray-800 dark:text-neutral-200">The complete guide to OKRs</h5>
          <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
            How to make objectives and key results work for your company.
          </p>
          <p className="mt-1">
            <a
              href="#"
              className="text-sm text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
            >
              Continue reading
            </a>
          </p>
        </li>

        {/* Blog Item 2 */}
        <li>
          <p className="mb-2 text-sm text-gray-500 dark:text-neutral-500">2024</p>
          <h5 className="font-medium text-sm text-gray-800 dark:text-neutral-200">Enhancement in Customer Engagement</h5>
          <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
            With the aim of optimizing customer interactions and boosting brand loyalty, the team at Preline leveraged
            Mailchimp's powerful tools and expertise to deliver exceptional results.
          </p>
          <p className="mt-1">
            <a
              href="#"
              className="text-sm text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
            >
              Continue reading
            </a>
          </p>
        </li>

        {/* Blog Item 3 */}
        <li>
          <p className="mb-2 text-sm text-gray-500 dark:text-neutral-500">2023</p>
          <h5 className="font-medium text-sm text-gray-800 dark:text-neutral-200">
            How Google Assistant now helps you record stories for kids
          </h5>
          <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
            Google is constantly updating its consumer AI, Google Assistant, with new features.
          </p>
          <p className="mt-1">
            <a
              href="#"
              className="text-sm text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
            >
              Continue reading
            </a>
          </p>
        </li>
      </ul>
      {/* End Blog List */}
    </div>
  );
};

export default Blog12;