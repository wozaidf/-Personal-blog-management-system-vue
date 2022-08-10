import http from './index'

function LoginService(username, password) {
    return http.get(`/login`,{params:{username, password}},
    )
}

export default LoginService

