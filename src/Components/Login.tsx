import Logingif from "../assets/Gifs/Login.gif";

function Loginpage() {
  return (
    <div className="bg-[#AB97D5] min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-4">
        <h2 className="text-left text-6xl font-bold leading-40 tracking-tight text-[#FFFDD0]">
         wellpeace
        </h2>
        <h2 className="text-left text-1xl font-bold leading-9 tracking-tight text-[#FFF5E9]">
          Connect.Learn.Thrive
        </h2>
        <div className="flex justify-center my-8">
          <img src={Logingif} alt="Image" className="h-52 object-cover" />
        </div>
        <form className="space-y-6 mt-10" action="#" method="POST">
          <div>
            <input
              placeholder="Phone Number, Username or Email "
              id="name"
              name="name"
              type="text"
              required
              className="block w-full rounded-full border-0 px-5 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            />
          </div>

          <div>
            <input
              placeholder="Password"
              id="username"
              name="username"
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
          <div className="mt-10 text-center text-lg text-[#FFF5E9]">
            Forgot Password?
          </div>
          <div className="mt-10 text-center text-lg text-[#FFF5E9]">
            Don't have an account?
            <a href="#" className="ml-2 font-semibold leading-6 hover:text-indigo-500 text-[#FFF5E9] underline">
              SignUp
            </a>
          </div>
          </form>
          <br />
          <div className="ml-6">
          <span className="text-[#FFF5E9] text-1">Your information is 100% confidential and never shared with anyone</span>
          </div>
          <div className="relative" style={{position:"relative", left:'17.5rem'}}>
            <h1 className="text-white">Skip</h1>
          </div>
        </div>
        </div>
  )
}

export default Loginpage
