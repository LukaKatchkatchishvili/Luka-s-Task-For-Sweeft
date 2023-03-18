import React from "react";
import { Link } from "react-router-dom";

const ItemCard = ({ myData }) => {
  const { id, name, lastName, imageUrl, title } = myData;
  return (
    <>
      <Link to={`/user/${id}`} id={id}>
        <div className="w-full py-10 ">
          <div className="container mx-auto px-6 flex items-start justify-center">
            <div aria-label="group of cards" className="w-full">
              <div className="flex flex-col lg:flex-row mx-auto bg-white dark:bg-gray-800 shadow rounded">
                <div className="w-full lg:w-full px-12 flex flex-col items-center py-10">
                  <div className="w-24 h-24 mb-3 p-2 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <img
                      alt="profile"
                      className="w-full h-full overflow-hidden object-cover rounded-full"
                      src={imageUrl}
                    />
                  </div>
                  <p className="hover:opacity-75 text-gray-800 dark:text-gray-100 cursor-pointer">
                    <span className=" text-xl tracking-normal font-medium mb-1">
                      {name} {lastName}
                    </span>
                  </p>
                  <p className="cursor-pointer flex text-gray-600 dark:text-gray-100 text-sm tracking-normal font-normal mb-3 text-center">
                    {title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ItemCard;
