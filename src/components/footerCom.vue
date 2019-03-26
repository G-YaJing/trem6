<template>
    <footer>
        <ul>
            <li v-for="(item,index) in footList" :key="index">
                {{item.title}}
            </li>
        </ul>
    </footer>
</template>

<script>
export default {
    data(){
        return {
            footList:[
                {"icon":"","title":"首页"},
                {"icon":"","title":"首页"},
                {"icon":"","title":"首页"},
                {"icon":"","title":"首页"},
                {"icon":"","title":"首页"}
            ]
        }
    }
}
</script>

<style scoped>
    footer{
        background:green;
    }
    ul{
        display: flex;
        height: 60px;
        width: 100%;
    }
    ul li{
        width: 20%;
        list-style: none;
        text-align: center;
        line-height: 60px;
    }
</style>
