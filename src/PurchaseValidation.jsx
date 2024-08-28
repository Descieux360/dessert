import React from "react";

const PurchaseValidation = ({ cartItems, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 md:p-2 md:w-[300px] rounded-lg shadow-lg w-[500px] mx-auto">
        <img
          className="mb-6 md:mb-2 md:h-12 md:w-12"
          width={60}
          height={60}
          src="../src/assets/images/icon-order-confirmed.svg"
          alt=""
        />
        <h2 className="text-2xl font-bold mb-4">Order confirmed</h2>
        <div className="flex flex-col gap-2 bg-Red/35 py-4 px-2 md:overflow-scroll md:max-h-44 ">
          {cartItems.map((item, index) => (
            <div key={index} className="flex  justify-between">
              <div>{item.name}</div>
              <span>
                ${item.price} x {item.quantity}
              </span>
            </div>
          ))}
          <div className="flex justify-between font-bold mt-4 ">
            <span>Total:</span>
            <span>
              $
              {cartItems.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0
              )}
            </span>
          </div>
        </div>
        <div className=" flex justify-center mt-4 mb-2">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded self-center"
            onClick={onCancel}
          >
            Set New Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseValidation;
