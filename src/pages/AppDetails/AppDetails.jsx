import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { LuDownload } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";
import { MdReviews } from "react-icons/md";
import Chart from '../../Components/Chart/Chart';
import { addToLocal } from '../../utility/addToLocal';
import { toast } from 'react-toastify';


const AppDetails = () => {
    const { appId } = useParams();
    const ID = parseInt(appId);
    const data = useLoaderData();
    const singleApp = data.find(a => a.id === ID);

    // console.log(singleApp);
    const ratings = singleApp.ratings;

    function formatNumber(num) {
        if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
        if (num >= 1_000_000) return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
        if (num >= 1_000) return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
        return num.toString();
    }
    const checkLocal = () => {
        const items = JSON.parse(localStorage.getItem('installed')) || [];
        return items.includes(singleApp.id);

    }
    const [isInstalled, setIsInstalled] = useState(checkLocal());

    useEffect(() => {
        setIsInstalled(checkLocal());
    }, [singleApp]);
    const handleInstall = (id) => {
        const result = addToLocal(id);
        setIsInstalled(true);
        if (result) {
            toast.warning("Already Installed !", {
                style: {
                    backgroundImage: "linear-gradient(to bottom right, #632ee3, #9f62f2)",
                    color: "#fff",
                    fontWeight: "bold",
                },
            });
        }
        else {
            toast.success("Installation was successful 🎉", {
                style: {
                    backgroundImage: "linear-gradient(to bottom right, #632ee3, #9f62f2)",
                    color: "#fff",
                    fontWeight: "bold",
                },
            });
        }
    }
    return (
        // Main Div
        < div className = 'pb-20' >
            {/* App Details Div */ }
            <div div className = 'md:w-[85%] sm:w-[90%] w-[95%] mx-auto mt-10 inter' >
                <div className='grid md:grid-cols-[1fr_3fr] grid-cols-1 gap-4'>
                    <div className='flex items-center justify-center'>
                        <img className='rounded-2xl w-[256px]' src={singleApp.image} alt={singleApp.title}></img>
                    </div>
                    <div>
                        <div className='mb-4'>
                            <h2 className='text-[#001931] font-bold text-3xl'>{singleApp.title}</h2>
                            <p className='text-[#627382] '>Developed by <span className='txtGrad text-xl font-medium'>{singleApp.companyName}</span></p>
                        </div>
                        <hr className='opacity-20 border-t-2'></hr>
                        <div className='flex md:justify-start justify-center gap-20'>
                            <div className='mt-4 flex flex-col gap-2 '>
                                <p className='text-[#00D390] text-3xl font-semibold'><LuDownload></LuDownload></p>
                                <p className='text-xs md:text-base'>Downloads</p>
                                <h1 className='font-extrabold md:text-3xl'>{formatNumber(singleApp.downloads)}</h1>
                            </div>
                            <div className='mt-4 flex flex-col gap-2 '>
                                <p className='text-[#FF8811] text-3xl font-semibold'><FaStar></FaStar></p>
                                <p className='text-xs md:text-base'>Average Ratings</p>
                                <h1 className='font-extrabold md:text-3xl'>{singleApp.ratingAvg}</h1>
                            </div>
                            <div className='mt-4 flex flex-col gap-2 '>
                                <p className='text-[#632EE3] text-3xl font-semibold'><MdReviews /></p>
                                <p className='text-xs md:text-base'>Total Reviews</p>
                                <h1 className='font-extrabold md:text-3xl'>{formatNumber(singleApp.reviews)}</h1>
                            </div>
                        </div>
                        <div className='flex justify-center md:justify-start items-center my-4'>
                            <button
                                onClick={() => handleInstall(singleApp.id)}
                                className="btn bg-[#00D390] text-white"
                            >
                                {isInstalled ? "Installed" : `Install Now (${singleApp.size})`}
                            </button>
                        </div>
                    </div>
                </div>
            </div >
            <Chart ratings={ratings}></Chart>
            <div className='md:w-[85%] sm:w-[90%] w-[95%] mx-auto mt-10 inter'>

                <h1 className="font-semibold text-2xl mb-4">Description</h1>
                <p className='text-[#627382] text-xs'>
                    {singleApp.description}
                </p>
            </div>
        </div >
    );
};

export default AppDetails;