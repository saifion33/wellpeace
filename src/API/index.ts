import axios from 'axios';

const localhost_url ="http://192.168.106.50:5000";
const backend_url="https://wellpeace-backend.onrender.com";

const api=axios.create({
    baseURL: import.meta.env.DEV?localhost_url:backend_url
})


export const signupApi=(data:ISignupApiData)=>api.post('/auth/signup',data);
export const loginApi=(data:ISignupApiData)=>api.post('/auth/login',data);

export const updateUsernameApi=(data:IUpdateUsernameData)=>api.patch("/auth/updateUsername",data,{headers:{Authorization:`Bearer ${data.token}`}});
export const updateUserImageApi=(data:FormData)=>api.patch("/auth/updateUserImage",data,{headers:{Authorization:`Bearer ${data.get('token')}`}});
export const getUserInfoApi=(_id:string)=>api.get(`/auth/getUserInfo?_id=${_id}`);
export const getAllProductsApi=()=>api.get('/products/all');
export const getShortVideoApi=(token:string)=>api.get('/videos/all',{headers:{Authorization:`Bearer ${token}`}});
