import { toast } from "react-toastify";
import { auth, database } from "../firebase";

import Treking from "../assets/icons/travel and tracking icon.svg";
import CulturalFests from "../assets/icons/cultural.svg";
import Games from "../assets/icons/games icon.svg";
import Music from "../assets/icons/music icon.svg";
import Dancing from "../assets/icons/dancing icon.svg";
import Excercise from "../assets/icons/exercise icon.svg";
import charitableAct from "../assets/icons/charity act icon.svg";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  DataSnapshot,
  get,
  push,
  ref,
  serverTimestamp,
} from "firebase/database";
import AvatarEditor from "react-avatar-editor";

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

export const getRandomItems = (products: IProduct[], itemsCount: number) => {
  const randomItems: IProduct[] = [];
  const length=products.length-1;
  for (let i = 0; i < itemsCount; i++) {
    const random = Math.round(Math.random() * length); 
    const product = products[random];
    const isItem =randomItems.find((item) => {
      if (item && product && item._id === product._id) {
        return true;
      }
    });
    if (isItem) {
      itemsCount++;
      continue;
    }
    randomItems.push(product);
  }
  return randomItems;
};

export const firebaseSignout = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    const errMsg = error as { message: string };
    toast.error(errMsg.message);
    return false;
  }
};

export const createChannelFunc = async (data: ICreateChannelData) => {
  try {
    const completeData = {
      ...data,
      joinedAt: serverTimestamp(),
      admins: { BbY0DaLE8dXZBM1DYC58ryRsrpR2: true },
    };
    const channelsRef = ref(database, "channels");
    const res = await push(channelsRef, completeData);
    toast.success("channel created successfully.", { autoClose: 1500 });
    return res.key;
  } catch (error) {
    const errMsg = error as { message: string };
    toast.error(errMsg.message, { autoClose: 1500 });
    console.log(error);
  }
};

export const getChannelsList = async () => {
  try {
    const channelsRef = ref(database, "channels");
    const res = await get(channelsRef);
    const data = transformObjectToArray(res);
    return data;
  } catch (error) {
    console.log(error);
    const errMsg = error as { message: string };
    toast.error(errMsg.message, { autoClose: 1500 });
  }
};

export const transformObjectToArray = (snapVal: DataSnapshot) => {
  if (!snapVal.exists()) {
    return null;
  }
  const data = snapVal.val();
  if (typeof data !== "object" || data === null) {
    return [];
  }

  return Object.keys(data).map((item) => {
    return { ...data[item], _id: item };
  });
};

export const getImageBlob = async (
  editorRef: React.RefObject<AvatarEditor>
): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    if (editorRef.current) {
      const canvas = editorRef.current.getImageScaledToCanvas();
      canvas.toBlob((blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error("cant process file"));
        }
      });
    }
  });
};

export const quotes = [
  "Peaceful minds create a healthy world",
  "You have a brave heart and an unstoppable spirit. Keep shining your light! ",
  "You are a work of art, and every stroke, even the rough ones, adds to your unique masterpiece.",
];

