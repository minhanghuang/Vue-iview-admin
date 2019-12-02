import Vue from 'vue'
// import Vuex from 'vuex' // 使用CDN后注释掉
//
// // 告诉 vue “使用” vuex
// Vue.use(Vuex); // 使用CDN后注释掉

// 创建一个对象来保存应用启动时的初始状态
// 需要维护的状态
const store = new Vuex.Store({
    state: {
        blog:{
            blogid: -1, // 查看文章详细信息时,某篇文章的id,默认是-1,不显示任何文章
            bloglist: {}, // 文章列表
            blogdetail: {}, // 文章详细
        }
    },
    mutations:{
        // // // this.$store.commit("update_current_blog_id", -1);
        update_current_blog_id: (state, value) => { // 将当前文章的id保存到Vuex
            state.blog.blogid = value
        },
        clear_current_blog_id: (state, value) => { // 清空Vuex中的文章id
            state.blog.blogid = value  // 默认-1
        },
        update_current_blog_list: (state, value) => { // 将当前文章列表保存到Vuex
            state.blog.bloglist = value
        },
        update_current_blog_detail: (state, value) => { // 将当前文章详细信息保存到Vuex
            state.blog.blogdetail = value
        },
    },
    getters: {
        // // // let blogid = this.$store.getters.get_current_blog_id; // 获取当前文章id
        get_current_blog_id: state => {
            return state.blog.blogid // 获取当前文章id
        },
        get_current_blog_list: state => {
            return state.blog.bloglist // 获取当前文章列表
        },
        get_current_blog_detail: state => {
            return state.blog.blogdetail // 获取当前文章详细信息
        },
    }
});




// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default store
