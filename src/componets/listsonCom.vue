<template>
   <div class>
  
    <!-- 产品列表小组件 -->
    <dl>
      <dt>
        <input type="checkbox" v-model="options.checked">
      </dt>
      <dd>
        <img :src="'./src/images/'+options.pic" alt>
        <p>
          <button @click="options.count++">+</button>
          <input type="text" style="width:80px" v-model="options.count">
          <button @click="options.count--">-</button>
        </p>
      </dd>
      <dd>
        <p class="title" v-text="options.title"></p>
        <p class="weight">{{options.weight}}</p>
        <p class="info">
          <span v-for="(i,index) in options.description" :key="index">{{i}}</span>
         
        </p>
        <p class="price">￥{{options.price}}</p>
      </dd>
    </dl>
  </div>
</template>
<script>
export default {
 props:['options']
}
</script>

<style scoped>

dl {
  padding: 10px;
  align-items: center;
  margin: 0;
  border-bottom: 1px solid red;
  display: flex;
  justify-content: space-around;
}
dt{
    width:40px;
}
dd{
    flex:1;
    margin: 0
}
</style>
