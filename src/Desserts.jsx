import React from "react";
import Dessert from "./Dessert";
import data from "../data.json";
let dessert;

const Desserts = ({ handle }) => {
  return (
    <div className="w-4/5 md:mx-auto md:w-fit">
      <h2 className="text-4xl font-bold pb-8">Desserts</h2>
      <div className="min-h-full grid grid-cols-3 md:grid-cols-1 md:w-fit lg:grid-cols-2 gap-[30px]">
        {
          (dessert = data.map((dessert) => (
            <Dessert
              key={dessert.id}
              id={dessert.id}
              name={dessert.name}
              category={dessert.category}
              price={dessert.price}
              image={dessert.image.desktop}
              handle={() => handle(dessert)}
            />
          )))
        }
      </div>
    </div>
  );
};

export default Desserts;
