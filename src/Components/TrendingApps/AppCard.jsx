import React from 'react';
import { LuDownload } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";
import { Link } from 'react-router';
function formatNumber(num) {
    if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
    if (num >= 1_000) return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
    return num.toString();
}

const AppCard = ({ dt }) => {
    return (
        <Link to={`/appDetails/${dt.id}`}>
            <div className='shadow-lg p-2 border-1 border-gray-200 rounded-2xl '>
                <div className='flex justify-center items-center'>
                    <img className='rounded-2xl w-[256px]' src={dt.image} alt=""></img>
                </div>
                <div className='px-2'>
                    <h1 className='text-[#001931] inter font-medium text-xl mt-4'> {dt.title} </h1>
                    <div className='flex justify-between mt-4'>
                        <p className='flex items-center gap-2 text-[#00D390] px-2 rounded-sm bg-[#F1F5E8]'>
                            <LuDownload /> {formatNumber(dt.downloads)}
                        </p>
                        <p className='flex items-center gap-2 text-[#FF8811] px-2 rounded-sm bg-[#FFF0E1]'>
                            <FaStar /> {dt.ratingAvg}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;