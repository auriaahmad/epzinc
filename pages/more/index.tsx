// pages/about.tsx

import Layout from "@/components/Layout";
import ProductSection from "@/components/ProductSection";
import Link from "next/link";
import GlowButton from "@/components/GlowButton";
import Image from "next/image";


// Import Material Icons
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import Agriculture from "@mui/icons-material/Agriculture";
// import EcoIcon from '@mui/icons-material/Eco';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';

const AboutPage = () => {
  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen flex flex-col items-center">

        {/* Header Section */}
        <header className="bg-blue-600 text-white w-full p-10">

          <h1 className="text-4xl font-bold text-center">About Us</h1>
          <p className="text-center mt-2">Committed to Quality and Excellence</p>
        </header>


        {/* Main Content Section */}
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who We Are</h2>
          <p className="text-gray-700 mb-4">
            EPZ, Inc. is committed to providing the best quality and service to our customers. For over 25 years, EPZ, Inc. has been delivering high-quality, fast turnaround metal finishing that meets and exceeds our customer&apos;s requirements. Our team consists of Platers with 40 years of experience, including those who have been in the industry since 1980.
          </p>

          {/* Badges Section */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-x-0 sm:space-x-6 space-y-6 sm:space-y-0 mb-6">
            <Image
              src="/images/badges/1.webp"
              alt="Badge 1"
              width={150}
              height={150}
              className="object-contain"
            />
            <Image
              src="/images/badges/2.webp"
              alt="Badge 2"
              width={150}
              height={150}
              className="object-contain"
            />
            <Image
              src="/images/badges/3.webp"
              alt="Badge 3"
              width={150}
              height={150}
              className="object-contain"
            />
          </div>

          {/* Buttons Container */}
          <div className="flex flex-col items-center my-6">
            <Link href="/service" passHref>
              <GlowButton>
                Explore Services
              </GlowButton>
            </Link>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            To deliver unparalleled metal finishing services while ensuring customer satisfaction and fostering long-term relationships.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Expertise</h2>
          <p className="text-gray-700 mb-4">
            Our credible experience and industry-leading expertise in metal finishing make us an integral part of the supply chain. Since 1993, we have been serving the needs of various sectors including Commercial / Industrial, Semiconductor, Electronics, Medical, Military, Aerospace, and Hi-Tech applications.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Industries We Serve</h2>
          <ul className="list-none space-y-4 text-gray-700 mb-4">
            <li className="flex items-center space-x-3">
              <MedicalServicesIcon className="text-blue-500 w-6 h-6" />
              <span>Medical Equipment</span>
            </li>
            <li className="flex items-center space-x-3">
              <AccountBalanceIcon className="text-blue-500 w-6 h-6" />
              <span>Government Hardware</span>
            </li>
            <li className="flex items-center space-x-3">
              <NetworkCheckIcon className="text-blue-500 w-6 h-6" />
              <span>Telecommunications Equipment</span>
            </li>
            <li className="flex items-center space-x-3">
              <MilitaryTechIcon className="text-blue-500 w-6 h-6" />
              <span>Aerospace and Defense</span>
            </li>
            <li className="flex items-center space-x-3">
              <DevicesOtherIcon className="text-blue-500 w-6 h-6" />
              <span>Electronics Equipment</span>
            </li>
            <li className="flex items-center space-x-3">
              <DirectionsBoatIcon className="text-blue-500 w-6 h-6" />
              <span>Marine Equipment</span>
            </li>
            <li className="flex items-center space-x-3">
              <RestaurantMenuIcon className="text-blue-500 w-6 h-6" />
              <span>Food Equipment</span>
            </li>
            <li className="flex items-center space-x-3">
              <Agriculture className="text-blue-500 w-6 h-6" />
              <span>Agriculture Equipment</span>
            </li>
            <li className="flex items-center space-x-3">
              <LocalGasStationIcon className="text-blue-500 w-6 h-6" />
              <span>Oil & Gas Hardware</span>
            </li>
          </ul>
          <div className="flex flex-col items-center my-6">
            <Link href="/contact" passHref>
              <GlowButton>
                Contact Us
              </GlowButton>
            </Link>
          </div>
        </div>

        {/* Team Section */}
        <section className="bg-white dark:bg-gray-900 w-full mt-8">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Team</h2>
              <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Meet the experts behind EPZ, Inc.</p>
            </div>
            <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
              {/* Team Member 1 */}
              <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                <div className="relative w-full h-48 sm:w-48 sm:h-48 flex-shrink-0">
                  <Image
                    className="object-cover rounded-t-lg sm:rounded-none sm:rounded-l-lg"
                    src="/images/team/1.jpeg" // Path to image1.jpeg
                    alt="Guillermo Gutierrez Avatar"
                    layout="fill" // For Next.js 12 or earlier
                    objectFit="cover" // Ensure the image covers the container
                    objectPosition="top" // Prevent head cropping
                    priority={true} // Optional: Load this image with high priority
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Guillermo Gutierrez</a>
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400">Role: Plater</span>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Guillermo brings over 40 years of experience in metal finishing.</p>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                <div className="relative w-full h-48 sm:w-48 sm:h-48 flex-shrink-0">
                  <Image
                    className="object-cover rounded-t-lg sm:rounded-none sm:rounded-l-lg"
                    src="/images/team/4.jpeg" // Path to image4.jpeg
                    alt="Raza Khalid Avatar"
                    layout="fill" // For Next.js 12 or earlier
                    objectFit="cover" // Ensure the image covers the container
                    objectPosition="top" // Prevent head cropping
                    priority={true} // Optional: Load this image with high priority
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Raza Khalid</a>
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400">Role: Senior Plater</span>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Raza has been a vital part of our team since 1980.</p>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                <div className="relative w-full h-48 sm:w-48 sm:h-48 flex-shrink-0">
                  <Image
                    className="object-cover rounded-t-lg sm:rounded-none sm:rounded-l-lg"
                    src="/images/team/2.jpeg" // Path to image2.jpeg
                    alt="Ali Manesh Avatar"
                    layout="fill" // For Next.js 12 or earlier
                    objectFit="cover" // Ensure the image covers the container
                    objectPosition="top" // Prevent head cropping
                    priority={true} // Optional: Load this image with high priority
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Ali Manesh</a>
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400">Role: Quality Assurance</span>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Ali ensures that all processes meet our quality standards.</p>
                </div>
              </div>

              {/* Team Member 4 */}
              <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                <div className="relative w-full h-48 sm:w-48 sm:h-48 flex-shrink-0">
                  <Image
                    className="object-cover rounded-t-lg sm:rounded-none sm:rounded-l-lg"
                    src="/images/team/3.jpeg" // Path to image3.jpeg
                    alt="Mojtaba Askari Avatar"
                    layout="fill" // For Next.js 12 or earlier
                    objectFit="cover" // Ensure the image covers the container
                    objectPosition="top" // Prevent head cropping
                    priority={true} // Optional: Load this image with high priority
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Mojtaba Askari</a>
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400">Role: Operations Manager</span>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Mojtaba oversees our operations to ensure efficiency and quality.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Statement */}
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md mt-8 mb-8">
          <p className="text-gray-700">
            At EPZ, Inc., we pride ourselves on our dedication to quality and our commitment to customer satisfaction. We look forward to continuing our service to our valued clients and partners.
          </p>
        </div>
      </div>
      <ProductSection />
    </Layout>
  );
};

export default AboutPage;