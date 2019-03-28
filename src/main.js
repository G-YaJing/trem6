import Vue from 'vue'
import headercom from './componets/headerCom.vue'
import footercom from './componets/footerCom.vue'
import listcom from './listCom.vue'
new Vue({
    el: '#app',
    components: { headercom, footercom, listcom }
})