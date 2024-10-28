import React, { useState } from 'react';

const Pricing4: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleFeatures = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <div className="relative">
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 md:py-14 lg:py-20 mx-auto">
                <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                    <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold dark:text-neutral-200">
                        Simple, transparent pricing
                    </h2>
                    <p className="mt-1 text-gray-600 dark:text-neutral-400">Increase your teams productivity. Get things done in rapid time.</p>
                </div>

                <div className="relative after:absolute after:inset-x-0 after:bottom-0 after:z-10 after:w-full after:h-48 after:bg-gradient-to-t after:from-white after:via-white/70 dark:after:from-neutral-900 dark:after:via-neutral-900/95">
                    <div className="hidden lg:block sticky top-0 start-0 py-2 bg-white dark:bg-neutral-900">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-2">
                                <div className="h-full">

                                </div>
                            </div>

                            <div className="col-span-1">
                                <div className="h-full p-4 flex flex-col justify-between bg-white border border-gray-200 rounded-xl dark:bg-neutral-900 dark:border-neutral-800">
                                    <div>
                                        <span className="font-semibold text-lg text-gray-800 dark:text-neutral-200">
                                            Free
                                        </span>
                                        <p className="text-xs text-gray-500 dark:text-neutral-500">
                                            Free forever
                                        </p>
                                    </div>
                                    <div className="mt-2">
                                        <a className="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
                                            Get started
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-1">
                                <div className="h-full p-4 flex flex-col justify-between bg-white border border-gray-200 rounded-xl dark:bg-neutral-900 dark:border-neutral-800">
                                    <div>
                                        <span className="font-semibold text-lg text-gray-800 dark:text-neutral-200">
                                            Startup
                                        </span>
                                        <p className="text-xs text-gray-500 dark:text-neutral-500">
                                            $39 per month billed annually
                                        </p>
                                    </div>
                                    <div className="mt-2">
                                        <a className="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
                                            Get started
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-1">
                                <div className="h-full p-4 flex flex-col justify-between bg-white border border-gray-200 rounded-xl dark:bg-neutral-900 dark:border-neutral-800">
                                    <div>
                                        <span className="font-semibold text-lg text-gray-800 dark:text-neutral-200">
                                            Team
                                        </span>
                                        <p className="text-xs text-gray-500 dark:text-neutral-500">
                                            $89 per month billed annually
                                        </p>
                                    </div>
                                    <div className="mt-2">
                                        <a className="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
                                            Get started
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-1">
                                <div className="h-full p-4 flex flex-col justify-between bg-white border border-gray-200 rounded-xl dark:bg-neutral-900 dark:border-neutral-800">
                                    <div>
                                        <span className="font-semibold text-lg text-gray-800 dark:text-neutral-200">
                                            Enterprise
                                        </span>
                                        <p className="text-xs text-gray-500 dark:text-neutral-500">
                                            $149 per month billed annually
                                        </p>
                                    </div>
                                    <div className="mt-2">
                                        <a className="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
                                            Get started
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 lg:space-y-0">
                        <ul className="grid lg:grid-cols-6 lg:gap-6">
                            <li className="lg:col-span-2 lg:py-3">
                                <span className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                                    General
                                </span>
                            </li>

                            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
                            </li>

                            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
                            </li>

                            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
                            </li>

                            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
                            </li>
                        </ul>

                        <ul className="grid lg:grid-cols-6 lg:gap-6">
                            <li className="lg:col-span-2 pb-1.5 lg:py-3">
                                <span className="text-sm text-gray-800 dark:text-neutral-200">
                                    Number of seats
                                </span>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Free
                                    </span>
                                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                                        1
                                    </span>
                                </div>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Startup
                                    </span>
                                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                                        Up to 3
                                    </span>
                                </div>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Team
                                    </span>
                                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                                        Up to 10
                                    </span>
                                </div>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Enterprise
                                    </span>
                                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                                        Unlimited
                                    </span>
                                </div>
                            </li>
                        </ul>

                        <ul className="grid lg:grid-cols-6 lg:gap-6">
                            <li className="lg:col-span-2 pb-1.5 lg:py-3">
                                <span className="text-sm text-gray-800 dark:text-neutral-200">
                                    Storage
                                </span>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Free
                                    </span>
                                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                                        15 GB
                                    </span>
                                </div>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Startup
                                    </span>
                                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                                        1 TB
                                    </span>
                                </div>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Team
                                    </span>
                                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                                        15 TB
                                    </span>
                                </div>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Enterprise
                                    </span>
                                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                                        Unlimited
                                    </span>
                                </div>
                            </li>
                        </ul>

                        <ul className="grid lg:grid-cols-6 lg:gap-6">
                            <li className="lg:col-span-2 pb-1.5 lg:py-3">
                                <span className="text-sm text-gray-800 dark:text-neutral-200">
                                    Email sharing
                                </span>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Free
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Startup
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Team
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Enterprise
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                            </li>
                        </ul>

                        <ul className="grid lg:grid-cols-6 lg:gap-6">
                            <li className="lg:col-span-2 pb-1.5 lg:py-3">
                                <span className="text-sm text-gray-800 dark:text-neutral-200">
                                    Any time, anywhere access
                                </span>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Free
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
                                </div>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Startup
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Team
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Enterprise
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-6 space-y-4 lg:space-y-0">
                        <ul className="grid lg:grid-cols-6 lg:gap-6">
                            <li className="lg:col-span-2 lg:py-3">
                                <span className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                                    Financial data
                                </span>
                            </li>

                            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
                            </li>

                            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
                            </li>

                            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
                            </li>

                            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
                            </li>
                        </ul>

                        <ul className="grid lg:grid-cols-6 lg:gap-6">
                            <li className="lg:col-span-2 pb-1.5 lg:py-3">
                                <span className="text-sm text-gray-800 dark:text-neutral-200">
                                    Open/High/Low/Close
                                </span>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Free
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
                                </div>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Startup
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
                                </div>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Team
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Enterprise
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                            </li>
                        </ul>

                        <ul className="grid lg:grid-cols-6 lg:gap-6">
                            <li className="lg:col-span-2 pb-1.5 lg:py-3">
                                <span className="text-sm text-gray-800 dark:text-neutral-200">
                                    Price-volume difference indicator
                                </span>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Free
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
                                </div>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Startup
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Team
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Enterprise
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-6 space-y-4 lg:space-y-0">
                        <ul className="grid lg:grid-cols-6 lg:gap-6">
                            <li className="lg:col-span-2 lg:py-3">
                                <span className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                                    On-chain data
                                </span>
                            </li>

                            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
                            </li>

                            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
                            </li>

                            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
                            </li>

                            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
                            </li>
                        </ul>

                        <ul className="grid lg:grid-cols-6 lg:gap-6">
                            <li className="lg:col-span-2 pb-1.5 lg:py-3">
                                <span className="text-sm text-gray-800 dark:text-neutral-200">
                                    Network growth
                                </span>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Free
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
                                </div>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Startup
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
                                </div>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Team
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Enterprise
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                            </li>
                        </ul>

                        <ul className="grid lg:grid-cols-6 lg:gap-6">
                            <li className="lg:col-span-2 pb-1.5 lg:py-3">
                                <span className="text-sm text-gray-800 dark:text-neutral-200">
                                    Average token age consumed
                                </span>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Free
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
                                </div>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Startup
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Team
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Enterprise
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                            </li>
                        </ul>

                        <ul className="grid lg:grid-cols-6 lg:gap-6">
                            <li className="lg:col-span-2 pb-1.5 lg:py-3">
                                <span className="text-sm text-gray-800 dark:text-neutral-200">
                                    Exchange flow
                                </span>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Free
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
                                </div>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Startup
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
                                </div>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Team
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
                                </div>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Enterprise
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                            </li>
                        </ul>

                        <ul className="grid lg:grid-cols-6 lg:gap-6">
                            <li className="lg:col-span-2 pb-1.5 lg:py-3">
                                <span className="text-sm text-gray-800 dark:text-neutral-200">
                                    Total ERC20 exchange funds flow
                                </span>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Free
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
                                </div>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Startup
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Team
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Enterprise
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                            </li>
                        </ul>

                        <ul className="grid lg:grid-cols-6 lg:gap-6">
                            <li className="lg:col-span-2 pb-1.5 lg:py-3">
                                <span className="text-sm text-gray-800 dark:text-neutral-200">
                                    Transaction volume
                                </span>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Free
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
                                </div>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Startup
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
                                </div>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Team
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Enterprise
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                            </li>
                        </ul>

                        <ul className="grid lg:grid-cols-6 lg:gap-6">
                            <li className="lg:col-span-2 pb-1.5 lg:py-3">
                                <span className="text-sm text-gray-800 dark:text-neutral-200">
                                    Total circulation (beta)
                                </span>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Free
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
                                </div>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Startup
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Team
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
                                </div>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Enterprise
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                            </li>
                        </ul>

                        <ul className="grid lg:grid-cols-6 lg:gap-6">
                            <li className="lg:col-span-2 pb-1.5 lg:py-3">
                                <span className="text-sm text-gray-800 dark:text-neutral-200">
                                    Velocity of tokens (beta)
                                </span>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Free
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
                                </div>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Startup
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
                                </div>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Team
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
                                </div>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Enterprise
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                            </li>
                        </ul>

                        <ul className="grid lg:grid-cols-6 lg:gap-6">
                            <li className="lg:col-span-2 pb-1.5 lg:py-3">
                                <span className="text-sm text-gray-800 dark:text-neutral-200">
                                    ETH gas used
                                </span>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Free
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
                                </div>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Startup
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Team
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Enterprise
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-6 space-y-4 lg:space-y-0">
                        <ul className="grid lg:grid-cols-6 lg:gap-6">
                            <li className="lg:col-span-2 lg:py-3">
                                <span className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                                    Social data
                                </span>
                            </li>

                            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
                            </li>

                            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
                            </li>

                            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
                            </li>

                            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
                            </li>
                        </ul>

                        <ul className="grid lg:grid-cols-6 lg:gap-6">
                            <li className="lg:col-span-2 pb-1.5 lg:py-3">
                                <span className="text-sm text-gray-800 dark:text-neutral-200">
                                    Dev activity
                                </span>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Free
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
                                </div>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Startup
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
                                </div>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Team
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Enterprise
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                            </li>
                        </ul>

                        <ul className="grid lg:grid-cols-6 lg:gap-6">
                            <li className="lg:col-span-2 pb-1.5 lg:py-3">
                                <span className="text-sm text-gray-800 dark:text-neutral-200">
                                    Topic search
                                </span>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Free
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
                                </div>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Startup
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Team
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Enterprise
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                            </li>
                        </ul>

                        <ul className="grid lg:grid-cols-6 lg:gap-6">
                            <li className="lg:col-span-2 pb-1.5 lg:py-3">
                                <span className="text-sm text-gray-800 dark:text-neutral-200">
                                    Relative social dominance
                                </span>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Free
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
                                </div>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Startup
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
                                </div>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Team
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
                                </div>
                            </li>

                            <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                <div className="grid grid-cols-6 lg:block">
                                    <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                        Enterprise
                                    </span>
                                    <svg className="shrink-0 lg:mx-auto size-5 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div id="view-all-features-button" className={`${isExpanded ? 'block' : 'hidden'} w-full overflow-hidden transition-[height] duration-300`}>
                        <div className="mt-6 relative z-20 space-y-4 lg:space-y-0">
                            {/* Additional Features Section */}
                            <ul className="grid lg:grid-cols-6 lg:gap-6">
                                <li className="lg:col-span-2 lg:py-3">
                                    <span className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                                        Additional features
                                    </span>
                                </li>

                                <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
                                </li>

                                <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
                                </li>

                                <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
                                </li>

                                <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
                                </li>
                            </ul>

                            <ul className="grid lg:grid-cols-6 lg:gap-6">
                                <li className="lg:col-span-2 pb-1.5 lg:py-3">
                                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                                        Dedicated account manager
                                    </span>
                                </li>

                                <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                    <div className="grid grid-cols-6 lg:block">
                                        <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                            Free
                                        </span>
                                        <svg className="size-4 lg:mx-auto text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" />
                                        </svg>
                                    </div>
                                </li>

                                <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                    <div className="grid grid-cols-6 lg:block">
                                        <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                            Startup
                                        </span>
                                        <svg className="size-4 lg:mx-auto text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" />
                                        </svg>
                                    </div>
                                </li>

                                <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                    <div className="grid grid-cols-6 lg:block">
                                        <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                            Team
                                        </span>
                                        <svg className="size-5 lg:mx-auto text-blue-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                                        </svg>
                                    </div>
                                </li>

                                <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                    <div className="grid grid-cols-6 lg:block">
                                        <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                            Enterprise
                                        </span>
                                        <svg className="size-5 lg:mx-auto text-blue-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                                        </svg>
                                    </div>
                                </li>
                            </ul>

                            <ul className="grid lg:grid-cols-6 lg:gap-6">
                                <li className="lg:col-span-2 pb-1.5 lg:py-3">
                                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                                        24/7 support
                                    </span>
                                </li>

                                <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                    <div className="grid grid-cols-6 lg:block">
                                        <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                            Free
                                        </span>
                                        <svg className="size-4 lg:mx-auto text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" />
                                        </svg>
                                    </div>
                                </li>

                                <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                    <div className="grid grid-cols-6 lg:block">
                                        <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                            Startup
                                        </span>
                                        <svg className="size-5 lg:mx-auto text-blue-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                                        </svg>
                                    </div>
                                </li>

                                <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                    <div className="grid grid-cols-6 lg:block">
                                        <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                            Team
                                        </span>
                                        <svg className="size-5 lg:mx-auto text-blue-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                                        </svg>
                                    </div>
                                </li>

                                <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                    <div className="grid grid-cols-6 lg:block">
                                        <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                            Enterprise
                                        </span>
                                        <svg className="size-5 lg:mx-auto text-blue-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                                        </svg>
                                    </div>
                                </li>
                            </ul>

                            <ul className="grid lg:grid-cols-6 lg:gap-6">
                                <li className="lg:col-span-2 pb-1.5 lg:py-3">
                                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                                        Rewards
                                    </span>
                                </li>

                                <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                    <div className="grid grid-cols-6 lg:block">
                                        <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                            Free
                                        </span>
                                        <svg className="size-4 lg:mx-auto text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" />
                                        </svg>
                                    </div>
                                </li>

                                <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                    <div className="grid grid-cols-6 lg:block">
                                        <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                            Startup
                                        </span>
                                        <svg className="size-4 lg:mx-auto text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" />
                                        </svg>
                                    </div>
                                </li>

                                <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                    <div className="grid grid-cols-6 lg:block">
                                        <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                            Team
                                        </span>
                                        <svg className="size-4 lg:mx-auto text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" />
                                        </svg>
                                    </div>
                                </li>

                                <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                    <div className="grid grid-cols-6 lg:block">
                                        <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                            Enterprise
                                        </span>
                                        <svg className="size-5 lg:mx-auto text-blue-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                                        </svg>
                                    </div>
                                </li>
                            </ul>

                            <ul className="grid lg:grid-cols-6 lg:gap-6">
                                <li className="lg:col-span-2 pb-1.5 lg:py-3">
                                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                                        Business API
                                    </span>
                                </li>

                                <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                    <div className="grid grid-cols-6 lg:block">
                                        <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                            Free
                                        </span>
                                        <svg className="size-4 lg:mx-auto text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" />
                                        </svg>
                                    </div>
                                </li>

                                <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                    <div className="grid grid-cols-6 lg:block">
                                        <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                            Startup
                                        </span>
                                        <svg className="size-4 lg:mx-auto text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" />
                                        </svg>
                                    </div>
                                </li>

                                <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                    <div className="grid grid-cols-6 lg:block">
                                        <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                            Team
                                        </span>
                                        <svg className="size-4 lg:mx-auto text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" />
                                        </svg>
                                    </div>
                                </li>

                                <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-neutral-800">
                                    <div className="grid grid-cols-6 lg:block">
                                        <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-neutral-200">
                                            Enterprise
                                        </span>
                                        <svg className="size-5 lg:mx-auto text-blue-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                                        </svg>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <button
                        type="button"
                        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none dark:bg-neutral-900 dark:border-neutral-800 dark:text-white dark:hover:bg-neutral-800"
                        onClick={toggleFeatures}
                    >
                        <span>{isExpanded ? 'Hide features' : 'View all features'}</span>
                        <svg
                            className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
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
                            <path d="M18 6L6 18" />
                            <path d="M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Pricing4;
