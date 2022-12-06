import React, { useState } from "react";
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";

const Signup = () => {


    const [show,setShow] = useState(true)

    const handleShow = ()=>{
        setShow(!show)
    }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-5 gap-3 items-center ">
     
      <div className="">
        <figure >
            <img 
            className="rounded-xl h-[500px]"
            
            src="https://img.freepik.com/free-photo/biometric-technology-background-with-fingerprint-scanning-system-virtual-screen-digital-remix_53876-104197.jpg?w=996&t=st=1670097729~exp=1670098329~hmac=65d36b6f9d41dc21509718f25324d5361e491e4ddf4e90edb4f824870c96a7d5" alt="" />
        </figure>
      </div>
      <form action="" className="py-5">
        <h1 className="text-2xl my-5 font-bold text-cyan-600">  Sign Up , Please </h1>
        <div class="flex items-center mb-5">
          <label
            for="name"
            class="w-20 inline-block text-right mr-4 text-gray-500 "
          >
            Name
          </label>
          <input
            name="name"
            id="name"
            type="text"
            placeholder="Your name"
            class="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
          />
        </div>
        <div class="flex items-center mb-5">
          <label
            for="img"
            class="w-20 inline-block text-right mr-4 text-gray-500 "
          >
            Photo
          </label>
          <input
            name="img"
            id="img"
            type="text"
            placeholder="Your img"
            class="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
          />
        </div>

        <div class="flex items-center mb-10">
          <label
            for="password"
            class="w-20 inline-block text-right mr-4 text-gray-500 "
          >
            password
          </label>
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Your Password"
            class="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
          />
        </div>
        <div class="text-right">
       
          <input type="submit" value="Sign Up" class="py-3 px-8 bg-cyan-600 text-green-100 font-bold rounded" />
        </div>
      </form>
    </div>
  );
};

export default Signup;
