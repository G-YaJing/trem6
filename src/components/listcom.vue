<template>
    <section>
        <listcon v-for="(item,index) in list" :key="index" :options="item"></listcon>
    </section>
</template>

<script>
import listcon from "../common.vue";
export default {
    data(){
        return{
            list:[{
                img:"123.jpg",
                title:"yiyanxuan",
                add:"wudaokou",
                zt:"xiuxizhong"
            },{
                img:"123.jpg",
                title:"yangziyuan",
                add:"shangdi",
                zt:"hahaha"
            },{
                img:"123.jpg",
                title:"zhaoshaokang",
                add:"xierqi",
                zt:"heiheihei"
            }]
        }
    },
    components:{
        listcon
    }
}
</script>

<style>
section {
    flex:1;
}
section dl{
    display: flex;
}
section dl dd{
    display: block;
}
    section dl dt img{
        height: 100px;
        width: 100px;
    }
</style>
