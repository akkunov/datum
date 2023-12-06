import {useSelector} from "react-redux";

export const useSelectorUser = () => {
    const user = useSelector(state => state.user)
    return user
}

export const useSelectorClinic = () => {
    const clinic = useSelector(state => state.clinic)
    return clinic
}

export class useLocalStorage {
    static getToken (key)  {return localStorage.getItem(key)};

    static setToken(key ,token) { localStorage.setItem(key, token)};

    static removeToken (key) { localStorage.removeItem(key)};
}