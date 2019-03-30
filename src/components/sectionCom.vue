<template>
  <div class="content">
    <div class="left">
      <ul>
          <mnue v-for="(item,i) in data.menu" :key="i"  :item="item"></mnue>
      </ul>
    </div>
    <div class="right">    
     
       <dl>
        <dt>
          <img src="../img/img2.jpg" alt>
        </dt>
        <dd>
          蒜香拌+原味
          <p>9块肌肉+9块鸡肉</p>
          <p>
            月供2
            <span>赞0</span>
          </p>
          <p>
            <b class="yanse">80￥</b>
            <button class="btn">+</button>
          </p>
        </dd>
      </dl>
        <dl>
        <dt>
          <img src="../img/img2.jpg" alt>
        </dt>
        <dd>
          蒜香拌+原味
          <p>9块肌肉+9块鸡肉</p>
          <p>
            月供2
            <span>赞0</span>
          </p>
          <p>
            <b class="yanse">80￥</b>
            <button class="btn">+</button>
          </p>
        </dd>
      </dl>
        <dl>
        <dt>
          <img src="../img/img2.jpg" alt>
        </dt>
        <dd>
          蒜香拌+原味
          <p>9块肌肉+9块鸡肉</p>
          <p>
            月供2
            <span>赞0</span>
          </p>
          <p>
            <b class="yanse">80￥</b>
            <button class="btn">+</button>
          </p>
        </dd>
      </dl>
      
    </div>
    
  </div>
  
</template>

<script>
import mnue from "./mnue.vue"
import data from "../menu.json"

export default {
    data(){
        return {
            data
        }
    },
    components:{
        mnue
    }
};
</script>

<style>
</style>
