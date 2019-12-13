/**
 * 全局变量
 */


// export const base_ip = "http://api.minhung.me";
export const base_ip = "http://127.0.0.1";
export const base_api_port = "19900";
export const base_url = base_ip+':'+base_api_port;
export const get_upload_avatar_url = () => { // 更新头像后端api地址
    let avatar_router = '/api/user/update-avataruser/';
    return base_url + avatar_router
};
export const get_upload_image_url = () => { // 更新头像后端api地址
    let avatar_router = '/api/article/update-image/';
    return base_url + avatar_router
};
