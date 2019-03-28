<template>
  <div id="app">
    <Headercom @searchEvent="searchFn">
        <i slot="left" class="iconfont icon-return"></i>
    </Headercom>
    <Navcom @sortEvent="sortFn"></Navcom>
    <Listcom :opData="dataJson"></Listcom>
    <Footercom></Footercom>
    <!-- {{dataJson}} -->
  </div>
</template>

<script>
import Headercom from './components/headercom';
import Footercom from "./components/footercom";
import Listcom from "./components/listcom";
import Navcom from "./components/navcom";
// import "../data/meituan-list.json";
import dataJson from "./data/meituan-list.json";
export default {
  name: 'App',
  data(){
    return{
      dataJson
    }
  },
  components: {
    Headercom,
    Footercom,
    Listcom,
    Navcom
  },
  methods:{
    //根据nav点击的是哪一个选项，进而实现选项的排序
    sortFn(id){
      if(id==3){
        this.dataJson.data.sort((a,b)=>{
          return a.avgPrice-b.avgPrice
        })
      }else if(id==2){
        this.dataJson.data.sort((a,b)=>{
          return b.avgScore-a.avgScore
        })
      }
    },
    searchFn(txt){
      this.dataJson.data=dataJson.data;
      this.dataJson.data= this.dataJson.data.filter((item)=>{
        return item.name.indexOf(txt)!==-1
      })
    }
  }
}
</script>

<style>
*{
        padding: 0;
        margin: 0;
        list-style: none;
        text-decoration: none
    }
    html,body{
      width: 100%;
      height: 100%;
    }
    #app{
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column
    }
    Listcom{
      flex:1;
    }
</style>
