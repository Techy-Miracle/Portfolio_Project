import mentor_2 from "../assets/mentor_2.avif";
import mentor_3 from "../assets/mentor_3.avif";
import mfon_image from "../assets/mfon_image.jpeg";
import ReactTyped from "react-typed";

const Mentorship = () => {
  return (
    <>
      <section className='bg-black mt-10 md:px-32 px-4 md:mx-auto mx-auto pb-10'>
        <div className='w-full py-8 max-w-[1240px] mx-auto grid md:grid-cols-2  '>
          <div className='flex flex-col justify-center '>
<<<<<<< HEAD
            <p className='text-white font-bold md:text-4xl text-2xl text-center md:text-start uppercase underline hover:text-blue-500 '>
              Mentorship
            </p>
=======
            <ReactTyped className='pl-4 md:pl-2 font-bold text-5xl uppercase mt-5 py-2' strings={['Mentorship']} style={{ color: ['white'] }} typeSpeed={50} backSpeed={100} loop />
>>>>>>> 070d265c38947a1bc6afac7809359b3541599097
          </div>
        </div>

        <div className='md:mt-8  grid lg:grid-cols-3 gap-10 mx-auto'>
          <div className='hover:shadow-2xl rounded overflow-hidden shadow-md bg-white'>
            <img src={mfon_image} alt='/' className='h-[310px] w-[400px]' />
            <div className='m-4'>
              <span className='font-bold text-xl hover:text-blue-600'>
                <a href='https://mfon.hashnode.dev/devretro2022-from-calls-to-code#clchwstep03ebbgnv5f6jciuo'>
                  The Little Push: From Medicine to Tech - My Story
                </a>
              </span>
              <span className='block mt-2 text-gray-700 text-base underline hover:text-blue-600'>
                <a href='https://mfon.hashnode.dev/devretro2022-from-calls-to-code#clchwstep03ebbgnv5f6jciuo'>
                  How my friends supporting and believing in my new found knack
                  for tech pushed me to a beautiful career startup in software
                  development.
                </a>
              </span>
            </div>
          </div>

          <div className='hover:shadow-2xl bg-white rounded overflow-hidden shadow-md'>
            <img src={mentor_2} alt='/' className='h-[310px]' />
            <div className='m-4 '>
              <span className='font-bold text-xl hover:text-blue-600'>
                <a href='https://mfon.hashnode.dev/being-a-mentor-in-my-early-career'>
                  Being a Mentor in my Early Career
                </a>
              </span>
              <span className='block mt-2 text-gray-700 text-base underline hover:text-blue-600'>
                <a href='https://mfon.hashnode.dev/being-a-mentor-in-my-early-career'>
                  Can you be a mentor to someone even if you are still
                  struggling? Read my perspective.
                </a>
              </span>
            </div>
          </div>

          <div className='hover:shadow-2xl bg-white rounded overflow-hidden shadow-md'>
            <img src={mentor_3} alt='/' className='h-[310px]' />
            <div className='m-4'>
              <span className='font-bold text-xl hover:text-blue-600'>
                <a href='https://mfon.hashnode.dev/final-outreachy-blog'>
                  Internships and Trainings- Way to Go!
                </a>
              </span>
              <span className='block mt-2 text-gray-700 text-base underline hover:text-blue-600'>
                <a href='https://mfon.hashnode.dev/final-outreachy-blog'>
                  Find out one powerful secret my internship at Outreachy taught
                  me.
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mentorship;
