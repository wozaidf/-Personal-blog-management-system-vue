import http from './index'

function LoginService(username, password) {
    return http.post(`/login`, null, { params: {username, password} },
    )
}

export default LoginService

