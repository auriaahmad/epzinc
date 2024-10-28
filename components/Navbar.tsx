// components/Navbar.tsx

// import { ShoppingBagIcon, TrashIcon, EyeIcon } from '@heroicons/react/24/outline';

const cartItemsMock = [
  { id: 1, name: 'Apple iPhone 15', price: 1199, quantity: 1, imageUrl: '/images/shop/1/1.webp' },
  { id: 2, name: 'Apple iPad Air', price: 799, quantity: 1, imageUrl: '/images/shop/1/1.webp' },
  { id: 3, name: 'Apple iPad Air', price: 799, quantity: 1, imageUrl: '/images/shop/1/1.webp' },
  { id: 4, name: 'Apple iPad Air', price: 799, quantity: 1, imageUrl: '/images/shop/1/1.webp' },
  { id: 5, name: 'Apple iPad Air', price: 799, quantity: 1, imageUrl: '/images/shop/1/1.webp' },
  { id: 6, name: 'Apple iPad Air', price: 799, quantity: 1, imageUrl: '/images/shop/1/1.webp' },
  { id: 7, name: 'Apple iPad Air', price: 799, quantity: 1, imageUrl: '/images/shop/1/1.webp' },
  { id: 8, name: 'Apple iPad Air', price: 799, quantity: 1, imageUrl: '/images/shop/1/1.webp' },
  { id: 9, name: 'Apple iPad Air', price: 799, quantity: 1, imageUrl: '/images/shop/1/1.webp' },
];

