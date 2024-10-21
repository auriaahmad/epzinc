import React, { useState } from 'react';
import { ShoppingCartIcon, TrashIcon, EyeIcon } from '@heroicons/react/24/outline';
import Cart from '@/components/e-commerce/Cart';

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

const TestPage = () => {
  const [cartItems, setCartItems] = useState(cartItemsMock);

  const [badgePosition, setBadgePosition] = useState<'top-right' | 'top-left'>('top-right');
  const [onOpen, setOnOpen] = useState<'hover' | 'click' | 'both'>('click');
  const [animation, setAnimation] = useState<'fade' | 'slide' | 'zoom'>('fade');
  const [isDisabled, setIsDisabled] = useState(false);
  const [showTooltips, setShowTooltips] = useState(true);
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const [showCustomScrollbar, setShowCustomScrollbar] = useState(false);
  const [flipIconHorizontally, setFlipIconHorizontally] = useState(true);

  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleQuantityChange = (id: number, newQuantity: number) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  return (
    <div className="mx-4 mt-9 flex flex-col md:flex-row md:space-x-10">
      {/* Render Cart Component */}
      <div className="flex-1 mb-6 md:mb-0">
        <Cart
          icon={<ShoppingCartIcon className="h-8 w-8" />}
          itemCount={cartItems.length}
          badgePosition={badgePosition}
          badgeStyle="bg-green-500 text-white"
          onOpen={onOpen}
          animation={animation}
          items={cartItems}
          onRemoveItem={handleRemoveItem}
          onQuantityChange={handleQuantityChange}
          emptyState={<div className="text-gray-500 text-center">Your cart is empty. Start shopping now!</div>}
          customViewIcon={<EyeIcon className="h-6 w-6 text-blue-600" />}
          customDeleteIcon={<TrashIcon className="h-6 w-6 text-red-600" />}
          showTooltips={showTooltips}
          mode={mode}
          isDisabled={isDisabled}
          showCustomScrollbar={showCustomScrollbar}
          flipIconHorizontally={flipIconHorizontally}
        />
      </div>

      {/* Dynamic Prop Selector Section */}
      
      <div className="w-full md:w-1/4 p-6 bg-gray-900 text-white rounded-lg shadow-md">
        <h2 className="text-lg font-bold text-white mb-4">Component Settings</h2>

        {/* Badge Position Dropdown */}
        <div className="flex items-center space-x-4 mb-4">
          <label className="font-semibold text-white">Badge Position:</label>
          <select
            className="p-2 border border-gray-500 rounded bg-gray-800 text-white"
            value={badgePosition}
            onChange={(e) => setBadgePosition(e.target.value as 'top-right' | 'top-left')}
          >
            <option value="top-right">Top Right</option>
            <option value="top-left">Top Left</option>
          </select>
        </div>

        {/* On Open Dropdown */}
        <div className="flex items-center space-x-4 mb-4">
          <label className="font-semibold text-white">Open On:</label>
          <select
            className="p-2 border border-gray-500 rounded bg-gray-800 text-white"
            value={onOpen}
            onChange={(e) => setOnOpen(e.target.value as 'hover' | 'click' | 'both')}
          >
            <option value="click">Click</option>
            <option value="hover">Hover</option>
            <option value="both">Both</option>
          </select>
        </div>

        {/* Animation Dropdown */}
        <div className="flex items-center space-x-4 mb-4">
          <label className="font-semibold text-white">Animation:</label>
          <select
            className="p-2 border border-gray-500 rounded bg-gray-800 text-white"
            value={animation}
            onChange={(e) => setAnimation(e.target.value as 'fade' | 'slide' | 'zoom')}
          >
            <option value="fade">Fade</option>
            <option value="slide">Slide</option>
            <option value="zoom">Zoom</option>
          </select>
        </div>

        {/* Mode Dropdown */}
        <div className="flex items-center space-x-4 mb-4">
          <label className="font-semibold text-white">Mode:</label>
          <select
            className="p-2 border border-gray-500 rounded bg-gray-800 text-white"
            value={mode}
            onChange={(e) => setMode(e.target.value as 'light' | 'dark')}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        {/* isDisabled Checkbox */}
        <div className="flex items-center space-x-4 mb-4">
          <label className="font-semibold text-white">Disabled:</label>
          <input
            type="checkbox"
            checked={isDisabled}
            onChange={(e) => setIsDisabled(e.target.checked)}
            className="h-4 w-4"
          />
        </div>

        {/* showTooltips Checkbox */}
        <div className="flex items-center space-x-4 mb-4">
          <label className="font-semibold text-white">Show Tooltips:</label>
          <input
            type="checkbox"
            checked={showTooltips}
            onChange={(e) => setShowTooltips(e.target.checked)}
            className="h-4 w-4"
          />
        </div>

        {/* showCustomScrollbar Checkbox */}
        <div className="flex items-center space-x-4 mb-4">
          <label className="font-semibold text-white">Show Custom Scrollbar:</label>
          <input
            type="checkbox"
            checked={showCustomScrollbar}
            onChange={(e) => setShowCustomScrollbar(e.target.checked)}
            className="h-4 w-4"
          />
        </div>

        {/* Flip Icon Horizontally Checkbox */}
        <div className="flex items-center space-x-4">
          <label className="font-semibold text-white">Flip Icon Horizontally:</label>
          <input
            type="checkbox"
            checked={flipIconHorizontally}
            onChange={(e) => setFlipIconHorizontally(e.target.checked)}
            className="h-4 w-4"
          />
        </div>
      </div>
    
    
    </div>
  );
};

export default TestPage;
