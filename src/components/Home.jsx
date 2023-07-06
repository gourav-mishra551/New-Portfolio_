import React from "react";
import Typed from 'typed.js';
import HeroImage from "../assets/heroimage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";


const Home = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Designer', 'Coder.' , ' MERN Stack Developer'],
      typeSpeed: 100,
      backSpeed: 0,
    fadeOut: true,
    loop: true
    });
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a  <span ref={el} />
          </h2>
          <p className="text-gray-400 py-4 max-w-md">
            I have 2 years of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Next JS and Nodejs.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="w-6/12 sm:w-4/12 ">
          <img
            src={HeroImage}
            alt="my profile"
            className= "shadow-2xl shadow-cyan-500/50  h-auto "
          />
        </div>
      </div>
      <hr className="shadow-gray-500/40"/>
    </div>
  );
};

export default Home;
