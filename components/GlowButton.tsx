// components/GlowButton.tsx

import React from 'react';

interface GlowButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const GlowButton: React.FC<GlowButtonProps> = ({ children, className, onClick }) => {
  return (
    <button
      className={`relative overflow-hidden rounded-md text-sm font-semibold text-white bg-indigo-600 px-3.5 py-2.5 shadow-sm transition-transform transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 glow-animation ${className}`}
      onClick={onClick}
      aria-label="Glow Button"
    >
      {children}
      <span className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-blue-500 to-indigo-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
      <style jsx>{`
        @keyframes glow {
          0% {
            box-shadow: 0 0 5px rgba(0, 123, 255, 0.5), 0 0 10px rgba(0, 123, 255, 0.5), 0 0 15px rgba(0, 123, 255, 0.5);
          }
          50% {
            box-shadow: 0 0 20px rgba(0, 123, 255, 1), 0 0 30px rgba(0, 123, 255, 1), 0 0 40px rgba(0, 123, 255, 1);
          }
          100% {
            box-shadow: 0 0 5px rgba(0, 123, 255, 0.5), 0 0 10px rgba(0, 123, 255, 0.5), 0 0 15px rgba(0, 123, 255, 0.5);
          }
        }

        .glow-animation {
          animation: glow 1.5s ease-in-out infinite; /* Adjust duration as needed */
        }
      `}</style>
    </button>
  );
};

export default GlowButton;