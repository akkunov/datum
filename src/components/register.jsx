import {Auth} from "./auth";

export function Login () {
    return (
        <Auth
            title={`Sign in to your account`}
            btnTitle={'Войти'}
        />
    )
}