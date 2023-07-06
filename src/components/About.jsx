import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className=" w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg  mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="mx-6 text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10 mx-8">
        Hi Everyone, I am Gourav Mishra from New-Delhi, India ,I'm a MERN stack developer. I love to create simple yet beautiful websites with great user experience.

        I'm interested in the whole frontend stack.

I not only put my entire knowledge into work but also come up with creative and professional solutions. Apart from Coding I love to play games
        </p>

       

      </div>
    </div>
  );
};

export default About;
