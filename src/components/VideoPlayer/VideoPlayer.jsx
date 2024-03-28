import { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import useVideos from '../useTasks/useVideos';
import button from '../../assets/play.png'

const VideoPlayer = () => {
    const { id } = useParams()
    const [comments, setComments] = useState([]);
    const playerRef = useRef(null);
    const [movieDetails, setMovieDetails] = useState(null);
    const { data, refetch } = useVideos()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://y-ehmc1eykv-sakib-hossains-projects.vercel.app/vid/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setMovieDetails(data);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };

        fetchData();
    }, [id]);
    const addComment = (e) => {
        e.preventDefault();
        const text = e.target.commentText.value;
        if (!text) {
            return;
        }
        const currentTime = playerRef.current.getCurrentTime();
        const newComment = {
            timestamp: currentTime,
            text: e.target.commentText.value,
        };
        setComments([...comments, newComment]);
        e.target.commentText.value = '';
    };

    return (
        <div>
            <div className="flex gap-4 my-2 mx-5 items-center">
                <div className="w-8/12 mb-8">
                    <ReactPlayer
                        ref={playerRef}
                        url={movieDetails?.youtube_url}
                        controls={true}
                        width="100%"
                        height="500px"
                    />
                    <div className='my-5'>
                        <h1 className='text-white text-2xl'>{movieDetails?.name}</h1>
                        <p className='text-gray-400'>{movieDetails?.description}</p>
                        <div>
                            <div className="divider"></div>
                            <div className='flex gap-5 my-1'>
                                <span className='bg-blue-600 px-4 py-1 text-white rounded'>{movieDetails?.category}</span>
                                <span className='bg-blue-600 px-4 py-1 text-white rounded'>New</span>
                                <span className='bg-blue-600 px-4 py-1 text-white rounded'>{movieDetails?.duration}</span>
                                <span className='bg-blue-600 px-4 py-1 text-white rounded'>Rating {movieDetails?.rating}</span>
                            </div>
                            <div className="divider"></div>
                        </div>
                    </div>
                </div>
                <div className='w-4/12 my-2 top-0 absolute right-0'>
                    <div className=''>
                        <div className="h-[500px] relative border border-gray-200 rounded-lg p-4">
                            <h2 className="text-xl font-bold mb-4">Live Chat</h2>
                            <div className="max-h-72 overflow-y-auto">
                                <ul>
                                    {comments.map((comment, index) => (
                                        <li key={index} className="mb-2">
                                            <span className="font-bold">{comment.timestamp.toFixed(2)}</span> - {comment.text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="absolute bottom-4 left-0 w-full">
                                <form className='flex mx-2 items-center' onSubmit={addComment}>
                                    <input name='commentText' type="text" placeholder="Write a comment..." className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" />
                                    <input type="submit" className='bg-blue-500 cursor-pointer text-white py-2 px-4 ml-2 rounded-lg' value="Add Comment" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='mx-5'>
                <h1 className='text-2xl border-l-2 pl-2  my-5 '>Related Video</h1>
                <div className='grid text-white sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10'>
                    {
                        data?.slice(0, 5).reverse().map(video => {
                            return (
                                <Link to={`/watch/${video?._id}`} key={video?.id}>
                                    <div className="cursor-pointer hover:text-[#2076eb]">
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
        </div>
    );
};

export default VideoPlayer;
