import React from 'react';

const Blog1: React.FC = () => {
  const blogPosts = [
    {
      title: 'Studio by Preline',
      description: "Produce professional, reliable streams easily leveraging Preline's innovative broadcast studio",
      imageUrl: 'https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80',
      link: '#',
    },
    {
      title: 'Onsite',
      description: 'Optimize your in-person experience with best-in-class capabilities like badge printing and lead retrieval',
      imageUrl: 'https://images.unsplash.com/photo-1668906093328-99601a1aa584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80',
      link: '#',
    },
    {
      title: 'The complete guide to OKRs',
      description: 'How to make objectives and key results work for your company',
      imageUrl: 'https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80',
      link: '#',
    },
    {
      title: 'People program models',
      description: 'Six approaches to bringing your People strategy to life',
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80',
      link: '#',
    },
  ];

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
        {blogPosts.map((post, index) => (
          <a
            key={index}
            href={post.link}
            className="group block rounded-xl overflow-hidden focus:outline-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
              <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                />
              </div>
              <div className="grow">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                  {post.title}
                </h3>
                <p className="mt-3 text-gray-600 dark:text-neutral-400">{post.description}</p>
                <p className="mt-4 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500">
                  Read more
                  <svg
                    className="shrink-0 size-4"
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
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blog1;