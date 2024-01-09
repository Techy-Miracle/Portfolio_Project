import { useEffect } from "react";
import { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Loader from "../components/Loader";

const About = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <section className='about_bg pt-32 md:pt-0 pb-24 md:pb-0'>
      <div name='about' className='w-full h-screen'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          {/* <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'> */}
          <div className='sm:text-right pb-8 pl-4 mt-20'>
            <p className='text-5xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>

          {/* </div> */}

          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-16 px-4'>
            <div className='sm:text-right text-xl font-bold'>
              <p className='sm:text-7xl font-bold text-slate-800 mt-8'>
                Mfon Thelma Nta
              </p>
              <p className='sm:text-7xl font-bold text-[#8892b0]'>
                A Software Developer
              </p>
              <p className='text-[#8892b0] py-4 max-w-[450px]'>
                Owasp Certified | DevOps | Site Reliability Engineer | Open
                Source | Medical Doctor{" "}
              </p>
              <div>
                <a href='mfonnta05@gmail.com'>
                  <button className='text-white group border-2 px-6 md:mx-8 py-3 my-2 flex items-center bg-slate-800 hover:bg-pink-600 hover:border-pink-600'>
                    Contact Me
                    <span className='group-hover:rotate-90 duration-300'>
                      <HiArrowNarrowRight className='ml-3' />
                    </span>
                  </button>
                </a>
              </div>
            </div>
            <div>
              <div className='md:mt-5 text-xl md:text-2xl'>
                <p>
                  I am a Software Developer interested in using technology to
                  improve lives.
                </p>
                <p className='mt-3'>
                  I am passionate in my lookout for opportunities to work with
                  challenging and diverse projects.
                </p>
                <p className='mt-3'>
                  Being a naturally curious person, I possess strong
                  problem-solving skills, sound empathy and great time
                  management skills.
                </p>
                <p className='mt-3'>
                  I enjoy writing, talking and socializing with others.
                </p>
                <p className='mt-3'>I also enjoy writing about tools I use.</p>
                <p className='mt-3'>
                  I am deeply interested in Open Source and Open Science
                  Projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
