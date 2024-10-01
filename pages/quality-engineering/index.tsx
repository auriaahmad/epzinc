import Layout from '../../components/Layout';
import Gallery from '@/components/Gallery';

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

  // Other media items can be added here
  const otherMediaItems: MediaItem[] = [
    { type: 'image', src: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9', alt: 'Image 1' },
    { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4' }, // Sample video
    { type: 'image', src: 'https://images.unsplash.com/photo-1432462770865-65b70566d673', alt: 'Image 2' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e', alt: 'Image 3' },
    { type: 'image', src: 'https://images.unsplash.com/photo-1518623489648-a173ef7824f3', alt: 'Image 4' },
  ];

  // Define progress items with IDs, titles, and dates
  const progressItems = [
    { id: 1, title: "New Facility Progress", date: "10/1/2024", media: newFacilityMediaItems },
    { id: 2, title: "Anodize Line Progress", date: "7/23/2024", media: otherMediaItems },
    { id: 3, title: "Anodize Line Progress", date: "6/6/2023", media: otherMediaItems },
    { id: 4, title: "Anodize Line Progress", date: "5/31/2023", media: otherMediaItems },
    { id: 5, title: "Waste Water Treatment Progress", date: "5/5/2023", media: otherMediaItems },
    { id: 6, title: "Anodize Line Progress", date: "4/7/2023", media: otherMediaItems },
    { id: 7, title: "Electric Controls", date: "3/7/2022", media: otherMediaItems },
    { id: 8, title: "Delivering Black Liner", date: "3/1/2022", media: otherMediaItems },
    { id: 9, title: "Plating Tanks", date: "2/6/2022", media: otherMediaItems },
    { id: 10, title: "Progress of The New Plating Shop", date: "1/2023", media: otherMediaItems },
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
          <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
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
                <div className="text-slate-500 ml-14"><span className="text-slate-900 font-bold">{item.title}</span></div>
              </div>
              <div className="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-14 md:ml-44">
                <Gallery title={item.title} date={item.date} media={item.media} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default QualityEngineering;
