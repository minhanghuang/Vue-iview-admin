import axios from '@/utils/axios'

const api_all = {
    // 获取所有博文列表
    post_user_login_api(username,password) { // 用户登录
        return axios({
            url: '/api/user/login/',
            method: 'POST',
            data: {
                username: username,
                password: password,
            }
        })
    },
    get_article_list_api(params) { // 获取博文列表
        return axios({
            url: '/api/article/list-article/',
            method: 'GET',
            params: params,
        })
    },
    delete_article_list_api(id) { // 删除博文列表
        return axios({
            url: '/api/article/delete-article/'+id+'/',
            method: 'DELETE',
        })
    },
};

export default api_all
