import data from "../data.json";

const Cart = ({ Active, cartItems, onRemove, onValidate }) => {
  function itemOriginalPrices(itemName) {
    let itemPrice = data.map((price) => {
      price = price.name;
      return price;
    });
    if (itemName == itemPrice[0]) {
      return 6.5;
    } else if (itemName == itemPrice[1]) {
      return 7;
    } else if (itemName == itemPrice[2]) {
      return 8;
    } else if (itemName == itemPrice[3]) {
      return 5.5;
    } else if (itemName == itemPrice[4]) {
      return 4;
    } else if (itemName == itemPrice[5]) {
      return 5;
    } else if (itemName == itemPrice[6]) {
      return 4.5;
    } else if (itemName == itemPrice[7]) {
      return 4.5;
    } else if (itemName == itemPrice[8]) {
      return 6.5;
    }
    price = itemPrice[price];
    return price;
  }

  function isEmpty() {
    return (
      <>
        <img
          className="h-32"
          src="../public/images/illustration-empty-cart.svg"
          alt="Empty Cart"
        />
        <h3 className="text-Rose-500 text-sm self-center">
          Your added items will appear here
        </h3>
      </>
    );
  }

  function isAdd() {
    return (
      <div className="flex flex-col gap-2 ">
        {cartItems.map((item, index, itemOriginalPrice) => (
          <div
            key={index}
            className="flex  justify-between w-[100%] border-solid border-black/50 border-b mb-1"
          >
            <div className="space-y-1">
              <h4>{item.name}</h4>
              <div className="flex gap-2">
                <div className="text-Red font-bold"> {item.quantity}x </div>
                <div>
                  <span className="font-light text-sm mr-4">
                    @ ${(itemOriginalPrice = itemOriginalPrices(item.name))}
                  </span>
                  ${item.price}
                </div>
              </div>
            </div>
            <button
              className="text-red-500 self-start"
              onClick={() => onRemove(item.name)}
            >
              <img src="../src/assets/images/icon-remove-item.svg" alt="" />
            </button>
          </div>
        ))}
        <h4 className="my-2">
          Order Total: $
          {cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)}
        </h4>
        <div className="bg-Rose-100 px-[15px] py-[12px] rounded-lg flex gap-[10px] w-[90%] my-4 mx-auto">
          <img
            src="../public/images/icon-carbon-neutral.svg"
            alt="carbon neutral"
          />
          <p className="text-sm font-light ">
            This is a <strong className="font-bold">Carbon Neutral</strong>{" "}
            delivery
          </p>
        </div>
        <button
          className="bg-Red/90 text-white px-4 py-4 rounded-full mt-2 hover:bg-Red/70"
          onClick={onValidate}
        >
          Confirm Order
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white flex flex-col gap-8 min-w-[400px] w-1/5 min-h-[40%] h-max px-8 py-6 rounded-lg md:min-w-[300px]">
      <h2 className="text-Red text-2xl font-bold self-start">
        Your Cart({cartItems.length} {cartItems.length === 1 ? "item" : "items"}
        )
      </h2>
      {Active ? isAdd() : isEmpty()}
    </div>
  );
};

export default Cart;
