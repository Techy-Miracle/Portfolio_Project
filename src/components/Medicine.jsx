import med_5 from "../assets/med_5.jpg";
import med_2 from "../assets/med_2.webp";
import med_3 from "../assets/med_3.webp";
import ReactTyped from "react-typed";

const Medicine = () => {
  return (
    <>
      <section className='bg-[#022c43] mt-10 md:px-32 md:mx-auto mx-auto pb-10'>
        <div className='w-full py-8 max-w-[1240px] mx-auto grid md:grid-cols-2  '>
          <div className='flex flex-col justify-center '>
            <ReactTyped className='pl-4 md:pl-2 font-bold text-5xl uppercase mt-5 py-2' strings={['Medicine']} style={{ color: ['white'] }} typeSpeed={50} backSpeed={100} loop />
          </div>
        </div>

        <div className='mt-8 grid lg:grid-cols-3 gap-10 mx-auto'>
          <div className='hover:shadow-2xl rounded overflow-hidden shadow-md bg-white'>
            <img src={med_5} alt='/' className='w-[500px] h-[290px]' />
            <div className='m-4'>
              <span className='font-bold text-black text-xl hover:text-blue-600'>
                <a href='https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(13)62202-3/fulltext'>
                  Medicine in Africa: the Problems and Promises
                </a>
              </span>
              <span className='block mt-2 text-gray-700 text-base underline hover:text-blue-600'>
                <a href='https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(13)62202-3/fulltext'>
                  Where does Africa stand right now in health? Forward or
                  backward?.
                </a>
              </span>
            </div>
          </div>

          <div className='hover:shadow-2xl bg-white rounded overflow-hidden shadow-md'>
            <img src={med_2} alt='/' className='w-[500px] h-[290px]' />
            <div className='m-4'>
              <span className='font-bold text-black text-xl hover:text-blue-600'>
                <a href='https://mfon.hashnode.dev/modifying-expectations'>
                  Modifying Expectations- My Internship Experience
                </a>
              </span>
              <span className='block mt-2 text-gray-700 text-base underline hover:text-blue-600'>
                <a href='https://mfon.hashnode.dev/modifying-expectations'>
                  The Riffs and Runs on the way to mastery
                </a>
              </span>
            </div>
          </div>

          <div className='hover:shadow-2xl bg-white rounded overflow-hidden shadow-md'>
            <img src={med_3} alt='/' className='w-[500px] h-[290px]' />
            <div className='m-4'>
              <span className='font-bold text-black text-xl hover:text-blue-600'>
                <a href='https://hbr.org/2018/08/how-new-technologies-could-transform-africas-health-care-system'>
                  <span className='text-red-700 uppercase font-bold hover:text-blue-600'>
                    Tech VS AI
                  </span>
                  {"  - What Africa's Healthcare need now. "}
                </a>
              </span>
              <span className='block mt-2 text-gray-700 text-base underline hover:text-blue-600'>
                <a href='https://hbr.org/2018/08/how-new-technologies-could-transform-africas-health-care-system'>
                  How New Technologies Could Transform Africa’s Health Care
                  System
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Medicine;
