import {$api} from "../http/index.js";

export  class AuthService {
    static async login (email, password) {
        return  $api.post('/users', {email,password})
    }
    static async registration (email, password) {
        return $api.post('/register', )
    }
    static async logout (email, password) {
        return $api.post('/authenticate', )
    }
    static async chekEmail (email) {
        return $api.post('/checkEmail', )
    }
    static async setPassword (token, password) {
        return $api.post('/setPassword', )
    }
    static async resetPassword (email) {
        return $api.post('/resetPassword', )
    }
    static async confirm (email) {
        return $api.get('/confirm', )
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