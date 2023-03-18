import React from "react";
import ItemCard from "../ItemCard/ItemCard";

const ItemComponent = ({ movieInfo }) => {
  return (
    <div className="2xl:container mx-auto my-10">
      <div>
        <h1 className="lg:text-6xl text-3xl text-center font-bold">
          List of Profiles
        </h1>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2">
          {movieInfo.map((curVal, id) => {
            return <ItemCard key={id} myData={curVal} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ItemComponent;
