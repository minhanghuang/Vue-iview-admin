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
            params: params, // {"page":callback_page}
        })
    },
    delete_article_list_api(id,state) { // 删除博文列表
        return axios({
            url: '/api/article/delete-article/'+id+'/',
            method: 'PUT',
            data: {
                state: state,
            }
        })
    },
    detail_article_list_api(id) { // 获取博文详细信息
        return axios({
            url: '/api/article/detail-article/'+id+'/',
            method: 'GET',
        })
    },
    post_article_create_api(title,content,state) { // 发布文章
        return axios({
            url: '/api/article/create-article/',
            method: 'POST',
            data: {
                title: title,
                content: content,
                state: state,
            }
        })
    },
    put_article_update_api(id, title, content, state) { // 更新文章
        return axios({
            url: '/api/article/update-article/'+id+'/',
            method: 'PUT',
            data: {
                title: title, // 标题
                content: content, // 内容
                state: state, // 文章状态
            }
        })
    },
    put_msgarticle_update_api(id, subtitle, tag_value, state) { // 更新文章弹框信息
        return axios({
            url: '/api/article/update-msg-article/'+id+'/',
            method: 'PUT',
            data: {
                subtitle: subtitle, // 副标题
                tag: JSON.stringify(tag_value), // 副标题
                state: state, // 文章状态
            }
        })
    },
    get_article_state_api(params) { // 获取文章状态数量
        return axios({
            url: '/api/article/get-state-article/',
            method: 'GET',
            params: params,
        })
    },
};

export default api_all
