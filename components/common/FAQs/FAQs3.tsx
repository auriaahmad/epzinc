import React, { useState } from 'react';

const FAQs3: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close if the same accordion is clicked again
    } else {
      setActiveIndex(index); // Open the clicked accordion
    }
  };

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold dark:text-neutral-200">
          Your questions, answered
        </h2>
        <p className="mt-1 text-gray-600 dark:text-neutral-400">Answers to the most frequently asked questions.</p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="hs-accordion-group">
          {[ // List of FAQs
            {
              question: "Can I cancel at anytime?",
              answer: "Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback.",
            },
            {
              question: "My team has credits. How do we use them?",
              answer: "Once your team signs up for a subscription plan. This is where we sit down, grab a cup of coffee and dial in the details.",
            },
            {
              question: "How does Preline&apos;s pricing work?",
              answer: "Our subscriptions are tiered. Understanding the task at hand and ironing out the wrinkles is key.",
            },
            {
              question: "How secure is Preline?",
              answer: "Protecting the data you trust to Preline is our first priority. This part is really crucial in keeping the project in line to completion.",
            },
            {
              question: "How do I get access to a theme I purchased?",
              answer: "If you lose the link for a theme you purchased, don&apos;t panic! We&apos;ve got you covered.",
            },
            {
              question: "Upgrade License Type",
              answer: "There may be times when you need to upgrade your license from the original type you purchased and we have a solution that ensures you can apply your original purchase cost to the new license purchase.",
            }
          ].map((faq, index) => (
            <div
              key={index}
              className={`hs-accordion rounded-xl p-6 ${activeIndex === index ? "bg-gray-100 dark:bg-white/10" : ""
                }`}
            >
              <button
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none dark:text-neutral-200"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index ? "true" : "false"}
              >
                {faq.question}
                <svg
                  className={`shrink-0 size-5 text-gray-600 transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""
                    }`}
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
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <div
                className={`hs-accordion-content transition-[max-height] duration-300 overflow-hidden ${activeIndex === index ? "max-h-[500px]" : "max-h-0"
                  }`}
                style={{ maxHeight: activeIndex === index ? '500px' : '0px' }} // Adjust height dynamically
                aria-labelledby={`hs-accordion-heading-${index}`}
              >
                <p className="text-gray-800 dark:text-neutral-200">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs3;