import {$api} from "../http/index.js";

export  class AuthService {
    static async login (email, password) {
        const base64Credentials = btoa(`${email}:${password}`);
        const headers = {
            'Authorization': `Basic ${base64Credentials}`,
        };
        return  $api.get('/authenticate', {headers})
    }
    static async registration (email, password) {
        const base64Credentials = btoa(`USER:${email}:${password}`);
        const headers = {
            'Authorization': `Basic ${base64Credentials}`,
        };
        return $api.post('/register',{},{headers})
    }
    static async logout (email, password) {
        return $api.post('/authenticate', )
    }
    static async checkEmail (email) {
        const base64Credentials = btoa(`${email}`);
        const headers = {
            'Authorization': `Basic ${base64Credentials}`,
        };
        return $api.get('/checkEmail',{headers} )
    }
    static async setPassword (token, password) {
        return $api.post('/setPassword', )
    }
    static async resetPassword (email) {
        return $api.post('/resetPassword', )
    }
    static async confirm (email,password, code) {
        const base64Credentials = btoa(`${email}:${code}`);
        const headers = {
            'Authorization': `Basic ${base64Credentials}`,
        };
        return $api.get('/confirm', {headers})
    }
    static async forgotPassword (email) {
        return $api.get('/forgotPassword', )
    }
    static async refreshToken (email) {
        return $api.get('/refresh-token', )
    }
    static async createEmployee () {
        return $api.post()
    }
    static async getPosts () {
        return $api.get()
    }
}