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
                },
                {
                    path: "/createblog",
                    component: (resolve) => require(["@/components/blog_create/blogcreate"], resolve)
                },
                {
                    path: "/detailblog",
                    component: (resolve) => require(["@/components/blog_detail/blogdetail"], resolve)
                },
                {
                    path: "/about",
                    component: (resolve) => require(["@/views/myabout/myabout"], resolve)
                },
                {
                    path: "/timeline",
                    component: (resolve) => require(["@/views/mytimeline/mytimeline"], resolve)
                },
                {
                    path: "/cloudword",
                    component: (resolve) => require(["@/views/mycloudword/mycloudword"], resolve)
                },
                {
                    path: "/dashboard",
                    component: (resolve) => require(["@/views/dashboard/dashboard"], resolve)
                },
                {
                    path: "/logs",
                    component: (resolve) => require(["@/views/mylogs/mylogs"], resolve)
                },
                {
                    path: "/tools",
                    component: (resolve) => require(["@/views/mytools/mytools"], resolve)
                },
                {
                    path: "/task",
                    component: (resolve) => require(["@/views/mytask/mytask"], resolve)
                },
                {
                    path: "/help",
                    component: (resolve) => require(["@/views/myhelp/myhelp"], resolve)
                },
            ]
        },
        {
            path: '/login',
            name: 'Login',
            component: (resolve) => require(["@/views/login/login"], resolve)
        },
        {
            path: '/test',
            name: 'Test',
            component: (resolve) => require(["@/test/test"], resolve)
        },
    ]
})
