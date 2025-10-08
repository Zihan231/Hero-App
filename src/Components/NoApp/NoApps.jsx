import React from 'react';
import noAppImg from '../../assets/Img/App-Error.png'
import { Link } from 'react-router';

const NoApps = () => {
    return (
        <div className='col-span-4 flex flex-col items-center justify-center py-5'>
            <div>
                <img src={noAppImg} alt="" />
            </div>
            <div>
                <h1 className='text-5xl font-bold text-[#001931e4] mb-4'>
                    OPPS!! APP NOT FOUND
                </h1>
                <p className='text-[#627382]'>
                    The App you are requesting is not found on our system.  please try another apps
                </p>
            </div>
            <div>
                <Link to='/'><button className="btn bgGrad text-white mt-6">Go Back!</button></Link>
            </div>
        </div>
    );
};

export default NoApps;