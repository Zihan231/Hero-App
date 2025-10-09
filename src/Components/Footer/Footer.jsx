import React from 'react';
import logo from '../../assets/Img/logo.png'
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div className='bg-[#001931] text-white inter'>
            <div className='flex justify-between items-center py-10 sm:px-10 px-4 md:px-20'>
                <Link to='/'>
                <div className='flex items-center gap-2'>
                    <img className='w-[40px] h-[40px]' src={logo} alt="" />
                    <h1 className='font-bold'>
                        HERO.IO
                    </h1>
                </div>
                </Link>
                <div>
                    <h1 className='mb-4 font-medium'>Social Links</h1>
                    <div className='flex justify-around items-center gap-4'>
                        <a className='text-xl' href="https://github.com/Zihan231" target='_blank'> 
                        <FaGithub />
                        </a>
                    
                        <a className='text-xl' href="https://www.facebook.com/Zihan231/" target='_blank'>
                            <FaFacebook />
                        </a>
                        <a className='text-xl' href="https://www.facebook.com/Zihan231/" target='_blank'>
                            <SiLinkedin/>
                        </a>
                    </div>
                </div>
            </div>
            <hr className='sm:mx-10 mx-4 md:mx-20 opacity-20 border-t-2'></hr>
            <footer className="footer sm:footer-horizontal footer-center text-white p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by <span className='font-bold'>HERO.IO</span></p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;