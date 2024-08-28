import React from "react";

const Dessert = ({ name, category, price, image, handle }) => {
  return (
    <div className="flex flex-col h-[50%] relative md:w-fit lg:w-fit">
      <img
        className="h-60 rounded-lg mb-8 sm:h-[300px] sm:aspect-[1/1] md:w-[300px] md:h-[300px] lg:max-w-[300px] lg:h-[300px]"
        src={image}
        alt={name}
      />
      <h4 className="text-Rose-300">{category}</h4>
      <h3>{name}</h3>
      <h3 className="text-Red font-medium">${price}</h3>
      <span
        className="add cursor-pointer bg-Rose-50 py-2 rounded-full border border-Red px-6 w-44 flex gap-2 absolute top-[100%] left-[50%] translate-x-[-50%] translate-y-[70%]
        sm:translate-y-[180%] md:translate-y-[155%] lg:translate-y-[140%] xl:translate-y-[110%] "
        onClick={handle}
      >
        <img src="../public/images/icon-add-to-cart.svg" alt="Add to Cart" />
        <p className="font-medium">Add to Cart</p>
      </span>
    </div>
  );
};

export default Dessert;
