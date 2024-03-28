import button from '../../../assets/play.png'
import 'swiper/css';
import 'swiper/css/pagination';
import useVideos from '../../useTasks/useVideos';
import { Link } from 'react-router-dom';
const Banner = () => {
    const { data, refetch } = useVideos()



    return (
        <>

            <div className='mx-5 my-14'>
                <div>
                    <h1 className="border-l-4 pl-2 mb-10 border-[#2076eb] text-white text-3xl font-bold">Popular <span className="text-[#2076eb]">Videos</span></h1>

                </div>
                <div className='grid text-white sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10'>
                    {
                        data?.slice().reverse().map(video => {
                            return (
                                <Link to={`/watch/${video?._id}`} key={video?.id}>
                                    <div  className="cursor-pointer hover:text-[#2076eb]">
                                        <div className='relative overflow-hidden'>
                                            <img
                                                className="w-full md:h-20 sm:h-14 lg:h-28 rounded-md  transition-filter duration-300"
                                                src={video?.thumbnail_url}
                                                alt=""
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                                <img src={button} alt="" />
                                            </div>
                                        </div>
                                        <div className="py-2 bg-opacity-50 backdrop-filter ">
                                            <h1 className=" font-semibold">{video?.name}</h1>
                                            <div className="flex text-gray-400 items-center justify-between gap-5">
                                                <span>{video?.category}</span>
                                                <span>Free</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })
                    }

                </div>
            </div>
            <div className="divider"></div>

        </>
    );
};

export default Banner;
