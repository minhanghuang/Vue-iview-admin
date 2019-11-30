import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/home'
import Login from '@/views/login/login'
import Test from '@/test/test'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            redirect:"/dashboard",
            children:[
                {
                    path: "/listblog",
                    component: () => import("@/components/blog_list/bloglist")
                },
                {
                    path: "/createblog",
                    component: () => import("@/components/blog_create/blogcreate")
                },
                {
                    path: "/detailblog",
                    component: () => import("@/components/blog_detail/blogdetail")
                },
                {
                    path: "/person",
                    component: () => import("@/views/person/person")
                },
                {
                    path: "/dashboard",
                    component: () => import("@/views/dashboard/dashboard")
                },
                {
                    path: "/logs",
                    component: () => import("@/views/mylogs/mylogs")
                },
                {
                    path: "/tools",
                    component: () => import("@/views/mytools/mytools")
                },
                {
                    path: "/task",
                    component: () => import("@/views/mytask/mytask")
                },
                {
                    path: "/help",
                    component: () => import("@/views/myhelp/myhelp")
                },
            ]
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
        },
        {
            path: '/test',
            name: 'Test',
            component: Test,
        },
    ]
})
