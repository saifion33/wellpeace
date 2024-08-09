import { toast } from "react-toastify";
import { auth } from "../firebase";

import Treking from "../assets/icons/trekking and tourism icon.svg";
import CulturalFests from "../assets/icons/cultural.svg";
import Games from "../assets/icons/games icon.svg";
import Music from "../assets/icons/music icon.svg";
import Dancing from "../assets/icons/dancing icon.svg";
import Excercise from "../assets/icons/exercise icon.svg";
import charitableAct from "../assets/icons/charitable act icon.svg";

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

export const quotes=[
  "Peaceful minds create a healthy world",
  "You have a brave heart and an unstoppable spirit. Keep shining your light! ",
  "You are a work of art, and every stroke, even the rough ones, adds to your unique masterpiece."
]

export const channels:IChannel[] = [
  {_id:'ch1',admins:['user1', 'user2'],createdAt:new Date(),description:'For tracking and tourisim ',imageUrl:Treking,members:['user3'],name:'Tracking and Tourism'},
  {_id:'ch2',admins:['user1', 'user2'],createdAt:new Date(),description:'For tracking and tourisim ',imageUrl:charitableAct,members:['user3'],name:'Charitable Act'},
  {_id:'ch3',admins:['user1', 'user2'],createdAt:new Date(),description:'For tracking and tourisim ',imageUrl:CulturalFests,members:['user3'],name:'Cultural Fests'},
  {_id:'ch4',admins:['user1', 'user2'],createdAt:new Date(),description:'For tracking and tourisim ',imageUrl:Music,members:['user3'],name:'Music Concerts and Singing'},
  {_id:'ch5',admins:['user1', 'user2'],createdAt:new Date(),description:'For tracking and tourisim ',imageUrl:Dancing,members:['user3'],name:'Dancing'},
  {_id:'ch6',admins:['user1', 'user2'],createdAt:new Date(),description:'For tracking and tourisim ',imageUrl:Excercise,members:['user3'],name:'Exercise and Yoga'},
  {_id:'ch7',admins:['user1', 'user2'],createdAt:new Date(),description:'For tracking and tourisim ',imageUrl:Games,members:['user3'],name:'Games and Fun Zone'},
]