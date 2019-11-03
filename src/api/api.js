import axios from '@/utils/axios'

const api_all = {
    // 获取所有博文列表
    post_user_login_api(username,password) {
        return axios({
            url: '/api/user/login/',
            method: 'POST',
            data: {
                username: username,
                password: password,
            }
        })
    },
    get_article_list(params) {
        return axios({
            url: '/api/article/list-article/',
            method: 'GET',
            params: params,
        })
    },
};

export default api_all
