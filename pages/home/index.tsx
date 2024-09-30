// pages/home.tsx

import Layout from "@/components/Layout";
import Link from "next/link"; // Import Link from next/router
import ProductSection from "@/components/ProductSection";
import GlowButton from "@/components/GlowButton"; // Import the GlowButton component

const Home = () => {
    return (
        <Layout>
            <div className="bg-white min-h-screen flex items-center justify-center relative">
                {/* Left screwdriver image */}
                <header className="absolute left-[14%] top-[42%] transform -translate-y-1/2 z-0 hidden md:block">
                    <img
                        src="/images/home/screwdriver.png"
                        alt="Yellow screwdriver"
                        className="max-w-full h-auto"
                    />
                </header>

                {/* Right hammer image */}
                <header className="absolute right-[12%] top-[62%] transform -translate-y-1/2 z-0">
                    <img
                        src="/images/home/Hammer.png"
                        alt="Hammer"
                        className="max-w-full h-auto"
                    />
                </header>

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
                            Custom Tooling for Flawless Surface Finishes
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
                            At EPZ, Inc., we engineer custom solutions to minimize rack marks and material damage, delivering consistent high-quality finishes for all your metal processing needs.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link href="/service" passHref>
                                <GlowButton>
                                    Explore Services
                                </GlowButton>
                            </Link>
                            <Link href="/more" passHref>
                                <button
                                    className="relative rounded-md text-sm font-semibold leading-6 text-gray-900 transition-transform transform hover:scale-105 focus:outline-none"
                                    aria-label="Learn more about our services"
                                >
                                    Learn more
                                    <span aria-hidden="true">→</span>
                                    {/* Gradient Underline */}
                                    <span className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-blue-500 to-indigo-500 scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
                        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        ></div>
                    </div>
                </main>
            </div>
            <ProductSection />
        </Layout>
    );
};

export default Home;