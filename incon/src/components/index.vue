<template>
    <div class="wrap">
        <myheader :back="false">
            <span>web前端工程师</span>
            <router-link to="/search">筛选</router-link>
        </myheader>
        <main>
            <ul>
                <li @click="datasum">综合排序<i class="icon iconfont icon-xiangxia"></i></li>
                <li @click="sort1" :class="{active:open}">升序 <i :class="['icon','open=false?icon-xiangxia:icon-QQ']"></i></li>
                <li @click="sort2" :class="{active:ind}">降序<i class="icon iconfont icon-xiangxia"></i></li>
            </ul>
            <div>
                <input type="text" placeholder="请输入要搜索的东西" v-model="text" @keyup.enter="change">
            </div>
            <mydl v-for="(item,i) in list"
            :key="i"
            :item="item"
            :id="item.poiid"></mydl>
        </main>
        <footer>

        </footer>
    </div>
</template>

<script>
import mydl from "./mydl.vue"
export default {
    data(){
        return{
            list:[],
            open:false,
            ind:false,
            text:""
        }
    },
    created(){
        this.datasum();
    },
    components:{
        mydl
    },
    methods:{
        datasum(){
            this.$ajax.get("/api/list").then(res=>{
                this.list=res.data[0].data.poiList.poiInfos;
              console.log(this.list);
            })
        },
        sort1(){
          let sortnum=this.list.sort((a,b)=>{
              return  a.avgPrice-b.avgPrice
            })
            this.open=!this.open
        },
         sort2(){
          let sortnum=this.list.sort((a,b)=>{
              return  b.avgPrice-a.avgPrice
            })
           this.ind=!this.ind
        },
        change(){
            this.$ajax.post("/api/post",{
                title:this.text
            }).then(res=>{
               this.list=res.data;
            })
        }
    }
}
</script>

<style>
.active{
    color: skyblue;
}
</style>
