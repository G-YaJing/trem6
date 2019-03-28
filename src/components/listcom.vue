<template>
    <section>
        <listcon v-for="(item,index) in opData.data" :key="index" :options="item"></listcon>
    </section>
</template>

<script>
import listcon from "../common.vue";
export default {
    components:{
        listcon
    },
    props:["opData"]
}
</script>

<style>
section{
    flex:1;
    /* height: 500px; */
    overflow-y: scroll
}
section dl{
    display: flex;
    margin-top: 10px;
}
section dl dd{
    display: block;
}
    section dl dt img{
        height: 100px;
        width: 100px;
    }
</style>
