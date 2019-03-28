<template>
  <div class="wrap">
    <main>
       
        <mydl :list=list></mydl>
    </main>
  </div>
</template>

<script>
import mydl from "./mydl.vue";
export default {
 data(){
   return{
     list:[{
       "img":"1.jpg",
        "title":"辣子鸡",
        "price":"120",
        "info":"一袋装1kg",
        "id":0,
        "open":false
      
     },{
       "img":"2.jpg",
        "title":"狗粮",
        "price":"180",
        "info":"买二赠一",
        "id":1,
        "open":false
      
     }]
   }
 },
 components:{
   mydl
 },
 methods:{

 }
}
</script>

<style>

</style>
