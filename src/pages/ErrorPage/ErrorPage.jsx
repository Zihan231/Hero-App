import React from 'react';
import errorImg from '../../assets/Img/error-404.png'
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='col-span-4 flex flex-col items-center justify-center py-5 bg-white h-[100vh]'>
            <div>
                <img src={errorImg} alt={errorImg} />
            </div>
            <div>
                <h1 className='text-5xl font-bold text-[#001931e4] mb-4'>
                    Oops, page not found!
                </h1>
                <p className='text-[#627382] text-center'>The page you are looking for is not available.</p>
            </div>
            <div>
                <Link to='/'><button className="btn bgGrad text-white mt-6 border-0">Go Back!</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;