
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar } from "react-icons/fa";

import 'swiper/css';
import 'swiper/css/pagination';



import { Pagination } from 'swiper/modules';
import useVideos from '../../useTasks/useVideos';
const Banner = () => {
  const [slidesPerView, setSlidesPerView] = useState(4);

  const { data, refetch } = useVideos()
  console.log(data);
  useEffect(() => {
    // Update slidesPerView based on screen size
    const updateSlidesPerView = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(3); 
      } else {
        setSlidesPerView(4);
      }
    };

    // Call updateSlidesPerView on component mount and resize
    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);

  return (
    <>

<div className='mx-5'>
  <Swiper
    slidesPerView={slidesPerView}
    spaceBetween={30}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    className="mySwiper"
  >
    {
      data?.map(video => {
        return (
          <SwiperSlide key={video?.id}>
            <div className="relative">
              <div
                className="h-48 sm:h-64 md:h-72 lg:h-96 xl:h-96 w-full relative bg-cover bg-center"
                style={{
                  backgroundImage: `url(${video?.thumbnail_url})`,
                }}
              >
                <div className="absolute bottom-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-80"></div>
                <div className="absolute bottom-0 w-full p-2 font-medium text-white">{video?.name}</div>
                <div className="absolute top-0 p-2 text-white flex items-center gap-1"><FaStar className='text-yellow-400 text-xl'></FaStar>{video?.rating}</div>
                <div className="absolute top-0 right-0 p-2 text-white">{video?.category}</div>
              </div>
            </div>
          </SwiperSlide>
        );
      })
    }
  </Swiper>
</div>

    </>
  );
};

export default Banner;
