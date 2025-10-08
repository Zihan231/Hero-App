import React, { useState } from 'react';
import AppCard from '../../Components/TrendingApps/AppCard';
import { useLoaderData } from 'react-router';
import NoApps from '../../Components/NoApp/NoApps.jsx'

const Apps = () => {
    const data = useLoaderData();
    const [searchTerm, setSearchTerm] = useState('');
    const filteredApps = data.filter(dt =>
        dt.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // console.log(data.filter(dt => dt.title.toLowerCase().includes(searchTerm.toLowerCase())));
    // console.log(data.map(x => x.title));

    return (
        <div className='md:w-[85%] w-[100%] mx-auto mt-20 pb-50 flex flex-col justify-center items-center'>
            <div className='text-center mb-10'>
                <h1 className='text-5xl font-bold text-[#001931e4] mb-4'>Our All Applications</h1>
                <p className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            {/* Search */}
            <div className='flex justify-between items-center w-[90%] mb-4'>
                <h1 className='text-[#001931e4] font-semibold md:text-2xl sm:text-xl text-xs'>
                    ({data.length}) Apps Found
                </h1>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder="Search" value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} />
                </label>
            </div>
            {/* cards Container */}
            <div className='grid md:grid-cols-4 gap-4 sm:grid-cols-3'>
                {filteredApps.length > 0 ? (
                    filteredApps.map(dt => <AppCard key={dt.id} dt={dt} />)
                ) : (
                    <NoApps />
                )}
            </div>
        </div>
    );
};

export default Apps;