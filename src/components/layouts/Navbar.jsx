import { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaHashnode } from "react-icons/fa6";
import logo from "../../assets/logo.avif";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <section className='navbar_bg'>
      <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#1c546f] text-gray-300'>
        <div>
          <img src={logo} alt='Logo Image' style={{ width: "50px" }} />
        </div>

        {/* Menu */}
        <ul className='hidden md:flex'>
          <li>
            <Link to='/' className='nav_link'>
              Home
            </Link>
          </li>

          <li>
            <Link to='about' className='nav_link'>
              About
            </Link>
          </li>

          <li>
            <Link to='experience' className='nav_link'>
              Experience
            </Link>
          </li>

          <li>
            <Link to={"projects"} className='nav_link'>
              {" "}
              Projects{" "}
            </Link>
          </li>

          <li>
            <Link to='contact' className='nav_link'>
              Contact
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden '>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#08192f] z-[3000] flex flex-col justify-center items-center"
          }
        >
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='/'>
              Home
            </Link>
          </li>

          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='about'>
              About
            </Link>
          </li>

          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='experience'>
              Experience
            </Link>
          </li>

          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='projects'>
              Projects
            </Link>
          </li>

          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='contact'>
              Contact
            </Link>
          </li>
        </ul>

        {/* Social Icons */}

        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className='w-[136px] h-[55px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 '>
              <a
                className='flex justify-between items-center w-full text-gray-300 font-semibold'
                href='https://linkedin.com/in/mfonnta'
              >
                Linkedin <FaLinkedin size={30} />
              </a>
            </li>

            <li className='w-[136px] h-[55px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
              <a
                className='flex justify-between items-center w-full text-gray-300 font-semibold'
                href=' https://github.com/Mfonn'
              >
                Github <FaGithub size={30} />
              </a>
            </li>

            <li className='w-[136px] h-[55px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] '>
              <a
                className='flex justify-between items-center w-full text-gray-300 font-semibold'
                href='/'
              >
                Resume <BsFillPersonLinesFill size={30} />
              </a>
            </li>

            <li className='w-[136px] h-[55px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] '>
              <a
                className='flex justify-between items-center w-full text-gray-30 font-semibold'
                href='https://mfon.hashnode.dev/'
              >
                Hashnode <FaHashnode size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
