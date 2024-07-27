import ForgotPasswordgif from "../assets/Gifs/ForgotPassword.gif";
import { FaChevronLeft } from "react-icons/fa";
function ForgotPassword() {
  return (
    <div className="bg-[#AB97D5] min-h-screen flex items-center justify-center">
    <div className="w-full max-w-md p-4" style={{ marginTop: '-8.5rem' }}>
    <br /><br />
    <div>
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-[#FFF5E9]">
            Forgot Password
        </h2>
    </div>
    <FaChevronLeft className="text-white absolute top-6" />
    <div className="flex justify-center my-4">
          <img src={ForgotPasswordgif} alt="Image" className="h-32 object-cover" />
        </div>
        <div>
            <h4 className='text-[#FFF5E9] text-center'>Enter your email or phone number to reset your password</h4>
        </div>
        <form className="space-y-6 mt-10" action="#" method="POST">
          <div>
            <input
              placeholder="Phone Number or Email "
              id="name"
              name="name"
              type="text"
              required
              className="block w-full rounded-full border-0 px-5 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            />
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-full bg-[#82A1FD] px-3 py-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Login
            </button>
          </div>
          </form>
          <div className="mt-10 text-center text-lg text-[#FFF5E9]">
            Don't have an account?
            <a href="#" className="ml-2 font-semibold leading-6 hover:text-indigo-500 text-[#FFF5E9] underline">
              SignUp
            </a>
          </div>
    </div>
    </div>
  )
}

export default ForgotPassword
