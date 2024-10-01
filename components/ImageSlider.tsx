// components/ImageSlider.tsx

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

interface ImageSliderProps {
  images: { src: string; description: string }[];
  autoplayDelay?: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, autoplayDelay = 3000 }) => {
  // Duplicate images to ensure smooth looping
  const duplicatedImages = [...images, ...images];

  return (
    <div className="w-full relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={3}
        slidesPerGroup={1}
        centeredSlides={true}
        pagination={{ clickable: true }}
        navigation
        loop={true}
        // loopedSlides={duplicatedImages.length}
        autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
        spaceBetween={30}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: false,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: true,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
            centeredSlides: true,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
            centeredSlides: true,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 30,
            centeredSlides: true,
          },
        }}
      >
        {duplicatedImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="bg-indigo-50 rounded-2xl h-96 flex flex-col justify-center items-center p-4">
              <img
                src={image.src}
                alt={`Slide ${index + 1}`}
                className="rounded-2xl h-64 w-full object-cover object-center mb-4"
              />
              <span className="text-xl font-semibold text-indigo-600 text-center">
                {image.description}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;