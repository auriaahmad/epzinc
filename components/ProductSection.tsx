// components/ProductSection.tsx

import React from "react";

const ProductSection = () => {
    const images = Array.from({ length: 15 }, (_, index) => `/images/home/${index + 1}.webp`);

    return (
        <section className="relative bg-white">
            <div className="mx-auto max-w-7xl py-8">
                <div className="max-w-screen-xl mx-auto px-4 text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Companies We Serve</h2>
                    <p className="text-xl text-gray-500">
                        UR PRODUCTS ARE BEING USED BY COMPANIES SUCH AS:
                    </p>
                </div>
                <div className="overflow-hidden">
                    <div className="flex animate-carousel space-x-6">
                        {/* Create a set of images for seamless scrolling */}
                        {images.slice(-3).map((src, index) => (
                            <img
                                key={`clone-${index}`}
                                src={src}
                                alt={`Product Clone ${index + 1}`}
                                className="h-[15vh] w-auto max-w-[calc(100%/4)] object-contain shadow-lg transition-shadow duration-300 hover:shadow-xl"
                            />
                        ))}
                        {[...images, ...images].map((src, index) => (
                            <img
                                key={index}
                                src={src}
                                alt={`Product ${index + 1}`}
                                className="h-[15vh] w-auto max-w-[calc(100%/4)] object-contain shadow-lg transition-shadow duration-300 hover:shadow-xl"
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Add the animation for sliding in and out */}
            <style jsx>{`
                .animate-carousel {
                    display: flex;
                    animation: marquee 30s linear infinite; /* Adjust the total duration */
                }

                @keyframes marquee {
                    0% {
                        transform: translateX(0); /* Image 1 in the center */
                    }
                    6.67% {
                        transform: translateX(-18vw); /* Image 1 out, Image 2 in the center */
                    }
                    13.33% {
                        transform: translateX(-36vw); /* Image 2 out, Image 3 in the center */
                    }
                    20% {
                        transform: translateX(-54vw); /* Image 3 out, Image 4 in the center */
                    }
                    26.67% {
                        transform: translateX(-72vw); /* Image 4 out, Image 5 in the center */
                    }
                    /* Continue this pattern for all images */
                    100% {
                        transform: translateX(-${(images.length + 3) * 18}vw); /* Reset to start position */
                    }
                }
            `}</style>
        </section>
    );
};

export default ProductSection;
