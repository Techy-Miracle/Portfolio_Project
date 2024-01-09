import tech_1 from "../assets/tech_1.avif";
import tech_2 from "../assets/tech_2.avif";
import tech_3 from "../assets/tech_3.avif";
import tech_4 from "../assets/tech_4.avif";

const Technology = () => {
  return (
    <section className='bg-[#CADEFC] md:mt-10 md:px-32 md:mx-auto mx-auto md:pb-10'>
      <div className='w-full h-full'>
        <div className='w-full py-14 px-4'>
          <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
            <div className='flex flex-col justify-center px-8'>
              <p className='text-black font-bold text-4xl uppercase text-center md:text-start underline hover:text-teal-800'>
                Technology
              </p>
              <p className='md:text-4xl  font-extrabold py-4 text-center md:text-start  text-black hover:underline hover:text-teal-600'>
                <a href='https://mfon.hashnode.dev/how-to-setup-monitoring-on-a-kubernetes-cluster-on-digitalocean'>
                  Ever heard of DIGITAL OCEAN? <br />
                  If YES, read faster... If NO, read slower!{" "}
                </a>
              </p>
              <p className='py-4 text-black font-normal italic text-lg'>
                Setting up monitoring on a Kubernetes Cluster on DigitalOcean
                has never been more simplified!
              </p>
              <p className='py-2 text-black'>
                By{" "}
                <span className='text-neutral-500'>
                  <a href='https://hashnode.com/@Mfon'>Mfon Nta</a>
                </span>{" "}
                | December 12, 2023
              </p>
            </div>
            <img className='w-full h-[450px] mx-auto' src={tech_3} alt='/' />
          </div>
        </div>

        <div className='mt-10 grid px-4 md:px-0 lg:grid-cols-3 gap-10 mx-auto'>
          <div className='hover:shadow-2xl rounded overflow-hidden shadow-md'>
            <img src={tech_1} alt='/' className='w-full h-[270px]' />
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
            <img src={tech_2} alt='/' className='w-full h-[270px]' />
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
            <img src={tech_4} alt='/' className='w-full h-[270px]' />
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
      </div>
    </section>
  );
};

export default Technology;
