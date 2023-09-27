export const useCheckUser  = () => {
    return {isUser:!!localStorage.getItem('refreshToken')
    }
}