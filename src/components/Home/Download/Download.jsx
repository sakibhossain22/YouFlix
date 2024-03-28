import { FaGooglePlay, FaApple } from 'react-icons/fa';
import image from '../../../assets/download.png';
const Download = () => (
    <div className='w-full mx-auto mb-5 text-white'>
        <div className='bg-[#2e54ac]'>
            <div className='bg-[#2e54ac] w-11/12 py-5 mx-auto md:flex lg:flex items-center gap-5 justify-center'>
                <div className='text-white md:w-1/2'>
                    <div className='flex items-center gap-4 my-4'>
                        <div className='h-1 w-7 bg-yellow-400'></div>
                        <h1 className='text-lg  uppercase font-bold'>Mobile Application</h1>
                    </div>
                    <div className='space-y-5'>
                        <h1 className='lg:text-5xl text-3xl  md:text-4xl font-bold'>Download  Our <br />Application</h1>
                        <p className="">Quaerat debitis, vel, sapiente dicta sequi
                            labore porro pariatur harum expedita.
                        </p>
                        <div className='flex items-center gap-5 pb-4'>
                            <button className='btn bg-yellow-500 lg:px-8'>
                                <FaGooglePlay className='text-white'></FaGooglePlay>
                                <h1 className="text-black">Play Store</h1>
                            </button>
                            <button className='btn bg-yellow-500 lg:px-8'>
                                <FaApple className='text-white'></FaApple>
                                <h1 className="text-black">Apple Store</h1>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='w-1/2  hidden md:block lg:block flex-1'>
                    <img className='' src={image} alt="" />
                </div>
            </div>
        </div>
    </div>
);

export default Download;