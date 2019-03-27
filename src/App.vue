<template>
    <div class="warp">
        <header>
          <i class="icon iconfont icon-xiangzuo"></i>
            <input type="text" class="inp" placeholder="输入商家名称" >
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
               <list  v-for="(item,i) in  content" :key="i" :options="item"> </list>
             <!--  <dl>
                    <dt>
                      <img src="./assets/img1.png" alt="">
                    </dt>
                    <dd>
                      <p class="size">蓝钻美食自助·海鲜自助火锅</p>
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
import "./fonts/iconfont.css"
import list from './components/index.vue'
export default {
  data(){
    return {
      content:[]
    }
  },
    created(){
      this.$axios('/api/app').then(data=>{
        this.content=data.data[0].data.poiList.poiInfos;
        console.log(this.content);
      })
    },
    components:{
      list
    }
}
</script>

<style>
    *{
      padding: 0;
      margin: 0;
      list-style: none;
      text-decoration: none;
    }
    html,body{
      width: 100%;
      height: 100%;
    }
    .warp{
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    header{
      background: rgb(238, 238, 238);
      box-sizing: border-box;
      padding: 0 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 50px;
    }
    .inp{
      width: 78%;
      height: 30px;
      border: 1px solid rgb(195, 195, 195);
      background: rgb(195, 195, 195);
      border-radius: 30px;
      outline: none;
      color: #fff;
      text-align: center;
    }
    .icon-wode-xuanzhong{
      font-size: 20px;
    }
    section{
      width: 100%;
    }
    .nav{
      width: 100%;
      height: 50px;
      display: flex;
      border-bottom: 1px solid #ccc;
    }
    .navshop{
      height: 50px;
      width: 25%;
      text-align: center;
      line-height: 50px;
    }
    .content{
      width: 100%;
  
    }
    dl {
      width: 100%;
      display: flex;
      margin-top: 10px;
    }
    dl dd{
      flex: 1;
    }
      dl dt{
      padding: 10px 10px;
    }
     dl dt img{
       width: 80px;
       height: 80px;
    }
    .size{
      font-size: px;
    }
</style>

