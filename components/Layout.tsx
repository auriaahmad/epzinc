// components/Layout.tsx

import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen"> {/* Use flexbox and ensure full height */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      {/* Add padding to the top so content doesn't hide behind the fixed navbar */}
      <main className="pt-16 flex-grow">{children}</main> {/* Allow main to grow */}
      <Footer /> {/* Footer will be part of the normal flow */}
    </div>
  );
};

export default Layout;