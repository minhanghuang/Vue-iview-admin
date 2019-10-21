import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home'
import Markdown from '@/components/index'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            redirect:"/table",
            children:[
                {
                    path: "/table",
                    component: () => import("@/views/home/content/content1")
                },
                {
                    path: "/form",
                    component: () => import("@/components/index")
                    // component: () => import("@/views/home/content/content2")
                }
            ]
        }
    ]
})
