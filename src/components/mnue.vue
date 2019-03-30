<template>
    <li @click="muneFn(item.value)">{{item.name}}</li>
</template>

<script>
export default {
    props:["item"],
    components:{
        muneFn(tit){
            this.$bus.$emit(btnEvent,tit);
        }
    }
}
</script>

<style>

</style>
