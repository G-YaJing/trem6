<template>
    <dl>    
        <dt>
            <img :src="item.frontImg" alt="">
        </dt>
        <dd>
            <h2>{{item.name}}</h2>
            <p><span>{{item.avgScore}}</span>月销售<span>{{item.avgPrice}}</span>单</p>
            <div><p>{{item.distance}}</p></div>
            <div><span>{{item.areaName}}</span>/<span>{{item.cateName}}</span></div>
            <div><i class="icon iconfont icon-weixin"></i>
            <i class="icon iconfont icon-zhifubao"></i></div>
        </dd>
    </dl>
</template>

<script>
export default {
    props:["item"]
}
</script>

<style>
dl{
    width: 100%;
    height: 120px;
    border-top:1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
}
dt{
    width: 100px;
    height: 100px;
    margin-top: 10px;
    margin-right: 10px;
}
dt img{
    width: 100%;
    height: 100%;
}
dd{
    flex: 1;
}
dd h2{
    font-weight: normal;
    font-size: 16px;
}
</style>
