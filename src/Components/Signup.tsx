import wellnessImage from "../assets/images/starting page.svg";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook,SiLinkedin } from "react-icons/si";
function Signuppage() {
  return (
    <div className="bg-[#ab97d5] relative min-h-screen flex items-center justify-center flex-wrap pt-6 pb-14">
      <div className="lg:w-1/2">
        <div className="mx-auto w-fit max-w-md lg:mb-24">
          <h1 className="text-[60px] font-montserrat drop-shadow-md font-bold text-[#FFF5E9] lg:text[80px] lg:tracking-wide">
            wellpeace
          </h1>
          <h2 className="text-left font-montserrat drop-shadow-md pl-2 tracking-tight text-[17px] font-bold text-[#FFF5E9]">
            Connect.Learn.Thrive
          </h2>
        </div>
        <div className="flex justify-center mt-16 mb-4">
          <img
            src={wellnessImage}
            alt="wellness illustration"
            className="w-40 lg:w-60 "
          />
        </div>

        <h2 className="text-center text-2xl font-bold text-[#FFF5E9]">
          Your wellbeing,our priority
        </h2>
      </div>
      <div className="lg:w-1/2">
        <form
          className="space-y-6 mt-10 mx-auto bg-stone-50 bg-opacity-20 backdrop-blur-md px-6 py-6 lg:py-12 lg:px-12 rounded-md max-w-[400px] "
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
              className="block w-full  py-3 text-[#FFF5E9] border-b-2 border-stone-50 bg-transparent  placeholder:text-[#FFF5E9]"
            />
          </div>

          <div>
            <input
              placeholder="Email or Phone Number"
              id="contact"
              name="contact"
              type="email"
              required
              className="block w-full  py-3 text-[#FFF5E9] border-b-2 border-stone-50 bg-transparent  placeholder:text-[#FFF5E9]"
            />
          </div>

          <div>
            <input
              placeholder="Password"
              id="password"
              name="password"
              type="password"
              required
              className="block w-full  py-3 text-[#FFF5E9] border-b-2 border-stone-50 bg-transparent  placeholder:text-[#FFF5E9]"
            />
          </div>

          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox text-blue-600" />
            <span className="text-[#FFF5E9]">
              I agree to terms and conditions
            </span>
          </label>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-full bg-[#4274c2] hover:bg-[#477cd0] px-3 py-1 font-semibold leading-6 text-[#FFF5E9] "
            >
              Sign Up
            </button>
          </div>
          <div>
            <p className="text-center text-stone-50">or continue with</p>
            <div className="text-3xl mt-3 bg-stone-50 bg-opacity-30 p-2 rounded flex justify-evenly">
              <FcGoogle/>
              <SiFacebook className="text-blue-500"/>
              <SiLinkedin className="text-blue-800"/>
            </div>
          </div>

          <div className="mt-10 text-center text-lg text-[#FFF5E9]">
            Have an account?
            <a
              href="#"
              className="ml-2 font-semibold leading-6 hover:text-[] text-slate-900 underline"
            >
              Log In
            </a>
          </div>
        </form>
      </div>
      <button className="absolute bottom-2 right-4 text-stone-50 text-lg">Skip</button>
    </div>
  );
}

export default Signuppage;
