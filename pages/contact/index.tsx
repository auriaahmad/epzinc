// pages/contact.tsx

import Layout from "@/components/Layout"; // Ensure the correct path
import Link from "next/link";
import { Phone, Email, LocationOn } from '@mui/icons-material'; // Material Icons
import GlowButton from "@/components/GlowButton";
const ContactPage = () => {
    return (
        <Layout>
            <div className="bg-white flex flex-col min-h-screen relative">
                <main className="flex-grow relative isolate px-6 lg:px-8">
                    {/* Background Gradient */}
                    <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                        <div
                            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        ></div>
                    </div>

                    {/* Flex Container for Two Sections */}
                    <div className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto p-8 space-y-8 lg:space-y-0 lg:space-x-8">
                        {/* Right Side: Contact Form */}
                        <div className="p-6 rounded-lg shadow-md w-full lg:w-3/5 bg-transparent order-1 lg:order-2">
                            <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Contact Us</h2>
                            <p className="text-gray-600 text-center mb-4">We'd love to hear from you! Please fill out the form below.</p>

                            <form>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block mb-2 text-sm text-gray-700">Name*</label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                        aria-required="true"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="email" className="block mb-2 text-sm text-gray-700">Email*</label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                        aria-required="true"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="phone" className="block mb-2 text-sm text-gray-700">Phone Number (optional)</label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        placeholder="Your Phone Number"
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="message" className="block mb-2 text-sm text-gray-700">Message*</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        placeholder="Write your message here..."
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                        aria-required="true"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
                                    aria-label="Submit Contact Form"
                                >
                                    Submit
                                </button>
                            </form>

                        </div>

                        {/* Left Side: Contact Info */}
                        <div className="flex flex-col w-full lg:w-2/5 p-6 rounded-lg shadow-md bg-transparent order-2 lg:order-1">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>

                            <div className="flex items-center mb-4">
                                <LocationOn className="text-blue-500 mr-2" />
                                <p className="text-gray-900">2262 Calle Del Mundo, Santa Clara, CA 95054, USA</p>
                            </div>

                            <div className="flex items-center mb-4">
                                <Phone className="text-blue-500 mr-2" />
                                <p className="text-gray-900">(123) 456-7890</p>
                            </div>

                            <div className="flex items-center mb-4">
                                <Email className="text-blue-500 mr-2" />
                                <p className="text-gray-900">contact@epzinc.com</p>
                            </div>

                            {/* Embed Google Map */}
                            <div className="mt-6 w-full">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.876507840361!2d-121.94827678462867!3d37.35226197991597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb04e62450105%3A0x2651b914f3407078!2s2262%20Calle%20Del%20Mundo%2C%20Santa%20Clara%2C%20CA%2095054%2C%20USA!5e0!3m2!1sen!2sus!4v1668232397384!5m2!1sen!2sus"
                                    width="100%"
                                    height="250"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    className="rounded-lg"
                                    title="Google Map"
                                ></iframe>
                            </div>
                            <div className="flex flex-col items-center my-10">
                                <Link href="/service" passHref>
                                    <GlowButton>
                                        Explore Services
                                    </GlowButton>
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </Layout>
    );
};

export default ContactPage;