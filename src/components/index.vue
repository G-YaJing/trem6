<template>
       <dl>
        
                    <dt>
                      <img :src="options.frontImg" alt="">
                    </dt>
                    <dd>
                      <p class="size">{{options.areaName}}</p>

                      <div class="price">
                        <span>￥114/人</span>
                        <span>鲁谷</span>
                      </div>
                      <div class="shuoming">
                        <span>综合自助</span>
                        <span>鲁谷美食第1名</span>
                        <span>回头客多</span>
                        <span>牛排不错</span>
                        <span>扇贝</span>
                      </div>
                    </dd>
                </dl>
</template>

<script>
export default {
    props:['options']
}
</script>

<style>

</style>
