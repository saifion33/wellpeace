import { toast } from "react-toastify";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
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

export const getRandomItems=(products:IProduct[],itemsCount:number) => {
  const randomItems:IProduct[] = [];
  for (let i = 0; i < itemsCount; i++) {
    const random=Math.round(Math.random() * products.length);
    const product=products[random];
    const isItem=randomItems.find(item=>item._id===product._id);
    if (isItem) {
      itemsCount++;
      continue;
    }
    randomItems.push(product);
  }
  console.log(randomItems);
  return randomItems;
}

export const firebaseSignout=async()=>{
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    const errMsg=error as {message:string}
    toast.error(errMsg.message)
    return false;
  }
}