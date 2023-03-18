import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import style from "./Profile.module.css";

const Profile = ({ Data }) => {
  const { title, name, lastName, imageUrl, email, jobType, prefix } = Data;
  return (
    <>
      <div
        className={`${style.bgLightBlue} flex sm:flex-row flex-col 2xl:container mx-auto text-white`}
      >
        <div className="profile-img">
          <img src={imageUrl} alt="profile img" />
        </div>
        <div className="lg:p-14 sm:p-8 p-10 sm:text-start text-center">
          <h1 className="lg:text-6xl sm:text-4xl text-2xl">
            {prefix} {name} {lastName}
          </h1>
          <p className="mt-7 sm:text-2xl text-lg">{title}</p>
          <p className="sm:text-xl text-sm">{jobType}</p>
          <div className="flex items-center mt-7 sm:justify-start justify-center cursor-pointer">
            <AiOutlineMail className="mr-3" />
            {email}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
