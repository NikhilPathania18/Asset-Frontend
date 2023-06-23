import axios from 'axios'

const API = axios.create({baseURL: 'http://localhost:8000/api'});

API.interceptors.request.use((req)=>{
    let jwtToken= localStorage.getItem('superAdmin')
    if(jwtToken){
        let data= JSON.parse(jwtToken)
        req.headers.Authorization = data.token;
    }
    return req;
})

export const verifyEmail = async(token) => {
    const res = await API.post(`/verify-email/${token}`)
    return res;
}

export const createSuperAdmin = async({email, password}) => {
    const res = await API.post(`/register-superadmin`,{email, password})
    console.log(res);
    return res
}

export const companyProfile = async(companyDetails) => {
    const res = await API.post('/company-details',companyDetails)
    return res;
}

export const login = async({email,password}) => {
    const res = await API.post ('/login',{email,password});
    return res;
}