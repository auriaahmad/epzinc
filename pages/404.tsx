// pages/404.tsx

import Layout from "@/components/Layout";
import Link from 'next/link'; // Import Link for client-side navigation

const NotFoundPage = () => {
    return (
        <Layout>
            <div className="bg-white min-h-screen flex items-center justify-center relative">
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
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center">
                            404
                        </h1>
                    </div>
                    <div className="text-center">
                        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
                        <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link href="/" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transform transition-transform duration-300 hover:scale-105 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Go back home
                            </Link>
                            <Link href="/contact" className="text-sm font-semibold text-gray-900 transform transition-transform duration-300 hover:scale-105">
                                Contact support <span aria-hidden="true">&rarr;</span>
                            </Link>
                        </div>
                    </div>
                </main>
            </div>
        </Layout>
    );
};

export default NotFoundPage;