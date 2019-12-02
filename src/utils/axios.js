// import axios from 'axios' // 导入node_modules里的axios
import qs from 'qs'
import router from '../router/index'
import {base_url} from './common'



axios.defaults.baseURL = base_url; // 后端接口 ip:port
// axios.defaults.baseURL = "http://127.0.0.1:19900/"; // 后端接口 ip:port
// axios.defaults.baseURL = process.env.VUE_APP_BASE_API; // 后端接口 ip:port


axios.interceptors.request.use((request) => {
    //在发送请求之前做某件事
    var token = JSON.parse(localStorage.getItem('TOKEN'));
    if (token) {
        token = "TOKEN " + token;
        request.headers.common['Authorization'] = token;
    }
    if(request.method  === 'post'){
        request.data = qs.stringify(request.data);
    }
    return request;
},(error) =>{
    console.log('错误的传参');
    return Promise.reject(error);
});

// 响应拦截器
axios.interceptors.response.use(function (response) {
    return response
}, function (error) {
    if (error.response.status == 401) {
        localStorage.clear();
        router.replace({
            path: '/login',
        })
    }
    return Promise.reject(error)
});

export default axios // 导出axios

