<template>
    <footer>
        <ul>
            <li v-for="(item,index) in dataList" :key="index">{{item.title}}</li>
        </ul>
    </footer>
</template>

<script>
export default {
    data(){
        return{
            dataList:[
                {"title":"首页"},
                {"title":"发现"},
                {"title":"添加"},
                {"title":"购物车"},
                {"title":"我的"}
            ]
        }
    }
}
</script>

<style scoped>
footer{
  height: 50px;
  width: 100%;
  background:red;
}
footer ul{
  display: flex;
  line-height: 50px;
}
footer ul li{
  width: 20%;
  text-align: center
}
</style>
