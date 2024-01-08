import vol_3 from "../assets/vol_3.jpg";
import vol_2 from "../assets/vol_2.jpg";
import vol_4 from "../assets/vol_4.webp";
import ReactTyped from "react-typed";

const Volunteer = () => {
  return (
    <>
      <section className='bg-black mt-10 md:px-32 md:mx-auto mx-auto pb-10'>
        <div className='w-full py-8 max-w-[1240px] mx-auto grid md:grid-cols-2  '>
          <div className='flex flex-col justify-center '>
            <ReactTyped className='pl-4 md:pl-2 font-bold text-5xl uppercase mt-5 py-2' strings={['Volunteering']} style={{ color: ['white'] }} typeSpeed={50} backSpeed={100} loop />
          </div>
        </div>

        <div className='mt-8 grid lg:grid-cols-3 gap-10 mx-auto'>
          <div className='hover:shadow-2xl rounded overflow-hidden shadow-md bg-white'>
            <img src={vol_2} alt='/' className='h-[300px]' />
            <div className='m-4'>
              <span className='font-bold text-black text-xl hover:text-blue-600'>
                <a href='https://mfon.hashnode.dev/outreachy-blog-1#cl6p7ws5p00wggenv80w26p1k'>
                  Starting From Where You Are!
                </a>
              </span>
              <span className='block mt-2 text-gray-700 text-base underline hover:text-blue-600'>
                <a href='https://mfon.hashnode.dev/outreachy-blog-1#cl6p7ws5p00wggenv80w26p1k'>
                  Do you think you need to have everything figured out before
                  you launch? Maybe my experience says something different.
                </a>
              </span>
            </div>
          </div>

          <div className='hover:shadow-2xl bg-white rounded overflow-hidden shadow-md'>
            <img src={vol_4} alt='/' className='h-[300px] w-[400px]' />
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
            <img src={vol_3} alt='/' className='h-[300px]' />
            <div className='m-4'>
              <span className='font-bold text-black text-xl hover:text-blue-600'>
                <a href='https://mfon.hashnode.dev/everyone-struggles'>
                  The Untold Truth-{" "}
                  <span className='text-red-700 uppercase font-bold hover:text-blue-600'>
                    Everyone
                  </span>{" "}
                  Struggles.
                </a>
              </span>
              <span className='block mt-2 text-gray-700 text-base underline hover:text-blue-600'>
                <a href='https://mfon.hashnode.dev/everyone-struggles'>
                  {`  Greater guts, greater glory; No pain, no gain. I am sure
                  you'll resonate with this.`}
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Volunteer;
