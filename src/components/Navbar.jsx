import React from "react";
import { GiShoppingCart } from "react-icons/gi";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const {cart} = useSelector((state) => state);
  return (
    <div>
      <div className="flex flex-row justify-around  bg-[#5b5979] p-1  text-white fixed w-full z-50 drop-shadow-md">
        <NavLink to="/">
          <div>
            <img src="../logo.png" alt="" className=" h-20 cursor-pointer" />
          </div>
        </NavLink>

        <div className="flex  items-center gap-8">
          <NavLink to="/">
            <p className="text-2xl hover:text-[#FFD700] transition-all ease ">Home</p>
          </NavLink>
 
          <NavLink to="/Cart">
          <div className="relative">
                  <GiShoppingCart className="text-3xl hover:text-[#FFD700] transition-all ease"/>
                  {
                    cart.length > 0 &&
                    <span
                    className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white" 
                    >{cart.length}</span>
                  }
                  </div>
            
          </NavLink>
        </div>
      </div>
      <div className="p-10"></div>
    </div>
  );
};

export default Navbar;
