import Layout from "@/components/Layout";
import ImageSlider from "@/components/ImageSlider";
import IndustriesList from "@/components/IndustriesList";
import Image from "next/image";
import Card from "@/components/Card";

// Icons imports for the points
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import SpeedIcon from '@mui/icons-material/Speed';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import CodeIcon from '@mui/icons-material/Code';

const Quality = () => {
  const imagesWithDescriptions = [
    { src: '/images/quality/banner/1.webp', description: 'Class 100 Cleanroom' },
    { src: '/images/quality/banner/2.webp', description: 'Fischer FMP10C' },
    { src: '/images/quality/banner/3.webp', description: 'Hitachi FT110A XRF' },
  ];

  const certificatePDFs = [
    { src: '/images/quality/certificates/1.pdf', label: 'Certificate 1', thumbnail: '/images/quality/certificates/1.webp' },
    { src: '/images/quality/certificates/2.pdf', label: 'Certificate 2', thumbnail: '/images/quality/certificates/2.webp' },
    { src: '/images/quality/certificates/3.pdf', label: 'Certificate 3', thumbnail: '/images/quality/certificates/3.webp' },
  ];

  // Define points to display with their corresponding icons
  const qualityPoints = [
    {
      label: 'We have the capability to certify your job to any specification. This includes Mil., ASTM, NADCAP, and Custom Customer Specifications.',
      icon: <AssignmentTurnedInIcon />,
    },
    {
      label: 'Offering a fast turn-around while maintaining a high level of quality is one objective that we constantly monitor and review.',
      icon: <SpeedIcon />,
    },
    {
      label: 'We process job orders by using our own customized software, creating traceable processes and job shop controls as well as quality controls that meet or exceed ISO requirements.',
      icon: <SettingsApplicationsIcon />,
    },
    {
      label: 'We created our own software that allows us to monitor and control the parameters of our plating baths, ensuring consistent high quality every day.',
      icon: <CodeIcon />,
    },
  ];

  const qualityControlCards = [
    {
      image: '/images/quality/control/1.jpg',
      heading: 'Industrial',
      description: 'We can process jobs using Industry Standard Procedures.',
      buttonText: 'Contact Us',
      buttonLink: '/contact',
    },
    {
      image: '/images/quality/control/2.jpg',
      heading: 'Hi-Tech',
      description: 'We can process Higher Technical jobs using Advanced Procedures where we can control and document each parameter with a tighter tolerance. This results in a high yield rate and a higher degree of traceability.',
      buttonText: 'Contact Us',
      buttonLink: '/contact',
    },
    {
      image: '/images/quality/control/3.jpg',
      heading: 'Aerospace',
      description: 'We can process jobs under strict Aerospace Specifications where traceability, process control, and process testing are critical in order to comply with Aerospace Specifications.',
      buttonText: 'Contact Us',
      buttonLink: '/contact',
    },
  ];

  return (
    <Layout>
      <div className="bg-white min-h-screen flex items-center justify-center relative">
        <main className="relative isolate px-6 lg:px-8 w-full">
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            ></div>
          </div>
          <div className="mx-auto max-w-2xl flex flex-col items-center justify-center h-full z-10 mt-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center">
              Our Quality
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
              Our commitment to the customer is what makes us unique in the plating business. EPZ Inc. employees are dedicated to meeting customers' needs in any way possible. With over 25+ years in business, EPZ Inc. has helped its customers meet high industry standards by delivering High Quality & Fast Turn Around Metal Finishing.
            </p>
          </div>

          {/* Image Slider */}
          <div className="mt-12">
            <ImageSlider images={imagesWithDescriptions} autoplayDelay={4000} />
          </div>

          {/* Content centered in viewport */}
          <div className=" mt-12 flex flex-col sm:flex-row justify-center items-center space-x-0 sm:space-x-6 space-y-6 sm:space-y-0 mb-6">
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
          <div className="mt-12">
            <IndustriesList industries={qualityPoints} />
          </div>

          {/* Quality Assurance Section with PDF Links */}
          <div className="relative isolate px-6 lg:px-8 w-full">
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              ></div>
            </div>
            <div className="mx-auto max-w-4xl flex flex-col items-center justify-center h-full z-10 mt-12">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center">
                Quality Assurance
              </h2>

              {/* Display PDFs Horizontally */}
              <div className="mb-12 flex justify-center items-center space-x-6 mt-8">
                {certificatePDFs.map((pdf, index) => (
                  <a
                    key={index}
                    href={pdf.src}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={pdf.thumbnail}  // Use the actual PDF preview thumbnail
                      alt={`PDF Preview ${index + 1}`}
                      width={400}  // Increased width to make it larger
                      height={600}  // Keep the aspect ratio larger
                      className="object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quality Control Cards */}
          <div className="mx-auto max-w-7xl flex flex-col items-center justify-center h-full z-10 mt-12 px-4">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center">
              Quality Control
            </h1>
            <p className="mt-6 text-lg text-gray-600 text-center">
              We offer 3 tiers of Quality Control that allow us to tailor to each of our Customer's Requirements.
            </p>

            {/* Cards Container */}
            <div className="flex flex-wrap justify-center mt-6">
              {qualityControlCards.map((card, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4 flex">
                  <Card
                    image={card.image}
                    heading={card.heading}
                    description={card.description}
                    buttonText="Contact Us"
                    buttonLink="/contact"
                  />
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Quality;