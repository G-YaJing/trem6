<template>
  <div class="listcon">
      <div class="dx">
        <p>
          <input type="checkbox">多选
        </p>
      </div>
      <listcom v-for="(item,index) in dataList" :key="index" :options="item"></listcom>
      <div class="sumPrice">
        <p>
          <span>总价:</span>
        </p>
      </div>
  </div>
    
</template>

<script>
import listcom from "./components/listCom.vue";
export default {
      data() {
    return {
      dataList: [
        {
          check: false,
          images: "pic.jpg",
          count: 0,
          title: "鸡翅狗粮",
          xqfood: ["鸡肉味", "狗肉味"],
          price: 120
        },
        {
          check: false,
          images: "pic.jpg",
          count: 0,
          title: "鸡翅狗粮",
          xqfood: ["鸡肉味", "狗肉味"],
          price: 120
        },
      ]
    };
  },
  components:{listcom}
}
</script>

<style>

</style>
