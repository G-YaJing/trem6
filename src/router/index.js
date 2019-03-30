import Vue from 'vue'
import Router from 'vue-router'
import listercom from '@/components/listerCom'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'listercom',
        component: listercom,

    }]
})