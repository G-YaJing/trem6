<template>
    <nav>
        <ul>
            <li v-for="(item,index) in navList" :key="index" @click="itemFn(item.id)" :class="{active:i===item.id}">{{item.title}}<span :class="['iconfont',i==item.id?'icon-unfold':'icon-packup']"></span></li>
        </ul>
    </nav>
</template>

<script>
export default {
    data(){
        return{
            i:null,//存放id
            navList:[
                {"title":"全部类目","id":"0"},
                {"title":"附近商家","id":"1"},
                {"title":"星级排序","id":"2"},
                {"title":"价格排序","id":"3"}
            ]
        }
    },
    props:["opData"],
    methods:{
        //实现点击   样式切换，触发父组件排序
        itemFn(id){
            this.$emit('sortEvent',id);
            this.i=id;
        }
    }
}
</script>

<style>
nav{
    height: 40px;
    width: 100%;
    border-bottom:1px solid #ccc;
}
nav ul{
    display: flex;
    line-height: 40px;
}
nav ul li{
    width: 25%;
    text-align: center
}
.active{
    color:red;
}
</style>