export const channels: IChannel[] = [
  {
    _id: "ch1",
    admins: ["user1", "user2"],
    createdAt: new Date(),
    description: "For tracking and tourisim ",
    imageUrl: Treking,
    members: ["user3"],
    name: "Tracking and Tourism",
  },
  {
    _id: "ch2",
    admins: ["user1", "user2"],
    createdAt: new Date(),
    description: "For tracking and tourisim ",
    imageUrl: charitableAct,
    members: ["user3"],
    name: "Charitable Act",
  },
  {
    _id: "ch3",
    admins: ["user1", "user2"],
    createdAt: new Date(),
    description: "For tracking and tourisim ",
    imageUrl: CulturalFests,
    members: ["user3"],
    name: "Cultural Fests",
  },
  {
    _id: "ch4",
    admins: ["user1", "user2"],
    createdAt: new Date(),
    description: "For tracking and tourisim ",
    imageUrl: Music,
    members: ["user3"],
    name: "Music Concerts and Singing",
  },
  {
    _id: "ch5",
    admins: ["user1", "user2"],
    createdAt: new Date(),
    description: "For tracking and tourisim ",
    imageUrl: Dancing,
    members: ["user3"],
    name: "Dancing",
  },
  {
    _id: "ch6",
    admins: ["user1", "user2"],
    createdAt: new Date(),
    description: "For tracking and tourisim ",
    imageUrl: Excercise,
    members: ["user3"],
    name: "Exercise and Yoga",
  },
  {
    _id: "ch7",
    admins: ["user1", "user2"],
    createdAt: new Date(),
    description: "For tracking and tourisim ",
    imageUrl: Games,
    members: ["user3"],
    name: "Games and Fun Zone",
  },
];
interface IEvents {
  [_id: string]: IEvent[];
}
export const events: IEvents = {
  "-O3qsq6I5c_JSoBfpHEw": [
    {
      _id: "1",
      name: "kodachadri",
      description: "For tracking and tourisim",
      redirectUrl: "https://insider.in/kodachadri-trek-aug16-2024/event",
      imageUrl:
        "https://res.cloudinary.com/dwhwlxysm/image/upload/f_png/wellpeace/events/n67ybhurrjnrjqkukz4n",
    },
    {
      _id: "2",
      name: "Coorg",
      description: "",
      redirectUrl:
        "https://insider.in/coorg-and-mandalpatti-by-adventure-buddha-aug2-2024/event?embed=true&merchantId=57a42ad31b55e04007ca815b",
      imageUrl:
        "https://res.cloudinary.com/dwhwlxysm/image/upload/f_png/wellpeace/events/ziqeudkruq84jbyl48cn",
    },
    {
      _id: "3",
      name: "Dudh Sagar",
      description: "",
      redirectUrl:
        "https://www.thrillophilia.com/tours/multitudinous-activities-at-candolim-in-goa",
      imageUrl:
        "https://res.cloudinary.com/dwhwlxysm/image/upload/f_png/wellpeace/events/fvdb5tsni3a2y656ctl0",
    },
    {
      _id: "4",
      name: "Savan Durga",
      description: "",
      redirectUrl:
        "https://www.thrillophilia.com/tours/night-trekking-in-skandagiri-bangalore",
      imageUrl:
        "https://res.cloudinary.com/dwhwlxysm/image/upload/f_png/wellpeace/events/xd4leoipd2smjraiohdx",
    },
    {
      _id: "5",
      name: "Skandagiri",
      description: "",
      redirectUrl:
        "https://www.thrillophilia.com/tours/night-trekking-in-skandagiri-bangalore",
      imageUrl:
        "https://res.cloudinary.com/dwhwlxysm/image/upload/f_png/wellpeace/events/tjeigmrzzfcr0cla7kcz",
    },
    {
      _id: "6",
      name: "Uttari Betta",
      description: "",
      redirectUrl:
        "https://www.thrillophilia.com/tours/uttari-betta-sunrise-trek",
      imageUrl:
        "https://res.cloudinary.com/dwhwlxysm/image/upload/f_png/wellpeace/events/iimhzoifrlff7cn2dizn",
    },
    {
      _id: "7",
      name: "Night Camp",
      description: "",
      redirectUrl:
        "https://insider.in/night-camping-trek-activities-ramanagar-apr29-2023/event",
      imageUrl:
        "https://res.cloudinary.com/dwhwlxysm/image/upload/f_png/wellpeace/events/rqkgiugv36hfqnlqwbb9",
    },
    {
      _id: "8",
      name: "Lake Side",
      description: "",
      redirectUrl:
        "https://insider.in/lakeside-camping-in-kanva-by-escape2explore-apr2-2021/event",
      imageUrl:
        "https://res.cloudinary.com/dwhwlxysm/image/upload/f_png/wellpeace/events/ofc9szqovwm52ylnyhxi",
    },
    {
      _id: "9",
      name: "Gokarna",
      description: "",
      redirectUrl: "https://www.holidify.com/places/gokarna/",
      imageUrl:
        "https://res.cloudinary.com/dwhwlxysm/image/upload/f_png/wellpeace/events/umikybbb3akum2mmwwvh",
    },
    {
      _id: "10",
      name: "45 Place to visit",
      description: "",
      redirectUrl:
        "https://www.thrillophilia.com/destinations/bangalore/places-to-visit",
      imageUrl:
        "https://res.cloudinary.com/dwhwlxysm/image/upload/f_png/wellpeace/events/shrrjjtz2idnus6cpzmy",
    },
    {
      _id: "11",
      name: "Trekking In bangalore",
      description: "",
      redirectUrl: "https://www.holidify.com/collections/trekking-in-bangalore",
      imageUrl:
        "https://res.cloudinary.com/dwhwlxysm/image/upload/f_png/wellpeace/events/rmp4la5yw6gqsvbghvgp",
    },
    {
      _id: "12",
      name: "Place to Visit In Banglore",
      description: "",
      redirectUrl:
        "https://www.tripadvisor.in/Attractions-g297628-Activities-Bengaluru_Bangalore_District_Karnataka.html",
      imageUrl:
        "https://res.cloudinary.com/dwhwlxysm/image/upload/f_png/wellpeace/events/g5djhydouusfzlewfty0",
    },
  ],
};
