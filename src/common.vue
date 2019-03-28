<template>
        <dl>
            <dt><img :src="options.frontImg" alt=""></dt>
            <dd>
                <p><span class="title">{{options.name}}</span></p>
                <p><span class="star">{{options.avgScore}}星</span><span class="price">￥{{options.avgPrice}}/人</span><span class="address">{{options.areaName}}</span><span class="limit">{{options.distance}}</span></p>
                <p><span class="foods">{{options.cateName}}</span></p>
                <ul>
                    <li v-for="(ite,ind) in options.maidan" :key="ind">
                        <img :src="ite.icon" alt=""><span>{{ite.content}}</span>
                    </li>
                </ul>
            </dd>
        </dl>
</template>

<script>
export default {
    props:["options"]
}
</script>

<style>
ul li img{
    width: 15px;
    height: 15px;
}
</style>
