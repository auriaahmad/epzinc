import Layout from '../../components/Layout';
import Gallery from '@/components/Gallery';
import Link from 'next/link';
import GlowButton from '@/components/GlowButton';

const QualityEngineering = () => {
  interface MediaItem {
    type: 'image' | 'video'; // Specific string literals
    src: string; // Source URL of the media
    alt?: string; // Optional alt text for images
  }

  // Media items for the New Facility Progress gallery
  const newFacilityMediaItems: MediaItem[] = [
    { type: 'image', src: '/images/gallery/1/1.webp', alt: 'New Facility Image 1' },
    { type: 'image', src: '/images/gallery/1/2.webp', alt: 'New Facility Image 2' },
    { type: 'image', src: '/images/gallery/1/3.webp', alt: 'New Facility Image 3' },
    { type: 'image', src: '/images/gallery/1/4.webp', alt: 'New Facility Image 4' },
  ];

  // Media items for the Anodize Line Progress ID 2 gallery
  const ALP2MediaItems: MediaItem[] = [
    { type: 'image', src: '/images/gallery/2/1.webp', alt: 'New Facility Image 1' },
    { type: 'image', src: '/images/gallery/2/2.webp', alt: 'New Facility Image 2' },
    { type: 'image', src: '/images/gallery/2/3.webp', alt: 'New Facility Image 3' },
    { type: 'image', src: '/images/gallery/2/4.webp', alt: 'New Facility Image 4' },
    { type: 'image', src: '/images/gallery/2/5.webp', alt: 'New Facility Image 5' },
    { type: 'image', src: '/images/gallery/2/6.webp', alt: 'New Facility Image 6' },
    { type: 'image', src: '/images/gallery/2/7.webp', alt: 'New Facility Image 7' },
    { type: 'image', src: '/images/gallery/2/8.webp', alt: 'New Facility Image 8' },
    { type: 'image', src: '/images/gallery/2/9.webp', alt: 'New Facility Image 9' },
    { type: 'image', src: '/images/gallery/2/10.webp', alt: 'New Facility Image 10' },
    { type: 'image', src: '/images/gallery/2/11.webp', alt: 'New Facility Image 11' },
    { type: 'image', src: '/images/gallery/2/12.webp', alt: 'New Facility Image 12' },
    { type: 'image', src: '/images/gallery/2/13.webp', alt: 'New Facility Image 13' },
    { type: 'image', src: '/images/gallery/2/14.webp', alt: 'New Facility Image 14' },
    { type: 'image', src: '/images/gallery/2/15.webp', alt: 'New Facility Image 15' },
  ];

  // Media items for the Anodize Line Progress ID 3 gallery
  const ALP3MediaItems: MediaItem[] = [
    { type: 'image', src: '/images/gallery/3/1.webp', alt: 'New Facility Image 1' },
    { type: 'image', src: '/images/gallery/3/2.webp', alt: 'New Facility Image 2' },
    { type: 'image', src: '/images/gallery/3/3.webp', alt: 'New Facility Image 3' },
    { type: 'image', src: '/images/gallery/3/4.webp', alt: 'New Facility Image 4' },
    { type: 'image', src: '/images/gallery/3/5.webp', alt: 'New Facility Image 5' },
    { type: 'image', src: '/images/gallery/3/6.webp', alt: 'New Facility Image 6' },
    { type: 'image', src: '/images/gallery/3/7.webp', alt: 'New Facility Image 7' },
    { type: 'image', src: '/images/gallery/3/8.webp', alt: 'New Facility Image 8' },
    { type: 'image', src: '/images/gallery/3/9.webp', alt: 'New Facility Image 9' },
    { type: 'image', src: '/images/gallery/3/10.webp', alt: 'New Facility Image 10' },
    { type: 'image', src: '/images/gallery/3/11.webp', alt: 'New Facility Image 11' },
    { type: 'image', src: '/images/gallery/3/12.webp', alt: 'New Facility Image 12' },
  ];

  // Media items for the Anodize Line Progress ID 4 gallery
  const ALP4MediaItems: MediaItem[] = [
    { type: 'image', src: '/images/gallery/4/1.webp', alt: 'New Facility Image 1' },
    { type: 'image', src: '/images/gallery/4/2.webp', alt: 'New Facility Image 2' },
    { type: 'image', src: '/images/gallery/4/3.webp', alt: 'New Facility Image 3' },
    { type: 'image', src: '/images/gallery/4/4.webp', alt: 'New Facility Image 4' },
    { type: 'image', src: '/images/gallery/4/5.webp', alt: 'New Facility Image 5' },
    { type: 'image', src: '/images/gallery/4/6.webp', alt: 'New Facility Image 6' },
    { type: 'image', src: '/images/gallery/4/7.webp', alt: 'New Facility Image 7' },
    { type: 'image', src: '/images/gallery/4/8.webp', alt: 'New Facility Image 8' },
    { type: 'image', src: '/images/gallery/4/9.webp', alt: 'New Facility Image 9' },
    { type: 'image', src: '/images/gallery/4/10.webp', alt: 'New Facility Image 10' },
    { type: 'image', src: '/images/gallery/4/11.webp', alt: 'New Facility Image 11' },
    { type: 'image', src: '/images/gallery/4/12.webp', alt: 'New Facility Image 12' },
  ];

  // Media items for the water wate ID 5 gallery
  const waterWaste: MediaItem[] = [
    { type: 'image', src: '/images/gallery/5/1.webp', alt: 'New Facility Image 1' },
  ];

  // Media items for the Anodize Line Progress ID 6 gallery
  const ALP6MediaItems: MediaItem[] = [
    { type: 'image', src: '/images/gallery/6/1.webp', alt: 'New Facility Image 1' },
    { type: 'image', src: '/images/gallery/6/2.webp', alt: 'New Facility Image 2' },
    { type: 'image', src: '/images/gallery/6/3.webp', alt: 'New Facility Image 3' },
    { type: 'image', src: '/images/gallery/6/4.webp', alt: 'New Facility Image 4' },
    { type: 'image', src: '/images/gallery/6/5.webp', alt: 'New Facility Image 5' },
    { type: 'image', src: '/images/gallery/6/6.webp', alt: 'New Facility Image 6' },
    { type: 'image', src: '/images/gallery/6/7.webp', alt: 'New Facility Image 7' },
    { type: 'image', src: '/images/gallery/6/8.webp', alt: 'New Facility Image 8' },
    { type: 'image', src: '/images/gallery/6/9.webp', alt: 'New Facility Image 9' },
    { type: 'image', src: '/images/gallery/6/10.webp', alt: 'New Facility Image 10' },
    { type: 'image', src: '/images/gallery/6/11.webp', alt: 'New Facility Image 11' },
  ];

  // Media items for the Electric Controls ID 7 gallery
  const electricControls: MediaItem[] = [
    { type: 'image', src: '/images/gallery/7/1.webp', alt: 'New Facility Image 1' },
    { type: 'image', src: '/images/gallery/7/2.webp', alt: 'New Facility Image 2' },
    { type: 'image', src: '/images/gallery/7/3.webp', alt: 'New Facility Image 3' },
    { type: 'image', src: '/images/gallery/7/4.webp', alt: 'New Facility Image 4' },
    { type: 'image', src: '/images/gallery/7/5.webp', alt: 'New Facility Image 5' },
    { type: 'image', src: '/images/gallery/7/6.webp', alt: 'New Facility Image 6' },
  ];

  // Media items for the Delivering Black Liner ID 8 gallery
  const deliveringBlackLiner: MediaItem[] = [
    { type: 'image', src: '/images/gallery/8/1.webp', alt: 'New Facility Image 1' },
    { type: 'image', src: '/images/gallery/8/2.webp', alt: 'New Facility Image 1' },
  ];

  // Media items for the Plating Tanks ID 9 gallery
  const platingTanks: MediaItem[] = [
    { type: 'image', src: '/images/gallery/9/1.webp', alt: 'New Facility Image 1' },
    { type: 'image', src: '/images/gallery/9/2.webp', alt: 'New Facility Image 2' },
    { type: 'image', src: '/images/gallery/9/3.webp', alt: 'New Facility Image 3' },
    { type: 'image', src: '/images/gallery/9/4.webp', alt: 'New Facility Image 4' },
    { type: 'image', src: '/images/gallery/9/5.webp', alt: 'New Facility Image 5' },
    { type: 'image', src: '/images/gallery/9/6.webp', alt: 'New Facility Image 6' },
    { type: 'image', src: '/images/gallery/9/7.webp', alt: 'New Facility Image 7' },
    { type: 'image', src: '/images/gallery/9/8.webp', alt: 'New Facility Image 8' },
    { type: 'image', src: '/images/gallery/9/9.webp', alt: 'New Facility Image 9' },
    { type: 'image', src: '/images/gallery/9/10.webp', alt: 'New Facility Image 10' },
  ];

  // Media items for Progress of The New Plating Shop ID 10 gallery
  const progressNewPlatingShop: MediaItem[] = [
    { type: 'image', src: '/images/gallery/10/1.webp', alt: 'New Facility Image 1' },
    { type: 'image', src: '/images/gallery/10/2.webp', alt: 'New Facility Image 1' },
  ];

  // // Other media items can be added here
  // const otherMediaItems: MediaItem[] = [
  //   { type: 'image', src: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9', alt: 'Image 1' },
  //   { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4' }, // Sample video
  //   { type: 'image', src: 'https://images.unsplash.com/photo-1432462770865-65b70566d673', alt: 'Image 2' },
  //   { type: 'image', src: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e', alt: 'Image 3' },
  //   { type: 'image', src: 'https://images.unsplash.com/photo-1518623489648-a173ef7824f3', alt: 'Image 4' },
  // ];

  // Define progress items with IDs, titles, and dates
  const progressItems = [
    { id: 1, title: "New Facility Progress", date: "10/1/2024", media: newFacilityMediaItems },
    { id: 2, title: "Anodize Line Progress", date: "7/23/2024", media: ALP2MediaItems },
    { id: 3, title: "Anodize Line Progress", date: "6/6/2023", media: ALP3MediaItems },
    { id: 4, title: "Anodize Line Progress", date: "5/31/2023", media: ALP4MediaItems },
    { id: 5, title: "Waste Water Treatment Progress", date: "5/5/2023", media: waterWaste },
    { id: 6, title: "Anodize Line Progress", date: "4/7/2023", media: ALP6MediaItems },
    { id: 7, title: "Electric Controls", date: "3/7/2022", media: electricControls },
    { id: 8, title: "Delivering Black Liner", date: "3/1/2022", media: deliveringBlackLiner },
    { id: 9, title: "Plating Tanks", date: "2/6/2022", media: platingTanks },
    { id: 10, title: "Progress of The New Plating Shop", date: "1/2023", media: progressNewPlatingShop },
  ];



  // Sort the items by date (latest first)
  const sortedItems = progressItems.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <Layout>
      <div className="bg-white min-h-screen flex flex-col items-center justify-center relative">
        <div className="absolute inset-x-0 -top-40 z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          ></div>
        </div>

        <div className="mx-auto max-w-2xl flex flex-col items-center justify-center h-full z-10">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center mt-12">
            Project Gallery
          </h1>
          <p className="mt-4 text-sm text-center text-gray-600">
            Need to know more about any project? <Link href="/contact" className="text-blue-500">Contact Us</Link>
          </p>
          <p className="mt-6 text-2xl leading-8 text-gray-600 text-center">
            Progress Timeline
          </p>
        </div>

        {/* Iterate through sorted items */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.75rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          {sortedItems.map((item) => (
            <div key={item.id} className="relative">
              <div className="md:flex items-center md:space-x-4 mb-3">
                <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                    <svg className="fill-emerald-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                      <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                    </svg>
                  </div>
                  <time className="font-caveat font-medium text-xl text-indigo-500 md:w-28">{item.date}</time>
                </div>
                <div className="text-slate-500 ml-14">
                  <span className="text-slate-900 text-xl font-bold">{item.title}</span>
                </div>

              </div>
              <div className="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-14 md:ml-44">
                <Gallery title={item.title} date={item.date} media={item.media} />
              </div>
            </div>
          ))}
        </div>
        <div className="my-10 flex items-center justify-center gap-x-6">
          <Link href="/service" passHref>
            <GlowButton>
              Explore Services
            </GlowButton>
          </Link>
          <Link href="/contact" passHref>
            <button
              className="relative rounded-md text-sm font-semibold leading-6 text-gray-900 transition-transform transform hover:scale-105 focus:outline-none"
              aria-label="Learn more about our services"
            >
              Contact Us
              <span aria-hidden="true">→</span>
              {/* Gradient Underline */}
              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-blue-500 to-indigo-500 scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default QualityEngineering;
