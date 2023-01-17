/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { AiOutlineMenu} from "react-icons/ai";
import { BsMoon } from "react-icons/bs";


const Navbar = () => {
  return (
    <div className="">
      <nav className="h-[65px] w-full  flex">
        <div className="w-3/5  h-full flex">

          <div className="bg-[#153550] w-[65px] h-full flex items-center justify-center"><AiOutlineMenu className="text-white text-2xl"/></div>
          <div className="bg-white  flex justify-center items-center px-5"><img src="https://www.trainings.industrieshelpinghands.com/admin/uploads/logo6.png"  className="w-[160px] h-9"/></div>
          <div className=" flex justify-center items-center w-[350px]   ml-10">    <input type="text" name="name" className="rounded-full border bg-gray-200 h-8 w-full " placeholder="Serch for Course, Test Series, Notes and more" />
</div>
        </div>
        <div className="w-2/5  h-full flex justify-end items-center space-x-5 mr-5">
          <div className="bg-red-100 rounded-full p-2"><BsMoon/></div>
          <div className="bg-[#153550] px-4  py-2 rounded-full text-white">Sign Up</div>
          <div className="bg-blue-400  px-4  py-2 rounded-full text-white">Call us</div>
          </div>
      </nav>
    </div>
  );
};

export default Navbar;