// import Cart from './e-commerce/Cart';
import { useState } from 'react';
import Link from 'next/link';
import {
  // ShoppingCartIcon,
  XMarkIcon,
  Bars3BottomLeftIcon,
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const isActive = (path: string) => router.pathname === path;

  const [cartItems, setCartItems] = useState(cartItemsMock);

  // Handle removing items from the cart
  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Handle quantity change
  const handleQuantityChange = (id: number, newQuantity: number) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  // Handle viewing item (optional functionality)
  const handleViewItem = (id: number) => {
    // You can implement the logic to view the item's details here
    console.log(`View item with id: ${id}`);
  };

  return (
    <nav
      className="bg-gray-800 w-full h-16 relative"
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="w-full mx-auto px-4 custom:px-6 lg:px-8 h-full">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile Menu Button */}
          <div className="absolute inset-y-0 left-0 flex items-center custom:hidden">
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
                <Bars3BottomLeftIcon
                  className="block h-6 w-6"
                  aria-hidden="true"
                />
              )}
            </button>

            <div className='flex-col'>
              <h1 className='font-black'>EPZ Inc.</h1>
              {/* <p>(408) 982-9434</p> */}
            </div>

          </div>

          {/* Desktop Menu */}
          <div className="flex-1 flex items-center justify-center custom:items-stretch custom:justify-start">
            <div className="hidden custom:block flex-shrink-0">
              <div className='flex-col'>
                <h1 className='font-black'>EPZ Inc.</h1>
                {/* <p>(408) 982-9434</p> */}
              </div>
            </div>

            <div className="hidden custom:block custom:ml-6">
              <div className="flex space-x-4">
                <Link href="/home" legacyBehavior passHref>
                  <a
                    tabIndex={0}
                    className={`${isActive('/home')
                      ? 'text-white border-b-2 border-blue-500'
                      : 'text-gray-300'
                      } hover:text-white px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white`}
                    aria-current={isActive('/home') ? 'page' : undefined}
                  >
                    Home
                  </a>
                </Link>
                <Link href="/service" legacyBehavior passHref>
                  <a
                    tabIndex={0}
                    className={`${isActive('/service')
                      ? 'text-white border-b-2 border-blue-500'
                      : 'text-gray-300'
                      } hover:text-white px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white`}
                    aria-current={isActive('/service') ? 'page' : undefined}
                  >
                    Service
                  </a>
                </Link>
                <Link href="/quality" legacyBehavior passHref>
                  <a
                    tabIndex={0}
                    className={`${isActive('/quality')
                      ? 'text-white border-b-2 border-blue-500'
                      : 'text-gray-300'
                      } hover:text-white px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white`}
                    aria-current={isActive('/quality') ? 'page' : undefined}
                  >
                    Quality
                  </a>
                </Link>
                <Link href="/quality-engineering" legacyBehavior passHref>
                  <a
                    tabIndex={0}
                    className={`${isActive('/quality-engineering')
                      ? 'text-white border-b-2 border-blue-500'
                      : 'text-gray-300'
                      } hover:text-white px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white`}
                    aria-current={
                      isActive('/quality-engineering') ? 'page' : undefined
                    }
                  >
                    Quality Engineering/Fabrication
                  </a>
                </Link>
                <Link href="/for-sale" legacyBehavior passHref>
                  <a
                    tabIndex={0}
                    className={`${isActive('/for-sale')
                      ? 'text-white border-b-2 border-blue-500'
                      : 'text-gray-300'
                      } hover:text-white px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white`}
                    aria-current={isActive('/for-sale') ? 'page' : undefined}
                  >
                    For Sale
                  </a>
                </Link>
                <Link href="/contact" legacyBehavior passHref>
                  <a
                    tabIndex={0}
                    className={`${isActive('/contact')
                      ? 'text-white border-b-2 border-blue-500'
                      : 'text-gray-300'
                      } hover:text-white px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white`}
                    aria-current={isActive('/contact') ? 'page' : undefined}
                  >
                    Contact Us
                  </a>
                </Link>
                <Link href="/more" legacyBehavior passHref>
                  <a
                    tabIndex={0}
                    className={`${isActive('/more')
                      ? 'text-white border-b-2 border-blue-500'
                      : 'text-gray-300'
                      } hover:text-white px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white`}
                    aria-current={isActive('/more') ? 'page' : undefined}
                  >
                    More
                  </a>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side (Cart, Login, Signup) */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 custom:static custom:inset-auto custom:ml-6 custom:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              aria-label="View cart"
            >
              {/* <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" /> */}
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="custom:hidden bg-gray-800 text-white absolute top-16 left-0 w-full z-50"
          id="mobile-menu"
          role="menu"
          aria-label="Mobile Navigation"
        >
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link href="/home" legacyBehavior passHref>
              <a
                tabIndex={0}
                className={`${isActive('/home')
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300'
                  } block rounded-md px-3 py-2 text-base font-medium focus:outline-none focus:ring-2 focus:ring-white`}
                aria-current={isActive('/home') ? 'page' : undefined}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
            </Link>
            <Link href="/service" legacyBehavior passHref>
              <a
                tabIndex={0}
                className={`${isActive('/service')
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300'
                  } block rounded-md px-3 py-2 text-base font-medium focus:outline-none focus:ring-2 focus:ring-white`}
                aria-current={isActive('/service') ? 'page' : undefined}
                onClick={() => setMobileMenuOpen(false)}
              >
                Service
              </a>
            </Link>
            <Link href="/quality" legacyBehavior passHref>
              <a
                tabIndex={0}
                className={`${isActive('/quality')
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300'
                  } block rounded-md px-3 py-2 text-base font-medium focus:outline-none focus:ring-2 focus:ring-white`}
                aria-current={isActive('/quality') ? 'page' : undefined}
                onClick={() => setMobileMenuOpen(false)}
              >
                Quality
              </a>
            </Link>
            <Link href="/quality-engineering" legacyBehavior passHref>
              <a
                tabIndex={0}
                className={`${isActive('/quality-engineering')
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300'
                  } block rounded-md px-3 py-2 text-base font-medium focus:outline-none focus:ring-2 focus:ring-white`}
                aria-current={
                  isActive('/quality-engineering') ? 'page' : undefined
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Quality Engineering/Fabrication
              </a>
            </Link>
            <Link href="/for-sale" legacyBehavior passHref>
              <a
                tabIndex={0}
                className={`${isActive('/for-sale')
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300'
                  } block rounded-md px-3 py-2 text-base font-medium focus:outline-none focus:ring-2 focus:ring-white`}
                aria-current={isActive('/for-sale') ? 'page' : undefined}
                onClick={() => setMobileMenuOpen(false)}
              >
                For Sale
              </a>
            </Link>
            <Link href="/contact" legacyBehavior passHref>
              <a
                tabIndex={0}
                className={`${isActive('/contact')
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300'
                  } block rounded-md px-3 py-2 text-base font-medium focus:outline-none focus:ring-2 focus:ring-white`}
                aria-current={isActive('/contact') ? 'page' : undefined}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </a>
            </Link>
            <Link href="/more" legacyBehavior passHref>
              <a
                tabIndex={0}
                className={`${isActive('/more')
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300'
                  } block rounded-md px-3 py-2 text-base font-medium focus:outline-none focus:ring-2 focus:ring-white`}
                aria-current={isActive('/more') ? 'page' : undefined}
                onClick={() => setMobileMenuOpen(false)}
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