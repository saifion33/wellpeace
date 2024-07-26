import VerificationImg from "../assets/Verificationimg.svg";
import { FaChevronLeft } from "react-icons/fa";
function VerificationCode() {
  return(
    <div className="bg-[#AB97D5] min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md p-4" style={{ marginTop: '-8.5rem' }}>
        <br /><br />
        <div>
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-[#FFF5E9]">
                Enter Verification Code
            </h2>
        </div>
          <FaChevronLeft className="text-white absolute top-6" />
        <div className="flex justify-center my-4">
          <img src={VerificationImg} alt="Image" className="w-32 h-32 object-cover" />
        </div>
        <div>
            <h4 className='text-[#FFF5E9] text-center'>We have send the code Verification to your mobile</h4>
        </div>
        <form className="mt-6 flex justify-center">
          <input
            type="text"
            maxLength={1}
            className=" mr-4 w-12 h-12 text-center border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            maxLength={1}
            className=" mr-4 w-12 h-12 text-center border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            maxLength={1}
            className=" mr-4 w-12 h-12 text-center border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            maxLength={1}
            className=" mr-4 w-12 h-12 text-center border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </form>
        <br />
        <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-full bg-[#82A1FD] px-3 py-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Continue
            </button>
        </div>
        <div className="mt-2 text-right">
            <a href="#" className="ml-2 text-lg leading-6 hover:text-indigo-500 text-[#FFF5E9] underline">
              Resend
            </a>
        </div>
    </div>
    </div>
  );
}

export default VerificationCode
