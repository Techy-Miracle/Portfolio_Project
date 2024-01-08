import ai_1 from "../assets/ai_1.avif";
import ai_4 from "../assets/ai_4.avif";
import ai_7 from "../assets/ai_7.avif";
import ai_new from "../assets/ai_new.avif";
import Medicine from "../components/Medicine";
import Technology from "../components/Technology";
import Volunteer from "../components/Volunteer";
import Research from "../components/Research";
import Entrepreneurship from "../components/Entrepreneurship";
import OpenSource from "../components/OpenSource";
import Mentorship from "../components/Mentorship";
import Hashnode from "../components/Hashnode";
import ReactTyped from "react-typed";

const Home = () => {
  return (
    <section className='bg-[#CADEFC] md:px-32 mx-auto'>
      <div name='home' className='w-full h-full'>
        <div className='w-full py-16 px-4'>
          <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
            <img
              className='w-full h-[450px] mx-auto mt-14'
              src={ai_new}
              alt='/'
            />
            <div className='flex flex-col justify-center'>
              <ReactTyped className='md:text-5xl sm:text-4xl text-2xl md:pl-4 pl-2 font-bold uppercase hover:text-teal-800 mt-5 py-2' strings={['Artificial Intelligence']} style={{ color: ['#1c546f'] }} typeSpeed={50} backSpeed={100} loop />

              <p className='md:text-4xl sm:text-3xl font-extrabold py-4 px-4 text-slate-800 hover:underline hover:text-teal-600'><a href='https://mfon.hashnode.dev/what-is-artificial-intelligence-anyways#heading-realistic-view-of-artificial-intelligence/'>What is Artificial Intelligence Anyways?</a></p>
              <p className='md:py-4 px-4 text-slate-800 text-lg font-semibold '>Machine Learning, Data Science and A Realistic View of Artificial Intelligence.</p>
              <p className='py-4 px-4 text-black'>By <span className='text-neutral-500 text-lg font-medium'><a href='https://hashnode.com/@Mfon'>Mfon Nta</a></span> | May 09, 2023.</p>


            </div>
          </div>
        </div>

        <div className='mt-8 grid lg:grid-cols-3 gap-10 mx-auto'>
          <div className='hover:shadow-2xl rounded overflow-hidden shadow-md'>
            <img src={ai_4} alt='/' className='w-full h-[400px]' />
            <div className='m-4'>
              <span className='font-bold text-xl hover:text-blue-600'>
                <a href='https://mfon.hashnode.dev/what-you-need-to-know-to-get-started-with-api-documentation'>
                  API Documentation
                </a>
              </span>
              <span className='block mt-2 text-gray-700 text-base underline hover:text-blue-600'>
                <a href='https://mfon.hashnode.dev/what-you-need-to-know-to-get-started-with-api-documentation'>
                  What you need to know to get started with API documentation
                </a>
              </span>
            </div>
          </div>

          <div className='hover:shadow-2xl rounded overflow-hidden shadow-md bg-[#CADEFC]'>
            <img src={ai_7} alt='/' className='w-full h-[400px]' />
            <div className='m-4'>
              <span className='font-bold text-xl hover:text-blue-600'>
                <a href='https://mfon.hashnode.dev/understanding-supply-chain-vulnerabilities-and-how-to-protect-them-with-snyk'>
                  Synk- Helping with Supply Chain Vulnerabilities
                </a>
              </span>
              <span className='block mt-2 text-gray-700 text-base underline hover:text-blue-600'>
                <a href='https://mfon.hashnode.dev/understanding-supply-chain-vulnerabilities-and-how-to-protect-them-with-snyk'>
                  Do you know how helpful Synk can be in protecting you from
                  supply chain vulnerabilities?
                </a>
              </span>
            </div>
          </div>

          <div className='hover:shadow-2xl rounded overflow-hidden shadow-md bg-[#CADEFC]'>
            <img src={ai_1} alt='/' className='w-full h-[400px]' />
            <div className='m-4'>
              <span className='font-bold text-xl hover:text-blue-600'>
                <a href='https://mfon.hashnode.dev/cidr-blocks-subnetting-in-aws-vpcs'>
                  CIDR Blocks, Subnetting in AWS VPCs
                </a>
              </span>
              <span className='block mt-2 text-gray-700 text-base underline hover:text-blue-600'>
                <a href='https://mfon.hashnode.dev/cidr-blocks-subnetting-in-aws-vpcs'>
                  Learn about the rules guiding CIDR in AWS
                </a>
              </span>
            </div>
          </div>
        </div>

        <Medicine />

        <Technology />

        <Hashnode />

        <Research />

        <Entrepreneurship />

        <OpenSource />

        <Mentorship />

        <Volunteer />






      </div>

    </section>
    
  );
};

export default Home;
