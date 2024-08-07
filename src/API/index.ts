import axios from 'axios';

const BASE_URL ="http://127.0.0.1:5000"

const api=axios.create({
    baseURL: BASE_URL
})


export const signupApi=(data:ISignupApiData)=>api.post('/auth/signup',data);
export const loginApi=(data:ISignupApiData)=>api.post('/auth/login',data);
