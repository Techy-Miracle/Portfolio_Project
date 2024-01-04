import React from 'react'

const Contact = () => {
  return (
    <section className='contact_bg'>
    <div name='contact' className='w-full h-screen flex justify-center items-center p-4'>
      <form method='' action='mfonnta05@gmail.com' className='flex flex-col max-w-[600px] w-full'>
        {/* 
        <form method='POST' action='https://getform.io/f/e2b0e3d2-7beb-4177-b463-64c39b07e1c0' className='flex flex-col max-w-[600px] w-full'> */}
        <div className='pb-8'>
          <p className='text-5xl font-bold inline border-b-4 border-pink-600 mt-10 '>Contact</p>
          <p className='mt-5 py-4 text-xl'>Submit the form below or shoot me an email - mfonnta05@gmail.com</p>
        </div>
        <input className='bg-[#fbfbfc] p-2' type='text' placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#fbfbfc]' type='email' placeholder='Email' name='email' />
        <textarea className='bg-[#fbfbfc] p-2' name='message' placeholder='I would love to hear from you!' id='' cols='30' rows='10'></textarea>
          <a href='mfonnta05@gmail.com'><button className='text-white bg-slate-700 border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button></a>
      </form>
    </div>
    
    </section>
  )
}

export default Contact