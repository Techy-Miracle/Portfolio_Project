import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaHashnode } from "react-icons/fa6";
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaInstagram } from 'react-icons/fa';
import { Link } from 'react-scroll'


const Footer = () => {
    return (
        <div className='w-full h-full bg-[#1c546F]'>
            <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-4 text-gray-300'>
                <div>
                    <h1 className='w-full text-3xl font-bold text-white uppercase'>Mfon Thelma Nta.</h1>
                    <p className='py-2'>I hope you enjoyed going through this portfolio!</p>
                    <p><span className='text-pink-600'>Free</span> until you're ready to launch.</p>


                    <div className='flex justify-between md:w-[70%] my-4 mt-10 cursor-pointer text-teal-600 '>
                        <a href='https://github.com/Mfonn'><FaGithub size={30} className='hover:text-gray-100 hover:bg-teal-500 duration-500' /> </a>
                        <a href='https://linkedin.com/in/mfonnta'><FaLinkedin size={30} className='hover:text-gray-100 hover:bg-teal-500 duration-500' /> </a>
                        <a href='https://mfon.hashnode.dev/'><FaHashnode size={30} className='hover:text-gray-100 hover:bg-teal-500 duration-500' />  </a>
                        <BsFillPersonLinesFill size={30} className='hover:text-gray-100 hover:bg-teal-500 duration-500' /> 

                    </div>
                </div>

                <div className='lg:col-span-2 flex justify-around mt-10'>
                    <div>
                        <ul>
                            <li className='font-semibold text-white uppercase bg-pink-950'>Solutions</li>
                            <li className='py-2 text-sm cursor-pointer hover:text-pink-600'>Experience</li>
                            <li className='py-2 text-sm cursor-pointer hover:text-pink-600'>Projects</li>
                            <li className='py-2 text-sm cursor-pointer hover:text-pink-600'>Insights</li>
                        </ul>
                    </div>

                    <div>
                        <ul>
                            <li className='font-semibold text-white uppercase hover:text-gray-100 bg-pink-950'>Collaborations</li>
                            <li className='py-2 text-sm cursor-pointer hover:text-pink-600'>Business</li>
                            <li className='py-2 text-sm cursor-pointer hover:text-pink-600'>Recommendations</li>
                            <li className='py-2 text-sm cursor-pointer hover:text-pink-600'>Partnership</li>
                        </ul>
                    </div>

                    <div>
                        <ul>
                            <li className='font-semibold text-white uppercase hover:text-gray-100 bg-pink-950'>Development</li>
                            <li className='py-2 text-sm cursor-pointer hover:text-pink-600'>Research</li>
                            <li className='py-2 text-sm cursor-pointer hover:text-pink-600'>Open Source</li>
                            <li className='py-2 text-sm cursor-pointer hover:text-pink-600'>Volunteering</li>
                        </ul>
                    </div>

                </div>

                <ul className='flex'>
                    <li><Link to='home' smooth={true} duration={500} className='nav_link'> Home </Link></li>
                    <li><Link to='about' smooth={true} duration={500} className='nav_link'> About </Link></li>
                    <li><Link to='experience' smooth={true} duration={500} className='nav_link'> Experience </Link></li>
                    <li><Link to='projects' smooth={true} duration={500} className='nav_link'> Projects </Link></li>
                    <li><Link to='contact' smooth={true} duration={500} className='nav_link'> Contact </Link></li>
                </ul>

                <div className='px-10 mx-auto -mb-20 py-6 mt-10'>
                    <p>Copyright	&#169; 2023 Mfon Nta.</p>
                </div>




            </div>
        </div>
    )
}

export default Footer