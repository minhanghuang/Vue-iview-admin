import axios from '@/utils/axios'

const api_all = {
    // 获取所有用户列表
    get_test_list() {
        return axios({
            url: '/api/test/list/',
            method: 'GET',
        })
    },
    create_test(dog) {
        return axios({
            url: '/api/test/create/',
            method: 'POST',
            data: {
                dog: dog
            },
        })
    },
};

export default api_all
