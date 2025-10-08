import React from 'react';
import { LuDownload } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";
import { toast } from 'react-toastify';


function formatNumber(num) {
    if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
    if (num >= 1_000) return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
    return num.toString();
}

const InstalledApps = ({ items, setStoredApp }) => {



    return (
        <div className='flex justify-between items-center p-2 md:p-4 shadow rounded-lg'>
            <div className='flex items-center gap-6'>
                <div>
                    <img className='w-[80px] h-[80] rounded-lg' src={items.image} alt={items.image} />
                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-[#001931] inter font-medium text-xl '>
                        {items.title}
                    </h1>
                    <div className='flex items-center gap-6'>
                        <p className='text-[#00D390] font-semibold flex gap-2 items-center'><LuDownload></LuDownload>{formatNumber(items.downloads)}</p>
                        <p className='text-[#FF8811] font-semibold flex items-center gap-2'><FaStar></FaStar>{items.ratingAvg}</p>
                        <p className='text-[#627382] font-medium'>{items.size} MB</p>
                    </div>
                </div>
            </div>
            <div>
                <button onClick={() => {
                    let installed = JSON.parse(localStorage.getItem('installed')) || [];
                    installed = installed.filter(id => id !== items.id);
                    localStorage.setItem('installed', JSON.stringify(installed));
                    setStoredApp(installed);
                    toast.success("App Uninstalled Successfully 🎉", {
                        style: {
                            backgroundImage: "linear-gradient(to bottom right, #632ee3, #9f62f2)",
                            color: "#fff",
                            fontWeight: "bold",
                        },
                    });


                }} className='btn bg-[#00D390] text-white'>Uninstall</button>
            </div>
        </div>
    );
};

export default InstalledApps;