import ForgotPasswordgif from "../assets/Gifs/ForgotPassword.gif";
import { FaChevronLeft } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as yup from "yup";
type Values = {
  email: string;
};
const initialValues = {
  email: "",
};

function ForgotPassword() {
  const ValidationSchema = yup.object({
    email: yup.string().email("invalid email").required("email is required"),
  });
  const handleSubmit = (
    values: Values,
    { resetForm }: FormikHelpers<Values>
  ) => {
    alert(
      `${
        values.email.split("@")[0]
      } Keep patience! we are working on this feature`
    );
    resetForm();
  };
  return (
    <section className="bg-[#AB97D5] min-h-screen ">
      <header className="w-full bg-stone-50  p-4 bg-opacity-30 backdrop-blur-md">
        <FaChevronLeft className="text-stone-50 cursor-pointer" />
      </header>
      <div className="flex justify-center items-center  h-full mt-10">
        <div className="w-full p-4 flex flex-col justify-center items-center ">
          <div>
            <h2 className="text-center  text-2xl font-bold leading-9 tracking-tight text-[#FFF5E9] drop-shadow-md">
              Forgot Password
            </h2>
          </div>
          <div className="flex justify-center my-4">
            <img
              src={ForgotPasswordgif}
              alt="Image"
              className="h-32 object-cover "
            />
          </div>

          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={ValidationSchema}
          >
            <Form className="space-y-6 mt-10 bg-stone-50  w-full bg-opacity-30 backdrop-blur-md p-5 rounded-md max-w-[400px] lg:[w-400px]">
              <div>
                <h4 className="text-[#FFF5E9] text-center">
                  Enter your email to reset your password
                </h4>
              </div>
              <div>
                <Field
                  placeholder="Email"
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="block w-full focus:outline-none  py-2 text-[#FFF5E9] border-b-2 border-stone-50 bg-transparent  placeholder:text-[#FFF5E9]"
                />
                <div className="h-4 pt-2">
                  <ErrorMessage
                    className="text-xs text-red-500"
                    name="email"
                    component={"div"}
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-full bg-[#7CA1FC] px-3 py-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#7091e4]"
                >
                  send email
                </button>
              </div>
            </Form>
          </Formik>
          {/* <div className="mt-10 text-center text-lg text-[#FFF5E9]">
          Don't have an account?
          <a
            href="#"
            className="ml-2 font-semibold leading-6 hover:text-indigo-500 text-[#FFF5E9] underline"
          >
            SignUp
          </a>
        </div> */}
        </div>
      </div>
    </section>
  );
}

export default ForgotPassword;
