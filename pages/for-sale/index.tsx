// pages/for-sale/index.tsx

import Layout from "@/components/Layout";
import MenuItem from "@/components/MenuItem";
import mockInventory from "@/mock/mockInventory"; // Update the import path as necessary
import Link from "next/link";

const ForSale = () => {
  return (
    <Layout>
      <div className="bg-white min-h-screen items-center justify-center relative">
        <main className="relative isolate px-6 lg:px-8 w-full">
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
            <h1 className="pt-12 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center">
              Items For Sale
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
              Need help? <Link href="/contact" className="text-blue-500">Contact Us</Link>
            </p>

          </div>
        </main>
        {/* Render the mock inventory in a responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 px-4 py-4 lg:px-24 lg:pb-12">
          {mockInventory.map(item => (
            <div key={item.id} className="w-full">
              <MenuItem
                title={item.title}
                priceRange={item.priceRange}
                shortDescription={item.shortDescription}
                images={item.images}
                status={item.status} // Pass status to MenuItem
                detailedDescription={item.detailedDescription} // Pass detailed description
                id={item.id} // Pass the item id for dynamic routing
              />
            </div>
          ))}
        </div>
      </div>

    </Layout >
  );
};

export default ForSale;
