<template>
       <dl>
            <dt><img :src="require('../img/'+img)" alt=""></dt>
            <dd>
                <h2>{{title}}</h2>
                <p>{{info}}</p>
                <p>￥{{price}}</p>
                <div class="sumbtn">
                    <button @click="reduce">-</button>
                    <p>{{count}}</p>
                    <button @click="add">+</button>
                </div>
            </dd>
        </dl>
</template>

<script>
import btn from "./btn.vue";
export default {
    props:["title","info","price","id","img","open"],
    data(){
        return{
            count:0
        }
    },
    methods:{
        reduce(){
           if(this.count>=1){
               this.count--;
               this.setnum();
           }
        },
        add(){
            this.count++;
            this.setnum();
        },
        setnum(){
            this.$bus.$emit("addnum",{
                count:this.count,
                title:this.title,
                price:this.price,
                info:this.info,
                img:this.img,
                id:this.id,
                open:this.open
            })
        }
    }
}
</script>

<style>
.sumbtn{
    display: flex;
}
</style>
