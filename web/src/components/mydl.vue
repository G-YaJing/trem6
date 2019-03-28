<template>
    <div class="box">
        <div class="alldiv">全选<p class="all" :class="{active:allclick}" @click="clickall"></p></div>
        <div v-for="(item,i) in alldata||list"
        :key="i">
        <span class="spans" @click="readerclick(i)" :class="{active:item.open}"></span>
        <dldl 
        :img="item.img"
        :info="item.info"
        :price="item.price"
        :id="item.id"
        :title="item.title"
        :open="item.open"
        ></dldl>
        </div>
        <div>总价:<b>{{list1}}</b>数量:<b>{{sumCount}}</b></div>
    </div>
</template>

<script>
import dldl from "./dldl.vue";
export default {
    props:["list"],
    data(){
        return{
            index:0,
            allclick:false,
            data:[],
            sumNum:0,
            sumCount:0

        }
    },
    computed:{
        list1(){
            if(this.data.length>0){
                 let count=0;
                console.log(this.data)
                this.data&&this.data.forEach(item=>{
                    console.log(item.open);
                    if(item.open){
                        count+=item.price*item.count;
                    }
                })
                return count;
            }
        },
        alldata(){
            if(this.list.length>0){
               
                return this.list;
            }
        }
    },
    created(){
    //    this.list.forEach(item=>{
    //         // this.$set(item,"open",true)
    //  })
      this.$bus.$on("addnum",(res)=>{
          let {id}=res;
        let obj=this.alldata.findIndex(item=>{
           return item.id==id
        })
       if(obj==-1){
           this.data.push(res)
       }else{
            this.data.splice(obj,1,res)
       }
        // this.sumCount=this.data.reduce((p,n)=>p+n.count,0);
        // this.sumNum=this.data.reduce((p,n)=>p+n.count*n.price,0);
      })
    },
    components:{
        dldl
    },
    methods:{
        readerclick(i){
           //单选
           if(this.data.length>0){
               this.data[i].open=!this.data[i].open;
                this.allclick=this.list.every(item=>item.open);
               this.alldata[i].open=this.data[i].open
             
           }
            let nusm=0;
            this.data&&this.data.forEach(item=>{
                if(item.open){
                    nusm+=item.price*item.count;
                }
            })
            console.log(nusm);
        }, 
        clickall(){
            // 全选
            this.allclick=!this.allclick;
            this.list.forEach(item=>{
                item.open=this.allclick;
            })
            this.reduceNum();
        },
        reduceNum(){
            let num=0;
            this.data.forEach(item=>{ 
                console.log(item.open);
               if(item.open){
                   num+=item.price*item.count
               }
            })
            console.log(num)
            this.sumNum=num;
            
        }
    }

}
</script>

<style>
    .box{
        margin-top: 10px;
    }
    .box span{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 1px solid #ccc;
        display: block;
    }
    .active{
        color: yellow;
        background: red;
    }
    img{
        width: 80px;height: 80px;;
    }

    .all{
         width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 1px solid #ccc;
        display: inline-block;
    }
</style>
