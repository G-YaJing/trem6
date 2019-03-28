<template>
      <div class="nav">
                <div class="navshop">
                  <span>全部项目</span>
                  <i class="icon iconfont icon-triangle-down"></i>
                </div>
                <div class="navshop">
                  <span>附件商家</span>
                  <i class="icon iconfont icon-triangle-down"></i>
                </div>
                <div class="navshop">
                  <span  v-on:click="btn">智能排序</span>
                  <i class="icon iconfont icon-triangle-down"></i>
                </div>
                <div class="navshop">
                  <span >筛选</span>
                  <i class="icon iconfont icon-triangle-down"></i>
                </div>
            </div>
</template>

<script>

export default {
   props:['list'],
   methods:{//排序
      btn:function(){
      this.list.sort((a,b)=>{
        return a.avgPrice-b.avgPrice;
      })
      }
    },
}
</script>

<style>
  .nav{
      width: 100%;
      height: 50px;
      display: flex;
      border-bottom: 1px solid #ccc;
      position: fixed;
      top:48px;
      z-index: 9999px;
      background: #fff;
    }
</style>
