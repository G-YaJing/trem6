import Vue from "vue";
import headercom from "./components/headerCom.vue";
import footercom from "./components/footerCom.vue";
import listcom from "./components/listCom.vue";
import listcontent from "./listcontent.vue";
import "@css/style";
import "@css/base";
new Vue({
    el: "#app",
    data: {},
    computed: {},
    methods: {},
    components: { headercom, footercom, listcom }
})