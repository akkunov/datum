import axios from 'axios'
import {useLocalStorage} from "../Hooks/Hooks.js";
const url = `http://localhost:8080/api/v1/auth`
const clinicUrl = `http://localhost:8080/api/v1/clinic`
export const $api = axios.create({
    baseURL: url,
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${useLocalStorage.getToken('accessToken')}`
    return configs
})

export const $clinic = axios.create({
    baseURL: clinicUrl,
})

$clinic.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${useLocalStorage.getToken('accessToken')}`
    return config
})

$clinic.interceptors.request.use((config) => {

})