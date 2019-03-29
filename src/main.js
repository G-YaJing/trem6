// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/icon/iconfont.js'
import '../static/icon/iconfont.css'
Vue.config.productionTip = false
Vue.component('Headers', () =>
    import ('./components/header.vue'))
Vue.component('Navs', () =>
    import ('./components/navs.vue'))
Vue.component('Content', () =>
    import ('./components/countent.vue'))
Vue.component('Footer', () =>
    import ('./components/footer.vue'))
Vue.component('Mork', () =>
    import ('./components/mask.vue'))
Vue.prototype.$Bus = new Vue()
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})