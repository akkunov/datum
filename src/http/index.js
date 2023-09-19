import axios from 'axios'
const url = `https://jsonplaceholder.typicode.com`
export const $api = axios.create({

    baseURL: url,
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`
    return config
})

export const $user = axios.create({
    baseURL: url,
    withCredentials: true
})