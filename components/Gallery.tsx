// components/Gallery.tsx

import React, { useEffect, useState } from 'react';

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  alt?: string;
}

interface GalleryProps {
  title: string;
  date?: string;
  media: MediaItem[];
}

const Gallery: React.FC<GalleryProps> = ({ title, date, media }) => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % media.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [media.length]);

  const handleThumbnailClick = (index: number) => {
    setCurrentMediaIndex(index);
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      {date && <p className="text-sm text-gray-500 mb-4">{date}</p>}
      <div className="relative w-full h-80 overflow-hidden">
        {/* Maintain original aspect ratio */}
        {media[currentMediaIndex].type === 'image' ? (
          <img
            className="absolute inset-0 w-full h-full object-contain transition-transform duration-300 transform hover:scale-110"
            src={media[currentMediaIndex].src}
            alt={media[currentMediaIndex].alt}
          />
        ) : (
          <video
            className="absolute inset-0 w-full h-full object-contain transition-transform duration-300 transform hover:scale-110"
            controls
            src={media[currentMediaIndex].src}
          />
        )}
      </div>
      <div className="grid grid-cols-5 gap-4 mt-4">
        {media.map((item, index) => (
          <div
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className="cursor-pointer transition-transform duration-300 transform hover:scale-105"
          >
            {item.type === 'image' ? (
              <img
                src={item.src}
                className="object-cover object-center h-20 rounded-lg"
                alt={item.alt}
              />
            ) : (
              <video
                className="object-cover object-center h-20 rounded-lg"
                controls
                src={item.src}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;