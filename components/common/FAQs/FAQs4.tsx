import React, { useState } from 'react';

const FAQs4: React.FC = () => {
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
      <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <div className="max-w-xs">
            <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold dark:text-neutral-200">

              Frequently<br />asked questions
            </h2>
            <p className="mt-1 hidden md:block text-gray-600 dark:text-neutral-400">
              Answers to the most frequently asked questions.
            </p>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="hs-accordion-group divide-y divide-gray-200 dark:divide-neutral-700">
            {[ // List of FAQs
              {
                question: "Can I cancel at anytime?",
                answer: "Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback."
              },
              {
                question: "My team has credits. How do we use them?",
                answer: "Once your team signs up for a subscription plan. This is where we sit down, grab a cup of coffee and dial in the details."
              },
              {
                question: "How does Preline&apos;s pricing work?",
                answer: "Our subscriptions are tiered. Understanding the task at hand and ironing out the wrinkles is key."
              },
              {
                question: "How secure is Preline?",
                answer: "Protecting the data you trust to Preline is our first priority. This part is really crucial in keeping the project in line to completion."
              },
              {
                question: "How do I get access to a theme I purchased?",
                answer: "If you lose the link for a theme you purchased, don&apos;t panic! We&apos;ve got you covered."
              },
              {
                question: "Upgrade License Type",
                answer: "There may be times when you need to upgrade your license from the original type you purchased and we have a solution that ensures you can apply your original purchase cost to the new license purchase."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className={`hs-accordion pt-6 pb-3 ${activeIndex === index ? "active" : ""}`}
                id={`hs-basic-with-title-and-arrow-stretched-heading-${index}`}
              >
                <button
                  className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                  aria-expanded={activeIndex === index ? "true" : "false"}
                  onClick={() => toggleAccordion(index)}
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
                  id={`hs-basic-with-title-and-arrow-stretched-collapse-${index}`}
                  className={`hs-accordion-content overflow-hidden transition-[height] duration-300 ${activeIndex === index ? "block" : "hidden"
                    }`}
                  role="region"
                  aria-labelledby={`hs-basic-with-title-and-arrow-stretched-heading-${index}`}
                >
                  <p className="text-gray-600 dark:text-neutral-400">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs4;