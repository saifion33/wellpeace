import VerificationImg from "../assets/images/Verificationimg.svg";
import { FaChevronLeft } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import React from "react";

function VerificationCode() {
  const inputRef = useRef<HTMLInputElement[]>([]);
  const [OTP, setOTP] = useState<string[]>(new Array(4).fill(""));
  const [activeInput, setActiveInput] = useState(0);
  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    console.log("event is fired");
    const value = e.target.value;
    // console.log(value, index);
    const newOTP = [...OTP];
    newOTP[index] = value;
    setOTP(newOTP);
    // console.log(inputRef.current[index].value)
    if (value && index < 3) {
      setActiveInput(index + 1);
    }

    if (!value && index !== 0) {
      setActiveInput(index - 1);
    }
  };

  useEffect(() => {
    inputRef.current[activeInput].focus();
  }, [activeInput]);

  return (
    <section className="bg-[#AB97D5] min-h-screen">
      <header className="w-full bg-stone-50  p-4 bg-opacity-30 backdrop-blur-md">
        <FaChevronLeft className="text-stone-50 cursor-pointer" />
      </header>
      <div className="flex justify-center items-center h-full mt-10 ">
        <div className="w-full max-w-md p-4 ">
          <br />
          <br />
          <div>
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-[#FFF5E9]">
              Enter Verification Code
            </h2>
          </div>
          <div className="flex justify-center my-4">
            <img
              src={VerificationImg}
              alt="Image"
              className="w-32 h-32 object-cover"
            />
          </div>
          <div>
            <h4 className="text-[#FFF5E9] text-center mt-16">
              We have send the code Verification to your mobile
            </h4>
          </div>
          <div className="mt-6 ">
            <div className="flex justify-center">
              {OTP.map((_, index) => {
                return (
                  <input
                    id={`digit-${index}`}
                    type="text"
                    maxLength={1}
                    key={index + 1}
                    value={OTP[index]}
                    ref={(el) => (el ? (inputRef.current[index] = el) : null)}
                    onChange={(e) => {
                      handleOnChange(e, index);
                    }}
                    
                    className=" mr-4 w-12 h-12 text-stone-50 text-center bg-stone-50 bg-opacity-30 backdrop-blur-md rounded-md focus:outline-none text-3xl"
                  />
                );
              })}
            </div>

            <div className="mt-6">
              <button
                type="submit"
                onClick={() => console.log(OTP)}
                className="flex w-full justify-center rounded-full bg-[#82A1FD] px-3 py-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Continue
              </button>
            </div>
          </div>
          <div className="mt-4 text-right">
            <button className="ml-2 text-lg leading-6 hover:text-indigo-500 text-[#FFF5E9] underline">
              Resend
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VerificationCode;
