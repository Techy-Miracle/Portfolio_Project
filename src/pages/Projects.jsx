import mfon_image from "../assets/mfon_image.jpeg";
import open_source from "../assets/open_source.webp";
import health_tech from "../assets/health_tech.webp";
import laravel from "../assets/laravel.webp";
import chat_gpt from "../assets/chat_gpt.webp";
import django from "../assets/django.avif";
import { useState } from "react";
import { useEffect } from "react";
import Loader from "../components/Loader";

const Projects = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <section className='projects_bg pt-24 md:pt-0 md:pb-0 pb-10'>
      <div name='projects' className='w-full md:h-screen text-gray-300 '>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='pb-8 '>
            <p className='text-5xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
              Projects
            </p>
            <p className='py-6 text-xl uppercase'>
              Check out some of my recent projects
            </p>
          </div>

          {/* Container */}
          <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:gap-12 gap-4'>
            {/* Grid Items */}
            <div
              style={{ backgroundImage: `url(${open_source})` }}
              className='shadow-lg shadow-[#040c16] md:hover:scale-110 transition-all ease-in-out  duration-500 group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              {/* Hover Effects */}

              <div className='opacity-0 group-hover:opacity-100 '>
                <span className='text-white py-4'>
                  <h1 className='uppercase font-bold text-lg text-gray-950 underline'>
                    Open Source Contribution.
                  </h1>
                  <p className='mt-4 text-sm font-normal'>
                    Outreachy Contributions with ChRIS Project.
                  </p>
                  <p className='text-sm font-normal'>
                    Software Testing and Validation.
                  </p>
                  <p className='text-sm font-normal'>
                    Source and Version Control.
                  </p>
                </span>

                <div className='pt-8 text-center'>
                  <a href='https://chrisproject.org/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2  bg-white text-gray-700 font-bold text-lg shadow-md shadow-[#040c16] md:hover:scale-110 transition-all ease-in-out  duration-500 hover:text-blue-500'>
                      Click To View
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div
              style={{ backgroundImage: `url(${chat_gpt})` }}
              className='shadow-lg shadow-[#040c16] md:hover:scale-110 transition-all ease-in-out  duration-500 group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              <div className='opacity-0 group-hover:opacity-100 w-full text-center '>
                <span className='text-white py-4'>
                  <h1 className='uppercase font-bold text-base text-gray-950 underline'>
                    AI Project Using Open AI GPT-3.
                  </h1>
                  <p className='mt-4 text-sm font-normal'>
                    Created an AI project that auto-generates ghost stories.
                  </p>
                  <p className='text-sm font-normal'>
                    {`Used Open AI's GPT-3 Davinci Model.`}
                  </p>
                  <p className=' text-sm font-normal'>
                    Used React and deployed on Netlify.
                  </p>
                </span>

                <div className='pt-8 text-center'>
                  <a href='/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg md:hover:scale-110 transition-all ease-in-out  duration-500 hover:text-blue-500'>
                      Click To View
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div
              style={{ backgroundImage: `url(${health_tech})` }}
              className='shadow-lg shadow-[#040c16] md:hover:scale-110 transition-all ease-in-out  duration-500 group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              <div className='opacity-0 group-hover:opacity-100 w-full text-center '>
                <span className='text-white py-4'>
                  <h1 className='uppercase font-bold text-base mt-4 text-gray-950 underline'>
                    Technical Writing for Health Tech Startup.
                  </h1>
                  <p className='mt-4 text-sm font-normal'>
                    Wrote SEO Articles on management of health conditions.
                  </p>
                  <p className='text-sm font-normal'>
                    Used Google Cloud Platform for Admin Management of Software
                    Services.
                  </p>
                </span>

                <div className='pt-8 text-center'>
                  <a href='https://igetbelle.com/news'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 -mt-10 bg-white text-gray-700 font-bold text-lg md:hover:scale-110 transition-all ease-in-out  duration-500 hover:text-blue-500'>
                      Click To View
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div
              style={{ backgroundImage: `url(${mfon_image})` }}
              className='shadow-lg shadow-[#040c16] md:hover:scale-110 transition-all ease-in-out  duration-500 group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              <div className='opacity-0 group-hover:opacity-100 w-full text-center '>
                <span className='text-white py-4'>
                  <h1 className='uppercase font-bold text-base mt-4 text-gray-950 underline'>
                    Personal Dashboard.
                  </h1>
                  <p className='mt-4 text-sm font-normal'>
                    Created a Personal Dashboard using Angular, a Javascript
                    Framework.
                  </p>
                  <p className='text-sm font-normal'>
                    Worked with Restful APIs and Angular animation transitions.
                  </p>
                </span>

                <div className='pt-8 text-center'>
                  <a href='/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg md:hover:scale-110 transition-all ease-in-out  duration-500 hover:text-blue-500'>
                      Click To View
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div
              style={{ backgroundImage: `url(${laravel})` }}
              className='shadow-lg shadow-[#040c16] md:hover:scale-110 transition-all ease-in-out  duration-500 group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              <div className='opacity-0 group-hover:opacity-100 w-full text-center '>
                <span className='text-white py-4'>
                  <h1 className='uppercase font-bold text-base mt-4 text-gray-950 underline'>
                    Laravel Project Using Digital Ocean, php, MySQL and Apache
                    Server.
                  </h1>
                  <p className='mt-4 text-sm font-normal'>
                    Setup Apache2 server with dependencies.
                  </p>
                  <p className='mt-4 text-sm font-normal'>
                    Setup MySQL with credentials and a DB.
                  </p>
                </span>

                <div className='pt-8 text-center'>
                  <a href='/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 -mt-10 bg-white text-gray-700 font-bold text-lg md:hover:scale-110 transition-all ease-in-out  duration-500 hover:text-blue-500'>
                      Click To View
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div
              style={{ backgroundImage: `url(${django})` }}
              className='shadow-lg shadow-[#040c16] md:hover:scale-110 transition-all ease-in-out  duration-500 group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              <div className='opacity-0 group-hover:opacity-100 w-full text-center'>
                <span className='text-white py-4'>
                  <h1 className='uppercase font-bold text-base mt-4 text-gray-950 underline'>
                    Containerized Django Application.
                  </h1>
                  <p className='mt-4 text-sm font-normal'>
                    Created Docker images for React and Django application and
                    uploaded to Docker Hub.
                  </p>
                  <p className='text-sm font-normal'>
                    Used reverse proxy in NGINX to point port 3000 to server.
                  </p>
                </span>

                <div className='pt-8 text-center'>
                  <a href='https://github.com/Mfonn/hng2'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 -mt-10 bg-white text-gray-700 font-bold text-lg md:hover:scale-110 transition-all ease-in-out  duration-500 hover:text-blue-500'>
                      Click To View
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
