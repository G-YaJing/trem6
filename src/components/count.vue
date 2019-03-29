<template>
  <ul>
    <!-- {{Menus}} -->
     <li v-for="(item,i) in Menus" :key="i" :class="{active:indexs===i}" @click="AddClass(i)" >
      <i class="iconfont icon-star" v-if="item.icon" ></i>
      {{item.name}}
    </li>
  </ul>
</template>

<script>
export default {
  props:['Menus'],
  data () {
    return {
      indexs:0
    }
  },
  created () {
    // console.log()
  },
  methods: {
    AddClass(i){
      this.indexs = i
      this.$Bus.$emit('current',this.indexs)
    }
  }
}
</script>

<style scoped lang="scss">
  ul{
    width: 100px;
    height: 100%;
    background: #f6f8f7;
    display: flex;
    flex-direction: column;
    li{
      width: 100%;
      height: 44px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .active{
      background: #fff;
    }
  }
</style>
