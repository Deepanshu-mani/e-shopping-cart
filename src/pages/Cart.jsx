import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="px-4 md:px-8 lg:px-16 py-8">
      {cart.length > 0 ? (
        <div className="flex flex-col lg:flex-row max-w-6xl mx-auto space-y-10 lg:space-y-0 lg:space-x-10">
          <div className="flex-1">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          <div className="flex-shrink-0 w-full lg:w-1/3">
            
            <div className="sticky top-20">
              <div className="flex flex-col h-auto lg:h-[70vh] justify-between p-8 bg-gray-100 rounded-lg shadow-lg mt-10 lg:mt-0">
                <div>
                  <div className="text-green-700 text-lg lg:text-xl uppercase font-bold">
                    Your Cart
                  </div>
                  <div className="text-green-700 text-4xl lg:text-5xl font-bold uppercase mb-6">
                    Summary
                  </div>
                  <p className="text-base lg:text-lg font-semibold text-gray-700">
                    Total Items: <span>{cart.length}</span>
                  </p>
                </div>

                <div>
                  <p className="text-base lg:text-lg text-gray-700">
                    Total Amount:{" "}
                    <span className="font-bold">${totalAmount.toFixed(2)}</span>
                  </p>
                  <button className="text-lg lg:text-xl mt-5 text-white bg-green-700 font-bold border-4 py-2 rounded-xl w-full hover:scale-105 transition-all ease-in-out">
                    Checkout Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex h-[80vh] flex-col justify-center items-center gap-6">
          <h1 className="text-2xl text-center">Cart Empty</h1>
          <Link to={"/"}>
            <button className="text-lg lg:text-2xl text-green-600 font-bold border-4 px-4 py-2 rounded-2xl border-green-600 hover:text-white hover:bg-green-600 hover:scale-105 transition-all ease-in-out">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;