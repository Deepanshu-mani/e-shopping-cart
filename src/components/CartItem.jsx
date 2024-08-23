import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { remove } from "../redux/slices/CartSlice";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  };

  return (
    <div className="flex gap-14 mt-8 items-center pb-4 border-b-4 border-gray-400 max-w-xl">
      <div className="h-full">
        <img src={item.image} alt={item.title} className=" max-w-28" />
      </div>
      <div>
        <h1 className="max-w-90 text-gray-700 font-semibold text-lg text-left pr-5">
          {item.title}
        </h1>

        <h1 className="w-90 text-gray-400 font-normal text-[14px] text-left mt-3 pr-5">
          {item.description.split(" ").slice(0, 10).join(" ") + "..."}
        </h1>

        <div className="flex flex-row justify-between items-center mt-10">
          <p
            className="text-green-600 text-lg font-semibold items-center
           w-full"
          >
            ${item.price}
          </p>
          <div className="relative cursor-pointer">
            <div className="bg-red-300 h-11 w-11 rounded-full"></div>
            <MdDeleteForever
              onClick={removeFromCart}
              className="absolute top-1 right-1.5 text-3xl text-red-600 z-10 pt-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
