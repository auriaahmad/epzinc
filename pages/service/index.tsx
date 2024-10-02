// pages/services.tsx

import Layout from '@/components/Layout';
import GeneralList from '@/components/GeneralList';
import Link from 'next/link';
import { useState } from 'react';

const Services = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const services = [
    "Alodine (Clear, Gold)",
    "Anodize Type II Soft (Clear, Black, Red, Blue, Gold)",
    "Anodize Type III Hard (Clear, Black)",
    "Optical Black",
    "Bead Blast (Glass Beads, Aluminum Oxide, and Garnet)",
    "Black Nickel",
    "Bright Dip",
    "Baking (Recently Calibrated to 850°F)",
    "Bright Nickel",
    "Chemical Cleaning (Aluminum / Etch cleaning / Steel, SS, Brass, Copper, Titanium, Plastic, Ceramic)",
    "Class 100 Cleanroom Packaging",
    "Electroless Nickel (Mid and High Phosphorus)",
    "Electropolish (Aluminum, Stainless Steel [300 & 400 series], Copper, Brass Alloys)",
    "Furnace Baking (Hydrogen Firing up to 1100°C)",
    "Gold Plating (99.0%, 99.7% & 99.9%)",
    "Masking and Plugging",
    "Passivation Citric and Nitric (All Stainless Steel Alloys)",
    "Silver Plating (Semi Bright)",
    "Sulfamate Nickel (ISO 9001:2015 Certified and Medical Approved)",
    "Teflon Impregnation",
    "Tin Plating",
    "Ultrasonic Cleaning",
    "Zinc (Clear, Gold)",
  ];

  // Filter services based on search query
  const filteredServices = services.filter(service =>
    service.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <div className="bg-white min-h-screen flex items-center justify-center relative">
        <div className="flex min-h-screen items-center justify-center bg-white px-6 md:px-60">
          <main className="relative isolate px-6 lg:px-8 w-full mb-20">
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              ></div>
            </div>

            {/* Content centered in viewport */}
            <div className="mx-auto max-w-2xl flex flex-col items-center justify-center h-full z-10">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center mt-20">
                Our Services
              </h1>
            </div>
            <p className="mt-4 text-sm text-center text-gray-600">
              Need help? <Link href="/contact" className="text-blue-500">Contact Us</Link>
            </p>

            {/* Search Bar with Label and Icon */}
            <div className="fixed top-20 left-0 w-full z-50">
              <div className="hidden sm:mb-8 sm:flex sm:flex-col sm:items-center">
                <div className="relative w-full max-w-md">
                  <input
                    id="search"
                    type="text"
                    placeholder="Type to search a Service..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label="Search services"
                    className="w-full py-2 pl-10 pr-4 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 rounded-full focus:outline-none"
                  />
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5 text-gray-500"
                    >
                      <path d="M11 2a9 9 0 100 18 9 9 0 000-18zm0 16a7 7 0 100-14 7 7 0 000 14zm7.707-7.707a1 1 0 00-1.414 0L14 14.586l-2.293-2.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l5-5a1 1 0 000-1.414z" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            {/* GeneralList Component */}
            <GeneralList
              items={filteredServices} // Pass the original filtered services
              buttonText="Get"
              buttonLink="/contact"
              searchQuery={searchQuery} // Pass search query for highlighting
            />
            <p className="mt-12 text-sm text-gray-500">
              EPZ, Inc. provides custom-designed tooling to ensure that rack marks and material damage is minimized, resulting in a consistent High-Quality Finish.
            </p>
          </main>
        </div>
      </div>
    </Layout>
  );
};

export default Services;