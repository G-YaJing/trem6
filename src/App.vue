<template>
    <div class="warp">
        <header>
          <i class="icon iconfont icon-xiangzuo"></i>
            <input type="text" class="inp" placeholder="输入商家名称">
            <i class="icon iconfont icon-wode-xuanzhong"></i>
        </header>
        <section>
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
                  <span>智能排序</span>
                  <i class="icon iconfont icon-triangle-down"></i>
                </div>
                <div class="navshop">
                  <span>筛选</span>
                  <i class="icon iconfont icon-triangle-down"></i>
                </div>
            </div>
            <div class="content">
              <itemList v-for="(item,i) in dataList" :key="i" :options="item"></itemList>
                <!-- <dl>
                    <dt>
                      <img src="" alt="">
                    </dt>
                    <dd>
                      <p>蓝钻美食自助·海鲜自助火锅</p>
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
                </dl> -->
            </div>
        </section>
    </div>
</template>

<script>
import itemList from "./components/index.vue"
export default {
  data(){
   return{
      dataList:[]
   }
  },
    created(){
      this.$ajax("/api/getList").then(data=>{
           this.dataList = data.data[0].data.poiList.poiInfos;
           console.log(this.dataList)
      })
    },
    components:{
      itemList
    }
}
</script>

<style>

</style>

