import entrepreneur_1 from "../assets/entrepreneur_1.webp";
import entrepreneur_4 from "../assets/entrepreneur_4.webp";
import entrepreneur_5 from "../assets/entrepreneur_5.webp";

const Entrepreneurship = () => {
  return (
    <>
      <section className='bg-white mt-10 md:px-32 md:mx-auto mx-auto pb-10'>
        <div className='w-full py-8 max-w-[1240px] mx-auto grid md:grid-cols-2  '>
          <div className='flex flex-col justify-center '>
            <p className='text-black font-bold text-4xl uppercase underline hover:text-blue-500'>
              Entrepreneurship
            </p>
          </div>
        </div>

        <div className='mt-8 grid lg:grid-cols-3 gap-10 mx-auto'>
          <div className='hover:shadow-2xl rounded overflow-hidden shadow-md'>
            <img src={entrepreneur_4} alt='/' className='h-[270px]' />
            <div className='m-4'>
              <span className='font-bold text-xl hover:text-blue-600'>
                <a href='https://www.gartner.com/en/articles/10-things-businesses-that-lead-with-technology-do-differently'>
                  Business and Tech in 2023
                </a>
              </span>
              <span className='block mt-2 text-gray-700 text-base underline hover:text-blue-600'>
                <a href='https://www.gartner.com/en/articles/10-things-businesses-that-lead-with-technology-do-differently'>
                  If you have ever wondered what the connection is between
                  technology and business, this will be worth your time!
                </a>
              </span>
            </div>
          </div>

          <div className='hover:shadow-2xl bg-white rounded overflow-hidden shadow-md'>
            <img src={entrepreneur_5} alt='/' className='h-[270px]' />
            <div className='m-4'>
              <span className='font-bold text-xl hover:text-blue-600'>
                <a href='https://www.forbes.com/sites/forbesbusinesscouncil/2022/08/31/4-ways-to-integrate-technology-into-your-small-business/?sh=2936a2b643a1'>
                  Technology and Small Businesses
                </a>
              </span>
              <span className='block mt-2 text-gray-700 text-base underline hover:text-blue-600'>
                <a href='https://www.forbes.com/sites/forbesbusinesscouncil/2022/08/31/4-ways-to-integrate-technology-into-your-small-business/?sh=2936a2b643a1'>
                  Learn four (4) ways to integrate tech into your small business
                </a>
              </span>
            </div>
          </div>

          <div className='hover:shadow-2xl bg-white rounded overflow-hidden shadow-md'>
            <img src={entrepreneur_1} alt='/' className='h-[272px]' />
            <div className='m-4'>
              <span className='font-bold text-xl hover:text-blue-600'>
                <a href='https://blog.hubspot.com/agency/develop-brand-identity'>
                  The Place of Intentionality in Your Brand
                </a>
              </span>
              <span className='block mt-2 text-gray-700 text-base underline hover:text-blue-600'>
                <a href='https://blog.hubspot.com/agency/develop-brand-identity'>
                  How can a business owner create a powerful and unique brand?
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Entrepreneurship;
