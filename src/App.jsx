import { useState } from "react";
import Cart from "./Cart.jsx";
import Desserts from "./Desserts.jsx";
import PurchaseValidation from "./PurchaseValidation.jsx";

export default function App() {
  const [order, setOrder] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showPurchaseValidation, setShowPurchaseValidation] = useState(false);
  function addItems(dessert) {
    setOrder(true);
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.name === dessert.name);

      if (existingItem) {
        // If the item already exists, increase its quantity
        return prevItems.map((item) =>
          item.name === dessert.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If the item doesn't exist, add it to the array with quantity 1
        return [...prevItems, { ...dessert, quantity: 1 }];
      }
    });
  }

  function removeItem(name) {
    setCartItems((prevItems) => prevItems.filter((item) => item.name !== name));
  }

  function handleValidatePurchase() {
    setShowPurchaseValidation(true);
  }

  // function handleConfirmPurchase() {
  //   // Handle the purchase confirmation (e.g., send data to server, clear cart)
  //   alert("Purchase confirmed!");
  //   setCartItems([]);
  //   setShowPurchaseValidation(false);
  // }

  function handleCancelPurchase() {
    setShowPurchaseValidation(false);
    setCartItems([]);
  }

  return (
    <div className="w-full my-24 md:mx-auto">
      <div className="container flex md:flex-col md:items-center lg:flex-col lg:items-center xl:flex-col xl:items-center h-max gap-8 max-w-[1280px] mx-auto">
        <Desserts handle={addItems} />
        <Cart
          Active={order}
          cartItems={cartItems}
          onRemove={removeItem}
          onValidate={handleValidatePurchase}
        />
        {showPurchaseValidation && (
          <PurchaseValidation
            cartItems={cartItems}
            onCancel={handleCancelPurchase}
          />
        )}
      </div>
    </div>
  );
}
