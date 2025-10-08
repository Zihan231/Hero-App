import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';

const Root = () => {
    const navigation = useNavigation();
    return (
        <div data-theme="light" className='bg-white'>
            <Header></Header>
            {/* Loading bar */}
            {navigation.state === 'loading' && (
                <div className="fixed top-0 left-0 w-screen h-screen bg-white flex items-center justify-center z-50">
                    {/* Spinner */}
                    <div className="loading loading-spinner text-primary text-6xl"></div>
                </div>
            )}
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Root;