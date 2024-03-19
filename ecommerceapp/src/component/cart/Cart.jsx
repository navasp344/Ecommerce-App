import React from "react";
import { useCart } from "../../context/CartContext";

const Cart = () => {
  const { cartItems, removeItemFromCart } = useCart();

  const handleRemoveItem = (itemId) => {
    removeItemFromCart(itemId);
  };

  return (
    <div className="">
      <h2 className="text-center">Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div className="d-flex flex-column justify-content-center  container-fluid mt-2 ">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="border border-3 mt-2 d-fle justify-content-center"
            >
              <div>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "100px" }}
                  className="mt-2 ms-2"
                />
              </div>
              <div>
                <p className="fw-bolder fs-4 ms-2">{item.title}</p>
                <div className="d-flex">
                  <p className="fs-4 ms-2 text-success">${item.price}</p>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="rounded fw-bold btn bg-danger text-light ms-3 mb-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
