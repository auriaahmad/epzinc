import React, { ReactNode, ReactElement, useState, useEffect, useRef } from 'react';
import { ShoppingCartIcon, TrashIcon, EyeIcon, PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

export interface CartProps {
  icon?: ReactElement;
  itemCount?: number;
  badgePosition?: 'top-right' | 'top-left';
  badgeStyle?: string;
  onOpen?: 'hover' | 'click' | 'both';
  animation?: 'fade' | 'slide' | 'zoom';
  isDisabled?: boolean;
  ariaLabel?: string;
  items?: CartItem[];
  onRemoveItem?: (id: number) => void;
  onViewItem?: (id: number) => void;
  onQuantityChange?: (id: number, newQuantity: number) => void;
  emptyState?: ReactNode;
  customViewIcon?: ReactElement;
  customDeleteIcon?: ReactElement;
  customPlusIcon?: ReactElement;
  customMinusIcon?: ReactElement;
  showTooltips?: boolean;
  mode?: 'light' | 'dark';
  showCustomScrollbar?: boolean;
  flipIconHorizontally?: boolean;
  showStickyHeader?: boolean;
}

const Cart = React.forwardRef<HTMLButtonElement, CartProps>((props, ref) => {
  const {
    icon = <ShoppingCartIcon className="h-8 w-8" />,
    itemCount = 0,
    badgePosition = 'top-right',
    badgeStyle = 'bg-red-600 text-white',
    onOpen = 'click',
    animation = 'fade',
    isDisabled = false,
    ariaLabel = 'Shopping cart',
    items = [],
    onRemoveItem,
    onViewItem,
    onQuantityChange,
    emptyState = <p className="text-gray-500">Your cart is empty.</p>,
    customViewIcon = <EyeIcon className="h-6 w-6" />,
    customDeleteIcon = <TrashIcon className="h-6 w-6" />,
    customPlusIcon = <PlusCircleIcon className="h-6 w-6 text-black" />,
    customMinusIcon = <MinusCircleIcon className="h-6 w-6 text-black" />,
    showTooltips = true,
    mode = 'light',
    showCustomScrollbar = false,
    flipIconHorizontally = false,
    showStickyHeader = true,
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleQuantityChange = (id: number, increment: boolean) => {
    if (onQuantityChange) {
      const item = items.find((item) => item.id === id);
      if (item) {
        const newQuantity = increment ? item.quantity + 1 : Math.max(1, item.quantity - 1);
        onQuantityChange(id, newQuantity);
      }
    }
  };

  const calculateTotal = () => items.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleOpen = () => {
    if (onOpen === 'click' || onOpen === 'both') toggleDropdown();
  };

  const handleMouseEnter = () => {
    if (onOpen === 'hover' || onOpen === 'both') setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (onOpen === 'hover' || onOpen === 'both') setIsOpen(false);
  };

  const bgClass = mode === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800';
  const textClass = mode === 'dark' ? 'text-gray-300' : 'text-gray-500';
  const hoverClass = mode === 'dark' ? 'hover:text-white' : 'hover:text-gray-800';
  const borderClass = mode === 'dark' ? 'border-gray-600' : 'border-gray-200';
  const stickyHeaderClass = mode === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800';

  return (
    <div className="relative inline-block" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div ref={dropdownRef}>
        <button
          ref={ref}
          onClick={handleOpen}
          aria-label={ariaLabel}
          aria-expanded={isOpen}
          className={`inline-flex items-center justify-center p-2 rounded-lg ${isDisabled ? 'cursor-not-allowed' : ''}`}
          disabled={isDisabled}
        >
          <span className={`transform transition-transform duration-300 ${flipIconHorizontally ? 'scale-x-[-1]' : ''}`}>
            {icon}
          </span>
          {itemCount > 0 && (
            <span
              className={`absolute ${
                badgePosition === 'top-right'
                  ? 'top-0 right-0 translate-x-1/2 -translate-y-1/2'
                  : 'top-0 left-0 -translate-x-1/2 -translate-y-1/2'
              } ${badgeStyle} px-2 py-1 rounded-full text-xs`}
            >
              {itemCount}
            </span>
          )}
        </button>

        {isOpen && (
          <div
            className={`absolute mt-0 w-80 sm:w-96 lg:w-[600px] ${bgClass} rounded-lg shadow-lg transition-all duration-300 ${
              animation === 'fade' ? 'opacity-100' : ''
            } ${animation === 'slide' ? 'transform translate-y-0' : ''} ${
              showCustomScrollbar
                ? 'scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-300'
                : 'scrollbar-hide'
            } max-h-[60vh] overflow-y-auto`}
          >
            {showStickyHeader && (
              <div className={`sticky top-0 z-10 ${stickyHeaderClass} p-4 text-lg font-semibold text-center`}>
                Total: ${calculateTotal().toFixed(2)}
              </div>
            )}

            <div className="p-4">
              {items.length === 0 ? (
                emptyState
              ) : (
                <div className="space-y-4">
                  {items.map((item: CartItem, index) => (
                    <div key={item.id}>
                      <div className="flex flex-col md:flex-row items-center gap-4">
                        <Image
                          src={item.imageUrl}
                          alt={item.name}
                          width={96}
                          height={96}
                          className="w-20 h-20 md:w-24 md:h-24 rounded object-cover"
                        />

                        <div className="flex-1 flex flex-col space-y-1 text-sm md:text-base">
                          <span className={`font-semibold ${mode === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                            {item.name}
                          </span>
                          <span className={`${textClass}`}>
                            ${item.price} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>

                        <div className="flex flex-row items-center space-x-2">
                          <button
                            onClick={() => handleQuantityChange(item.id, false)}
                            className={`text-gray-600 ${hoverClass} transform transition-transform duration-200 hover:scale-125`}
                          >
                            {customMinusIcon}
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() => handleQuantityChange(item.id, true)}
                            className={`text-gray-600 ${hoverClass} transform transition-transform duration-200 hover:scale-125`}
                          >
                            {customPlusIcon}
                          </button>
                        </div>

                        <div className="flex flex-row items-center space-x-2">
                          <span className="relative group">
                            <button
                              onClick={() => onViewItem && onViewItem(item.id)}
                              className={`text-gray-600 ${hoverClass} transform transition-transform duration-200 hover:scale-125`}
                            >
                              {customViewIcon}
                            </button>
                            {showTooltips && (
                              <span
                                className={`absolute bottom-full mb-1 left-1/2 -translate-x-1/2 text-xs ${bgClass} px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity`}
                              >
                                View Item
                              </span>
                            )}
                          </span>

                          <span className="relative group">
                            <button
                              onClick={() => onRemoveItem && onRemoveItem(item.id)}
                              className={`text-red-600 ${hoverClass} transform transition-transform duration-200 hover:scale-125`}
                            >
                              {customDeleteIcon}
                            </button>
                            {showTooltips && (
                              <span
                                className={`absolute bottom-full mb-1 left-1/2 -translate-x-1/2 text-xs ${bgClass} px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity`}
                              >
                                Delete Item
                              </span>
                            )}
                          </span>
                        </div>
                      </div>

                      {index < items.length - 1 && <hr className={`border-t ${borderClass} my-4`} />}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

Cart.displayName = 'Cart';
export default Cart;