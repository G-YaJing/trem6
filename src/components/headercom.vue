<template>
    <header>
        <slot name="left"></slot>
        <input type="text">
        <span>搜索</span>
    </header>
</template>

<script>
export default {

}
</script>

<style scoped>
    header{
        height: 50px;
        width: 100%;
        background:Red;
        line-height: 50px;
        font-size:20px;
        display: flex;
    }
    header input{
        flex:1;
        height: 30px;
        margin-top: 8px;
        margin-left: 2px;
    }
    header i{
        width: 40px;
        text-align: center;
        font-size:30px;
    }
    header span{
        width: 50px;
        text-align: center
    }
</style>
