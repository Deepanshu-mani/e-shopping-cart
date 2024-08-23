import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { add, remove } from "../redux/slices/CartSlice";
const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  };
  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item Removed from Cart");
  };
  return (
    <div className="flex flex-col items-center justify-between
    hover:scale-105 transition duration-200 ease-in shadow-2xl gap-3 p-4 mt-10 ml-5 rounded-xl border-2 hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left
        truncate w-40 mt-1 ">{post.title}</p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[12px] text-left
        ">{post.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
      </div>
      <div >
        <img src={post.image} alt="{post image}" className="h-[180px]"/>
      </div>
      <div className="flex flex-row justify-between gap-12 items-center
       mt-5">
        <div>
          <p className="text-green-600 font-semibold items-center
           w-full ">${post.price}</p>
        </div>

        {cart.some((p) => p.id === post.id) ? (
          <button
          className=" rounded-full bg-red-600 text-white border-red-600 hover:bg-red-700 border-2 text-[12px] uppercase p-1 px-3 font-semibold transition duration-300 ease-in
 
          hover:text-white "  onClick={removeFromCart}>
          Remove Item</button>
        ) : (
          <button
          className="text-gray-700 border-gray-700 rounded-full border-2 text-[12px] uppercase p-1 px-3 font-semibold transition duration-200 ease-in
          hover:bg-gray-700 
          hover:text-white "
           onClick={addToCart}>Add to Cart</button>
        )}
      </div>
    </div>
  );
};

export default Product;
