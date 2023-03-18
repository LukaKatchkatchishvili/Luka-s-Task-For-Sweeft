import React from "react";
import ItemCard from "../ItemCard/ItemCard";

const FriendsComponent = ({ friendData }) => {
  return (
    <>
      <div className="2xl:container mx-auto grid lg:grid-cols-3 sm:grid-cols-2">
        {friendData.map((curVal, id) => {
          return <ItemCard key={id} myData={curVal} />;
        })}
      </div>
    </>
  );
};

export default FriendsComponent;
