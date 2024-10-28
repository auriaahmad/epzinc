import React from 'react';

const Blog5: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 items-center border border-neutral-700 divide-y lg:divide-y-0 lg:divide-x divide-neutral-700 rounded-xl">
      {/* Card 1 */}
      <a href="#" className="group relative z-10 p-4 md:p-6 h-full flex flex-col bg-neutral-900 focus:outline-none first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none before:absolute before:inset-0 before:bg-gradient-to-b before:hover:from-transparent before:hover:via-transparent before:hover:to-[#ff0]/10 before:via-80% before:focus:from-transparent before:focus:via-transparent before:focus:to-[#ff0]/10 before:-z-[1] before:last:rounded-b-xl lg:before:first:rounded-s-xl lg:before:last:rounded-e-xl lg:before:last:rounded-bl-none before:opacity-0 before:hover:opacity-100 before:focus:opacity-100">
        <div className="mb-5">
          {/* Icon */}
          <svg className="shrink-0 w-8 h-8" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Your SVG Path */}
          </svg>

          <div className="mt-5">
            <p className="font-semibold text-5xl text-white">43%</p>
            <h3 className="mt-5 font-medium text-lg text-white">Enhancement in Customer Engagement</h3>
            <p className="mt-1 text-neutral-400">
              With the aim of optimizing customer interactions and boosting brand loyalty, the team at Preline leveraged Mailchimp's powerful tools and expertise to deliver exceptional results.
            </p>
          </div>
        </div>
        <p className="mt-auto">
          <span className="font-medium text-sm text-[#ff0] pb-1 border-b-2 border-neutral-700 group-hover:border-[#ff0] group-focus:border-[#ff0] transition focus:outline-none">
            Case study
          </span>
        </p>
      </a>
      {/* End Card 1 */}

      {/* Card 2 */}
      <a href="#" className="group relative z-10 p-4 md:p-6 h-full flex flex-col bg-neutral-900 focus:outline-none first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none before:absolute before:inset-0 before:bg-gradient-to-b before:hover:from-transparent before:hover:via-transparent before:hover:to-[#ff0]/10 before:via-80% before:focus:from-transparent before:focus:via-transparent before:focus:to-[#ff0]/10 before:-z-[1] before:last:rounded-b-xl lg:before:first:rounded-s-xl lg:before:last:rounded-e-xl lg:before:last:rounded-bl-none before:opacity-0 before:hover:opacity-100 before:focus:opacity-100">
        <div className="mb-5">
          {/* Icon */}
          <svg className="shrink-0 w-8 h-8" width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Your SVG Path */}
          </svg>

          <div className="mt-5">
            <p className="font-semibold text-5xl text-white">20%</p>
            <h3 className="mt-5 font-medium text-lg text-white">Rise in E-commerce</h3>
            <p className="mt-1 text-neutral-400">
              In collaboration with Shopify, Preline embarked on a mission to revolutionize the e-commerce experience for a fictitious fashion brand, "StyleAura."
            </p>
          </div>
        </div>
        <p className="mt-auto">
          <span className="font-medium text-sm text-[#ff0] pb-1 border-b-2 border-neutral-700 group-hover:border-[#ff0] group-focus:border-[#ff0] transition focus:outline-none">
            Case study
          </span>
        </p>
      </a>
      {/* End Card 2 */}

      {/* Card 3 */}
      <a href="#" className="group relative z-10 p-4 md:p-6 h-full flex flex-col bg-neutral-900 focus:outline-none first:rounded-t-xl last:rounded-b-xl lg:first:rounded-l-xl lg:first:rounded-tr-none lg:last:rounded-r-xl lg:last:rounded-bl-none before:absolute before:inset-0 before:bg-gradient-to-b before:hover:from-transparent before:hover:via-transparent before:hover:to-[#ff0]/10 before:via-80% before:focus:from-transparent before:focus:via-transparent before:focus:to-[#ff0]/10 before:-z-[1] before:last:rounded-b-xl lg:before:first:rounded-s-xl lg:before:last:rounded-e-xl lg:before:last:rounded-bl-none before:opacity-0 before:hover:opacity-100 before:focus:opacity-100">
        <div className="mb-5">
          {/* Icon */}
          <svg className="shrink-0 w-8 h-8" width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Your SVG Path */}
          </svg>

          <div className="mt-5">
            <p className="font-semibold text-5xl text-white">12%</p>
            <h3 className="mt-5 font-medium text-lg text-white">Streamlining Development</h3>
            <p className="mt-1 text-neutral-400">
              With the goal of accelerating project delivery and enhancing collaboration among development teams, Preline leveraged GitLab's comprehensive suite of tools.
            </p>
          </div>
        </div>
        <p className="mt-auto">
          <span className="font-medium text-sm text-[#ff0] pb-1 border-b-2 border-neutral-700 group-hover:border-[#ff0] group-focus:border-[#ff0] transition focus:outline-none">
            Case study
          </span>
        </p>
      </a>
      {/* End Card 3 */}
    </div>
  );
};

export default Blog5;