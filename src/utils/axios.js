import axios from 'axios' // 导入node_modules里的axios
import qs from 'qs'

axios.defaults.baseURL = "http://127.0.0.1:8000/"; // 后端接口 ip:port

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

/* 响应拦截器 */

axios.interceptors.response.use(function (response) {

    // if (response.data.code === 10010 || response.data.code === 10011) {
    //
    //     Storage.localRemove('token') // 删除已经失效或过期的token（不删除也可以，因为登录后覆盖）
    //
    //     router.replace({
    //
    //         path: '/login' // 到登录页重新获取token
    //
    //     })
    //
    // } else if (response.data.token) { // 判断token是否存在，如果存在说明需要更新token
    //
    //     Storage.localSet('token', response.data.token) // 覆盖原来的token(默认一天刷新一次)
    //
    // }

    return response

}, function (error) {

    return Promise.reject(error)
});

export default axios // 导出axios

