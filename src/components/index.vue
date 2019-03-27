<template>
    <dl>
        <dt>
            <img :src="options.frontImg" alt="">
        </dt>
        <dd>
            <p>{{options.name}}</p>
            <div class="price">
                <span>￥{{options.avgPrice}}/人</span>
                <span>{{options.areaName}}</span>
            </div>
            <div class="shuoming">
                <span>{{options.cateName}}</span>
                <!-- <span>鲁谷美食第1名</span>
                <span>回头客多</span>
                <span>牛排不错</span>
                <span>扇贝</span> -->
            </div>
        </dd>
    </dl>
</template>

<script>
export default {
    props:["options"]
}
</script>

<style>

</style>
