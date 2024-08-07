import { toast } from "react-toastify";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const signupwithEmail = async (data: ISignupData) => {
  try {
    const usercreds = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    const token = await usercreds.user.getIdToken();
    return token;
  } catch (error) {
    console.log(error);
    const errorMsg = error as { message: string };
    toast.warning(errorMsg.message, { autoClose: 1500 });
  }
};

export const signinWithEmail = async (data: ISignupData) => {
  const { email, password } = data;
  try {
    const usercreds = await signInWithEmailAndPassword(auth, email, password);
    const token = await usercreds.user.getIdToken();
    return token;
  } catch (error) {
    console.log(error);
    const errorMsg = error as { message: string };
    toast.warning(errorMsg.message, { autoClose: 1500 });
  }
};

