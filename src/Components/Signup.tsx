import wellnessImage from "../assets/images/starting page.svg";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { SiFacebook, SiLinkedin } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import * as yup from "yup";

const initialValues: SignupForm = {
  name: "",
  email: "",
  password: "",
};

function Signuppage() {
  const handleSubmit = (values: SignupForm) => {
    alert(`HI ${values.name}, we are implimenting signup feature`)
  };

  // regular expression to validate.
  // password length must be 8 digits, must include 1 number and 1 special characters.
  const passRegexp = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

  // schema for form validation
  const ValidationSchema = yup.object({
    name: yup
      .string()
      .min(3, "Name should be minimum 3 characters").matches(/^[a-zA-Z ]+$/gi,'Numbers and special characters not allowed.')
      .required("Name is required"),
    email: yup.string().email("invalid email").required("email is required"),
    password: yup
      .string()
      .matches(
        passRegexp,
        "password must include atleast 1 number and 1 special character."
      )
      .required("password is required"),
  });

  return (
    <div className="bg-[#ab97d5] relative min-h-screen flex items-center justify-center flex-wrap pt-6 pb-14">
      <div className="lg:w-1/2">
        <div className="mx-auto w-fit max-w-md lg:mb-24">
          <h1 className="text-[60px] font-montserrat drop-shadow-md font-bold text-[#FFF5E9] lg:text[80px] lg:tracking-wide">
            wellpeace
          </h1>
          <h2 className="text-left font-montserrat drop-shadow-md -mt-2 pl-2 tracking-tight text-[17px] font-bold text-[#FFF5E9]">
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
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ValidationSchema}
        className="lg:w-1/2"
      >
        <Form className="space-y-5 mt-10 mx-auto bg-stone-50 bg-opacity-20 backdrop-blur-md px-6 py-6 lg:py-12 lg:px-12 rounded-md lg:w-[400px] max-w-[400px] ">
          <div>
            <Field
              placeholder="Full Name"
              id="name"
              name="name"
              type="text"
              required
              className="block w-full focus:outline-none  py-3 text-[#FFF5E9] border-b-2 border-stone-50 bg-transparent  placeholder:text-[#FFF5E9]"
            />
            <div className="h-4 pt-1">
              <ErrorMessage
                className="text-xs text-red-500"
                name="name"
                component={"div"}
              />
            </div>
          </div>

          <div>
            <Field
              placeholder="Email"
              id="email"
              name="email"
              type="email"
              required
              className="block w-full focus:outline-none  py-3 text-[#FFF5E9] border-b-2 border-stone-50 bg-transparent  placeholder:text-[#FFF5E9]"
            />
            <div className="h-4 pt-1">
              <ErrorMessage
                className="text-xs text-red-500"
                name="email"
                component={"div"}
              />
            </div>
          </div>

          <div>
            <Field
              placeholder="Password"
              id="password"
              name="password"
              type="password"
              required
              className="block w-full focus:outline-none  py-3 text-[#FFF5E9] border-b-2 border-stone-50 bg-transparent  placeholder:text-[#FFF5E9]"
            />
            <div className="h-4 pt-1">
              <ErrorMessage
                className="text-xs text-red-500"
                name="password"
                component={"div"}
              />
            </div>
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
            <div className=" mt-3 p-2 rounded flex justify-evenly">
              <div className=" rounded-full bg-stone-50 bg-opacity-20 h-12 w-12 flex justify-center items-center">
                <FcGoogle className="cursor-pointer text-[42px]" />
              </div>
              <div className="p-2 rounded-full bg-stone-50 bg-opacity-20 h-12 w-12 flex justify-center items-center">
                <SiFacebook className="text-blue-600 cursor-pointer text-4xl" />
              </div>
              <div className="p-1 rounded-full bg-stone-50 bg-opacity-20 h-12 w-12 flex justify-center items-center">
                <SiLinkedin className="text-blue-800 text-2xl cursor-pointer" />
              </div>
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
        </Form>
      </Formik>
      <button className="absolute bottom-2 right-4 text-stone-50 text-lg">
        Skip
      </button>
    </div>
  );
}

export default Signuppage;
