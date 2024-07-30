import { useState } from "react";
import { FaLock } from "react-icons/fa";
import { IoEye, IoEyeOff } from "react-icons/io5";
import BackButtonHeadbar from "./common/BackButtonHeadbar";
import EnterNewPass from "../assets/images/EnterNewPass.svg";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as yup from "yup";

type Values = {
  password1: string;
  password2: string;
};

const initialValues: Values = {
  password1: "",
  password2: "",
};

function EnterPassword() {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const togglePassword1Visibility = () => {
    setShowPassword1((p) => !p);
  };

  const togglePassword2Visibility = () => {
    setShowPassword2((p) => !p);
  };

  const handleSubmit = (
    values: Values,
    { resetForm }: FormikHelpers<Values>
  ) => {
    console.log(values);
    resetForm();
    alert('Password reset successfully.')
  };

  // regular expression to validate.
  // password length must be 8 digits, must include 1 number and 1 special characters.
  const passRegexp = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

  // schema for form validation
  const ValidationSchema = yup.object({
    password1: yup
      .string()
      .min(8, "password length should be 8 characters.")
      .matches(
        passRegexp,
        "password must include 1 number and 1 capital letter"
      )
      .required("password is required."),
    password2: yup
      .string()
      .oneOf([yup.ref("password1")], "both password doesn't match.")
      .required("password is required."),
  });

  return (
    <div className="bg-custom-background-gradient flex justify-center min-h-screen ">
      <div className="w-full flex flex-col items-center">
        <BackButtonHeadbar />
        <div className="flex h-full w-full justify-center items-center">
          <div className="w-[90%] max-w-[800px] p-4 lg:flex  bg-stone-50 bg-opacity-20 border-[1px] border-stone-50 rounded-md">
            <div className="lg:w-1/2">
              <div className="text-center p-4">
                <h2 className="text-2xl font-bold leading-9 tracking-tight drop-shadow text-[#FFF5E9]">
                  Enter New Password
                </h2>
                <h2 className="text-[#FFF5E9] ">
                  Please enter your new password
                </h2>
              </div>
              <div className="flex justify-center my-8">
                <img
                  src={EnterNewPass}
                  alt="Image"
                  className="w-32 lg:w-56 object-cover"
                />
              </div>
            </div>
            <Formik
              onSubmit={handleSubmit}
              initialValues={initialValues}
              validationSchema={ValidationSchema}
            >
              <Form className=" p-4">
                <div className="space-y-6 mt-5">
                  <div>
                    <div className="flex items-center text-stone-50 lg:text-lg border-b-2 border-stone-50 gap-3">
                      <FaLock />
                      <Field
                        id="password1"
                        name="password1"
                        placeholder="Enter new password"
                        className="w-full focus:outline-none  py-2  bg-transparent placeholder:text-stone-50 "
                        type={showPassword1 ? "text" : "password"}
                      />
                      <div className="cursor-pointer" onClick={togglePassword1Visibility}>
                        {!showPassword1 ? <IoEye /> : <IoEyeOff />}
                      </div>
                    </div>
                    <div className="h-4 mt-2">
                      <ErrorMessage
                        name="password1"
                        component={"div"}
                        className="text-xs text-red-500 "
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center text-stone-50 lg:text-lg border-b-2 border-stone-50 gap-3">
                      <FaLock />
                      <Field
                        name="password2"
                        id="password2"
                        placeholder="Enter new password again"
                        className="w-full focus:outline-none  py-2  bg-transparent placeholder:text-stone-50 "
                        type={showPassword2 ? "text" : "password"}
                      />
                      <div className="cursor-pointer" onClick={togglePassword2Visibility}>
                        {!showPassword2 ? <IoEye /> : <IoEyeOff />}
                      </div>
                    </div>
                    <div className="h-4 mt-2">
                      <ErrorMessage
                        name="password2"
                        component={"div"}
                        className="text-xs text-red-500 "
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-12">
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-full bg-[#82A1FD] px-3 py-1 text-sm leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Continue
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnterPassword;
