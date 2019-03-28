<template>
    <div class="spans">
        <span v-for="i in parseInt(avgScore)" class="quan"></span>
        <span v-if="avgScore%parseInt(avgScore)!==0" class="ban"></span>
        <span v-for="int in 5-Math.ceil(avgScore)" class="hui"></span>
    </div>
</template>

<script>
export default {
    props:["avgScore"],
    data(){
        return{
            list:5
        }
    }
}
</script>

<style>
    span{
        width: 14px;
        height: 14px;
        display: inline-block;
    }
    .quan{
        background: url("../quan.png");
        background-size: cover;
    }
    .ban{
        background: url("../ban.png");
        background-size: cover;
    }
    .hui{
        background: url("../hui.png");
        background-size: cover;
    }
</style>
