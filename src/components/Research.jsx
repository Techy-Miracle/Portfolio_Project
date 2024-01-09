import res_1 from "../assets/res_1.webp";
import res_2 from "../assets/res_2.webp";
import res_4 from "../assets/res_4.avif";

const Research = () => {
  return (
    <>
      <section className='bg-white mt-10 md:px-32 px-4 md:mx-auto mx-auto pb-10'>
        <div className='w-full py-8 max-w-[1240px] mx-auto grid md:grid-cols-2  '>
          <div className='flex flex-col justify-center '>
            <p className='text-black font-bold md:text-4xl text-2xl text-center md:text-start uppercase underline hover:text-blue-500'>
              Research
            </p>
          </div>
        </div>

        <div className='md:mt-8 grid lg:grid-cols-3 gap-10 mx-auto'>
          <div className='hover:shadow-2xl rounded overflow-hidden '>
            <img src={res_2} alt='/' className='h-[270px]' />
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

          <div className='hover:shadow-2xl bg-white rounded overflow-hidden '>
            <img src={res_4} alt='/' className='h-[270px]' />
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

          <div className='hover:shadow-2xl bg-white rounded overflow-hidden '>
            <img src={res_1} alt='/' className='h-[272px]' />
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
      </section>
    </>
  );
};

export default Research;
