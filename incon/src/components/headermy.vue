<template>
    <header>
        <span  v-if="back" @click="$router.back()"><i class="icon iconfont icon-zuojiantou-01"></i></span>
        <slot></slot>
    </header>
</template>

<script>
export default {
    props:{
        back:{
            type:Boolean,
            default:true
        }
    }
}
</script>

<style>
header{
    width: 100%;
    height: 45px;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
