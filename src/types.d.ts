interface ISignupLoginForm {
  email: string;
  password: string;
}
interface ISignupData{
  email: string;
  password: string;
}
interface ISignupApiData extends ISignupData{
  token: string;
}

interface IUser {
  _id: string;
  uid:string;
  name: string;
  email: string;
  imageUrl: string|null;
  joinedAt: string;
}

interface IServerResponse {
  message: string;
  errors: string[];
}

interface IProduct{
  _id:string;
  name: string;
  description: string;
  price: number;
  rating: number;
  imageLink: string;
}
