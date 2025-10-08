import React from 'react';
import { FaGooglePlay } from "react-icons/fa";
import googlePlay from '../../assets/Img/GooglePlay.png'
import apple from '../../assets/Img/Apple.png'
const Hero = () => {
    return (
        <div className="hero bg-base-200 mb-10">
            <div className="hero-content text-center">
                <div className="">
                    <h1 className="text-6xl font-bold text-[#001931e4] max-w-[500px] mx-auto">We Build <span className='txtGrad '>Productive</span> Apps

                    </h1>
                    <p className="py-2 text-[#627382] max-w-[800px] mx-auto my-4 md:my-6 sm:my-5">
                        At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
                    </p>
                    <a href="https://play.google.com/store/games" target='_black'>
                        <button className="btn font-semibold text-lg mr-4"><img className='w-[28px] mr-1' src={googlePlay} alt=""></img> Google Play</button>
                    </a>
                    <a href="https://www.apple.com/app-store/" target='_black'>
                    <button className="btn font-semibold text-lg"><img className='w-[28px] mr-1' src={apple} alt=""></img> App Store</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;