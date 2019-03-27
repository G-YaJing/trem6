<template>
    <div class="wrap">
        <myheader :back="false">
            <span>web前端工程师</span>
            <router-link to="/search">筛选</router-link>
        </myheader>
        <main>
            <ul>
                <li @click="datasum">综合排序</li>
                <li @click="sort1">升序</li>
                <li @click="sort2">降序</li>
            </ul>
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
            list:[]
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
            this.$ajax("/api/list").then(res=>{
                this.list=res.data[0].data.poiList.poiInfos;
            })
        },
        sort1(){
          let sortnum=this.list.sort((a,b)=>{
              return  a.avgPrice-b.avgPrice
            })
        },
         sort2(){
          let sortnum=this.list.sort((a,b)=>{
              return  b.avgPrice-a.avgPrice
            })
        }
    }
}
</script>

<style>

</style>
