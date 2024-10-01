// components/Footer.tsx

import Link from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white mt-auto">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between md:flex-row">
                    <div className="flex items-center space-x-4">
                        <Link href="https://www.facebook.com" passHref legacyBehavior>
                            <div className="text-gray-400 hover:text-white">
                                <FacebookIcon />
                            </div>
                        </Link>
                        <Link href="https://www.twitter.com" passHref legacyBehavior>
                            <div className="text-gray-400 hover:text-white">
                                <TwitterIcon />
                            </div>
                        </Link>
                        <Link href="https://www.instagram.com" passHref legacyBehavior>
                            <div className="text-gray-400 hover:text-white">
                                <InstagramIcon />
                            </div>
                        </Link>
                        <Link href="https://www.linkedin.com" passHref legacyBehavior>
                            <div className="text-gray-400 hover:text-white">
                                <LinkedInIcon />
                            </div>
                        </Link>
                    </div>

                    <div className="mt-4 md:mt-0">
                        <p className="text-center text-sm text-gray-400">
                            &copy; {new Date().getFullYear()} 2024 EPZ Inc. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;