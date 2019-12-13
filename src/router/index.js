// import Vue from 'vue'
// import Router from 'vue-router' // 使用CDN后注释掉
// import VueRouter from 'vue-router'

// Vue.use(Router);

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: (resolve) => require(["@/views/home/home"], resolve),
            redirect:"/dashboard",
            children:[
                {
                    path: "/listblog",
                    component: (resolve) => require(["@/components/blog_list/bloglist"], resolve)
                    // component: () => import("@/components/blog_list/bloglist")
                },
                {
                    path: "/createblog",
                    component: (resolve) => require(["@/components/blog_create/blogcreate"], resolve)
                    // component: () => import("@/components/blog_create/blogcreate")
                },
                {
                    path: "/detailblog",
                    component: (resolve) => require(["@/components/blog_detail/blogdetail"], resolve)
                    // component: () => import("@/components/blog_detail/blogdetail")
                },
                {
                    path: "/about",
                    component: (resolve) => require(["@/views/person/person"], resolve)
                    // component: () => import("@/views/person/person")
                },
                {
                    path: "/dashboard",
                    component: (resolve) => require(["@/views/dashboard/dashboard"], resolve)
                    // component: () => import("@/views/dashboard/dashboard")
                },
                {
                    path: "/logs",
                    component: (resolve) => require(["@/views/mylogs/mylogs"], resolve)
                    // component: () => import("@/views/mylogs/mylogs")
                },
                {
                    path: "/tools",
                    component: (resolve) => require(["@/views/mytools/mytools"], resolve)
                    // component: () => import("@/views/mytools/mytools")
                },
                {
                    path: "/task",
                    component: (resolve) => require(["@/views/mytask/mytask"], resolve)
                    // component: () => import("@/views/mytask/mytask")
                },
                {
                    path: "/help",
                    component: (resolve) => require(["@/views/myhelp/myhelp"], resolve)
                    // component: () => import("@/views/myhelp/myhelp")
                },
            ]
        },
        {
            path: '/login',
            name: 'Login',
            component: (resolve) => require(["@/views/login/login"], resolve)
            // component: () => import("@/views/login/login"),
        },
        // {
        //     path: '/test',
        //     name: 'Test',
        //     component: (resolve) => require(["@/test/test"], resolve)
        //     // component: () => import("@/test/test"),
        // },
    ]
})
