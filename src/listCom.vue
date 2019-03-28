<template>
      <div style="flex: 1">
    
        <div class="checkall">{{checkAll}}<label><input type="checkbox" v-model="checkAll">全选</label></div>
       
        <listsoncom v-for="item in shopList" :key="item.id" :options="item"></listsoncom>
        <div class="totalfooter">
            <p style="flex:6">合计：￥{{totalPrice}}</p>
            <p style="flex:4;background:red">结算(1)</p>
        </div>
    </div>
</template>

<script>
import listsoncom from './componets/listsonCom.vue'
export default {
  data(){
        return{
            checkAll:false,
            shopList:[{
                checked:false,
                id:0,
                pic:'pic.png',
                price:120,
                count:0,
                title:'亚美特 鸡肉蔬菜',
                weight:'150g/袋',
                description:['鸡肉味','大型犬粮']
            },{
                checked:false,
                id:1,
                pic:'pic.png',
                price:180,
                count:0,
                title:'鸡翅膀',
                weight:'150g/袋',
                description:['鸡肉味','大型犬粮']
            }]
        }
    },
    watch:{
        checkAll(newval,oldval){
         
            this.shopList.forEach((item)=>{
                item.checked=newval
            })
        },
        shopList:{
            handler:function(newval,oldval){
            
              this.checkAll=  newval.every(item=>item.checked===true)
            },
            deep:true
        }
    },
    computed:{
    
        totalPrice(){
            return this.shopList.reduce((total,current)=>{
                if(current.checked){
                    total=total+current.price*current.count
                }
                return total
            },0)
        },
       
    },
    components:{listsoncom}
}
</script>

<style>

</style>
