import { useState } from "react";
import Loginimage from "../assets/images/starting page.svg";
import { IoEye, IoEyeOff } from "react-icons/io5";

function Loginpage() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <div className="bg-[#AB97D5] min-h-screen flex items-center justify-center">
      <div className="w-full p-4 flex flex-wrap">
        <div className="lg:w-1/2 w-full flex justify-center items-center">
          <div className="w-full ">
            <div className="w-fit mx-auto ">
              <h1 className="text-[62px] text-center  drop-shadow-md font-bold text-[#FFF5E9]  font-montserrat ">
                wellpeace
              </h1>
              <h2 className="text-[18px] pl-2 font-bold tracking-tight drop-shadow-md -mt-2  text-[#FFF5E9] mb-16 font-montserrat">
                Connect.Learn.Thrive
              </h2>
            </div>

            <div className="flex justify-center my-4">
              <img src={Loginimage} alt="Image" className="w-40 lg:w-60" />
            </div>

            <h2 className="text-center text-xl font-semibold leading-9 text-[#FFF5E9]">
              Your wellbeing,our priority
            </h2>
          </div>
        </div>
        <div className="lg:w-1/2 w-full">
          <form
            className="space-y-6 mt-10 w-full mx-auto lg:w-[60%] bg-stone-50 bg-opacity-20 p-5 lg:p-16 rounded-md shadow-sm backdrop-blur-sm "
            action="#"
            method="POST"
          >
            <div>
              <input
                placeholder="Full Name"
                id="name"
                name="name"
                type="text"
                required
                className="block w-full bg-transparent text-stone-50 focus:outline-none bg-opacity-10 border-b-2 border-[#D4CBFF] py-3 shadow-sm placeholder:text-stone-50"
              />
            </div>

            <div>
              <input
                placeholder="Username"
                id="username"
                name="username"
                type="text"
                required
                className="block w-full bg-transparent text-stone-50 focus:outline-none bg-opacity-10 border-b-2 border-[#D4CBFF] py-3  shadow-sm placeholder:text-stone-50"
              />
            </div>

            <div>
              <input
                placeholder="Email or Phone Number"
                id="contact"
                name="contact"
                type="email"
                required
                className="block w-full bg-transparent text-stone-50 focus:outline-none bg-opacity-10 border-b-2 border-[#D4CBFF] py-3  shadow-sm placeholder:text-stone-50"
              />
            </div>

            <div>
              <div className=" w-full  border-b-2 border-[#D4CBFF] py-3  shadow-sm  flex justify-center items-center">
                <input
                  placeholder="Password"
                  id="password"
                  name="password"
                  type={!isPasswordVisible ? "password" : "text"}
                  required
                  className="bg-transparent text-stone-50 focus:outline-none w-full placeholder:text-stone-50"
                />
                <div
                  onClick={() => setIsPasswordVisible((p) => !p)}
                  className="cursor-pointer pr-1"
                >
                  {!isPasswordVisible ? (
                    <IoEye className="text-xl text-[#FFF5E9]" />
                  ) : (
                    <IoEyeOff className="text-xl text-[#FFF5E9]" />
                  )}
                </div>
              </div>
            </div>

            <label className="flex items-center space-x-2">
              <input type="checkbox" className=" accent-transparent hover:outline-none  focus:accent-transparent/0 " />
              <span className="text-[#FFF5E9]">
                I agree to{" "}
                <span className="hover:text-blue-500 cursor-pointer">
                  terms
                </span>{" "}
                and{" "}
                <span className="hover:text-blue-500 cursor-pointer">
                  conditions.
                </span>
              </span>
            </label>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-full bg-[#4B81CB] px-3 py-1 font-semibold leading-6 text-[#FFF5E9] shadow-sm hover:bg-[#518cdd] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>

            <div className="mt-10 text-center text-lg text-[#FFF5E9]">
              Have an account?
              <button className="ml-2 font-semibold leading-6 text-slate-900 hover:text-indigo-500 underline">
                Log In
              </button>
            </div>
          </form>
        </div>
        <br />
      </div>
    </div>
  );
}

export default Loginpage;
