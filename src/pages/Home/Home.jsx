import React from 'react';
import Hero from '../../Components/Hero/Hero';
import Banner from '../../Components/Banner/Banner';
import TrendingApps from '../../Components/TrendingApps/TrendingApps';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    // console.log(data)
    return (
        <div>
            <Hero></Hero>
            <Banner></Banner>
            <TrendingApps data={ data }></TrendingApps>
        </div>
    );
};

export default Home;