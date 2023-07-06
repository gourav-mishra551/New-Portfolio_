import React from "react";
import { FaGithub, FaLinkedin, } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import {AiOutlineInstagram} from "react-icons/ai";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com/in/gaurav-mishra-3a8a88239",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/gourav-mishra551",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30}/>
        </>
      ),
      href: "gouravmishra200105@gmail.com",
      
    },
    {
      id: 4,
      child: (
        <>
          Instagram <AiOutlineInstagram size={30} />
        </>
      ),
      href: "https://www.instagram.com/gourav_mishra551/",
      style: "rounded-br-md",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              // target="_blank"
              // rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
