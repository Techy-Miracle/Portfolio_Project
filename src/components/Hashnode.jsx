import React from 'react'
import mfon_down from '../assets/mfon_down.jpg'
import mfon_up from '../assets/mfon_up.jpeg'
import mfon_image_1 from '../assets/mfon_image_1.jpeg'
import mfon_image_2 from '../assets/mfon_image_2.jpeg'
const Hashnode = () => {
    return (
        <div className='w-full bg-black py-4 px-4 pb-0 mt-10'>
            <div className='max-w-[1410px] mx-auto grid md:grid-cols-3'>
                <img className='w-[300px] h-[410px] justify-normal mx-auto my-4' src={mfon_image_1} alt='/' />

                <div className='py-8'>
                    <p className='uppercase md:text-4xl sm:text-3xl text-3xl font-extrabold text-white justify-center text-center '>"Enlighten me" <br /><span className='text-blue-700 mt-5'>With Mfon Thelma Nta</span></p>
                    <p className='text-base font-medium text-white justify-center text-center py-4 mt-2'>Are you looking for motivation, knowledge and practical experience? Then you've got
                        to check out my <span className='text-blue-700 text-lg cursor-pointer hover:text-pink-800'><a href='https://hashnode.com/@Mfon'>Hashnode</a></span> Space for lots of interesting and educative contents.<br /> There I talk about
                        Tech, Mentorship, Open Source and, very importantly, stories of my Software Development Journey!</p>

                    <div className='flex justify-center items-center space-x-4 py-4 mt-2' >
                        <button className='bg-white text-black font-bold text-lg px-2 py-2 border-4 hover:border-blue-600 hover:text-blue-700'><a href='https://hashnode.com/@Mfon'>Hashnode</a></button>
                        <button className='bg-white text-black font-bold text-base px-2 py-2 border-4 hover:border-blue-600 hover:text-blue-700'><a href='https://linkedin.com/in/mfonnta'>LinkedIn</a></button>
                        <button className='bg-white text-black font-bold text-base px-2 py-2 border-4 hover:border-blue-600 hover:text-blue-700'><a href='mfonnta05@gmail.com'>Gmail</a></button>
                        <button className='bg-white text-black font-bold text-base px-2 py-2 border-4 hover:border-blue-600 hover:text-blue-700'><a href='https://github.com/Mfonn'>GitHub</a></button>
                    </div>
                </div>



                <img className='w-[300px] mx-auto my-4' src={mfon_image_2} alt='/' />


            </div>

        </div>
    )
}

export default Hashnode