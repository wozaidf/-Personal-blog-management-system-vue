//配置axios
//1.拦截器
//2.代理
//3.BaseUrl
//4.授权的头部字段  
import axios from 'axios'
const DEV_URL = 'http://localhost:8080'                            //测试的url
const PRODUCTION_URL ='https://www.baidu.com/'                     //生产的url
//用baseURL配置多个后台请求地址
const http = axios.create({
    baseURL:DEV_URL
})

// 添加请求拦截器
// 为所有的请求带上身份认证信息
// axios.interceptors.request.use(function (config) {
//     // 在发送请求之前做些什么
//     // config.headers['token'] = 'qwdadasasfgc'
//     console.log(config.headers)
//     // 一定要return config
//     return config
// }, function (error) {
//     // 对请求错误做些什么
//     return Promise.reject(error);
// });

export default http
