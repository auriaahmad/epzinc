import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

// Dynamically import components
const Cart = dynamic(() => import('@/components/e-commerce/Cart'));
const NavBar = dynamic(() => import('@/components/Navbar'));
const Footer = dynamic(() => import('@/components/Footer'));
const CartControl = dynamic(() =>
  import('@/components/e-commerce/CartControl')
);
const HeroSection1 = dynamic(() =>
  import('@/components/common/heroSection/HeroSection1')
);
const HeroSection2 = dynamic(() =>
  import('@/components/common/heroSection/HeroSection2')
);
const HeroSection3 = dynamic(() =>
  import('@/components/common/heroSection/HeroSection3')
);
const HeroSection4 = dynamic(() =>
  import('@/components/common/heroSection/HeroSection4')
);
const HeroSection5 = dynamic(() =>
  import('@/components/common/heroSection/HeroSection5')
);
const HeroSection6 = dynamic(() =>
  import('@/components/common/heroSection/HeroSection6')
);
const HeroSection7 = dynamic(() =>
  import('@/components/common/heroSection/HeroSection7')
);
const HeroSection8 = dynamic(() =>
  import('@/components/common/heroSection/HeroSection8')
);
const HeroForm1 = dynamic(() =>
  import('@/components/common/heroSection/HeroForm1')
);
const HeroForm2 = dynamic(() =>
  import('@/components/common/heroSection/HeroForm2')
);
const HeroForm3 = dynamic(() =>
  import('@/components/common/heroSection/HeroForm3')
);
const HeroForm4 = dynamic(() =>
  import('@/components/common/heroSection/HeroForm4')
);

const Pricing1 = dynamic(() => import('@/components/common/pricing/Pricing1'));
const Pricing2 = dynamic(() => import('@/components/common/pricing/Pricing2'));
const Pricing3 = dynamic(() => import('@/components/common/pricing/Pricing3'));
const Pricing4 = dynamic(() => import('@/components/common/pricing/Pricing4'));

const FAQs1 = dynamic(() => import('@/components/common/FAQs/FAQs1'));
const FAQs2 = dynamic(() => import('@/components/common/FAQs/FAQs2'));
const FAQs3 = dynamic(() => import('@/components/common/FAQs/FAQs3'));
const FAQs4 = dynamic(() => import('@/components/common/FAQs/FAQs4'));

const Blog1 = dynamic(() => import('@/components/blog/Blog1'));
const Blog2 = dynamic(() => import('@/components/blog/Blog2'));
const Blog3 = dynamic(() => import('@/components/blog/Blog3'));
const Blog4 = dynamic(() => import('@/components/blog/Blog4'));
const Blog5 = dynamic(() => import('@/components/blog/Blog5'));
const Blog6 = dynamic(() => import('@/components/blog/Blog6'));
const Blog7 = dynamic(() => import('@/components/blog/Blog7'));
const Blog8 = dynamic(() => import('@/components/blog/Blog8'));
const Blog9 = dynamic(() => import('@/components/blog/Blog9'));
const Blog10 = dynamic(() => import('@/components/blog/Blog10'));
const Blog11 = dynamic(() => import('@/components/blog/Blog11'));
const Blog12 = dynamic(() => import('@/components/blog/Blog12'));



const RenderComponentPage = () => {
  const router = useRouter();
  const { component } = router.query;

  const [innerDarkMode, setInnerDarkMode] = useState(false); // State for inner dark mode

  // Listen for messages from the parent window
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data && typeof event.data.innerDarkMode === 'boolean') {
        setInnerDarkMode(event.data.innerDarkMode);
      }
    };

    window.addEventListener('message', handleMessage);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  // Apply or remove the 'dark' class based on innerDarkMode
  useEffect(() => {
    if (innerDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [innerDarkMode]);

  // Request the current innerDarkMode from the parent window when the iframe loads
  useEffect(() => {
    window.parent.postMessage({ requestInnerDarkMode: true }, '*');
  }, []);

  // Map the component name to the actual component
  const renderComponent = () => {
    switch (component) {
      case 'cart':
        return <Cart />;
      case 'NavBar':
        return <NavBar />;
      case 'Footer':
        return <Footer />;
      case 'CartControl':
        return <CartControl />;
      case 'Hero Section 1':
        return <HeroSection1 />;
      case 'Hero Section 2':
        return <HeroSection2 />;
      case 'Hero Section 3':
        return <HeroSection3 />;
      case 'Hero Section 4':
        return <HeroSection4 />;
      case 'Hero Section 5':
        return <HeroSection5 />;
      case 'Hero Section 6':
        return <HeroSection6 />;
      case 'Hero Section 7':
        return <HeroSection7 />;
      case 'Hero Section 8':
        return <HeroSection8 />;
      case 'Hero Form 1':
        return <HeroForm1 />;
      case 'Hero Form 2':
        return <HeroForm2 />;
      case 'Hero Form 3':
        return <HeroForm3 />;
      case 'Hero Form 4':
        return <HeroForm4 />;
      case 'Pricing 1':
        return <Pricing1 />;
      case 'Pricing 2':
        return <Pricing2 />;
      case 'Pricing 3':
        return <Pricing3 />;
      case 'Pricing 4':
        return <Pricing4 />;
      case 'FAQs 1':
        return <FAQs1 />;
      case 'FAQs 2':
        return <FAQs2 />;
      case 'FAQs 3':
        return <FAQs3 />;
      case 'FAQs 4':
        return <FAQs4 />;

      case 'Blog 1':
        return <Blog1 />;
      case 'Blog 2':
        return <Blog2 />;
      case 'Blog 3':
        return <Blog3 />;
      case 'Blog 4':
        return <Blog4 />;
      case 'Blog 5':
        return <Blog5 />;
      case 'Blog 6':
        return <Blog6 />;
      case 'Blog 7':
        return <Blog7 />;
      case 'Blog 8':
        return <Blog8 />;
      case 'Blog 9':
        return <Blog9 />;
      case 'Blog 10':
        return <Blog10 />;
      case 'Blog 11':
        return <Blog11 />;
      case 'Blog 12':
        return <Blog12 />;
      default:
        return <div>Component not found</div>;
    }
  };

  return (
    <div className={`min-h-screen bg-white dark:bg-black`}>
      {renderComponent()}
    </div>
  );
};

export default RenderComponentPage;