import Angular from "../assets/angular logo.png";
import MySQL from "../assets/mysql logo.png";
import Nginx from "../assets/nginx logo.png";
import Docker from "../assets/docker logo.png";
import Github from "../assets/github.png";
import Dig from "../assets/digital ocean.png";
import mongo from "../assets/mongo.png";
import Oracle from "../assets/oracle.jpeg";
import { useState } from "react";
import { useEffect } from "react";
import Loader from "../components/Loader";

const Skills = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <section className='experience_bg pt-36 md:pt-0'>
      <div name='experience' className='w-full h-screen'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
            <p className='text-5xl font-bold inline border-b-4 border-pink-600'>
              Experience
            </p>
            <p className='py-4 uppercase text-slate-800 mt-5 text-xl'>
              These are the technologies I have worked with:
            </p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-black bg-slate-500 hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={MySQL} alt='MySQL logo' />
              <p className='my-4 text-black'>MYSQL</p>
            </div>

            <div className='shadow-md shadow-black bg-slate-500 hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={Docker} alt='MySQL logo' />
              <p className='my-4'>DOCKER</p>
            </div>

            <div className='shadow-md shadow-black bg-slate-500 hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={Angular} alt='MySQL logo' />
              <p className='my-4'>ANGULAR JS</p>
            </div>

            <div className='shadow-md shadow-black bg-slate-500 hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={Dig} alt='MySQL logo' />
              <p className='my-4'>DIGITAL OCEAN</p>
            </div>

            <div className='shadow-md shadow-black bg-slate-500 hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={Github} alt='MySQL logo' />
              <p className='my-4'>GITHUB</p>
            </div>

            <div className='shadow-md shadow-black bg-slate-500 hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={mongo} alt='MySQL logo' />
              <p className='my-4'>MONGO</p>
            </div>

            <div className='shadow-md shadow-black bg-slate-500 hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={Nginx} alt='MySQL logo' />
              <p className='my-4'>NGINX</p>
            </div>

            <div className='shadow-md shadow-black bg-slate-500 hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={Oracle} alt='MySQL logo' />
              <p className='my-4'>ORACLE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
