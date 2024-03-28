import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar } from "react-icons/fa";

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import useVideos from '../../useTasks/useVideos';
import { Link } from 'react-router-dom';
const Banner = () => {
  const [slidesPerView, setSlidesPerView] = useState(4);
  const { data, refetch } = useVideos()

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(4);
      }
    };
    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);

  return (
    <>

      <div className='mx-5 my-5'>
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
            data?.slice(0, 8).map(video => {
              return (
                <SwiperSlide key={video?.id} className='cursor-pointer' >
                  <Link  to={`/watch/${video?._id}`}>
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
                  </Link>
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
