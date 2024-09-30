import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCartIcon, XMarkIcon, Bars3BottomLeftIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const isActive = (path: string) => router.pathname === path;

  return (
    <nav className="bg-gray-800 w-full h-16" role="navigation" aria-label="Main Navigation">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3BottomLeftIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>

            <img className="h-8 w-auto ml-4" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company Logo" />
          </div>

          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block flex-shrink-0">
              <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company Logo" />
            </div>

            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link href="/home" legacyBehavior passHref>
                  <a
                    tabIndex={0}
                    className={`${isActive('/home') ? 'text-white border-b-2 border-blue-500' : 'text-gray-300'} hover:text-white px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white`}
                    aria-current={isActive('/home') ? 'page' : undefined}
                  >
                    Home
                  </a>
                </Link>
                <Link href="/service" legacyBehavior passHref>
                  <a
                    tabIndex={0}
                    className={`${isActive('/service') ? 'text-white border-b-2 border-blue-500' : 'text-gray-300'} hover:text-white px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white`}
                    aria-current={isActive('/service') ? 'page' : undefined}
                  >
                    Service
                  </a>
                </Link>
                <Link href="/quality-engineering" legacyBehavior passHref>
                  <a
                    tabIndex={0}
                    className={`${isActive('/quality-engineering') ? 'text-white border-b-2 border-blue-500' : 'text-gray-300'} hover:text-white px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white`}
                    aria-current={isActive('/quality-engineering') ? 'page' : undefined}
                  >
                    Quality Engineering/Fabrication
                  </a>
                </Link>
                <Link href="/for-sale" legacyBehavior passHref>
                  <a
                    tabIndex={0}
                    className={`${isActive('/for-sale') ? 'text-white border-b-2 border-blue-500' : 'text-gray-300'} hover:text-white px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white`}
                    aria-current={isActive('/for-sale') ? 'page' : undefined}
                  >
                    For Sale
                  </a>
                </Link>
                <Link href="/contact" legacyBehavior passHref>
                  <a
                    tabIndex={0}
                    className={`${isActive('/contact') ? 'text-white border-b-2 border-blue-500' : 'text-gray-300'} hover:text-white px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white`}
                    aria-current={isActive('/contact') ? 'page' : undefined}
                  >
                    Contact Us
                  </a>
                </Link>
                <Link href="/more" legacyBehavior passHref>
                  <a
                    tabIndex={0}
                    className={`${isActive('/more') ? 'text-white border-b-2 border-blue-500' : 'text-gray-300'} hover:text-white px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white`}
                    aria-current={isActive('/more') ? 'page' : undefined}
                  >
                    More
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              aria-label="View cart"
            >
              <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            <div className="ml-3 flex items-center space-x-4">
              <Link href="/auth/login" legacyBehavior passHref>
                <a
                  tabIndex={0}
                  className="rounded-full border border-white px-3 py-2 text-sm font-medium text-white bg-transparent hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
                >
                  Login
                </a>
              </Link>
              <Link href="/auth/signup" legacyBehavior passHref>
                <a
                  tabIndex={0}
                  className="rounded-full border border-white px-3 py-2 text-sm font-medium text-white bg-transparent hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
                >
                  Sign Up
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu" role="menu" aria-label="Mobile Navigation">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link href="/home" legacyBehavior passHref>
              <a
                tabIndex={0}
                className={`${isActive('/home') ? 'bg-gray-900 text-white' : 'text-gray-300'} block rounded-md px-3 py-2 text-base font-medium focus:outline-none focus:ring-2 focus:ring-white`}
                aria-current={isActive('/home') ? 'page' : undefined}
              >
                Home
              </a>
            </Link>
            <Link href="/service" legacyBehavior passHref>
              <a
                tabIndex={0}
                className={`${isActive('/service') ? 'bg-gray-900 text-white' : 'text-gray-300'} block rounded-md px-3 py-2 text-base font-medium focus:outline-none focus:ring-2 focus:ring-white`}
                aria-current={isActive('/service') ? 'page' : undefined}
              >
                Service
              </a>
            </Link>
            <Link href="/quality-engineering" legacyBehavior passHref>
              <a
                tabIndex={0}
                className={`${isActive('/quality-engineering') ? 'bg-gray-900 text-white' : 'text-gray-300'} block rounded-md px-3 py-2 text-base font-medium focus:outline-none focus:ring-2 focus:ring-white`}
                aria-current={isActive('/quality-engineering') ? 'page' : undefined}
              >
                Quality Engineering/Fabrication
              </a>
            </Link>
            <Link href="/for-sale" legacyBehavior passHref>
              <a
                tabIndex={0}
                className={`${isActive('/for-sale') ? 'bg-gray-900 text-white' : 'text-gray-300'} block rounded-md px-3 py-2 text-base font-medium focus:outline-none focus:ring-2 focus:ring-white`}
                aria-current={isActive('/for-sale') ? 'page' : undefined}
              >
                For Sale
              </a>
            </Link>
            <Link href="/contact" legacyBehavior passHref>
              <a
                tabIndex={0}
                className={`${isActive('/contact') ? 'bg-gray-900 text-white' : 'text-gray-300'} block rounded-md px-3 py-2 text-base font-medium focus:outline-none focus:ring-2 focus:ring-white`}
                aria-current={isActive('/contact') ? 'page' : undefined}
              >
                Contact Us
              </a>
            </Link>
            <Link href="/more" legacyBehavior passHref>
              <a
                tabIndex={0}
                className={`${isActive('/more') ? 'bg-gray-900 text-white' : 'text-gray-300'} block rounded-md px-3 py-2 text-base font-medium focus:outline-none focus:ring-2 focus:ring-white`}
                aria-current={isActive('/more') ? 'page' : undefined}
              >
                More
              </a>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;