import axios from 'axios';

const localhost_url ="http://192.168.224.50:5000"
const backend_url="https://wellpeace-backend.onrender.com"

const api=axios.create({
    baseURL: import.meta.env.DEV?localhost_url:backend_url
})


export const signupApi=(data:ISignupApiData)=>api.post('/auth/signup',data);
export const loginApi=(data:ISignupApiData)=>api.post('/auth/login',data);

export const getAllProductsApi=()=>api.get('/products/all');
