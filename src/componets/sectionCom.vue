<template>
  <footer>
    <ul>
      <li v-for="(item,index) in footerList" :key="index">
        <span>{{item.title}}</span>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      // 底部图标项
      footerList: [
        {
          icon: "",
          title: "首页"
        },
        {
          icon: "",
          title: "分类"
        },
        {
          icon: "",
          title: "宠味圈"
        },
        {
          icon: "",
          title: "购物车"
        },
        {
          icon: "",
          title: "我的"
        }
      ]
    };
  }
};
</script>

<style scoped>
footer {
  background: #e6e6e6;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-around;
  color: #6d6c6c;
}
li {
  height: 60px;
  line-height: 60px;
}
</style>
