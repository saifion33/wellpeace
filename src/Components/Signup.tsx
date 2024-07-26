import Loginimage from "../assets/k-img.png";

function Loginpage() {
  return (
    <div className="bg-[#AB97D5] min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-4">
        <h2 className="text-left text-2xl font-bold leading-9 tracking-tight text-[#FFF5E9]">
          Connect.Learn.Thrive
        </h2>
        <div className="flex justify-center my-4">
          <img src={Loginimage} alt="Image" className="w-32 h-32 object-cover" />
        </div>

        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-[#FFF5E9]">
          Your wellbeing,our priority
        </h2>

        <form className="space-y-6 mt-10" action="#" method="POST">
          <div>
            <input
              placeholder="Full Name"
              id="name"
              name="name"
              type="text"
              required
              className="block w-full rounded-full border-0 px-5 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            />
          </div>

          <div>
            <input
              placeholder="Username"
              id="username"
              name="username"
              type="text"
              required
              className="block w-full rounded-full border-0 px-5 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            />
          </div>

          <div>
            <input
              placeholder="Email or Phone Number"
              id="contact"
              name="contact"
              type="email"
              required
              className="block w-full rounded-full border-0 px-5 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            />
          </div>

          <div>
            <input
              placeholder="Password"
              id="password"
              name="password"
              type="password"
              required
              className="block w-full rounded-full border-0 px-5 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            />
          </div>

          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox text-blue-600" />
            <span className="text-[#FFF5E9]">I agree to terms and conditions</span>
          </label>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-full bg-[#82A1FD] px-3 py-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign Up
            </button>
          </div>

          <div className="mt-10 text-center text-lg text-[#FFF5E9]">
            Have an account?
            <a href="#" className="ml-2 font-semibold leading-6 hover:text-indigo-500 text-[#FFF5E9] underline">
              Log In
            </a>
          </div>
        </form>
        <br />
      </div>
    </div>
  );
}

export default Loginpage;
