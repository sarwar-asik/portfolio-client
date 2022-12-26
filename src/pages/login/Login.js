import React, { useState } from "react";
import { useContext } from "react";
import { FaEye, FaEyeDropper, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { AuthContext } from "../../firebase/AuthProvider";

const Login = () => {
const {createUser, login} = useContext(AuthContext);
const [show, setShow] = useState(true);
const [error,setError] = useState("")

const handleShow = () => {
  setShow(!show);
};

const handleLogin =event=>{
  event.preventDefault()
  const form = event.target;
  const email  = form.email.value;
  const pass = form.password.value;
  login(email,pass).then(result=>{
    const user = result.user;
    console.log(result,user);
    setError("")
    toast(user)
    form.reset()
    
  })
  .catch(err=>{
    console.log(err);
    setError(err.message)
  })
  
}

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-5 gap-3 items-center max-w-[80%] mx-auto">
      <div className="">
        <figure>
          <img
            className="rounded-xl h-[500px]"
            src="https://img.freepik.com/free-photo/biometric-technology-background-with-fingerprint-scanning-system-virtual-screen-digital-remix_53876-104197.jpg?w=996&t=st=1670097729~exp=1670098329~hmac=65d36b6f9d41dc21509718f25324d5361e491e4ddf4e90edb4f824870c96a7d5"
            alt=""
          />
        </figure>
      </div>
      <form onSubmit={handleLogin}  className="card-body">
        <div>
          <label for="email">Your Email</label>
          <input
            name="Email"
            id="email"
            type="email"
            placeholder=" ex:abc@gmail.com"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label for="name" className="label my-2 ">
           <span> Your Password</span>
           <span>{
            show?<FaEyeSlash onClick={handleShow} />:<FaEye onClick={handleShow}/>
               }</span>
          </label>
          
          <input
            name="password"
            id="name"
            type={show?"password":"text"}
            placeholder="Type Password"
            className="input input-bordered w-full"
            required
          />
        </div>
        <p className="text-red-500 my-3 tex-sm">
          {error}
        </p>
        <div>
          <input className="py-3 px-2" id="buttons" type="submit" value="Send " />
        </div>
      </form>
    </div>
  );
};

export default Login;
