//前端路由规则
import vue from 'vue'
import Router from 'vue-router'
import main from './components/main'
import show from './components/show';

vue.use(Router)
var router = new Router({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: '/index'
        }, {
            path: '/index',
            component: main
        },
        {
            path: '/list',
            component: show
        }
    ]
})

export default router