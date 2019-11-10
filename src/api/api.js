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
    detail_article_list_api(id) { // 获取博文详细信息
        return axios({
            url: '/api/article/detail-article/'+id+'/',
            method: 'GET',
        })
    },
    post_article_create_api(title,content) { // 用户登录
        return axios({
            url: '/api/article/create-article/',
            method: 'POST',
            data: {
                title: title,
                content: content,
            }
        })
    },
    put_article_update_api(id,subtitle) { // 更新博文
        return axios({
            url: '/api/article/update-article/'+id+'/',
            method: 'PUT',
            data: {
                subtitle: subtitle, // 副标题
            }
        })
    },
};

export default api_all
