import React from 'react';
import bannerImg from '../../assets/Img/hero.png'

const Banner = () => {
    return (
        <div>
            <div className='md:w-[60%] sm:w-[70%] w-[90%] mx-auto'>
                <img src={bannerImg} alt=""></img>
            </div>
            <div className='bgGrad sm:py-15 py-10 md:py-20'>
                <div className='md:w-[80%] sm:w-[90%] w-[90%] mx-auto'>
                    <h1 className='inter text-white md:text-5xl sm:text-4xl text-3xl font-bold md:mb-10 sm:mb-6 mb-4 text-center'>Trusted by Millions, Built for You</h1>
                    <div className='flex flex-col md:flex-row  md:gap-50 gap-5 justify-center'>
                        {/* Cards */}
                        <div className='flex flex-col justify-center items-center gap-2 border-2 border-gray-300 md:border-0 sm:border-0 rounded-3xl py-4'>
                            <h3 className='text-white inter text-base'>
                                Total Downloads
                            </h3>
                            <h2 className='inter text-white md:text-5xl sm:text-4xl text-3xl font-bold'>
                                29.6M
                            </h2>
                            <p className='text-white inter text-base'>
                                21% More Than Last Month
                            </p>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-2 border-2 border-gray-300 md:border-0 sm:border-0 rounded-3xl py-4'>
                            <h3 className='text-white inter text-base'>
                                Total Reviews
                            </h3>
                            <h2 className='inter text-white md:text-5xl sm:text-4xl text-3xl font-bold'>
                                906K
                            </h2>
                            <p className='text-white inter text-base'>
                                46% more than last month
                            </p>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-2 border-2 border-gray-300 md:border-0 sm:border-0 rounded-3xl py-4'>
                            <h3 className='text-white inter text-base'>
                                Active Apps
                            </h3>
                            <h2 className='inter text-white md:text-5xl sm:text-4xl text-3xl font-bold'>
                                132+
                            </h2>
                            <p className='text-white inter text-base'>
                                31 more will Launch
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;