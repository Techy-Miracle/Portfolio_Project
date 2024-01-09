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
import Loader from "../components/Loader";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <section className='bg-[#CADEFC] md:px-32 mx-auto'>
      <div name='home' className='w-full h-full'>
        <section className='w-full py-16 px-4'>
          <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
            <img
              className='w-full h-[450px] bg-center bg-cover object-cover mx-auto mt-10'
              src={ai_new}
              alt='/'
            />
            <div className='flex flex-col justify-center px-8'>
              <p className='text-black font-bold md:text-3xl mt-3 md:mt-0 text-xl text-center md:text-start uppercase underline hover:text-teal-800'>
                ARTIFICIAL INTELLIGENCE
              </p>
              <p className='md:text-4xl   font-extrabold py-4 text-black hover:underline hover:text-teal-600'>
                <a href='https://mfon.hashnode.dev/what-is-artificial-intelligence-anyways#heading-realistic-view-of-artificial-intelligence/'>
                  Is AI really the future? <br />
                  What is the future of work in the marketplaces?{" "}
                </a>
              </p>
              <p className='py-4 text-black font-normal text-lg italic'>
                {` Soon there'd be no more humans in our working environment? Stop
                  talking already! Find out!`}
              </p>
              <p className='py-2 text-black'>
                By{" "}
                <span className='text-neutral-500'>
                  <a href='https://hashnode.com/@Mfon'>Mfon Nta</a>
                </span>{" "}
                | December 12, 2023
              </p>
            </div>
          </div>
        </section>

        <div className='mt-8 grid lg:grid-cols-3  py-16 px-4 gap-10 mx-auto'>
          <div className='hover:shadow-2xl rounded overflow-hidden '>
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

          <div className='hover:shadow-2xl rounded overflow-hidden  bg-[#CADEFC]'>
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

          <div className='hover:shadow-2xl rounded overflow-hidden  bg-[#CADEFC]'>
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
