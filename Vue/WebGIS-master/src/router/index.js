//路由器
import { createRouter, createWebHashHistory } from 'vue-router'

//定义路由信息
const routes = [
    //Index首页
    {
        path: "/",
        name: "Index",
        component: () =>
            import ("../views/Index.vue")
    },
    {
        path: "/login",
        name: "Login",
        component: () =>
            import ("../views/Login.vue")
    },
    {
        path: "/Home",
        name: "Home",
        component: () =>
            import ("../views/Home.vue"),
        children: [{
                path: "role",
                name: "Role",
                component: () =>
                    import ("../views/role/Role.vue")
            },
            {
                path: "course",
                name: "Course",
                component: () =>
                    import ("../views/course/Course.vue")
            },
            {
                path: "map",
                name: "Map",
                component: () =>
                    import ("../views/map/MapView.vue")
            },
            {
                path: "route",
                name: "Route",
                component: () =>
                    import ("../views/map/MapRoute.vue")
            },
            {
                path: "monitor",
                name: "Monitor",
                component: () =>
                    import ("../views/Monitor.vue")
            },
            {
                path: "supply",
                name: "Supply",
                component: () =>
                    import ("../views/supply/Supply.vue")
            }
        ]
    },
    {
        path: "/Message",
        name: "Message",
        component: () =>
            import ("../views/Message.vue")
    },
]

//创建路由器对象
export const router = createRouter({
    history: createWebHashHistory(),
    routes
})



//导入nprogress
import NProgress from "nprogress"
import "nprogress/nprogress.css"
//定义路由导航前置守卫
router.beforeEach((to, from, next) => {
        NProgress.start();
        next()
    })
    //定义路由导航后置守卫
router.afterEach((to, from) => {
    NProgress.done();
})


export default router