import { TiTickOutline } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

const Plan = () => {

    return (
        <div className="my-10 mx-2">
            <div className="my-10 px-5">
                <h1 className="text-white font-bold text-3xl mb-2 border-l-4 border-[#2076eb] pl-2">Select Your Plan</h1>
                <p>No hidden fees, equipment rentals, or installation appointments.</p>
            </div>
            <div className="lg:flex-row sm:flex-col md:flex gap-5 items-center justify-evenly">
                <div className="bg-[#131720] mb-4 px-4 rounded-xl py-4 mx-2 text-white">
                    <h1 className="text-xl">Regular</h1>
                    <div className="divider"></div>
                    <div className="flex flex-col gap-4">
                        <p className="flex items-center gap-4 ">
                            <TiTickOutline className="text-green-700"></TiTickOutline>
                            <span>YouFlix Originals</span>
                        </p>
                        <p className="flex items-center gap-4">
                            <TiTickOutline className="text-green-600"></TiTickOutline>
                            <span>Switch plans or cancel anytime</span>
                        </p>
                        <p className="flex items-center gap-4">
                            <RxCross2 className="text-red-700"></RxCross2>
                            <span>Stream 65+ top Live</span>
                        </p>
                        <p className="flex items-center gap-4">
                            <RxCross2 className="text-red-700"></RxCross2>
                            <span>TV channels</span>
                        </p>
                    </div>
                    <div className="divider"></div>
                    <div className="mt-4 mb-4">
                        <strong className="text-3xl">$11.99/<small>month</small> </strong>
                    </div>
                    <button className="btn w-full text-lg uppercase">Select Plan</button>
                </div>
                <div className="bg-[#2e54ac] mb-4 px-4 rounded-xl py-4 mx-2 text-white">
                    <h1 className="text-xl">Premium</h1>
                    <div className="divider"></div>
                    <div className="flex flex-col gap-4">
                        <p className="flex items-center gap-4 ">
                            <TiTickOutline className="text-green-700"></TiTickOutline>
                            <span>YouFlix Originals</span>
                        </p>
                        <p className="flex items-center gap-4">
                            <TiTickOutline className="text-green-600"></TiTickOutline>
                            <span>Switch plans or cancel anytime</span>
                        </p>
                        <p className="flex items-center gap-4">
                        <TiTickOutline className="text-green-600"></TiTickOutline>
                            <span>Stream 65+ top Live</span>
                        </p>
                        <p className="flex items-center gap-4">
                            <RxCross2 className="text-red-700"></RxCross2>
                            <span>TV channels</span>
                        </p>
                    </div>
                    <div className="divider"></div>
                    <div className="mt-4 mb-4">
                        <strong className="text-3xl">$34.99/<small>month</small> </strong>
                    </div>
                    <button className="btn w-full text-lg uppercase">Select Plan</button>
                </div>
                <div className="bg-[#131720] px-4 rounded-xl py-4 mx-2 text-white">
                    <h1 className="text-xl">Premium + TV channels</h1>
                    <div className="divider"></div>
                    <div className="flex flex-col gap-4">
                        <p className="flex items-center gap-4 ">
                            <TiTickOutline className="text-green-700"></TiTickOutline>
                            <span>YouFlix Originals</span>
                        </p>
                        <p className="flex items-center gap-4">
                            <TiTickOutline className="text-green-600"></TiTickOutline>
                            <span>Switch plans or cancel anytime</span>
                        </p>
                        <p className="flex items-center gap-4">
                        <TiTickOutline className="text-green-600"></TiTickOutline>
                            <span>Stream 65+ top Live</span>
                        </p>
                        <p className="flex items-center gap-4">
                        <TiTickOutline className="text-green-600"></TiTickOutline>
                            <span>TV channels</span>
                        </p>
                    </div>
                    <div className="divider"></div>
                    <div className="mt-4 mb-4">
                        <strong className="text-3xl">$49.99/<small>month</small> </strong>
                    </div>
                    <button className="btn w-full text-lg uppercase">Select Plan</button>
                </div>
            </div>
        </div>
    );
};

export default Plan;