import axios from '@/utils/axios'

const api_all = {
    post_user_checktoken_api(token) { // 校验token是否过期
        return axios({
            url: '/api/token-verify/',
            method: 'POST',
            data: {
                token: token,
            }
        })
    },

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
    get_user_detail_api(username) { // 获取用户详细资料
        return axios({
            url: '/api/user/detail-user/'+username+'/',
            method: 'GET',
        })
    },
    put_user_detail_api(username, value) { // 更新用户详细资料
        return axios({
            url: '/api/user/update-user/'+username+'/',
            method: 'PUT',
            data: {
                name: value.name,
                wechat: value.wechat,
                description: value.description,
                email: value.email,
                company: value.company,
                department: value.department,
                position: value.position,
                city: value.city,
                tag: value.tag,
            }
        })
    },
    put_cloudword_update_api(username, value) { // 更新云词图
        return axios({
            url: '/api/user/data/update-cloudword/'+username+'/',
            method: 'PUT',
            data: {
                circle: value.circle,
                width: value.width_img,
                color: value.color,
                full: value.full,
                tag: value.tag,
            }
        })
    },
    get_data_detail_api(username,value) { // 获取用户data
        return axios({
            url: '/api/user/data/detail-data/'+username+'/',
            method: 'GET',
            params: {"reverse":value},
        })
    },
    put_timeline_update_api(username, value) { // 更新时光轴
        let value_data = JSON.stringify(value);
        return axios({
            url: '/api/user/data/update-timeline/'+username+'/',
            method: 'PUT',
            data: {
                timeline: value_data,
            }
        })
    },
    put_cloudword_reset_api(username) { // 重置云词图
        return axios({
            url: '/api/user/data/reset-cloudword/'+username+'/',
            method: 'PUT',
        })
    },
    put_data_reset_api(username) { // 重置个人中心
        return axios({
            url: '/api/user/data/reset-data/'+username+'/',
            method: 'PUT',
        })
    },
    put_timeline_reset_api(username) { // 重置时光轴
        return axios({
            url: '/api/user/data/reset-timeline/'+username+'/',
            method: 'PUT',
        })
    },
};
// let username = JSON.parse(localStorage.getItem('username'));
// let token = JSON.parse(localStorage.getItem('TOKEN'));

export default api_all
