import axios from 'axios'
import {useLocalStorage} from "../Hooks/Hooks.js";
const domain = '192.168.229.198';
const clinicUrl = `http://localhost:8080/USER/`
const url = 'http://localhost:8080/AUTHENTICATE'

    //`http://${domain}:8080/AUTHENTICATE`
export const $api = axios.create({
    baseURL: url,
})

// $api.interceptors.request.use((config) => {
//     config.headers.Authorization = `Bearer ${useLocalStorage.getToken('accessToken')}`
//     return config
// })



export const $clinic = axios.create({
    baseURL: clinicUrl,
})

$clinic.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${useLocalStorage.getToken('accessToken')}`
    return config
})

$clinic.interceptors.response.use((config) => {
    return config
    }, async (error) => {
        const originalRequest = error.config;
        if (error.status === 403 && error.config && !error.config._isRetry){
            originalRequest._isRetry = true
            try {
                const token = useLocalStorage.getToken('refreshToken')
                const response = await  axios.get(`http://localhost:8080/api/v1/auth/refresh-token`, token)
                useLocalStorage.setToken('accessToken',response.data)
                return $clinic.request(originalRequest)
            }catch (e) {
                useLocalStorage.removeToken('refreshToken')
                useLocalStorage.removeToken('accessToken')
                console.log('не Авторизован')
            }
        }
        throw  error
})