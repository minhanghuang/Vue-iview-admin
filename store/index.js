import Vue from 'vue'
import Vuex from 'vuex'

// 告诉 vue “使用” vuex
Vue.use(Vuex);

// 创建一个对象来保存应用启动时的初始状态
// 需要维护的状态
const store = new Vuex.Store({
    state: {
        blog:{
            blogid: -1, // 查看文章详细信息时,某篇文章的id,默认是-1,不显示任何文章
        }
    },
    mutations:{
        update_current_blog_id: (state, value) => { // 将当前文章的id保存到Vuex
            state.blog.blogid = value
        },
        clear_current_blog_id: (state, value) => { // 清空Vuex中的文章id
            state.blog.blogid = value  // 默认-1
        }
    },
    getters: {
        // // // let blogid = this.$store.getters.get_current_blog_id; // 获取当前文章id
        get_current_blog_id: state => {
            return state.blog.blogid // 获取当前文章id
        }
    }
});




// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default store
