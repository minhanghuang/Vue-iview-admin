import Vue from 'vue'
import Vuex from 'vuex'

// 告诉 vue “使用” vuex
Vue.use(Vuex);

// 创建一个对象来保存应用启动时的初始状态
// 需要维护的状态
const store = new Vuex.Store({
    state: {
        // 放置初始状态 app启动的时候的全局的初始值
        // bloglist:{
        //     modalinfo: -1, // bloglist.vue 中 modalinfo数据, 默认给-1
        // },
        blogdetail:{
            blogid: 0, // 查看文章详细信息时,某篇文章的id,默认是0,不显示任何文章
        }
    },
    mutations:{
        update_current_blog_id: (state, value) => {
            state.blogdetail.blogid = value
        }
    },
    getters: {
        // // // let blogid = this.$store.getters.get_current_blog_id; // 获取当前文章id
        get_current_blog_id: state => {
            return state.blogdetail.blogid // 获取当前文章id
        }
    }
});




// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default store
