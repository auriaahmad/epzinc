import React from 'react';

interface UnderlineTextProps {
  children: React.ReactNode;
}

const UnderlineText: React.FC<UnderlineTextProps> = ({ children }) => {
  return (
    <span className="relative inline-block">
      {/* The text */}
      {children}

      {/* The underline */}
      <span
        className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500"
        aria-hidden="true"
      ></span>
    </span>
  );
};

export default UnderlineText;