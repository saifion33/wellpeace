interface ISignupLoginForm {
  email: string;
  password: string;
}
interface ISignupData {
  email: string;
  password: string;
}
interface ISignupApiData extends ISignupData {
  token: string;
}

interface IUser {
  _id: string;
  uid: string;
  name: string;
  email: string;
  imageUrl: string | null;
  joinedAt: string;
}

interface IServerResponse {
  message: string;
  errors: string[];
}

interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  imageLink: string;
  buyLink: string;
}

interface IGetAllProductsResponse {
  message: string;
  products: IProduct[];
}

interface IChannel {
  _id: string;
  name: string;
  description: string;
  admins: string[];
  members: string[];
  createdAt: Date;
  imageUrl: string;
}

interface ICreateChannelResponse {
  _id: string;
}

interface ICreateChannelFormData {
  name: string;
  description: string;
  imageUrl: string | null;
}

interface ICreateChannelData extends ICreateChannelFormData {
  uid: string;
}

interface IEvent {
  _id: string;
  name: string;
  description: string;
  imageUrl: string | null;
  redirectUrl: string | null;
}

interface IChat {
  _id: string;
  author: {
    _id: string;
    name: string;
    imageUrl: string | null;
  };
  message: string;
  replyTo: {
    name: string;
    _id: string;
  }|null;
  channelId: string;
  createdAt: object;
}

interface ReplyTo{
  _id: string;
  name: string;
}

interface IUpdateUsernameData{
  token: string;
  updatedUsername: string;
}

interface IUpdateUserImageData{
  token: string;
  fd:FormData
}

interface IComment {
  _id:string;
  content:string;
  createdAt:object;
  user:{
    _id:string;
    name:string;
    imageUrl:string | null;
  }
}

interface IVideo{
  _id:string;
  title:string;
  description:string;
  tags:string[];
  url:string;
  comments:IComment[];
  likes:string[];
  uploadedAt:object;
  user:{
    _id:string;
    name:string;
    imageUrl:string | null;
  }
}

type FilePreviewType="audio"|"video"|"image";