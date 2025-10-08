import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';
import { ClockLoader } from 'react-spinners';

const Root = () => {
    const navigation = useNavigation();
    return (
        <div data-theme="light" className='bg-white'>
            <Header></Header>
            {/* Loading bar */}
            {navigation.state === 'loading' && (
                <div className="fixed top-0 left-0 w-screen h-screen bg-white flex flex-col items-center justify-center z-50">
                    <ClockLoader
                        color="#a12cff"
                        size={100}
                    />
                    <p className="mt-4 text-lg font-semibold text-[#a12cff] animate-pulse">
                        Loading, please wait...
                    </p>
                </div>
            )}
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Root;