import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiLinkedin,
  FiMenu,
  FiX,
} from "react-icons/fi";

const Navbar = () => {
  const [show, setshow] = useState(false);
  return (
    <div className=" bg-white drop-shadow">
      <nav className="2xl:container 2xl:mx-auto sm:py-6 sm:px-7 py-5 px-4">
        <div className="flex justify-between ">
          <div className="hidden sm:flex flex-row items-center space-x-6">
            <a
              href="https://www.facebook.com/kacho1337"
              target="_blank"
              rel="noreferrer"
            >
              <FiFacebook size={25} />
            </a>
            <a
              href="https://www.instagram.com/kachovar/"
              target="_blank"
              rel="noreferrer"
            >
              <FiInstagram size={25} />
            </a>
          </div>
          <Link to="/">
            <div className=" flex space-x-3 items-center">
              <h1 className=" font-normal text-2xl md:text-3xl leading-6 text-gray-800">
                Luka Katchkatchishvili
              </h1>
            </div>
          </Link>
          <div className="hidden sm:flex flex-row items-center space-x-6">
            <a
              href="https://www.linkedin.com/in/luka-katchkatchishvili/"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin size={25} />
            </a>
            <a
              href="https://www.linkedin.com/in/luka-katchkatchishvili/"
              target="_blank"
              rel="noreferrer"
            >
              <FiTwitter size={25} />
            </a>
          </div>
          <div
            id="bgIcon"
            onClick={() => setshow(!show)}
            className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  justify-center items-center sm:hidden cursor-pointer`}
          >
            <FiMenu className={`${show ? "hidden" : ""}`} size={22} />
            <FiX className={`${show ? "block" : "hidden"}`} size={22} />
          </div>
        </div>
        <div
          id="MobileNavigation"
          className={`${show ? "block" : "hidden"} sm:hidden mt-4 mx-auto`}
        >
          <div className="flex flex-row items-center justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/luka-katchkatchishvili/"
              target="_blank"
              rel="noreferrer"
            >
              <FiTwitter size={20} />
            </a>
            <a
              href="https://www.facebook.com/kacho1337"
              target="_blank"
              rel="noreferrer"
            >
              <FiFacebook size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/luka-katchkatchishvili/"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/kachovar/"
              target="_blank"
              rel="noreferrer"
            >
              <FiInstagram size={20} />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
