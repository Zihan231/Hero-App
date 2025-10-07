import React from 'react';

import AppCard from './AppCard';

const TrendingApps = ({ data }) => {
    // console.log(data);
    return (
        <div className='w-[85%] mx-auto mt-20 pb-50'>
            <div className='text-center mb-10'>
                <h1 className='text-5xl font-bold text-[#001931] mb-4'>Trending Apps</h1>
                <p className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            {/* cards Container */}
            <div className='grid md:grid-cols-4 gap-4 sm:grid-cols-3'>
                {/* cards */}
                {
                    data.map(dt => <AppCard key={dt.id} dt={dt}></AppCard>)
                }
            </div>
        </div>
    );
};

export default TrendingApps;