import open_1 from "../assets/open_1.avif";
import open_3 from "../assets/open_3.webp";
import open_5 from "../assets/open_5.avif";
import ReactTyped from "react-typed";

const OpenSource = () => {
  return (
    <>
      <section className='bg-[#022c43] mt-10 md:px-32 md:mx-auto mx-auto pb-10'>
        <div className='w-full py-8 max-w-[1240px] mx-auto grid md:grid-cols-2  '>
          <div className='flex flex-col justify-center '>
<<<<<<< HEAD
            <p className='text-black font-bold md:text-4xl text-2xl text-center md:text-start uppercase underline hover:text-blue-500 '>
              Open Source
            </p>
          </div>
        </div>

        <div className='md:mt-8 px-4 md:px-0 grid lg:grid-cols-3 gap-10 mx-auto'>
          <div className='hover:shadow-2xl rounded overflow-hidden '>
=======
            <ReactTyped className='pl-4 md:pl-2 font-bold text-4xl uppercase mt-5 py-2' strings={['Open Source']} style={{ color: ['white'] }} typeSpeed={50} backSpeed={100} loop />
          </div>
        </div>

        <div className='mt-8 grid lg:grid-cols-3 gap-10 mx-auto'>
          <div className='hover:shadow-2xl rounded overflow-hidden shadow-md bg-white'>
>>>>>>> 070d265c38947a1bc6afac7809359b3541599097
            <img src={open_1} alt='/' className='h-[265px]' />
            <div className='m-4'>
              <span className='font-bold text-xl hover:text-blue-600'>
                <a href='https://mfon.hashnode.dev/cncf-zero-to-merge-becoming-a-contributorpart-ii#clmrrb5bz09egidnvhiuz0tb0'>
                  CNCF Zero-To-Merge: Becoming a Contributor (I)
                </a>
              </span>
              <span className='block mt-2 text-gray-700 text-base underline hover:text-blue-600'>
                <a href='https://mfon.hashnode.dev/cncf-zero-to-merge-becoming-a-contributorpart-ii#clmrrb5bz09egidnvhiuz0tb0'>
                  Joining Bootcamps and Incubator Programs could be the boost
                  you need right now in your career and personal development
                </a>
              </span>
            </div>
          </div>

          <div className='hover:shadow-2xl bg-white rounded overflow-hidden '>
            <img src={open_5} alt='/' className='h-[265px]' />
            <div className='m-4 '>
              <span className='font-bold text-xl hover:text-blue-600'>
                <a href='https://mfon.hashnode.dev/open-source-beyond-just-code-what-i-learnt-from-outreachy'>
                  Beyond Just Code: What I Learnt from Outreachy
                </a>
              </span>
              <span className='block mt-2 text-gray-700 text-base underline hover:text-blue-600'>
                <a href='https://mfon.hashnode.dev/open-source-beyond-just-code-what-i-learnt-from-outreachy'>
                  Find out my experience from Outreachy- an Open Source Program
                </a>
              </span>
            </div>
          </div>

          <div className='hover:shadow-2xl bg-white rounded overflow-hidden '>
            <img src={open_3} alt='/' className='h-[268px]' />
            <div className='m-4'>
              <span className='font-bold text-xl hover:text-blue-600'>
                <a href='https://mfon.hashnode.dev/cncf-zero-to-merge-becoming-a-contributorpart-ii'>
                  CNCF Zero-To-Merge: Becoming a Contributor (II)
                </a>
              </span>
              <span className='block mt-2 text-gray-700 text-base underline hover:text-blue-600'>
                <a href='https://mfon.hashnode.dev/cncf-zero-to-merge-becoming-a-contributorpart-ii'>
                  Tips for contributing to Open Source Projects
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OpenSource;
