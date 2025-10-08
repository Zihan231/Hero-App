import { FaArrowLeft } from "react-icons/fa";
import React, { useState } from 'react';
import InstalledApps from '../../Components/InstalledApps/InstalledApps';
import { useLoaderData } from 'react-router';



const Installation = () => {
    // const values = getInstalled();
    const allApps = useLoaderData();
    const [StoredApp, setStoredApp] = useState(
        JSON.parse(localStorage.getItem('installed')) || []
    );

    // Get full app objects in the same order as StoredApp
    const installed = StoredApp.map(id => allApps.find(app => app.id === id));
    const installed2 = allApps.filter(val => StoredApp.includes(val.id));
    console.log("1====", installed);
    console.log("2====", installed2);

    const sortHighToLow = () => {
        const sorted = [...installed]
            .sort((a, b) => b.downloads - a.downloads)
            .map(app => app.id); // only IDs
        setStoredApp(sorted);
        console.log("HTL");

    };

    const sortLowToHigh = () => {
        const sorted = [...installed]
            .sort((a, b) => a.downloads - b.downloads)
            .map(app => app.id);
        setStoredApp(sorted);
        console.log("LTH");
    };


    // console.log(installed);
    return (
        <div className='md:w-[85%] w-[100%] mx-auto mt-20 pb-50'>
            <div className='text-center mb-10'>
                <h1 className='text-5xl font-bold text-[#001931e4] mb-4'>Our All Applications</h1>
                <p className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex justify-between items-center'>
                <h1 className='text-[#001931e4] font-semibold md:text-2xl sm:text-xl text-xs'>{installed.length} App Found</h1>
                <div className="dropdown dropdown-left">
                    <div tabIndex={0} role="button" className="btn m-1 border-gray-200">Sort By Downloads<FaArrowLeft /></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm text-black">
                        <li><button onClick={sortHighToLow}>High to Low</button></li>
                        <li><button onClick={sortLowToHigh}>Low To High</button></li>
                    </ul>
                </div>
            </div>
            {/* container */}
            <div className='grid grid-cols-1 gap-4 mt-2'>
                {/* cards */}
                {
                    installed.map(items => <InstalledApps key={items.id} items={items} setStoredApp={setStoredApp}></InstalledApps>)
                }


            </div>
        </div>
    );
};

export default Installation;